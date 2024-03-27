# Loading

-   category: Components
-   family: Feedback
-   chinese: 加载
-   type: 基本

---

加载组件，用于页面和区块的加载中状态。

## 何时使用

页面局部处于等待异步数据或正在渲染过程时，合适的加载动效会有效缓解用户的焦虑。

## 如何使用

Loading 默认使用 `display='inline-block'` 布局的方式包裹内部元素。

如果希望**通栏包裹**， 可以修改 `<Loading style={{display: 'block'}} />`。

## API

### Loading

| 参数            | 说明                                                                                                                                                                                                        | 类型                                        | 默认值   | 是否必填 |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------- | -------- | -------- |
| tip             | 自定义内容，可以传入 string 或 reactElement                                                                                                                                                                 | React.ReactNode \| string                   | -        |          |
| tipAlign        | 自定义内容位置                                                                                                                                                                                              | 'right' \| 'bottom'                         | 'bottom' |          |
| visible         | loading 状态, 默认 true                                                                                                                                                                                     | boolean                                     | true     |          |
| size            | 设置动画尺寸                                                                                                                                                                                                | 'large' \| 'medium'                         | 'large'  |          |
| indicator       | 自定义动画                                                                                                                                                                                                  | React.ReactNode                             | -        |          |
| color           | 动画颜色                                                                                                                                                                                                    | string                                      | -        |          |
| fullScreen      | 全屏展示                                                                                                                                                                                                    | boolean                                     | -        |          |
| disableScroll   | 当点击 document 的时候，如果包含该节点则不会关闭弹层，<br/>如果是函数需要返回 ref，如果是字符串则是该 DOM 的 id，也可以直接传入 DOM 节点，或者以上值组成的数组<br/>是否禁用滚动，仅在 fullScreen 模式下生效 | boolean                                     | false    |          |
| children        | 子元素                                                                                                                                                                                                      | React.ReactNode                             | -        |          |
| onVisibleChange | 全屏模式下，loading弹层请求关闭时触发的回调函数<br/><br/>**签名**:<br/>**参数**:<br/>_type_: 弹层关闭的来源<br/>_e_: DOM 事件                                                                               | (type: string, e: React.MouseEvent) => void | -        |          |
| safeNode        | 安全节点，仅在 fullScreen 时有效                                                                                                                                                                            | PopupProps['safeNode']                      | -        |          |

## 无障碍键盘操作指南

| 按键 | 说明                                                    |
| :--- | :------------------------------------------------------ |
| Esc  | 全屏模式下onVisibleChange接收的键盘事件，用于退出加载态 |
