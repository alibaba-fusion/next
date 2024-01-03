import React from 'react';
import ReactDOM from 'react-dom';
import { Loading } from '@alifd/next';

ReactDOM.render(
    <div>
        <Loading tip={<span>default = large</span>}>
            <div className="demo-size">test</div>
        </Loading>
        <Loading tip="large" size="large">
            <div className="demo-size">test</div>
        </Loading>
        <Loading tip="medium" size="medium">
            <div className="demo-size">test</div>
        </Loading>
    </div>,
    mountNode
);
