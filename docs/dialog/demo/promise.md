# 延迟关闭

- order: 6

在使用 Dialog.alert，Dialog.confirm 以及 Dialog.show 时，如果 onOk 返回 Promise，对话框会在 Promise resolve 时关闭，除非调用 `resolve(false)`。

:::lang=en-us
# Delay close

- order: 6

When using Dialog.alert, Dialog.confirm, and Dialog.show, if onOk returns a Promise, the dialog will close when the Promise resolves, unless `resolve(false)` is called.
:::

---

````jsx
import { Button, Message, Dialog } from '@alifd/next';


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

ReactDOM.render(<Button type="primary" warning onClick={popupConfirm}>Delete</Button>, mountNode);
````
