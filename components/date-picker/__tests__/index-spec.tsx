import React, { useState } from 'react';
import moment, { type Moment } from 'moment';
import DatePicker, {
    type DatePickerProps,
    type WeekPickerProps,
    type YearPickerProps,
    type MonthPickerProps,
    type RangePickerProps,
} from '../index';
import Form from '../../form/index';
import '../style';

const { RangePicker, MonthPicker, YearPicker, WeekPicker } = DatePicker;

const startValue = moment('2017-11-20', 'YYYY-MM-DD', true);
const endValue = moment('2017-12-15', 'YYYY-MM-DD', true);
const defaultTimeValue = moment('09:00:00', 'HH:mm:ss', true);
const defaultTimeValues = [
    moment('09:00:00', 'HH:mm:ss', true),
    moment('23:59:59', 'HH:mm:ss', true),
];
const timeStamp = 1581938105000;

// 禁止选择 startValue 之前的所有日期
const disabledDate = function (date: Moment, view: unknown) {
    if (!view) return true;
    return date.valueOf() < startValue.valueOf();
};

describe('DatePicker', () => {
    describe('render with props', () => {
        it('should render', () => {
            cy.mount(<DatePicker />);
            cy.get('.next-date-picker').should('exist');
        });

        it('should render with defaultValue', () => {
            cy.mount(<DatePicker defaultValue={startValue} />);
            cy.get('.next-date-picker-input input').should('have.value', '2017-11-20');
            cy.get('i.next-input-clear-icon').should('exist');
        });

        it('should render string unix defaultValue of DatePicker', () => {
            cy.mount(<DatePicker defaultValue={moment(timeStamp)} />);
            cy.get('.next-date-picker-input input').should('have.value', '2020-02-17');
            cy.get('.next-icon-delete-filling').should('exist');
        });

        it('should set hasClear to false', () => {
            cy.mount(<DatePicker defaultValue={startValue} hasClear={false} />);
            cy.get('i.next-input-clear-icon').should('not.exist');
        });

        it('should render controlled value of DatePicker', () => {
            cy.mount(<DatePicker value={startValue} />).as('Demo');
            cy.get('.next-date-picker-input input').should('have.value', '2017-11-20');
            cy.rerender('Demo', {
                value: endValue,
            });
            cy.get('.next-date-picker-input input').should('have.value', '2017-12-15');
        });

        it('should render controlled visible of DatePicker', () => {
            cy.mount(<DatePicker visible={false} />).as('Demo');
            cy.get('.next-date-picker-body').should('not.exist');
            cy.rerender('Demo', {
                visible: true,
            });
            cy.get('.next-date-picker-body').should('exist');
        });

        it('should hide seconds', () => {
            cy.mount(<DatePicker defaultVisible showTime={{ format: 'HH:mm' }} />);
            // assert(!wrapper.find('.next-time-picker-menu-hour').length);
            cy.get('.next-time-picker-menu-hour').should('not.exist');
        });

        it('should render dateInputAriaLabel & timeInputAriaLabel', () => {
            cy.mount(
                <DatePicker
                    dateInputAriaLabel="Ho Ho Ho!"
                    timeInputAriaLabel="Ho Ho Ho!"
                    defaultVisible
                    showTime={{ format: 'HH:mm' }}
                />
            );

            cy.get('.next-date-picker-panel-input input')
                .eq(0)
                .should('have.attr', 'aria-label', 'Ho Ho Ho!');
            cy.get('.next-date-picker-panel-input input')
                .eq(1)
                .should('have.attr', 'aria-label', 'Ho Ho Ho!');
        });

        it('should support preview mode render', () => {
            const handlePreviewRender = cy.spy();
            cy.mount(<DatePicker defaultValue="2018-11-11" isPreview />).as('Demo');
            cy.get('.next-form-preview').should('exist');
            cy.get('.next-form-preview').should('have.text', '2018-11-11');
            cy.rerender<DatePickerProps>('Demo', {
                renderPreview: value => {
                    handlePreviewRender(value!.format('YYYY-MM-DD'));
                    return 'Hello World';
                },
            });
            cy.get('.next-form-preview').should('have.text', 'Hello World');
            cy.wrap(handlePreviewRender).should('be.calledWith', '2018-11-11');
        });

        it('should support preview mode render with showTime', () => {
            cy.mount(<DatePicker defaultValue="2018-11-11" isPreview showTime />);
            cy.get('.next-form-preview').should('exist');
            cy.get('.next-form-preview').should('have.text', '2018-11-11 00:00:00');
        });
    });

    describe('action', () => {
        it('should select', () => {
            const handleChange = cy.spy();
            cy.mount(
                <DatePicker
                    defaultVisibleMonth={() => startValue}
                    onChange={val => {
                        handleChange((val as Moment).format('YYYY-MM-DD'));
                    }}
                />
            );
            cy.get('.next-date-picker-input input').click();
            cy.get('td[title="2017-11-09"] .next-calendar-date').click();
            cy.wrap(handleChange).should('be.calledWith', '2017-11-09');
        });

        it('should clear value', () => {
            const handleChange = cy.spy();
            cy.mount(<DatePicker defaultValue={startValue} onChange={handleChange} />);
            cy.get('i.next-input-clear-icon').click();
            cy.wrap(handleChange).should('be.calledWith', null);
        });

        it('should input value in picker', () => {
            const handleChange = cy.spy();
            cy.mount(
                <DatePicker
                    onChange={val => {
                        handleChange((val as Moment).format('YYYY-MM-DD HH:mm:ss'));
                    }}
                    showTime
                    defaultVisible
                />
            );
            cy.get('.next-date-picker-panel-input input').eq(0).type('2017-11-11');
            cy.get('.next-date-picker-panel-input input').eq(0).blur();
            cy.wrap(handleChange).should('be.calledWith', '2017-11-11 00:00:00');
            cy.get('.next-date-picker-panel-input input').eq(1).clear();
            cy.get('.next-date-picker-panel-input input').eq(1).type('11:11:11');
            cy.get('.next-date-picker-panel-input input').eq(1).blur();
            cy.wrap(handleChange).should('be.calledWith', '2017-11-11 11:11:11');
        });

        it('should not resetTime as default', () => {
            const handleChange = cy.spy();
            cy.mount(
                <DatePicker
                    onChange={handleChange}
                    defaultValue="2017-11-11 11:11:11"
                    showTime
                    defaultVisible
                />
            );

            cy.get('.next-date-picker-panel-input input').eq(0).focus();
            cy.get('.next-date-picker-panel-input input').eq(0).triggerInputChange('2017-11-12');
            cy.get('.next-date-picker-panel-input input').eq(0).blur();
            cy.wrap(handleChange).should('be.calledWith', '2017-11-12 11:11:11');
        });

        it('should support inputting null value in picker', () => {
            const handleChange = cy.spy();
            cy.mount(
                <DatePicker onChange={val => handleChange(val)} value="2018-02-02" defaultVisible />
            );
            cy.get('.next-date-picker-panel-input input').click();
            cy.get('.next-date-picker-panel-input input').eq(0).clear();
            cy.get('.next-date-picker-panel-input input').eq(0).blur();
            cy.get('td[title="2018-02-09"] .next-calendar-date').click();
            cy.wrap(handleChange).should('be.calledWith', '2018-02-09');
        });

        it('inputting disabled date in picker should not call onChange', () => {
            const handleChange = cy.spy();
            cy.mount(
                <DatePicker onChange={handleChange} disabledDate={disabledDate} defaultVisible />
            );
            cy.get('.next-date-picker-panel-input input').eq(0).type('2017-11-11');
            cy.get('.next-date-picker-panel-input input').eq(0).blur();
            cy.wrap(handleChange).should('not.be.called');
        });

        it('should focus input to change panel', () => {
            cy.mount(<DatePicker showTime defaultVisible defaultValue={startValue} />);
            cy.get('.next-date-picker-panel-input input').eq(1).focus();
            cy.get('.next-time-picker-panel').should('exist');
            cy.get('.next-date-picker-panel-input input').eq(0).focus();
            cy.get('.next-date-picker-panel-input input').eq(0).blur();
            cy.get('.next-calendar-panel').should('exist');
        });

        it('should select time panel', () => {
            const handleChange = cy.spy();
            cy.mount(
                <DatePicker
                    showTime
                    defaultVisible
                    defaultValue={startValue}
                    onChange={val => {
                        handleChange((val as Moment).format('YYYY-MM-DD HH:mm:ss'));
                    }}
                />
            );
            cy.get('.next-date-picker-panel-input input').eq(1).focus();
            cy.get('.next-time-picker-menu-hour .next-time-picker-menu-item').eq(3).click();
            cy.wrap(handleChange).should('be.calledWith', '2017-11-20 03:00:00');
        });

        it('should select time panel by time-btn', () => {
            cy.mount(<DatePicker showTime defaultVisible defaultValue={startValue} />);
            cy.get('.next-date-picker-panel-footer .next-btn').eq(0).click();
            cy.get('div.next-date-picker-panel-time').should('exist');
        });

        it('should click onOk', () => {
            const handleOk = cy.spy();
            cy.mount(
                <DatePicker
                    showTime
                    defaultVisible
                    defaultVisibleMonth={() => startValue}
                    onOk={val => {
                        handleOk((val as Moment).format('YYYY-MM-DD HH:mm:ss'));
                    }}
                />
            );
            cy.get('td[title="2017-11-09"] .next-calendar-date').click();
            cy.get('.next-date-picker-panel-footer .next-btn').eq(1).click();
            cy.wrap(handleOk).should('be.calledWith', '2017-11-09 00:00:00');
        });

        it('should set defaultValue for TimePicker', () => {
            const handleChange = cy.spy();
            cy.mount(
                <DatePicker
                    showTime={{ defaultValue: defaultTimeValue }}
                    defaultVisible
                    defaultVisibleMonth={() => startValue}
                    onChange={val => {
                        handleChange((val as Moment).format('YYYY-MM-DD HH:mm:ss'));
                    }}
                />
            );
            cy.get('td[title="2017-11-09"] .next-calendar-date').click();
            cy.wrap(handleChange).should('be.calledWith', '2017-11-09 09:00:00');
            cy.get('td[title="2017-11-11"] .next-calendar-date').click();
            cy.wrap(handleChange).should('be.calledWith', '2017-11-11 09:00:00');
        });

        it('should keyboard date input', () => {
            cy.mount(<DatePicker defaultVisible />);
            cy.get('.next-date-picker-panel-input input').eq(0).as('input');
            cy.get('@input').type('{downArrow}');
            cy.get('@input').should('have.value', moment().format('YYYY-MM-DD'));
            cy.get('@input').type('{leftArrow}');
            cy.get('@input').should('have.value', moment().format('YYYY-MM-DD'));
            cy.get('@input').type('{alt}{downArrow}');
            cy.get('@input').type('{shift}{downArrow}');
            cy.get('@input').type('{ctrl}{downArrow}');
            cy.get('@input').should('have.value', moment().format('YYYY-MM-DD'));
            cy.get('@input').type('{downArrow}');
            cy.get('@input').should('have.value', moment().add(1, 'day').format('YYYY-MM-DD'));
            cy.get('@input').type('{upArrow}');
            cy.get('@input').should('have.value', moment().format('YYYY-MM-DD'));
            cy.get('@input').type('{pageDown}');
            cy.get('@input').should('have.value', moment().add(1, 'month').format('YYYY-MM-DD'));
            cy.get('@input').type('{pageUp}');
            cy.get('@input').should('have.value', moment().format('YYYY-MM-DD'));
            cy.get('@input').type('{alt}{pageDown}');
            cy.get('@input').should('have.value', moment().add(1, 'year').format('YYYY-MM-DD'));
            cy.get('@input').type('{alt}{pageUp}');
            cy.get('@input').should('have.value', moment().format('YYYY-MM-DD'));
        });

        it('should keyboard date time input', () => {
            cy.mount(
                <DatePicker
                    showTime={{ format: 'HH:mm:ss' }}
                    defaultVisible
                    defaultValue={moment().hours(0).minutes(0).seconds(0)}
                    popupProps={{ animation: false }}
                />
            );

            cy.get('.next-date-picker-panel-input input').eq(1).as('timeInput');
            cy.get('@timeInput').click();
            cy.get('@timeInput').type('{downArrow}');
            cy.get('@timeInput').should('have.value', '00:00:00');
            cy.get('@timeInput').type('{leftArrow}');
            cy.get('@timeInput').type('{alt}{downArrow}');
            cy.get('@timeInput').type('{shift}{downArrow}');
            cy.get('@timeInput').type('{ctrl}{downArrow}');
            cy.get('@timeInput').should('have.value', '00:00:00');
            cy.get('@timeInput').type('{downArrow}');
            cy.get('@timeInput').should('have.value', '00:00:01');
            cy.get('@timeInput').type('{upArrow}');
            cy.get('@timeInput').should('have.value', '00:00:00');
            cy.get('@timeInput').type('{pageDown}');
            cy.get('@timeInput').should('have.value', '00:01:00');
            cy.get('@timeInput').type('{pageUp}');
            cy.get('@timeInput').should('have.value', '00:00:00');
            cy.get('@timeInput').type('{alt}{pageDown}');
            cy.get('@timeInput').should('have.value', '01:00:00');
            cy.get('@timeInput').type('{alt}{pageUp}');
            cy.get('@timeInput').should('have.value', '00:00:00');
        });
    });

    describe('with date string', () => {
        it('should defaultValue as string', () => {
            cy.mount(<DatePicker defaultValue="2018-01-23" />);

            // assert(wrapper.find('.next-date-picker-input input').instance().value === '2018-01-23');
            cy.get('.next-date-picker-input input').should('have.value', '2018-01-23');
            // assert(wrapper.find('i.next-input-clear-icon').length === 1);
            cy.get('i.next-input-clear-icon').should('exist');
        });

        it('should value as string', () => {
            cy.mount(<DatePicker value="2018-01-23" />).as('Demo');
            cy.get('.next-date-picker-input input').should('have.value', '2018-01-23');
            cy.rerender('Demo', { value: '2019-01-23' });
            cy.get('.next-date-picker-input input').should('have.value', '2019-01-23');
        });

        it('should set defaultValue as string for TimePicker', () => {
            // const onChange = cy.spy();
            const handleChange = cy.spy();
            cy.mount(
                <DatePicker
                    showTime={{ defaultValue: '09:00:00' }}
                    defaultVisible
                    defaultVisibleMonth={() => startValue}
                    onChange={val => {
                        handleChange((val as Moment).format('YYYY-MM-DD HH:mm:ss'));
                    }}
                />
            );
            cy.get('td[title="2017-11-09"] .next-calendar-date').click();
            cy.wrap(handleChange).should('be.calledWith', '2017-11-09 09:00:00');
            cy.get('td[title="2017-11-11"] .next-calendar-date').click();
            cy.wrap(handleChange).should('be.calledWith', '2017-11-11 09:00:00');
        });
    });

    describe('issue', () => {
        it('handle value type consistency with Form components #2895', () => {
            const onChange = cy.spy();
            cy.mount(
                <Form>
                    <Form.Item>
                        <DatePicker
                            name="date"
                            defaultValue=""
                            onChange={val => {
                                onChange(typeof val);
                            }}
                        />
                    </Form.Item>
                </Form>
            );
            cy.get('.next-date-picker-input input').click();
            cy.get(`td[title="${moment().format('YYYY-MM-DD')}"] .next-calendar-date`).click();
            cy.wrap(onChange).should('be.calledWith', 'string');
            cy.get('i.next-input-clear-icon').click();
            cy.get('.next-date-picker-input input').click();
            cy.get(`td[title="${moment().format('YYYY-MM-DD')}"] .next-calendar-date`).click();
            cy.wrap(onChange).should('be.calledWith', 'string');
        });
    });
});

describe('YearPicker', () => {
    const startYear = moment('2018', 'YYYY', true);
    const endYear = moment('2019', 'YYYY', true);

    describe('render with props', () => {
        it('should render with defaultValue', () => {
            cy.mount(<YearPicker defaultValue={startYear} />);
            cy.get('.next-year-picker-input input').should('have.value', '2018');
            cy.get('i.next-input-clear-icon').should('exist');
        });

        it('should set hasClear to false', () => {
            cy.mount(<YearPicker defaultValue={startYear} hasClear={false} />);
            // assert(!wrapper.find('i.next-input-clear-icon').length);
            cy.get('i.next-input-clear-icon').should('not.exist');
        });

        it('should render controlled value of YearPicker', () => {
            cy.mount(<YearPicker value={startYear} />).as('Demo');
            cy.get('.next-year-picker-input input').should('have.value', '2018');
            cy.rerender('Demo', { value: endYear });
            cy.get('.next-year-picker-input input').should('have.value', '2019');
        });

        it('should render controlled visible of YearPicker', () => {
            cy.mount(<YearPicker visible={false} />).as('Demo');
            cy.get('.next-year-picker-body').should('not.exist');
            cy.rerender('Demo', { visible: true });
            cy.get('.next-year-picker-body').should('exist');
        });

        it('should render dateInputAriaLabel', () => {
            cy.mount(
                <YearPicker popupClassName="test-aria" visible dateInputAriaLabel="Ho Ho Ho!" />
            );

            cy.get('.test-aria .next-year-picker-panel-input input').should(
                'have.attr',
                'aria-label',
                'Ho Ho Ho!'
            );
        });
        it('should support preview mode render', () => {
            cy.mount(<YearPicker defaultValue="2018-11-11" isPreview />).as('Demo');
            cy.get('.next-form-preview').should('exist');
            cy.get('.next-form-preview').should('have.text', '2018');
            cy.rerender<YearPickerProps>('Demo', {
                renderPreview: value => `Hello World ${value!.format('YYYY')}`,
            });
            cy.get('.next-form-preview').should('have.text', 'Hello World 2018');
        });
    });

    describe('action', () => {
        it('should select', () => {
            const onChange = cy.spy();
            cy.mount(
                <YearPicker
                    value={moment('2023', 'YYYY')}
                    onChange={val => {
                        onChange((val as Moment).format('YYYY'));
                    }}
                />
            );
            cy.get('.next-year-picker-input input').click();
            cy.get('div.next-calendar-year').eq(5).click();
            cy.wrap(onChange).should('be.calledWith', '2024');
        });

        it('should clear value', () => {
            const onChange = cy.spy();
            cy.mount(<YearPicker defaultValue={startYear} onChange={onChange} />);
            cy.get('i.next-input-clear-icon').click();
            cy.wrap(onChange).should('be.calledWith', null);
        });

        it('should input value in picker', () => {
            const onChange = cy.spy();
            cy.mount(
                <YearPicker
                    onChange={val => {
                        onChange((val as Moment).format('YYYY'));
                    }}
                    defaultVisible
                />
            );
            cy.get('.next-year-picker-panel-input input').type('2017');
            cy.get('.next-year-picker-panel-input input').blur();
            cy.wrap(onChange).should('be.calledWith', '2017');
        });

        it('should input null value in picker', () => {
            const onChange = cy.spy();
            cy.mount(<YearPicker onChange={onChange} value="2018" defaultVisible />);
            cy.get('.next-year-picker-panel-input input').click();
            cy.get('.next-year-picker-panel-input input').eq(0).clear();
            cy.wrap(onChange).should('be.calledWith', null);
            cy.get('.next-year-picker-panel-input input').eq(0).blur();
            cy.get('.next-calendar-year').eq(3).click();
            cy.wrap(onChange).should('be.calledWith', '2012');
        });

        it('input disabled date in picker will not trigger onChange', () => {
            const onChange = cy.spy();
            cy.mount(<YearPicker onChange={onChange} disabledDate={disabledDate} defaultVisible />);
            cy.get('.next-year-picker-panel-input input').type('2017');
            cy.get('.next-year-picker-panel-input input').blur();
            cy.wrap(onChange).should('not.be.called');
        });

        it('should keyboard input', () => {
            const onChange = cy.spy();
            cy.mount(
                <YearPicker
                    onChange={val => {
                        onChange((val as Moment).format('YYYY'));
                    }}
                    disabledDate={disabledDate}
                    defaultVisible
                    popupProps={{
                        animation: false,
                    }}
                />
            );
            cy.get('.next-year-picker-panel-input input').as('input');
            cy.get('@input').type('{downArrow}');
            cy.get('@input').should('have.value', moment().format('YYYY'));
            cy.get('@input').type('{leftArrow}');
            cy.get('@input').should('have.value', moment().format('YYYY'));
            cy.get('@input').type('{alt}{downArrow}');
            cy.get('@input').type('{shift}{downArrow}');
            cy.get('@input').type('{ctrl}{downArrow}');
            cy.get('@input').should('have.value', moment().format('YYYY'));
            cy.get('@input').type('{downArrow}');
            cy.get('@input').should('have.value', moment().add(1, 'year').format('YYYY'));
            cy.get('@input').type('{upArrow}');
            cy.get('@input').should('have.value', moment().format('YYYY'));
        });
    });

    describe('value as string', () => {
        it('should defaultValue as string', () => {
            cy.mount(<YearPicker defaultValue="2018" />);
            cy.get('.next-year-picker-input input').should('have.value', '2018');
            cy.get('i.next-input-clear-icon').should('exist');
        });

        it('should value as string', () => {
            cy.mount(<YearPicker value="2018" />).as('Demo');
            cy.get('.next-year-picker-input input').should('have.value', '2018');
            cy.rerender('Demo', { value: '2019' });
            cy.get('.next-year-picker-input input').should('have.value', '2019');
        });
    });

    describe('issue', () => {
        it('handle value type consistency with Form components #2895', () => {
            const onChange = cy.spy();
            cy.mount(
                <Form>
                    <Form.Item>
                        <YearPicker
                            name="date"
                            defaultValue=""
                            onChange={val => {
                                onChange(typeof val);
                            }}
                        />
                    </Form.Item>
                </Form>
            );
            cy.get('.next-year-picker-input input').click();
            cy.get('.next-calendar-year').eq(3).click();
            cy.wrap(onChange).should('be.calledWith', 'string');
            cy.get('i.next-input-clear-icon').click();
            cy.get('.next-year-picker-input input').click();
            cy.get('.next-calendar-year').eq(3).click();
            cy.wrap(onChange).should('be.calledWith', 'string');
        });
    });
});

describe('MonthPicker', () => {
    const startMonth = moment('2018-01', 'YYYY-MM', true);
    const endMonth = moment('2018-10', 'YYYY-MM', true);

    describe('render with props', () => {
        it('should render with defaultValue', () => {
            cy.mount(<MonthPicker defaultValue={startMonth} />);
            cy.get('.next-month-picker-input input').should('have.value', '2018-01');
            cy.get('i.next-input-clear-icon').should('exist');
        });

        it('should set hasClear to false', () => {
            cy.mount(<MonthPicker defaultValue={startMonth} hasClear={false} />);
            // assert(!wrapper.find('i.next-input-clear-icon').length);
            cy.get('i.next-input-clear-icon').should('not.exist');
        });

        it('should render controlled value of MonthPicker', () => {
            cy.mount(<MonthPicker value={startMonth} />).as('Demo');
            cy.get('.next-month-picker-input input').should('have.value', '2018-01');
            cy.rerender('Demo', { value: endMonth });
            cy.get('.next-month-picker-input input').should('have.value', '2018-10');
        });

        it('should render controlled visible of MonthPicker', () => {
            cy.mount(<MonthPicker visible={false} />).as('Demo');
            cy.get('.next-month-picker-body').should('not.exist');
            cy.rerender('Demo', { visible: true });
            cy.get('.next-month-picker-body').should('exist');
        });

        it('should render dateInputAriaLabel', () => {
            cy.mount(
                <MonthPicker popupClassName="test-aria" visible dateInputAriaLabel="Ho Ho Ho!" />
            );

            cy.get('.test-aria .next-month-picker-panel-input input').should(
                'have.attr',
                'aria-label',
                'Ho Ho Ho!'
            );
        });

        it('should support preview mode render', () => {
            cy.mount(<MonthPicker defaultValue="2018-11-11" isPreview />).as('Demo');
            cy.get('.next-form-preview').should('exist');
            cy.get('.next-form-preview').should('have.text', '2018-11');
            cy.rerender<MonthPickerProps>('Demo', {
                renderPreview: value => `Hello World ${value!.format('YYYY-MM')}`,
            });
            cy.get('.next-form-preview').should('have.text', 'Hello World 2018-11');
        });
    });

    describe('action', () => {
        it('should select', () => {
            const onChange = cy.spy();
            cy.mount(
                <MonthPicker
                    defaultVisibleYear={() => startMonth}
                    onChange={val => {
                        onChange((val as Moment).format('YYYY-MM'));
                    }}
                />
            );
            cy.get('.next-month-picker-input input').click();
            cy.get('td[title="Feb"] .next-calendar-month').click();
            cy.wrap(onChange).should('be.calledWith', '2018-02');
        });

        it('should clear value', () => {
            const onChange = cy.spy();
            cy.mount(<MonthPicker defaultValue={startMonth} onChange={onChange} />);
            cy.get('i.next-input-clear-icon').click();
            cy.wrap(onChange).should('be.calledWith', null);
        });

        it('should input value in picker', () => {
            const onChange = cy.spy();
            cy.mount(
                <MonthPicker
                    onChange={val => {
                        onChange((val as Moment).format('YYYY-MM'));
                    }}
                    defaultVisible
                />
            );
            cy.get('.next-month-picker-panel-input input').type('2017-11');
            cy.get('.next-month-picker-panel-input input').blur();
            cy.wrap(onChange).should('be.calledWith', '2017-11');
        });

        it('should input null value in picker', () => {
            const onChange = cy.spy();
            cy.mount(<MonthPicker onChange={onChange} value="2018-02" defaultVisible />);
            cy.get('.next-month-picker-panel-input input').eq(0).clear();
            cy.get('.next-month-picker-panel-input input').eq(0).blur();
            cy.wrap(onChange).should('be.calledWith', null);
            cy.get('.next-calendar-month').eq(3).click();
            cy.wrap(onChange).should('be.calledWith', '2018-04');
        });

        it('should input disabled date in picker', () => {
            // const onChange = cy.spy();
            const onChange = cy.spy();
            cy.mount(
                <MonthPicker onChange={onChange} disabledDate={disabledDate} defaultVisible />
            );
            cy.get('.next-month-picker-panel-input input').type('2017-11');
            cy.get('.next-month-picker-panel-input input').blur();
            cy.wrap(onChange).should('not.be.called');
        });

        it('should keyboard input', () => {
            const onChange = cy.spy();
            cy.mount(
                <MonthPicker
                    onChange={val => {
                        onChange((val as Moment).format('YYYY-MM'));
                    }}
                    disabledDate={disabledDate}
                    defaultVisible
                    popupProps={{
                        animation: false,
                    }}
                />
            );
            cy.get('.next-month-picker-panel-input input').as('input');
            cy.get('@input').type('{downArrow}');
            cy.get('@input').should('have.value', moment().format('YYYY-MM'));
            cy.get('@input').type('{leftArrow}');
            cy.get('@input').should('have.value', moment().format('YYYY-MM'));
            cy.get('@input').type('{alt}{downArrow}');
            cy.get('@input').type('{shift}{downArrow}');
            cy.get('@input').type('{ctrl}{downArrow}');
            cy.get('@input').should('have.value', moment().format('YYYY-MM'));
            cy.get('@input').type('{downArrow}');
            cy.get('@input').should('have.value', moment().add(1, 'month').format('YYYY-MM'));
            cy.get('@input').type('{upArrow}');
            cy.get('@input').should('have.value', moment().format('YYYY-MM'));
            cy.get('@input').type('{pageDown}');
            cy.get('@input').should('have.value', moment().add(1, 'month').format('YYYY-MM'));
            cy.get('@input').type('{pageUp}');
            cy.get('@input').should('have.value', moment().format('YYYY-MM'));
            cy.get('@input').type('{alt}{pageDown}');
            cy.get('@input').should('have.value', moment().add(1, 'year').format('YYYY-MM'));
            cy.get('@input').type('{alt}{pageUp}');
            cy.get('@input').should('have.value', moment().format('YYYY-MM'));
        });
    });

    describe('value as string', () => {
        it('should defaultValue as string', () => {
            cy.mount(<MonthPicker defaultValue="2018-01" />);
            cy.get('.next-month-picker-input input').should('have.value', '2018-01');
            cy.get('i.next-input-clear-icon').should('exist');
        });

        it('should value as string', () => {
            cy.mount(<MonthPicker value="2018-01-23" />).as('Demo');
            cy.get('.next-month-picker-input input').should('have.value', '2018-01');
            cy.rerender('Demo', { value: '2019-01-23' });
            cy.get('.next-month-picker-input input').should('have.value', '2019-01');
        });
    });

    describe('issue', () => {
        it('handle value type consistency with Form components #2895', () => {
            const onChange = cy.spy();
            cy.mount(
                <Form>
                    <Form.Item>
                        <MonthPicker
                            name="date"
                            defaultValue=""
                            onChange={val => {
                                onChange(typeof val);
                            }}
                        />
                    </Form.Item>
                </Form>
            );
            cy.get('.next-month-picker-input input').click();
            cy.get('td[title="Feb"] .next-calendar-month').click();
            cy.wrap(onChange).should('be.calledWith', 'string');
            cy.get('i.next-input-clear-icon').click();
            cy.get('.next-month-picker-input input').click();
            cy.get('td[title="Feb"] .next-calendar-month').click();
            cy.wrap(onChange).should('be.calledWith', 'string');
        });
    });
});

describe('WeekPicker', () => {
    const startWeek = moment('2018-01-08', 'YYYY-MM-DD', true);
    const endWeek = moment('2019-10-08', 'YYYY-MM-DD', true);

    describe('render with props', () => {
        it('should render with defaultValue', () => {
            cy.mount(<WeekPicker defaultValue={startWeek} />);
            cy.get('.next-week-picker-input input').should('have.value', '2018-2nd');
        });

        it('should set hasClear to false', () => {
            cy.mount(<WeekPicker defaultValue={startWeek} hasClear={false} />);
            cy.get('i.next-input-clear-icon').should('not.exist');
        });

        it('should render controlled value of YearPicker', () => {
            cy.mount(<WeekPicker value={startWeek} />).as('Demo');
            cy.get('.next-week-picker-input input').should('have.value', '2018-2nd');
            cy.rerender('Demo', { value: endWeek });
            cy.get('.next-week-picker-input input').should('have.value', '2019-41st');
        });

        it('should render controlled visible of YearPicker', () => {
            cy.mount(<WeekPicker visible={false} />).as('Demo');
            cy.get('.next-week-picker-body').should('not.exist');
            cy.rerender('Demo', { visible: true });
            cy.get('.next-week-picker-body').should('exist');
        });

        it('should support preview mode render', () => {
            cy.mount(<WeekPicker defaultValue="2018-48" format="YYYY-w" isPreview />).as('Demo');
            cy.get('.next-form-preview').should('have.text', '2018-48');
            cy.rerender<WeekPickerProps>('Demo', {
                renderPreview: value => `Hello World ${value!.format('YYYY')}`,
            });
            cy.get('.next-form-preview').should('have.text', 'Hello World 2018');
        });

        // https://github.com/alibaba-fusion/next/issues/1491
        it('fix format issue', () => {
            cy.mount(<WeekPicker defaultValue={moment('2019-12-29')} isPreview />);
            cy.get('.next-form-preview').should('have.text', '2019-52nd');
        });
    });

    describe('action', () => {
        it('should select', () => {
            // const onChange = cy.spy();
            const onChange = cy.spy();
            cy.mount(
                <WeekPicker
                    format="YYYY-w"
                    defaultVisibleMonth={() => startWeek}
                    onChange={val => {
                        onChange((val as Moment).format('YYYY-w'));
                    }}
                />
            );
            cy.get('.next-week-picker-input input').click();
            cy.get('td[title="2018-3"] .next-calendar-date').eq(0).click();
            cy.wrap(onChange).should('be.calledWith', '2018-3');
        });

        it('should clear value', () => {
            const onChange = cy.spy();
            cy.mount(<WeekPicker defaultValue={startWeek} onChange={onChange} />);
            cy.get('i.next-input-clear-icon').click();
            cy.wrap(onChange).should('be.calledWith', null);
        });

        it('should keyboard input', () => {
            const onChange = cy.spy();
            cy.mount(
                <WeekPicker
                    onChange={val => {
                        onChange((val as Moment).format('GGGG-Wo'));
                    }}
                    defaultVisible
                />
            );
            cy.get('.next-week-picker-input input').as('input');
            cy.get('@input').type('{downArrow}', { force: true });
            cy.get('@input').should('have.value', moment().format('GGGG-Wo'));
            cy.get('@input').type('{leftArrow}', { force: true });
            cy.get('@input').should('have.value', moment().format('GGGG-Wo'));
            cy.get('@input').type('{alt}{downArrow}', { force: true });
            cy.get('@input').type('{shift}{downArrow}', { force: true });
            cy.get('@input').type('{ctrl}{downArrow}', { force: true });
            cy.get('@input').should('have.value', moment().format('GGGG-Wo'));
            cy.get('@input').type('{downArrow}', { force: true });
            cy.get('@input').should('have.value', moment().add(1, 'w').format('GGGG-Wo'));
            cy.get('@input').type('{upArrow}', { force: true });
            cy.get('@input').should('have.value', moment().format('GGGG-Wo'));
            cy.get('@input').type('{pageDown}', { force: true });
            cy.get('@input').should('have.value', moment().add(1, 'month').format('GGGG-Wo'));
            cy.get('@input').type('{pageUp}', { force: true });
            cy.get('@input').should('have.value', moment().format('GGGG-Wo'));
            cy.get('@input').type('{alt}{pageDown}', { force: true });
            cy.get('@input').should('have.value', moment().add(1, 'year').format('GGGG-Wo'));
            cy.get('@input').type('{alt}{pageUp}', { force: true });
            cy.get('@input').should('have.value', moment().format('GGGG-Wo'));
        });
    });
});

describe('RangePicker', () => {
    function openPanel(isStart = true) {
        cy.get('.next-range-picker-trigger-input input')
            .eq(isStart ? 0 : 1)
            .click();
    }

    describe('render with props', () => {
        it('should render', () => {
            cy.mount(<RangePicker />);
            cy.get('.next-range-picker').should('exist');
        });

        it('should render with defaultValue', () => {
            cy.mount(<RangePicker defaultValue={[startValue, endValue]} />);
            cy.get('.next-range-picker-trigger-input input')
                .eq(0)
                .should('have.value', '2017-11-20');
            cy.get('.next-range-picker-trigger-input input')
                .eq(1)
                .should('have.value', '2017-12-15');
        });

        it('should render set hasClear to false', () => {
            cy.mount(<RangePicker defaultValue={[startValue, endValue]} hasClear={false} />);
            cy.get('i.next-input-clear-icon').should('not.exist');
        });

        it('should render controlled value of RangePicker', () => {
            cy.mount(<RangePicker value={[startValue, endValue]} />).as('Demo');
            cy.rerender('Demo', {
                value: [startValue.clone().add(1, 'days'), endValue.clone().add(1, 'days')],
            });
            cy.get('.next-range-picker-trigger-input input')
                .eq(0)
                .should('have.value', '2017-11-21');
            cy.get('.next-range-picker-trigger-input input')
                .eq(1)
                .should('have.value', '2017-12-16');
        });

        it('should render controlled visible of RangePicker', () => {
            cy.mount(<RangePicker visible={false} />).as('Demo');
            cy.get('.next-range-picker-body').should('not.exist');
            cy.rerender('Demo', { visible: true });
            cy.get('.next-range-picker-body').should('exist');
        });

        it('should hide seconds', () => {
            cy.mount(<RangePicker defaultVisible showTime={{ format: 'HH:mm' }} />);
            cy.get('.next-time-picker-menu-hour').should('not.exist');
        });

        it('should render dateInputAriaLabel & timeInputAriaLabel', () => {
            cy.mount(
                <RangePicker
                    startDateInputAriaLabel="Ho Ho Ho1!"
                    startTimeInputAriaLabel="Ho Ho Ho2!"
                    endDateInputAriaLabel="Ho Ho Ho3!"
                    endTimeInputAriaLabel="Ho Ho Ho4!"
                    defaultVisible
                    showTime={{ format: 'HH:mm' }}
                />
            );

            cy.get('.next-range-picker-panel-input-start-date input').should(
                'have.attr',
                'aria-label',
                'Ho Ho Ho1!'
            );
            cy.get('.next-range-picker-panel-input-start-time input').should(
                'have.attr',
                'aria-label',
                'Ho Ho Ho2!'
            );
            cy.get('.next-range-picker-panel-input-end-date input').should(
                'have.attr',
                'aria-label',
                'Ho Ho Ho3!'
            );
            cy.get('.next-range-picker-panel-input-end-time input').should(
                'have.attr',
                'aria-label',
                'Ho Ho Ho4!'
            );
        });

        it('should support ranges', () => {
            const now = new Date();
            const start = new Date().setDate(1);
            const end = new Date().setDate(7);

            const quickRanges = {
                Today: [now, now],
                'First Week': [start, end],
            };
            const spyChange = cy.spy();
            const handleChange: RangePickerProps['onChange'] = values => {
                spyChange((values[0] as Moment).isSame(start), (values[1] as Moment).isSame(end));
            };
            cy.mount(<RangePicker defaultVisible onChange={handleChange} ranges={quickRanges} />);

            cy.get('.next-date-picker-panel-tools').should('exist');
            cy.get('.next-date-picker-panel-tools .next-btn').eq(1).click();
            cy.wrap(spyChange).should('be.calledWith', true, true);
        });

        it('should render type month', () => {
            cy.mount(
                <RangePicker
                    type="month"
                    followTrigger
                    visible
                    defaultValue={['2018-03', '2018-08']}
                />
            );

            cy.get('.next-calendar').should('have.length', 2);
        });

        it('should render type year', () => {
            cy.mount(
                <RangePicker type="year" followTrigger visible defaultValue={['2018', '2019']} />
            );
            cy.get('.next-calendar').should('have.length', 2);
        });

        it('should support preview mode render', () => {
            cy.mount(<RangePicker defaultValue={[startValue, endValue]} isPreview />).as('Demo');
            cy.get('.next-form-preview').should('exist');
            cy.get('.next-form-preview').should('have.text', '2017-11-20 - 2017-12-15');
            cy.rerender<RangePickerProps>('Demo', {
                renderPreview: ([start]) => `Hello World ${start!.format('YYYY-MM-DD')}`,
            });
            cy.get('.next-form-preview').should('have.text', 'Hello World 2017-11-20');
        });

        it('should support to set placeholder', () => {
            const placeholder = ['开始日期', '结束日期'];

            cy.mount(<RangePicker placeholder={placeholder} />);
            cy.get('.next-range-picker-trigger-input input')
                .eq(0)
                .should('have.attr', 'placeholder', placeholder[0]);
            cy.get('.next-range-picker-trigger-input input')
                .eq(1)
                .should('have.attr', 'placeholder', placeholder[1]);
        });

        it('should support to set placeholder string', () => {
            const placeholder = 'Please select range';

            cy.mount(<RangePicker placeholder={placeholder} />);
            cy.get('.next-range-picker-trigger-input input')
                .eq(0)
                .should('have.attr', 'placeholder', placeholder);
            cy.get('.next-range-picker-trigger-input input')
                .eq(1)
                .should('have.attr', 'placeholder', placeholder);
        });
    });

    describe('action', () => {
        it('should focus the input of start date', () => {
            cy.mount(<RangePicker />);
            cy.get('.next-range-picker-trigger-input input').eq(0).focus();
            cy.get('.next-range-picker-trigger-input input').eq(0).click();
            cy.get('.next-range-picker-panel-input-start-date').should('have.class', 'next-focus');
        });

        it('should focus the input of end date', () => {
            cy.mount(<RangePicker />);
            cy.get('.next-range-picker-trigger-input input').eq(1).focus();
            cy.get('.next-range-picker-trigger-input input').eq(1).click();
            cy.get('.next-range-picker-panel-input-end-date').should('have.class', 'next-focus');
        });

        it('should focus the input to change panel', () => {
            cy.mount(<RangePicker showTime defaultValue={[startValue, endValue]} defaultVisible />);
            cy.get('.next-range-picker-panel-input-start-time input').focus();
            cy.get('.next-range-picker-panel-input-start-time input').blur();
            cy.get('.next-range-picker-panel-time').should('exist');
            cy.get('.next-range-picker-panel-input-start-date input').focus();
            cy.get('.next-range-picker-panel-input-start-date input').blur();
            cy.get('.next-calendar-range').should('exist');
        });

        it('should select range', () => {
            const onChange = cy.spy();
            cy.mount(
                <RangePicker
                    defaultValue={[startValue, endValue]}
                    onChange={val => {
                        onChange(val.map(item => (item as Moment).format('YYYY-MM-DD')));
                    }}
                />
            );
            cy.get('.next-range-picker-trigger-input input').eq(0).click();
            cy.get('td[title="2017-11-09"] .next-calendar-date').click();
            cy.wrap(onChange).should('be.calledWith', ['2017-11-09', '2017-12-15']);
        });

        it('should select in type range', () => {
            const onChange = cy.spy();
            cy.mount(
                <RangePicker
                    type="month"
                    defaultValue={[startValue, endValue]}
                    onChange={val => {
                        onChange((val[0] as Moment).format('YYYY-MM-DD'));
                    }}
                />
            );
            cy.get('.next-range-picker-trigger-input input').eq(0).click();
            cy.get('td[title="Aug"] .next-calendar-month').eq(0).click();
            cy.wrap(onChange).should('be.calledWith', '2017-08-01');
        });

        it('should select range with same day', () => {
            const onChange = cy.spy();
            cy.mount(
                <RangePicker
                    defaultValue={[startValue, endValue]}
                    onChange={val => {
                        onChange(val.map(item => (item as Moment).format('YYYY-MM-DD')));
                    }}
                    visible
                />
            );
            cy.get('.next-range-picker-panel-input-start-date input').click();
            cy.get('td[title="2017-11-09"] .next-calendar-date').click();
            cy.get('.next-range-picker-panel-input-end-date input').click();
            cy.get('td[title="2017-11-09"] .next-calendar-date').click();
            cy.wrap(onChange).should('be.calledWith', ['2017-11-09', '2017-11-09']);
        });

        it('should clear range', () => {
            const onChange = cy.spy();
            cy.mount(<RangePicker defaultValue={[startValue, endValue]} onChange={onChange} />);
            cy.get('i.next-input-clear-icon').click();
            cy.wrap(onChange).should('be.calledWith', []);
        });
        // issue: https://github.com/alibaba-fusion/next/issues/3448
        it('should clear range when half value', () => {
            const onChange = cy.spy();
            cy.mount(<RangePicker defaultValue={[undefined, endValue]} onChange={onChange} />);
            cy.get('i.next-input-clear-icon').click();
            cy.wrap(onChange).should('be.calledWith', []);
        });

        it('should input range value', function () {
            const onChange = cy.spy();
            cy.mount(
                <RangePicker
                    defaultVisibleMonth={() => startValue}
                    showTime
                    visible
                    onChange={val => {
                        onChange(
                            val.map(item =>
                                moment.isMoment(item) ? item.format('YYYY-MM-DD HH:mm:ss') : item
                            )
                        );
                    }}
                />
            );
            cy.get('.next-range-picker-panel-input-start-date input').focus();
            cy.get('.next-range-picker-panel-input-start-date input').type('2017-11-05');
            cy.get('.next-range-picker-panel-input-start-date input').blur();
            cy.wrap(onChange).should('be.calledWith', ['2017-11-05 00:00:00', null]);
            cy.get('.next-range-picker-panel-input-end-date input').focus();
            cy.get('.next-range-picker-panel-input-end-date input').type('2017-12-05');
            cy.get('.next-range-picker-panel-input-end-date input').blur();
            cy.wrap(onChange).should('be.calledWith', [
                '2017-11-05 00:00:00',
                '2017-12-05 00:00:00',
            ]);
            cy.get('.next-range-picker-panel-input-start-time input').focus();
            cy.get('.next-range-picker-panel-input-start-time input').clear();
            cy.get('.next-range-picker-panel-input-start-time input').type('09:00:00');
            cy.get('.next-range-picker-panel-input-start-time input').blur();
            cy.wrap(onChange).should('be.calledWith', [
                '2017-11-05 09:00:00',
                '2017-12-05 00:00:00',
            ]);
            cy.get('.next-range-picker-panel-input-end-time input').focus();
            cy.get('.next-range-picker-panel-input-end-time input').clear();
            cy.get('.next-range-picker-panel-input-end-time input').type('20:00:00');
            cy.get('.next-range-picker-panel-input-end-time input').blur();
            cy.wrap(onChange).should('be.calledWith', [
                '2017-11-05 09:00:00',
                '2017-12-05 20:00:00',
            ]);
        });

        it('should input disabled date in picker', () => {
            const onChange = cy.spy();
            cy.mount(
                <RangePicker onChange={onChange} disabledDate={disabledDate} defaultVisible />
            );
            cy.get('.next-range-picker-panel-input-start-date input').click();
            cy.get('.next-range-picker-panel-input-start-date input').type('2017-11-05');
            cy.get('.next-range-picker-panel-input-start-date input').blur();
            cy.wrap(onChange).should('not.be.called');
        });

        it('should select time panel', () => {
            const onChange = cy.spy();
            cy.mount(
                <RangePicker
                    showTime
                    defaultVisible
                    defaultValue={[startValue, endValue]}
                    onChange={val => {
                        onChange(val.map(item => (item as Moment).format('YYYY-MM-DD HH:mm:ss')));
                    }}
                />
            );
            cy.get('.next-range-picker-panel-input-start-time input').focus();
            cy.get(
                '.next-range-picker-panel-time-start .next-time-picker-menu-hour .next-time-picker-menu-item'
            )
                .eq(3)
                .click();
            cy.wrap(onChange).should('be.calledWith', [
                startValue.clone().hour(3).format('YYYY-MM-DD HH:mm:ss'),
                endValue.format('YYYY-MM-DD HH:mm:ss'),
            ]);
            cy.get(
                '.next-range-picker-panel-time-end .next-time-picker-menu-hour .next-time-picker-menu-item'
            )
                .eq(3)
                .click();
            cy.wrap(onChange).should('be.calledWith', [
                startValue.clone().hour(3).format('YYYY-MM-DD HH:mm:ss'),
                endValue.clone().hour(3).format('YYYY-MM-DD HH:mm:ss'),
            ]);
        });

        it('should select start date & time then select end date & time', () => {
            const onChange = cy.spy();
            cy.mount(
                <RangePicker
                    showTime
                    defaultVisible
                    defaultVisibleMonth={() => moment('2019-08-01', 'YYYY-MM-DD')}
                    onChange={val => {
                        onChange(
                            val.map(item =>
                                moment.isMoment(item) ? item.format('YYYY-MM-DD HH:mm:ss') : item
                            )
                        );
                    }}
                />
            );

            cy.get('.next-calendar-cell[title="2019-08-06"]').click();
            cy.get('.next-range-picker-panel-input-start-time input').focus();
            cy.get(
                '.next-range-picker-panel-time-start .next-time-picker-menu-hour .next-time-picker-menu-item'
            )
                .eq(3)
                .click();
            cy.get('.next-date-picker-panel-footer .next-btn').eq(0).click();
            cy.get('.next-calendar-cell[title="2019-08-09"]').click();
            cy.get('.next-range-picker-panel-input-end-time input').focus();
            cy.get(
                '.next-range-picker-panel-time-end .next-time-picker-menu-hour .next-time-picker-menu-item'
            )
                .eq(3)
                .click();
            cy.wrap(onChange).should('be.calledWith', [
                '2019-08-06 03:00:00',
                '2019-08-09 03:00:00',
            ]);
        });

        it('should set defaultValue for TimePicker', () => {
            const onChange = cy.spy();
            cy.mount(
                <RangePicker
                    showTime={{ defaultValue: defaultTimeValue }}
                    defaultVisible
                    defaultVisibleMonth={() => startValue}
                    onChange={val => {
                        onChange(
                            val.map(item =>
                                moment.isMoment(item) ? item.format('YYYY-MM-DD HH:mm:ss') : item
                            )
                        );
                    }}
                />
            );

            cy.get('.next-calendar-cell[title="2017-11-09"] .next-calendar-date').click();
            cy.get('.next-calendar-cell[title="2017-12-09"] .next-calendar-date').eq(1).click();
            // assert(ret[1].format('YYYY-MM-DD HH:mm:ss') === '2017-12-09 09:00:00');
            cy.wrap(onChange).should('be.calledWith', [
                '2017-11-09 09:00:00',
                '2017-12-09 09:00:00',
            ]);
        });

        it('should set defaultValues for TimePicker', () => {
            const onChange = cy.spy();
            cy.mount(
                <RangePicker
                    showTime={{ defaultValue: defaultTimeValues }}
                    defaultVisible
                    defaultVisibleMonth={() => startValue}
                    onChange={val => {
                        onChange(
                            val.map(item =>
                                moment.isMoment(item) ? item.format('YYYY-MM-DD HH:mm:ss') : item
                            )
                        );
                    }}
                />
            );
            cy.get('.next-calendar-cell[title="2017-11-09"] .next-calendar-date').click();
            cy.get('.next-calendar-cell[title="2017-12-09"] .next-calendar-date').eq(1).click();
            // assert(ret[1].format('YYYY-MM-DD HH:mm:ss') === '2017-12-09 23:59:59');
        });

        it('should resetTime', () => {
            const onChange = cy.spy();

            cy.mount(
                <RangePicker
                    showTime
                    resetTime
                    defaultVisible
                    defaultValue={[
                        moment('2017-11-12 10:10:10', 'YYYY-MM-DD HH:mm:ss', true),
                        moment('2017-12-12 11:11:11', 'YYYY-MM-DD HH:mm:ss', true),
                    ]}
                    onChange={val => {
                        onChange(
                            val.map(item =>
                                moment.isMoment(item) ? item.format('YYYY-MM-DD HH:mm:ss') : item
                            )
                        );
                    }}
                />
            );
            cy.get('.next-calendar-cell[title="2017-11-09"] .next-calendar-date').click();
            cy.get('.next-range-picker-panel-input-end-date input').focus();
            cy.get('.next-calendar-cell[title="2017-12-09"] .next-calendar-date').eq(1).click();
            cy.wrap(onChange).should('be.calledWith', [
                '2017-11-09 00:00:00',
                '2017-12-09 00:00:00',
            ]);
        });

        it('should not resetTime as default', () => {
            const onChange = cy.spy();

            cy.mount(
                <RangePicker
                    showTime
                    defaultVisible
                    defaultValue={[
                        moment('2017-11-12 10:10:10', 'YYYY-MM-DD HH:mm:ss', true),
                        moment('2017-12-12 11:11:11', 'YYYY-MM-DD HH:mm:ss', true),
                    ]}
                    onChange={val => {
                        onChange(
                            val.map(item =>
                                moment.isMoment(item) ? item.format('YYYY-MM-DD HH:mm:ss') : item
                            )
                        );
                    }}
                />
            );
            cy.get('td[title="2017-11-09"] .next-calendar-date').click();
            cy.get('.next-range-picker-panel-input-end-date input').focus();
            cy.get('td[title="2017-12-09"] .next-calendar-date').eq(1).click();
            cy.wrap(onChange).should('be.calledWith', [
                '2017-11-09 10:10:10',
                '2017-12-09 11:11:11',
            ]);
            // 选择了一个比开始日期更小的结束日期，此时表示用户重新选择了
            // 结束日期等于开始日期 不修改时间
            cy.get('.next-range-picker-panel-input-end-date input').focus();
            cy.get('td[title="2017-11-08"] .next-calendar-date').click();
            cy.wrap(onChange).should('be.calledWith', [
                '2017-11-08 10:10:10',
                '2017-11-08 11:11:11',
            ]);
        });

        it('should select a endDay less than the previous startDay', () => {
            const onChange = cy.spy();
            cy.mount(
                <RangePicker
                    defaultValue={[startValue, endValue]}
                    defaultVisible
                    onChange={val => {
                        onChange(
                            val.map(item =>
                                moment.isMoment(item) ? item.format('YYYY-MM-DD HH:mm:ss') : item
                            )
                        );
                    }}
                />
            );
            cy.get('.next-range-picker-panel-input-end-date input').focus();
            cy.get('td[title="2017-11-01"] .next-calendar-date').click();
            cy.wrap(onChange).should('be.calledWith', [
                '2017-11-01 00:00:00',
                '2017-11-01 00:00:00',
            ]);
        });

        it('should select end month n, panel visible month should be from n-1 to n', () => {
            const onChange = cy.spy();
            cy.mount(
                <RangePicker
                    defaultValue={[startValue, endValue]}
                    defaultVisible
                    onChange={val => {
                        onChange(
                            val.map(item =>
                                moment.isMoment(item) ? item.format('YYYY-MM-DD HH:mm:ss') : item
                            )
                        );
                    }}
                />
            );
            cy.get('.next-range-picker-panel-input-end-date input').focus();
            cy.get('.next-calendar-panel-header-right .next-calendar-btn').eq(0).click();
            cy.get('.next-calendar-tbody tr td[title="Feb"]').click();
            cy.get('.next-calendar-panel-header-right .next-calendar-btn[title="February"]').should(
                'exist'
            );
        });

        it('should select a startDay bigger than the previous endDay', () => {
            const onChange = cy.spy();
            cy.mount(
                <RangePicker
                    defaultValue={[startValue, endValue]}
                    defaultVisible
                    onChange={val => {
                        onChange(
                            val.map(item =>
                                moment.isMoment(item) ? item.format('YYYY-MM-DD') : item
                            )
                        );
                    }}
                />
            );
            cy.get('.next-range-picker-panel-input-start-date input').focus();
            cy.get('td[title="2017-12-25"] .next-calendar-date').click();
            cy.wrap(onChange).should('be.calledWith', ['2017-12-25', '2017-12-25']);
        });

        it('should select endDate firstly', () => {
            const onChange = cy.spy();
            cy.mount(
                <RangePicker
                    defaultVisibleMonth={() => startValue}
                    defaultVisible
                    onChange={val => {
                        onChange(
                            val.map(item =>
                                moment.isMoment(item) ? item.format('YYYY-MM-DD') : item
                            )
                        );
                    }}
                />
            );
            cy.get('.next-range-picker-panel-input-end-date input').focus();
            cy.get('td[title="2017-12-25"] .next-calendar-date').click();
            cy.wrap(onChange).should('be.calledWith', [null, '2017-12-25']);
        });

        it('should select Year', () => {
            cy.mount(<RangePicker defaultVisibleMonth={() => startValue} defaultVisible />);
            cy.get('.next-calendar-panel-header-left .next-calendar-btn').eq(1).click();
            cy.get('.next-calendar-year').eq(5).click();
            cy.get('.next-calendar-panel-header-full .next-calendar-btn').should(
                'have.text',
                '2014'
            );
        });

        it('should select time panel', () => {
            cy.mount(
                <RangePicker
                    defaultValue={[startValue, endValue]}
                    showTime
                    defaultVisibleMonth={() => startValue}
                    defaultVisible
                />
            );
            cy.get('.next-date-picker-panel-footer .next-btn').eq(0).click();
            cy.get('div.next-range-picker-panel-time').should('exist');
        });

        it('should click onOk', () => {
            const onOk = cy.spy();
            cy.mount(
                <RangePicker
                    showTime
                    defaultVisibleMonth={() => startValue}
                    defaultVisible
                    onOk={val => {
                        onOk(
                            val.map(item =>
                                moment.isMoment(item) ? item.format('YYYY-MM-DD HH:mm:ss') : item
                            )
                        );
                    }}
                />
            );
            cy.get('.next-calendar-cell[title="2017-11-09"] .next-calendar-date').click();
            cy.get('.next-calendar-cell[title="2017-11-11"] .next-calendar-date').click();
            cy.get('.next-date-picker-panel-footer .next-btn').eq(1).click();
            cy.wrap(onOk).should('be.calledWith', ['2017-11-09 00:00:00', '2017-11-11 00:00:00']);
        });

        // fix issue: https://github.com/alibaba-fusion/next/issues/1799
        it('should call onOk handler after setting state effective', () => {
            const onOk = cy.spy();
            const curMoment = moment();

            cy.mount(
                <RangePicker
                    ranges={{ 快捷选择: [curMoment, curMoment] }}
                    onOk={val => {
                        onOk(
                            val.map(item =>
                                moment.isMoment(item) ? item.format('YYYY-MM-DD HH:mm:ss') : item
                            )
                        );
                    }}
                />
            );

            openPanel();
            cy.get('.next-date-picker-panel-tools .next-btn-text').click();
            cy.wrap(onOk).should('be.calledWith', [
                curMoment.format('YYYY-MM-DD HH:mm:ss'),
                curMoment.format('YYYY-MM-DD HH:mm:ss'),
            ]);
        });

        it('should keyboard date input', () => {
            cy.mount(<RangePicker defaultVisible popupProps={{ animation: false }} />);
            cy.get('.next-range-picker-panel-input-start-date input').eq(0).as('input');
            cy.get('@input').type('{downArrow}');
            cy.get('@input').should('have.value', moment().format('YYYY-MM-DD'));
            cy.get('@input').type('{leftArrow}');
            cy.get('@input').should('have.value', moment().format('YYYY-MM-DD'));
            cy.get('@input').type('{alt}{downArrow}');
            cy.get('@input').type('{shift}{downArrow}');
            cy.get('@input').type('{ctrl}{downArrow}');
            cy.get('@input').should('have.value', moment().format('YYYY-MM-DD'));
            cy.get('@input').type('{downArrow}');
            cy.get('@input').should('have.value', moment().add(1, 'day').format('YYYY-MM-DD'));
            cy.get('@input').type('{upArrow}');
            cy.get('@input').should('have.value', moment().format('YYYY-MM-DD'));
            cy.get('@input').type('{pageDown}');
            cy.get('@input').should('have.value', moment().add(1, 'month').format('YYYY-MM-DD'));
            cy.get('@input').type('{pageUp}');
            cy.get('@input').should('have.value', moment().format('YYYY-MM-DD'));
            cy.get('@input').type('{alt}{pageDown}');
            cy.get('@input').should('have.value', moment().add(1, 'year').format('YYYY-MM-DD'));
            cy.get('@input').type('{alt}{pageUp}');
            cy.get('@input').should('have.value', moment().format('YYYY-MM-DD'));
        });

        it('should keyboard date time input', () => {
            cy.mount(
                <RangePicker
                    showTime={{ format: 'HH:mm:ss' }}
                    defaultVisible
                    value={[
                        moment().hours(0).minutes(0).seconds(0),
                        moment().hours(0).minutes(0).seconds(0).add(1, 'month'),
                    ]}
                    popupProps={{
                        animation: false,
                    }}
                />
            );

            cy.get('.next-range-picker-panel-input-start-time input').eq(0).as('timeInput');
            cy.get('@timeInput').type('{downArrow}');
            cy.get('@timeInput').should('have.value', '00:00:00');
            cy.get('@timeInput').type('{leftArrow}');
            cy.get('@timeInput').type('{alt}{downArrow}');
            cy.get('@timeInput').type('{shift}{downArrow}');
            cy.get('@timeInput').type('{ctrl}{downArrow}');
            cy.get('@timeInput').should('have.value', '00:00:00');
            cy.get('@timeInput').type('{downArrow}');
            cy.get('@timeInput').should('have.value', '00:00:01');
            cy.get('@timeInput').type('{upArrow}');
            cy.get('@timeInput').should('have.value', '00:00:00');
            cy.get('@timeInput').type('{pageDown}');
            cy.get('@timeInput').should('have.value', '00:01:00');
            cy.get('@timeInput').type('{pageUp}');
            cy.get('@timeInput').should('have.value', '00:00:00');
            cy.get('@timeInput').type('{alt}{pageDown}');
            cy.get('@timeInput').should('have.value', '01:00:00');
            cy.get('@timeInput').type('{alt}{pageUp}');
            cy.get('@timeInput').should('have.value', '00:00:00');
        });

        // fix issue: https://github.com/alibaba-fusion/next/issues/2198
        it('should reset time when time is empty', () => {
            const curTime = moment();
            cy.mount(<RangePicker showTime value={[curTime, curTime]} />);
            openPanel();
            const sltor = '.next-range-picker-panel-input-start-time input';
            cy.get(sltor).clear();
            cy.get(sltor).blur();
            cy.get(sltor).should('have.value', curTime.format('HH:mm:ss'));
        });

        // fix issue: https://github.com/alibaba-fusion/next/issues/2183
        it('should be able to select same day', () => {
            const onChange = cy.spy();
            cy.mount(
                <RangePicker
                    showTime
                    onChange={val => {
                        onChange(
                            val.map(item =>
                                moment.isMoment(item) ? item.format('YYYY-MM-DD HH:mm:ss') : item
                            )
                        );
                    }}
                />
            );
            openPanel();
            cy.get('.next-calendar-cell').eq(10).as('cell');
            cy.get('@cell').click();
            cy.get('@cell').click();
            cy.wrap(onChange).should('be.calledWithMatch', ([start, end]: [string, string]) => {
                return start === end;
            });
        });
    });

    describe('with date string', () => {
        it('should defaultValue as string', () => {
            cy.mount(<RangePicker defaultValue={['2017-11-11', '2017-11-12']} />);
            cy.get('.next-range-picker-trigger-input input')
                .eq(0)
                .should('have.value', '2017-11-11');
            cy.get('.next-range-picker-trigger-input input')
                .eq(1)
                .should('have.value', '2017-11-12');
        });

        it('should value as string', () => {
            cy.mount(<RangePicker value={['2017-11-11', '2017-11-12']} />).as('Demo');
            cy.rerender('Demo', { value: ['2017-12-11', '2017-12-12'] });
            cy.get('.next-range-picker-trigger-input input')
                .eq(0)
                .should('have.value', '2017-12-11');
            cy.get('.next-range-picker-trigger-input input')
                .eq(1)
                .should('have.value', '2017-12-12');
        });
    });

    describe('with hooks', () => {
        // fix #1640: 修复在 blur 事件中使用 hooks 方式导致组件 re-render，日期的月份被重置
        it('should be compatible with hooks', () => {
            function App() {
                const [value, setValue] = useState('2020-03-09');
                const [count, setCount] = useState(0);
                return (
                    <DatePicker
                        value={value}
                        onBlur={() => setCount(count + 1)}
                        onChange={(val: string) => setValue(val)}
                    />
                );
            }
            cy.mount(<App />);
            cy.get('.next-date-picker-trigger input').eq(0).click();
            cy.get('.next-calendar-btn-next-month').eq(0).click();
            cy.get('.next-calendar-btn-next-month').eq(0).blur();
            cy.get('.next-calendar-panel-header-full .next-calendar-btn')
                .eq(0)
                .should('have.text', 'April');
        });
    });

    describe('issues', () => {
        it('should switch end to start input when click on end input and choose end date, close #3998', () => {
            cy.mount(<RangePicker followTrigger defaultValue={['2024-03-02', '2024-03-03']} />);
            const clickDate = (value: string) => {
                cy.get(`td[title="${value}"] .next-calendar-date`).click();
            };

            cy.get('.next-range-picker-trigger .next-input').eq(1).click();
            clickDate('2024-03-03');
            clickDate('2024-03-03');
            cy.get('.next-range-picker-panel-input-start-date input').should(
                'have.value',
                '2024-03-03'
            );
            cy.get('.next-range-picker-panel-input-end-date input').should(
                'have.value',
                '2024-03-03'
            );
        });

        it('handle value type consistency with Form components #2895', () => {
            const onChange = cy.spy();
            cy.mount(
                <Form>
                    <Form.Item name="date">
                        <RangePicker
                            defaultValue={['', '']}
                            onChange={val => {
                                onChange(val.map(item => typeof item));
                            }}
                        />
                    </Form.Item>
                </Form>
            );
            cy.get('.next-range-picker-trigger-input input').eq(0).click();
            cy.get(`td[title="${moment().format('YYYY-MM-DD')}"] .next-calendar-date`)
                .eq(0)
                .click();
            cy.get(`td[title="${moment().format('YYYY-MM-DD')}"] .next-calendar-date`)
                .eq(0)
                .click();
            cy.wrap(onChange).should('be.calledWith', ['string', 'string']);
            cy.get('i.next-input-clear-icon').click({ force: true });
            cy.get(`td[title="${moment().format('YYYY-MM-DD')}"] .next-calendar-date`)
                .eq(0)
                .click();
            cy.get(`td[title="${moment().format('YYYY-MM-DD')}"] .next-calendar-date`)
                .eq(0)
                .click();
            cy.wrap(onChange).should('be.calledWith', ['string', 'string']);
        });
    });
});
