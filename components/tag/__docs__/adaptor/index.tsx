import React from 'react';
import { Types } from '@alifd/adaptor-helper';
import { Tag } from '@alifd/next';

export default {
    name: 'Tag',
    shape: [
        {
            label: 'Default',
            value: 'default',
        },
        {
            label: 'Selectable',
            value: 'selectable',
        },
        {
            label: 'Deletable',
            value: 'deletable',
        },
    ],
    editor: shape => ({
        props: [
            {
                name: 'level',
                type: Types.enum,
                options: ['normal', 'primary'],
                default: 'normal',
            },
            {
                name: 'size',
                type: Types.enum,
                options: ['large', 'medium', 'small'],
            },
            {
                name: 'state',
                label: 'Status',
                type: Types.enum,
                options: [
                    'normal',
                    'hover',
                    'disabled',
                    ...(shape === 'selectable'
                        ? ['selected', 'selectedHover', 'selectedDisabled']
                        : []),
                ],
                default: 'normal',
            },
        ],
        data: {
            default: 'Tag Hello',
        },
    }),
    adaptor: ({ shape, level, size, state = '', data, className = '', ...others }) => {
        const TagComponent =
            shape === 'selectable' ? Tag.Selectable : shape === 'deletable' ? Tag.Closable : Tag;
        return (
            <TagComponent
                {...others}
                className={`${className} ${
                    state.toLowerCase().indexOf('hover') !== -1 ? 'hover' : ''
                }`}
                checked={state.indexOf('selected') !== -1 ? true : null}
                type={level}
                size={size}
                disabled={state.toLowerCase().indexOf('disabled') !== -1}
            >
                {data}
            </TagComponent>
        );
    },
};
