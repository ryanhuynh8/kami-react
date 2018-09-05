import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Login extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="login" className="container">
                <div className="form">
                    abc
                </div>
            </div>
        );
    }
}

const mapStateToProps = () => ({});

export default connect(mapStateToProps, {  })(Login);
