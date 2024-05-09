import React from 'react';
import ReactDOM from 'react-dom';
import { Step, Button } from '@alifd/next';
import type { StepProps } from '@alifd/next/types/step';

const StepItem = Step.Item,
    ButtonGroup = Button.Group;

type stateType = {
    currentStep: number;
};
class Component extends React.Component<StepProps, stateType> {
    constructor(props: StepProps) {
        super(props);

        this.state = {
            currentStep: 3,
        };
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
    render() {
        const { currentStep } = this.state;

        return (
            <div>
                <Step current={currentStep} readOnly>
                    <StepItem title="Step 1" onClick={this.onClick.bind(this)} />
                    <StepItem title="Step 2" onClick={this.onClick.bind(this)} />
                    <StepItem title="Step 3" onClick={this.onClick.bind(this)} />
                    <StepItem title="Step 4" onClick={this.onClick.bind(this)} />
                    <StepItem title="Step 5" onClick={this.onClick.bind(this)} />
                    <StepItem title="Step 6" onClick={this.onClick.bind(this)} />
                </Step>
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
                        disabled={currentStep === 6}
                    >
                        Forward
                    </Button>
                </ButtonGroup>
            </div>
        );
    }
}

ReactDOM.render(<Component />, mountNode);
