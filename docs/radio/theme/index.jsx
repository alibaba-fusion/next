import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import '../../../src/demo-helper/style.js';
import { Demo, DemoGroup, DemoHead, initDemo } from '../../../src/demo-helper';
import ConfigProvider from '../../../src/config-provider';
import zhCN from '../../../src/locale/zh-cn';
import enUS from '../../../src/locale/en-us';
import '../../../src/radio/style.js';
import Radio from '../../../src/radio';
import Field from '../../../src/field';

// import demo helper


// import component


const i18nMap = {
    'zh-cn': {
        label: '文本',
        withLabel: '带有 label',
        number: '按钮数量',
        editLabel: '编辑文本',
        dataSource: [
            {
                value: 'gcellone',
                label: '单元格一'
            }, {
                value: 'gcelltwo',
                label: '单元格二'
            }, {
                value: 'gcellthree',
                label: '单元格三'
            }, {
                value: 'gcellfour',
                label: '单元格四'
            }
        ]
    },
    'en-us': {
        label: 'label',
        withLabel: 'with label',
        number: 'number of buttons',
        editLabel: 'edit label',
        dataSource: [
            {
                value: 'gcellone',
                label: 'Cell One'
            }, {
                value: 'gcelltwo',
                label: 'Cell Two'
            }, {
                value: 'gcellthree',
                label: 'Cell Three'
            }, {
                value: 'gcellfour',
                label: 'Cell Four'
            }
        ]
    }
};
const RadioGroup = Radio.Group;

// default radio
class RadioDefaultDemo extends React.Component {
    static propTypes = {
        i18n: PropTypes.object,
    }
    constructor(props) {
        super(props);
        this.field = new Field(this, {
            values: {
                demo: {
                    radiolabel: {
                        label: '标签',
                        name: 'radiolabel',
                        value: 'true',
                        enum: [{label: '显示', value: 'true'}, {label: '隐藏', value: 'false'}]
                    }
                }
            }
        });
    }
    render() {
        const {init, getValue} = this.field;
        const { i18n } = this.props;
        const label = (getValue('demo').radiolabel.value === 'true') ? i18n.label : null;
        return (
            <Demo title="Radio Default" {...init('demo', {
                valueName: 'demoFunction',
                trigger: 'onFunctionChange'
            })}>
                <Demo title="Basic">
                    <DemoGroup label="normal">
                        <Radio checked={false}>{label}</Radio>
                    </DemoGroup>
                    <DemoGroup label="hover">
                        <Radio checked={false} className="hovered" >{label}</Radio>
                    </DemoGroup>
                    <DemoGroup label="selected">
                        <Radio checked >{label}</Radio>
                    </DemoGroup>
                    <DemoGroup label="selected-hover">
                        <Radio checked className="hovered" >{label}</Radio>
                    </DemoGroup>
                    <DemoGroup label="disabled-normal">
                        <Radio disabled >{label}</Radio>
                    </DemoGroup>
                    <DemoGroup label="disabled-selected">
                        <Radio disabled checked >{label}</Radio>
                    </DemoGroup>
                </Demo>
            </Demo>
        );
    }
}

// button radio
/* eslint-disable */
class RadioButtonDemo extends React.Component {
    static propTypes = {
        i18n: PropTypes.object,
    }
    render() {
        const { i18n } = this.props;
        //const {init, getValue} = this.field;
        //const number = getValue('demo').value;
        const dataSource = i18n.dataSource.slice(0, 3);

        const disabledRadio = dataSource.map((d, i) => <Radio key={`hover${d.value}`} value={d.value} disabled={i === 1} >{d.label}</Radio>);
        const disabledSelectedRadio = dataSource.map(d => <Radio key={`hover${d.value}`} value={d.value} disabled >{d.label}</Radio>);

        return (
            <Demo title="Radio button">
                <Demo title={'Button'}>
                <DemoHead cols={['L', 'M', 'S']} />
                <DemoGroup label="normal">
                    <RadioGroup dataSource={dataSource} shape="button" size="large" value="" />
                    <RadioGroup dataSource={dataSource} shape="button" size="medium" value="" />
                    <RadioGroup dataSource={dataSource} shape="button" size="small" value="" />
                </DemoGroup>
                <DemoGroup label="selected">
                    <RadioGroup dataSource={dataSource} shape="button" size="large" value="gcellone" />
                    <RadioGroup dataSource={dataSource} shape="button" size="medium" value="gcellone" />
                    <RadioGroup dataSource={dataSource} shape="button" size="small" value="gcellone" />
                </DemoGroup>
                <DemoGroup label="disabled">
                    <RadioGroup shape="button" size="large" value="gcellone">
                        {disabledRadio}
                    </RadioGroup>
                    <RadioGroup shape="button" size="medium" value="gcellone">
                        {disabledRadio}
                    </RadioGroup>
                    <RadioGroup shape="button" size="small" value="gcellone">
                        {disabledRadio}
                    </RadioGroup>
                </DemoGroup>
                <DemoGroup label="disabled - selected">
                    <RadioGroup shape="button" size="large" value="gcellone">
                        {disabledSelectedRadio}
                    </RadioGroup>
                    <RadioGroup shape="button" size="medium" value="gcellone">
                        {disabledSelectedRadio}
                    </RadioGroup>
                    <RadioGroup shape="button" size="small" value="gcellone">
                        {disabledSelectedRadio}
                    </RadioGroup>
                </DemoGroup>
                </Demo>
            </Demo>
        );
    }
}

window.renderDemo = function(lang = 'en-us') {
    const i18n = i18nMap[lang];
    ReactDOM.render((
        <ConfigProvider locale={lang === 'en-us' ? enUS : zhCN}>
            <div className="demo-container">
                <RadioDefaultDemo i18n={i18n}/>
                <RadioButtonDemo i18n={i18n}/>
            </div>
        </ConfigProvider>
    ), document.getElementById('container'));
};

window.renderDemo();
initDemo('radio');
