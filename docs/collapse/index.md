# Collapse

-   category: Components
-   family: DataDisplay
-   chinese: 折叠面板
-   type: 布局

---

折叠面板组件。

## 何时使用

- 对复杂区域进行分组和隐藏，保持页面的整洁。

- 手风琴 是一种特殊的折叠面板，只允许单个内容区域展开。

## API

### Collapse

| 参数                  | 说明                                                 | 类型       | 默认值       |
| ------------------- | -------------------------------------------------- | -------- | --------- |
| dataSource          | 使用数据模型构建                                           | Array    | -         |
| defaultExpandedKeys | 默认展开keys                                           | Array    | -         |
| expandedKeys        | 受控展开keys                                           | Array    | -         |
| onExpand            | 展开状态发升变化时候的回调<br><br>**签名**:<br>Function() => void | Function | func.noop |
| disabled            | 所有禁用                                               | Boolean  | -         |
| accordion           | 手风琴模式，一次只能打开一个                                     | Boolean  | false     |

### Collapse.Panel

| 参数       | 说明       | 类型        | 默认值 |
| -------- | -------- | --------- | --- |
| disabled | 是否禁止用户操作 | Boolean   | -   |
| title    | 标题       | ReactNode | -   |

## 无障碍键盘操作指南

| 按键    | 说明                   |
| :---- | :------------------- |
| Tab   | 切换到下一个collapse panel |
| Space | 切换collapse的折叠状态      |
