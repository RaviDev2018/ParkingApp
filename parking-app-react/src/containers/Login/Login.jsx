import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../store/action/index';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

class Login extends Component {
  constructor(props, context) {
      super(props, context);

      this.state = {
          isValid: false,
          username: "",
          password: ""
      }
  }

  handleChangeUsername = (e) => {
    let validCheck = false;
    if(e.target.value.length > 0 && this.state.password.length > 0) {
      validCheck = true;
    }

    this.setState({username: e.target.value, isValid: validCheck});
  }

  handleChangePassword = (e) => {
    let validCheck = false;
    if(e.target.value.length > 0 && this.state.username.length > 0) {
      validCheck = true;
    }

    this.setState({password: e.target.value, isValid: validCheck});
  }

  handleLogin = (e) => {
    e.preventDefault();
    this.props.onLogin(this.state.username, this.state.password);
  }

  render() {
    let errorDisplay = null;
    if(this.props.loginMsg !== '') {
      errorDisplay = <Alert variant="danger" className="mt-4">{this.props.loginMsg}</Alert>;
    }

    return (
      <Form className="border rounded p-4" onSubmit={this.handleLogin}>
        <p className="h4 mb-4 text-center">Login</p>

        <Form.Group controlId="formUsername">
          <Form.Control placeholder="Username" value={this.state.username} onChange={this.handleChangeUsername} />
        </Form.Group>
        <Form.Group controlId="formPassword">
          <Form.Control type="password" placeholder="Password" value={this.state.password} onChange={this.handleChangePassword} />
        </Form.Group>

        <Button type="submit" block
            disabled={!this.state.isValid}
            variant={this.state.isValid ? "primary" : "secondary"} >
          Login
        </Button>

        {errorDisplay}
      </Form>
    );
  }
}

const mapStateToProps = state => {
  return {
      isLoggedIn: state.auth.isLoggedIn,
      loginMsg: state.auth.loginMsg
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onLogin: (username, pass) => dispatch(actions.login(username, pass))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);