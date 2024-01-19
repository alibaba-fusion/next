import React from 'react';
import ReactDOM from 'react-dom';
import { Progress } from '@alifd/next';

ReactDOM.render(
    <div className="">
        <Progress percent={20} shape="circle" state="normal" className="custom-progress" />
        <Progress percent={95} shape="circle" state="success" className="custom-progress" />
        <Progress percent={95} shape="circle" state="error" className="custom-progress" />
    </div>,
    mountNode
);
