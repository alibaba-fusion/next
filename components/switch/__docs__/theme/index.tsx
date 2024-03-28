import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../../../demo-helper/style';
import {
    Demo,
    DemoGroup,
    DemoHead,
    initDemo,
    type DemoFunctionDefineForObject,
} from '../../../demo-helper';
import '../../style';
import Switch, { type SwitchProps } from '../../index';

const i18nMap = {
    'zh-cn': {
        checkedChildren: '开',
        unCheckedChildren: '关',
        showText: {
            label: '是否显示文字',
            value: 'false',
            enum: [
                {
                    label: '是',
                    value: 'true',
                },
                {
                    label: '否',
                    value: 'false',
                },
            ],
        },
    },
    'en-us': {
        checkedChildren: 'on',
        unCheckedChildren: 'off',
        showText: {
            label: 'show text',
            value: 'false',
            enum: [
                {
                    label: 'yes',
                    value: 'true',
                },
                {
                    label: 'no',
                    value: 'false',
                },
            ],
        },
    },
};

type I18n = (typeof i18nMap)[keyof typeof i18nMap];
interface ThemeDemoProps {
    i18n: I18n;
}
interface ThemeDemoState {
    demoFunction: Record<string, DemoFunctionDefineForObject>;
}

class ThemeDemo extends Component<ThemeDemoProps, ThemeDemoState> {
    constructor(props: ThemeDemoProps) {
        super(props);
        this.state = {
            demoFunction: {
                showText: {
                    label: '是否显示文字',
                    value: 'false',
                    enum: [
                        {
                            label: '是',
                            value: 'true',
                        },
                        {
                            label: '否',
                            value: 'false',
                        },
                    ],
                },
                autoWidth: {
                    label: '宽度根据内容自适应',
                    value: 'false',
                    enum: [
                        {
                            label: '是',
                            value: 'true',
                        },
                        {
                            label: '否',
                            value: 'false',
                        },
                    ],
                },
            },
        };

        this.onFunctionChange = this.onFunctionChange.bind(this);
    }

    onFunctionChange(demoFunction: ThemeDemoState['demoFunction']) {
        this.setState({
            demoFunction,
        });
    }

    render() {
        const { demoFunction } = this.state;
        const { i18n } = this.props;
        const showText = demoFunction.showText.value;
        const autoWidth = demoFunction.autoWidth.value;
        let props: SwitchProps = {};
        if (showText === 'true') {
            props = {
                checkedChildren: i18n.checkedChildren,
                unCheckedChildren: i18n.unCheckedChildren,
            };
        }

        props.autoWidth = autoWidth === 'true';

        return (
            <Demo
                title="Normal"
                demoFunction={demoFunction}
                onFunctionChange={this.onFunctionChange}
            >
                <Demo title="Normal">
                    <DemoHead cols={['M', 'S']} />
                    <DemoGroup label="Off">
                        <Switch checked={false} {...props} />
                        <Switch checked={false} {...props} size="small" />
                    </DemoGroup>
                    <DemoGroup label="Hover Off">
                        <Switch checked={false} className="hover" {...props} />
                        <Switch checked={false} className="hover" {...props} size="small" />
                    </DemoGroup>
                    <DemoGroup label="Loading Off">
                        <Switch checked={false} loading {...props} />
                        <Switch checked={false} loading {...props} size="small" />
                    </DemoGroup>
                    <DemoGroup label="Disabled Off">
                        <Switch checked={false} disabled {...props} />
                        <Switch checked={false} {...props} disabled size="small" />
                    </DemoGroup>

                    <DemoGroup label="On">
                        <Switch checked {...props} />
                        <Switch checked {...props} size="small" />
                    </DemoGroup>
                    <DemoGroup label="Hover On">
                        <Switch checked {...props} className="hover" />
                        <Switch checked {...props} className="hover" size="small" />
                    </DemoGroup>
                    <DemoGroup label="On & Loading">
                        <Switch checked loading {...props} />
                        <Switch checked loading {...props} size="small" />
                    </DemoGroup>

                    <DemoGroup label="Disabled On">
                        <Switch checked disabled {...props} />
                        <Switch checked disabled {...props} size="small" />
                    </DemoGroup>
                </Demo>
            </Demo>
        );
    }
}

function render(i18n: I18n) {
    // eslint-disable-next-line react/no-render-return-value
    return ReactDOM.render(
        <div className="demo-container">
            <h2>Switch</h2>
            <ThemeDemo i18n={i18n} />
        </div>,
        document.getElementById('container')
    );
}

window.renderDemo = function (lang = 'en-us') {
    render(i18nMap[lang]);
};

window.renderDemo('en-us');

initDemo('switch');
