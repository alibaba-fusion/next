import React from 'react';
import { Avatar } from '@alifd/next';
import { Types } from '@alifd/adaptor-helper';

export default {
    name: 'Avatar',
    editor: () => ({
        props: [{
            name: 'size',
            type: Types.enum,
            options: ['small', 'medium', 'large'],
            default: 'medium'
        },
        {
            name: 'shape',
            type: Types.enum,
            options: ['circle', 'square'],
            default: 'circle'
        },
        {
            name: 'src',
            type: Types.string,
            default: ''
        }],
    }),
    adaptor: ({ size, shape, src, ...others }) => {
        return <Avatar size={size} shape={shape} src={src} {...others}/>;
    },
    content: () => ({
    })
};
