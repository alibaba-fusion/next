# Balloon

-   category: Components
-   family: Feedback
-   type: popup

---

## Guide

### When To Use

-   Balloon is used when you hope to show auxiliary or help message during users' interacting with the illustrated object (text, picture, input box, etc.).
-   Particularly, Balloon.Tooltip is a simplified Balloon for displaying tip when hovered. If you want the content to be clickable, use `<Balloon.Tootip delay={100} />`

### Note

-   When trigger is a custom React Component, it needs to pass through the onMouseEnter/onMouseLeave/onClick callback.
-   This Component will be accessible when you pass id. We recommond you `<Tooltip>` for simple tip, `<Balloon triggerType="click">` for complex usage(e.g.nested with form). Don't use triggerType="focus", it's for Component internal use only.

## API

### Balloon

| Param                   | Description                                                                                                                                                                    | Type              | Default Value                                      |
| -------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- | ---------------------------------------- |
| type                 | type of style<br><br>**option**:<br>'normal', 'primary'                                                                                                                           | Enum            | 'normal'                                 |
| children             | content of popup layer                                                                                                                                                                 | any             | -                                        |
| visible              | visible state of popup                                                                                                                                                             | Boolean         | -                                        |
| defaultVisible       | default visible state of popup                                                                                                                                                             | Boolean         | false                                    |
| onVisibleChange      | callback when visible state changes<br><br>**signature**:<br>Function(visible: Boolean) => void<br>**parameter**:<br>_visible_: {Boolean} whether to show the popup                                                       | Function        | func.noop                                |
| alignEdge            | whether align to the edge                                                                                                                                                               | Boolean         | false                                    |
| closable             | whether to show the close button                                                                                                                                                              | Boolean         | true                                     |
| align                | position of popup relative to the trigger<br><br>**option**:<br>'t'(top)<br>'r'(right)<br>'b'(bottom)<br>'l'(left)<br>'tl'(top left)<br>'tr'(top right)<br>'bl'(bottom left)<br>'br'(bottom right)<br>'lt'(left top)<br>'lb'(left bottom)<br>'rt'(right top)<br>'rb'(right bottom) or their combinations | Enum            | 'b'                                      |
| offset          | extra adjustment for trigger element. e.g. [hoz, ver] means move to right ${hoz}px (to left in RTL mode), to bottom ${ver}px                                                                                                                                                                                  | Array          | [0, 0]                                     |
| trigger              | trigger of the popup                                                                                                                                                                  | any             | &lt;span>&lt;/span>                      |
| triggerType          | how to trigger the popup. <br><br>**type unit**:<br>'hover'<br>'click'<br> e.g.['hover', 'click']  'click'                                                                                       | String/Array    | 'hover'                                  |
| onClose              | callback triggered when visible becomes false<br><br>**signature**:<br>Function() => void                                                                                                           | Function        | func.noop                                |
| needAdjust           | whether to adjust the position automatically                                                                                                                                                            | Boolean         | false                                    |
| delay                | how long should the popup be delayed after triggered in milliseconds                                                                                                                                                          | Number          | -                                        |
| afterClose           | callback triggered when the popup is closed or the animation ends<br><br>**signature**:<br>Function() => void                                                                                                      | Function        | func.noop                                |
| shouldUpdatePosition | whether to update the position of popup after the content changes                                                                                                                                                              | Boolean         | -                                        |
| autoFocus            | whether to focus on the first element of popup on appearing                                                                                                                                                | Boolean         | false                                    |
| safeNode             | When triggetType is 'click', the popup will be closed if any area other than itself is clicked. safeNode is used to define the node which doesn't trigger the close action. It can be either dom or dom id                                                                         | String          | undefined                                |
| safeId               | id of the safeNode, and should be used together with safeNode                                                                                                                | String          | null                                     |
| animation            | when should the animation be played                                                                                                                                                             | Object/Boolean  | {     in: 'zoomIn',     out: 'zoomOut' } |
| cache                | whether to remove the popup when it's closed                                                                                 | Boolean         | false                                    |
| popupContainer       | popupContainer of the popup, being either dom id or a function to return the dom                                                                                              | String/Function | -                                        |
| popupStyle           | custom style of popup                                                                                                                                                   | Object          | {}                                       |
| popupClassName       | custom className of popup                                                                                                                                               | String          | ''                                       |
| popupProps           | props of popup                                                                                                                                                       | Object          | {}                                       |
| followTrigger        | follow Trigger or not                                                                                                                                                      | Boolean         | -                                         |
| id                   | id of popup. only when you set value, balloon will support accessibility                                                                                                                                                      | String          | -                                        |

### Balloon.Tooltip

| Param             | Description                                                                                                                                                                    | Type      | Default Value                 |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- | ------------------- |
| children       | content of tooltip                                                                                                                                                          | any     | -                   |
| align          | position of popup relative to the trigger<br><br>**option**:<br>'t'(top)<br>'r'(right)<br>'b'(bottom)<br>'l'(left)<br>'tl'(top left)<br>'tr'(top right)<br>'bl'(bottom left)<br>'br'(bottom right)<br>'lt'(left top)<br>'lb'(left bottom)<br>'rt'(right top)<br>'rb'(right bottom) or their combinations | Enum    | 'b'                 |
| trigger        | trigger of the tooltip                                                                                                                                                                 | any     | &lt;span>&lt;/span> |
| triggerType    | how to trigger the tooltip. <br><br>**type unit**:<br>'hover'<br>'click'<br> e.g.['hover', 'click']  'click'. `<Balloon triggerType="click">` for complex usage                                                                                     | String/Array    | 'hover'                                  |
| popupStyle     | custom style of popup                                                                                                                                                   | Object  | -                   |
| popupClassName | custom className of popup                                                                                                                                                | String  | -                   |
| popupProps     | props of popup                                                                                                                                                         | Object  | -                   |
| pure           | pure render or not                                                                                                                                                      | Boolean         | -                   |
| popupContainer | popupContainer of the popup, being either dom id or a function to return the dom                                                                                                                                   | String/Function | -                   |
| id             | id of popup. only when you set value, balloon will support accessibility                                                                                                                                                     | String          | -                   |
| delay          | If you want the content of Tooltip to be clickable, set 100 for example                                                                                                                               | Number       | 0           |

## Known Issues

-   For disabled elements, onMouseLeave can't be triggered in chrome, due to chrome's bug and can't be worked around at present.


## ARIA and KeyBoard

| KeyBoard          | Descripiton                              |
| :---------- | :------------------------------ |
| SPACE       | When `triggerType=‘click’`, click will popup a prompt  |
| Enter       | When `triggerType=‘click’`, click will popup a prompt  |


