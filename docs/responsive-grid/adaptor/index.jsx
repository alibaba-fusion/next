import React from 'react';
import { ResponsiveGrid } from '@alifd/next';
import { Types } from '@alifd/adaptor-helper';

export default {
    name: 'ResponsiveGrid',
    editor: () => ({

    }),
    adaptor: ({ level, count, ...others }) => {
        return <ResponsiveGrid {...others}/>;
    },
    content: () => ({
    })
};
