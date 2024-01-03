import React from 'react';
import { Paragraph } from '@alifd/next';
import { Types } from '@alifd/adaptor-helper';

export default {
    name: 'Paragraph',
    editor: () => ({
        props: [
            {
                name: 'size',
                type: Types.enum,
                options: ['medium', 'small'],
                default: 'medium',
            },
            {
                name: 'width',
                type: Types.number,
                default: 400,
            },
        ],
        data: {
            default: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
        },
    }),
    adaptor: ({ size, width, style, data, ...others }: any) => {
        return (
            <Paragraph
                {...others}
                style={{ width: width, ...style }}
                size={size}
                type={size === 'medium' ? 'long' : 'short'}
            >
                {data}
            </Paragraph>
        );
    },
};
