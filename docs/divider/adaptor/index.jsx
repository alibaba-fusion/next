import React from 'react';
import { Divider } from '@alifd/next';
import { Types } from '@alifd/adaptor-helper';

export default {
    name: 'Divider',
    editor: () => ({

    }),
    adaptor: ({ level, count, ...others }) => {
        return <Divider {...others}/>;
    },
    content: () => ({
    })
};
