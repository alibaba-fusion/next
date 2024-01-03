import React from 'react';
import ReactDOM from 'react-dom';
import { Box, Icon } from '@alifd/next';

ReactDOM.render(
    <Box spacing={20} direction="row">
        <Icon type="atm" />
        <Icon type="smile" />
        <Icon type="success" />
        <Icon type="loading" />
    </Box>,
    mountNode
);
