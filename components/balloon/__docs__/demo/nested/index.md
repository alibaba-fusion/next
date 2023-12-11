# zh-CN order=6

# 嵌套浮层问题

浮层中如果又有浮层，比如在`Balloon`中有`DatePicker/Select`的浮层, `DatePicker`选择时，`Balloon`浮层也会关闭。可以用 `followTrigger`解决。

# en-US order=6

# Nested

When popup is nested in another popup, say DatePicker is nested in Balloon, use `followTrigger` to avoid the unexpected Balloon's closing.
