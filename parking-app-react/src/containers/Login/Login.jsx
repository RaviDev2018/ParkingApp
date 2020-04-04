import React, { Component } from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class Login extends Component {
  render() {
    return (
      <Form className="border rounded p-4">
        <p className="h4 mb-4">Login</p>

        <Form.Group controlId="formUsername">
          <Form.Control placeholder="Username" />
        </Form.Group>
        <Form.Group controlId="formPassword">
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button variant="primary" type="submit" block>
          Login
        </Button>
      </Form>
    );
  }
}

export default Login;