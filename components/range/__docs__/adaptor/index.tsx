import React from 'react';
import { Types } from '@alifd/adaptor-helper';
import { Range } from '@alifd/next';
import type { RangeProps } from '@alifd/next/types/range';

export default {
    name: 'Range',
    shape: [
        {
            label: 'Basic',
            value: 'basic',
        },
        {
            label: 'With Scale',
            value: 'scale',
        },
    ],
    editor: () => ({
        props: [
            {
                name: 'level',
                label: 'Selection Mode',
                type: Types.enum,
                options: ['single', 'double'],
                default: 'single',
            },
            {
                name: 'type',
                type: Types.enum,
                options: ['basic', 'scale'],
                default: 'basic',
            },
            {
                name: 'scalePosition',
                type: Types.enum,
                options: ['above', 'below'],
                default: 'above',
            },
            {
                name: 'state',
                label: 'Status',
                type: Types.enum,
                options: ['normal', 'hover', 'clicked', 'disabled'],
                default: 'normal',
            },
            {
                name: 'width',
                type: Types.number,
                default: 400,
            },
            {
                name: 'start',
                type: Types.number,
                default: 0,
            },
            {
                name: 'end',
                type: Types.number,
                default: 35,
            },
        ],
    }),
    adaptor: ({
        shape,
        level,
        type,
        scalePosition,
        state,
        width,
        start,
        end,
        style,
        ...others
    }: {
        shape: 'basic' | 'scale';
        level: RangeProps['slider'];
        type: 'basic' | 'scale';
        scalePosition: RangeProps['marksPosition'];
        state: 'normal' | 'hover' | 'clicked' | 'disabled';
        width: number;
        start: number;
        end: number;
        style: React.CSSProperties;
    }) => {
        return (
            <div {...others} style={{ width, ...style }}>
                <Range
                    className={
                        state === 'hover'
                            ? 'simulation-hover'
                            : state === 'clicked'
                              ? 'simulation-click'
                              : ''
                    }
                    slider={level}
                    value={level === 'double' ? [start, end] : end}
                    marks={shape === 'scale' || type === 'scale' ? 10 : false}
                    marksPosition={scalePosition}
                    disabled={state === 'disabled'}
                />
            </div>
        );
    },
    demoOptions: (demo: any) => {
        const { node } = demo;
        const { props } = node;
        if (props.level === 'double') {
            props.start = 20;
            props.end = 60;
        }

        return demo;
    },
};
