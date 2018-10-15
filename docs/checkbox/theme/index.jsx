import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import ConfigProvider from '../../../src/config-provider';
import zhCN from '../../../src/locale/zh-cn';
import enUS from '../../../src/locale/en-us';
import '../../../src/demo-helper/style.js';
import {Demo, DemoGroup, initDemo} from '../../../src/demo-helper';
import '../../../src/checkbox/style.js';
import Checkbox from '../../../src/checkbox';
import Field from '../../../src/field';

// import demo helper

// import component

const styles = {};

const i18nMap = {
    'zh-cn': {
        withLabel: '文本',
        label: '雪梨',
        show: '显示',
        hide: '隐藏'
    },
    'en-us': {
        withLabel: 'Label',
        label: 'pear',
        show: 'show',
        hide: 'hide'
    }
};
/* eslint-disable */
class FunctionDemo extends React.Component {
    static propTypes = {
        i18n: PropTypes.object,
    }
    constructor(props) {
        super(props);
        const { i18n } = props;
        this.setField(i18n);
    }
    setField(i18n) {
        this.field = new Field(this, {
            values: {
                demo: {
                    withLabel: {
                        label: '标签',
                        name: 'withLabel',
                        value: 'show',
                        enum: [{label: '显示', value: 'show'}, {label: '隐藏', value: 'hide'}]
                    }
                }
            }
        });
    }
    render() {
        const {init, getValue} = this.field;
        const { i18n } = this.props;
        const labelProp = (getValue('demo').withLabel.value === 'show') ? i18n.label : null;
        return (<div className="demo-container">
            <Demo title="Checkbox"  {...init('demo', {
                valueName: 'demoFunction',
                trigger: 'onFunctionChange'
            })}>
                <Demo title="Basic">
                <DemoGroup label="normal">
                    <Checkbox checked={false} style={styles}>{labelProp}</Checkbox>
                </DemoGroup>
                <DemoGroup label="hover">
                    <Checkbox checked={false} className="hovered" style={styles} >{labelProp}</Checkbox>
                </DemoGroup>
                <DemoGroup label="indeterminate">
                    <Checkbox defaultIndeterminate style={styles} >{labelProp}</Checkbox>
                </DemoGroup>
                <DemoGroup label="indeterminate hover">
                    <Checkbox defaultIndeterminate className="hovered" style={styles} >{labelProp}</Checkbox>
                </DemoGroup>
                <DemoGroup label="checked">
                    <Checkbox checked style={styles} >{labelProp}</Checkbox>
                </DemoGroup>
                <DemoGroup label="checked hover">
                    <Checkbox checked className="hovered" style={styles} >{labelProp}</Checkbox>
                </DemoGroup>
                <DemoGroup label="disabled normal">
                    <Checkbox disabled style={styles} >{labelProp}</Checkbox>
                </DemoGroup>
                <DemoGroup label="disabled checked">
                    <Checkbox checked disabled style={styles} >{labelProp}</Checkbox>
                </DemoGroup>
                <DemoGroup label="disabled indeterminate">
                    <Checkbox defaultIndeterminate disabled style={styles} >{labelProp}</Checkbox>
                </DemoGroup>
                </Demo>
            </Demo>
        </div>);
    }
}

window.renderDemo = function(lang = 'en-us') {
    const i18n = i18nMap[lang];
    ReactDOM.render((
    <ConfigProvider locale={lang === 'en-us' ? enUS : zhCN}>
        <FunctionDemo i18n={i18n} />
    </ConfigProvider>
    ), document.getElementById('container'));
};

window.renderDemo();
initDemo('checkbox');
