# zh-CN order=2

# 自定义返回值

当组件返回的数据和最终期望提交的格式不一致的时候，可以使用 `getValueFormatter` 和 `setValueFormatter` 两个函数做转换。

比如 switch 组件期望上报 0/1, date-picker 组件期望上报 YYYY-MM-DD 这种字符串格式

# en-US order=2

# custom event value

eg: you want get 0/1 from switch, or YYYY-MM-DD string from date-picker, you can use `getValueFormatter` 和 `setValueFormatter`
