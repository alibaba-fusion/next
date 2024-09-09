import React from 'react';
import { Balloon } from '@alifd/next';
import { Types } from '@alifd/adaptor-helper';
import type { AlignType } from '../../types';

const ALIGN_LIST = [
    { label: 'Top', value: 'b' }, // (上)
    { label: 'Right', value: 'l' }, // (右)
    { label: 'Bottom', value: 't' }, // (下)
    { label: 'Left', value: 'r' }, // (左)
    { label: 'Top Left', value: 'br' }, // (上左)
    { label: 'Top Right', value: 'bl' }, // (上右)
    { label: 'Bottom Left', value: 'tr' }, // (下左)
    { label: 'Bottom Right', value: 'tl' }, // (下右)
    { label: 'Left Top', value: 'rt' }, // (左上)
    { label: 'Left Bottom', value: 'rb' }, // (左下)
    { label: 'Right Top', value: 'lt' }, // (右上)
    { label: 'Right Bottom', value: 'lb' }, // (右下 及其 两两组合)
];

export default {
    name: 'Balloon',
    shape: [
        {
            label: 'Balloon',
            value: 'balloon',
        },
        {
            label: 'Tooltip',
            value: 'tooltip',
        },
    ],
    editor: (shape: string) => {
        return {
            props: [
                shape === 'balloon' && {
                    name: 'level',
                    type: Types.enum,
                    options: ['normal', 'primary'],
                    default: 'normal',
                },
                {
                    name: 'direction',
                    label: 'Align',
                    type: Types.enum,
                    options: ALIGN_LIST,
                    default: 'b',
                },
                shape === 'balloon'
                    ? {
                          name: 'closable',
                          type: Types.bool,
                          default: true,
                      }
                    : null,
            ].filter(v => !!v),
            data: {
                default: `${
                    shape.substring(0, 1).toUpperCase() + shape.substring(1)
                } content replace holder.`,
            },
        };
    },
    adaptor: ({
        shape,
        level,
        direction,
        closable,
        data,
        style,
        ...others
    }: {
        shape: string;
        level: string;
        direction: AlignType;
        closable: boolean;
        data: string;
        style: React.CSSProperties;
    }) => {
        return (
            <Balloon.Inner
                {...others}
                type={level}
                style={{ position: 'relative', ...style }}
                isTooltip={shape === 'tooltip'}
                align={direction}
                closable={shape === 'balloon' && closable}
            >
                {data}
            </Balloon.Inner>
        );
    },
    content: (shape: string) => ({
        options: [
            {
                name: 'direction',
                options: ALIGN_LIST,
                default: 'b',
            },
            shape === 'balloon' && {
                name: 'closable',
                options: ['yes', 'no'],
                default: 'yes',
            },
        ].filter(v => !!v),
        transform: (
            props: any,
            { direction, closable }: { direction: AlignType; closable: string }
        ) => {
            return {
                ...props,
                direction,
                closable: closable === 'yes',
            };
        },
    }),
};
