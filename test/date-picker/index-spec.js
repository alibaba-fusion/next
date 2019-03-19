import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import assert from 'power-assert';
import moment from 'moment';
import DatePicker from '../../src/date-picker/index';

Enzyme.configure({ adapter: new Adapter() });
const { RangePicker, MonthPicker, YearPicker } = DatePicker;

const startValue = moment('2017-11-20', 'YYYY-MM-DD', true);
const endValue = moment('2017-12-15', 'YYYY-MM-DD', true);
const defaultTimeValue = moment('09:00:00', 'HH:mm:ss', true);

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
            assert(
                wrapper.find('.next-date-picker-input input').instance()
                    .value === '2017-11-20'
            );
            assert(wrapper.find('.next-icon-delete-filling').length === 1);
        });

        it('should set hasClear to false', () => {
            wrapper = mount(
                <DatePicker defaultValue={startValue} hasClear={false} />
            );
            assert(!wrapper.find('.next-icon-delete-filling').length);
        });

        it('should render controlled value of DatePicker', () => {
            wrapper = mount(<DatePicker value={startValue} />);
            assert(
                wrapper.find('.next-date-picker-input input').instance()
                    .value === '2017-11-20'
            );
            wrapper.setProps({ value: endValue });
            assert(
                wrapper.find('.next-date-picker-input input').instance()
                    .value === '2017-12-15'
            );
        });

        it('should render controlled visible of DatePicker', () => {
            wrapper = mount(<DatePicker visible={false} />);
            assert(wrapper.find('.next-date-picker-body').length === 0);
            wrapper.setProps({ visible: true });
            assert(wrapper.find('.next-date-picker-body').length === 1);
        });

        it('should hide seconds', () => {
            wrapper = mount(
                <DatePicker defaultVisible showTime={{ format: 'HH:mm' }} />
            );
            assert(!wrapper.find('.next-time-picker-menu-hour').length);
        });
    });

    describe('action', () => {
        it('should select', () => {
            let ret;
            wrapper = mount(
                <DatePicker
                    defaultVisibleMonth={() => startValue}
                    onChange={val => (ret = val)}
                />
            );
            wrapper.find('.next-date-picker-input input').simulate('click');
            wrapper
                .find('td[title="2017-11-09"] .next-calendar-date')
                .simulate('click');
            assert(ret.format('YYYY-MM-DD') === '2017-11-09');
        });

        it('should clear value', () => {
            let ret = 'hello';
            wrapper = mount(
                <DatePicker
                    defaultValue={startValue}
                    onChange={val => (ret = val)}
                />
            );
            wrapper.find('.next-icon-delete-filling').simulate('click');
            assert(ret === null);
        });

        it('should input value in picker', () => {
            let ret;
            wrapper = mount(
                <DatePicker
                    onChange={val => (ret = val)}
                    showTime
                    defaultVisible
                />
            );
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

        it('should input disabled date in picker', () => {
            let ret;
            wrapper = mount(
                <DatePicker
                    onChange={val => (ret = val)}
                    disabledDate={disabledDate}
                    defaultVisible
                />
            );
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
            wrapper = mount(
                <DatePicker showTime defaultVisible defaultValue={startValue} />
            );
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
                <DatePicker
                    showTime
                    defaultVisible
                    defaultValue={startValue}
                    onChange={val => (ret = val)}
                />
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
            wrapper = mount(
                <DatePicker showTime defaultVisible defaultValue={startValue} />
            );
            wrapper
                .find('.next-date-picker-panel-footer .next-btn')
                .at(0)
                .simulate('click');
            assert(
                wrapper.find('div.next-date-picker-panel-time').length === 1
            );
        });

        it('should click onOk', () => {
            let ret;
            wrapper = mount(
                <DatePicker
                    showTime
                    defaultVisible
                    defaultVisibleMonth={() => startValue}
                    onOk={val => (ret = val)}
                />
            );
            wrapper
                .find('td[title="2017-11-09"] .next-calendar-date')
                .simulate('click');
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
            wrapper
                .find('td[title="2017-11-09"] .next-calendar-date')
                .simulate('click');
            assert(ret.format('YYYY-MM-DD HH:mm:ss') === '2017-11-09 09:00:00');
            wrapper
                .find('td[title="2017-11-11"] .next-calendar-date')
                .simulate('click');
            assert(ret.format('YYYY-MM-DD HH:mm:ss') === '2017-11-11 09:00:00');
        });
    });

    describe('with date string', () => {
        it('should defaultValue as string', () => {
            wrapper = mount(<DatePicker defaultValue="2018-01-23" />);
            assert(
                wrapper.find('.next-date-picker-input input').instance()
                    .value === '2018-01-23'
            );
            assert(wrapper.find('.next-icon-delete-filling').length === 1);
        });

        it('should value as string', () => {
            wrapper = mount(<DatePicker value="2018-01-23" />);
            assert(
                wrapper.find('.next-date-picker-input input').instance()
                    .value === '2018-01-23'
            );
            wrapper.setProps({ value: '2019-01-23' });
            assert(
                wrapper.find('.next-date-picker-input input').instance()
                    .value === '2019-01-23'
            );
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
            wrapper
                .find('td[title="2017-11-09"] .next-calendar-date')
                .simulate('click');
            assert(ret.format('YYYY-MM-DD HH:mm:ss') === '2017-11-09 09:00:00');
            wrapper
                .find('td[title="2017-11-11"] .next-calendar-date')
                .simulate('click');
            assert(ret.format('YYYY-MM-DD HH:mm:ss') === '2017-11-11 09:00:00');
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
            assert(
                wrapper.find('.next-year-picker-input input').instance()
                    .value === '2018'
            );
            assert(wrapper.find('.next-icon-delete-filling').length === 1);
        });

        it('should set hasClear to false', () => {
            wrapper = mount(
                <YearPicker defaultValue={startYear} hasClear={false} />
            );
            assert(!wrapper.find('.next-icon-delete-filling').length);
        });

        it('should render controlled value of YearPicker', () => {
            wrapper = mount(<YearPicker value={startYear} />);
            assert(
                wrapper.find('.next-year-picker-input input').instance()
                    .value === '2018'
            );
            wrapper.setProps({ value: endYear });
            assert(
                wrapper.find('.next-year-picker-input input').instance()
                    .value === '2018'
            );
        });

        it('should render controlled visible of YearPicker', () => {
            wrapper = mount(<YearPicker visible={false} />);
            assert(wrapper.find('.next-year-picker-body').length === 0);
            wrapper.setProps({ visible: true });
            assert(wrapper.find('.next-year-picker-body').length === 1);
        });

        it()
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
            assert(ret.format('YYYY') === '2014');
        });

        it('should clear value', () => {
            let ret = 'hello';
            wrapper = mount(
                <YearPicker
                    defaultValue={startYear}
                    onChange={val => (ret = val)}
                />
            );
            wrapper.find('.next-icon-delete-filling').simulate('click');
            assert(ret === null);
        });

        it('should input value in picker', () => {
            let ret;
            wrapper = mount(
                <YearPicker onChange={val => (ret = val)} defaultVisible />
            );
            wrapper
                .find('.next-year-picker-panel-input input')
                .simulate('change', { target: { value: '2017' } });
            wrapper
                .find('.next-year-picker-panel-input input')
                .simulate('blur');
            assert(ret.format('YYYY') === '2017');
        });

        it('should input disabled date in picker', () => {
            let ret;
            wrapper = mount(
                <YearPicker
                    onChange={val => (ret = val)}
                    disabledDate={disabledDate}
                    defaultVisible
                />
            );
            wrapper
                .find('.next-year-picker-panel-input input')
                .simulate('change', { target: { value: '2017' } });
            wrapper
                .find('.next-year-picker-panel-input input')
                .simulate('blur');
            assert(!ret);
        });
    });

    describe('value as string', () => {
        it('should defaultValue as string', () => {
            wrapper = mount(<YearPicker defaultValue="2018" />);
            assert(
                wrapper.find('.next-year-picker-input input').instance()
                    .value === '2018'
            );
            assert(wrapper.find('.next-icon-delete-filling').length === 1);
        });

        it('should value as string', () => {
            wrapper = mount(<YearPicker value="2018" />);
            assert(
                wrapper.find('.next-year-picker-input input').instance()
                    .value === '2018'
            );
            wrapper.setProps({ value: '2019' });
            assert(
                wrapper.find('.next-year-picker-input input').instance()
                    .value === '2019'
            );
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
            assert(
                wrapper.find('.next-month-picker-input input').instance()
                    .value === '2018-01'
            );
            assert(wrapper.find('.next-icon-delete-filling').length === 1);
        });

        it('should set hasClear to false', () => {
            wrapper = mount(
                <MonthPicker defaultValue={startMonth} hasClear={false} />
            );
            assert(!wrapper.find('.next-icon-delete-filling').length);
        });

        it('should render controlled value of MonthPicker', () => {
            wrapper = mount(<MonthPicker value={startMonth} />);
            assert(
                wrapper.find('.next-month-picker-input input').instance()
                    .value === '2018-01'
            );
            wrapper.setProps({ value: endMonth });
            assert(
                wrapper.find('.next-month-picker-input input').instance()
                    .value === '2018-10'
            );
        });

        it('should render controlled visible of MonthPicker', () => {
            wrapper = mount(<MonthPicker visible={false} />);
            assert(wrapper.find('.next-month-picker-body').length === 0);
            wrapper.setProps({ visible: true });
            assert(wrapper.find('.next-month-picker-body').length === 1);
        });
    });

    describe('action', () => {
        it('should select', () => {
            let ret;
            wrapper = mount(
                <MonthPicker
                    defaultVisibleYear={() => startMonth}
                    onChange={val => (ret = val)}
                />
            );
            wrapper.find('.next-month-picker-input input').simulate('click');
            wrapper
                .find('td[title="Feb"] .next-calendar-month')
                .simulate('click');
            assert(ret.format('YYYY-MM') === '2018-02');
        });

        it('should clear value', () => {
            let ret = 'hello';
            wrapper = mount(
                <MonthPicker
                    defaultValue={startMonth}
                    onChange={val => (ret = val)}
                />
            );
            wrapper.find('.next-icon-delete-filling').simulate('click');
            assert(ret === null);
        });

        it('should input value in picker', () => {
            let ret;
            wrapper = mount(
                <MonthPicker onChange={val => (ret = val)} defaultVisible />
            );
            wrapper
                .find('.next-month-picker-panel-input input')
                .simulate('change', { target: { value: '2017-11' } });
            wrapper
                .find('.next-month-picker-panel-input input')
                .simulate('blur');
            assert(ret.format('YYYY-MM') === '2017-11');
        });

        it('should input disabled date in picker', () => {
            let ret;
            wrapper = mount(
                <MonthPicker
                    onChange={val => (ret = val)}
                    disabledDate={disabledDate}
                    defaultVisible
                />
            );
            wrapper
                .find('.next-month-picker-panel-input input')
                .simulate('change', { target: { value: '2017-11' } });
            wrapper
                .find('.next-month-picker-panel-input input')
                .simulate('blur');
            assert(!ret);
        });
    });

    describe('value as string', () => {
        it('should defaultValue as string', () => {
            wrapper = mount(<MonthPicker defaultValue="2018-01" />);
            assert(
                wrapper.find('.next-month-picker-input input').instance()
                    .value === '2018-01'
            );
            assert(wrapper.find('.next-icon-delete-filling').length === 1);
        });

        it('should value as string', () => {
            wrapper = mount(<MonthPicker value="2018-01-23" />);
            assert(
                wrapper.find('.next-month-picker-input input').instance()
                    .value === '2018-01'
            );
            wrapper.setProps({ value: '2019-01-23' });
            assert(
                wrapper.find('.next-month-picker-input input').instance()
                    .value === '2019-01'
            );
        });
    });
});

describe('RangePicker', () => {
    let wrapper;

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
            wrapper = mount(
                <RangePicker defaultValue={[startValue, endValue]} />
            );
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
            wrapper = mount(
                <RangePicker
                    defaultValue={[startValue, endValue]}
                    hasClear={false}
                />
            );
            assert(!wrapper.find('.next-icon-delete-filling').length);
        });

        it('should render controlled value of RangePicker', () => {
            wrapper = mount(<RangePicker value={[startValue, endValue]} />);
            wrapper.setProps({
                value: [
                    startValue.clone().add(1, 'days'),
                    endValue.clone().add(1, 'days'),
                ],
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
            wrapper = mount(
                <RangePicker defaultVisible showTime={{ format: 'HH:mm' }} />
            );
            assert(!wrapper.find('.next-time-picker-menu-hour').length);
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
            wrapper
                .find('span.next-range-picker-panel-input-start-date')
                .hasClass('next-focus');
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
            wrapper
                .find('span.next-range-picker-panel-input-end-date')
                .hasClass('next-focus');
        });

        it('should focus the input to change panel', () => {
            wrapper = mount(
                <RangePicker
                    showTime
                    defaultValue={[startValue, endValue]}
                    defaultVisible
                />
            );
            wrapper
                .find('.next-range-picker-panel-input-start-time input')
                .simulate('focus');
            wrapper
                .find('.next-range-picker-panel-input-start-time input')
                .simulate('blur');
            assert(wrapper.find('.next-range-picker-panel-time').length === 1);
            wrapper
                .find('.next-range-picker-panel-input-start-date input')
                .simulate('focus');
            wrapper
                .find('.next-range-picker-panel-input-start-date input')
                .simulate('blur');
            assert(wrapper.find('.next-calendar-range').length === 1);
        });

        it('should select range', () => {
            let ret;
            wrapper = mount(
                <RangePicker
                    defaultValue={[startValue, endValue]}
                    onChange={val => (ret = val)}
                />
            );
            wrapper
                .find('.next-range-picker-trigger-input input')
                .at(0)
                .simulate('click');
            wrapper
                .find('td[title="2017-11-09"] .next-calendar-date')
                .simulate('click');
            assert(ret[0].format('YYYY-MM-DD') === '2017-11-09');
            assert(ret[1].format('YYYY-MM-DD') === '2017-12-15');
        });

        it('should slect range with same day', () => {
            let ret;
            wrapper = mount(
                <RangePicker
                    defaultValue={[startValue, endValue]}
                    onChange={val => (ret = val)}
                    visible
                />
            );
            wrapper
                .find('.next-range-picker-panel-input-start-date input')
                .simulate('focus');
            wrapper
                .find('td[title="2017-11-09"] .next-calendar-date')
                .simulate('click');
            wrapper
                .find('.next-range-picker-panel-input-end-date input')
                .simulate('focus');
            wrapper
                .find('td[title="2017-11-09"] .next-calendar-date')
                .simulate('click');
            assert(ret[0].format('YYYY-MM-DD') === '2017-11-09');
            assert(ret[1].format('YYYY-MM-DD') === '2017-11-09');
        });

        it('should clear range', () => {
            let ret;
            wrapper = mount(
                <RangePicker
                    defaultValue={[startValue, endValue]}
                    onChange={val => (ret = val)}
                />
            );
            wrapper.find('.next-icon-delete-filling').simulate('click');
            assert(!ret[0]);
            assert(!ret[1]);
        });

        it('should input range value', function() {
            this.timeout(3000);
            let ret;
            wrapper = mount(
                <RangePicker
                    defaultVisibleMonth={() => startValue}
                    showTime
                    visible
                    onChange={val => (ret = val)}
                />
            );
            wrapper
                .find('.next-range-picker-panel-input-start-date input')
                .simulate('focus');
            wrapper
                .find('.next-range-picker-panel-input-start-date input')
                .simulate('change', { target: { value: '2017-11-05' } });
            wrapper
                .find('.next-range-picker-panel-input-start-date input')
                .simulate('blur');
            assert(ret[0].format('YYYY-MM-DD') === '2017-11-05');
            assert(!ret[1]);
            wrapper
                .find('.next-range-picker-panel-input-end-date input')
                .simulate('focus');
            wrapper
                .find('.next-range-picker-panel-input-end-date input')
                .simulate('change', { target: { value: '2017-12-05' } });
            wrapper
                .find('.next-range-picker-panel-input-end-date input')
                .simulate('blur');
            assert(ret[0].format('YYYY-MM-DD') === '2017-11-05');
            assert(ret[1].format('YYYY-MM-DD') === '2017-12-05');
            wrapper
                .find('.next-range-picker-panel-input-start-time input')
                .simulate('focus');
            wrapper
                .find('.next-range-picker-panel-input-start-time input')
                .simulate('change', { target: { value: '09:00:00' } });
            wrapper
                .find('.next-range-picker-panel-input-start-time input')
                .simulate('blur');
            assert(
                ret[0].format('YYYY-MM-DD HH:mm:ss') === '2017-11-05 09:00:00'
            );
            assert(
                ret[1].format('YYYY-MM-DD HH:mm:ss') === '2017-12-05 00:00:00'
            );
            wrapper
                .find('.next-range-picker-panel-input-end-time input')
                .simulate('focus');
            wrapper
                .find('.next-range-picker-panel-input-end-time input')
                .simulate('change', { target: { value: '20:00:00' } });
            wrapper
                .find('.next-range-picker-panel-input-end-time input')
                .simulate('blur');
            assert(
                ret[0].format('YYYY-MM-DD HH:mm:ss') === '2017-11-05 09:00:00'
            );
            assert(
                ret[1].format('YYYY-MM-DD HH:mm:ss') === '2017-12-05 20:00:00'
            );
        });

        it('should input disabled date in picker', () => {
            let ret;
            wrapper = mount(
                <RangePicker
                    onChange={val => (ret = val)}
                    disabledDate={disabledDate}
                    defaultVisible
                />
            );
            wrapper
                .find('.next-range-picker-panel-input-start-date input')
                .simulate('focus');
            wrapper
                .find('.next-range-picker-panel-input-start-date input')
                .simulate('change', { target: { value: '2017-11-05' } });
            wrapper
                .find('.next-range-picker-panel-input-start-date input')
                .simulate('blur');
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
            wrapper
                .find('.next-range-picker-panel-input-start-time input')
                .simulate('focus');
            wrapper
                .find(
                    '.next-range-picker-panel-time-start .next-time-picker-menu-hour .next-time-picker-menu-item'
                )
                .at(3)
                .simulate('click');
            assert(
                ret[0].format('YYYY-MM-DD HH:mm:ss') === '2017-11-20 03:00:00'
            );
            wrapper
                .find(
                    '.next-range-picker-panel-time-end .next-time-picker-menu-hour .next-time-picker-menu-item'
                )
                .at(3)
                .simulate('click');
            assert(
                ret[1].format('YYYY-MM-DD HH:mm:ss') === '2017-12-15 03:00:00'
            );
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
            wrapper
                .find('td[title="2017-11-09"] .next-calendar-date')
                .simulate('click');
            assert(
                ret[0].format('YYYY-MM-DD HH:mm:ss') === '2017-11-09 09:00:00'
            );
            wrapper
                .find('td[title="2017-12-09"] .next-calendar-date')
                .at(1)
                .simulate('click');
            assert(
                ret[1].format('YYYY-MM-DD HH:mm:ss') === '2017-12-09 09:00:00'
            );
        });

        it('should resetTime', () => {
            let ret;

            wrapper = mount(
                <RangePicker
                    showTime
                    resetTime
                    defaultVisible
                    defaultValue={[
                        moment(
                            '2017-11-12 10:10:10',
                            'YYYY-MM-DD HH:mm:ss',
                            true
                        ),
                        moment(
                            '2017-12-12 11:11:11',
                            'YYYY-MM-DD HH:mm:ss',
                            true
                        ),
                    ]}
                    onChange={val => (ret = val)}
                />
            );
            wrapper
                .find('td[title="2017-11-09"] .next-calendar-date')
                .simulate('click');
            assert(
                ret[0].format('YYYY-MM-DD HH:mm:ss') === '2017-11-09 00:00:00'
            );
            wrapper
                .find('.next-range-picker-panel-input-end-date input')
                .simulate('focus');
            wrapper
                .find('td[title="2017-12-09"] .next-calendar-date')
                .at(1)
                .simulate('click');
            assert(
                ret[1].format('YYYY-MM-DD HH:mm:ss') === '2017-12-09 00:00:00'
            );
        });

        it('should not resetTime', () => {
            let ret;

            wrapper = mount(
                <RangePicker
                    showTime
                    defaultVisible
                    defaultValue={[
                        moment(
                            '2017-11-12 10:10:10',
                            'YYYY-MM-DD HH:mm:ss',
                            true
                        ),
                        moment(
                            '2017-12-12 11:11:11',
                            'YYYY-MM-DD HH:mm:ss',
                            true
                        ),
                    ]}
                    onChange={val => (ret = val)}
                />
            );
            wrapper
                .find('td[title="2017-11-09"] .next-calendar-date')
                .simulate('click');
            assert(
                ret[0].format('YYYY-MM-DD HH:mm:ss') === '2017-11-09 10:10:10'
            );
            wrapper
                .find('.next-range-picker-panel-input-end-date input')
                .simulate('focus');
            wrapper
                .find('td[title="2017-12-09"] .next-calendar-date')
                .at(1)
                .simulate('click');
            assert(
                ret[1].format('YYYY-MM-DD HH:mm:ss') === '2017-12-09 11:11:11'
            );
        });

        it('should select a endDay less than the previous startDay', () => {
            let ret;
            wrapper = mount(
                <RangePicker
                    defaultValue={[startValue, endValue]}
                    defaultVisible
                    onChange={val => (ret = val)}
                />
            );
            wrapper
                .find('.next-range-picker-panel-input-end-date input')
                .simulate('focus');
            wrapper
                .find('td[title="2017-11-01"] .next-calendar-date')
                .simulate('click');
            assert(ret[0].format('YYYY-MM-DD') === '2017-11-01');
        });

        it('should select a startDay bigger than the previous endDay', () => {
            let ret;
            wrapper = mount(
                <RangePicker
                    defaultValue={[startValue, endValue]}
                    defaultVisible
                    onChange={val => (ret = val)}
                />
            );
            wrapper
                .find('.next-range-picker-panel-input-start-date input')
                .simulate('focus');
            wrapper
                .find('td[title="2017-12-30"] .next-calendar-date')
                .simulate('click');
            assert(ret[0].format('YYYY-MM-DD') === '2017-12-30');
            assert(ret[1] === null);
        });

        it('should select endDate firstly', () => {
            let ret;
            wrapper = mount(
                <RangePicker
                    defaultVisibleMonth={() => startValue}
                    defaultVisible
                    onChange={val => (ret = val)}
                />
            );
            wrapper
                .find('.next-range-picker-panel-input-end-date input')
                .simulate('focus');
            wrapper
                .find('td[title="2017-12-25"] .next-calendar-date')
                .simulate('click');
            assert(ret[0] === null);
            assert(ret[1].format('YYYY-MM-DD') === '2017-12-25');
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
            assert(
                wrapper.find('div.next-range-picker-panel-time').length === 1
            );
        });

        it('should click onOk', () => {
            let ret;
            wrapper = mount(
                <RangePicker
                    showTime
                    defaultVisibleMonth={() => startValue}
                    defaultVisible
                    onOk={val => (ret = val)}
                />
            );
            wrapper
                .find('td[title="2017-11-09"] .next-calendar-date')
                .simulate('click');
            wrapper
                .find('td[title="2017-11-11"] .next-calendar-date')
                .simulate('click');
            wrapper
                .find('.next-date-picker-panel-footer .next-btn')
                .at(1)
                .simulate('click');
            assert(
                ret[0].format('YYYY-MM-DD HH:mm:ss') === '2017-11-09 00:00:00'
            );
            assert(
                ret[1].format('YYYY-MM-DD HH:mm:ss') === '2017-11-11 00:00:00'
            );
        });
    });

    describe('with date string', () => {
        it('should defaultValue as string', () => {
            wrapper = mount(
                <RangePicker defaultValue={['2017-11-11', '2017-11-12']} />
            );
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
            wrapper = mount(
                <RangePicker value={['2017-11-11', '2017-11-12']} />
            );
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
});
