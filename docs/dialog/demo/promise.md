# 延迟关闭

- order: 6

在使用 `Dialog.alert`，`Dialog.confirm` 以及 `Dialog.show` 时，如果 `onOk` 返回 `Promise`，对话框会在 `Promise` resolve 时关闭，除非调用 `resolve(false)`。

:::lang=en-us
# Delay close

- order: 6

When using `Dialog.alert`, `Dialog.confirm`, and `Dialog.show`, if `onOk` returns a `Promise`, the dialog will close when the `Promise` resolves, unless `resolve(false)` is called.
:::

---

````jsx
import { Button, Message, Dialog } from '@alifd/next';

class Demo extends React.Component {
    state = {
        visible: false,
        loading: false,
    };

    onOpen = () => {
        this.setState({
            visible: true
        });
    };

    onOk = () => {
        return new Promise(resolve => {
            this.setState({
                loading: true
            });
            setTimeout(resolve, 2000);
        }).then(() => {
            Message.success('Deleted successfully!');
            this.setState({
                loading: false,
                visible: false
            });
        });
    };

    onClose = () => {
        this.setState({
            visible: false
        });
    };

    render() {
        const okProps = {
            loading: this.state.loading
        };
        return (
            <div>
                <Button onClick={this.onOpen} type="primary">
                    Dialog Promise
                </Button>
                <Dialog
                    title="Welcome to Alibaba.com"
                    visible={this.state.visible}
                    okProps={okProps}
                    onOk={this.onOk}
                    onCancel={this.onClose}
                    onClose={this.onClose}>
                    Start your business here by searching a popular product
                </Dialog>
            </div>
        );
    }
}

const popupConfirm = () => {
    Dialog.confirm({
        title: 'Confirm',
        content: 'Do you confirm deleting this content?',
        onOk: () => {
            return new Promise(resolve => {
                setTimeout(resolve, 2000);
            }).then(() => {
                Message.success('Deleted successfully!');
            });
        }
    });
};

ReactDOM.render(<div>
    <Demo />
    <br/>
    <Button type="primary" warning onClick={popupConfirm}>Quick Confirm Promise</Button>
</div>
, mountNode);
````
