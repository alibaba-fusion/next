import React from 'react';
import ReactDOM from 'react-dom';
import { Rating } from '@alifd/next';

ReactDOM.render(
    <div>
        <div className="rating-clear-wrapper">
            <Rating defaultValue={3} allowClear />
            <span className="rating-text">allowClear: true</span>
        </div>
        <br />
        <div className="rating-clear-wrapper">
            <Rating defaultValue={3} />
            <span className="rating-text">allowClear: false</span>
        </div>
    </div>,
    mountNode
);
