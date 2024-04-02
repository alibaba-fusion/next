import React from 'react';
import sinon from 'sinon';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import assert from 'power-assert';
import moment from 'moment';
import Calendar from '../index';
import RangeCalendar from '../range-calendar';
import '../style';
import { getLocaleData } from '../utils/index';

Enzyme.configure({
    adapter: new Adapter(),
});
moment.locale('zh-cn');
const defaultVal = moment('2017-10-01', 'YYYY-MM-DD', true);

/* eslint-disable */
describe('Calendar', () => {
    let wrapper;

    afterEach(() => {
        if (wrapper) {
            wrapper.unmount();
            wrapper = null;
        }
    });

    describe('render', () => {
        it('should render calendar', () => {
            wrapper = mount(<Calendar />);
            assert(wrapper.find('.next-calendar.next-calendar-fullscreen').length === 1);
        });

        it('should render with defaultVisibleMonth', () => {
            wrapper = mount(<Calendar defaultVisibleMonth={() => defaultVal} />);
            assert(wrapper.find('td[title="2017-10-01"]').length === 1);
        });

        it('should render with default value', () => {
            wrapper = mount(
                <Calendar defaultVisibleMonth={() => defaultVal} defaultValue={defaultVal} />
            );
            assert(wrapper.find('td[title="2017-10-01"]').hasClass('next-selected'));
        });

        it('should render calendar panel', () => {
            wrapper = mount(<Calendar shape="panel" />);
            assert(wrapper.find('.next-calendar-panel-header').length === 1);
        });

        it('should render calendar card', () => {
            wrapper = mount(<Calendar shape="card" />);
            assert(wrapper.find('.next-calendar-card').length === 1);
        });

        it('should render uncontrolled calendar', () => {
            wrapper = mount(<Calendar defaultValue={defaultVal} />);
            assert(wrapper.find('td[title="2017-10-01"]').hasClass('next-selected'));
            assert(wrapper.find('td[title="2017-10-02"]').length);
            wrapper.find('td[title="2017-10-02"]').simulate('click');
            assert(wrapper.find('td[title="2017-10-02"]').hasClass('next-selected'));
        });

        it('should render controlled calendar', () => {
            wrapper = mount(<Calendar value={defaultVal} defaultVisibleMonth={() => defaultVal} />);
            assert(wrapper.find('td[title="2017-10-01"]').hasClass('next-selected'));
            wrapper.setProps({ value: defaultVal.clone().add(1, 'days') });
            assert(wrapper.find('td[title="2017-10-02"]').hasClass('next-selected'));
        });

        it('should render controlled calendar with mode', () => {
            wrapper = mount(<Calendar mode="date" />);
            wrapper.setProps({ mode: 'month' });
            assert(wrapper.find('.next-calendar-cell').length === 12);
        });

        it('should render with disabled dates', () => {
            const disabledDate = (date, view) => {
                assert(view === 'date');
                return date.valueOf() > defaultVal.valueOf();
            };
            wrapper = mount(
                <Calendar defaultVisibleMonth={() => defaultVal} disabledDate={disabledDate} />
            );
            assert(wrapper.find('td[title="2017-10-02"]').hasClass('next-disabled'));
        });

        it('should render custom content', () => {
            const dateCellRender = date => {
                const dateNum = date.date();
                if (defaultVal.month() !== date.month()) {
                    return dateNum;
                }

                if (dateNum === 1) {
                    return <div className="test">hello world</div>;
                }
            };
            wrapper = mount(
                <Calendar defaultVisibleMonth={() => defaultVal} dateCellRender={dateCellRender} />
            );
            assert(wrapper.find('td[title="2017-10-01"] div.test').length === 1);
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
            wrapper = mount(<Calendar locale={locale} />);

            const localeData = getLocaleData(locale.format, moment().localeData());
            assert(localeData.monthsShort() === locale.format.shortMonths);
            assert(localeData.months() === locale.format.months);
            assert(localeData.firstDayOfWeek() === moment().localeData().firstDayOfWeek());
            assert(localeData.weekdays() === locale.format.weekdays);
            assert(localeData.weekdaysShort() === locale.format.shortWeekdays);
            assert(localeData.weekdaysMin() === locale.format.veryShortWeekdays);

            assert(
                wrapper.find('.next-calendar-th').at(0).text() ===
                    locale.format.shortWeekdays[moment().localeData().firstDayOfWeek()]
            );
        });
    });

    describe('action', () => {
        it('should change mode', () => {
            const onModeChange = sinon.spy();

            wrapper = mount(<Calendar onModeChange={onModeChange} />);
            wrapper
                .find('.next-radio-wrapper input')
                .at(1)
                .simulate('change', { target: { checked: true } });
            assert(wrapper.find('td').length === 12);
            assert(wrapper.find('td[title="1月"]').length === 1);
            assert(onModeChange.calledOnce);
        });

        it('should change panel mode to month', () => {
            wrapper = mount(<Calendar shape="panel" defaultVisibleMonth={() => defaultVal} />);
            wrapper.find('.next-calendar-btn').at(2).simulate('click');
            assert(wrapper.find('.next-calendar-month').length === 12);
            wrapper.find('.next-calendar-btn').at(1).simulate('click');
            assert(
                wrapper.find('.next-calendar-panel-header button[title="2010-2019"]').length === 1
            );
        });

        it('should change panel mode to year', () => {
            wrapper = mount(<Calendar shape="panel" />);
            wrapper.find('.next-calendar-btn').at(3).simulate('click');
            assert(wrapper.find('.next-calendar-year').length === 12);
        });

        it('should change visible month', () => {
            wrapper = mount(<Calendar shape="panel" defaultVisibleMonth={() => defaultVal} />);
            wrapper.find('.next-calendar-btn-prev-month').simulate('click');
            assert(wrapper.find('.next-calendar-panel-header button[title="九月"]').length === 1);
            wrapper.find('.next-calendar-btn-next-month').simulate('click');
            assert(wrapper.find('.next-calendar-panel-header button[title="十月"]').length === 1);
        });

        it('should change visible month by year', () => {
            wrapper = mount(<Calendar shape="panel" defaultVisibleMonth={() => defaultVal} />);
            wrapper.find('.next-calendar-btn-prev-year').simulate('click');
            wrapper.find('.next-calendar-btn-next-year').simulate('click');
            assert(wrapper.find('.next-calendar-btn').at(3).instance().title === '2017');
        });

        it('should change decade', () => {
            wrapper = mount(
                <Calendar shape="panel" mode="year" defaultVisibleMonth={() => defaultVal} />
            );
            wrapper.find('.next-calendar-btn-prev-decade').simulate('click');
            assert(
                wrapper.find('.next-calendar-panel-header button[title="2000-2009"]').length === 1
            );
            wrapper.find('.next-calendar-btn-next-decade').simulate('click');
            assert(
                wrapper.find('.next-calendar-panel-header button[title="2010-2019"]').length === 1
            );
        });

        it('should select date', () => {
            const onSelect = val => {
                assert(val.format('YYYY-MM-DD') === '2017-10-02');
            };
            wrapper = mount(
                <Calendar
                    shape="panel"
                    defaultVisibleMonth={() => defaultVal}
                    onSelect={onSelect}
                />
            );
            wrapper.find('td[title="2017-10-02"]').simulate('click');
        });

        it('should hide cell for other month', () => {
            let isClicked = false;
            const onSelect = val => {
                // handle click from this month
                assert(val.format('YYYY-MM-DD') === '2017-10-02');
                isClicked = true;
            };
            wrapper = mount(
                <Calendar
                    showOtherMonth={false}
                    defaultVisibleMonth={() => defaultVal}
                    onSelect={onSelect}
                />
            );

            // hide cell for other month
            assert(
                wrapper.find('.next-calendar-cell-next-month[title="2017-11-01"]').text() === ''
            );
            wrapper.find('td[title="2017-10-02"]').simulate('click');
            assert(isClicked === true);
        });

        it('should block click event from other month', () => {
            let isClicked = false;
            wrapper = mount(
                <Calendar
                    showOtherMonth={false}
                    defaultVisibleMonth={() => defaultVal}
                    onSelect={() => {
                        isClicked = true;
                    }}
                />
            );

            wrapper.find('.next-calendar-cell-next-month[title="2017-11-01"]').simulate('click');
            assert(isClicked === false);
        });
    });
});

describe('RangeCalendar', () => {
    let wrapper;

    afterEach(() => {
        if (wrapper) {
            wrapper.unmount();
        }
        wrapper = null;
    });

    describe('render', () => {
        it('should render RangeCalendar', () => {
            wrapper = mount(<RangeCalendar />);
            assert(wrapper.find('.next-calendar-table').length === 2);
        });

        it('should render with defaultStartValue & defaultEndValue', () => {
            wrapper = mount(
                <RangeCalendar
                    defaultVisibleMonth={() => defaultVal}
                    defaultStartValue={defaultVal}
                    defaultEndValue={defaultVal.clone().add(1, 'months')}
                />
            );
            assert(wrapper.find('td[title="2017-10-01"]').hasClass('next-selected'));
            assert(wrapper.find('td[title="2017-10-15"]').hasClass('next-inrange'));
            assert(wrapper.find('td[title="2017-11-01"]').at(1).hasClass('next-selected'));
        });

        it('should render with controlled value', () => {
            wrapper = mount(
                <RangeCalendar
                    defaultVisibleMonth={() => defaultVal}
                    startValue={defaultVal}
                    endValue={defaultVal.clone().add(1, 'months')}
                />
            );
            wrapper.setProps({
                startValue: defaultVal.clone().add(2, 'days'),
                endValue: defaultVal.clone().add(1, 'months'),
            });
            assert(wrapper.find('td[title="2017-10-03"]').hasClass('next-selected'));
            assert(wrapper.find('td[title="2017-10-15"]').hasClass('next-inrange'));
            assert(wrapper.find('td[title="2017-11-01"]').at(1).hasClass('next-selected'));
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
            wrapper = mount(<RangeCalendar locale={locale} />);

            assert(
                wrapper.find('.next-calendar-th').at(0).text() ===
                    locale.format.shortWeekdays[moment().localeData().firstDayOfWeek()]
            );
        });
    });

    describe('action', () => {
        it('should change to month mode in panel', () => {
            wrapper = mount(
                <RangeCalendar
                    defaultVisibleMonth={() => defaultVal}
                    defaultStartValue={defaultVal}
                    defaultEndValue={defaultVal.clone().add(1, 'months')}
                />
            );
            wrapper.find('.next-calendar-btn').at(2).simulate('click');
            assert(wrapper.find('td[title="10月"]').hasClass('next-selected'));
            wrapper.find('td[title="10月"]').simulate('click');
            wrapper.find('.next-calendar-btn').at(4).simulate('click');
            assert(wrapper.find('td[title="10月"]').hasClass('next-selected'));
        });

        it('should change to year mode in panel', () => {
            wrapper = mount(
                <RangeCalendar
                    defaultVisibleMonth={() => defaultVal}
                    defaultStartValue={defaultVal}
                    defaultEndValue={defaultVal.clone().add(1, 'months')}
                />
            );
            wrapper.find('.next-calendar-btn').at(3).simulate('click');
            assert(
                wrapper.find('.next-calendar-panel-header button[title="2010-2019"]').length === 1
            );
        });

        it('should change visible month', () => {
            wrapper = mount(<RangeCalendar shape="panel" defaultVisibleMonth={() => defaultVal} />);
            wrapper.find('.next-calendar-btn-prev-month').simulate('click');
            assert(wrapper.find('.next-calendar-panel-header button[title="九月"]').length === 1);
            wrapper.find('.next-calendar-btn-next-month').simulate('click');
            assert(wrapper.find('.next-calendar-panel-header button[title="十月"]').length === 1);
        });

        it('should change visible month by year', () => {
            wrapper = mount(<RangeCalendar shape="panel" defaultVisibleMonth={() => defaultVal} />);
            wrapper.find('.next-calendar-btn-prev-year').simulate('click');
            wrapper.find('.next-calendar-btn-next-year').simulate('click');
            assert(wrapper.find('.next-calendar-btn').at(3).instance().title === '2017');
        });

        it('should change decade', () => {
            wrapper = mount(<RangeCalendar shape="panel" defaultVisibleMonth={() => defaultVal} />);
            wrapper.find('.next-calendar-btn').at(3).simulate('click');
            wrapper.find('.next-calendar-btn-prev-decade').simulate('click');
            assert(
                wrapper.find('.next-calendar-panel-header button[title="2000-2009"]').length === 1
            );
            wrapper.find('.next-calendar-btn-next-decade').simulate('click');
            assert(
                wrapper.find('.next-calendar-panel-header button[title="2010-2019"]').length === 1
            );
        });
    });
});
