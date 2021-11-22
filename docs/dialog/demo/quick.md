# 快捷调用

- order: 1

`Dialog` 提供 `alert` 和 `confirm` 的快掉调用方式，以及更底层的 `show` 方式。

:::lang=en-us
# Quick call

- order: 1

The `Dialog` provides quick methods called `alert` and `confirm`, as well as a lower-level `show` method.
:::

---

````jsx
import { Button, Dialog, ConfigProvider, Box } from '@alifd/next';

const config = {
    v2: true,
    title: 'Quick',
    content: 'content content content...'
};
const popupError = () => {
  const dialog = Dialog.error({
    title: "Error",
    content: "custom content custom content...",
    footer: (
      <Button warning type="primary" onClick={() => dialog.hide()}>
        Custom button
      </Button>
    )
  });
};

const popupShow = () => {
  const dialog = Dialog.show({
    title: "Custom",
    content: "custom content custom content..."
  });
};

ReactDOM.render(
    <ConfigProvider locale={{ Dialog: { ok: 'OK', cancel: 'Cancel' } }}>
        <Box direction="row" spacing={8}>
            <Button onClick={() => Dialog.success(config)}>Success</Button>
            <Button onClick={popupError}>Error</Button>
            <Button onClick={() => Dialog.warning(config)}>Warning</Button>
            <Button onClick={() => Dialog.notice(config)}>Notice</Button>
            <Button onClick={() => Dialog.help(config)}>Help</Button>
            <Button onClick={popupShow}>show</Button>
        </Box>
    </ConfigProvider>,
    mountNode
);
````
