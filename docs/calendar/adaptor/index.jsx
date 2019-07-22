import React from 'react';
import moment from 'moment';
import { Calendar } from '@alifd/next';
import { Types } from '@alifd/adaptor-helper';

const now = new Date();


export default {
    name: 'Calendar',
    shape: ['fullscreen', 'card', 'panel', 'rangePanel'],
    editor: (shape) => {
        return {
            props: [{
                name: 'level',
                type: Types.enum,
                options: ['day', 'month', 'year'].filter((level) => {
                    if (level === 'year') return shape === 'panel';
                    if (shape === 'rangePanel') return level === 'day';

                    return true;
                }),
                default: 'day'
            }, {
                name: 'width',
                type: Types.number,
                default: shape === 'fullscreen' ? 600 : shape === 'rangePanel' ? 600 : 320,
            }, {
                name: 'date',
                type: Types.string,
                default: `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`
            }]
        };
    },
    adaptor: ({ shape, level, width, date, style = {}, ...others }) => {

        if (shape === 'rangePanel') {
            if (!Calendar.RangeCalendar) return null;

            return (
                <Calendar.RangeCalendar {...others}  style={{
                    width,
                    ...style
                }} showOtherMonth startValue={moment(date)} endValue={moment(date).clone().add(1, 'months')} />
            );
        }
        return (
            <Calendar {...others} value={moment(date)} shape={shape} mode={level === 'day' ? 'date' : level} style={{
                width,
                ...style
            }} />
        );
    }
};
