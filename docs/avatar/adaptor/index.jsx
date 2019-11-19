import React from 'react';
import { Avatar } from '@alifd/next';
import { Types } from '@alifd/adaptor-helper';

export default {
    name: 'Avatar',
    editor: () => ({

    }),
    adaptor: ({ level, count, ...others }) => {
        return <Avatar {...others}/>;
    },
    content: () => ({
    })
};
