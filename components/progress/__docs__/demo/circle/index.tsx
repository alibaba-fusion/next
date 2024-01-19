import React from 'react';
import ReactDOM from 'react-dom';
import { Progress, Icon, Box } from '@alifd/next';

ReactDOM.render(
    <Box direction="row" spacing={20}>
        <Progress percent={30} shape="circle" />
        <Progress percent={80} shape="circle" textRender={() => ''} />
        <Progress
            percent={100}
            shape="circle"
            textRender={() => <Icon type="select" size="xl" />}
        />
    </Box>,
    mountNode
);
