import React from 'react';
import { Types } from '@alifd/adaptor-helper';
import { TimePicker } from '@alifd/next';
import moment from 'moment';

export default {
    name: 'TimePicker',
    editor: () => ({
        props: [
            {
                name: 'size',
                type: Types.enum,
                options: ['large', 'medium', 'small'],
                default: 'medium',
            },
            {
                name: 'state',
                label: 'Status',
                type: Types.enum,
                options: ['normal', 'expanded', 'selected', 'disabled'],
                default: 'normal',
            },
            {
                name: 'type',
                type: Types.enum,
                options: ['HMS', 'HM', 'MS'],
                default: 'HMS',
            },
            {
                name: 'width',
                type: Types.number,
                default: 200,
            },
            {
                name: 'label',
                type: Types.string,
                default: '',
            },
            {
                name: 'placeholder',
                type: Types.string,
                default: 'Please Select Time',
            },
            {
                name: 'value',
                type: Types.string,
                default: '06:06:06',
            },
        ],
    }),
    adaptor: ({ size, state, type, width, label, placeholder, value = '', style, ...others }) => {
        const time = moment();
        const arr = value.split(':');

        for (let i = 0; i < type.length; i++) {
            const char = type.charAt(i);
            const v = arr[i];

            if (v === undefined) break;

            switch (char) {
                case 'H':
                    time.hours(v);
                    break;
                case 'M':
                    time.minutes(v);
                    break;
                case 'S':
                    time.seconds(v);
                    break;
            }
        }

        return (
            <TimePicker
                {...others}
                size={size}
                style={{ width, ...style }}
                popupContainer={node => node}
                popupProps={{ needAdjust: false, autoFocus: false }}
                format={type === 'HM' ? 'HH:mm' : type === 'MS' ? 'mm:ss' : 'HH:mm:ss'}
                label={label}
                disabled={state === 'disabled'}
                visible={state === 'expanded'}
                placeholder={placeholder}
                value={state === 'normal' ? null : time}
            />
        );
    },
    demoOptions: demo => {
        if (demo.node.props.state === 'expanded') {
            demo.height = 300;
        }
        return demo;
    },
};
