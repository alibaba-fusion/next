import React from 'react';
import ReactDOM from 'react-dom';
import '../../../demo-helper/style';
import { Demo, DemoFunctionDefineForObject, DemoGroup, initDemo } from '../../../demo-helper';
import ConfigProvider from '../../../config-provider';
import zhCN from '../../../locale/zh-cn';
import enUS from '../../../locale/en-us';
import '../../style';
import Divider from '../../index';

const i18nMap = {
    'zh-cn': {
        divider: '分割线',
        normal: '正常',
        dashed: '虚线',
        text: '标题',
        textLeft: '左标题',
        textRight: '右标题',
        ver: '垂直模式',
    },
    'en-us': {
        divider: 'Divider',
        normal: 'Normal',
        dashed: 'Dashed',
        text: 'Text',
        textLeft: 'Text Left',
        textRight: 'Text Right',
        ver: 'Vertical',
    },
};

type I18nMap = Record<string, string>;
interface RenderDividerProps {
    i18nMap: I18nMap;
}
interface DemoFunction {
    [index: string]: DemoFunctionDefineForObject;
}
interface RenderDividerState {
    demoFunction: DemoFunction;
}
class RenderDivider extends React.Component<RenderDividerProps, RenderDividerState> {
    state = {
        demoFunction: {},
    };
    onFunctionChange = (demoFunction: DemoFunction) => {
        this.setState({ demoFunction });
    };

    render() {
        const { i18nMap } = this.props;
        const { demoFunction } = this.state;

        return (
            <Demo
                title={i18nMap.divider}
                demoFunction={demoFunction}
                onFunctionChange={this.onFunctionChange}
            >
                <Demo title={i18nMap.divider}>
                    <DemoGroup label={i18nMap.normal}>
                        <div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat.
                            </p>
                            <Divider />
                            <p>
                                Duis aute irure dolor in reprehenderit in voluptate velit esse
                                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                cupidatat non proident, sunt in culpa qui officia deserunt mollit
                                anim id est laborum.
                            </p>
                        </div>
                    </DemoGroup>
                    <DemoGroup label={i18nMap.dashed}>
                        <div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat.
                            </p>
                            <Divider dashed />
                            <p>
                                Duis aute irure dolor in reprehenderit in voluptate velit esse
                                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                cupidatat non proident, sunt in culpa qui officia deserunt mollit
                                anim id est laborum.
                            </p>
                        </div>
                    </DemoGroup>
                    <DemoGroup label={i18nMap.text}>
                        <div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat.
                            </p>
                            <Divider>{i18nMap.text}</Divider>
                            <p>
                                Duis aute irure dolor in reprehenderit in voluptate velit esse
                                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                cupidatat non proident, sunt in culpa qui officia deserunt mollit
                                anim id est laborum.
                            </p>
                        </div>
                    </DemoGroup>
                    <DemoGroup label={i18nMap.textLeft}>
                        <div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat.
                            </p>
                            <Divider orientation="left">{i18nMap.textLeft}</Divider>
                            <p>
                                Duis aute irure dolor in reprehenderit in voluptate velit esse
                                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                cupidatat non proident, sunt in culpa qui officia deserunt mollit
                                anim id est laborum.
                            </p>
                        </div>
                    </DemoGroup>
                    <DemoGroup label={i18nMap.textRight}>
                        <div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                                ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat.
                            </p>
                            <Divider orientation="right">{i18nMap.textRight}</Divider>
                            <p>
                                Duis aute irure dolor in reprehenderit in voluptate velit esse
                                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                cupidatat non proident, sunt in culpa qui officia deserunt mollit
                                anim id est laborum.
                            </p>
                        </div>
                    </DemoGroup>
                    <DemoGroup label={i18nMap.ver}>
                        <div>
                            <a href="#">Add</a>
                            <Divider direction="ver" />
                            <a href="#">Edit</a>
                            <Divider direction="ver" />
                            <a href="#">Delete</a>
                        </div>
                    </DemoGroup>
                </Demo>
            </Demo>
        );
    }
}

function render(i18nMap: I18nMap, lang: string) {
    ReactDOM.render(
        <ConfigProvider locale={lang === 'en-us' ? enUS : zhCN}>
            <div className="demo-container">
                <RenderDivider i18nMap={i18nMap} />
            </div>
        </ConfigProvider>,
        document.getElementById('container')
    );
}

window.renderDemo = function (lang = 'en-us') {
    render(i18nMap[lang], lang);
};

renderDemo();

initDemo('divider');
