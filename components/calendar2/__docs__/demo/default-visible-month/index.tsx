import React from 'react';
import ReactDOM from 'react-dom';
import { Calendar2 } from '@alifd/next';
import dayjs from 'dayjs';

function onSelect(value) {
    console.log(value.format('L'));
}

function onPanelChange(value, reason) {
    console.log('Visible month changed to %s from <%s>', value.format('YYYY-MM'), reason);
}

ReactDOM.render(
    <Calendar2
        onSelect={onSelect}
        defaultPanelValue={() => dayjs('2018-01', 'YYYY-MM', true)}
        onPanelChange={onPanelChange}
    />,
    mountNode
);
