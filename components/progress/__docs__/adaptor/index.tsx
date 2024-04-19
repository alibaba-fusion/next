import React from 'react';
import { Types } from '@alifd/adaptor-helper';
import { Progress } from '@alifd/next';

const _propsValue = ({ shape, level, size, mode, border, width, style, ...others }) => {
    return {
        ...others,
        style: {
            width: width || '',
            ...style,
        },
        shape,
        size,
        state: level,
        hasBorder: border,
        progressive: mode === 'staging',
    };
};
export default {
    name: 'Progress',
    shape: ['line', 'circle'],
    propsValue: _propsValue,
    editor: (shape = 'line') => {
        return {
            props: [
                {
                    name: 'mode',
                    label: 'Type',
                    type: Types.enum,
                    options: ['basic', 'staging'],
                    default: 'basic',
                },
                {
                    name: 'level',
                    type: Types.enum,
                    options: ['normal', 'success', 'error'],
                    default: 'normal',
                },
                {
                    name: 'size',
                    type: Types.enum,
                    options: ['large', 'medium', 'small'],
                    default: 'medium',
                },
                {
                    name: 'text',
                    label: 'Data Included',
                    type: Types.bool,
                    default: false,
                },
                ...(shape === 'line'
                    ? [
                          {
                              name: 'border',
                              type: Types.bool,
                              default: false,
                          },
                          {
                              name: 'width',
                              type: Types.number,
                              default: 200,
                          },
                      ]
                    : []),
                {
                    name: 'percent',
                    type: Types.number,
                    default: 25,
                },
            ],
        };
    },
    adaptor: ({ shape, level, size, mode, text, border, width, percent, style, ...others }) => {
        const props = _propsValue({ shape, level, size, mode, border, width, style, ...others });
        return (
            <Progress
                {...props}
                textRender={percent => (text ? `${Math.floor(percent)}%` : false)}
                percent={percent}
            />
        );
    },
    content: (shape = 'line') => ({
        options: [
            {
                name: 'staging',
                options: ['none', 'started', 'middle', 'finishing'],
                default: 'none',
            },
            {
                name: 'text',
                options: ['show', 'hide'],
                default: shape === 'cirlce' ? 'show' : 'hide',
            },
            {
                name: 'border',
                options: ['show', 'hide'],
                default: 'hide',
            },
        ].filter(({ name }) => name !== 'border' || shape === 'line'),
        transform: (props, { staging, text, border }) => {
            switch (staging) {
                case 'started':
                    props = {
                        ...props,
                        percent: 20,
                        mode: 'staging',
                    };
                    break;
                case 'middle':
                    props = {
                        ...props,
                        percent: 60,
                        mode: 'staging',
                    };
                    break;
                case 'finishing':
                    props = {
                        ...props,
                        percent: 85,
                        mode: 'staging',
                    };
                    break;
                default:
                    break;
            }

            return {
                ...props,
                text: text === 'show',
                border: border === 'show',
            };
        },
    }),
};
