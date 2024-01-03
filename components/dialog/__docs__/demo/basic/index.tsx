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

    onClose = e => {
        console.log(e.triggerType);
        this.setState({
            visible: false,
        });
    };

    render() {
        return (
            <div>
                <Button onClick={this.onOpen} type="primary">
                    Open dialog
                </Button>
                <Dialog
                    v2
                    title="Welcome to Alibaba.com"
                    visible={this.state.visible}
                    onOk={this.onClose}
                    onClose={this.onClose}
                >
                    <p>Start your business here by searching a popular product</p>
                </Dialog>
            </div>
        );
    }
}

ReactDOM.render(<Demo />, mountNode);
