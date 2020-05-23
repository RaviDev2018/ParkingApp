import React from 'react';

import BookedSpace from '../../components/ParkingDaySpace/BookedSpace/BookedSpace';
import FreeSpace from '../../components/ParkingDaySpace/FreeSpace/FreeSpace';
import FullSpace from '../../components/ParkingDaySpace/FullSpace/FullSpace';

const DaySummary = (props) => (
    <div className="text-center">
        <BookedSpace space="1"/>
        <FreeSpace space="2"/>
        <BookedSpace space="3"/>
        <FullSpace space="4"/>
        <BookedSpace space="5"/>
    </div>
);

export default DaySummary;