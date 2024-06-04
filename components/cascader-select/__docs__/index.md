# CascaderSelect

-   category: Components
-   family: DataEntry
-   chinese: 级联选择
-   type: 基本

---

级联选择。

## 何时使用

级联选择由选择器和级联组成。把级联组件以弹层的方式隐藏，多用于表单场景。

## API

### CascaderSelect

继承 Cascader, Select 的部分属性，支持透传给 Cascader 的属性有 dataSource, useVirtual, multiple, canOnlyCheckLeaf,
checkStrictly, resultRender, expandedValue, defaultExpandedValue, expandTriggerType, onExpand, listStyle,
listClassName, loadData, itemRender, immutable。支持透传给 Select 的包括除上面传给 Cascader 和下方单独列出的属性以外的其他全部属性。

| 参数            | 说明                                         | 类型                                                                                                                                               | 默认值   | 是否必填 |
| --------------- | -------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | -------- |
| size            | 选择框大小                                   | 'small' \| 'medium' \| 'large'                                                                                                                     | 'medium' |          |
| disabled        | 是否禁用                                     | boolean                                                                                                                                            | false    |          |
| hasArrow        | 是否有下拉箭头                               | boolean                                                                                                                                            | true     |          |
| hasBorder       | 是否有边框                                   | boolean                                                                                                                                            | true     |          |
| hasClear        | 是否有清除按钮                               | boolean                                                                                                                                            | false    |          |
| readOnly        | 是否只读，只读模式下可以展开弹层但不能选     | boolean                                                                                                                                            | -        |          |
| defaultValue    | （非受控）默认值                             | string \| Array\<string>                                                                                                                           | -        |          |
| value           | （受控）当前值                               | string \| Array\<string>                                                                                                                           | -        |          |
| onChange        | 选中值改变时触发的回调函数                   | (<br/> value: string \| Array\<string> \| null,<br/> data: CascaderDataItem \| Array\<CascaderDataItem> \| null,<br/> extra?: Extra<br/> ) => void | -        |          |
| changeOnSelect  | 是否选中即发生改变，该属性仅在单选模式下有效 | boolean                                                                                                                                            | false    |          |
| displayRender   | 选择框单选时展示结果的自定义渲染函数         | (<br/> label: Array\<React.ReactNode>,<br/> data?: CascaderSelectDataItem<br/> ) => React.ReactNode                                                | -        |          |
| showSearch      | 是否显示搜索框                               | boolean                                                                                                                                            | false    |          |
| filter          | 自定义搜索函数                               | (searchValue: string, path: CascaderSelectDataItem[]) => boolean                                                                                   | -        |          |
| onSearch        | 当搜索框值变化时回调                         | (value: string) => void                                                                                                                            | -        |          |
| resultAutoWidth | 搜索结果列表是否和选择框等宽                 | boolean                                                                                                                                            | true     |          |
| notFoundContent | 无数据时显示内容                             | React.ReactNode                                                                                                                                    | -        |          |
| header          | 自定义下拉框头部                             | React.ReactNode                                                                                                                                    | -        |          |
| footer          | 自定义下拉框底部                             | React.ReactNode                                                                                                                                    | -        |          |
| defaultVisible  | 初始下拉框是否显示                           | boolean                                                                                                                                            | false    |          |
| visible         | 当前下拉框是否显示                           | boolean                                                                                                                                            | -        |          |
| onVisibleChange | 下拉框显示或关闭时触发事件的回调函数         | (visible: boolean, type?: CascaderSelectVisibleChangeType) => void                                                                                 | -        |          |
| popupProps      | 透传到 Popup 的属性对象                      | React.ComponentPropsWithRef\<typeof Popup>                                                                                                         | -        |          |
| isPreview       | 是否为预览态                                 | boolean                                                                                                                                            | false    |          |
| renderPreview   | 自定义预览态                                 | (<br/> value: CascaderSelectDataItem \| CascaderSelectDataItem[],<br/> props: CascaderSelectProps<br/> ) => React.ReactNode                        | -        |          |
| treeCheckable   | -                                            | boolean                                                                                                                                            | -        |          |
| menuProps       | -                                            | Omit\<CascaderProps, 'onSelect' \| 'onChange'>                                                                                                     | -        |          |

<!-- api-extra-start -->

### dataSource数据结构

```js
const dataSource = [
    {
        value: '2974',
        label: '西安',
        children: [
            { value: '2975', label: '西安市', disabled: true },
            { value: '2976', label: '高陵县', checkboxDisabled: true },
            { value: '2977', label: '蓝田县' },
            { value: '2978', label: '户县' },
            { value: '2979', label: '周至县' },
            { value: '4208', label: '灞桥区' },
            { value: '4209', label: '长安区' },
            { value: '4210', label: '莲湖区' },
            { value: '4211', label: '临潼区' },
            { value: '4212', label: '未央区' },
            { value: '4213', label: '新城区' },
            { value: '4214', label: '阎良区' },
            { value: '4215', label: '雁塔区' },
            { value: '4388', label: '碑林区' },
            { value: '610127', label: '其它区' },
        ],
    },
];
```

数组中 Item 的自定义属性也会被透传到 onChange 函数的 data 参数中。

<!-- api-extra-end -->

## 无障碍键盘操作指南

| 按键        | 说明                                         |
| :---------- | :------------------------------------------- |
| Up Arrow    | 获取同级当前项前一项焦点                     |
| Down Arrow  | 获取同级当前项后一项焦点                     |
| Left Arrow  | 进入当前项的子元素，并获取第一个子元素为焦点 |
| Right Arrow | 返回当前项的父元素并获取焦点                 |
| Enter       | 打开目录或选择当前项                         |
| Esc         | 关闭目录                                     |
| SPACE       | 选择当前项                                   |
