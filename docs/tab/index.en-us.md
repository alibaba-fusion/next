# Tab

-   category: Components
-   family: Navigation
-   chinese: 选项卡
-   type: Navigation

---

## Guide

Tabs mke it easy to explore and switch betweeen different views or functional aspects of an app or to browse categories data sets.

### Animation

Disable animation with `animation={false}`

## API

### Tab

| Param | Descripiton  | Type  | Default Value |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- | -------- |
| activeKey           | Key of the current active tab | Number/String | -        |
| size                | Size of tab<br><br>**option**:<br>'small', 'medium'                                                                                                                                                                             | Enum          | 'medium' |
| shape               | Shape of tab<br><br>**option**:<br>'pure', 'wrapped', 'text', 'capsule'                                                                                                                                                        | Enum          | 'pure'   |
| defaultActiveKey    | Key of default active tab  | Number/String | -        |
| animation           | Enable animation | Boolean       | true     |
| excessMode          | Excess mode for extra tabs <br><br>**option**:<br>'slide', 'dropdown'                                                                                                                                                                  | Enum          | 'slide'  |
| tabPosition         | Position of tabs<br><br>**option**:<br>'top', 'bottom', 'left', 'right'                                                                                                                                    | Enum          | 'top'    |
| triggerType         | Trigger type to change active tab<br><br>**option**:<br>'hover', 'click'                                                                                                                                                                      | Enum          | 'click'  |
| lazyLoad            | Lazy mount tabs | Boolean       | true     |
| unmountInactiveTabs | Auto unmount inactive tabs | Boolean       | false    |
| navStyle            | Custom style of nav  | Object        | -        |
| navClassName        | Custom className of nav | String        | -        |
| contentStyle        | Custom style of content | Object        | -        |
| contentClassName    | Custom className of content | String        | -        |
| extra               | Extra content of tab | ReactNode     | -        |
| onClick             | Callback when click tab | Function      | () => {} |
| onChange            | Callback when active tab changes<br><br>**signature**:<br>Function(key: String) => void<br>**parameter**:<br>_key_: {String} theActiveKey   | Function      | () => {} |
| onClose             | Callback when close the tab<br><br>**signature**:<br>Function(key: String) => void<br>**parameter**:<br>_key_: {String} theClosedKey  | Function      | () => {} |
| tabRender           | Custom template render for tab <br><br>**signature**:<br>Function(key: String, props: Object) => ReactNode<br>**parameter**:<br>_key_: {String} tabKey <br>_props_: {Object} propsOfTabItem <br>**return**:<br>{ReactNode} the rendered tab item<br> | Function      | -        |

### Tab.Item

| Param | Descripiton  | Type  | Default Value |
| --------- | ---------- | --------- | ----- |
| title     | Title of tab   | ReactNode | -     |
| closeable | If tab is closeable | Boolean   | false |
