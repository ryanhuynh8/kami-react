import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import { hideOverlay } from '../actions';

export class OverlayHeroModal extends Component {
    constructor(props) {
        super(props);
    }

    closeModal = () => {
        this.props.hideOverlay();
    };

    render() {
        const { hero } = this.props;

        if (!hero) return null;

        return (
            <div id="overlay">
                <Modal
                    isOpen={this.props.ui.showOverlay}
                    className="hero-overlay"
                >
                    <ModalHeader toggle={this.toggle}>
                        Hero information
                    </ModalHeader>
                    <ModalBody>
                        <img
                            className="hero-img"
                            src={`${hero.thumbnail.path}.${
                                hero.thumbnail.extension
                            }`}
                        />
                        <div className="description mt-4">
                            <h5>Description:</h5>
                            {/* if we got a hero to display */}
                            {hero &&
                                hero.description &&
                                hero.description !== '' &&
                                hero.description}

                            {/* else */}
                            {(!hero ||
                                hero.description ||
                                hero.description === '') &&
                                'N/A'}
                        </div>
                        <div className="urls mt-4">
                            <h5>URLs:</h5>
                            {hero.urls.map(url => (
                                <div>
                                    <a href={url.url}>{url.url}</a>
                                </div>
                            ))}
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.closeModal}>
                            Close
                        </Button>{' '}
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    ui: state.ui,
    hero: state.ui.hero,
});

export default connect(
    mapStateToProps,
    { hideOverlay },
)(OverlayHeroModal);
