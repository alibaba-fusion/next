import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Dialog } from '@alifd/next';

interface DemoState {
    visible?: boolean;
    fullyCustomizedVisible?: boolean;
    textCustomizedVisible?: boolean;
}

class Demo extends React.Component {
    state: DemoState = {
        visible: false,
    };

    onOpenFullyCustomized = () => {
        this.setState({
            fullyCustomizedVisible: true,
        });
    };

    onCloseFullyCustomized = () => {
        this.setState({
            fullyCustomizedVisible: false,
        });
    };

    onOpenTextCustomized = () => {
        this.setState({
            textCustomizedVisible: true,
        });
    };

    onCloseTextCustomized = () => {
        this.setState({
            textCustomizedVisible: false,
        });
    };

    render() {
        return (
            <div>
                <Button onClick={this.onOpenFullyCustomized} type="primary">
                    Fully Customized Footer
                </Button>
                <br />
                <br />
                <Dialog
                    v2
                    title="Welcome to Alibaba.com"
                    footer={
                        <Button warning type="primary" onClick={this.onCloseFullyCustomized}>
                            Customize footer
                        </Button>
                    }
                    visible={this.state.fullyCustomizedVisible}
                    onOk={this.onCloseFullyCustomized}
                    onClose={this.onCloseFullyCustomized}
                >
                    Start your business here by searching a popular product
                </Dialog>
                <Button onClick={this.onOpenTextCustomized} type="primary">
                    Text Only Customize
                </Button>
                <Dialog
                    v2
                    title="Welcome to Alibaba.com"
                    visible={this.state.textCustomizedVisible}
                    onOk={this.onCloseTextCustomized}
                    onClose={this.onCloseTextCustomized}
                    okProps={{ children: 'Custom OK', className: 'asdf' }}
                    cancelProps={{ children: 'Custom Cancel' }}
                >
                    Start your business here by searching a popular product
                </Dialog>
            </div>
        );
    }
}

ReactDOM.render(<Demo />, mountNode);
