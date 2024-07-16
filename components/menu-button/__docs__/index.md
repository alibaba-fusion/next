# MenuButton

-   category: Components
-   family: General
-   chinese: 菜单按钮
-   type: 基本

---

提供下拉菜单的按钮。

## 如何使用

1.  通过触发按钮打开弹层菜单。支持透传所有的 Button 属性。
2.  子组件 `Item`, `Group`, `Divider` 即 `Menu` 中对应的子组件，请参考 Menu 文档。

## API

### MenuButton

| 参数                | 说明                                                                                                                                                                 | 类型                                                            | 默认值  | 是否必填 |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- | ------- | -------- |
| label               | 按钮上的文本内容                                                                                                                                                     | React.ReactNode                                                 | -       |          |
| autoWidth           | 弹层是否与按钮宽度相同                                                                                                                                               | boolean                                                         | true    |          |
| popupTriggerType    | 弹层触发方式                                                                                                                                                         | 'click' \| 'hover'                                              | 'click' |          |
| popupContainer      | 弹层容器                                                                                                                                                             | string \| HTMLElement \| ((target: HTMLElement) => HTMLElement) | -       |          |
| visible             | 弹层展开状态                                                                                                                                                         | boolean                                                         | -       |          |
| defaultVisible      | 弹层默认是否展开                                                                                                                                                     | boolean                                                         | -       |          |
| onVisibleChange     | 弹层在显示和隐藏触发的事件                                                                                                                                           | (visible: boolean, type: string) => void                        | -       |          |
| popupStyle          | 弹层自定义样式                                                                                                                                                       | React.CSSProperties                                             | -       |          |
| popupClassName      | 弹层自定义样式类                                                                                                                                                     | string                                                          | -       |          |
| popupProps          | 弹层属性透传                                                                                                                                                         | PopupProps                                                      | -       |          |
| followTrigger       | 菜单是否跟随滚动                                                                                                                                                     | boolean                                                         | -       |          |
| defaultSelectedKeys | 默认激活的菜单项（用法同 Menu 非受控）                                                                                                                               | Array\<string>                                                  | []      |          |
| selectedKeys        | 激活的菜单项（用法同 Menu 受控）                                                                                                                                     | string \| Array\<string>                                        | -       |          |
| selectMode          | 菜单的选择模式，同 Menu                                                                                                                                              | 'single' \| 'multiple'                                          | -       |          |
| onItemClick         | 点击菜单项后的回调，同 Menu<br/><br/>**签名**:<br/>**参数**:<br/>_key_: 点击的菜单项的 key 值<br/>_item_: 点击的菜单项对象<br/>_event_: 事件对象                     | MenuProps['onItemClick']                                        | -       |          |
| onSelect            | 选择菜单后的回调，同 Menu<br/><br/>**签名**:<br/>**参数**:<br/>_selectedKeys_: 选中的所有菜单项的值<br/>_item_: 选中或取消选中的菜单项<br/>_extra_: 选中时的额外参数 | MenuProps['onSelect']                                           | -       |          |
| menuProps           | 菜单属性透传                                                                                                                                                         | MenuProps                                                       | -       |          |
