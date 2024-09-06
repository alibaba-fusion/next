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

| Param               | Description                                                                                                                                                                | Type                                                                                                            | Default Value | Required |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | ------------- | -------- |
| activeKey           | Key of the current active tab. This prop will make tab a 'controlled component', end user will be unable to change tabs.                                                   | string                                                                                                          | -             |          |
| defaultActiveKey    | Key of default active tab.                                                                                                                                                 | string                                                                                                          | -             |          |
| shape               | Shape of tab.                                                                                                                                                              | 'pure' \| 'wrapped' \| 'text' \| 'capsule'                                                                      | 'pure'        |          |
| animation           | Enable animation.                                                                                                                                                          | boolean                                                                                                         | true          |          |
| excessMode          | Excess mode for extra tabs.                                                                                                                                                | 'slide' \| 'dropdown'                                                                                           | 'slide'       |          |
| tabPosition         | Position of tabs. Only effective when shape is 'wrapped'.                                                                                                                  | 'top' \| 'bottom' \| 'left' \| 'right'                                                                          | 'top'         |          |
| size                | Size of the tabs                                                                                                                                                           | 'small' \| 'medium'                                                                                             | 'medium'      |          |
| triggerType         | Trigger type to change active tab.                                                                                                                                         | 'hover' \| 'click'                                                                                              | 'click'       |          |
| lazyLoad            | Lazy mount tabs.                                                                                                                                                           | boolean                                                                                                         | true          |          |
| unmountInactiveTabs | Auto unmount inactive tabs                                                                                                                                                 | boolean                                                                                                         | false         |          |
| navStyle            | Custom style of navigation.                                                                                                                                                | CSSProperties                                                                                                   | -             |          |
| navClassName        | Custom className of navigation.                                                                                                                                            | string                                                                                                          | -             |          |
| contentStyle        | Custom style of content.                                                                                                                                                   | CSSProperties                                                                                                   | -             |          |
| contentClassName    | Custom className of content.                                                                                                                                               | string                                                                                                          | -             |          |
| extra               | Extra content of tab, ensure the item won't excess when using this.                                                                                                        | ReactNode                                                                                                       | -             |          |
| disableKeyboard     | Set and you cant switch tabs via keyboard arrow keys.                                                                                                                      | boolean                                                                                                         | false         |          |
| onClick             | Callback when active tab changes.                                                                                                                                          | (key: string) => void                                                                                           | -             |          |
| onChange            | Callback triggered when a tab is changed.<br/><br/>**signature**:<br/>**params**:<br/>_key_: The active key                                                                | (key: string) => void                                                                                           | -             |          |
| onClose             | Callback triggered when a tab is closed.<br/><br/>**signature**:<br/>**params**:<br/>_key_: The closed key                                                                 | (key: string) => void                                                                                           | -             |          |
| tabRender           | Custom template render for tab.<br/><br/>**signature**:<br/>**params**:<br/>_key_: Key of TabItem<br/>_props_: Props of TabItem<br/>**return**:<br/>The rendered tab item. | (key: string, props: Record\<string, unknown>) => ReactNode                                                     | -             |          |
| popupProps          | Properties pass down to Popup Menu in dropdown excess mode.                                                                                                                | ComponentPropsWithRef\<typeof Popup>                                                                            | -             |          |
| icons               | Customize icons used in tab navigation.                                                                                                                                    | {<br/> dropdown?: string \| ReactNode;<br/> prev?: string \| ReactNode;<br/> next?: string \| ReactNode;<br/> } | -             |          |
| showAdd             | Show 'Add' button.                                                                                                                                                         | boolean                                                                                                         | -             |          |
| onAdd               | Callback triggered when clicking 'Add' button to add a new tab.                                                                                                            | () => void                                                                                                      | -             |          |
| addIcon             | Custom 'Add' button.                                                                                                                                                       | ReactNode                                                                                                       | -             |          |

### Tab.Item

| Param        | Description                                  | Type                                                     | Default Value | Required |
| ------------ | -------------------------------------------- | -------------------------------------------------------- | ------------- | -------- |
| title        | Title of tab.                                | ReactNode                                                | -             |          |
| closeable    | If tab is closeable.                         | boolean                                                  | false         |          |
| disabled     | If tab is disabled.                          | boolean                                                  | false         |          |
| style        | Style of tab in navigation.                  | CSSProperties                                            | -             |          |
| className    | ClassName of tab in navigation.              | string                                                   | -             |          |
| onClick      | Callback when tab in navigation is clicked.  | (key: string, e: React.MouseEvent\<HTMLElement>) => void | -             |          |
| onMouseEnter | Callback when mouse enter tab in navigation. | (key: string, e: React.MouseEvent\<HTMLElement>) => void | -             |          |
| onMouseLeave | Callback when mouse leave tab in navigation. | (key: string, e: React.MouseEvent\<HTMLElement>) => void | -             |          |
| children     | Child elements.                              | React.ReactNode                                          | -             |          |

## ARIA and KeyBoard

| KeyBoard    | Descripiton                 |
| :---------- | :-------------------------- |
| Right Arrow | switch to previous Tab.Item |
| Left Arrow  | switch to next Tab.Item     |
