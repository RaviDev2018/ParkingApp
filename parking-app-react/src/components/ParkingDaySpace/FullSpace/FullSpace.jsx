import React from 'react';

import Card from 'react-bootstrap/Card';

const FullSpace = (props) => (
    <Card bg="dark" text="white" className="mt-4 pb-3 px-3 border-white" style={{minWidth: "200px"}}>
        <Card.Header className="text-uppercase font-weight-bold">Space - {props.space}</Card.Header>
        <Card.Text className="text-danger">In use</Card.Text>
    </Card>
);

export default FullSpace;