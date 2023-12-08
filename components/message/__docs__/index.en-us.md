# Message

-   category: Components
-   family: Feedback
-   chinese: 信息提示
-   type: 展示

---

## Guide

## API

### Message

| Param | Descripiton  | Type  | Default Value |
| -------------- | ---------------------------------------------------------------------------------- | --------- | --------- |
| size           | size of message<br><br>**option**:<br>'medium', 'large'                                          | Enum      | 'medium'  |
| type           | type of message<br><br>**option**:<br>'success', 'warning', 'error', 'notice', 'help', 'loading' | Enum      | 'success' |
| shape          | shape of message<br><br>**option**:<br>'inline', 'addon', 'toast'                                 | Enum      | 'inline'  |
| title          | title of message                                                                                | ReactNode | -         |
| children       | content of message                                                                                | ReactNode | -         |
| defaultVisible | whether the message is visible in default                                                                            | Boolean   | true      |
| visible        | whether the message is visible currently                                                                            | Boolean   | -         |
| iconType       | type of icon, overriding the internally type of icon                                                           | String    | -         |
| closeable      | whether to show the close button                                                                             | Boolean   | false     |
| onClose        | callback function triggered when close<br><br>**signatures**:<br>Function() => void                                       | Function  | () => {}  |
| afterClose     | callback function triggered after closed<br><br>**signatures**:<br>Function() => void                                     | Function  | () => {}  |
| animation      | whether to enable expand and collapse animation                                                                         | Boolean   | true      |

<!-- api-extra-start -->

### Message.show

`Message.show(props)` provides a singleton call with the following configuration parameters (inheriting `Overlay` configuration):

| Param | Descripiton  | Type  | Default Value |
| ------------ | --------------------------------------------------------------------------------------------------- | --------- | --------- |
| type         | type of message                                                                                                | String    | 'success' |
| title        | title of message                                                                                                | ReactNode | -         |
| content      | content of message                                                                                                | ReactNode | -         |
| duration     | show duration, 0 means always present, in milliseconds                                                                               | Number    | 3000      |
| align        | alignment reference Overlay | String    | 'tc tc'   |
| offset       | offset after positioned                                                                                            | Array     | [0, 0]    |
| hasMask      | whether to have a mask                                                                                              | Boolean   | false     |
| closeable    | whether to show the close button                                                                                             | Boolean   | false     |
| afterClose   | callback function triggered after closed                                                                                          | Function  | -         |
| overlayProps | props of Overlay                                                                                          | Object  | -         |

Example:

```js
Message.show({
    type: 'error',
    title: 'Error',
    content: 'Please contact admin feedback!',
    hasMask: true
});
```

### Message.hide

`Message.hide()` provides a quick way to close the message.

### Message.[success|error|notice|help|loading]

Quick ways of `Message.show({type: type, title: 'xxx'});`.

Example：

```js
Message.success('message content');

// or
Message.success({
    title: 'message content',
    duration: 1000
});
```

<!-- api-extra-end -->



## ARIA and KeyBoard

`Description`: This component needs to be used in conjunction with other components to be prompted. Refer to the above `accessibility`