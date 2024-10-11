# Range

-   category: Components
-   family: DataEntry
-   chinese: 区段选择器
-   type: 表单

---

区间选择

## 何时使用

滑块控件(Sliders，简称滑块)可以让我们通过在连续或间断的区间内滑动锚点来选择一个合适的数值。区间最小值放在左边，对应的，最大值放在右边。滑块(Sliders)可以在滑动条的左右两端设定图标来反映数值的强度。这种交互特性使得它在设置诸如音量、亮度、色彩饱和度等需要反映强度等级的选项时成为一种极好的选择。

## 如何使用

-   onChange是和value进行配置做受控处理的。onChange在滑动过程中不会触发，滑动停止后会触发。
-   onProcess不建议内部做setState 进行受控，因为会频繁触发，整个滑动过程中会一直触发。

## API

### Range

| 参数           | 说明                                                                                                                                                                        | 类型                                                                       | 默认值            | 是否必填 |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------- | ----------------- | -------- |
| slider         | 滑块个数<br/><br/>**可选值**:<br/>'single'(单个)<br/>'double'(两个)                                                                                                         | 'single' \| 'double'                                                       | 'single'          |          |
| min            | 最小值                                                                                                                                                                      | number                                                                     | 0                 |          |
| max            | 最大值                                                                                                                                                                      | number                                                                     | 100               |          |
| step           | 步长，取值必须大于 0，并且可被 (max - min) 整除                                                                                                                             | number                                                                     | 1                 |          |
| value          | 设置当前取值。当 `slider` 为 `single` 时，使用 `Number`，否则用 `[Number, Number]`                                                                                          | RangeValueType                                                             | -                 |          |
| defaultValue   | 设置初始取值。当 `slider` 为 `single` 时，使用 `Number`，否则用 `[Number, Number]`                                                                                          | RangeValueType                                                             | -                 |          |
| marks          | 刻度数值显示逻辑（false 代表不显示，array 枚举显示的值，number 代表按 number 平分，object 表示按 key 划分，value 值显示）                                                   | false \| number \| Array\<number> \| Record\<number, string>               | false             |          |
| marksPosition  | marks显示在上方('above')or下方('below')<br/><br/>**可选值**:<br/>'above', 'below'                                                                                           | 'above' \| 'below'                                                         | 'above'           |          |
| disabled       | 值为 `true` 时，滑块为禁用状态                                                                                                                                              | boolean                                                                    | false             |          |
| onChange       | 当 Range 的值发生改变后，会触发 onChange 事件，并把改变后的值作为参数传入, 如果设置了value, 要配合此函数做受控使用<br/><br/>**签名**:<br/>**参数**:<br/>_value_: 改变后的值 | (value: RangeValueType) => void                                            | () =\> void       |          |
| onProcess      | 滑块拖动的时候触发的事件,不建议在这里setState, 一般情况下不需要用, 滑动时有特殊需求时使用<br/><br/>**签名**:<br/>**参数**:<br/>_value_: 改变后的值                          | (value: RangeValueType) => void                                            | () =\> void       |          |
| hasTip         | 是否显示 tip                                                                                                                                                                | boolean                                                                    | true              |          |
| tipRender      | 自定义 tip 显示内容<br/><br/>**签名**:<br/>**参数**:<br/>_value_: 改变后的值<br/>**返回值**:<br/>React.ReactNode                                                            | (value: number \| string) => React.ReactNode                               | (value) =\> value |          |
| reverse        | 选中态反转                                                                                                                                                                  | boolean                                                                    | false             |          |
| pure           | 是否pure render                                                                                                                                                             | boolean                                                                    | false             |          |
| fixedWidth     | 是否为拖动线段类型，默认slider为double, defaultValue必传且指定区间                                                                                                          | boolean                                                                    | false             |          |
| tooltipVisible | tooltip是否默认展示                                                                                                                                                         | boolean                                                                    | false             |          |
| isPreview      | 是否为预览态                                                                                                                                                                | boolean                                                                    | false             |          |
| renderPreview  | 预览态模式下渲染的内容<br/><br/>**签名**:<br/>**参数**:<br/>_value_: 改变后的值<br/>_props_: RangeProps<br/>**返回值**:<br/>React.ReactNode                                 | (value: RangeValueType \| undefined, props: RangeProps) => React.ReactNode | -                 |          |

### RangeValueType

```typescript
export type RangeValueType = number | [number, number];
```

## 无障碍键盘操作指南

| 按键        | 说明             |
| :---------- | :--------------- |
| Right Arrow | 控制滑块往右移动 |
| Left Arrow  | 控制滑块向左移动 |
| Tab         | 切换滑动条       |
