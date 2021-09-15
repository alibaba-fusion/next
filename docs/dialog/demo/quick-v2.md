# 快捷调用 v2

- order: 11

通过 v2 开启固定位置的快捷弹窗

:::lang=en-us
# Quick call

- order: 1

The `Dialog` provides quick methods called `alert` and `confirm`, as well as a lower-level `show` method.
:::

---

````jsx
import { Button, Dialog, ConfigProvider, Box } from '@alifd/next';

const popupAlert = () => {
    Dialog.alert({
        v2: true,
        title: 'Alert',
        content: 'alert content alert content...',
        okProps: {children: 'Custom OK' },
        onOk: () => console.log('ok')
    });
};

const popupConfirm = () => {
    Dialog.confirm({
        v2: true,
        title: 'Confirm',
        content: 'confirm content confirm content...',
        onOk: () => console.log('ok'),
        onCancel: () => console.log('cancel')
    });
};

const popupShow = () => {
    const dialog = Dialog.show({
        v2: true,
        title: 'Custom',
        content: 'custom content custom content...',
        footer: (
            <Button warning type="primary" onClick={() => dialog.hide()}>
                Custom button
            </Button>
        )
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

ReactDOM.render(
    <ConfigProvider locale={{ Dialog: { ok: 'OK', cancel: 'Cancel' } }}>
        <Box direction="row" spacing={20}>
            <Button onClick={popupAlert}>Alert</Button>
            <Button onClick={popupConfirm}>Confirm</Button>
            <Button onClick={popupShow}>Show</Button>
            <Button onClick={popupCustomIcon}>Custom Icon</Button>
        </Box>
    </ConfigProvider>,
    mountNode
);
````
