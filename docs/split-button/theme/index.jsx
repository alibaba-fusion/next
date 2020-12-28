import React from 'react';
import SplitButton from '../../../src/split-button';
import { Demo, DemoGroup, DemoHead, initDemo } from '../../../src/demo-helper';
import ConfigProvider from '../../../src/config-provider';
import '../../../src/demo-helper/style.js';
import '../../../src/split-button/style.js';

/* eslint-disable */
const i18nMap = {
    'zh-cn': {
        splitButton: '分隔下拉按钮',
        ghostSplitButton: '幽灵分隔下拉按钮',
        normal: '普通',
        expand: '展开',
        disable: '禁用',
        large: '大',
        medium: '中',
        small: '小',
        editDocument: '编辑文档',
        undo: '撤销',
        redo: '重做',
        cut: '剪切',
        copy: '复制',
        paste: '粘贴',
    },
    'en-us': {
        splitButton: 'SplitButton',
        ghostSplitButton: 'Ghost SplitButton',
        normal: 'Normal',
        expand: 'Expanded',
        disable: 'Disabled',
        large: 'Large',
        medium: 'Medium',
        small: 'Small',
        editDocument: 'Edit Document',
        undo: 'Undo',
        redo: 'Redo',
        cut: 'Cut',
        copy: 'Copy',
        paste: 'Paste',
    },
};

function renderButton(type, locale, model, props) {
    const menu = ['undo', 'redo', 'cut', 'copy', 'paste'].map(item => <SplitButton.Item key={item}>{locale[item]}</SplitButton.Item>);
    const cols = [locale.large, locale.medium, locale.small];
    const newLabel = <div>
        {locale.editDocument}
        {/* --------- this is for config platform ----------- */}
        <div style={{display: "none"}}>
            <div className='next-split-btn-symbol-unfold'/>
        </div>
        {/* --------- this is for config platform ----------- */}
    </div>;

    const commonProps = {
        ...props,
        type: type.toLowerCase(),
        model,
        label: newLabel
    };

    let style;

    if (props) {
        switch (props.ghost) {
            case 'light': {
                style = {
                    backgroundColor: '#ebecf0',
                };
                break;
            }
            case 'dark': {
                style = {
                    backgroundColor: '#333',
                };
                break;
            }
        }
    }
    if(commonProps.type === 'inverse')
        style = {
            backgroundColor: '#333',
        };

    return (<Demo title={type} block style={style}>
        <DemoHead cols={cols} />
        <DemoGroup label={locale.normal}>
            <SplitButton visible={false} size="large" {...commonProps}>{menu}</SplitButton>
            <SplitButton visible={false} size="medium" {...commonProps}>{menu}</SplitButton>
            <SplitButton visible={false} size="small" {...commonProps}>{menu}</SplitButton>
        </DemoGroup>
        <DemoGroup label={locale.expand} height="260px">
            <SplitButton visible size="large" popupProps={{ needAdjust: false }} {...commonProps}>{menu}</SplitButton>
            <SplitButton visible size="medium" popupProps={{ needAdjust: false }} {...commonProps}>{menu}</SplitButton>
            <SplitButton visible size="small" popupProps={{ needAdjust: false }} {...commonProps}>{menu}</SplitButton>
        </DemoGroup>
        <DemoGroup label={locale.disable}>
            <SplitButton disabled size="large" {...commonProps}>{menu}</SplitButton>
            <SplitButton disabled size="medium" {...commonProps}>{menu}</SplitButton>
            <SplitButton disabled size="small" {...commonProps}>{menu}</SplitButton>
        </DemoGroup>
    </Demo>)
}

function render(locale, lang) {


    return ReactDOM.render((<ConfigProvider>
        <div className="demo-container">
            <Demo title={locale.splitButton}>
                {renderButton('Normal', locale)}
                {renderButton('Primary', locale)}
                {renderButton('Inverse', locale)}
            </Demo>
            <Demo title={locale.ghostSplitButton}>
                {renderButton('Normal', locale, { ghost: 'light' })}
                {renderButton('Normal', locale, { ghost: 'dark' })}
            </Demo>
        </div></ConfigProvider>
    ), document.getElementById('container'));
}

window.renderDemo = function(lang = 'en-us') {
    render(i18nMap[lang], lang);
};

renderDemo();

initDemo('split-button');
