# zh-CN order=2

# 确认对话框/延迟关闭

在使用 `Dialog.alert`，`Dialog.confirm` 以及 `Dialog.show` 时，如果 `onOk` 返回 `Promise`，对话框会在 `Promise` resolve 时关闭，除非调用 `resolve(false)`。

# en-US order=6

# Delay close

When using `Dialog.alert`, `Dialog.confirm`, and `Dialog.show`, if `onOk` returns a `Promise`, the dialog will close when the `Promise` resolves, unless `resolve(false)` is called.
