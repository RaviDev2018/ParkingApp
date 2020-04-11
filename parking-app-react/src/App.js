import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Login from './containers/Login/Login';

class App extends Component {
  render() {
    let routes = (
      <Switch>
        <Route path="/" exact component={Login} />
      </Switch>
    );

    if(this.props.isLoggedIn) {
      routes = (
        <p>Sucessfully logged in</p>
      );
    }

    return (
      <Container fluid={true} className="bg-dark text-white vh-100">
        <Row className="justify-content-md-center align-self-center align-items-center h-100">
          <Col md="auto">
            {routes}
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoggedIn: state.auth.isLoggedIn
  };
}

export default withRouter(connect(mapStateToProps, null)(App));
