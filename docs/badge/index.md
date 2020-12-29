# Badge

-   category: Components
-   family: DataDisplay
-   chinese: 徽标数
-   type: 展示

---

图标右上角的圆形徽标数字。

## 何时使用

-   一般出现在通知图标或头像的右上角，用于显示需要处理的消息条数，通过醒目视觉形式吸引用户处理。
-   在有新消息、讯息时，或者是app/插件/功能模块可以更新、升级时使用这个组件。

## API

### Badge

| 参数            | 说明                                                                                                     | 类型            | 默认值   | 版本支持 |
| ------------- | ------------------------------------------------------------------------------------------------------ | ------------- | ----- | ---- |
| children      | 徽标依托的内容，一般显示在其右上方                                                                                      | ReactNode     | -     |      |
| count         | 展示的数字，大于 `overflowCount` 时显示为 `${overflowCount}+`，为 `0` 时默认隐藏<br/><br/>**可选参数类型:** _Number_ / _String_ | Number/String | 0     |      |
| showZero      | 当`count`为`0`时，是否显示count                                                                                | Boolean       | false | 1.16 |
| content       | 自定义徽标中的内容                                                                                              | ReactNode     | -     |      |
| overflowCount | 展示的封顶的数字<br/><br/>**可选参数类型:** _Number_ / _String_                                                      | Number/String | 99    |      |
| dot           | 不展示数字，只展示一个小红点                                                                                         | Boolean       | false |      |

## 无障碍键盘操作指南

-   `Badge`组件本身不涉及键盘操作，若可点击也应当是`Badge`与其`chilren`整体可聚焦点击；
-   无障碍配置方式参见[#无障碍支持](#accessibility-container)。
