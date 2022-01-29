# 基本

- order: 0

基本用法，打开和关闭。

:::lang=en-us
# Basic

- order: 0

First dialog
:::
---

````jsx
import { Button, Dialog } from '@alifd/next';

class Demo extends React.Component {
    state = {
        visible: false
    };
    
    onOpen = () => {
        this.setState({
            visible: true
        });
    };

    onClose = e => {
        console.log(e.triggerType);
        this.setState({
            visible: false
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
````