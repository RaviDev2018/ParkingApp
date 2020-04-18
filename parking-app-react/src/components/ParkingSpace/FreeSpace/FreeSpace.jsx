import React from 'react';

import Card from 'react-bootstrap/Card';
import Button from'react-bootstrap/Button';

const ParkingSpace = (props) => (
    <Card bg="dark" text="white" className="mt-4 pb-3 px-3 border-white" style={{minWidth: "200px"}}>
        <Card.Header className="text-uppercase font-weight-bold">{props.day}</Card.Header>
        <Card.Text className="text-success">No of Spaces - {props.freeSpaces}</Card.Text>
        <Button variant="primary">Book parking</Button>
    </Card>
);

export default ParkingSpace;