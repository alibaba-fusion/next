import moment from 'moment';
import { Demo, DemoGroup, initDemo } from '../../../demo-helper';
import Calendar from '../../index';
import RangeCalendar from '../../range-calendar';
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
        rangeCalendar: '多面板日历',

        date: '日',
        month: '月',
        year: '年',

        normal: '普通',
    },
    'en-us': {
        dateFullscreenCalendar: 'Fullscreen',
        cardCalendar: 'Card',
        panelCalendar: 'Panel',
        rangeCalendar: 'Range Panel',

        date: 'Day',
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

window.renderDemo = function (lang = 'en-us') {
    moment.locale(lang);
    render(i18nMap[lang], lang);
};

/* eslint-disable */
function render(i18n, lang) {
    const currentDate = moment();
    const calendarValue = currentDate.clone().add(1, 'days');

    const disabledDate = function (date) {
        return date.valueOf() > currentDate.clone().add(3, 'days').valueOf();
    };

    return ReactDOM.render(
        <ConfigProvider locale={lang === 'en-us' ? enUS : zhCN}>
            <div className="demo-container">
                <Demo title={i18n.dateFullscreenCalendar}>
                    <Demo title={i18n.date}>
                        <DemoGroup label={i18n.normal}>
                            <Calendar
                                disabledDate={disabledDate}
                                value={calendarValue}
                                mode="date"
                            />
                        </DemoGroup>
                    </Demo>
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
                    <Demo title={i18n.date}>
                        <DemoGroup label={i18n.normal}>
                            <div style={wrappedCalendarStyle}>
                                <Calendar
                                    shape="card"
                                    disabledDate={disabledDate}
                                    value={calendarValue}
                                    mode="date"
                                />
                            </div>
                        </DemoGroup>
                    </Demo>
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
                    <Demo title={i18n.date}>
                        <DemoGroup label={i18n.normal}>
                            <div style={wrappedCalendarStyle}>
                                <Calendar
                                    shape="panel"
                                    disabledDate={disabledDate}
                                    value={calendarValue}
                                    mode="date"
                                />
                            </div>
                        </DemoGroup>
                    </Demo>

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

                <Demo title={i18n.rangeCalendar}>
                    <Demo title={i18n.date}>
                        <DemoGroup label={i18n.normal}>
                            <div style={wrappedRangeCalendarStyle}>
                                <RangeCalendar
                                    showOtherMonth
                                    startValue={calendarValue}
                                    endValue={calendarValue.clone().add(1, 'months')}
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

renderDemo();

initDemo('calendar');
