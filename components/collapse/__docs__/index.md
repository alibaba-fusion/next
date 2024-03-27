# Collapse

-   category: Components
-   family: DataDisplay
-   chinese: 折叠面板
-   type: 布局

---

折叠面板组件。

## 何时使用

-   对复杂区域进行分组和隐藏，保持页面的整洁。

-   手风琴 是一种特殊的折叠面板，只允许单个内容区域展开。

## API

### Collapse

| 参数                | 说明                         | 类型                                         | 默认值 | 是否必填 |
| ------------------- | ---------------------------- | -------------------------------------------- | ------ | -------- |
| dataSource          | 使用数据模型构建             | Array\<DataItem>                             | -      |          |
| defaultExpandedKeys | 默认展开 keys                | KeyType[]                                    | -      |          |
| expandedKeys        | 受控展开 keys                | KeyType[]                                    | -      |          |
| onExpand            | 展开状态发升变化时候的回调   | (expandedKeys: KeyType \| KeyType[]) => void | -      |          |
| disabled            | 所有禁用                     | boolean                                      | -      |          |
| accordion           | 手风琴模式，一次只能打开一个 | boolean                                      | false  |          |

### Collapse.Panel

| 参数       | 说明             | 类型                                                                                               | 默认值 | 是否必填 |
| ---------- | ---------------- | -------------------------------------------------------------------------------------------------- | ------ | -------- |
| disabled   | 是否禁止用户操作 | boolean                                                                                            | -      |          |
| title      | 标题             | React.ReactNode                                                                                    | -      |          |
| isExpanded | 是否展开         | boolean                                                                                            | false  |          |
| onClick    | 点击回调函数     | \| ((e: React.MouseEvent\<HTMLElement> \| React.KeyboardEvent\<HTMLElement>) => void)<br/> \| null | -      |          |

### KeyType

```typescript
export type KeyType = string | number;
```

### DataItem

```typescript
export type DataItem = {
    id?: string;
    title?: React.ReactNode;
    content?: React.ReactNode;
    disabled?: boolean;
    key?: KeyType;
    onClick?: (key: KeyType) => void;
    [propName: string]: unknown;
};
```

## 无障碍键盘操作指南

| 按键  | 说明                        |
| :---- | :-------------------------- |
| Tab   | 切换到下一个 collapse panel |
| Space | 切换 collapse 的折叠状态    |
