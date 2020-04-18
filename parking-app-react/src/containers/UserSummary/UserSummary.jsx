import React from 'react';

import BookedSpace from '../../components/ParkingSpace/BookedSpace/BookedSpace';
import FreeSpace from '../../components/ParkingSpace/FreeSpace/FreeSpace';
import FullSpace from '../../components/ParkingSpace/FullSpace/FullSpace';

const UserSummary = (props) => (
    <div className="text-center">
        <BookedSpace day="monday" bookedSpace="1"/>
        <FreeSpace day="tuesday" freeSpaces="10"/>
        <BookedSpace day="wednesday" bookedSpace="2"/>
        <FullSpace day="thursday"/>
        <BookedSpace day="friday" bookedSpace="3"/>
    </div>
);

export default UserSummary;