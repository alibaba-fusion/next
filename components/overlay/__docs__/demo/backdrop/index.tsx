import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Overlay, Button } from '@alifd/next';

class Demo extends Component {
    state = {
        visible: false,
    };

    btn: InstanceType<typeof Button> | null;

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
                        this.btn = ref;
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
