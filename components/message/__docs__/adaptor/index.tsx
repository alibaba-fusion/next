import React from 'react';
import { Message } from '@alifd/next';
import { Types } from '@alifd/adaptor-helper';

export default {
    name: 'Message',
    editor: () => ({
        props: [
            {
                name: 'level',
                label: 'Shape',
                type: Types.enum,
                options: ['inline', 'toast', 'addon'],
                default: 'inline',
            },
            {
                name: 'size',
                type: Types.enum,
                options: ['large', 'medium'],
                default: 'medium',
            },
            {
                name: 'state',
                label: 'Status',
                type: Types.enum,
                options: ['success', 'warning', 'error', 'notice', 'help', 'loading'],
                default: 'success',
            },
            {
                name: 'closable',
                label: 'Close Included',
                type: Types.bool,
                default: false,
            },
            {
                name: 'width',
                type: Types.number,
                default: 400,
            },
            {
                name: 'title',
                type: Types.string,
                default: 'Title',
            },
        ],
        data: {
            default: 'This item already has the label "travel", you can add a new label.',
        },
    }),
    adaptor: ({ level, size, state, closable, width, title, data, style, ...others }) => {
        return (
            <Message
                {...others}
                shape={level}
                style={{ width: width || '', ...style }}
                closeable={closable}
                type={state}
                size={size}
                title={title}
            >
                {data}
            </Message>
        );
    },
};
