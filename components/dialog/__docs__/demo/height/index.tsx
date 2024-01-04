import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Dialog } from '@alifd/next';

class Demo extends React.Component {
    state = {
        visible: false,
    };

    onOpen = () => {
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
        const { visible } = this.state;

        return (
            <div>
                <Button onClick={this.onOpen} type="primary">
                    Open dialog
                </Button>
                <Dialog
                    title="Fixed Height"
                    v2
                    visible={visible}
                    height="400px"
                    onOk={this.onClose}
                    onClose={this.onClose}
                >
                    Small Content in a fixed size Dialog
                </Dialog>
            </div>
        );
    }
}

ReactDOM.render(<Demo />, mountNode);
