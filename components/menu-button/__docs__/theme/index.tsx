import * as React from 'react';
import * as ReactDOM from 'react-dom';
import MenuButton from '../../index';
import { Demo, DemoGroup, DemoHead, initDemo } from '../../../demo-helper';
import ConfigProvider from '../../../config-provider';
import '../../../demo-helper/style';
import '../../style';

/* eslint-disable */
const i18nMap = {
    'zh-cn': {
        menuButton: '菜单按钮',
        textMenuButton: '文本菜单按钮',
        ghostMenuButton: '幽灵菜单按钮',
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
        menuButton: 'Menu Button',
        textMenuButton: 'Text Menu Button',
        ghostMenuButton: 'Ghost Menu Button',
        normal: 'Normal',
        expand: 'Expanded',
        disable: 'Disabled',
        large: 'L',
        medium: 'M',
        small: 'S',
        editDocument: 'Edit Document',
        undo: 'Undo',
        redo: 'Redo',
        cut: 'Cut',
        copy: 'Copy',
        paste: 'Paste',
    },
};

function renderButton(type: string, locale: any, props: any = {}) {
    const menu = ['undo', 'redo', 'cut', 'copy', 'paste'].map(item => (
        <MenuButton.Item key={item}>{locale[item]}</MenuButton.Item>
    ));
    const cols = [locale.large, locale.medium, locale.small];
    const newLabel = (
        <div>
            {locale.editDocument}
            {/* --------- this is for config platform ----------- */}
            <div style={{ display: 'none' }}>
                <div className="next-menu-btn-symbol-unfold" />
            </div>
            {/* --------- this is for config platform ----------- */}
        </div>
    );

    const commonProps = {
        ...props,
        type: type.toLowerCase(),
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
                <MenuButton visible={false} size="large" {...commonProps}>
                    {menu}
                </MenuButton>
                <MenuButton visible={false} size="medium" {...commonProps}>
                    {menu}
                </MenuButton>
                <MenuButton visible={false} size="small" {...commonProps}>
                    {menu}
                </MenuButton>
            </DemoGroup>
            <DemoGroup label={locale.expand} height="260px">
                <MenuButton
                    visible={true}
                    size="large"
                    popupProps={{ needAdjust: false }}
                    {...commonProps}
                >
                    {menu}
                </MenuButton>
                <MenuButton
                    visible={true}
                    size="medium"
                    popupProps={{ needAdjust: false }}
                    {...commonProps}
                >
                    {menu}
                </MenuButton>
                <MenuButton
                    visible={true}
                    size="small"
                    popupProps={{ needAdjust: false }}
                    {...commonProps}
                >
                    {menu}
                </MenuButton>
            </DemoGroup>
            <DemoGroup label={locale.disable}>
                <MenuButton disabled size="large" {...commonProps}>
                    {menu}
                </MenuButton>
                <MenuButton disabled size="medium" {...commonProps}>
                    {menu}
                </MenuButton>
                <MenuButton disabled size="small" {...commonProps}>
                    {menu}
                </MenuButton>
            </DemoGroup>
        </Demo>
    );
}

function render(locale: any, lang: string) {
    return ReactDOM.render(
        <ConfigProvider>
            <div className="demo-container">
                <Demo title={locale.menuButton}>
                    {renderButton('Normal', locale)}
                    {renderButton('Primary', locale)}
                    {renderButton('Secondary', locale)}
                </Demo>
                <Demo title={locale.textMenuButton}>
                    {renderButton('Normal', locale, { text: true })}
                    {renderButton('Primary', locale, { text: true })}
                </Demo>
                <Demo title={locale.ghostMenuButton}>
                    {renderButton('Normal', locale, { ghost: 'light' })}
                    {renderButton('Normal', locale, { ghost: 'dark' })}
                </Demo>
            </div>
        </ConfigProvider>,
        document.getElementById('container')
    );
}

window.renderDemo = function (lang = 'en-us') {
    render(i18nMap[lang], lang);
};

renderDemo();

initDemo('menu-button');
