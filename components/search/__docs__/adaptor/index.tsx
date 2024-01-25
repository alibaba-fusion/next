import React from 'react';
import { Types } from '@alifd/adaptor-helper';
import { Search } from '@alifd/next';

export default {
    name: 'Search',
    shape: [
        {
            value: 'normal',
            label: 'Basic',
        },
        {
            value: 'simple',
            label: 'Simple',
        },
    ],
    editor: (shape = 'normal') => ({
        props: [
            {
                name: 'level',
                type: Types.enum,
                options:
                    shape === 'simple'
                        ? ['normal', 'dark']
                        : ['normal', 'primary', 'secondary', 'dark'],
                default: 'normal',
            },
            {
                name: 'size',
                type: Types.enum,
                options: ['large', 'medium'],
                default: 'medium',
            },
            {
                name: 'menu',
                type: Types.bool,
                default: true,
            },
            {
                name: 'placeholder',
                type: Types.string,
                default: 'Please Input',
            },
            ...(shape === 'normal'
                ? [
                      {
                          name: 'label',
                          type: Types.bool,
                          default: true,
                      },
                  ]
                : []),
            {
                name: 'width',
                type: Types.number,
                default: shape === 'normal' ? 400 : 380,
            },
        ],
    }),
    adaptor: ({ shape, level, size, menu, label, width, style, ...others }) => {
        return (
            <Search
                {...others}
                filterProps={{ placeholder: 'Please Select' }}
                style={{ width, ...style }}
                shape={shape}
                searchText={label ? 'Search' : ''}
                filter={menu ? [{ label: 'temp', value: 'temp' }] : []}
                type={level}
                size={size}
            />
        );
    },
    content: shape => ({
        options: [
            {
                name: 'menu',
                options: ['show', 'hide'],
                default: 'show',
            },
            {
                name: 'buttonLabel',
                options: ['show', 'hide'],
                default: 'show',
            },
        ].filter(({ name }) => name !== 'buttonLabel' || shape === 'normal'),
        transform: (props, { menu, buttonLabel }) => {
            return {
                ...props,
                menu: menu === 'show',
                label: buttonLabel === 'show',
            };
        },
    }),
    demoOptions: demo => {
        if (demo.node.props.level === 'dark') {
            return {
                ...demo,
                background: '#333',
            };
        }
        return {
            ...demo,
        };
    },
};
