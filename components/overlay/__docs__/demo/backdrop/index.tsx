import React from 'react';
import ReactDOM from 'react-dom';
import { Overlay, Button } from '@alifd/next';
import { OverlayProps, OverlayState } from '../../../types';
import { ButtonProps } from '@alifd/meet-react/lib/button';

class Demo extends React.Component<OverlayProps, OverlayState> {
    btn: ButtonProps;
    constructor(props: OverlayProps) {
        super(props);

        this.state = {
            visible: false,
        };
    }

    onClick = () => {
        this.setState({
            visible: true,
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
                    Open
                </Button>
                <Overlay
                    v2
                    visible={this.state.visible}
                    safeNode={() => this.btn}
                    align="cc cc"
                    hasMask
                    disableScroll
                    onRequestClose={this.onClose}
                >
                    <span className="overlay-demo">Hello World From Overlay!</span>
                </Overlay>
            </div>
        );
    }
}

ReactDOM.render(<Demo />, mountNode);
