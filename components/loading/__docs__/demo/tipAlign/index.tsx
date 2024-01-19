import React from 'react';
import ReactDOM from 'react-dom';
import { Loading } from '@alifd/next';

ReactDOM.render(
    <div>
        <Loading tip={<span>default=bottom</span>}>
            <div className="demo-tip">default</div>
        </Loading>
        <Loading tip="right" tipAlign="right">
            <div className="demo-tip">right</div>
        </Loading>
        <Loading tip="bottom" tipAlign="bottom">
            <div className="demo-tip">bottom</div>
        </Loading>
    </div>,
    mountNode
);
