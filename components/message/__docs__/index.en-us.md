# Message

-   category: Components
-   family: Feedback
-   chinese: 信息提示
-   type: 展示

---

## Guide

## API

### Message

| Param          | Description                                          | Type                                                                 | Default Value | Required |
| -------------- | ---------------------------------------------------- | -------------------------------------------------------------------- | ------------- | -------- |
| type           | Type of message                                      | 'success' \| 'warning' \| 'error' \| 'notice' \| 'help' \| 'loading' | 'success'     |          |
| shape          | Shape of message                                     | 'inline' \| 'addon' \| 'toast'                                       | 'inline'      |          |
| size           | Size of message                                      | 'medium' \| 'large'                                                  | 'medium'      |          |
| title          | Title of message                                     | React.ReactNode                                                      | -             |          |
| children       | Content of message                                   | React.ReactNode                                                      | -             |          |
| defaultVisible | Whether the message is visible in default            | boolean                                                              | false         |          |
| visible        | Whether the message is visible currently             | boolean                                                              | -             |          |
| iconType       | Type of icon, overriding the internally type of icon | string \| false                                                      | -             |          |
| closeable      | Whether to show the close button                     | boolean                                                              | false         |          |
| onClose        | Callback function triggered when close               | () => void                                                           | () =\> \{\}   |          |
| afterClose     | Callback function triggered after closed             | () => void                                                           | () =\> \{\}   |          |
| animation      | Whether to enable expand and collapse animation      | boolean                                                              | true          |          |

### Message.show

`Message.show(props)` provides a singleton call with the following configuration parameters (inheriting `Overlay` configuration):

```js
Message.show({
    type: 'error',
    title: 'Error',
    content: 'Please contact admin feedback!',
    hasMask: true,
});
```

| Param        | Description                                            | Type                                                                 | Default Value | Required |
| ------------ | ------------------------------------------------------ | -------------------------------------------------------------------- | ------------- | -------- |
| type         | Type of message                                        | 'success' \| 'warning' \| 'error' \| 'notice' \| 'help' \| 'loading' | 'success'     |          |
| size         | Size of message                                        | 'medium' \| 'large'                                                  | 'medium'      |          |
| title        | Title of message                                       | React.ReactNode                                                      | -             |          |
| content      | Content of message                                     | React.ReactNode                                                      | -             |          |
| align        | Alignment reference Overlay                            | string \| boolean                                                    | 'tc tc'       |          |
| offset       | Offset after positioned                                | Array\<number>                                                       | [0, 0]        |          |
| hasMask      | Whether to have a mask                                 | boolean                                                              | false         |          |
| duration     | Show duration, 0 means always present, in milliseconds | number                                                               | 3000          |          |
| closeable    | Whether to show the close button                       | boolean                                                              | false         |          |
| onClose      | Callback function triggered when close                 | () => void                                                           | () =\> \{\}   |          |
| afterClose   | Callback function triggered after closed               | () => void                                                           | () =\> \{\}   |          |
| animation    | Whether to enable expand and collapse animation        | boolean                                                              | true          |          |
| overlayProps | Props of Overlay                                       | OverlayProps                                                         | -             |          |

<!-- api-extra-start -->

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
    duration: 1000,
});
```

<!-- api-extra-end -->

## ARIA and KeyBoard

`Description`: This component needs to be used in conjunction with other components to be prompted. Refer to the above `accessibility`
