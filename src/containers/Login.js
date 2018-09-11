import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, FormGroup, Input, Label } from 'reactstrap';

export class Login extends Component {
    state = { email: 'foo', password: 'bar' };
    
    constructor(props) {
        super(props);
    }

    handleEmailChange = (e) => {
        this.setState({ email: e.target.value });
    };

    handlePasswordChange = (e) => {
        this.setState({ password: e.target.value });
    };

    login = () => {
        const { email, password } = this.state;
        this.props.login({ email, password });
    };

    render() {
        return (
            <div id="login" className="container">
                <h1>Please login to continue using the application</h1>
                <FormGroup>
                    <Label for="exampleEmail">Email</Label>
                    <Input
                        type="email"
                        name="email"
                        id="exampleEmail"
                        placeholder="Your email address"
                        value={this.state.email}
                        onChange={this.handleEmailChange}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="examplePassword">Password</Label>
                    <Input
                        type="password"
                        name="password"
                        id="examplePassword"
                        placeholder="Your password"
                        value={this.state.password}
                        onChange={this.handlePasswordChange}
                    />
                </FormGroup>
                <Button className="btn btn-yellow" onClick={this.login}>Login</Button>
            </div>
        );
    }
}

const mapStateToProps = () => ({});

export default connect(
    mapStateToProps,
    {},
)(Login);
