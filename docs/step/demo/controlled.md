# 受控模式

- order: 6

默认情况下，Step 定义为展示型组件，上层组件可以通过修改传入的 current 属性值来修改当前的步骤，同时可以设置每个节点的 click 事件，来自定义回调。

:::lang=en-us

# Controlled

- order: 6

By default, Step is defined as a display component. The upper component can modify the current step by modifying the value of the current property passed in. At the same time, each node's click event can be set to customize the callback.

:::

---


````jsx
import { Step, Button, Select } from '@alifd/next';

const StepItem = Step.Item, ButtonGroup = Button.Group;

class Component extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentStep: 3,
            stepType: 'circle',
            stepAnimation: true,
            labelPlacement: 'vertical'
        };

        this.onClick = this.onClick.bind(this);
    }
    next() {
        const s = this.state.currentStep + 1;

        this.setState({
            currentStep: s > 6 ? 6 : s
        });
    }
    prev() {
        const s = this.state.currentStep - 1;

        this.setState({
            currentStep: s < 0 ? 0 : s
        });
    }
    onClick(currentStep) {
        console.log(currentStep);

        this.setState({
            currentStep: currentStep
        });
    }
    onStepTypeChange(value) {
        this.setState({ stepType: value });
    }
    onStepAnimation(value) {
        this.setState({ stepAnimation: value });
    }
    onLabelPlacementChange(value) {
        this.setState({ labelPlacement: value });
    }
    render() {
        const {currentStep} = this.state;

        return (
            <div>
                <div className="custom-step-option">
                    <Select placeholder="Choose the dispaly type" onChange={this.onStepTypeChange.bind(this)} className="custom-select" defaultValue="circle">
                        {
                            ['circle', 'arrow', 'dot'].map(item => <Select.Option value={item} key={item}>{item}</Select.Option>)
                        }
                    </Select>

                    <Select placeholder="Label placement" onChange={this.onLabelPlacementChange.bind(this)} className="custom-select" defaultValue="vertical">
                        {
                            ['horizontal', 'vertical'].map(item => <Select.Option value={item} key={item}>{item}</Select.Option>)
                        }
                    </Select>


                    <Select placeholder="Enable animation" onChange={this.onStepAnimation.bind(this)} className="custom-select" defaultValue>
                        {
                            [true, false].map((item, index) => <Select.Option value={item} key={index}>{item ? 'animation on' : 'animation off'}</Select.Option>)
                        }
                    </Select>
                </div>

                <Step current={currentStep} shape={this.state.stepType} animation={this.state.stepAnimation} labelPlacement={this.state.labelPlacement}>
                    <StepItem title="Step 1" onClick={this.onClick} content="Description" />
                    <StepItem title="Step 2" onClick={this.onClick} content="Description" />
                    <StepItem title="Step 3" onClick={this.onClick} content="Description" />
                    <StepItem title="Step 4" onClick={this.onClick} content="Description" />
                    <StepItem title="Step 5" onClick={this.onClick} content="Description" />
                    <StepItem title="Step 6" onClick={this.onClick} content="Description" />
                </Step>
                <br />
                <br />
                <ButtonGroup>
                    <Button onClick={this.prev.bind(this)} type="primary" disabled={currentStep === 0}>Backward</Button>
                    <Button onClick={this.next.bind(this)} type="primary" disabled={currentStep === 6}>Forward</Button>
                </ButtonGroup>
            </div>
        );
    }
}

ReactDOM.render(<Component />, mountNode);
````

````css
.custom-step-option {
    margin-bottom: 20px;
}

.custom-select {
    margin-right: 20px;
}
````
