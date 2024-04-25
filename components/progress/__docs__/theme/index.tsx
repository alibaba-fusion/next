import React from 'react';
import ReactDOM from 'react-dom';
import {
    Demo,
    DemoHead,
    DemoGroup,
    initDemo,
    type DemoProps,
    type DemoFunctionDefineForObject,
} from '../../../demo-helper';
import Progress from '../../index';
import ConfigProvider from '../../../config-provider';
import zhCN from '../../../locale/zh-cn';
import enUS from '../../../locale/en-us';
import '../../../demo-helper/style';
import '../../style';

const i18nMap = {
    'zh-cn': {
        lineBasic: '线型基本',
        lineProgressive: '线型层级',
        circleBasic: '圆型基本',
        circleProgressive: '圆型层级',
        small: '小',
        medium: '中',
        large: '大',
        normal: '普通',
        error: '错误',
        success: '成功',
        noInfo: '无文本',
        started: '起始',
        middle: '中间',
        finishing: '将完成',
    },
    'en-us': {
        lineBasic: 'Line Basic',
        lineProgressive: 'Line Staging',
        circleBasic: 'Circle Basic',
        circleProgressive: 'Circle Staging',
        small: 'Small',
        medium: 'Medium',
        large: 'Large',

        normal: 'Normal',
        error: 'Error',
        success: 'Success',
        noInfo: 'No Info',
        started: 'Started',
        middle: 'Middle',
        finishing: 'Finishing',
    },
};

type I18N = (typeof i18nMap)[keyof typeof i18nMap];

interface progressRenderProps {
    textRender?: (percent: number) => React.ReactNode;
    hasBorder?: boolean;
}
interface IProps {
    title: DemoProps['title'];
    circle?: boolean;
    locale: I18N;
    progressRender: (i18n: I18N, props: progressRenderProps) => React.ReactNode;
}
interface IState {
    demoFunction: Record<string, DemoFunctionDefineForObject>;
}

function renderLineProgress(i18n: I18N, props: progressRenderProps) {
    return (
        <Demo title={i18n.lineBasic} block>
            <DemoHead cols={['L', 'M', 'S']} />
            <DemoGroup label={i18n.normal}>
                <Progress percent={30} size="large" {...props} />
                <Progress percent={60} size="medium" {...props} />
                <Progress percent={90} size="small" {...props} />
            </DemoGroup>
            <DemoGroup label={i18n.error}>
                <Progress percent={30} state="error" size="large" {...props} />
                <Progress percent={60} state="error" size="medium" {...props} />
                <Progress percent={90} state="error" size="small" {...props} />
            </DemoGroup>
            <DemoGroup label={i18n.success}>
                <Progress percent={30} state="success" size="large" {...props} />
                <Progress percent={60} state="success" size="medium" {...props} />
                <Progress percent={90} state="success" size="small" {...props} />
            </DemoGroup>
        </Demo>
    );
}

function renderLineProgressive(i18n: I18N, props: progressRenderProps) {
    return (
        <Demo title={i18n.lineProgressive} block>
            <DemoHead cols={['L', 'M', 'S']} />
            <DemoGroup label={i18n.started}>
                <Progress {...props} percent={20} progressive size="large" />
                <Progress {...props} percent={20} progressive size="medium" />
                <Progress {...props} percent={20} progressive size="small" />
            </DemoGroup>
            <DemoGroup label={i18n.middle}>
                <Progress {...props} percent={70} progressive size="large" />
                <Progress {...props} percent={70} progressive size="medium" />
                <Progress {...props} percent={70} progressive size="small" />
            </DemoGroup>
            <DemoGroup label={i18n.finishing}>
                <Progress {...props} percent={90} progressive size="large" />
                <Progress {...props} percent={90} progressive size="medium" />
                <Progress {...props} percent={90} progressive size="small" />
            </DemoGroup>
        </Demo>
    );
}

function renderCircleProgress(i18n: I18N, props: progressRenderProps) {
    return (
        <Demo title={i18n.circleBasic} block>
            <DemoHead cols={['L', 'M', 'S']} />
            <DemoGroup label={i18n.normal}>
                <Progress {...props} shape="circle" percent={30} size="large" />
                <Progress {...props} shape="circle" percent={60} size="medium" />
                <Progress {...props} shape="circle" percent={90} size="small" />
            </DemoGroup>
            <DemoGroup label={i18n.error}>
                <Progress {...props} shape="circle" percent={30} state="error" size="large" />
                <Progress {...props} shape="circle" percent={60} state="error" size="medium" />
                <Progress {...props} shape="circle" percent={90} state="error" size="small" />
            </DemoGroup>
            <DemoGroup label={i18n.success}>
                <Progress {...props} shape="circle" percent={30} state="success" size="large" />
                <Progress {...props} shape="circle" percent={60} state="success" size="medium" />
                <Progress {...props} shape="circle" percent={90} state="success" size="small" />
            </DemoGroup>
        </Demo>
    );
}

function renderCircleProgressive(i18n: I18N, props: progressRenderProps) {
    return (
        <Demo title={i18n.circleProgressive} block>
            <DemoHead cols={['L', 'M', 'S']} />
            <DemoGroup label={i18n.started}>
                <Progress {...props} percent={20} progressive shape="circle" size="large" />
                <Progress {...props} percent={20} progressive shape="circle" size="medium" />
                <Progress {...props} percent={20} progressive shape="circle" size="small" />
            </DemoGroup>
            <DemoGroup label={i18n.middle}>
                <Progress {...props} percent={70} progressive shape="circle" size="large" />
                <Progress {...props} percent={70} progressive shape="circle" size="medium" />
                <Progress {...props} percent={70} progressive shape="circle" size="small" />
            </DemoGroup>
            <DemoGroup label={i18n.finishing}>
                <Progress {...props} percent={90} progressive shape="circle" size="large" />
                <Progress {...props} percent={90} progressive shape="circle" size="medium" />
                <Progress {...props} percent={90} progressive shape="circle" size="small" />
            </DemoGroup>
        </Demo>
    );
}

class FunctionDemo extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            demoFunction: {
                showText: {
                    label: '文本',
                    value: 'false',
                    enum: [
                        { label: '显示', value: 'true' },
                        { label: '隐藏', value: 'false' },
                    ],
                },
                showBorder: {
                    label: '边框',
                    value: 'false',
                    enum: [
                        { label: '显示', value: 'true' },
                        { label: '隐藏', value: 'false' },
                    ],
                },
            },
        };
    }

    onFunctionChange = (ret: IState['demoFunction']) => {
        this.setState({
            demoFunction: ret,
        });
    };

    render() {
        const { title, circle, locale, progressRender } = this.props;
        let { demoFunction } = this.state;

        const withText = demoFunction.showText.value === 'true' || circle;

        const props: progressRenderProps = {};

        if (!withText) {
            props.textRender = () => false;
        }

        if (circle) {
            demoFunction = {};
        } else {
            props.hasBorder = demoFunction.showBorder.value === 'true';
        }

        return (
            <Demo
                title={title}
                demoFunction={demoFunction}
                onFunctionChange={this.onFunctionChange}
            >
                {progressRender(locale, props)}
            </Demo>
        );
    }
}

function render(i18n: I18N, lang: string) {
    ReactDOM.render(
        <ConfigProvider locale={lang === 'en-us' ? enUS : zhCN}>
            <div className="demo-container">
                <FunctionDemo
                    title={i18n.lineBasic}
                    locale={i18n}
                    progressRender={renderLineProgress}
                />
                <FunctionDemo
                    title={i18n.lineProgressive}
                    locale={i18n}
                    progressRender={renderLineProgressive}
                />
                <FunctionDemo
                    title={i18n.circleBasic}
                    locale={i18n}
                    progressRender={renderCircleProgress}
                    circle
                />
                <FunctionDemo
                    title={i18n.circleProgressive}
                    locale={i18n}
                    progressRender={renderCircleProgressive}
                    circle
                />
            </div>
        </ConfigProvider>,
        document.getElementById('container')
    );
}

window.renderDemo = function (lang = 'en-us') {
    render(i18nMap[lang], lang);
};

renderDemo();

initDemo('progress');
