import React, { Component } from 'react';
import { Button, Card, CardBody, CardImg, CardTitle } from 'reactstrap';
import PropTypes from 'prop-types';

const cardImageStyle = {
    objectFit: 'contain',
    height: '300px',
};

export class Hero extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Card className="col-12 col-md-4 p-3">
                <CardImg top src={this.props.img} style={cardImageStyle} />
                <CardBody>
                    <CardTitle>{this.props.name}</CardTitle>
                    <button type="button" className="btn btn-yellow" onClick={this.props.heroClickedHandler}>
                        View hero detail
                    </button>
                </CardBody>
            </Card>
        );
    }
}

Hero.propTypes = {
    name: PropTypes.string,
    img: PropTypes.string,
    heroClickedHandler: PropTypes.func,
};