import React from 'react';
import moment from 'moment';
import { Demo, DemoHead, DemoGroup, initDemo } from '../../../src/demo-helper';
import TimePicker from '../../../src/time-picker';
import ConfigProvider from '../../../src/config-provider';
import zhCN from '../../../src/locale/zh-cn';
import enUS from '../../../src/locale/en-us';
import '../../../src/time-picker/style.js';
import '../../../src/demo-helper/style.js';
import TimePanel from '../../../src/time-picker/panel';

const timeValue = moment().hour(6).minute(6).second(6);

const i18nMap = {
    'zh-cn': {
        title: '时间选择',
        label: '标签',
        normal: '普通',
        expand: '展开',
        selected: '选中',
        disabled: '禁用',
        panel: '面板',
    },
    'en-us': {
        title: 'TimePicker',
        label: 'Label',
        normal: 'Normal',
        expand: 'Expanded',
        selected: 'Selected',
        disabled: 'Disabled',
        panel: 'Panel',
    }
};

function disabledItems(index) {
    if (index > 7 & index < 10) {
        return true;
    }
}

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
        },
    }

    onFunctionChange = (val) => {
        this.setState({
            demoFunction: val,
        });
    }

    render() {
        const { title, locale } = this.props;
        const { demoFunction } = this.state;
        const hasLabel = demoFunction.label.value === 'true';

        const disabledProps = {
            disabledHours: disabledItems,
            disabledMinutes: disabledItems,
            disabledSeconds: disabledItems,
        };

        const otherProps = {
            hasClear: true,
            popupContainer: (node) => node,
        };

        if (hasLabel) {
            otherProps.label = locale.label;
        }

        return (<Demo title={title} demoFunction={demoFunction} onFunctionChange={this.onFunctionChange} block>
            <DemoHead cols={['L', 'M', 'S']} />
            <DemoGroup label={locale.normal}>
                <TimePicker visible={false} size="large" {...otherProps} />
                <TimePicker visible={false} {...otherProps} />
                <TimePicker visible={false} size="small" {...otherProps} />
            </DemoGroup>

            <DemoGroup label={locale.expand} height="300px">
                <TimePicker value={timeValue} visible {...disabledProps} size="large" {...otherProps} />
                <TimePicker value={timeValue} visible {...disabledProps} {...otherProps} />
                <TimePicker value={timeValue} visible {...disabledProps} size="small" {...otherProps} />
            </DemoGroup>

            <DemoGroup label={locale.label}>
                <TimePanel value={timeValue} {...disabledProps} />
                <TimePanel value={timeValue} {...disabledProps} />
                <TimePanel value={timeValue} {...disabledProps} />
            </DemoGroup>

            <DemoGroup label={locale.selected}>
                <TimePicker visible={false} value={timeValue} size="large" {...otherProps} />
                <TimePicker visible={false} value={timeValue} {...otherProps} />
                <TimePicker visible={false} value={timeValue} size="small" {...otherProps} />
            </DemoGroup>

            <DemoGroup label={locale.disabled}>
                <TimePicker value={timeValue} disabled size="large" {...otherProps} />
                <TimePicker value={timeValue} disabled {...otherProps} />
                <TimePicker value={timeValue} disabled size="small" {...otherProps} />
            </DemoGroup>
        </Demo>);
    }
}

/* eslint-disable */
function render(i18n, lang) {
    return ReactDOM.render(<ConfigProvider locale={lang === 'en-us' ? enUS : zhCN}>
        <div className="demo-container">
            <FunctionDemo title={i18n.title} locale={i18n} />
        </div>
</ConfigProvider>, document.getElementById('container'));
}

window.renderDemo = function(lang = 'en-us') {
    moment.locale(lang);
    render(i18nMap[lang], lang);
};

renderDemo();

initDemo('time-picker');
