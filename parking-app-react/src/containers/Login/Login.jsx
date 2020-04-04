import React, { Component } from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

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

  render() {
    return (
      <Form className="border rounded p-4">
        <p className="h4 mb-4">Login</p>

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
      </Form>
    );
  }
}

export default Login;