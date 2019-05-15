# 无障碍

- order: 7

通过设置`okProps`与`cancelProps`读取，请参考`ARIA and KeyBoard`。

:::lang=en-us
# Accessibility

- order: 7

Read this by setting `okProps` and `cancelProps`,Please refer to `ARIA and KeyBoard`.

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
    onClose = () => {
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
                    title="Welcome to Alibaba.com"
                    visible={this.state.visible}
                    autoFocus
                    onOk={this.onClose.bind(this, 'okClick')}
                    onCancel={this.onClose.bind(this, 'cancelClick')}
                    onClose={this.onClose}
                    cancelProps={{'aria-label':'cancel'}}
                    okProps={{'aria-label':'ok'}}>
                    <p tabIndex="0">  Start your business here by searching a popular product</p>
                </Dialog>
            </div>
        );
    }
}

ReactDOM.render(<Demo />, mountNode);

````
