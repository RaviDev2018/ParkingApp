import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Login from './containers/Login/Login';

function App() {
  return (
    <Container fluid={true}>
      <Row className="justify-content-md-center align-self-center">
        <Col md="auto">
          <Login></Login>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
