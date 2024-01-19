import React from 'react';
import ReactDOM from 'react-dom';
import { DatePicker } from '@alifd/next';

const { RangePicker } = DatePicker;

function footerRender() {
    return <div className="custom-footer">👍 Some useful info here</div>;
}

ReactDOM.render(
    <div>
        <DatePicker footerRender={footerRender} />
        <br />
        <br />
        <RangePicker footerRender={footerRender} />
    </div>,
    mountNode
);
