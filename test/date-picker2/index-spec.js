import React, { useState } from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import assert from 'power-assert';
import dayjs from 'dayjs';
import moment from 'moment';
import DatePicker from '../../src/date-picker2/index';
// import { DATE_PANEL_MODE } from '../../src/date-picker2/constant';
import { KEYCODE } from '../../src/util';

Enzyme.configure({ adapter: new Adapter() });

const { RangePicker, MonthPicker, YearPicker, WeekPicker } = DatePicker;

// const { DATE, WEEK, MONTH, QUARTER, YEAR } = DATE_PANEL_MODE;

function getStrValue(wrapper) {
    const inputEl = wrapper.find('.next-date-picker2-input input');
    return inputEl.length === 1 ? inputEl.instance().value : inputEl.map(el => el.instance().value);
}

/* eslint-disable */
describe('Picker', () => {
    let wrapper;

    afterEach(() => {
        wrapper && wrapper.unmount();
        wrapper = null;
    });

    // describe('props', () => {
    //     it('basic render', () => {
    //         wrapper = mount(<DatePicker />);
    //         assert(wrapper.find('.next-date-picker2').length === 1);
    //     });

    //     it('type of value', () => {
    //         [Date('2020-12-12'), 1607753163910, dayjs('2020-12-12'), moment('2020-12-12')].forEach(v => {
    //             wrapper = mount(<DatePicker defaultValue={v} />);
    //             assert(getStrValue(wrapper) === '2020-12-12');
    //             wrapper.unmount();
    //             wrapper = null;
    //         });
    //     });

    //     it('mode && type', () => {
    //         ['date', 'range'].forEach(type => {
    //             ['date', 'week', 'month', 'quarter', 'year'].forEach(mode => {
    //                 wrapper = mount(<DatePicker defaultVisible type={type} mode={mode} />);

    //                 assert(wrapper.find(`.next-${type}-picker2-panel`).length === 1);
    //                 assert((wrapper.find(`.next-calendar2-table-${mode}`).length === type) === 'range' ? 2 : 1);

    //                 wrapper.unmount();
    //                 wrapper = null;
    //             });
    //         });
    //     });
    // });

    describe('controlled', () => {
        it('value', () => {
            let defaultValue = '2020-12-12';
            let newValue = '2021-11-13';

            [
                [DatePicker, '2020-12-12', '2021-11-13'],
                [MonthPicker, '2020-12', '2021-11'],
                [YearPicker, '2020', '2021'],
                [WeekPicker, '2020-50周', '2021-45周'],
                [RangePicker, ['2020-12-12', '2021-11-13'], ['2030-11-12', '2041-01-13']],
            ].forEach(([Picker, defaultVal, newVal]) => {
                if (Picker === RangePicker) {
                    defaultValue = defaultVal;
                    newValue = newVal;
                }

                wrapper = mount(<Picker defaultValue={defaultValue} />);
                assert.deepEqual(getStrValue(wrapper), defaultVal);

                wrapper.setProps({ value: newValue });
                assert.deepEqual(getStrValue(wrapper), newVal);

                wrapper.unmount();
                wrapper = null;
            });
        });
    });

    describe('class props', () => {
        it('displayName', () => {
            [
                [RangePicker, 'RangePicker2'],
                [MonthPicker, 'MonthPicker2'],
                [YearPicker, 'YearPicker2'],
                [WeekPicker, 'WeekPicker2'],
                [DatePicker, 'DatePicker2'],
            ].forEach(([component, displayName]) => {
                assert(component.displayName === displayName);
            });
        });
    });
});
