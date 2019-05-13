import React from 'react';
import ReactDOM from 'react-dom';
import { Demo, DemoGroup, DemoHead, initDemo } from '../../../src/demo-helper';
import ConfigProvider from '../../../src/config-provider';
import Tab from '../../../src/tab';
import Icon from '../../../src/icon';
import zhCN from '../../../src/locale/zh-cn';
import enUS from '../../../src/locale/en-us';
import '../../../src/tab/style.js';
import '../../../src/demo-helper/style.js';

const i18nMap = {
    'zh-cn': {
        bar: '条状选项卡',
        wrapped: '包裹状选项卡',
        text: '文本选项卡',
        capsule: '胶囊选项卡',
        normal: '普通',
        slideExcess: '超出滑动',
        dropdownExcess: '超出下拉',

        showDisabled: '展示禁用',
        showCloseable: '展示关闭',
        showIcon: '展示图标',
        tabPosition: '选项卡位置',

        one: '选项卡一',
        two: '选项卡二',
        three: '选项卡三',
        four: '选项卡四',
        five: '选项卡五',
        six: '选项卡六',
        seven: '选项卡七',
        eight: '选项卡八',
        nine: '选项卡九',
        ten: '选项卡十',
        evelen: '选项卡十一',
        twelve: '选项卡十二',
    },
    'en-us': {
        bar: 'Bar',
        wrapped: 'Wrapped',
        text: 'Text',
        capsule: 'Capsule',
        normal: 'Normal',
        slideExcess: 'Slide For Excess',
        dropdownExcess: 'Dropdown For Excess',
        showDisabled: 'Show Disable',
        showIcon: 'Show Icon',
        tabPosition: 'Tab Position',

        one: 'Option 1',
        two: 'Option 2',
        three: 'Option 3',
        four: 'Option 4',
        five: 'Option 5',
        six: 'Option 6',
        seven: 'Option 7',
        eight: 'Option 8',
        nine: 'Option 9',
        ten: 'Option 10',
        evelen: 'Option 11',
        twelve: 'Option 12',
    }
};

const tab4 = [
    { tab: 'one', key: 1 },
    { tab: 'two', key: 2, disabled: true },
    { tab: 'three', key: 3 },
];

const tab12 = [
    { tab: 'one', key: 1 },
    { tab: 'two', key: 2, disabled: true },
    { tab: 'three', key: 3 },
    { tab: 'four', key: 4 },
    { tab: 'five', key: 5 },
    { tab: 'six', key: 6 },
    { tab: 'seven', key: 7 },
    { tab: 'eight', key: 8 },
    { tab: 'nine', key: 9 },
    { tab: 'ten', key: 10 },
    { tab: 'evelen', key: 11 },
    { tab: 'twelve', key: 12 },
];

/* eslint-disable */
class FunctionDemo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            demoFunction: {
                showIcon: {
                    label: '图标',
                    value: 'false',
                    enum: [
                        { label: '显示', value: 'true' },
                        { label: '隐藏', value: 'false' }
                    ]
                },
                showDisabled: {
                    label: '禁用状态',
                    value: 'false',
                    enum: [
                        { label: '显示', value: 'true' },
                        { label: '隐藏', value: 'false' }
                    ]
                },
                showCloseable: {
                    label: '关闭按钮',
                    value: 'false',
                    enum: [
                        { label: '显示', value: 'true' },
                        { label: '隐藏', value: 'false' }
                    ]
                },
                showPosition: {
                    label: 'Tab 位置',
                    value: 'top',
                    enum: [
                        { label: '上', value: 'top' },
                        { label: '左', value: 'left' },
                        { label: '右', value: 'right' }
                    ]
                }
            },
        };
    }

    onFunctionChange = (ret) => {
        this.setState({
            demoFunction: ret,
        });
    }

    renderTabItemTitle = (text, showIcon = false) => {
        if (!showIcon) {
            return text;
        }
        return [<Icon key="icon" type="smile" />, ' ', text];
    }

    render() {
        const { title, locale, tabRender, showTabPosition } = this.props;
        let { demoFunction } = this.state;

        const showDisable = demoFunction.showDisabled.value === 'true';
        const showIcon = demoFunction.showIcon.value === 'true';
        const closeable = demoFunction.showCloseable.value === 'true';

        const tab4List = tab4.map(item => <Tab.Item title={this.renderTabItemTitle(locale[item.tab], showIcon)} key={item.key} disabled={showDisable && item.disabled} closeable={closeable} />);
        const tab12List = tab12.map(item => <Tab.Item title={this.renderTabItemTitle(locale[item.tab], showIcon)} key={item.key} disabled={showDisable && item.disabled} closeable={closeable} />);
        const props = {
            children4: tab4List,
            children12: tab12List,
            tabPosition: showTabPosition && demoFunction.showPosition.value,
        };

        if (!showTabPosition) {
            delete demoFunction.showPosition;
        }
        return tabRender(title, locale, props, demoFunction, this.onFunctionChange);

        // return (<Demo title={title} demoFunction={demoFunction} onFunctionChange={this.onFunctionChange}>
        //     {tabRender(locale, props)}
        // </Demo>);
    }
}

function renderSimpleTab(title, locale, props, demoFunction, onFunctionChange) {
    const { children4, children12 } = props;
    return (<Demo title={title} block demoFunction={demoFunction} onFunctionChange={onFunctionChange}>
        <DemoHead cols={['M', 'S']} />
        <DemoGroup label={locale.normal}>
            <Tab size="medium">{children4}</Tab>
            <Tab size="small">{children4}</Tab>
        </DemoGroup>
        <DemoGroup label={locale.slideExcess}>
            <Tab size="medium">{children12}</Tab>
            <Tab size="small">{children12}</Tab>
        </DemoGroup>
        <DemoGroup label={locale.dropdownExcess}>
            <Tab size="medium" excessMode="dropdown">{children12}</Tab>
            <Tab size="small" excessMode="dropdown">{children12}</Tab>
        </DemoGroup>
    </Demo>);
}

function renderWrappedTab(title, locale, props, demoFunction, onFunctionChange) {
    const { children4, children12, tabPosition } = props;
    return (<Demo title={title} block demoFunction={demoFunction} onFunctionChange={onFunctionChange}>
        <DemoHead cols={['M', 'S']} />
        <DemoGroup label={locale.normal}>
            <Tab shape="wrapped" contentStyle={tabPosition === 'left' || tabPosition === 'right' ? { "minHeight": 150 } : null} tabPosition={tabPosition} size="medium">{children4}</Tab>
            <Tab shape="wrapped" contentStyle={tabPosition === 'left' || tabPosition === 'right' ? { "minHeight": 150 } : null}  tabPosition={tabPosition} size="small">{children4}</Tab>
        </DemoGroup>
        <DemoGroup label={locale.slideExcess}>
            <Tab shape="wrapped" contentStyle={tabPosition === 'left' || tabPosition === 'right' ? { "minHeight": 150 } : null}  tabPosition={tabPosition} size="medium">{children12}</Tab>
            <Tab shape="wrapped" contentStyle={tabPosition === 'left' || tabPosition === 'right' ? { "minHeight": 150 } : null}  tabPosition={tabPosition} size="small">{children12}</Tab>
        </DemoGroup>
        <DemoGroup label={locale.dropdownExcess}>
            <Tab shape="wrapped" contentStyle={tabPosition === 'left' || tabPosition === 'right' ? { "minHeight": 150 } : null}  tabPosition={tabPosition} size="medium" excessMode="dropdown">{children12}</Tab>
            <Tab shape="wrapped" contentStyle={tabPosition === 'left' || tabPosition === 'right' ? { "minHeight": 150 } : null}  tabPosition={tabPosition} size="small" excessMode="dropdown">{children12}</Tab>
        </DemoGroup>
    </Demo>);
}

function renderTextTab(title, locale, props, demoFunction, onFunctionChange) {
    const { children4, children12, tabPosition } = props;
    return (<Demo Demo title={title} block demoFunction={demoFunction} onFunctionChange={onFunctionChange}>
        <DemoHead cols={['M', 'S']} />
        <DemoGroup label={locale.normal}>
            <Tab shape="text" size="medium">{children4}</Tab>
            <Tab shape="text" size="small">{children4}</Tab>
        </DemoGroup>
        <DemoGroup label={locale.slideExcess}>
            <Tab shape="text" size="medium">{children12}</Tab>
            <Tab shape="text" size="small">{children12}</Tab>
        </DemoGroup>
        <DemoGroup label={locale.dropdownExcess}>
            <Tab shape="text" size="medium" excessMode="dropdown">{children12}</Tab>
            <Tab shape="text" size="small" excessMode="dropdown">{children12}</Tab>
        </DemoGroup>
    </Demo>);
}

function renderCapsuleTab(title, locale, props, demoFunction, onFunctionChange) {
    const { children4, children12, tabPosition } = props;
    return (<Demo Demo title={title} block demoFunction={demoFunction} onFunctionChange={onFunctionChange}>
        <DemoHead cols={['M', 'S']} />
        <DemoGroup label={locale.normal}>
            <Tab shape="capsule" size="medium">{children4}</Tab>
            <Tab shape="capsule" size="small">{children4}</Tab>
        </DemoGroup>
    </Demo>);
}

function render(i18n, lang) {
    const tab4List = tab4.map(item => <Tab.Item title={i18n[item.tab]} key={item.key} disabled={item.disabled} />);
    const tab12List = tab12.map(item => <Tab.Item title={i18n[item.tab]} key={item.key} />);

    ReactDOM.render((<ConfigProvider locale={lang === 'en-us' ? enUS : zhCN}>
        <div className="demo-container">
            <FunctionDemo title={i18n.bar} locale={i18n} tabRender={renderSimpleTab} />
            <FunctionDemo title={i18n.wrapped} locale={i18n} tabRender={renderWrappedTab} showTabPosition />
            <FunctionDemo title={i18n.text} locale={i18n} tabRender={renderTextTab} />
            <FunctionDemo title={i18n.capsule} locale={i18n} tabRender={renderCapsuleTab} />
        </div>
    </ConfigProvider>), document.getElementById('container'));
}

window.renderDemo = function (lang = 'en-us') {
    render(i18nMap[lang], lang);
};

window.renderDemo('en-us');

initDemo('tab');
