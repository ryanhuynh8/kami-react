import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMarvelHeroes, showOverlay } from '../actions';
import { Input, InputGroup, InputGroupAddon, Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import { Hero } from '../components/Hero';

export class Dashboard extends Component {
    state = { limit: 20, offset: 0 };

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log('did mount');
        this.props.fetchMarvelHeroes({ limit: 20, offset: 0 });
    }

    fetchMore = pageIndex => {
        this.setState({ offset: pageIndex * 20 }, () => {
            this.props.fetchMarvelHeroes({
                limit: 20,
                offset: this.state.offset,
            });
        });
    };

    handleSearchChange = (e) => {
        this.setState({ searchTerm: e.target.value });
    };

    doSearch = () => {
        this.setState({ offset: 0 }, () => {
            this.props.fetchMarvelHeroes({
                limit: 20,
                offset: this.state.offset,
                searchTerm: this.state.searchTerm,
            });
        });
    };

    showHeroDetail = (hero) => {
        this.props.showOverlay(hero);
    };

    renderPagination() {
        return (
            <Pagination
                aria-label="Page navigation example"
                className="d-inline-block mt-3"
            >
                <PaginationItem>
                    <PaginationLink previous href="#" />
                </PaginationItem>
                {[...Array(this.props.pagesCount).keys()].map(index => (
                    <PaginationItem>
                        <PaginationLink
                            href="#"
                            onClick={() => this.fetchMore(index)}
                        >
                            {index + 1}
                        </PaginationLink>
                    </PaginationItem>
                ))}
                <PaginationItem>
                    <PaginationLink next href="#" />
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
    // pagesCount: state.marvel.pagesCount,
    pagesCount: 11,
});

const mapDispatchToProps = { fetchMarvelHeroes, showOverlay };

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Dashboard);
