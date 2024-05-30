import React, { useState } from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import assert from 'power-assert';
import moment from 'moment';
import DatePicker from '../index';
import Form from '../../form/index';
import { KEYCODE } from '../../util';
import '../style';

Enzyme.configure({ adapter: new Adapter() });
const { RangePicker, MonthPicker, YearPicker, WeekPicker } = DatePicker;
const { FormItem } = Form;

const delay = duration => new Promise(r => setTimeout(r, duration));
const startValue = moment('2017-11-20', 'YYYY-MM-DD', true);
const endValue = moment('2017-12-15', 'YYYY-MM-DD', true);
const defaultTimeValue = moment('09:00:00', 'HH:mm:ss', true);
const defaultTimeValues = [moment('09:00:00', 'HH:mm:ss', true), moment('23:59:59', 'HH:mm:ss', true)];
const timeStamp = 1581938105000;

// 禁止选择 startValue 之前的所有日期
const disabledDate = function(date, view) {
    if (!view) return true;
    return date.valueOf() < startValue.valueOf();
};

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

        it('should render with defaultValue', () => {
            wrapper = mount(<DatePicker defaultValue={startValue} />);
            assert(wrapper.find('.next-date-picker-input input').instance().value === '2017-11-20');
            assert(wrapper.find('i.next-input-clear-icon').length === 1);
        });

        it('should render string unix defaultValue of DatePicker', () => {
            wrapper = mount(<DatePicker defaultValue={moment(timeStamp)} />);
            assert(wrapper.find('.next-date-picker-input input').instance().value === '2020-02-17');
            assert(wrapper.find('.next-icon-delete-filling').length === 1);
        });

        it('should set hasClear to false', () => {
            wrapper = mount(<DatePicker defaultValue={startValue} hasClear={false} />);
            assert(!wrapper.find('i.next-input-clear-icon').length);
        });

        it('should render controlled value of DatePicker', () => {
            wrapper = mount(<DatePicker value={startValue} />);
            assert(wrapper.find('.next-date-picker-input input').instance().value === '2017-11-20');
            wrapper.setProps({ value: endValue });
            assert(wrapper.find('.next-date-picker-input input').instance().value === '2017-12-15');
        });

        it('should render controlled visible of DatePicker', () => {
            wrapper = mount(<DatePicker visible={false} />);
            assert(wrapper.find('.next-date-picker-body').length === 0);
            wrapper.setProps({ visible: true });
            assert(wrapper.find('.next-date-picker-body').length === 1);
        });

        it('should hide seconds', () => {
            wrapper = mount(<DatePicker defaultVisible showTime={{ format: 'HH:mm' }} />);
            assert(!wrapper.find('.next-time-picker-menu-hour').length);
        });

        it('should render dateInputAriaLabel & timeInputAriaLabel', () => {
            wrapper = mount(
                <DatePicker
                    dateInputAriaLabel="Ho Ho Ho!"
                    timeInputAriaLabel="Ho Ho Ho!"
                    defaultVisible
                    showTime={{ format: 'HH:mm' }}
                />
            );

            assert(
                wrapper
                    .find('.next-date-picker-panel-input input')
                    .at(0)
                    .prop('aria-label') === 'Ho Ho Ho!'
            );
            assert(
                wrapper
                    .find('.next-date-picker-panel-input input')
                    .at(1)
                    .prop('aria-label') === 'Ho Ho Ho!'
            );
        });

        it('should support preview mode render', () => {
            wrapper = mount(<DatePicker defaultValue="2018-11-11" isPreview />);
            assert(wrapper.find('.next-form-preview').length > 0);
            assert(wrapper.find('.next-form-preview').text() === '2018-11-11');
            wrapper.setProps({
                renderPreview: value => {
                    assert(value.format('YYYY-MM-DD') === '2018-11-11');
                    return 'Hello World';
                },
            });
            assert(wrapper.find('.next-form-preview').text() === 'Hello World');
        });

        it('should support preview mode render with showTime', () => {
            wrapper = mount(<DatePicker defaultValue="2018-11-11" isPreview showTime />);
            assert(wrapper.find('.next-form-preview').length > 0);
            assert(wrapper.find('.next-form-preview').text() === '2018-11-11 00:00:00');
        });
    });

    describe('action', () => {
        it('should select', () => {
            let ret;
            wrapper = mount(<DatePicker defaultVisibleMonth={() => startValue} onChange={val => (ret = val)} />);
            wrapper.find('.next-date-picker-input input').simulate('click');
            wrapper.find('td[title="2017-11-09"] .next-calendar-date').simulate('click');
            assert(ret.format('YYYY-MM-DD') === '2017-11-09');
        });

        it('should clear value', () => {
            let ret = 'hello';
            wrapper = mount(<DatePicker defaultValue={startValue} onChange={val => (ret = val)} />);
            wrapper.find('i.next-input-clear-icon').simulate('click');
            assert(ret === null);
        });

        it('should input value in picker', () => {
            let ret;
            wrapper = mount(<DatePicker onChange={val => (ret = val)} showTime defaultVisible />);
            wrapper
                .find('.next-date-picker-panel-input input')
                .at(0)
                .simulate('change', { target: { value: '2017-11-11' } });
            wrapper
                .find('.next-date-picker-panel-input input')
                .at(0)
                .simulate('blur');
            wrapper
                .find('.next-date-picker-panel-input input')
                .at(1)
                .simulate('change', { target: { value: '11:11:11' } });
            wrapper
                .find('.next-date-picker-panel-input input')
                .at(1)
                .simulate('blur');
            assert(ret.format('YYYY-MM-DD HH:mm:ss') === '2017-11-11 11:11:11');
        });

        it('should not resetTime as default', () => {
            let ret;
            wrapper = mount(
                <DatePicker onChange={val => (ret = val)} defaultValue="2017-11-11 11:11:11" showTime defaultVisible />
            );

            wrapper
                .find('.next-date-picker-panel-input input')
                .at(0)
                .simulate('change', { target: { value: '2017-11-12' } });
            wrapper
                .find('.next-date-picker-panel-input input')
                .at(0)
                .simulate('blur');
            assert(ret === '2017-11-12 11:11:11');
        });

        it('should input null value in picker', () => {
            let ret;
            wrapper = mount(<DatePicker onChange={val => (ret = val)} value="2018-02-02" defaultVisible />);
            wrapper.find('.next-date-picker-input input').simulate('click');
            wrapper
                .find('.next-date-picker-panel-input input')
                .at(0)
                .simulate('change', { target: { value: '' } });
            wrapper
                .find('.next-date-picker-panel-input input')
                .at(0)
                .simulate('blur');

            wrapper.find('td[title="2018-02-09"] .next-calendar-date').simulate('click');
            assert(ret === '2018-02-09');
        });

        it('should input disabled date in picker', () => {
            let ret;
            wrapper = mount(<DatePicker onChange={val => (ret = val)} disabledDate={disabledDate} defaultVisible />);
            wrapper
                .find('.next-date-picker-panel-input input')
                .at(0)
                .simulate('change', { target: { value: '2017-11-11' } });
            wrapper
                .find('.next-date-picker-panel-input input')
                .at(0)
                .simulate('blur');
            assert(!ret);
        });

        it('should focus input to change panel', () => {
            wrapper = mount(<DatePicker showTime defaultVisible defaultValue={startValue} />);
            wrapper
                .find('.next-date-picker-panel-input input')
                .at(1)
                .simulate('focus');
            assert(wrapper.find('.next-time-picker-panel').length === 1);
            wrapper
                .find('.next-date-picker-panel-input input')
                .at(0)
                .simulate('focus');
            wrapper
                .find('.next-date-picker-panel-input input')
                .at(0)
                .simulate('blur');
            assert(wrapper.find('.next-calendar-panel').length === 1);
        });

        it('should select time panel', () => {
            let ret;
            wrapper = mount(
                <DatePicker showTime defaultVisible defaultValue={startValue} onChange={val => (ret = val)} />
            );
            wrapper
                .find('.next-date-picker-panel-input input')
                .at(1)
                .simulate('focus');
            wrapper
                .find('.next-time-picker-menu-hour .next-time-picker-menu-item')
                .at(3)
                .simulate('click');
            assert(ret.format('YYYY-MM-DD HH:mm:ss') === '2017-11-20 03:00:00');
        });

        it('should select time panel by time-btn', () => {
            let ret;
            wrapper = mount(<DatePicker showTime defaultVisible defaultValue={startValue} />);
            wrapper
                .find('.next-date-picker-panel-footer .next-btn')
                .at(0)
                .simulate('click');
            assert(wrapper.find('div.next-date-picker-panel-time').length === 1);
        });

        it('should click onOk', () => {
            let ret;
            wrapper = mount(
                <DatePicker showTime defaultVisible defaultVisibleMonth={() => startValue} onOk={val => (ret = val)} />
            );
            wrapper.find('td[title="2017-11-09"] .next-calendar-date').simulate('click');
            wrapper
                .find('.next-date-picker-panel-footer .next-btn')
                .at(1)
                .simulate('click');
            assert(ret.format('YYYY-MM-DD HH:mm:ss') === '2017-11-09 00:00:00');
        });

        it('should set defaultValue for TimePicker', () => {
            let ret;
            wrapper = mount(
                <DatePicker
                    showTime={{ defaultValue: defaultTimeValue }}
                    defaultVisible
                    defaultVisibleMonth={() => startValue}
                    onChange={val => (ret = val)}
                />
            );
            wrapper.find('td[title="2017-11-09"] .next-calendar-date').simulate('click');
            assert(ret.format('YYYY-MM-DD HH:mm:ss') === '2017-11-09 09:00:00');
            wrapper.find('td[title="2017-11-11"] .next-calendar-date').simulate('click');
            assert(ret.format('YYYY-MM-DD HH:mm:ss') === '2017-11-11 09:00:00');
        });

        it('should keyboard date input', () => {
            wrapper = mount(<DatePicker defaultVisible />);
            const input = wrapper.find('.next-date-picker-panel-input input').at(0);
            const instance = wrapper.instance().getInstance();
            input.simulate('keydown', { keyCode: KEYCODE.DOWN });
            assert(instance.state.dateInputStr === moment().format('YYYY-MM-DD'));
            input.simulate('keydown', { keyCode: KEYCODE.LEFT });
            assert(instance.state.dateInputStr === moment().format('YYYY-MM-DD'));
            input.simulate('keydown', { keyCode: KEYCODE.DOWN, altKey: true });
            input.simulate('keydown', {
                keyCode: KEYCODE.DOWN,
                shiftKey: true,
            });
            input.simulate('keydown', {
                keyCode: KEYCODE.DOWN,
                controlKey: true,
            });
            assert(instance.state.dateInputStr === moment().format('YYYY-MM-DD'));
            input.simulate('keydown', { keyCode: KEYCODE.DOWN });
            assert(
                instance.state.dateInputStr ===
                    moment()
                        .add(1, 'day')
                        .format('YYYY-MM-DD')
            );
            input.simulate('keydown', { keyCode: KEYCODE.UP });
            assert(instance.state.dateInputStr === moment().format('YYYY-MM-DD'));
            // input.simulate('keydown', { keyCode: KEYCODE.PAGE_DOWN });
            // assert(instance.state.dateInputStr === moment().add(1, 'month').format('YYYY-MM-DD'));
            // input.simulate('keydown', { keyCode: KEYCODE.PAGE_UP });
            // assert(instance.state.dateInputStr === moment().format('YYYY-MM-DD'));
            // input.simulate('keydown', { keyCode: KEYCODE.PAGE_DOWN, altKey: true });
            // assert(instance.state.dateInputStr === moment().add(1, 'year').format('YYYY-MM-DD'));
            // input.simulate('keydown', { keyCode: KEYCODE.PAGE_UP, altKey: true });
            // assert(instance.state.dateInputStr === moment().format('YYYY-MM-DD'));
        });

        it('should keyboard date time input', () => {
            wrapper = mount(
                <DatePicker
                    showTime={{ format: 'HH:mm:ss' }}
                    defaultVisible
                    defaultValue={moment()
                        .hours(0)
                        .minutes(0)
                        .seconds(0)}
                />
            );

            const dateInput = wrapper.find('.next-date-picker-panel-input input').at(0);
            const timeInput = wrapper.find('.next-date-picker-panel-input input').at(1);
            const instance = wrapper.instance().getInstance();
            timeInput.simulate('keydown', { keyCode: KEYCODE.DOWN });
            assert(instance.state.timeInputStr === '00:00:00');
            timeInput.simulate('keydown', { keyCode: KEYCODE.LEFT });
            timeInput.simulate('keydown', {
                keyCode: KEYCODE.DOWN,
                altKey: true,
            });
            timeInput.simulate('keydown', {
                keyCode: KEYCODE.DOWN,
                shiftKey: true,
            });
            timeInput.simulate('keydown', {
                keyCode: KEYCODE.DOWN,
                controlKey: true,
            });
            assert(instance.state.timeInputStr === '00:00:00');
            timeInput.simulate('keydown', { keyCode: KEYCODE.DOWN });
            assert(instance.state.timeInputStr === '00:00:01');
            timeInput.simulate('keydown', { keyCode: KEYCODE.UP });
            assert(instance.state.timeInputStr === '00:00:00');
            timeInput.simulate('keydown', { keyCode: KEYCODE.PAGE_DOWN });
            assert(instance.state.timeInputStr === '00:01:00');
            timeInput.simulate('keydown', { keyCode: KEYCODE.PAGE_UP });
            assert(instance.state.timeInputStr === '00:00:00');
            timeInput.simulate('keydown', {
                keyCode: KEYCODE.PAGE_DOWN,
                altKey: true,
            });
            assert(instance.state.timeInputStr === '01:00:00');
            timeInput.simulate('keydown', {
                keyCode: KEYCODE.PAGE_UP,
                altKey: true,
            });
            assert(instance.state.timeInputStr === '00:00:00');
        });
    });

    describe('with date string', () => {
        it('should defaultValue as string', () => {
            wrapper = mount(<DatePicker defaultValue="2018-01-23" />);
            assert(wrapper.find('.next-date-picker-input input').instance().value === '2018-01-23');
            assert(wrapper.find('i.next-input-clear-icon').length === 1);
        });

        it('should value as string', () => {
            wrapper = mount(<DatePicker value="2018-01-23" />);
            assert(wrapper.find('.next-date-picker-input input').instance().value === '2018-01-23');
            wrapper.setProps({ value: '2019-01-23' });
            assert(wrapper.find('.next-date-picker-input input').instance().value === '2019-01-23');
        });

        it('should set defaultValue as string for TimePicker', () => {
            let ret;
            wrapper = mount(
                <DatePicker
                    showTime={{ defaultValue: '09:00:00' }}
                    defaultVisible
                    defaultVisibleMonth={() => startValue}
                    onChange={val => (ret = val)}
                />
            );
            wrapper.find('td[title="2017-11-09"] .next-calendar-date').simulate('click');
            assert(ret.format('YYYY-MM-DD HH:mm:ss') === '2017-11-09 09:00:00');
            wrapper.find('td[title="2017-11-11"] .next-calendar-date').simulate('click');
            assert(ret.format('YYYY-MM-DD HH:mm:ss') === '2017-11-11 09:00:00');
        });
    });

    describe('issue', () => {
        it('handle value type consistency with Form components #2895', () => {
            let ret;
            const onChange = val => {
                ret = val;
            };
            const wrapperA = mount(
                <Form>
                    <Form.Item>
                        <DatePicker name="date" defaultValue="" onChange={onChange} />
                    </Form.Item>
                </Form>
            );
            wrapperA.find('.next-date-picker-input input').simulate('click');
            wrapperA.find('td[title="2024-05-02"] .next-calendar-date').simulate('click');
            assert(typeof ret === 'string');
            wrapperA.find('i.next-input-clear-icon').simulate('click');
            wrapperA.find('.next-date-picker-input input').simulate('click');
            wrapperA.find('td[title="2024-05-02"] .next-calendar-date').simulate('click');
            assert(typeof ret === 'string');
        });
    });
});

describe('YearPicker', () => {
    const startYear = moment('2018', 'YYYY', true);
    const endYear = moment('2018', 'YYYY', true);

    let wrapper;
    afterEach(() => {
        if (wrapper) {
            wrapper.unmount();
        }
        wrapper = null;
    });

    describe('render with props', () => {
        it('should render with defaultValue', () => {
            wrapper = mount(<YearPicker defaultValue={startYear} />);
            assert(wrapper.find('.next-year-picker-input input').instance().value === '2018');
            assert(wrapper.find('i.next-input-clear-icon').length === 1);
        });

        it('should set hasClear to false', () => {
            wrapper = mount(<YearPicker defaultValue={startYear} hasClear={false} />);
            assert(!wrapper.find('i.next-input-clear-icon').length);
        });

        it('should render controlled value of YearPicker', () => {
            wrapper = mount(<YearPicker value={startYear} />);
            assert(wrapper.find('.next-year-picker-input input').instance().value === '2018');
            wrapper.setProps({ value: endYear });
            assert(wrapper.find('.next-year-picker-input input').instance().value === '2018');
        });

        it('should render controlled visible of YearPicker', () => {
            wrapper = mount(<YearPicker visible={false} />);
            assert(wrapper.find('.next-year-picker-body').length === 0);
            wrapper.setProps({ visible: true });
            assert(wrapper.find('.next-year-picker-body').length === 1);
        });

        it('should render dateInputAriaLabel', () => {
            wrapper = mount(<YearPicker popupClassName="test-aria" visible={true} dateInputAriaLabel="Ho Ho Ho!" />);

            assert(wrapper.find('.test-aria .next-year-picker-panel-input input').prop('aria-label') === 'Ho Ho Ho!');
        });
        it('should support preview mode render', () => {
            wrapper = mount(<YearPicker defaultValue="2018-11-11" isPreview />);
            assert(wrapper.find('.next-form-preview').length > 0);
            assert(wrapper.find('.next-form-preview').text() === '2018');
            wrapper.setProps({
                renderPreview: value => {
                    assert(value.format('YYYY') === '2018');
                    return 'Hello World';
                },
            });
            assert(wrapper.find('.next-form-preview').text() === 'Hello World');
        });
    });

    describe('action', () => {
        it('should select', () => {
            let ret;
            wrapper = mount(<YearPicker onChange={val => (ret = val)} />);
            wrapper.find('.next-year-picker-input input').simulate('click');
            wrapper
                .find('div.next-calendar-year')
                .at(5)
                .simulate('click');
            assert(ret.format('YYYY') === '2024');
        });

        it('should clear value', () => {
            let ret = 'hello';
            wrapper = mount(<YearPicker defaultValue={startYear} onChange={val => (ret = val)} />);
            wrapper.find('i.next-input-clear-icon').simulate('click');
            assert(ret === null);
        });

        it('should input value in picker', () => {
            let ret;
            wrapper = mount(<YearPicker onChange={val => (ret = val)} defaultVisible />);
            wrapper.find('.next-year-picker-panel-input input').simulate('change', { target: { value: '2017' } });
            wrapper.find('.next-year-picker-panel-input input').simulate('blur');
            assert(ret.format('YYYY') === '2017');
        });

        it('should input null value in picker', () => {
            let ret;
            wrapper = mount(<YearPicker onChange={val => (ret = val)} value="2018" defaultVisible />);
            wrapper.find('.next-year-picker-input input').simulate('click');
            wrapper
                .find('.next-year-picker-panel-input input')
                .at(0)
                .simulate('change', { target: { value: '' } });
            wrapper
                .find('.next-year-picker-panel-input input')
                .at(0)
                .simulate('blur');

            wrapper
                .find('.next-calendar-year')
                .at(3)
                .simulate('click');
            assert(ret === '2012');
        });

        it('should input disabled date in picker', () => {
            let ret;
            wrapper = mount(<YearPicker onChange={val => (ret = val)} disabledDate={disabledDate} defaultVisible />);
            wrapper.find('.next-year-picker-panel-input input').simulate('change', { target: { value: '2017' } });
            wrapper.find('.next-year-picker-panel-input input').simulate('blur');
            assert(!ret);
        });

        it('should keyboard input', () => {
            wrapper = mount(<YearPicker onChange={val => (ret = val)} disabledDate={disabledDate} defaultVisible />);
            const input = wrapper.find('.next-year-picker-panel-input input');
            const instance = wrapper.instance().getInstance();
            input.simulate('keydown', { keyCode: KEYCODE.DOWN });
            assert(instance.state.dateInputStr === moment().format('YYYY'));
            input.simulate('keydown', { keyCode: KEYCODE.LEFT });
            assert(instance.state.dateInputStr === moment().format('YYYY'));
            input.simulate('keydown', { keyCode: KEYCODE.DOWN, altKey: true });
            input.simulate('keydown', {
                keyCode: KEYCODE.DOWN,
                shiftKey: true,
            });
            input.simulate('keydown', {
                keyCode: KEYCODE.DOWN,
                controlKey: true,
            });
            assert(instance.state.dateInputStr === moment().format('YYYY'));
            input.simulate('keydown', { keyCode: KEYCODE.DOWN });
            assert(
                instance.state.dateInputStr ===
                    moment()
                        .add(1, 'year')
                        .format('YYYY')
            );
            input.simulate('keydown', { keyCode: KEYCODE.UP });
            assert(instance.state.dateInputStr === moment().format('YYYY'));
        });
    });

    describe('value as string', () => {
        it('should defaultValue as string', () => {
            wrapper = mount(<YearPicker defaultValue="2018" />);
            assert(wrapper.find('.next-year-picker-input input').instance().value === '2018');
            assert(wrapper.find('i.next-input-clear-icon').length === 1);
        });

        it('should value as string', () => {
            wrapper = mount(<YearPicker value="2018" />);
            assert(wrapper.find('.next-year-picker-input input').instance().value === '2018');
            wrapper.setProps({ value: '2019' });
            assert(wrapper.find('.next-year-picker-input input').instance().value === '2019');
        });
    });

    describe('issue', () => {
        it('handle value type consistency with Form components #2895', () => {
            let ret;
            const onChange = val => {
                ret = val;
            };
            const wrapperA = mount(
                <Form>
                    <Form.Item>
                        <YearPicker name="date" defaultValue="" onChange={onChange} />
                    </Form.Item>
                </Form>
            );
            wrapperA.find('.next-year-picker-input input').simulate('click');
            wrapperA.find('.next-calendar-year').at(3).simulate('click');
            assert(typeof ret === 'string');
            wrapperA.find('i.next-input-clear-icon').simulate('click');
            wrapperA.find('.next-year-picker-input input').simulate('click');
            wrapperA.find('.next-calendar-year').at(3).simulate('click');
            assert(typeof ret === 'string');
        });
    });
});

describe('MonthPicker', () => {
    const startMonth = moment('2018-01', 'YYYY-MM', true);
    const endMonth = moment('2018-10', 'YYYY-MM', true);

    let wrapper;
    afterEach(() => {
        if (wrapper) {
            wrapper.unmount();
        }
        wrapper = null;
    });

    describe('render with props', () => {
        it('should render with defaultValue', () => {
            wrapper = mount(<MonthPicker defaultValue={startMonth} />);
            assert(wrapper.find('.next-month-picker-input input').instance().value === '2018-01');
            assert(wrapper.find('i.next-input-clear-icon').length === 1);
        });

        it('should set hasClear to false', () => {
            wrapper = mount(<MonthPicker defaultValue={startMonth} hasClear={false} />);
            assert(!wrapper.find('i.next-input-clear-icon').length);
        });

        it('should render controlled value of MonthPicker', () => {
            wrapper = mount(<MonthPicker value={startMonth} />);
            assert(wrapper.find('.next-month-picker-input input').instance().value === '2018-01');
            wrapper.setProps({ value: endMonth });
            assert(wrapper.find('.next-month-picker-input input').instance().value === '2018-10');
        });

        it('should render controlled visible of MonthPicker', () => {
            wrapper = mount(<MonthPicker visible={false} />);
            assert(wrapper.find('.next-month-picker-body').length === 0);
            wrapper.setProps({ visible: true });
            assert(wrapper.find('.next-month-picker-body').length === 1);
        });

        it('should render dateInputAriaLabel', () => {
            wrapper = mount(<MonthPicker popupClassName="test-aria" visible={true} dateInputAriaLabel="Ho Ho Ho!" />);

            assert(wrapper.find('.test-aria .next-month-picker-panel-input input').prop('aria-label') === 'Ho Ho Ho!');
        });

        it('should support preview mode render', () => {
            wrapper = mount(<MonthPicker defaultValue="2018-11-11" isPreview />);
            assert(wrapper.find('.next-form-preview').length > 0);
            assert(wrapper.find('.next-form-preview').text() === '2018-11');
            wrapper.setProps({
                renderPreview: value => {
                    assert(value.format('YYYY-MM') === '2018-11');
                    return 'Hello World';
                },
            });
            assert(wrapper.find('.next-form-preview').text() === 'Hello World');
        });
    });

    describe('action', () => {
        it('should select', () => {
            let ret;
            wrapper = mount(<MonthPicker defaultVisibleYear={() => startMonth} onChange={val => (ret = val)} />);
            wrapper.find('.next-month-picker-input input').simulate('click');
            wrapper.find('td[title="Feb"] .next-calendar-month').simulate('click');
            assert(ret.format('YYYY-MM') === '2018-02');
        });

        it('should clear value', () => {
            let ret = 'hello';
            wrapper = mount(<MonthPicker defaultValue={startMonth} onChange={val => (ret = val)} />);
            wrapper.find('i.next-input-clear-icon').simulate('click');
            assert(ret === null);
        });

        it('should input value in picker', () => {
            let ret;
            wrapper = mount(<MonthPicker onChange={val => (ret = val)} defaultVisible />);
            wrapper.find('.next-month-picker-panel-input input').simulate('change', { target: { value: '2017-11' } });
            wrapper.find('.next-month-picker-panel-input input').simulate('blur');
            assert(ret.format('YYYY-MM') === '2017-11');
        });

        it('should input null value in picker', () => {
            let ret;
            wrapper = mount(<MonthPicker onChange={val => (ret = val)} value="2018-02" defaultVisible />);
            wrapper.find('.next-month-picker-input input').simulate('click');
            wrapper
                .find('.next-month-picker-panel-input input')
                .at(0)
                .simulate('change', { target: { value: '' } });
            wrapper
                .find('.next-month-picker-panel-input input')
                .at(0)
                .simulate('blur');

            wrapper
                .find('.next-calendar-month')
                .at(3)
                .simulate('click');
            assert(ret === '2018-04');
        });

        it('should input disabled date in picker', () => {
            let ret;
            wrapper = mount(<MonthPicker onChange={val => (ret = val)} disabledDate={disabledDate} defaultVisible />);
            wrapper.find('.next-month-picker-panel-input input').simulate('change', { target: { value: '2017-11' } });
            wrapper.find('.next-month-picker-panel-input input').simulate('blur');
            assert(!ret);
        });

        it('should keyboard input', () => {
            wrapper = mount(<MonthPicker onChange={val => (ret = val)} disabledDate={disabledDate} defaultVisible />);
            const input = wrapper.find('.next-month-picker-panel-input input');
            const instance = wrapper.instance().getInstance();
            input.simulate('keydown', { keyCode: KEYCODE.DOWN });
            assert(instance.state.dateInputStr === moment().format('YYYY-MM'));
            input.simulate('keydown', { keyCode: KEYCODE.LEFT });
            assert(instance.state.dateInputStr === moment().format('YYYY-MM'));
            input.simulate('keydown', { keyCode: KEYCODE.DOWN, altKey: true });
            input.simulate('keydown', {
                keyCode: KEYCODE.DOWN,
                shiftKey: true,
            });
            input.simulate('keydown', {
                keyCode: KEYCODE.DOWN,
                controlKey: true,
            });
            assert(instance.state.dateInputStr === moment().format('YYYY-MM'));
            input.simulate('keydown', { keyCode: KEYCODE.DOWN });
            assert(
                instance.state.dateInputStr ===
                    moment()
                        .add(1, 'month')
                        .format('YYYY-MM')
            );
            input.simulate('keydown', { keyCode: KEYCODE.UP });
            assert(instance.state.dateInputStr === moment().format('YYYY-MM'));
            input.simulate('keydown', { keyCode: KEYCODE.PAGE_DOWN });
            assert(
                instance.state.dateInputStr ===
                    moment()
                        .add(1, 'month')
                        .format('YYYY-MM')
            );
            input.simulate('keydown', { keyCode: KEYCODE.PAGE_UP });
            assert(instance.state.dateInputStr === moment().format('YYYY-MM'));
            input.simulate('keydown', {
                keyCode: KEYCODE.PAGE_DOWN,
                altKey: true,
            });
            assert(
                instance.state.dateInputStr ===
                    moment()
                        .add(1, 'year')
                        .format('YYYY-MM')
            );
            input.simulate('keydown', {
                keyCode: KEYCODE.PAGE_UP,
                altKey: true,
            });
            assert(instance.state.dateInputStr === moment().format('YYYY-MM'));
        });
    });

    describe('value as string', () => {
        it('should defaultValue as string', () => {
            wrapper = mount(<MonthPicker defaultValue="2018-01" />);
            assert(wrapper.find('.next-month-picker-input input').instance().value === '2018-01');
            assert(wrapper.find('i.next-input-clear-icon').length === 1);
        });

        it('should value as string', () => {
            wrapper = mount(<MonthPicker value="2018-01-23" />);
            assert(wrapper.find('.next-month-picker-input input').instance().value === '2018-01');
            wrapper.setProps({ value: '2019-01-23' });
            assert(wrapper.find('.next-month-picker-input input').instance().value === '2019-01');
        });
    });

    describe('issue', () => {
        it('handle value type consistency with Form components #2895', () => {
            let ret;
            const onChange = val => {
                ret = val;
            };
            const wrapperA = mount(
                <Form>
                    <Form.Item>
                        <MonthPicker name="date" defaultValue="" onChange={onChange} />
                    </Form.Item>
                </Form>
            );
            wrapperA.find('.next-month-picker-input input').simulate('click');
            wrapperA.find('td[title="Feb"] .next-calendar-month').simulate('click');
            assert(typeof ret === 'string');
            wrapperA.find('i.next-input-clear-icon').simulate('click');
            wrapperA.find('.next-month-picker-input input').simulate('click');
            wrapperA.find('td[title="Feb"] .next-calendar-month').simulate('click');
            assert(typeof ret === 'string');
        });
    });
});

describe('WeekPicker', () => {
    const startWeek = moment('2018-01-08', 'YYYY-MM-DD', true);
    const endWeek = moment('2019-10-08', 'YYYY-MM-DD', true);
    let wrapper;
    afterEach(() => {
        if (wrapper) {
            wrapper.unmount();
        }
        wrapper = null;
    });

    describe('render with props', () => {
        it('should render with defaultValue', () => {
            wrapper = mount(<WeekPicker defaultValue={startWeek} />);
            assert(
                wrapper
                    .find('.next-week-picker-input input')
                    .instance()
                    .value.indexOf('2018-') !== -1
            );
            assert(wrapper.find('i.next-input-clear-icon').length === 1);
        });

        it('should set hasClear to false', () => {
            wrapper = mount(<WeekPicker defaultValue={startWeek} hasClear={false} />);
            assert(!wrapper.find('i.next-input-clear-icon').length);
        });

        it('should render controlled value of YearPicker', () => {
            wrapper = mount(<WeekPicker value={startWeek} />);
            assert(
                wrapper
                    .find('.next-week-picker-input input')
                    .instance()
                    .value.indexOf('2018-') !== -1
            );
            wrapper.setProps({ value: endWeek });
            assert(
                wrapper
                    .find('.next-week-picker-input input')
                    .instance()
                    .value.indexOf('2019-') !== -1
            );
        });

        it('should render controlled visible of YearPicker', () => {
            wrapper = mount(<WeekPicker visible={false} />);
            assert(wrapper.find('.next-week-picker-body').length === 0);
            wrapper.setProps({ visible: true });
            assert(wrapper.find('.next-week-picker-body').length === 1);
        });

        it('should support preview mode render', () => {
            wrapper = mount(<WeekPicker defaultValue="2018-48" format="YYYY-w" isPreview />);
            assert(wrapper.find('.next-form-preview').length > 0);
            assert(wrapper.find('.next-form-preview').text() === '2018-48');
            wrapper.setProps({
                renderPreview: value => {
                    assert(value.format('YYYY') === '2018');
                    return 'Hello World';
                },
            });
            assert(wrapper.find('.next-form-preview').text() === 'Hello World');
        });

        // https://github.com/alibaba-fusion/next/issues/1491
        it('fix format issue', () => {
            wrapper = mount(<WeekPicker defaultValue={moment('2019-12-29')} isPreview />);

            assert(wrapper.find('.next-form-preview').length > 0);
            assert((wrapper.find('.next-form-preview').text() === moment.locale()) === 'fr' ? '2019-52e' : '2019-52nd');
        });
    });

    describe('action', () => {
        it('should select', () => {
            let ret;
            wrapper = mount(
                <WeekPicker format="YYYY-w" defaultVisibleMonth={() => startWeek} onChange={val => (ret = val)} />
            );
            wrapper.find('.next-week-picker-input input').simulate('click');
            wrapper
                .find('td[title="2018-3"] .next-calendar-date')
                .at(0)
                .simulate('click');
            assert(ret.format('YYYY-w') === '2018-3');
        });

        it('should clear value', () => {
            let ret = 'hello';
            wrapper = mount(<WeekPicker defaultValue={startWeek} onChange={val => (ret = val)} />);
            wrapper.find('i.next-input-clear-icon').simulate('click');
            assert(ret === null);
        });

        it('should keyboard input', () => {
            let ret;
            wrapper = mount(<WeekPicker onChange={val => (ret = val)} defaultVisible />);
            const input = wrapper.find('.next-week-picker-input input');
            const instance = wrapper.instance().getInstance();
            input.simulate('keydown', { keyCode: KEYCODE.DOWN });
            assert(instance.state.value.format('YYYY-MM-DD') === moment().format('YYYY-MM-DD'));
            input.simulate('keydown', { keyCode: KEYCODE.LEFT });
            assert(instance.state.value.format('YYYY-MM-DD') === moment().format('YYYY-MM-DD'));
            input.simulate('keydown', { keyCode: KEYCODE.DOWN, altKey: true });
            input.simulate('keydown', {
                keyCode: KEYCODE.DOWN,
                shiftKey: true,
            });
            input.simulate('keydown', {
                keyCode: KEYCODE.DOWN,
                controlKey: true,
            });
            assert(instance.state.value.format('YYYY-MM-DD') === moment().format('YYYY-MM-DD'));
            input.simulate('keydown', { keyCode: KEYCODE.DOWN });
            assert(
                instance.state.value.format('YYYY-MM-DD') ===
                    moment()
                        .add(1, 'w')
                        .format('YYYY-MM-DD')
            );
            input.simulate('keydown', { keyCode: KEYCODE.UP });
            assert(instance.state.value.format('YYYY-MM-DD') === moment().format('YYYY-MM-DD'));

            const curMoment = moment()
                .add(1, 'month')
                .subtract(1, 'month');

            input.simulate('keydown', { keyCode: KEYCODE.PAGE_DOWN });
            assert(instance.state.value.format('YYYY-MM-DD') === curMoment.add(1, 'month').format('YYYY-MM-DD'));
            input.simulate('keydown', { keyCode: KEYCODE.PAGE_UP });
            assert(instance.state.value.format('YYYY-MM-DD') === curMoment.subtract(1, 'month').format('YYYY-MM-DD'));
            input.simulate('keydown', {
                keyCode: KEYCODE.PAGE_DOWN,
                altKey: true,
            });
            assert(instance.state.value.format('YYYY-MM-DD') === curMoment.add(1, 'year').format('YYYY-MM-DD'));
            input.simulate('keydown', {
                keyCode: KEYCODE.PAGE_UP,
                altKey: true,
            });
            assert(instance.state.value.format('YYYY-MM-DD') === curMoment.subtract(1, 'year').format('YYYY-MM-DD'));
        });
    });
});

describe('RangePicker', () => {
    let wrapper;

    function openPanel(isStart = true) {
        wrapper &&
            wrapper
                .find('.next-range-picker-trigger-input input')
                .at(isStart ? 0 : 1)
                .simulate('click');
    }

    afterEach(() => {
        if (wrapper) {
            wrapper.unmount();
        }
        wrapper = null;
    });

    describe('render with props', () => {
        it('should render', () => {
            wrapper = mount(<RangePicker />);
            assert(wrapper.find('.next-range-picker').length === 1);
        });

        it('should render with defaultValue', () => {
            wrapper = mount(<RangePicker defaultValue={[startValue, endValue]} />);
            assert(
                wrapper
                    .find('.next-range-picker-trigger-input input')
                    .at(0)
                    .instance().value === '2017-11-20'
            );
            assert(
                wrapper
                    .find('.next-range-picker-trigger-input input')
                    .at(1)
                    .instance().value === '2017-12-15'
            );
        });

        it('should render set hasClear to false', () => {
            wrapper = mount(<RangePicker defaultValue={[startValue, endValue]} hasClear={false} />);
            assert(!wrapper.find('i.next-input-clear-icon').length);
        });

        it('should render controlled value of RangePicker', () => {
            wrapper = mount(<RangePicker value={[startValue, endValue]} />);
            wrapper.setProps({
                value: [startValue.clone().add(1, 'days'), endValue.clone().add(1, 'days')],
            });
            assert(
                wrapper
                    .find('.next-range-picker-trigger-input input')
                    .at(0)
                    .instance().value === '2017-11-21'
            );
            assert(
                wrapper
                    .find('.next-range-picker-trigger-input input')
                    .at(1)
                    .instance().value === '2017-12-16'
            );
        });

        it('should render controlled visible of RangePicker', () => {
            wrapper = mount(<RangePicker visible={false} />);
            assert(!wrapper.find('.next-range-picker-body').length);
            wrapper.setProps({ visible: true });
            assert(wrapper.find('.next-range-picker-body').length === 1);
        });

        it('should hide seconds', () => {
            wrapper = mount(<RangePicker defaultVisible showTime={{ format: 'HH:mm' }} />);
            assert(!wrapper.find('.next-time-picker-menu-hour').length);
        });

        it('should render dateInputAriaLabel & timeInputAriaLabel', () => {
            wrapper = mount(
                <RangePicker
                    startDateInputAriaLabel="Ho Ho Ho1!"
                    startTimeInputAriaLabel="Ho Ho Ho2!"
                    endDateInputAriaLabel="Ho Ho Ho3!"
                    endTimeInputAriaLabel="Ho Ho Ho4!"
                    defaultVisible
                    showTime={{ format: 'HH:mm' }}
                />
            );

            assert(wrapper.find('.next-range-picker-panel-input-start-date input').prop('aria-label') === 'Ho Ho Ho1!');
            assert(wrapper.find('.next-range-picker-panel-input-start-time input').prop('aria-label') === 'Ho Ho Ho2!');
            assert(wrapper.find('.next-range-picker-panel-input-end-date input').prop('aria-label') === 'Ho Ho Ho3!');
            assert(wrapper.find('.next-range-picker-panel-input-end-time input').prop('aria-label') === 'Ho Ho Ho4!');
        });

        it('should support ranges', () => {
            const now = new Date();
            const start = new Date().setDate(1);
            const end = new Date().setDate(7);

            const quickRanges = {
                Today: [now, now],
                'First Week': [start, end],
            };
            const handleChange = values => {
                assert(values[0].isSame(start));
                assert(values[1].isSame(end));
            };
            wrapper = mount(<RangePicker defaultVisible onChange={handleChange} ranges={quickRanges} />);

            assert(wrapper.find('.next-date-picker-panel-tools').length > 0);

            wrapper
                .find('.next-date-picker-panel-tools .next-btn')
                .at(1)
                .simulate('click');
            // assert(wrapper.instance().getInstance().startValue && wrapper.instance().getInstance().startValue.isSame(start));
        });

        it('should render type month', () => {
            wrapper = mount(<RangePicker type="month" followTrigger visible defaultValue={['2018-03', '2018-08']} />);
            assert(wrapper.find('.next-calendar').length === 2);
        });

        it('should render type year', () => {
            wrapper = mount(<RangePicker type="year" followTrigger visible defaultValue={['2018', '2019']} />);
            assert(wrapper.find('.next-calendar').length === 2);
        });

        it('should support preview mode render', () => {
            wrapper = mount(<RangePicker defaultValue={[startValue, endValue]} isPreview />);
            assert(wrapper.find('.next-form-preview').length > 0);
            assert(wrapper.find('.next-form-preview').text() === '2017-11-20 - 2017-12-15');
            wrapper.setProps({
                renderPreview: ([start]) => {
                    assert(start.format('YYYY-MM-DD') === '2017-11-20');
                    return 'Hello World';
                },
            });
            assert(wrapper.find('.next-form-preview').text() === 'Hello World');
        });

        it('should support to set placeholder', () => {
            const placeholder = ['开始日期', '结束日期'];

            wrapper = mount(<RangePicker placeholder={placeholder} />);

            const [startPlaceholder, endPlaceholder] = wrapper
                .find('.next-range-picker input')
                .map(node => node.prop('placeholder'));

            assert(startPlaceholder === placeholder[0]);
            assert(endPlaceholder === placeholder[1]);
        });

        it('should support to set placeholder string', () => {
            const placeholder = 'Please select range';

            wrapper = mount(<RangePicker placeholder={placeholder} />);

            const [startPlaceholder, endPlaceholder] = wrapper
                .find('.next-range-picker input')
                .map(node => node.prop('placeholder'));

            assert(startPlaceholder === placeholder);
            assert(endPlaceholder === placeholder);
        });
    });

    describe('action', () => {
        it('should foucs the input of start date', () => {
            wrapper = mount(<RangePicker />);
            wrapper
                .find('.next-range-picker-trigger-input input')
                .at(0)
                .simulate('focus');
            wrapper
                .find('.next-range-picker-trigger-input input')
                .at(0)
                .simulate('click');
            wrapper.find('span.next-range-picker-panel-input-start-date').hasClass('next-focus');
        });

        it('should foucs the input of end date', () => {
            wrapper = mount(<RangePicker />);
            wrapper
                .find('.next-range-picker-trigger-input input')
                .at(1)
                .simulate('focus');
            wrapper
                .find('.next-range-picker-trigger-input input')
                .at(1)
                .simulate('click');
            wrapper.find('span.next-range-picker-panel-input-end-date').hasClass('next-focus');
        });

        it('should focus the input to change panel', () => {
            wrapper = mount(<RangePicker showTime defaultValue={[startValue, endValue]} defaultVisible />);
            wrapper.find('.next-range-picker-panel-input-start-time input').simulate('focus');
            wrapper.find('.next-range-picker-panel-input-start-time input').simulate('blur');
            assert(wrapper.find('.next-range-picker-panel-time').length === 1);
            wrapper.find('.next-range-picker-panel-input-start-date input').simulate('focus');
            wrapper.find('.next-range-picker-panel-input-start-date input').simulate('blur');
            assert(wrapper.find('.next-calendar-range').length === 1);
        });

        it('should select range', () => {
            let ret;
            wrapper = mount(<RangePicker defaultValue={[startValue, endValue]} onChange={val => (ret = val)} />);
            wrapper
                .find('.next-range-picker-trigger-input input')
                .at(0)
                .simulate('click');
            wrapper.find('td[title="2017-11-09"] .next-calendar-date').simulate('click');
            assert(ret[0].format('YYYY-MM-DD') === '2017-11-09');
            assert(ret[1].format('YYYY-MM-DD') === '2017-12-15');
        });

        it('should select in type range', () => {
            let ret;
            wrapper = mount(
                <RangePicker type="month" defaultValue={[startValue, endValue]} onChange={val => (ret = val)} />
            );
            wrapper
                .find('.next-range-picker-trigger-input input')
                .at(0)
                .simulate('click');
            wrapper
                .find('td[title="Aug"] .next-calendar-month')
                .at(0)
                .simulate('click');
            assert(ret[0].format('YYYY-MM-DD') === '2017-08-01');
        });

        it('should select range with same day', () => {
            let ret;
            wrapper = mount(
                <RangePicker defaultValue={[startValue, endValue]} onChange={val => (ret = val)} visible />
            );
            wrapper.find('.next-range-picker-panel-input-start-date input').simulate('focus');
            wrapper.find('td[title="2017-11-09"] .next-calendar-date').simulate('click');
            wrapper.find('.next-range-picker-panel-input-end-date input').simulate('focus');
            wrapper.find('td[title="2017-11-09"] .next-calendar-date').simulate('click');
            assert(ret[0].format('YYYY-MM-DD') === '2017-11-09');
            assert(ret[1].format('YYYY-MM-DD') === '2017-11-09');
        });

        it('should clear range', () => {
            let ret;
            wrapper = mount(<RangePicker defaultValue={[startValue, endValue]} onChange={val => (ret = val)} />);
            wrapper.find('i.next-input-clear-icon').simulate('click');
            assert(!ret[0]);
            assert(!ret[1]);
        });
        // issue: https://github.com/alibaba-fusion/next/issues/3448
        it('should clear range when only half value', () => {
            let ret;
            wrapper = mount(<RangePicker defaultValue={[, endValue]} onChange={val => (ret = val)} />);
            wrapper.find('i.next-input-clear-icon').simulate('click');
            assert(!ret[0]);
            assert(!ret[1]);
        });

        it('should input range value', function() {
            this.timeout(3000);
            let ret;
            wrapper = mount(
                <RangePicker defaultVisibleMonth={() => startValue} showTime visible onChange={val => (ret = val)} />
            );
            wrapper.find('.next-range-picker-panel-input-start-date input').simulate('focus');
            wrapper
                .find('.next-range-picker-panel-input-start-date input')
                .simulate('change', { target: { value: '2017-11-05' } });
            wrapper.find('.next-range-picker-panel-input-start-date input').simulate('blur');
            assert(ret[0].format('YYYY-MM-DD') === '2017-11-05');
            assert(!ret[1]);
            wrapper.find('.next-range-picker-panel-input-end-date input').simulate('focus');
            wrapper
                .find('.next-range-picker-panel-input-end-date input')
                .simulate('change', { target: { value: '2017-12-05' } });
            wrapper.find('.next-range-picker-panel-input-end-date input').simulate('blur');
            assert(ret[0].format('YYYY-MM-DD') === '2017-11-05');
            assert(ret[1].format('YYYY-MM-DD') === '2017-12-05');
            wrapper.find('.next-range-picker-panel-input-start-time input').simulate('focus');
            wrapper
                .find('.next-range-picker-panel-input-start-time input')
                .simulate('change', { target: { value: '09:00:00' } });
            wrapper.find('.next-range-picker-panel-input-start-time input').simulate('blur');
            assert(ret[0].format('YYYY-MM-DD HH:mm:ss') === '2017-11-05 09:00:00');
            assert(ret[1].format('YYYY-MM-DD HH:mm:ss') === '2017-12-05 00:00:00');
            wrapper.find('.next-range-picker-panel-input-end-time input').simulate('focus');
            wrapper
                .find('.next-range-picker-panel-input-end-time input')
                .simulate('change', { target: { value: '20:00:00' } });
            wrapper.find('.next-range-picker-panel-input-end-time input').simulate('blur');
            assert(ret[0].format('YYYY-MM-DD HH:mm:ss') === '2017-11-05 09:00:00');
            assert(ret[1].format('YYYY-MM-DD HH:mm:ss') === '2017-12-05 20:00:00');
        });

        it('should input disabled date in picker', () => {
            let ret;
            wrapper = mount(<RangePicker onChange={val => (ret = val)} disabledDate={disabledDate} defaultVisible />);
            wrapper.find('.next-range-picker-panel-input-start-date input').simulate('focus');
            wrapper
                .find('.next-range-picker-panel-input-start-date input')
                .simulate('change', { target: { value: '2017-11-05' } });
            wrapper.find('.next-range-picker-panel-input-start-date input').simulate('blur');

            assert(!ret);
        });

        it('should select time panel', () => {
            let ret;
            wrapper = mount(
                <RangePicker
                    showTime
                    defaultVisible
                    defaultValue={[startValue, endValue]}
                    onChange={val => (ret = val)}
                />
            );
            wrapper.find('.next-range-picker-panel-input-start-time input').simulate('focus');
            wrapper
                .find('.next-range-picker-panel-time-start .next-time-picker-menu-hour .next-time-picker-menu-item')
                .at(3)
                .simulate('click');
            assert(ret[0].format('YYYY-MM-DD HH:mm:ss') === '2017-11-20 03:00:00');
            wrapper
                .find('.next-range-picker-panel-time-end .next-time-picker-menu-hour .next-time-picker-menu-item')
                .at(3)
                .simulate('click');
            assert(ret[1].format('YYYY-MM-DD HH:mm:ss') === '2017-12-15 03:00:00');
        });

        it('should select start date & time then select end date & time', () => {
            let ret;
            wrapper = mount(
                <RangePicker
                    showTime
                    defaultVisible
                    defaultVisibleMonth={() => moment('2019-08-01', 'YYYY-MM-DD')}
                    onChange={val => (ret = val)}
                />
            );

            wrapper.find('.next-calendar-cell[title="2019-08-06"]').simulate('click');
            wrapper.find('.next-range-picker-panel-input-start-time input').simulate('focus');
            wrapper
                .find('.next-range-picker-panel-time-start .next-time-picker-menu-hour .next-time-picker-menu-item')
                .at(3)
                .simulate('click');
            wrapper
                .find('.next-date-picker-panel-footer .next-btn')
                .at(0)
                .simulate('click');
            wrapper.find('.next-calendar-cell[title="2019-08-09"]').simulate('click');
            wrapper.find('.next-range-picker-panel-input-end-time input').simulate('focus');
            wrapper
                .find('.next-range-picker-panel-time-end .next-time-picker-menu-hour .next-time-picker-menu-item')
                .at(3)
                .simulate('click');
            assert(ret[0].format('YYYY-MM-DD HH:mm:ss') === '2019-08-06 03:00:00');
        });

        it('should set defaultValue for TimePicker', () => {
            let ret;
            wrapper = mount(
                <RangePicker
                    showTime={{ defaultValue: defaultTimeValue }}
                    defaultVisible
                    defaultVisibleMonth={() => startValue}
                    onChange={val => (ret = val)}
                />
            );

            wrapper.find('td[title="2017-11-09"] .next-calendar-date').simulate('click');
            assert(ret[0].format('YYYY-MM-DD HH:mm:ss') === '2017-11-09 09:00:00');
            wrapper
                .find('td[title="2017-12-09"] .next-calendar-date')
                .at(1)
                .simulate('click');
            assert(ret[1].format('YYYY-MM-DD HH:mm:ss') === '2017-12-09 09:00:00');
        });

        it('should set defaultValues for TimePicker', () => {
            let ret;
            wrapper = mount(
                <RangePicker
                    showTime={{ defaultValue: defaultTimeValues }}
                    defaultVisible
                    defaultVisibleMonth={() => startValue}
                    onChange={val => (ret = val)}
                />
            );
            wrapper.find('td[title="2017-11-09"] .next-calendar-date').simulate('click');
            assert(ret[0].format('YYYY-MM-DD HH:mm:ss') === '2017-11-09 09:00:00');
            wrapper
                .find('td[title="2017-12-09"] .next-calendar-date')
                .at(1)
                .simulate('click');
            assert(ret[1].format('YYYY-MM-DD HH:mm:ss') === '2017-12-09 23:59:59');
        });

        it('should resetTime', () => {
            let ret;

            wrapper = mount(
                <RangePicker
                    showTime
                    resetTime
                    defaultVisible
                    defaultValue={[
                        moment('2017-11-12 10:10:10', 'YYYY-MM-DD HH:mm:ss', true),
                        moment('2017-12-12 11:11:11', 'YYYY-MM-DD HH:mm:ss', true),
                    ]}
                    onChange={val => (ret = val)}
                />
            );
            wrapper.find('td[title="2017-11-09"] .next-calendar-date').simulate('click');
            assert(ret[0].format('YYYY-MM-DD HH:mm:ss') === '2017-11-09 00:00:00');
            wrapper.find('.next-range-picker-panel-input-end-date input').simulate('focus');
            wrapper
                .find('td[title="2017-12-09"] .next-calendar-date')
                .at(1)
                .simulate('click');
            assert(ret[1].format('YYYY-MM-DD HH:mm:ss') === '2017-12-09 00:00:00');
        });

        it('should not resetTime as default', () => {
            let ret;

            wrapper = mount(
                <RangePicker
                    showTime
                    defaultVisible
                    defaultValue={[
                        moment('2017-11-12 10:10:10', 'YYYY-MM-DD HH:mm:ss', true),
                        moment('2017-12-12 11:11:11', 'YYYY-MM-DD HH:mm:ss', true),
                    ]}
                    onChange={val => (ret = val)}
                />
            );
            wrapper.find('td[title="2017-11-09"] .next-calendar-date').simulate('click');
            assert(ret[0].format('YYYY-MM-DD HH:mm:ss') === '2017-11-09 10:10:10');
            wrapper.find('.next-range-picker-panel-input-end-date input').simulate('focus');
            wrapper
                .find('td[title="2017-12-09"] .next-calendar-date')
                .at(1)
                .simulate('click');
            assert(ret[1].format('YYYY-MM-DD HH:mm:ss') === '2017-12-09 11:11:11');
            // 选择了一个比开始日期更小的结束日期，此时表示用户重新选择了
            // 结束日期等于开始日期 不修改时间
            wrapper.find('.next-range-picker-panel-input-end-date input').simulate('focus');
            wrapper.find('td[title="2017-11-08"] .next-calendar-date').simulate('click');
            assert(ret[0].format('YYYY-MM-DD HH:mm:ss') === '2017-11-08 10:10:10');
            assert(ret[1].format('YYYY-MM-DD HH:mm:ss') === '2017-11-08 11:11:11');
        });

        it('should select a endDay less than the previous startDay', () => {
            let ret;
            wrapper = mount(
                <RangePicker defaultValue={[startValue, endValue]} defaultVisible onChange={val => (ret = val)} />
            );
            wrapper.find('.next-range-picker-panel-input-end-date input').simulate('focus');
            wrapper.find('td[title="2017-11-01"] .next-calendar-date').simulate('click');
            assert(ret[0].format('YYYY-MM-DD') === '2017-11-01');
        });

        it('should select end month n, panel visible month should be from n-1 to n', () => {
            let ret;
            wrapper = mount(
                <RangePicker defaultValue={[startValue, endValue]} defaultVisible onChange={val => (ret = val)} />
            );
            wrapper.find('.next-range-picker-panel-input-end-date input').simulate('focus');
            wrapper
                .find('.next-calendar-panel-header-right .next-calendar-btn')
                .at(0)
                .simulate('click');

            wrapper.find('.next-calendar-tbody tr td[title="Feb"]').simulate('click');

            assert(wrapper.find('.next-calendar-panel-header-right .next-calendar-btn[title="February"]'));
        });

        it('should select a startDay bigger than the previous endDay', () => {
            let ret;
            wrapper = mount(
                <RangePicker defaultValue={[startValue, endValue]} defaultVisible onChange={val => (ret = val)} />
            );
            wrapper.find('.next-range-picker-panel-input-start-date input').simulate('focus');
            wrapper.find('td[title="2017-12-25"] .next-calendar-date').simulate('click');
            assert.deepEqual(ret.map(m => m.format('YYYY-MM-DD')), ['2017-12-25', '2017-12-25']);
        });

        it('should select endDate firstly', () => {
            let ret;
            wrapper = mount(
                <RangePicker defaultVisibleMonth={() => startValue} defaultVisible onChange={val => (ret = val)} />
            );
            wrapper.find('.next-range-picker-panel-input-end-date input').simulate('focus');
            wrapper.find('td[title="2017-12-25"] .next-calendar-date').simulate('click');
            assert(ret[0] === null);
            assert(ret[1].format('YYYY-MM-DD') === '2017-12-25');
        });

        it('should select Year', () => {
            wrapper = mount(<RangePicker defaultVisibleMonth={() => startValue} defaultVisible />);
            wrapper
                .find('.next-calendar-panel-header-left .next-calendar-btn')
                .at(1)
                .simulate('click');

            wrapper
                .find('.next-calendar-year')
                .at(5)
                .simulate('click');
            assert(wrapper.find('.next-calendar-panel-header-full .next-calendar-btn').text() === '2014');
        });

        it('should select time panel', () => {
            let ret;
            wrapper = mount(
                <RangePicker
                    defaultValue={[startValue, endValue]}
                    showTime
                    defaultVisibleMonth={() => startValue}
                    defaultVisible
                    onChange={val => (ret = val)}
                />
            );
            wrapper
                .find('.next-date-picker-panel-footer .next-btn')
                .at(0)
                .simulate('click');
            assert(wrapper.find('div.next-range-picker-panel-time').length === 1);
        });

        it('should click onOk', () => {
            let ret;
            wrapper = mount(
                <RangePicker showTime defaultVisibleMonth={() => startValue} defaultVisible onOk={val => (ret = val)} />
            );
            wrapper.find('td[title="2017-11-09"] .next-calendar-date').simulate('click');
            wrapper.find('td[title="2017-11-11"] .next-calendar-date').simulate('click');
            wrapper
                .find('.next-date-picker-panel-footer .next-btn')
                .at(1)
                .simulate('click');
            assert(ret[0].format('YYYY-MM-DD HH:mm:ss') === '2017-11-09 00:00:00');
            assert(ret[1].format('YYYY-MM-DD HH:mm:ss') === '2017-11-11 00:00:00');
        });

        // fix issue: https://github.com/alibaba-fusion/next/issues/1799
        it('should call onOk handler after setting state effective', done => {
            let value;
            const onOk = val => (value = val.map(v => v.toString()));
            const curMoment = moment(new Date());

            wrapper = mount(<RangePicker ranges={{ 快捷选择: [curMoment, curMoment] }} onOk={onOk} />);

            openPanel();
            wrapper.find('.next-date-picker-panel-tools .next-btn-text').simulate('click');

            setTimeout(() => {
                assert(value[0] === curMoment.toString());
                assert(value[1] === curMoment.toString());
                done();
            }, 0);
        });

        it('should keyboard date input', () => {
            wrapper = mount(<RangePicker defaultVisible />);
            const input = wrapper.find('.next-range-picker-panel-input-start-date input').at(0);
            const instance = wrapper.instance().getInstance();
            input.simulate('keydown', { keyCode: KEYCODE.DOWN });
            assert(instance.state.startDateInputStr === moment().format('YYYY-MM-DD'));
            input.simulate('keydown', { keyCode: KEYCODE.LEFT });
            assert(instance.state.startDateInputStr === moment().format('YYYY-MM-DD'));
            input.simulate('keydown', { keyCode: KEYCODE.DOWN, altKey: true });
            input.simulate('keydown', {
                keyCode: KEYCODE.DOWN,
                shiftKey: true,
            });
            input.simulate('keydown', {
                keyCode: KEYCODE.DOWN,
                controlKey: true,
            });
            assert(instance.state.startDateInputStr === moment().format('YYYY-MM-DD'));
            input.simulate('keydown', { keyCode: KEYCODE.DOWN });
            assert(
                instance.state.startDateInputStr ===
                    moment()
                        .add(1, 'day')
                        .format('YYYY-MM-DD')
            );
            input.simulate('keydown', { keyCode: KEYCODE.UP });
            assert(instance.state.startDateInputStr === moment().format('YYYY-MM-DD'));

            const curMoment = moment()
                .add('month', 1)
                .subtract('month', 1);

            input.simulate('keydown', { keyCode: KEYCODE.PAGE_DOWN });
            assert(instance.state.startDateInputStr === curMoment.add(1, 'month').format('YYYY-MM-DD'));
            input.simulate('keydown', { keyCode: KEYCODE.PAGE_UP });
            assert(instance.state.startDateInputStr === curMoment.subtract(1, 'month').format('YYYY-MM-DD'));
            input.simulate('keydown', {
                keyCode: KEYCODE.PAGE_DOWN,
                altKey: true,
            });
            assert(instance.state.startDateInputStr === curMoment.add(1, 'year').format('YYYY-MM-DD'));
            input.simulate('keydown', {
                keyCode: KEYCODE.PAGE_UP,
                altKey: true,
            });
            assert(instance.state.startDateInputStr === curMoment.subtract(1, 'year').format('YYYY-MM-DD'));
        });

        it('should keyboard date time input', () => {
            wrapper = mount(
                <RangePicker
                    showTime={{ format: 'HH:mm:ss' }}
                    defaultVisible
                    value={[
                        moment()
                            .hours(0)
                            .minutes(0)
                            .seconds(0),
                        moment()
                            .hours(0)
                            .minutes(0)
                            .seconds(0)
                            .add(1, 'month'),
                    ]}
                />
            );

            const timeInput = wrapper.find('.next-range-picker-panel-input-start-time input');
            const instance = wrapper.instance().getInstance();

            instance.state.activeDateInput = 'startTime';
            timeInput.simulate('keydown', { keyCode: KEYCODE.DOWN });
            assert(instance.state.startTimeInputStr === '00:00:00');
            timeInput.simulate('keydown', { keyCode: KEYCODE.LEFT });
            timeInput.simulate('keydown', {
                keyCode: KEYCODE.DOWN,
                altKey: true,
            });
            timeInput.simulate('keydown', {
                keyCode: KEYCODE.DOWN,
                shiftKey: true,
            });
            timeInput.simulate('keydown', {
                keyCode: KEYCODE.DOWN,
                controlKey: true,
            });
            assert(instance.state.startTimeInputStr === '00:00:00');
            timeInput.simulate('keydown', { keyCode: KEYCODE.DOWN });
            assert(instance.state.startTimeInputStr === '00:00:01');
            timeInput.simulate('keydown', { keyCode: KEYCODE.UP });
            assert(instance.state.startTimeInputStr === '00:00:00');
            timeInput.simulate('keydown', { keyCode: KEYCODE.PAGE_DOWN });
            assert(instance.state.startTimeInputStr === '00:01:00');
            timeInput.simulate('keydown', { keyCode: KEYCODE.PAGE_UP });
            assert(instance.state.startTimeInputStr === '00:00:00');
            timeInput.simulate('keydown', {
                keyCode: KEYCODE.PAGE_DOWN,
                altKey: true,
            });
            assert(instance.state.startTimeInputStr === '01:00:00');
            timeInput.simulate('keydown', {
                keyCode: KEYCODE.PAGE_UP,
                altKey: true,
            });
            assert(instance.state.startTimeInputStr === '00:00:00');
        });

        // fix issue: https://github.com/alibaba-fusion/next/issues/2198
        it('should reset time when time is empty', done => {
            wrapper = mount(<RangePicker showTime value={[moment(), moment()]} />);
            openPanel();

            const sltor = '.next-range-picker-panel-input-start-time input';
            const timeInput = wrapper.find(sltor);

            document.querySelector(sltor).value = '';
            timeInput.simulate('blur');

            setTimeout(() => {
                document.querySelector(sltor).value !== '';
                done();
            });
        });

        // fix issue: https://github.com/alibaba-fusion/next/issues/2183
        it('should be able to select same day', done => {
            let value;

            wrapper = mount(<RangePicker showTime onChange={val => (value = val)} />);
            openPanel();

            const cell = wrapper.find('.next-calendar-cell').at(10);

            cell.simulate('click');
            cell.simulate('click');

            setTimeout(() => {
                assert(value.every(v => moment.isMoment(v) && v.isValid()));
                assert(value[0].valueOf() === value[1].valueOf());
                done();
            });
        });
    });

    describe('with date string', () => {
        it('should defaultValue as string', () => {
            wrapper = mount(<RangePicker defaultValue={['2017-11-11', '2017-11-12']} />);
            assert(
                wrapper
                    .find('.next-range-picker-trigger-input input')
                    .at(0)
                    .instance().value === '2017-11-11'
            );
            assert(
                wrapper
                    .find('.next-range-picker-trigger-input input')
                    .at(1)
                    .instance().value === '2017-11-12'
            );
        });

        it('should value as string', () => {
            wrapper = mount(<RangePicker value={['2017-11-11', '2017-11-12']} />);
            wrapper.setProps({ value: ['2017-12-11', '2017-12-12'] });
            assert(
                wrapper
                    .find('.next-range-picker-trigger-input input')
                    .at(0)
                    .instance().value === '2017-12-11'
            );
            assert(
                wrapper
                    .find('.next-range-picker-trigger-input input')
                    .at(1)
                    .instance().value === '2017-12-12'
            );
        });
    });

    describe('with hooks', () => {
        // fix #1640: 修复在blur事件中使用hooks方式导致组件re-render，日期的月份被重置
        it('should be compatible with hooks', () => {
            function App() {
                const [value, setValue] = useState('2020-03-09');
                const [count, setCount] = useState(0);
                return <DatePicker value={value} onBlur={() => setCount(count + 1)} onChange={val => setValue(val)} />;
            }
            wrapper = mount(<App />);
            wrapper
                .find('.next-date-picker-trigger input')
                .first()
                .simulate('click');
            wrapper
                .find('.next-calendar-btn-next-month')
                .first()
                .simulate('click');
            wrapper
                .find('.next-calendar-btn-next-month')
                .first()
                .simulate('blur');

            assert(
                wrapper
                    .find('.next-calendar-panel-header-full .next-calendar-btn')
                    .first()
                    .text() === 'April'
            );
        });
    });
    
    describe('issues', () => {
        it('should render replacing the Focus frame close #3998', async function() {
            this.timeout(99999999);
            const div = document.createElement('div');
            document.body.appendChild(div);
            const wrapper = mount(<RangePicker followTrigger defaultValue={['2024-03-02', '2024-03-03']}/>, {attachTo: div});

            const clickPanelInput = async (index) => {
                const paneInputs = div.querySelectorAll('.next-range-picker-panel-header input');
                assert(paneInputs.length === 2);
                paneInputs[index].click();
                await delay(200);
            }
            const assertPanelInputValue = (index, value) => {
                const paneInputs = div.querySelectorAll('.next-range-picker-panel-header input');
                assert(paneInputs.length === 2);
                assert(paneInputs[index].value === value);
            }
            const assertPanelInputFocus = (index) => {
                // FIXME 框架限制，focus 状态无法改变，技术升级后再实现
                // const paneInputs = div.querySelectorAll('.next-range-picker-panel-header input');
                // assert(paneInputs.length === 2);
                // assert(document.activeElement && document.activeElement === paneInputs[index]);
            }
            const assertPanelInputHasFocusClass = (index) => {
                // FIXME 框架限制，focus 状态无法改变，技术升级后再实现
                // const paneInputs = div.querySelectorAll('.next-range-picker-panel-header .next-input');
                // assert(paneInputs.length === 2);
                // assert(paneInputs[index].classList.contains('next-focus'));
            }
            const clickDate = async (value) => {
                // ReactTestUtils.Simulate.click(div.querySelector(`td[title="${value}"] .next-calendar-date`));
                div.querySelector(`td[title="${value}"] .next-calendar-date`).click();
                await delay(100);
            }

            const triggerInputs = div.querySelectorAll('.next-range-picker-trigger .next-input');
            assert(triggerInputs.length === 2);
            triggerInputs[0].click();
            
            await delay(500);
            assertPanelInputFocus(0);
            assertPanelInputHasFocusClass(0);
            await clickDate('2024-03-01');
            assertPanelInputValue(0, '2024-03-01');
            assertPanelInputHasFocusClass(1);
            await clickDate('2024-03-08');
            assertPanelInputValue(1, '2024-03-08');
            assertPanelInputHasFocusClass(1);

            await clickPanelInput(0);
            assertPanelInputFocus(0);
            assertPanelInputHasFocusClass(0);
            await clickDate('2024-03-01');
            assertPanelInputValue(0, '2024-03-01');
            assertPanelInputHasFocusClass(1);
            clickDate('2024-03-01');
            assertPanelInputHasFocusClass(1);
            assertPanelInputValue(1, '2024-03-01');

            clickPanelInput(1);
            assertPanelInputFocus(1);
            assertPanelInputHasFocusClass(1);
            clickDate('2024-03-05');
            assertPanelInputValue(1, '2024-03-05');
            assertPanelInputHasFocusClass(0);
            clickDate('2024-03-05');
            assertPanelInputHasFocusClass(0);
            assertPanelInputValue(0, '2024-03-05');

            document.body.click();
            await delay(300);
            triggerInputs[1].click();
            await delay(500);
            assertPanelInputFocus(1);
            assertPanelInputHasFocusClass(1);
            await clickDate('2024-03-08');
            assertPanelInputValue(1, '2024-03-08');
            assertPanelInputHasFocusClass(0);
            await clickDate('2024-03-08');
            assertPanelInputValue(0, '2024-03-08');
            assertPanelInputHasFocusClass(0);

            wrapper.unmount();
        });

        it('handle value type consistency with Form components #2895', () => {
            let ret;
            const onChange = val => {
                ret = val;
            };
            const wrapperA = mount(
                <Form>
                    <Form.Item>
                        <RangePicker name="date" defaultValue={['', '']} onChange={onChange} />
                    </Form.Item>
                </Form>
            );
            wrapperA.find('.next-range-picker-trigger-input input').at(0).simulate('click');
            wrapperA.find('td[title="2024-05-01"] .next-calendar-date').at(0).simulate('click');
            wrapperA.find('td[title="2024-05-06"] .next-calendar-date').at(0).simulate('click');
            assert(typeof ret[0] === 'string' && typeof ret[1] === 'string');
            wrapperA.find('i.next-input-clear-icon').simulate('click');
            wrapperA.find('td[title="2024-05-01"] .next-calendar-date').at(0).simulate('click');
            wrapperA.find('td[title="2024-05-06"] .next-calendar-date').at(0).simulate('click');
            assert(typeof ret[0] === 'string' && typeof ret[1] === 'string');
        });
    });
});
