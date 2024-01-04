import React from 'react';
import ReactDOM from 'react-dom';
import { Overlay, Button } from '@alifd/next';

class Demo extends React.Component {
    constructor(props) {
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
                        this.btn = ref;
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
