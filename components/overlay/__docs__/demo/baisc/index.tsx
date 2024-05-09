import React from 'react';
import ReactDOM from 'react-dom';
import { Overlay, Button } from '@alifd/next';
import type { OverlayProps } from '@alifd/next/lib/overlay';
import type { ButtonProps } from '@alifd/next/lib/button';

class Demo extends React.Component<OverlayProps, { visible: boolean }> {
    btn: ButtonProps;

    constructor(props: OverlayProps) {
        super(props);

        this.state = {
            visible: false,
        };
    }

    onClick = () => {
        this.setState({
            visible: !this.state.visible,
        });
    };

    onClose = () => {
        this.setState({
            visible: false,
        });
    };

    render() {
        return (
            <div>
                <Button
                    onClick={this.onClick}
                    ref={ref => {
                        this.btn = ref as ButtonProps;
                    }}
                >
                    Toggle visible
                </Button>
                <Overlay
                    v2
                    visible={this.state.visible}
                    target={() => this.btn}
                    safeNode={() => this.btn}
                    onRequestClose={this.onClose}
                >
                    <span className="overlay-demo">Hello World From Overlay!</span>
                </Overlay>
            </div>
        );
    }
}

ReactDOM.render(<Demo />, mountNode);
