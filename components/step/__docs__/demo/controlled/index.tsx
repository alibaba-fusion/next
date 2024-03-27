import React from 'react';
import ReactDOM from 'react-dom';
import { Step, Button, Select, Icon } from '@alifd/next';
import type { StepDirection, StepProps, StepShape } from '../../../types';

type ItemRender = NonNullable<StepProps['itemRender']>;
interface IState {
    currentStep: number;
    stepType: StepShape;
    stepAnimation: boolean;
    labelPlacement: StepDirection;
    itemRender?: StepProps['itemRender'];
    content?: string;
}

const StepItem = Step.Item,
    ButtonGroup = Button.Group;

const renders: Record<string, ItemRender> = {
    1: function itemRender1(index) {
        return (
            <div className="custom-node1">
                <span>{index + 1}</span>
            </div>
        );
    },
    2: function itemRender2(index, status) {
        return (
            <div className="custom-node2">
                {status === 'finish' ? <Icon type="success" /> : <span>{index + 1}</span>}{' '}
            </div>
        );
    },
};
const contents = [
    'Description1',
    'Description2 --- Very Looooooooooooooooooooooog content',
    'Description3',
];

class Component extends React.Component<unknown, IState> {
    constructor(props: unknown) {
        super(props);

        this.state = {
            currentStep: 1,
            stepType: 'circle',
            stepAnimation: true,
            labelPlacement: 'ver',
        };

        this.onClick = this.onClick.bind(this);
    }
    next() {
        const s = this.state.currentStep + 1;

        this.setState({
            currentStep: s > 6 ? 6 : s,
        });
    }
    prev() {
        const s = this.state.currentStep - 1;

        this.setState({
            currentStep: s < 0 ? 0 : s,
        });
    }
    onClick(currentStep: number) {
        console.log(currentStep);

        this.setState({
            currentStep: currentStep,
        });
    }
    onStepTypeChange(value: StepShape) {
        this.setState({ stepType: value });
    }
    onStepAnimation(value: boolean) {
        this.setState({ stepAnimation: value });
    }
    onLabelPlacementChange(value: StepDirection) {
        this.setState({ labelPlacement: value });
    }
    onItemRenderChange(value: number) {
        this.setState({ itemRender: renders[value], content: contents[value] });
    }
    render() {
        const { currentStep } = this.state;

        return (
            <div>
                <div className="custom-step-option">
                    <Select
                        innerBefore="shape:"
                        placeholder="Choose the dispaly type"
                        onChange={this.onStepTypeChange.bind(this)}
                        className="custom-select"
                        defaultValue="circle"
                    >
                        {['circle', 'arrow', 'dot'].map(item => (
                            <Select.Option value={item} key={item}>
                                {item}
                            </Select.Option>
                        ))}
                    </Select>

                    <Select
                        innerBefore="labelPlacement:"
                        placeholder="Label placement"
                        onChange={this.onLabelPlacementChange.bind(this)}
                        className="custom-select"
                        defaultValue="hoz"
                    >
                        {['hoz', 'ver'].map(item => (
                            <Select.Option value={item} key={item}>
                                {item}
                            </Select.Option>
                        ))}
                    </Select>

                    <Select
                        innerBefore="animation:"
                        placeholder="Enable animation"
                        onChange={this.onStepAnimation.bind(this)}
                        className="custom-select"
                        defaultValue
                    >
                        {[true, false].map((item, index) => (
                            <Select.Option value={item} key={index}>
                                {item ? 'on' : 'off'}
                            </Select.Option>
                        ))}
                    </Select>

                    <Select
                        innerBefore="render:"
                        placeholder="Choose itemRender"
                        onChange={this.onItemRenderChange.bind(this)}
                        className="custom-select"
                        defaultValue={0}
                    >
                        {['ItemRender', 'ItemRender1', 'ItemRender2'].map((item, index) => (
                            <Select.Option value={index} key={index}>
                                {item}
                            </Select.Option>
                        ))}
                    </Select>
                </div>

                <Step
                    itemRender={this.state.itemRender}
                    current={currentStep}
                    shape={this.state.stepType}
                    animation={this.state.stepAnimation}
                    labelPlacement={this.state.labelPlacement}
                >
                    <StepItem title="Step 1" onClick={this.onClick} content="Description" />
                    <StepItem title="Step 2" onClick={this.onClick} content="Description" />
                    <StepItem
                        title="Step 3"
                        onClick={this.onClick}
                        content={this.state.content || 'Description1'}
                    />
                    <StepItem title="Step 4" onClick={this.onClick} content="Description" />
                    <StepItem title="Step 5" onClick={this.onClick} content="Description" />
                    <StepItem title="Step 6" onClick={this.onClick} content="Description" />
                </Step>
                <div className="steps-content">{contents[currentStep]}</div>
                <br />
                <br />
                <ButtonGroup>
                    <Button
                        onClick={this.prev.bind(this)}
                        type="primary"
                        disabled={currentStep === 0}
                    >
                        Backward
                    </Button>
                    <Button
                        onClick={this.next.bind(this)}
                        type="primary"
                        disabled={currentStep === 5}
                    >
                        Forward
                    </Button>
                </ButtonGroup>
            </div>
        );
    }
}

ReactDOM.render(<Component />, mountNode);
