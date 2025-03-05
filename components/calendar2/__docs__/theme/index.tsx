import dayjs, { type Dayjs } from 'dayjs';
import React from 'react';
import ReactDOM from 'react-dom';
import { Demo, DemoGroup, initDemo } from '../../../demo-helper';
import Calendar from '../../index';
import type { CalendarProps } from '../../types';
import ConfigProvider from '../../../config-provider';
import zhCN from '../../../locale/zh-cn';
import enUS from '../../../locale/en-us';
import '../../../demo-helper/style';
import '../../style';

const i18nMap = {
    'zh-cn': {
        dateFullscreenCalendar: '全屏日历',
        cardCalendar: '卡片日历',
        panelCalendar: '面板日历',
        month: '月',
        year: '年',

        normal: '普通',
    },
    'en-us': {
        dateFullscreenCalendar: 'Fullscreen',
        cardCalendar: 'Card',
        panelCalendar: 'Panel',

        month: 'Month',
        year: 'Year',

        normal: 'Normal',
    },
};

const wrappedCalendarStyle = {
    width: '320px',
    overflow: 'hidden',
};

const wrappedRangeCalendarStyle = {
    width: '600px',
    overflow: 'hidden',
};

function render(i18n: any, lang: string) {
    const currentDate = dayjs();
    const calendarValue = currentDate.clone().add(1, 'days');

    const disabledDate: CalendarProps['disabledDate'] = function (date: Dayjs) {
        return date.valueOf() > currentDate.clone().add(3, 'days').valueOf();
    };

    ReactDOM.render(
        <ConfigProvider locale={lang === 'en-us' ? enUS : zhCN}>
            <div className="demo-container">
                <Demo title={i18n.dateFullscreenCalendar}>
                    <Demo title={i18n.month}>
                        <DemoGroup label={i18n.normal}>
                            <Calendar
                                disabledDate={disabledDate}
                                value={calendarValue.clone().add(-1, 'months')}
                                mode="month"
                            />
                        </DemoGroup>
                    </Demo>
                </Demo>

                <Demo title={i18n.cardCalendar}>
                    <Demo title={i18n.month}>
                        <DemoGroup label={i18n.normal}>
                            <div style={wrappedCalendarStyle}>
                                <Calendar
                                    shape="card"
                                    disabledDate={disabledDate}
                                    value={calendarValue.clone().add(-1, 'months')}
                                    mode="month"
                                />
                            </div>
                        </DemoGroup>
                    </Demo>
                </Demo>

                <Demo title={i18n.panelCalendar}>
                    <Demo title={i18n.month}>
                        <DemoGroup label={i18n.normal}>
                            <div style={wrappedCalendarStyle}>
                                <Calendar
                                    shape="panel"
                                    disabledDate={disabledDate}
                                    value={calendarValue.clone().add(-1, 'months')}
                                    mode="month"
                                />
                            </div>
                        </DemoGroup>
                    </Demo>

                    <Demo title={i18n.year}>
                        <DemoGroup label={i18n.normal}>
                            <div style={wrappedCalendarStyle}>
                                <Calendar
                                    shape="panel"
                                    disabledDate={disabledDate}
                                    value={calendarValue.clone().add(-1, 'years')}
                                    mode="year"
                                />
                            </div>
                        </DemoGroup>
                    </Demo>
                </Demo>
            </div>
        </ConfigProvider>,
        document.getElementById('container')
    );
}

window.renderDemo = function (lang = 'en-us') {
    dayjs.locale(lang);
    render(i18nMap[lang], lang);
};

renderDemo();

initDemo('calendar2');
