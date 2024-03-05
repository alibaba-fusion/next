import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Dialog } from '@alifd/next';
import type { DialogProps } from '../../../types';

class Demo extends React.Component {
    state = {
        visible: false,
    };

    onOpen = () => {
        this.setState({
            visible: true,
        });
    };

    onOk: DialogProps['onOk'] = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    onClose: DialogProps['onClose'] = (triggerType, e) => {
        console.log(triggerType, e);
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
                    onOk={this.onOk}
                    onClose={this.onClose}
                >
                    <p>Start your business here by searching a popular product</p>
                </Dialog>
            </div>
        );
    }
}

ReactDOM.render(<Demo />, mountNode);
