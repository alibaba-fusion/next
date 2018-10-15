# 内容较多的对话框

当对话框高度超过浏览器视口高度时，默认会让对话框 Body 区域出现滚动条，以保证底部按钮可以直接出现在视口内，方便操作，如果你想不想出现滚动条，而是展示对话框内所有内容，请设置 isFullScreen 为 true。

- order: 4

:::lang=en-us
# Large content dialog

- order: 4

When the height of the dialog exceeds the viewport height of the browser, the default is to have the scroll bar appear in the body area of the dialog. This ensures that the bottom button can appear directly in the viewport, which is convenient to operate. If you don't want to show a scroll bar, please set isFullScreen to true to show all the content of the dialog.
:::

---

````jsx
import { Switch, Button, Dialog } from '@alifd/next';


const largeContent = new Array(30).fill(
    <p>Start your business here by searching a popular product</p>
);

class Demo extends React.Component {
    state = {
        visible: false,
        isFullScreen: false
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

    toggleIsFullScreen = () => {
        this.setState({
            isFullScreen: !this.state.isFullScreen
        });
    }

    render() {
        const { visible, isFullScreen } = this.state;

        return (
            <div>
                <div style={{ display: 'block', marginBottom: '10px' }}>
                    When the height of the dialog exceeds the viewport height of the browser, whether to show the scroll bar:
                </div>
                <Switch style={{ display: 'block', marginBottom: '10px' }} checked={isFullScreen} onChange={this.toggleIsFullScreen} />
                <Button onClick={this.onOpen} type="primary">
                    Open dialog
                </Button>
                <Dialog title="Welcome to Alibaba.com"
                    visible={visible}
                    isFullScreen={isFullScreen}
                    onOk={this.onClose}
                    onCancel={this.onClose}
                    onClose={this.onClose}>
                    {largeContent}
                </Dialog>
            </div>
        );
    }
}

ReactDOM.render(<Demo />, mountNode);
````
