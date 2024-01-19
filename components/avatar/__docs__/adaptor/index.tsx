import React from 'react';
import { Avatar } from '@alifd/next';
import { Types } from '@alifd/adaptor-helper';

const _propsValue = ({ size, shape, src, ...others }: any) => {
    return {
        size,
        shape,
        ...others,
    };
};

export default {
    name: 'Avatar',
    editor: () => ({
        props: [
            {
                name: 'size',
                type: Types.enum,
                options: ['small', 'medium', 'large'],
                default: 'medium',
            },
            {
                name: 'shape',
                type: Types.enum,
                options: ['circle', 'square'],
                default: 'circle',
            },
            {
                name: 'src',
                type: Types.string,
                default: '',
            },
        ],
    }),
    propsValue: _propsValue,
    adaptor: (args: any) => {
        const props = _propsValue(args);
        return <Avatar {...props} />;
    },
    content: () => ({}),
};
