import React from 'react';
import ReactDOM from 'react-dom';
import { Progress } from '@alifd/next';

ReactDOM.render(
    <div>
        <Progress percent={30} textRender={() => ''} />
        <Progress percent={50} />
        <Progress percent={50} hasBorder size="large" />
    </div>,
    mountNode
);
