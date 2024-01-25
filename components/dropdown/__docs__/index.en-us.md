# Dropdown

-   category: Components
-   family: Util
-   chinese: 下拉菜单
-   type: Overlay

---

## Develop Guide

### When to Use

You can storage operation command with dropdown component when there are too much command. There will be a drop-down menu after you click or hover the trigger element. Then choose a command and run it.

### Note

-   Dropdown is accessible when using like `<Dropdown triggerType={["click", "hover"]}>` (triggerType="focus" is deprecated). In our opinion, menu elements need to be confirmed by users before they are expanded when it comes to accessibility.

## API

### Dropdown

继承 Popup 绝大多数属性，除了 canCloseByOutSideClick, autoFocus，以下列举为常用属性，其他可参考 Overlay 文档

Inherit most properties from Popup, except canCloseByOutSideClick, autoFocus, the following are common properties, other properties can refer to Overlay documentation

| Param           | Description                                                                                                          | Type                                              | Default Value                                | Required |
| --------------- | -------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------- | -------------------------------------------- | -------- |
| autoClose       | If set true, the popup will be closed when the child is clicked no matter whether it is a Menu (2.x default is true) | boolean                                           | false                                        |          |
| children        | Content in Dropdown                                                                                                  | React.ReactElement                                | -                                            | yes      |
| visible         | Overlay display or not now                                                                                           | boolean                                           | -                                            |          |
| align           | Overlay position relative to trigger element, see details Overlay align                                              | string                                            | 'tl bl'                                      |          |
| offset          | Extra adjustment for trigger element.                                                                                | Array\<number>                                    | [0, 0]                                       |          |
| hasMask         | Display mask or not                                                                                                  | boolean                                           | false                                        |          |
| animation       | Animation play mode, support object value: \{ in: 'enter-class', out: 'leave                                         | string \| false \| Record\<'in' \| 'out', string> | \{ in: 'expandInDown', out: 'expandOutUp' \} |          |
| trigger         | Trigger element                                                                                                      | React.ReactElement                                | -                                            | yes      |
| triggerType     | Operation type of trigger overlay toggle visible, eg 'hover', 'click'                                                | PopupProps['triggerType']                         | 'hover'                                      |          |
| defaultVisible  | Overlay display or not in default situation                                                                          | boolean                                           | false                                        |          |
| onVisibleChange | Callback function when toggle visible of overlay                                                                     | PopupProps['onVisibleChange']                     | -                                            |          |
| disabled        | Overlay can not toggle visible if you set disabled attribute                                                         | PopupProps['disabled']                            | false                                        |          |
| delay           | Delay time of toggle overlay visible(unit: ms)，if triggerType value is 'hover', delay time will work                | PopupProps['delay']                               | 200                                          |          |

## ARIA and KeyBoard

| KeyBoard    | Description                                                                                                                                             |
| :---------- | :------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Up Arrow    | in vertical mode, at the same level navigation, navigate to previous item                                                                               |
| Down Arrow  | in vertical mode, at the same level navigation, navigate to next item                                                                                   |
| Right Arrow | in vertical mode, open the submenu, navigate to the first item of the submenu; in horizontal mode, navigate at the same level, navigate to the next one |
| Left Arrow  | in vertical mode, close the submenu, navigate to the parent menu; in horizontal mode, navigate at the same level, navigate to the previous one          |
| Enter       | open submenu and navigate to the first item of the submenu                                                                                              |
| Esc         | close submenu and navigate to the parent menu item                                                                                                      |
