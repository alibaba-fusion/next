import React from 'react';
import ReactDOM from 'react-dom';
import { Demo, DemoGroup, initDemo } from '../../../demo-helper';
import Timeline from '../../index';
import ConfigProvider from '../../../config-provider';
import zhCN from '../../../locale/zh-cn';
import enUS from '../../../locale/en-us';
import '../../../demo-helper/style';
import '../../style';

const TimelineItem = Timeline.Item;
const parseBool = (str: string) => {
    switch (str) {
        case 'true':
            return true;
        case 'false':
            return false;
        default:
            return true;
    }
};
const i18nMap: Record<string, Record<string, string>> = {
    'zh-cn': {
        basic: '基本',
        normal: '普通',
        success: '成功',
        error: '错误',
        timeRight: '时间在右',
        timeLeft: '时间在左',
        expand: '展开',
        simpleContOne: '签收',
        simpleContTwo: '发货',
        simpleContThree: '下单',
        orderContOne: '已签收,签收人是阿里巴巴小邮局，感谢使用申通快递，期待再次为您服务',
        orderContTwo: '快件已到达 浙江杭州滨江公司',
        orderContThree: '浙江杭州滨江公司派件员正在为您派件',
        orderContFour: '浙江杭州转运中心 已发出',
        orderContFive: '广东东莞转运中心 已发出',
        orderContSix: '申通快递 广东东莞凤岗分部收件员 已揽件',
        orderContSeven: '商家正通知快递公司揽件',
        orderContEight: '您的订单待配货',
        orderContNine: '您的订单开始处理',
    },
    'en-us': {
        basic: 'Basic',
        normal: 'Normal',
        success: 'Success',
        error: 'Error',
        withLeft: 'With Left',
        timeRight: 'Time Right',
        timeLeft: 'Time Left',
        expand: 'Expand',
        simpleContOne: 'Signed',
        simpleContTwo: 'Ship',
        simpleContThree: 'Order',
        orderContOne:
            'Signed, sign Alibaba is a small post office, thanks to the use of STO, look forward to once again at your service',
        orderContTwo: 'Express has arrived in Hangzhou, Zhejiang Binjiang company',
        orderContThree: 'Zhejiang Hangzhou Riverside company sent a member for you to send pieces',
        orderContFour: 'Zhejiang Hangzhou Transshipment Center has been issued',
        orderContFive: 'Guangdong Dongguan Transshipment Center has been issued',
        orderContSix:
            'Shentong Express Fenggang, Dongguan, Guangdong Division has received a collection of pieces of pieces',
        orderContSeven: 'Businesses are informed courier package pieces',
        orderContEight: 'Your order is for pickup',
        orderContNine: 'Your order is processed',
    },
};
const CONTENT_TYPE: Record<string, number> = {
    title: 0,
    'title & content': 1,
    'title & content & time': 2,
    'title & time': 3,
};

class FunctionDemo extends React.Component<
    any,
    {
        demoFunction: {
            content: {
                label: string;
                value: string;
                enum: Array<{
                    value: string;
                    label: string;
                }>;
            };
            icon: {
                label: string;
                value: string;
                enum: Array<{
                    value: string;
                    label: string;
                }>;
            };
        };
    }
> {
    constructor(props: any) {
        super(props);
        this.state = {
            demoFunction: {
                content: {
                    label: '内容呈现',
                    value: 'title & content & time',
                    enum: [
                        { value: 'title & content & time', label: '标题、内容和时间' },
                        { value: 'title', label: '仅标题' },
                        { value: 'title & content', label: '标题和内容' },
                        { value: 'title & time', label: '标题和时间' },
                    ],
                },
                icon: {
                    label: '图标',
                    value: 'false',
                    enum: [
                        { value: 'true', label: '显示' },
                        { value: 'false', label: '隐藏' },
                    ],
                },
            },
        };
    }

    onFunctionChange = (ret: any) => {
        this.setState({
            demoFunction: ret,
        });
    };
    itemRender = ({
        flag,
        index,
        ...props
    }: {
        flag: { contentType: number; withIcon: boolean };
        [prop: string]: any;
    }) => {
        switch (flag.contentType) {
            case 0:
                delete props.content;
                delete props.time;
                delete props.timeLeft;
                !flag.withIcon && delete props.icon;
                return <TimelineItem {...props} key={index} />;
            case 1:
                delete props.time;
                delete props.timeLeft;
                !flag.withIcon && delete props.icon;
                return <TimelineItem {...props} key={index} />;
            case 2:
                !flag.withIcon && delete props.icon;
                return <TimelineItem {...props} key={index} />;
            case 3:
                delete props.content;
                !flag.withIcon && delete props.icon;
                return <TimelineItem {...props} key={index} />;
        }
    };
    render() {
        const { title, i18n, itemData, lang } = this.props;
        const { demoFunction } = this.state;
        const flag = {
            contentType: CONTENT_TYPE[demoFunction.content.value],
            withIcon:
                typeof demoFunction.icon.value === 'boolean'
                    ? demoFunction.icon.value
                    : parseBool(demoFunction.icon.value),
        };
        return (
            <ConfigProvider locale={lang === 'en-us' ? enUS : zhCN}>
                <Demo
                    title={title}
                    demoFunction={demoFunction}
                    onFunctionChange={this.onFunctionChange}
                >
                    <DemoGroup label={i18n.normal}>
                        <Timeline>
                            {(itemData.normalItems as any[]).map((v, index) =>
                                this.itemRender({ ...v, flag, index })
                            )}
                        </Timeline>
                    </DemoGroup>
                    <DemoGroup label={i18n.success}>
                        <Timeline>
                            {(itemData.successItems as any[]).map((v, index) =>
                                this.itemRender({ ...v, flag, index })
                            )}
                        </Timeline>
                    </DemoGroup>
                    <DemoGroup label={i18n.error}>
                        <Timeline>
                            {(itemData.errorItems as any[]).map((v, index) =>
                                this.itemRender({ ...v, flag, index })
                            )}
                        </Timeline>
                    </DemoGroup>
                    <DemoGroup label={i18n.expand}>
                        <Timeline
                            fold={[
                                { foldArea: [1, 2], foldShow: true },
                                { foldArea: [4], foldShow: true },
                            ]}
                        >
                            {(itemData.expandItems as any[]).map((v, index) =>
                                this.itemRender({ ...v, flag, index })
                            )}
                        </Timeline>
                    </DemoGroup>
                </Demo>
            </ConfigProvider>
        );
    }
}

/* eslint-disable */
function render(lang: string) {
    const i18n = i18nMap[lang];
    const timeRight = {
            normalItems: [
                {
                    title: i18n.simpleContOne,
                    content: i18n.orderContOne,
                    time: 'Jun, 10, 2016 10:30:00',
                    state: 'process',
                },
                {
                    title: i18n.simpleContTwo,
                    content: i18n.orderContTwo,
                    time: 'Jun, 10, 2016 09:30:00',
                    icon: 'atm',
                },
                {
                    title: i18n.simpleContTwo,
                    content: i18n.orderContThree,
                    time: 'Jun, 10, 2016 09:03:00',
                },
                {
                    title: i18n.simpleContTwo,
                    content: i18n.orderContFour,
                    time: 'Jun, 10, 2016 06:10:00',
                },
            ],
            successItems: [
                {
                    title: i18n.simpleContOne,
                    content: i18n.orderContOne,
                    time: 'Jun, 10, 2016 10:30:00',
                    state: 'success',
                },
                {
                    title: i18n.simpleContTwo,
                    content: i18n.orderContTwo,
                    time: 'Jun, 10, 2016 09:30:00',
                    icon: 'atm',
                },
                {
                    title: i18n.simpleContTwo,
                    content: i18n.orderContThree,
                    time: 'Jun, 10, 2016 09:03:00',
                },
                {
                    title: i18n.simpleContTwo,
                    content: i18n.orderContFour,
                    time: 'Jun, 10, 2016 06:10:00',
                },
            ],
            errorItems: [
                {
                    title: i18n.simpleContOne,
                    content: i18n.orderContOne,
                    time: 'Jun, 10, 2016 10:30:00',
                    state: 'error',
                },
                {
                    title: i18n.simpleContTwo,
                    content: i18n.orderContTwo,
                    time: 'Jun, 10, 2016 09:30:00',
                    icon: 'atm',
                },
                {
                    title: i18n.simpleContTwo,
                    content: i18n.orderContThree,
                    time: 'Jun, 10, 2016 09:03:00',
                },
                {
                    title: i18n.simpleContTwo,
                    content: i18n.orderContFour,
                    time: 'Jun, 10, 2016 06:10:00',
                },
            ],
            expandItems: [
                {
                    title: i18n.simpleContOne,
                    content: i18n.orderContOne,
                    time: 'Jun, 10, 2016 10:30:00',
                    state: 'process',
                },
                {
                    title: i18n.simpleContTwo,
                    content: i18n.orderContTwo,
                    time: 'Jun, 10, 2016 09:30:00',
                    icon: 'atm',
                },
                {
                    title: i18n.simpleContTwo,
                    content: i18n.orderContThree,
                    time: 'Jun, 10, 2016 09:03:00',
                },
                {
                    title: i18n.simpleContTwo,
                    content: i18n.orderContFour,
                    time: 'Jun, 10, 2016 06:10:00',
                },
            ],
        },
        timeLeft = {
            normalItems: [
                {
                    title: i18n.simpleContOne,
                    content: i18n.orderContOne,
                    timeLeft: 'Jun, 10, 2016 10:30:00',
                    state: 'process',
                },
                {
                    title: i18n.simpleContTwo,
                    content: i18n.orderContTwo,
                    timeLeft: 'Jun, 10, 2016 09:30:00',
                    icon: 'atm',
                },
                {
                    title: i18n.simpleContTwo,
                    content: i18n.orderContThree,
                    timeLeft: 'Jun, 10, 2016 09:03:00',
                },
                {
                    title: i18n.simpleContTwo,
                    content: i18n.orderContFour,
                    timeLeft: 'Jun, 10, 2016 06:10:00',
                },
            ],
            successItems: [
                {
                    title: i18n.simpleContOne,
                    content: i18n.orderContOne,
                    timeLeft: 'Jun, 10, 2016 10:30:00',
                    state: 'success',
                },
                {
                    title: i18n.simpleContTwo,
                    content: i18n.orderContTwo,
                    timeLeft: 'Jun, 10, 2016 09:30:00',
                    icon: 'atm',
                },
                {
                    title: i18n.simpleContTwo,
                    content: i18n.orderContThree,
                    timeLeft: 'Jun, 10, 2016 09:03:00',
                },
                {
                    title: i18n.simpleContTwo,
                    content: i18n.orderContFour,
                    timeLeft: 'Jun, 10, 2016 06:10:00',
                },
            ],
            errorItems: [
                {
                    title: i18n.simpleContOne,
                    content: i18n.orderContOne,
                    timeLeft: 'Jun, 10, 2016 10:30:00',
                    state: 'error',
                },
                {
                    title: i18n.simpleContTwo,
                    content: i18n.orderContTwo,
                    timeLeft: 'Jun, 10, 2016 09:30:00',
                    icon: 'atm',
                },
                {
                    title: i18n.simpleContTwo,
                    content: i18n.orderContThree,
                    timeLeft: 'Jun, 10, 2016 09:03:00',
                },
                {
                    title: i18n.simpleContTwo,
                    content: i18n.orderContFour,
                    timeLeft: 'Jun, 10, 2016 06:10:00',
                },
            ],
            expandItems: [
                {
                    title: i18n.simpleContOne,
                    content: i18n.orderContOne,
                    timeLeft: 'Jun, 10, 2016 10:30:00',
                    state: 'process',
                },
                {
                    title: i18n.simpleContTwo,
                    content: i18n.orderContTwo,
                    timeLeft: 'Jun, 10, 2016 09:30:00',
                    icon: 'atm',
                },
                {
                    title: i18n.simpleContTwo,
                    content: i18n.orderContThree,
                    timeLeft: 'Jun, 10, 2016 09:03:00',
                },
                {
                    title: i18n.simpleContTwo,
                    content: i18n.orderContFour,
                    timeLeft: 'Jun, 10, 2016 06:10:00',
                },
            ],
        };
    return ReactDOM.render(
        <div className="demo-container">
            <FunctionDemo
                title={i18n.timeRight}
                i18n={i18n}
                itemData={timeRight}
                lang={lang}
                key="1"
            />
            <FunctionDemo
                title={i18n.timeLeft}
                i18n={i18n}
                itemData={timeLeft}
                lang={lang}
                key="2"
            />
        </div>,
        document.getElementById('container')
    );
}

window.renderDemo = function (lang) {
    lang = lang || 'en-us';
    render(lang);
};

renderDemo();

initDemo('timeline');
