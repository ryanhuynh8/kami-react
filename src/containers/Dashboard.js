import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMarvelHeroes, showOverlay } from '../actions';
import { Input, InputGroup, InputGroupAddon, Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import { Hero } from '../components/Hero';

const PER_PAGE = 18;

export class Dashboard extends Component {
    state = { limit: 20, offset: 0, currentPage: 1 };

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // this.props.fetchMarvelHeroes({ limit: 20, offset: 0 });
    }

    fetchPage = page => {
        this.setState({ currentPage: page }, () => {
            this.props.fetchMarvelHeroes({
                limit: PER_PAGE,
                offset: (page - 1)*PER_PAGE,
                searchTerm: this.state.searchTerm,
            });
        });
    };

    handleSearchChange = (e) => {
        this.setState({ searchTerm: e.target.value });
    };

    doSearch = () => {
        this.fetchPage(1);
    };

    showHeroDetail = (hero) => {
        this.props.showOverlay(hero);
    };

    renderPagination() {
        console.log(Math.floor(this.state.offset / PER_PAGE));
        console.log(this.props.pagesCount);
        return (
            <Pagination
                aria-label="Page navigation example"
                className="d-inline-block mt-3"
            >
                <PaginationItem disabled={this.state.offset === 0}>
                    <PaginationLink previous href="#" onClick={() => this.fetchPage(this.state.currentPage - 1)}
                    />
                </PaginationItem>
                <PaginationItem disabled={Math.floor(this.state.offset / PER_PAGE) >= this.props.pagesCount}>
                    <PaginationLink next href="#" onClick={() => this.fetchPage(this.state.currentPage + 1)}/>
                </PaginationItem>
            </Pagination>
        );
    }

    renderHeroListing() {
        return (
            <div className="heroes-listing row">
                {this.props.heroes.map(hero => (
                    <Hero
                        heroClickedHandler={() => this.showHeroDetail(hero)}
                        name={hero.name}
                        img={`${hero.thumbnail.path}.${
                            hero.thumbnail.extension
                        }`}
                    />
                ))}
                ;
            </div>
        );
    }

    render() {
        return (
            <div id="dashboard" className="container">
                <h1>Marvel Heroes Encyclopedia</h1>

                <InputGroup className="row m-3">
                    <InputGroupAddon addonType="prepend">&#x1F50D;</InputGroupAddon>
                    <Input placeholder="Please type something to start searching" style={{ maxWidth: '100%' }} onChange={this.handleSearchChange}/>
                    <button type="button" className="btn btn-yellow ml-3" onClick={this.doSearch}>
                        Search
                    </button>
                </InputGroup>

                {this.renderHeroListing()}

                {this.renderPagination()}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    heroes: state.marvel.heroesMetaData
        ? state.marvel.heroesMetaData.results
        : [],
    pagesCount: state.marvel.pagesCount,
});

const mapDispatchToProps = { fetchMarvelHeroes, showOverlay };

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Dashboard);
