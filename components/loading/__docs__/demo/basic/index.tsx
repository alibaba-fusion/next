import React from 'react';
import ReactDOM from 'react-dom';
import { Loading } from '@alifd/next';

ReactDOM.render(
    <div>
        <Loading tip="加载中...">
            <div className="demo-basic">basic usage</div>
        </Loading>
    </div>,
    mountNode
);
