# 快捷调用

- order: 5

Dialog 提供 alert 和 confirm 的快掉调用方式，以及更底层的 show 方式。

:::lang=en-us
# Quick call

- order: 5

The Dialog provides quick methods called alert and confirm, as well as a lower-level show method.
:::

---

````jsx
import { Button, Dialog } from '@alifd/next';


const popupAlert = () => {
    Dialog.alert({
        title: 'Alert',
        content: 'alert content alert content...',
        onOk: () => console.log('ok')
    });
};

const popupConfirm = () => {
    Dialog.confirm({
        title: 'Confirm',
        content: 'confirm content confirm content...',
        onOk: () => console.log('ok'),
        onCancel: () => console.log('cancel')
    });
};

const popupCustom = () => {
    const dialog = Dialog.show({
        title: 'Custom',
        content: 'custom content custom content...',
        footer: (
            <Button warning type="primary" onClick={() => dialog.hide()}>
                Custom button
            </Button>
        )
    });
};

ReactDOM.render(<span>
    <Button onClick={popupAlert}>Alert</Button> &nbsp;
    <Button onClick={popupConfirm}>Confirm</Button> &nbsp;
    <Button onClick={popupCustom}>Custom</Button>
</span>, mountNode);
````
