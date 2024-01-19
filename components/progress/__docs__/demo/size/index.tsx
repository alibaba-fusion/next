import React from 'react';
import ReactDOM from 'react-dom';
import { Progress, Box } from '@alifd/next';

ReactDOM.render(
    <div>
        <Box direction="row" spacing={20}>
            <Progress percent={30} size="small" shape="circle" />
            <Progress percent={50} size="medium" shape="circle" />
            <Progress percent={90} size="large" shape="circle" />
        </Box>
        <br />
        <Box direction="column" spacing={20}>
            <Progress percent={30} size="small" />
            <Progress percent={50} size="medium" />
            <Progress percent={90} size="large" />
        </Box>
    </div>,
    mountNode
);
