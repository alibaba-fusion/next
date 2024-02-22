import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../../../demo-helper/style';
import '../../style';
import { Demo, DemoGroup, initDemo } from '../../../demo-helper';
import Drawer from '../../index';

import zhCN from '../../../locale/zh-cn';
import enUS from '../../../locale/en-us';

const i18nMaps = {
    'en-us': {
        title: 'Title Here',
        content: ':) Start your business here by searching a popular product',
    },

    'zh-cn': {
        title: '这里是标题',
        content: '开启您的贸易生活从 Alibaba.com 开始',
    },
};

class FunctionDemo extends Component {
    state = {
        demoFunction: {
            hasTitle: {
                label: '标题',
                value: 'true',
                enum: [
                    {
                        label: '显示',
                        value: 'true',
                    },
                    {
                        label: '隐藏',
                        value: 'false',
                    },
                ],
            },
            hasCloseIcon: {
                label: '有无关闭按钮',
                value: 'true',
                enum: [
                    {
                        label: '有',
                        value: 'true',
                    },
                    {
                        label: '无',
                        value: 'false',
                    },
                ],
            },
            placement: {
                label: '方向',
                value: 'right',
                enum: [
                    {
                        label: '上',
                        value: 'top',
                    },
                    {
                        label: '下',
                        value: 'bottom',
                    },
                    {
                        label: '左',
                        value: 'left',
                    },
                    {
                        label: '右',
                        value: 'right',
                    },
                ],
            },
        },
    };
    onFunctionChange = demoFunction => {
        this.setState({
            demoFunction,
        });
    };

    renderMask(hasMask, content) {
        return hasMask ? (
            <div
                className="next-overlay-wrapper opened"
                style={{ position: 'relative', width: 440, height: 300 }}
            >
                <div className="next-overlay-backdrop" style={{ position: 'relative' }} />
                {content}
            </div>
        ) : (
            content
        );
    }

    render() {
        // eslint-disable-next-line
        const { lang, i18n } = this.props;
        const locale = (lang === 'en-us' ? enUS : zhCN).Drawer;
        const hasTitle = this.state.demoFunction.hasTitle.value === 'true';
        const hasCloseIcon = this.state.demoFunction.hasCloseIcon.value === 'true';

        const placement = this.state.demoFunction.placement.value;
        const style = {
            position: 'absolute',
            top: placement === 'bottom' ? 'auto' : 0,
            [placement]: 0,
        };

        const normalContent = (
            <Drawer.Inner
                style={style}
                placement={placement}
                closeable={hasCloseIcon}
                title={hasTitle ? i18n.title : null}
                locale={locale}
            >
                {i18n.content}
            </Drawer.Inner>
        );

        return (
            <div className="demo-container">
                <Demo
                    title="Drawer"
                    demoFunction={this.state.demoFunction}
                    onFunctionChange={this.onFunctionChange}
                >
                    <Demo title="Normal">
                        <DemoGroup label="Align">{this.renderMask(true, normalContent)}</DemoGroup>
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
initDemo('drawer');
