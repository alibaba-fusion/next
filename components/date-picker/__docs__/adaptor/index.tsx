import React from 'react';
import { DatePicker } from '@alifd/next';
import { Types } from '@alifd/adaptor-helper';
import moment from 'moment';
import type { DatePickerProps } from '../../types';

export default {
    name: 'DatePicker',
    shape: [
        'normal',
        {
            value: 'range',
            label: 'Range Picker',
        },
    ],
    editor: (shape: 'normal' | 'range') => {
        return {
            props: [
                {
                    name: 'state',
                    label: 'Status',
                    type: Types.enum,
                    options: ['normal', 'expanded', 'selected', 'disabled'],
                    default: 'normal',
                },
                {
                    name: 'size',
                    type: Types.enum,
                    options: ['large', 'medium', 'small'],
                    default: 'medium',
                },
                {
                    name: 'type',
                    type: Types.enum,
                    options:
                        shape === 'range' ? ['dateRange', 'dateTimeRange'] : ['date', 'dateTime'],
                    default: shape === 'range' ? 'dateRange' : 'date',
                },
                {
                    name: 'width',
                    type: Types.number,
                    default: 288,
                },
                {
                    name: 'label',
                    type: Types.string,
                    default: '',
                },
                {
                    name: 'placeholder',
                    type: Types.string,
                    default: shape === 'range' ? 'Start Date - End Date' : 'Please Select Date',
                },
            ],
        };
    },
    adaptor: ({
        shape,
        state,
        size,
        type,
        width,
        label,
        placeholder = '',
        style = {},
        ...others
    }: any) => {
        const now = moment();
        style = {
            width,
            ...style,
        };

        if (shape === 'range') {
            return (
                <DatePicker.RangePicker
                    {...others}
                    visible={state === 'expanded'}
                    disabled={state === 'disabled'}
                    popupProps={{
                        needAdjust: false,
                        autoFocus: false,
                    }}
                    popupContainer={node => node}
                    style={style}
                    size={size}
                    showTime={'dateTimeRange' === type}
                    locale={{
                        startPlaceholder: placeholder.split('-')[0],
                        endPlaceholder: placeholder.split('-')[1],
                    }}
                    label={label}
                    value={state !== 'normal' ? [now.clone(), now.clone().add(1, 'month')] : null}
                />
            );
        }

        return (
            <DatePicker
                {...others}
                visible={state === 'expanded'}
                disabled={state === 'disabled'}
                popupProps={{
                    needAdjust: false,
                    autoFocus: false,
                }}
                popupContainer={node => node}
                style={style}
                size={size}
                showTime={'dateTime' === type}
                placeholder={placeholder}
                label={label}
                value={state !== 'normal' ? now.clone() : null}
            />
        );
    },
    content: (shape: 'normal' | 'range') => ({
        options: [
            {
                name: 'type',
                options: shape === 'range' ? ['dateRange', 'dateTimeRange'] : ['date', 'dateTime'],
                default: shape === 'range' ? 'dateRange' : 'date',
            },
            {
                name: 'label',
                options: ['show', 'hide'],
                default: 'hide',
            },
        ],
        transform: (props: DatePickerProps, { type, label }: { type: string; label: string }) => {
            return {
                ...props,
                type,
                label: label === 'show' ? 'Label' : '',
            };
        },
    }),
    demoOptions: (demo: any) => {
        const { node } = demo;
        const { props = {} } = node;
        if (props.state === 'expanded') {
            return { ...demo, height: 300 };
        }

        return demo;
    },
};
