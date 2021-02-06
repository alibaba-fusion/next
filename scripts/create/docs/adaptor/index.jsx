import React from 'react';
import { {{ name }} } from '@alifd/next';
import { Types } from '@alifd/adaptor-helper';

export default {
    name: '{{ name }}',
    editor: () => ({

    }),
    adaptor: ({ level, count, ...others }) => {
        return <{{ name }} {...others}/>;
    },
    content: () => ({
    })
};
