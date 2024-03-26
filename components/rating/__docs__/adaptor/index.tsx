import React from 'react';
import { Types } from '@alifd/adaptor-helper';
import { Rating } from '@alifd/next';

export default {
    name: 'Rating',
    editor: () => ({
        props: [
            {
                name: 'type',
                type: Types.enum,
                options: ['normal', 'level'],
                default: 'normal',
            },
            {
                name: 'size',
                type: Types.enum,
                options: ['large', 'medium', 'small'],
                default: 'medium',
            },
            {
                name: 'value',
                type: Types.number,
                default: 3,
            },
        ],
    }),
    adaptor: ({ type, size, value, ...others }) => {
        return <Rating {...others} showGrade={type === 'level'} value={value} size={size} />;
    },
};
