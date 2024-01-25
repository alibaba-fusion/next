import React from 'react';
import ReactDOM from 'react-dom';
import '../../../demo-helper/style';
import { Demo, DemoGroup, initDemo, DemoFunctionDefineForObject } from '../../../demo-helper';
import ConfigProvider from '../../../config-provider';
import zhCN from '../../../locale/zh-cn';
import enUS from '../../../locale/en-us';
import '../../style';
import Box from '../../index';

const i18nMap = {
    'zh-cn': {
        box: '弹性布局',
        normal: '正常',
    },
    'en-us': {
        box: 'Box',
        normal: 'Normal',
    },
};
interface RenderBoxState {
    demoFunction: Record<string, DemoFunctionDefineForObject>;
}

interface RenderBoxProps {
    i18nMap: { [index: string]: string };
}
class RenderBox extends React.Component<RenderBoxProps, RenderBoxState> {
    constructor(props: RenderBoxProps) {
        super(props);
        this.state = {
            demoFunction: {
                hasChildren: {
                    label: 'Box使用',
                    value: 'false',
                    enum: [
                        {
                            label: '不独立使用',
                            value: false,
                        },
                        {
                            label: '独立使用',
                            value: true,
                        },
                    ],
                },
            },
        };
    }

    onFunctionChange = (demoFunction: RenderBoxState['demoFunction']) => {
        this.setState({ demoFunction });
    };

    render() {
        const { i18nMap } = this.props;
        const { demoFunction } = this.state;
        const hasChildren = demoFunction ? demoFunction.hasChildren.value === 'true' : null;

        return (
            <Demo
                title={i18nMap.box}
                demoFunction={demoFunction}
                onFunctionChange={this.onFunctionChange}
            >
                <Demo title={i18nMap.box}>
                    <DemoGroup label={i18nMap.normal}>
                        <Box children={hasChildren} />
                    </DemoGroup>
                </Demo>
            </Demo>
        );
    }
}

function render(i18nMap: { [index: string]: string }, lang: string) {
    ReactDOM.render(
        <ConfigProvider locale={lang === 'en-us' ? enUS : zhCN}>
            <div className="demo-container">
                <RenderBox i18nMap={i18nMap} />
            </div>
        </ConfigProvider>,
        document.getElementById('container')
    );
}

window.renderDemo = function (lang = 'en-us') {
    render(i18nMap[lang], lang);
};

renderDemo();

initDemo('box');
