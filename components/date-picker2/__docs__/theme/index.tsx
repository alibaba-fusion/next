import React from 'react';
import ReactDOM from 'react-dom';
import dayjs, { ConfigType, Dayjs } from 'dayjs';
import { Demo, DemoGroup, initDemo } from '../../../demo-helper';
import DatePicker, { type RangePickerProps, type DatePickerProps } from '../../index';
import ConfigProvider from '../../../config-provider';
import zhCN from '../../../locale/zh-cn';
import enUS from '../../../locale/en-us';
import '../../../demo-helper/style';
import '../../style';

const { RangePicker } = DatePicker;

const i18nMap = {
    'zh-cn': {
        datepicker: '日期选择',
        rangepicker: '日期范围选择',
        label: '标签：',
        normal: '普通',
        expandNormal: '普通展开',
        expandTime: '带时间展开',
        selected: '选中后',
        disabled: '禁用',
        disabledDate: '禁用某些日期',
        week: '星期',
        month: '月份',
        year: '年份',
        decade: '季度',
    },
    'en-us': {
        datepicker: 'Date Picker2',
        rangepicker: 'Range Picker2',
        label: 'Label',
        normal: 'Normal',
        expandNormal: 'Date Expanded',
        expandTime: 'Datetime Expanded',
        selected: 'Selected',
        disabled: 'Disabled',
        disabledDate: 'Disabled Date',
        week: 'Week',
        month: 'Month',
        year: 'Year',
        decade: 'Decade',
    },
};

let startValue: ConfigType;
let endValue: ConfigType;

class FunctionDemo extends React.Component<{
    locale: (typeof i18nMap)['en-us'];
    pickerRender: (
        locale: (typeof i18nMap)['en-us'],
        demoFunction: any,
        onFunctionChange: any,
        otherProps: any
    ) => React.ReactNode;
}> {
    state = {
        demoFunction: {
            label: {
                label: '内置标签',
                value: 'false',
                enum: [
                    { label: '显示', value: 'true' },
                    { label: '隐藏', value: 'false' },
                ],
            },
        },
    };

    onFunctionChange = (val: unknown) => {
        this.setState({
            demoFunction: val,
        });
    };

    render() {
        const { locale, pickerRender } = this.props;
        const { demoFunction } = this.state;
        const hasLabel = demoFunction.label.value === 'true';

        const otherProps: Record<string, unknown> = {
            popupContainer: (target: HTMLElement) => target.parentNode,
        };

        if (hasLabel) {
            otherProps.label = locale.label;
        }

        return pickerRender(locale, demoFunction, this.onFunctionChange, otherProps);
    }
}

function renderDatePicker(
    locale: (typeof i18nMap)['en-us'],
    demoFunction: any,
    onFunctionChange: any,
    otherProps: DatePickerProps
) {
    const disabledDate = function (date: Dayjs, mode: string) {
        switch (mode) {
            case 'date':
                return date.valueOf() <= dayjs().valueOf();
            case 'year':
                return date.year() < dayjs().year();
            case 'month':
                return date.year() * 100 + date.month() < dayjs().year() * 100 + dayjs().month();
            default:
                return false;
        }
    };

    return (
        <Demo
            title={locale.datepicker}
            demoFunction={demoFunction}
            onFunctionChange={onFunctionChange}
            block
        >
            <DemoGroup label={locale.normal}>
                <DatePicker visible={false} {...otherProps} />
            </DemoGroup>

            <DemoGroup label={locale.expandNormal} height="340px">
                <DatePicker
                    value={startValue}
                    visible
                    popupProps={{ needAdjust: false }}
                    {...otherProps}
                />
            </DemoGroup>

            <DemoGroup label={locale.expandTime} height="370px">
                <DatePicker
                    value={startValue}
                    visible
                    showTime
                    popupProps={{ needAdjust: false }}
                    {...otherProps}
                />
            </DemoGroup>

            <DemoGroup label={locale.selected}>
                <DatePicker visible={false} value={startValue} {...otherProps} />
            </DemoGroup>

            <DemoGroup label={locale.disabled}>
                <DatePicker disabled value={startValue} {...otherProps} />
            </DemoGroup>

            <DemoGroup label={locale.disabledDate} height="300px">
                <DatePicker
                    visible
                    disabledDate={disabledDate}
                    value={startValue}
                    {...otherProps}
                />
            </DemoGroup>
            <DemoGroup label={locale.week} height="300px">
                <DatePicker.WeekPicker visible value={startValue} {...otherProps} />
            </DemoGroup>

            <DemoGroup label={locale.month} height="300px">
                <DatePicker.MonthPicker visible value={startValue} {...otherProps} />
            </DemoGroup>

            <DemoGroup label={locale.year} height="300px">
                <DatePicker.YearPicker visible value={startValue} {...otherProps} />
            </DemoGroup>

            <DemoGroup label={locale.decade} height="300px">
                <DatePicker.QuarterPicker visible value={startValue} {...otherProps} />
            </DemoGroup>
        </Demo>
    );
}

function renderRangePicker(
    locale: (typeof i18nMap)['en-us'],
    demoFunction: any,
    onFunctionChange: any,
    otherProps: RangePickerProps
) {
    const disabledDate = function (date: Dayjs, mode: string) {
        switch (mode) {
            case 'date':
                return date.valueOf() <= dayjs().valueOf();
            case 'year':
                return date.year() < dayjs().year();
            case 'month':
                return date.year() * 100 + date.month() < dayjs().year() * 100 + dayjs().month();
            default:
                return false;
        }
    };
    return (
        <Demo
            title={locale.rangepicker}
            demoFunction={demoFunction}
            onFunctionChange={onFunctionChange}
        >
            <DemoGroup label={locale.normal}>
                <RangePicker {...otherProps} />
            </DemoGroup>

            <DemoGroup label={locale.expandNormal} height="370px">
                <RangePicker
                    visible
                    value={[startValue, endValue]}
                    popupProps={{ needAdjust: false }}
                    {...otherProps}
                />
            </DemoGroup>

            <DemoGroup label={locale.expandTime} height="370px">
                <RangePicker
                    visible
                    showTime
                    value={[startValue, endValue]}
                    popupProps={{ needAdjust: false }}
                    {...otherProps}
                />
            </DemoGroup>

            <DemoGroup label={locale.selected}>
                <RangePicker value={[startValue, endValue]} visible={false} {...otherProps} />
            </DemoGroup>

            <DemoGroup label={locale.disabled} height="370px">
                <RangePicker
                    visible
                    disabledDate={disabledDate}
                    value={[startValue, endValue]}
                    {...otherProps}
                />
            </DemoGroup>

            <DemoGroup label={locale.week} height="370px">
                <RangePicker visible value={[startValue, endValue]} mode="week" {...otherProps} />
            </DemoGroup>

            <DemoGroup label={locale.month} height="300px">
                <RangePicker visible value={[startValue, endValue]} mode="month" {...otherProps} />
            </DemoGroup>

            <DemoGroup label={locale.year} height="300px">
                <RangePicker visible value={[startValue, endValue]} mode="year" {...otherProps} />
            </DemoGroup>

            <DemoGroup label={locale.decade} height="300px">
                <RangePicker
                    visible
                    value={[startValue, endValue]}
                    mode="quarter"
                    {...otherProps}
                />
            </DemoGroup>
        </Demo>
    );
}

function render(i18n: (typeof i18nMap)['en-us'], lang: string) {
    ReactDOM.render(
        <ConfigProvider locale={lang === 'en-us' ? enUS : zhCN}>
            <div className="demo-container">
                <FunctionDemo locale={i18n} pickerRender={renderDatePicker} />
                <FunctionDemo locale={i18n} pickerRender={renderRangePicker} />
            </div>
        </ConfigProvider>,
        document.getElementById('container')
    );
}

window.renderDemo = function (lang = 'en-us') {
    dayjs.locale(lang);
    startValue = dayjs('2017-11-15 12:00:00', 'YYYY-MM-DD HH:mm:ss', true);
    endValue = dayjs('2017-12-15 12:00:00', 'YYYY-MM-DD HH:mm:ss', true);
    render(i18nMap[lang], lang);
};

renderDemo();

initDemo('date-picker2');
