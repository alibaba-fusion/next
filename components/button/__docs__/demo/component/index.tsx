import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Box } from '@alifd/next';

const props = {
    component: 'a' as const,
    href: 'http://www.alibaba.com',
    target: '_blank',
};

ReactDOM.render(
    <Box direction="row" spacing={20}>
        <Button {...props} type="primary">
            alibaba.com
        </Button>
        <Button {...props} type="secondary">
            alibaba.com
        </Button>
        <Button {...props} type="normal">
            alibaba.com
        </Button>
        <Button {...props} loading>
            alibaba.com loading
        </Button>
    </Box>,
    mountNode
);
