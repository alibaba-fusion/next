# Badge

-   category: Components
-   family: DataDisplay
-   chinese: 徽标数
-   type: 展示

---

## 开发指南

### 何时使用

在有新消息、讯息时，或者是app/插件/功能模块可以更新、升级时使用这个组件。

### 无障碍

可通过添加如下class，使内容仅能被读屏软件读取，但不会展示到页面上
`<span className="next-visually-hidden">unread messages</span>`

## API

### Badge

| 参数            | 说明                                                    | 类型            | 默认值   |
| ------------- | ----------------------------------------------------- | ------------- | ----- |
| children      | 徽章依托的内容                                               | ReactNode     | -     |
| count         | 展示的数字，大于 overflowCount 时显示为 ${overflowCount}+，为 0 时隐藏 | Number/String | 0     |
| content       | 自定义节点内容                                               | ReactNode     | -     |
| overflowCount | 展示的封顶的数字                                              | Number/String | 99    |
| dot           | 不展示数字，只展示一个小红点                                        | Boolean       | false |