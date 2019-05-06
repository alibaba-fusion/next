# 定制底部按钮

- order: 8

使用 'height' 道具设置 Dialog 高度风格。还将页尾底部的位置。
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
        const { visible, footerActions, footerAlign, loading } = this.state;
        const okProps = {
            loading
        };

        return (
            <div>
                <Button onClick={this.onOpen} type="primary">
                    Open dialog
                </Button>
                <Dialog title="Fixed Height"
                    visible={visible}
                    height="400px"
                    onOk={this.onClose}
                    onCancel={this.onClose}
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