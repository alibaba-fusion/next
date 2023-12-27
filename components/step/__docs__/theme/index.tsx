import React from 'react';
import { Demo, DemoGroup, initDemo } from '../../../demo-helper';
import Step from '../../index';
import '../../style';
import '../../../demo-helper/style';

const StepItem = Step.Item;
const parseBool = str => {
    switch (str) {
        case 'true':
            return true;
        case 'false':
            return false;
        default:
            return true;
    }
};
const i18nMap = {
    'zh-cn': {
        basic: '基本',
        vertical: '垂直',
        horizontal: '水平',
        verticalGroup: '垂直',
        horizontalGroup: '水平',
        percent: '百分比',
        circle: '圆型',
        arrow: '箭头型',
        dot: '点型',
        disabled: '禁用',
        stepOne: '步骤一',
        stepTwo: '步骤二',
        stepThree: '步骤三',
        stepFour: '步骤四',
        stepOneContent: '打开冰箱门',
        stepTwoContent: '把大象塞进去',
        stepThreeContent: '关上冰箱门',
    },
    'en-us': {
        basic: 'Basic',
        vertical: 'Portrait',
        horizontal: 'Landscape',
        verticalGroup: 'Vertical',
        horizontalGroup: 'Horizontal',
        percent: 'Percent',
        circle: 'Circle',
        arrow: 'Arrow',
        dot: 'Dot',
        disabled: 'Disabled',
        stepOne: 'Step 1',
        stepTwo: 'Step 2',
        stepThree: 'Step 3',
        stepFour: 'Step 4',
        stepOneContent: 'Open the door,',
        stepTwoContent: 'put the elephant into the fridge',
        stepThreeContent: 'close the door',
    },
};

class FunctionDemo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            circleDdemoFunction: {
                icon: {
                    label: '图标',
                    value: 'false',
                    enum: [
                        { value: 'true', label: '显示' },
                        { value: 'false', label: '隐藏' },
                    ],
                },
                content: {
                    label: '内容',
                    value: 'true',
                    enum: [
                        { value: 'true', label: '显示' },
                        { value: 'false', label: '隐藏' },
                    ],
                },
                contentPos: {
                    label: '内容位置',
                    value: 'ver',
                    enum: [
                        { value: 'ver', label: '节点下方' },
                        { value: 'hoz', label: '节点右侧' },
                    ],
                },
            },
            dotDemoFunction: {
                icon: {
                    label: '图标',
                    value: 'true',
                    enum: [
                        { value: 'true', label: '显示' },
                        { value: 'false', label: '隐藏' },
                    ],
                },
                content: {
                    label: '内容',
                    value: 'true',
                    enum: [
                        { value: 'true', label: '显示' },
                        { value: 'false', label: '隐藏' },
                    ],
                },
            },
        };
    }

    onFunctionChange = ret => {
        this.setState({
            demoFunction: ret,
        });
    };

    itemRender = ({ flag, index, ...props }) => {
        !flag.withIcon && delete props.icon;
        !flag.withContent && delete props.content;
        // !flag.withProgress && delete props.percent;
        return <StepItem {...props} key={index} />;
    };
    render() {
        const { title, i18n, itemData, shape } = this.props;
        let demoFunction, flag, result;
        if (shape === 'circle') {
            demoFunction = this.state.circleDdemoFunction;
            flag = {
                withIcon: parseBool(demoFunction.icon.value),
                labelPlacement: demoFunction.contentPos.value,
                withContent: parseBool(demoFunction.content.value),
            };
        } else {
            demoFunction = this.state.dotDemoFunction;
            flag = {
                withIcon: parseBool(demoFunction.icon.value),
                // withProgress: typeof demoFunction[1].value === 'boolean' ? demoFunction[1].value : parseBool(demoFunction[1].value),
                withContent: parseBool(demoFunction.content.value),
            };
        }
        if (shape === 'arrow') {
            result = (
                <Demo title={title}>
                    <Demo title={i18n.horizontalGroup} block>
                        <DemoGroup label={i18n.horizontal}>
                            <Step current={2} shape={shape}>
                                {itemData.horizontal.map((v, index) =>
                                    this.itemRender({ flag, index, ...v })
                                )}
                            </Step>
                        </DemoGroup>
                        <DemoGroup label={i18n.disabled}>
                            <Step current={2} shape={shape}>
                                {itemData.disabled.map((v, index) =>
                                    this.itemRender({ flag, index, ...v })
                                )}
                            </Step>
                        </DemoGroup>
                    </Demo>
                </Demo>
            );
        } else if (shape === 'dot') {
            result = (
                <Demo
                    title={title}
                    demoFunction={demoFunction}
                    onFunctionChange={this.onFunctionChange}
                >
                    <Demo title={i18n.horizontalGroup} block>
                        <DemoGroup label={i18n.horizontal}>
                            <Step current={1} shape={shape} labelPlacement={flag.labelPlacement}>
                                {itemData.horizontal.map((v, index) =>
                                    this.itemRender({ flag, index, ...v })
                                )}
                            </Step>
                        </DemoGroup>
                        <DemoGroup label={i18n.disabled}>
                            <Step current={2} shape={shape} labelPlacement={flag.labelPlacement}>
                                {itemData.disabled.map((v, index) =>
                                    this.itemRender({ flag, index, ...v })
                                )}
                            </Step>
                        </DemoGroup>
                    </Demo>
                    <Demo title={i18n.verticalGroup} block>
                        <DemoGroup label={i18n.horizontal}>
                            <Step current={1} shape={shape} direction="ver">
                                {itemData.horizontal.map((v, index) =>
                                    this.itemRender({ flag, index, ...v })
                                )}
                            </Step>
                        </DemoGroup>
                        <DemoGroup label={i18n.disabled}>
                            <Step current={2} shape={shape} direction="ver">
                                {itemData.disabled.map((v, index) =>
                                    this.itemRender({ flag, index, ...v })
                                )}
                            </Step>
                        </DemoGroup>
                    </Demo>
                </Demo>
            );
        } else {
            result = (
                <Demo
                    title={title}
                    demoFunction={demoFunction}
                    onFunctionChange={this.onFunctionChange}
                >
                    <Demo title={i18n.horizontalGroup} block>
                        <DemoGroup label={i18n.horizontal}>
                            <Step current={1} shape={shape} labelPlacement={flag.labelPlacement}>
                                {itemData.horizontal.map((v, index) =>
                                    this.itemRender({ flag, index, ...v })
                                )}
                            </Step>
                        </DemoGroup>
                        <DemoGroup label={i18n.percent}>
                            <Step current={2} shape={shape} labelPlacement={flag.labelPlacement}>
                                {itemData.percent.map((v, index) =>
                                    this.itemRender({ flag, index, ...v })
                                )}
                            </Step>
                        </DemoGroup>
                        <DemoGroup label={i18n.disabled}>
                            <Step current={2} shape={shape} labelPlacement={flag.labelPlacement}>
                                {itemData.disabled.map((v, index) =>
                                    this.itemRender({ flag, index, ...v })
                                )}
                            </Step>
                        </DemoGroup>
                    </Demo>
                    <Demo title={i18n.verticalGroup} block>
                        <DemoGroup label={i18n.horizontal}>
                            <Step current={1} shape={shape} direction="ver">
                                {itemData.horizontal.map((v, index) =>
                                    this.itemRender({ flag, index, ...v })
                                )}
                            </Step>
                        </DemoGroup>
                        <DemoGroup label={i18n.percent}>
                            <Step current={2} shape={shape} direction="ver">
                                {itemData.percent.map((v, index) =>
                                    this.itemRender({ flag, index, ...v })
                                )}
                            </Step>
                        </DemoGroup>
                        <DemoGroup label={i18n.disabled}>
                            <Step current={2} shape={shape} direction="ver">
                                {itemData.disabled.map((v, index) =>
                                    this.itemRender({ flag, index, ...v })
                                )}
                            </Step>
                        </DemoGroup>
                    </Demo>
                </Demo>
            );
        }
        return result;
    }
}

/* eslint-disable */
function render(lang) {
    const i18n = i18nMap[lang];
    const horizontal = [
            {
                title: i18n.stepOne,
                content: `${i18n.stepOneContent} ${i18n.stepTwoContent}`,
            },
            {
                title: i18n.stepTwo,
                content: `${i18n.stepOneContent} ${i18n.stepTwoContent}`,
                icon: 'atm',
            },
            {
                title: i18n.stepThree,
                content: `${i18n.stepOneContent} ${i18n.stepTwoContent}`,
            },
            {
                title: i18n.stepFour,
                content: `${i18n.stepOneContent} ${i18n.stepTwoContent}`,
            },
        ],
        percent = [
            {
                title: i18n.stepOne,
                content: `${i18n.stepOneContent} ${i18n.stepTwoContent}`,
            },
            {
                title: i18n.stepTwo,
                content: `${i18n.stepOneContent} ${i18n.stepTwoContent}`,
                icon: 'atm',
            },
            {
                title: i18n.stepThree,
                content: `${i18n.stepOneContent} ${i18n.stepTwoContent}`,
                percent: 60,
            },
            {
                title: i18n.stepFour,
                content: `${i18n.stepOneContent} ${i18n.stepTwoContent}`,
            },
        ],
        disabled = [
            {
                title: i18n.stepOne,
                content: `${i18n.stepOneContent} ${i18n.stepTwoContent}`,
                disabled: true,
            },
            {
                title: i18n.stepTwo,
                content: `${i18n.stepOneContent} ${i18n.stepTwoContent}`,
                icon: 'atm',
                disabled: true,
            },
            {
                title: i18n.stepThree,
                content: `${i18n.stepOneContent} ${i18n.stepTwoContent}`,
                disabled: true,
            },
            {
                title: i18n.stepFour,
                content: `${i18n.stepOneContent} ${i18n.stepTwoContent}`,
                disabled: true,
            },
        ],
        arrowData = {
            horizontal: [
                {
                    title: i18n.stepOne,
                },
                {
                    title: i18n.stepTwo,
                },
                {
                    title: i18n.stepThree,
                },
                {
                    title: i18n.stepFour,
                },
            ],
            disabled: [
                {
                    title: i18n.stepOne,
                    disabled: true,
                },
                {
                    title: i18n.stepTwo,
                    disabled: true,
                },
                {
                    title: i18n.stepThree,
                    disabled: true,
                },
                {
                    title: i18n.stepFour,
                    disabled: true,
                },
            ],
        };
    return ReactDOM.render(
        <div className="demo-container">
            <FunctionDemo
                title={i18n.circle}
                i18n={i18n}
                itemData={{ horizontal, percent, disabled }}
                shape="circle"
            />
            <FunctionDemo title={i18n.arrow} i18n={i18n} itemData={arrowData} shape="arrow" />
            <FunctionDemo
                title={i18n.dot}
                i18n={i18n}
                itemData={{ horizontal, percent, disabled }}
                shape="dot"
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

initDemo('step');
