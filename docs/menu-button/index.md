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

| 参数                  | 说明                                                     | 类型        | 默认值       |
| ------------------- | ------------------------------------------------------ | --------- | --------- |
| label               | 按钮上的文本内容                                               | ReactNode | -         |
| autoWidth           | 弹层是否与按钮宽度相同                                            | Boolean   | true      |
| popupTriggerType    | 弹层触发方式<br><br>**可选值**:<br>'click', 'hover'             | Enum      | 'click'   |
| popupContainer      | 弹层容器                                                   | any       | -         |
| visible             | 弹层展开状态                                                 | Boolean   | -         |
| defaultVisible      | 弹层默认是否展开                                               | Boolean   | -         |
| onVisibleChange     | 弹层在显示和隐藏触发的事件<br><br>**签名**:<br>Function() => void     | Function  | func.noop |
| popupStyle          | 弹层自定义样式                                                | Object    | -         |
| popupClassName      | 弹层自定义样式类                                               | String    | -         |
| popupProps          | 弹层属性透传                                                 | Object    | -         |
| followTrigger       | 是否跟随滚动                                                 | Boolean   | -         |
| defaultSelectedKeys | 默认激活的菜单项（用法同 Menu 非受控）                                 | Array     | \[]       |
| selectedKeys        | 激活的菜单项（用法同 Menu 受控）                                    | Array     | -         |
| selectMode          | 菜单的选择模式，同 Menu<br><br>**可选值**:<br>'single', 'multiple' | Enum      | -         |
| onItemClick         | 点击菜单项后的回调，同 Menu<br><br>**签名**:<br>Function() => void  | Function  | func.noop |
| onSelect            | 选择菜单后的回调，同 Menu<br><br>**签名**:<br>Function() => void   | Function  | func.noop |
| menuProps           | 菜单属性透传                                                 | Object    | {}        |
