# 确认对话框/延迟关闭

- order: 2

在使用 `Dialog.alert`，`Dialog.confirm` 以及 `Dialog.show` 时，如果 `onOk` 返回 `Promise`，对话框会在 `Promise` resolve 时关闭，除非调用 `resolve(false)`。

:::lang=en-us
# Delay close

- order: 6

When using `Dialog.alert`, `Dialog.confirm`, and `Dialog.show`, if `onOk` returns a `Promise`, the dialog will close when the `Promise` resolves, unless `resolve(false)` is called.
:::

---

````jsx
import { useState } from 'react';
import { Button, Message, Dialog } from '@alifd/next';

const Demo = () => {
    const [visible, setVisible] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleOpen = () => setVisible(true);
    const handleClose = () => setVisible(false);
    const handleOk = () => {
        return new Promise(resolve => {
            setLoading(true);
            setTimeout(resolve, 2000);
        }).then(() => {
            Message.success('Deleted successfully!');
             setLoading(false);
             setVisible(false);
        });
    };

    return (<div style={{marginTop: 8}}>
        <Button onClick={handleOpen} type="primary">
            Dialog Promise
        </Button>
        <Dialog
            v2
            title="Welcome to Alibaba.com"
            visible={visible}
            okProps={{loading}}
            onOk={handleOk}
            onCancel={handleClose}
        >
            Start your business here by searching a popular product
        </Dialog>
    </div>);
}

const popupConfirm = () => {
    Dialog.confirm({
        v2: true,
        title: 'Confirm',
        content: 'confirm content confirm content...',
        onOk: () => console.log('ok'),
        onCancel: () => console.log('cancel')
    });
};

const popupCustomIcon = () => {
    Dialog.confirm({
        v2: true,
        title: 'Confirm',
        content: 'set icon as "warning" ',
        messageProps:{
            type: 'warning'
        },
        onOk: () => console.log('ok'),
        onCancel: () => console.log('cancel')
    });
};

const popupConfirmPromise = () => {
    Dialog.confirm({
        v2: true,
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

const style = {marginLeft: 8};

ReactDOM.render(<div>
    <Button onClick={popupConfirm}>Confirm</Button>
    <Button onClick={popupCustomIcon} style={style}>Custom Icon</Button>

    <br/><br/>
    <Button onClick={popupConfirmPromise}>Confirm Promise</Button>

    <Demo />
    <br/>
</div>
, mountNode);
````
