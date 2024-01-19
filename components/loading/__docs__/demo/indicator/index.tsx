import React from 'react';
import ReactDOM from 'react-dom';
import { Loading } from '@alifd/next';

const indicator1 = (
    <div className="load-container load1">
        <div className="loader">loading...</div>
    </div>
);
const indicator7 = (
    <div className="load-container load7">
        <div className="loader">loading...</div>
    </div>
);

ReactDOM.render(
    <div>
        <Loading tip="default">
            <div className="demo">test</div>
        </Loading>
        <Loading indicator={indicator1}>
            <div className="demo">test</div>
        </Loading>
        <Loading indicator={indicator7}>
            <div className="demo">test</div>
        </Loading>
    </div>,
    mountNode
);
