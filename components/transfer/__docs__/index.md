# Transfer

-   category: Components
-   family: DataEntry
-   chinese: 穿梭框
-   type: 基本

---

双栏穿梭选择框。

## 何时使用

-   用直观的方式在两栏中移动元素，完成选择行为。
-   需要在多个可选项中进行多选时。
-   比起 Select 和 TreeSelect，穿梭框占据更大的空间，可以展示可选项的更多信息。

## API

### Transfer

| 参数                | 说明                                                                                                                                                                                                               | 类型                                                                                                                                   | 默认值      | 是否必填 |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------- | ----------- | -------- |
| mode                | 移动选项模式                                                                                                                                                                                                       | 'normal' \| 'simple'                                                                                                                   | 'normal'    |          |
| dataSource          | 数据源                                                                                                                                                                                                             | Array\<TransferDataItem>                                                                                                               | []          |          |
| value               | （用于受控）当前值                                                                                                                                                                                                 | Array\<string>                                                                                                                         | -           |          |
| defaultValue        | （用于非受控）初始值                                                                                                                                                                                               | Array\<string>                                                                                                                         | []          |          |
| onChange            | 值发生改变的时候触发的回调函数<br/><br/>**签名**:<br/>**参数**:<br/>_value_: 右面板值<br/>_data_: 右面板数据<br/>_extra_: 额外参数                                                                                 | (value: Array\<string>, data: Array\<TransferDataItem>, extra: ExtraOptions) => void                                                   | -           |          |
| onSelect            | Item 被选中的时候触发的回调函数<br/><br/>**签名**:<br/>**参数**:<br/>_sourceSelectedValue_: 源面板选中的 Item 列表<br/>_targetSelectedValue_: 目标面板选中的 Item 列表<br/>_target_: 触发面板 'source' \| 'target' | (<br/> sourceSelectedValue: Array\<string>,<br/> targetSelectedValue: Array\<string>,<br/> target: 'source' \| 'target'<br/> ) => void | -           |          |
| disabled            | 是否禁用                                                                                                                                                                                                           | boolean                                                                                                                                | false       |          |
| leftDisabled        | 是否禁用左侧面板                                                                                                                                                                                                   | boolean                                                                                                                                | false       |          |
| rightDisabled       | 是否禁用右侧面板                                                                                                                                                                                                   | boolean                                                                                                                                | false       |          |
| itemRender          | 列表项渲染函数<br/><br/>**签名**:<br/>**参数**:<br/>_data_: 数据<br/>**返回值**:<br/>列表项内容                                                                                                                    | (data: TransferDataItem) => React.ReactNode                                                                                            | -           |          |
| showSearch          | 左右面板是否显示搜索框                                                                                                                                                                                             | boolean \| [leftPanel: boolean, rightPanel: boolean]                                                                                   | false       |          |
| searchProps         | 左右面板搜索框配置                                                                                                                                                                                                 | SearchProps \| [leftPanel: SearchProps, rightPanel: SearchProps]                                                                       | -           |          |
| filter              | 自定义搜索函数<br/><br/>**签名**:<br/>**参数**:<br/>_searchedValue_: 搜索框输入的值<br/>_data_: 数据<br/>**返回值**:<br/>是否匹配到                                                                                | (searchedValue: string, data: TransferDataItem) => boolean                                                                             | -           |          |
| onSearch            | 搜索框输入时触发的回调函数<br/><br/>**签名**:<br/>**参数**:<br/>_searchedValue_: 搜索框输入的值<br/>_position_: 搜索面板的位置                                                                                     | (searchedValue: string, position: string) => void                                                                                      | -           |          |
| useVirtual          | 是否开启虚拟滚动                                                                                                                                                                                                   | boolean                                                                                                                                | -           |          |
| searchPlaceholder   | 搜索框占位符                                                                                                                                                                                                       | string                                                                                                                                 | -           |          |
| notFoundContent     | 列表为空显示内容                                                                                                                                                                                                   | React.ReactNode \| [leftPanel: React.ReactNode, rightPanel: React.ReactNode]                                                           | 'Not Found' |          |
| titles              | 左右面板标题                                                                                                                                                                                                       | [leftPanel: React.ReactNode, rightPanel: React.ReactNode]                                                                              | []          |          |
| operations          | 向右向左移动按钮显示内容                                                                                                                                                                                           | [leftPanel: React.ReactNode, rightPanel: React.ReactNode]                                                                              | []          |          |
| defaultLeftChecked  | 左面板默认选中值                                                                                                                                                                                                   | Array\<string>                                                                                                                         | []          |          |
| defaultRightChecked | 右面板默认选中值                                                                                                                                                                                                   | Array\<string>                                                                                                                         | []          |          |
| listClassName       | 左右面板列表自定义样式类名                                                                                                                                                                                         | string                                                                                                                                 | -           |          |
| listStyle           | 左右面板列表自定义样式对象                                                                                                                                                                                         | React.CSSProperties                                                                                                                    | -           |          |
| sortable            | 是否允许拖拽排序                                                                                                                                                                                                   | boolean                                                                                                                                | false       |          |
| onSort              | 拖拽排序时触发的回调函数<br/><br/>**签名**:<br/>**参数**:<br/>_value_: 右面板值<br/>_position_: 拖拽的面板位置，值为：left 或 right                                                                                | (value: Array\<string>, position: PositionType) => void                                                                                | -           |          |
| id                  | 请设置 id 以保证transfer的可访问性                                                                                                                                                                                 | string                                                                                                                                 | -           |          |
| showCheckAll        | 是否显示底部全选 checkbox                                                                                                                                                                                          | boolean                                                                                                                                | true        |          |
| children            | 接收 children 自定义渲染列表                                                                                                                                                                                       | (props: TransferPanelProps) => React.ReactNode                                                                                         | -           |          |

### TransferDataItem

```typescript
export type TransferDataItem = {
    label: string | React.ReactNode;
    value: string;
    title?: string;
    disabled?: boolean;
    children?: TransferDataItem[];
    [key: string]: unknown;
};
```

### PositionType

```typescript
export type PositionType = 'left' | 'right';
```

### DragGapType

```typescript
export type DragGapType = 'before' | 'after';
```

### ExtraOptions

```typescript
export type ExtraOptions = {
    /**
     * 移动的方向，值为'left'或'right'
     * @en Move direction, 'left' or 'right'
     */
    direction: PositionType;
    /**
     * 左面板值
     * @en Data of left panel
     */
    leftValue: string[];
    /**
     * 左面板数据
     * @en Data of left panel
     */
    leftData: TransferDataItem[];
    /**
     * 发生移动的数据
     * @en Moved data
     */
    movedData: TransferDataItem[];
    /**
     * 发生移动的值
     * @en Moved value
     */
    movedValue: string[];
};
```

## 无障碍键盘操作指南

| 按键       | 说明                                              |
| :--------- | :------------------------------------------------ |
| Up Arrow   | 获取当前项的前一项焦点                            |
| Down Arrow | 获取当前项的后一项焦点                            |
| Enter      | 当前列表选中的项移动到另一个列表                  |
| SPACE      | 选择/取消当前项或当前列表选中的项移动到另一个列表 |
