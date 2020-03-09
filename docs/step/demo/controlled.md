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
import { Step, Button, Select, Icon } from '@alifd/next';

const StepItem = Step.Item, ButtonGroup = Button.Group;

const renders = {
    1: function itemRender1(index) {
        return <div className="custom-node1"><span>{index + 1}</span></div>;
    },
    2: function itemRender2(index, status) {
        return <div className="custom-node2">{status === 'finish' ? <Icon type="success" /> : <span>{index + 1}</span>} </div>;
    }
};
const contents = [
  'Description1',
  'Description2 --- Very Looooooooooooooooooooooog content',
  'Description3'
];

class Component extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentStep: 3,
            stepType: 'circle',
            stepAnimation: true,
            labelPlacement: 'ver'
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
    onItemRenderChange(value) {
        this.setState({ itemRender: renders[value], content: contents[value]});
    }
    render() {
        const {currentStep} = this.state;

        return (
            <div>
                <div className="custom-step-option">
                    <Select innerBefore="shape:" placeholder="Choose the dispaly type" onChange={this.onStepTypeChange.bind(this)} className="custom-select" defaultValue="circle">
                        {
                            ['circle', 'arrow', 'dot'].map(item => <Select.Option value={item} key={item}>{item}</Select.Option>)
                        }
                    </Select>

                    <Select innerBefore="labelPlacement:" placeholder="Label placement" onChange={this.onLabelPlacementChange.bind(this)} className="custom-select" defaultValue="hoz">
                        {
                            ['hoz', 'ver'].map(item => <Select.Option value={item} key={item}>{item}</Select.Option>)
                        }
                    </Select>

                    <Select innerBefore="animation:" placeholder="Enable animation" onChange={this.onStepAnimation.bind(this)} className="custom-select" defaultValue>
                        {
                            [true, false].map((item, index) => <Select.Option value={item} key={index}>{item ? 'on' : 'off'}</Select.Option>)
                        }
                    </Select>

                    <Select innerBefore="render:" placeholder="Choose itemRender" onChange={this.onItemRenderChange.bind(this)} className="custom-select" defaultValue={0}>
                        {
                            ['ItemRender', 'ItemRender1', 'ItemRender2'].map((item, index) => <Select.Option value={index} key={index}>{item}</Select.Option>)
                        }
                    </Select>
                </div>

                <Step itemRender={this.state.itemRender} current={currentStep} shape={this.state.stepType} animation={this.state.stepAnimation} labelPlacement={this.state.labelPlacement}>
                    <StepItem title="Step 1" onClick={this.onClick} content="Description" />
                    <StepItem title="Step 2" onClick={this.onClick} content="Description" />
                    <StepItem title="Step 3" onClick={this.onClick} content={this.state.content || 'Description1'} />
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
.next-input-inner.next-before {
    margin-left: 8px;
}.fusion-demo-item {
     margin: 15px 0;
 }
 .custom-node1 {
     height: 100%;
     width: 100%;
     border-radius: 20%;
     border: 1px dashed #3E71F1;
     text-align: center;
 }
 .custom-node1 span {
     font-size: 12px;
 
     position: absolute;
     top: 50%;
     text-align: center;
     width: 100%;
     left: 0;
     transform: translateY(-50%);
 }
 .custom-node2 {
     height: 100%;
     width: 100%;
     border-radius: 20%;
     border: 1px dashed #3E71F1;
     text-align: center;
     background: #3E71F1;
     color: #fff;
     position: relative;
 }
 
 .custom-node2 span, .custom-node2 i {
     position: absolute;
     top: 50%;
     transform: translateY(-50%);
     left: 0;
     width: 100%;
     text-align: center;
 }

````
