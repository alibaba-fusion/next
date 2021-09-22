# 滚动条

当对话框内容超出视窗时候，对话框默认撑开高度，会出现滚动条。可以通过设置 `overflowScroll` 让对话框出现滚动条。

- order: 4

:::lang=en-us
# Large content dialog

- order: 4

When the height of the dialog exceeds the viewport height of the browser, the default is to have the scroll bar appear in the body area of the dialog. This ensures that the bottom button can appear directly in the viewport, which is convenient to operate. If you don't want to show a scroll bar, please set overflowScroll to true to show all the content of the dialog.
:::

---

````jsx
import { Switch, Button, Dialog, Icon } from '@alifd/next';

const largeContent = new Array(60).fill().map(
    (_, index) => <p key={index}>Start your business here by searching a popular product</p>
);

class Demo extends React.Component {
    state = {
        visible: false,
        overflowScroll: true,
        count: 25,
    };

    onOpen = () => {
        this.setState({
            visible: true,
            count: 25,
        });
    };

    onClose = () => {
        this.setState({
            visible: false
        });
    };

    toggleOverflowScroll = () => {
        this.setState({
            overflowScroll: !this.state.overflowScroll
        });
    }

    render() {
        const { visible, overflowScroll, closeOnMaskClick, count } = this.state;

        return (
            <div>
                <Switch autoWidth
                    checkedChildren="滚动"
                    unCheckedChildren="铺开"
                    checked={overflowScroll} onChange={this.toggleOverflowScroll} />
                <br/><br/>
                <Button onClick={this.onOpen} type="primary">
                    Open dialog
                </Button>
                <Dialog title="Welcome to Alibaba.com"
                    v2
                    centered
                    visible={visible}
                    width={600}
                    overflowScroll={overflowScroll}
                    onOk={this.onClose}
                    onCancel={this.onClose}
                >
                    {Array(count).fill().map((_, index) => 
                        <p key={index}>a long long content here 
                            <Button
                                text
                                type="primary"
                                style={{marginLeft: 10}}
                                onClick={() => this.setState({count: count - 1})}>
                                <Icon type="ashbin" />
                            </Button>
                        </p>
                    )}
                </Dialog>
            </div>
        );
    }
}

ReactDOM.render(<Demo />, mountNode);
````
