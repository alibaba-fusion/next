# 固定高度

- order: 5

使用 `height` 属性设置 `Dialog` 整体高度。
:::lang=en-us
# Set fixed Dialog height

- order: 8

Use `height` prop to set Dialog height style. Will also position footer at bottom.
:::

---

````jsx
import { Button, Dialog } from '@alifd/next';

class Demo extends React.Component {
    state = {
        visible: false,
    };

    onOpen = () => {
        this.setState({
            visible: true
        });
    }

    onClose = () => {
        this.setState({
            visible: false
        });
    };

    render() {
        const { visible } = this.state;

        return (
            <div>
                <Button onClick={this.onOpen} type="primary">
                    Open dialog
                </Button>
                <Dialog title="Fixed Height"
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
````
