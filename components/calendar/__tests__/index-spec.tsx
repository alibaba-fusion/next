import React from 'react';
import moment from 'moment';
import 'moment/locale/zh-cn';
import Calendar, { type CalendarProps } from '../index';
import RangeCalendar from '../range-calendar';
import '../style';
import { getLocaleData } from '../utils/index';

moment.locale('zh-cn');
const defaultVal = moment('2017-10-01', 'YYYY-MM-DD', true);

describe('Calendar', () => {
    describe('render', () => {
        it('should render calendar', () => {
            cy.mount(<Calendar />);
            cy.get('.next-calendar.next-calendar-fullscreen').should('have.length', 1);
        });

        it('should render with defaultVisibleMonth', () => {
            cy.mount(<Calendar defaultVisibleMonth={() => defaultVal} />);
            cy.get('td[title="2017-10-01"]').should('have.length', 1);
        });

        it('should render with default value', () => {
            cy.mount(<Calendar defaultVisibleMonth={() => defaultVal} defaultValue={defaultVal} />);
            cy.get('td[title="2017-10-01"]').should('have.class', 'next-selected');
        });

        it('should render calendar panel', () => {
            cy.mount(<Calendar shape="panel" />);
            cy.get('.next-calendar-panel-header').should('have.length', 1);
        });

        it('should render calendar card', () => {
            cy.mount(<Calendar shape="card" />);
            cy.get('.next-calendar-card').should('have.length', 1);
        });

        it('should render uncontrolled calendar', () => {
            cy.mount(<Calendar defaultValue={defaultVal} />);
            cy.get('td[title="2017-10-01"]').should('have.class', 'next-selected');
            cy.get('td[title="2017-10-02"]').should('exist');
            cy.get('td[title="2017-10-02"]').click();
            cy.get('td[title="2017-10-02"]').should('have.class', 'next-selected');
        });

        it('should render controlled calendar', () => {
            cy.mount(<Calendar value={defaultVal} defaultVisibleMonth={() => defaultVal} />).as(
                'Demo'
            );
            cy.get('td[title="2017-10-01"]').should('have.class', 'next-selected');
            cy.rerender('Demo', { value: defaultVal.clone().add(1, 'days') });
            cy.get('td[title="2017-10-02"]').should('have.class', 'next-selected');
        });

        it('should render controlled calendar with mode', () => {
            cy.mount(<Calendar mode="date" />).as('Demo');
            cy.rerender('Demo', { mode: 'month' });
            cy.get('.next-calendar-cell').should('have.length', 12);
        });

        it('should render with disabled dates', () => {
            const disabledDateHandler = cy.spy().as('disabledDateHandler');
            const disabledDate: CalendarProps['disabledDate'] = (date, view) => {
                disabledDateHandler(view);
                return date.valueOf() > defaultVal.valueOf();
            };
            cy.mount(
                <Calendar defaultVisibleMonth={() => defaultVal} disabledDate={disabledDate} />
            );
            cy.get('td[title="2017-10-02"]').should('have.class', 'next-disabled');
            cy.get('@disabledDateHandler').should('be.calledWith', 'date');
        });

        it('should render custom content', () => {
            const dateCellRender: CalendarProps['dateCellRender'] = date => {
                const dateNum = date.date();
                if (defaultVal.month() !== date.month()) {
                    return dateNum;
                }

                if (dateNum === 1) {
                    return <div className="test">hello world</div>;
                }
            };
            cy.mount(
                <Calendar defaultVisibleMonth={() => defaultVal} dateCellRender={dateCellRender} />
            );
            cy.get('td[title="2017-10-01"] div.test').should('have.length', 1);
        });

        it('should render custom format 0.x', () => {
            const locale = {
                format: {
                    months: [
                        '一月',
                        '二月',
                        '三月',
                        '四月',
                        '五月',
                        '六月',
                        '七月',
                        '八月',
                        '九月',
                        '十月',
                        '十一月',
                        '十二月',
                    ],
                    shortMonths: [
                        '一月',
                        '二月',
                        '三月',
                        '四月',
                        '五月',
                        '六月',
                        '七月',
                        '八月',
                        '九月',
                        '十月',
                        '十一月',
                        '十二月',
                    ],
                    weekdays: [
                        '星期天',
                        '星期一',
                        '星期二',
                        '星期三',
                        '星期四',
                        '星期五',
                        '星期六',
                    ],
                    shortWeekdays: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
                    veryShortWeekdays: ['日', '一', '二', '三', '四', '五', '六'],
                    ampms: ['上午', '下午'],
                },
            };
            cy.mount(<Calendar locale={locale} />);

            const localeData = getLocaleData(locale.format, moment().localeData());
            cy.wrap(localeData.monthsShort()).should('equal', locale.format.shortMonths);
            cy.wrap(localeData.months()).should('equal', locale.format.months);
            cy.wrap(localeData.firstDayOfWeek()).should(
                'equal',
                moment().localeData().firstDayOfWeek()
            );
            cy.wrap(localeData.weekdays()).should('equal', locale.format.weekdays);
            cy.wrap(localeData.weekdaysShort()).should('equal', locale.format.shortWeekdays);
            cy.wrap(localeData.weekdaysMin()).should('equal', locale.format.veryShortWeekdays);
            cy.get('.next-calendar-th')
                .eq(0)
                .should(
                    'have.text',
                    locale.format.shortWeekdays[moment().localeData().firstDayOfWeek()]
                );
        });
    });

    describe('action', () => {
        it('should change mode', () => {
            const onModeChange = cy.spy().as('onModeChange');
            cy.mount(<Calendar onModeChange={onModeChange} />);
            cy.get('.next-radio-wrapper input').eq(1).check({ force: true });
            cy.get('td').should('have.length', 12);
            cy.get('td[title="1月"]').should('have.length', 1);
            cy.get('@onModeChange').should('be.calledOnce');
        });

        it('should change panel mode to month', () => {
            cy.mount(<Calendar shape="panel" defaultVisibleMonth={() => defaultVal} />);
            cy.get('.next-calendar-btn').eq(2).click();
            cy.get('.next-calendar-month').should('have.length', 12);
            cy.get('.next-calendar-btn').eq(1).click();
            cy.get('.next-calendar-panel-header button[title="2010-2019"]').should(
                'have.length',
                1
            );
        });

        it('should change panel mode to year', () => {
            cy.mount(<Calendar shape="panel" />);
            cy.get('.next-calendar-btn').eq(3).click();
            cy.get('.next-calendar-year').should('have.length', 12);
        });

        it('should change visible month', () => {
            cy.mount(<Calendar shape="panel" defaultVisibleMonth={() => defaultVal} />);
            cy.get('.next-calendar-btn-prev-month').click();
            cy.get('.next-calendar-panel-header button[title="九月"]').should('have.length', 1);
            cy.get('.next-calendar-btn-next-month').click();
            cy.get('.next-calendar-panel-header button[title="十月"]').should('have.length', 1);
        });

        it('should change visible month by year', () => {
            cy.mount(<Calendar shape="panel" defaultVisibleMonth={() => defaultVal} />);
            cy.get('.next-calendar-btn-prev-year').click();
            cy.get('.next-calendar-btn').eq(3).should('have.attr', 'title', '2016');
            cy.get('.next-calendar-btn-next-year').click();
            cy.get('.next-calendar-btn').eq(3).should('have.attr', 'title', '2017');
        });

        it('should change decade', () => {
            cy.mount(<Calendar shape="panel" mode="year" defaultVisibleMonth={() => defaultVal} />);
            cy.get('.next-calendar-btn-prev-decade').click();
            cy.get('.next-calendar-panel-header button[title="2000-2009"]').should(
                'have.length',
                1
            );
            cy.get('.next-calendar-btn-next-decade').click();
            cy.get('.next-calendar-panel-header button[title="2010-2019"]').should(
                'have.length',
                1
            );
        });

        it('should select date', () => {
            const onSelectHandler = cy.spy().as('onSelectHandler');
            const onSelect: CalendarProps['onSelect'] = val => {
                onSelectHandler(val.format('YYYY-MM-DD'));
            };
            cy.mount(
                <Calendar
                    shape="panel"
                    defaultVisibleMonth={() => defaultVal}
                    onSelect={onSelect}
                />
            );
            cy.get('td[title="2017-10-02"]').click();
            cy.get('@onSelectHandler').should('be.calledWith', '2017-10-02');
        });

        it('should hide cell for other month', () => {
            cy.mount(<Calendar showOtherMonth={false} defaultVisibleMonth={() => defaultVal} />);
            cy.get('.next-calendar-cell-next-month[title="2017-11-01"]').should('have.text', '');
        });

        it('should block click event from other month', () => {
            cy.mount(
                <Calendar
                    showOtherMonth={false}
                    defaultVisibleMonth={() => defaultVal}
                    onSelect={cy.spy().as('onSelect')}
                />
            );

            cy.get('.next-calendar-cell-next-month[title="2017-11-01"]').click();
            cy.get('@onSelect').should('not.be.called');
        });
    });
});

describe('RangeCalendar', () => {
    describe('render', () => {
        it('should render RangeCalendar', () => {
            cy.mount(<RangeCalendar />);
            cy.get('.next-calendar-table').should('have.length', 2);
            // assert(wrapper.find('.next-calendar-table').length === 2);
        });

        it('should render with defaultStartValue & defaultEndValue', () => {
            cy.mount(
                <RangeCalendar
                    defaultVisibleMonth={() => defaultVal}
                    defaultStartValue={defaultVal}
                    defaultEndValue={defaultVal.clone().add(1, 'months')}
                />
            );
            cy.get('td[title="2017-10-01"]').should('have.class', 'next-selected');
            cy.get('td[title="2017-10-15"]').should('have.class', 'next-inrange');
            cy.get('td[title="2017-11-01"]').should('have.class', 'next-selected');
        });

        it('should render with controlled value', () => {
            cy.mount(
                <RangeCalendar
                    defaultVisibleMonth={() => defaultVal}
                    startValue={defaultVal}
                    endValue={defaultVal.clone().add(1, 'months')}
                />
            ).as('Demo');
            cy.rerender('Demo', {
                startValue: defaultVal.clone().add(2, 'days'),
                endValue: defaultVal.clone().add(1, 'months'),
            });
            cy.get('td[title="2017-10-03"]').should('have.class', 'next-selected');
            cy.get('td[title="2017-10-15"]').should('have.class', 'next-inrange');
            cy.get('td[title="2017-11-01"]').should('have.class', 'next-selected');
        });

        it('should render custom format 0.x', () => {
            const locale = {
                format: {
                    months: [
                        '一月',
                        '二月',
                        '三月',
                        '四月',
                        '五月',
                        '六月',
                        '七月',
                        '八月',
                        '九月',
                        '十月',
                        '十一月',
                        '十二月',
                    ],
                    shortMonths: [
                        '一月',
                        '二月',
                        '三月',
                        '四月',
                        '五月',
                        '六月',
                        '七月',
                        '八月',
                        '九月',
                        '十月',
                        '十一月',
                        '十二月',
                    ],
                    weekdays: [
                        '星期天',
                        '星期一',
                        '星期二',
                        '星期三',
                        '星期四',
                        '星期五',
                        '星期六',
                    ],
                    shortWeekdays: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
                    veryShortWeekdays: ['日', '一', '二', '三', '四', '五', '六'],
                    ampms: ['上午', '下午'],
                },
            };
            cy.mount(<RangeCalendar locale={locale} />);
            cy.get('.next-calendar-th')
                .eq(0)
                .should(
                    'have.text',
                    locale.format.shortWeekdays[moment().localeData().firstDayOfWeek()]
                );
        });
    });

    describe('action', () => {
        it('should change to month mode in panel', () => {
            cy.mount(
                <RangeCalendar
                    defaultVisibleMonth={() => defaultVal}
                    defaultStartValue={defaultVal}
                    defaultEndValue={defaultVal.clone().add(1, 'months')}
                />
            );
            cy.get('.next-calendar-btn').eq(2).click();
            cy.get('td[title="10月"]').should('have.class', 'next-selected');
            cy.get('td[title="10月').click();
            cy.get('.next-calendar-btn').eq(4).click();
            cy.get('td[title="10月"]').should('have.class', 'next-selected');
        });

        it('should change to year mode in panel', () => {
            cy.mount(
                <RangeCalendar
                    defaultVisibleMonth={() => defaultVal}
                    defaultStartValue={defaultVal}
                    defaultEndValue={defaultVal.clone().add(1, 'months')}
                />
            );
            cy.get('.next-calendar-btn').eq(3).click();
            cy.get('.next-calendar-panel-header button[title="2010-2019"]').should(
                'have.length',
                1
            );
        });

        it('should change visible month', () => {
            cy.mount(<RangeCalendar shape="panel" defaultVisibleMonth={() => defaultVal} />);
            cy.get('.next-calendar-btn-prev-month').click();
            cy.get('.next-calendar-panel-header button[title="九月"]').should('have.length', 1);
            cy.get('.next-calendar-btn-next-month').click();
            cy.get('.next-calendar-panel-header button[title="十月"]').should('have.length', 1);
        });

        it.only('should change visible month by year', () => {
            cy.mount(<RangeCalendar shape="panel" defaultVisibleMonth={() => defaultVal} />);
            cy.get('.next-calendar-btn-prev-year').click();
            cy.get('.next-calendar-btn').eq(3).should('have.attr', 'title', '2016');
            cy.get('.next-calendar-btn-next-year').click();
            cy.get('.next-calendar-btn').eq(3).should('have.attr', 'title', '2017');
        });

        it.only('should change decade', () => {
            cy.mount(<RangeCalendar shape="panel" defaultVisibleMonth={() => defaultVal} />);
            cy.get('.next-calendar-btn').eq(3).click();
            cy.get('.next-calendar-btn-prev-decade').click();
            cy.get('.next-calendar-panel-header button[title="2000-2009"]').should(
                'have.length',
                1
            );
            cy.get('.next-calendar-btn-next-decade').click();
            cy.get('.next-calendar-panel-header button[title="2010-2019"]').should(
                'have.length',
                1
            );
        });
    });
});
