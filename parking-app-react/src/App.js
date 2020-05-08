import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import * as actions from './store/action/index';

import Login from './containers/Login/Login';
import UserSummary from './containers/UserSummary/UserSummary';

class App extends Component {
  componentDidMount() {
    this.props.checkAuthToken();
  }

  render() {
    let routes = (
      <Switch>
        <Route path="/" exact component={Login} />
      </Switch>
    );

    if(this.props.isLoggedIn) {
      routes = (
        <Switch>
          <Route path="/" exact component={UserSummary} />
        </Switch>
      );
    }

    return (
      <Container fluid={true} className="bg-dark text-white vh-100">
        <Row className="justify-content-md-center align-self-center align-items-center h-100 overflow-auto">
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
    isLoggedIn: state.auth.token !== ''
  };
}

const mapDispatchToProps = dispatch => {
  return {
    checkAuthToken: () => dispatch(actions.authCheckState())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
