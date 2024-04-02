import React from 'react';
import moment from 'moment';
import { Calendar } from '@alifd/next';
import { Types } from '@alifd/adaptor-helper';

const now = new Date();

export default {
    name: 'Calendar',
    shape: ['fullscreen', 'card', 'panel', 'rangePanel'],
    editor: shape => {
        return {
            props: [
                {
                    name: 'level',
                    label: 'Type',
                    type: Types.enum,
                    options: ['day', 'month', 'year'].filter(level => {
                        if (level === 'year') return shape === 'panel';
                        if (shape === 'rangePanel') return level === 'day';

                        return true;
                    }),
                    default: 'day',
                },
                {
                    name: 'width',
                    type: Types.number,
                    default: shape === 'fullscreen' ? 600 : shape === 'rangePanel' ? 600 : 320,
                },
                {
                    name: 'date',
                    type: Types.string,
                    default: `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`,
                },
            ],
        };
    },
    adaptor: ({ shape, level, width, date = '', style = {}, ...others }) => {
        const arr = date.split('-').map(number => Number(number) || 0);

        const d = moment();
        arr.forEach((number, index) => {
            if (!number) return;
            switch (index) {
                case 0:
                    d.year(number);
                    break;
                case 1:
                    d.month(number - 1);
                    break;
                case 2:
                    d.date(number);
                    break;
                default:
                    return;
            }
        });

        if (shape === 'rangePanel') {
            if (!Calendar.RangeCalendar) return null;

            return (
                <Calendar.RangeCalendar
                    {...others}
                    style={{
                        width,
                        ...style,
                    }}
                    showOtherMonth
                    startValue={d}
                    endValue={d.clone().add(1, 'months')}
                />
            );
        }
        return (
            <Calendar
                {...others}
                value={d}
                shape={shape}
                mode={level === 'day' ? 'date' : level}
                style={{
                    width,
                    ...style,
                }}
            />
        );
    },
};
