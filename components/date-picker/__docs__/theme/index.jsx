import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import { Demo, DemoGroup, initDemo } from '../../../demo-helper';
import DatePicker from '../../index';
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
    },
    'en-us': {
        datepicker: 'Date Picker',
        rangepicker: 'Range Picker',
        label: 'Label',
        normal: 'Normal',
        expandNormal: 'Date Expanded',
        expandTime: 'Datetime Expanded',
        selected: 'Selected',
        disabled: 'Disabled',
    }
};

let startValue;
let endValue;

/* eslint-disable react/prop-types */
class FunctionDemo extends React.Component {
    state = {
        demoFunction: {
            label: {
                label: '内置标签',
                value: 'false',
                enum: [
                    { label: '显示', value: 'true' },
                    { label: '隐藏', value: 'false' }
                ],
            }
        }
    }

    onFunctionChange = (val) => {
        this.setState({
            demoFunction: val,
        });
    }

    render() {
        const { locale, pickerRender } = this.props;
        const { demoFunction } = this.state;
        const hasLabel = demoFunction.label.value === 'true';

        const otherProps = {
            popupContainer: target => target.parentNode,
        };

        if (hasLabel) {
            otherProps.label = locale.label;
        }

        return pickerRender(locale, demoFunction, this.onFunctionChange, otherProps);
    }
}

function renderDatePicker(locale, demoFunction, onFunctionChange, otherProps) {
    return (<Demo title={locale.datepicker} demoFunction={demoFunction} onFunctionChange={onFunctionChange} block>
        <DemoGroup label={locale.normal}>
            <DatePicker visible={false} {...otherProps} />
        </DemoGroup>

        <DemoGroup label={locale.expandNormal} height="340px">
            <DatePicker value={startValue} visible popupProps={{ needAdjust: false }} {...otherProps} />
        </DemoGroup>

        <DemoGroup label={locale.expandTime} height="370px">
            <DatePicker value={startValue} visible showTime popupProps={{ needAdjust: false }} {...otherProps} />
        </DemoGroup>

        <DemoGroup label={locale.selected}>
            <DatePicker visible={false} value={startValue} {...otherProps} />
        </DemoGroup>

        <DemoGroup label={locale.disabled}>
            <DatePicker disabled value={startValue} {...otherProps} />
        </DemoGroup>
    </Demo>);
}

function renderRangePicker(locale, demoFunction, onFunctionChange, otherProps) {
    return (<Demo title={locale.rangepicker} demoFunction={demoFunction} onFunctionChange={onFunctionChange}>
        <DemoGroup label={locale.normal}>
            <RangePicker {...otherProps} />
        </DemoGroup>

        <DemoGroup label={locale.expandNormal} height="370px">
            <RangePicker visible value={[startValue, endValue]} popupProps={{ needAdjust: false }} {...otherProps} />
        </DemoGroup>

        <DemoGroup label={locale.expandTime} height="370px">
            <RangePicker visible showTime value={[startValue, endValue]} popupProps={{ needAdjust: false }} {...otherProps} />
        </DemoGroup>

        <DemoGroup label={locale.selected}>
            <RangePicker value={[startValue, endValue]} visible={false} {...otherProps} />
        </DemoGroup>

        <DemoGroup label={locale.disabled}>
            <RangePicker disabled value={[startValue, endValue]} {...otherProps} />
        </DemoGroup>
    </Demo>);
}

/* eslint-disable */
function render(i18n, lang) {
    return ReactDOM.render(<ConfigProvider locale={lang === 'en-us' ? enUS : zhCN}>
    <div className="demo-container">
        <FunctionDemo locale={i18n} pickerRender={renderDatePicker} />
        <FunctionDemo locale={i18n} pickerRender={renderRangePicker} />
    </div>
</ConfigProvider>, document.getElementById('container'));
}

window.renderDemo = function(lang = 'en-us') {
    moment.locale(lang);
    startValue = moment('2017-11-15 12:00:00', 'YYYY-MM-DD HH:mm:ss', true);
    endValue = moment('2017-12-15 12:00:00', 'YYYY-MM-DD HH:mm:ss', true);
    render(i18nMap[lang], lang);
};

renderDemo();

initDemo('date-picker');
