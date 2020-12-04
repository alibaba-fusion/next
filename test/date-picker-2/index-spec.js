import React, { useState } from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import assert from 'power-assert';
import dayjs from 'dayjs';
import DatePicker from '../../src/date-picker-2/index';
import { KEYCODE } from '../../src/util';

Enzyme.configure({ adapter: new Adapter() });
const { RangePicker, MonthPicker, YearPicker, WeekPicker } = DatePicker;

const startValue = dayjs('2017-11-20', 'YYYY-MM-DD', true);
const endValue = dayjs('2017-12-15', 'YYYY-MM-DD', true);
const defaultTimeValue = dayjs('09:00:00', 'HH:mm:ss', true);
const defaultTimeValues = [dayjs('09:00:00', 'HH:mm:ss', true), dayjs('23:59:59', 'HH:mm:ss', true)];

/* eslint-disable */
describe('DatePicker', () => {
    let wrapper;

    afterEach(() => {
        if (wrapper) {
            wrapper.unmount();
        }
        wrapper = null;
    });

    describe('render with props', () => {
        it('should render', () => {
            wrapper = mount(<DatePicker />);
            assert(wrapper.find('.next-date-picker').length === 1);
        });
    });
});
