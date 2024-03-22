import * as React from 'react';
import * as ReactDOM from 'react-dom';
import SplitButton, { type SplitButtonProps } from '../../index';
import { Demo, DemoGroup, DemoHead, initDemo } from '../../../demo-helper';
import ConfigProvider from '../../../config-provider';
import '../../../demo-helper/style';
import '../../style';

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

function renderButton(type: string, locale: Record<string, string>, props?: SplitButtonProps) {
    const menu = ['undo', 'redo', 'cut', 'copy', 'paste'].map(item => (
        <SplitButton.Item key={item}>{locale[item]}</SplitButton.Item>
    ));
    const cols = [locale.large, locale.medium, locale.small];
    const newLabel = (
        <div>
            {locale.editDocument}
            {/* --------- this is for config platform ----------- */}
            <div style={{ display: 'none' }}>
                <div className="next-split-btn-symbol-unfold" />
            </div>
            {/* --------- this is for config platform ----------- */}
        </div>
    );

    const commonProps = {
        ...props,
        type: type.toLowerCase() as 'normal' | 'primary' | 'secondary',
        label: newLabel,
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

    return (
        <Demo title={type} block style={style}>
            <DemoHead cols={cols} />
            <DemoGroup label={locale.normal}>
                <SplitButton visible={false} size="large" {...commonProps}>
                    {menu}
                </SplitButton>
                <SplitButton visible={false} size="medium" {...commonProps}>
                    {menu}
                </SplitButton>
                <SplitButton visible={false} size="small" {...commonProps}>
                    {menu}
                </SplitButton>
            </DemoGroup>
            <DemoGroup label={locale.expand} height="260px">
                <SplitButton
                    visible
                    size="large"
                    popupProps={{ needAdjust: false }}
                    {...commonProps}
                >
                    {menu}
                </SplitButton>
                <SplitButton
                    visible
                    size="medium"
                    popupProps={{ needAdjust: false }}
                    {...commonProps}
                >
                    {menu}
                </SplitButton>
                <SplitButton
                    visible
                    size="small"
                    popupProps={{ needAdjust: false }}
                    {...commonProps}
                >
                    {menu}
                </SplitButton>
            </DemoGroup>
            <DemoGroup label={locale.disable}>
                <SplitButton disabled size="large" {...commonProps}>
                    {menu}
                </SplitButton>
                <SplitButton disabled size="medium" {...commonProps}>
                    {menu}
                </SplitButton>
                <SplitButton disabled size="small" {...commonProps}>
                    {menu}
                </SplitButton>
            </DemoGroup>
        </Demo>
    );
}

function render(locale: Record<string, string>) {
    ReactDOM.render(
        <ConfigProvider>
            <div className="demo-container">
                <Demo title={locale.splitButton}>
                    {renderButton('Normal', locale)}
                    {renderButton('Primary', locale)}
                    {renderButton('Secondary', locale)}
                </Demo>
                <Demo title={locale.ghostSplitButton}>
                    {renderButton('Normal', locale, { ghost: 'light' })}
                    {renderButton('Normal', locale, { ghost: 'dark' })}
                </Demo>
            </div>
        </ConfigProvider>,
        document.getElementById('container')
    );
}

window.renderDemo = function (lang = 'en-us') {
    render(i18nMap[lang]);
};

renderDemo();

initDemo('split-button');
