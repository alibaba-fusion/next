import { type Moment } from 'moment';
import ConfigProvider from '../config-provider';
import { preFormatDateValue } from './utils';
import Calendar from './calendar';
import RangeCalendar from './range-calendar';
import { assignSubComponent } from '../util/component';
import type { CalendarProps } from './types';
import type { log } from '../util';

export type { CalendarProps, RangeCalendarProps, CalendarMode } from './types';

const transform = (props: CalendarProps, deprecated: typeof log.deprecated) => {
    const { type, onChange, base, disabledMonth, disabledYear, yearCellRender, ...others } = props;
    const newProps = others;

    if ('type' in props) {
        deprecated('type', 'shape', 'Calendar');

        newProps.shape = type;

        if ('shape' in props) {
            newProps.shape = props.shape;
        }
    }

    if ('base' in props) {
        deprecated('base', 'defaultVisibleMonth', 'Calendar');

        let newDefaultVisibleMonth = () => {
            preFormatDateValue(base, 'YYYY-MM-DD');
        };

        if ('defaultVisibleMonth' in props) {
            newDefaultVisibleMonth = props.defaultVisibleMonth!;
        }

        newProps.defaultVisibleMonth = newDefaultVisibleMonth;
    }

    if ('onChange' in props && typeof onChange === 'function') {
        deprecated('onChange', 'onSelect', 'Calendar');

        const newOnSelect = (date: Moment) => {
            onChange({ mode: others.mode!, value: date });

            if ('onSelect' in props) {
                props.onSelect!(date);
            }
        };

        newProps.onSelect = newOnSelect;
    }

    if ('disabledMonth' in props && typeof disabledMonth === 'function') {
        deprecated('disabledMonth', 'disabledDate', 'Calendar');
    }

    if ('disabledYear' in props && typeof disabledYear === 'function') {
        deprecated('disabledYear', 'disabledDate', 'Calendar');
    }

    if ('yearCellRender' in props && typeof yearCellRender === 'function') {
        deprecated('yearCellRender', 'monthCellRender/dateCellRender', 'Calendar');
    }

    if ('language' in props) {
        deprecated('language', 'moment.locale', 'Calendar');
    }

    return newProps;
};

const CalendarWithSub = assignSubComponent(Calendar, { RangeCalendar });

export default ConfigProvider.config(CalendarWithSub, {
    transform,
});
