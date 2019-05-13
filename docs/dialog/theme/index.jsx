import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../../../src/demo-helper/style.js';
import '../../../src/dialog/style.js';
import { Demo, DemoGroup, initDemo } from '../../../src/demo-helper';
import Dialog from '../../../src/dialog';
import { ModalInner } from '../../../src/dialog/show';

import zhCN from '../../../src/locale/zh-cn';
import enUS from '../../../src/locale/en-us';

const i18nMaps = {
    'en-us': {
        title: 'Welcome to Alibaba.com',
        content: 'Start your business here by searching a popular product',
        alert: 'Alert',
        confirm: 'Confirm',
        alertContent: 'Alert content...',
        confirmContent: 'Are you sure delete this ?'
    },

    'zh-cn': {
        title: '欢迎来到 Alibaba.com',
        content: '开启您的贸易生活从 Alibaba.com 开始',
        alert: '警告',
        confirm: '确认',
        alertContent: '警告内容...',
        confirmContent: '你确认删除这些内容吗？'
    }
};

class FunctionDemo extends Component {
    state = {
        demoFunction: {
            hasTitle: {
                label: '标题',
                value: 'true',
                enum: [{
                    label: '显示',
                    value: 'true'
                }, {
                    label: '隐藏',
                    value: 'false'
                }]
            },
            hasMask: {
                label: '遮罩',
                value: 'false',
                enum: [{
                    label: '显示',
                    value: 'true'
                }, {
                    label: '隐藏',
                    value: 'false'
                }]
            },
            footerAlign: {
                label: '按钮对齐方式',
                value: 'right',
                enum: [{
                    label: '左侧',
                    value: 'left'
                }, {
                    label: '中间',
                    value: 'center'
                }, {
                    label: '右侧',
                    value: 'right'
                }]
            },
            okPosition: {
                label: '确定按钮位置',
                value: 'left',
                enum: [{
                    label: '在左',
                    value: 'left'
                }, {
                    label: '在右',
                    value: 'right'
                }]
            }
        }
    }
    onFunctionChange = demoFunction => {
        this.setState({
            demoFunction
        });
    }

    renderMask(hasMask, content) {
        return hasMask ? (
            <div className="next-overlay-wrapper opened" style={{ position: 'relative', width: 440, height: 195 }}>
                <div className="next-overlay-backdrop" style={{ position: 'relative' }} />
                {content}
            </div>
        ) : content;
    }

    render() {
        // eslint-disable-next-line
        const { lang, i18n } = this.props;
        const locale = (lang === 'en-us' ? enUS : zhCN).Dialog;
        const hasTitle = this.state.demoFunction.hasTitle.value === 'true';
        const hasMask = this.state.demoFunction.hasMask.value === 'true';
        const footerAlign = this.state.demoFunction.footerAlign.value;
        const okIsLeft = this.state.demoFunction.okPosition.value === 'left';
        const style = hasMask ?
            { position: 'absolute', top: 20, left: 20, width: 400 } :
            { position: 'relative', top: 20, left: 20, width: 400 };
        const normalContent = (
            <Dialog.Inner
                style={style}
                title={hasTitle ? i18n.title : null}
                footerAlign={footerAlign}
                footerActions={okIsLeft ? ['ok', 'cancel'] : ['cancel', 'ok']}
                locale={locale}>
                {i18n.content}
            </Dialog.Inner>
        );

        const alertContent = (
            <Dialog.Inner
                className="next-dialog-quick"
                style={style}
                footerAlign={footerAlign}
                footerActions={okIsLeft ? ['ok', 'cancel'] : ['cancel', 'ok']}
                locale={locale}>
                <ModalInner
                    type="alert"
                    title={hasTitle ? i18n.title : null}
                    locale={locale}
                    content={i18n.content} />
            </Dialog.Inner>
        );

        const confirmContent = (
            <Dialog.Inner
                className="next-dialog-quick"
                style={style}
                footerAlign={footerAlign}
                footerActions={okIsLeft ? ['ok', 'cancel'] : ['cancel', 'ok']}
                locale={locale}>
                <ModalInner
                    type="confirm"
                    title={hasTitle ? i18n.title : null}
                    locale={locale}
                    content={i18n.content} />
            </Dialog.Inner>
        );

        return (
            <div className="demo-container">
                <Demo title="Dialog" demoFunction={this.state.demoFunction} onFunctionChange={this.onFunctionChange}>
                    <Demo title="Normal">
                        <DemoGroup label="Align">
                            {this.renderMask(hasMask, normalContent)}
                        </DemoGroup>
                    </Demo>
                    <Demo title="Quick">
                        <DemoGroup label="Alert">
                            {this.renderMask(hasMask, alertContent)}
                        </DemoGroup>
                        <DemoGroup label="Confirm">
                            {this.renderMask(hasMask, confirmContent)}
                        </DemoGroup>
                    </Demo>
                </Demo>
            </div>
        );
    }
}


const render = (lang = 'en-us') => {
    const i18n = i18nMaps[lang];
    ReactDOM.render(<FunctionDemo lang={lang} i18n={i18n} />, document.getElementById('container'));
};

window.renderDemo = render;
window.renderDemo('en-us');
initDemo('dialog');
