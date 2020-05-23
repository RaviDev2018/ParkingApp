import React from 'react';
import { NavLink } from 'react-router-dom';

import Card from 'react-bootstrap/Card';

const ParkingSpace = (props) => (
    <Card bg="dark" text="white" className="mt-4 pb-3 px-3 border-white" style={{minWidth: "200px", textDecoration: "none"}}
        as={NavLink} to={'/daySummary'}>
        <Card.Header className="text-uppercase font-weight-bold">{props.day}</Card.Header>
        <Card.Text className="text-danger">Fully booked</Card.Text>
    </Card>
);

export default ParkingSpace;