import React from 'react';
import { Box } from '@alifd/next';
import { Types } from '@alifd/adaptor-helper';

export default {
    name: 'Box',
    editor: () => ({

    }),
    adaptor: ({ level, count, ...others }) => {
        return <Box {...others}/>;
    },
    content: () => ({
    })
};
