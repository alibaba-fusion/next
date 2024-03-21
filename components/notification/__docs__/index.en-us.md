# Notification

-   category: Components
-   family: Feedback
-   chinese: 通知
-   type: 展示

---

Display a notification message globally.

## When To Use

To display a notification message at any of the four corners of the viewport. Typically it can be used in the following cases:

-   A notification with complex content.
-   A notification providing a feedback based on the user interaction. Or it may show some details about upcoming steps the user may have to follow.
-   A notification that is pushed by the application.

## Guide

## API

### Notification

| Param   | Description | Type                                               | Default Value | Required |
| ------- | ----------- | -------------------------------------------------- | ------------- | -------- |
| config  | -           | (config: NotificationConfig) => NotificationConfig | -             | yes      |
| open    | -           | (options: NotificationOptions) => string           | -             | yes      |
| close   | -           | (key: string) => void                              | -             | yes      |
| destroy | -           | () => void                                         | -             | yes      |
| success | -           | (options: NotificationOptions) => string           | -             | yes      |
| error   | -           | (options: NotificationOptions) => string           | -             | yes      |
| warning | -           | (options: NotificationOptions) => string           | -             | yes      |
| notice  | -           | (options: NotificationOptions) => string           | -             | yes      |
| help    | -           | (options: NotificationOptions) => string           | -             | yes      |

### Notification.Config

| Param        | Description                                                                                                 | Type                                                     | Default Value         | Required |
| ------------ | ----------------------------------------------------------------------------------------------------------- | -------------------------------------------------------- | --------------------- | -------- |
| offset       | Offset after align, [x, y]                                                                                  | [number, number]                                         | [30, 30]              |          |
| maxCount     | Max visible count, default Infinity                                                                         | number                                                   | -                     |          |
| size         | Use `Message` size prop                                                                                     | 'large' \| 'medium'                                      | large                 |          |
| duration     | Time in seconds before Notification is closed. When set to 0 or null, it will never be closed automatically | number                                                   | 4500                  |          |
| getContainer | Return the mount node for Notification                                                                      | () => HTMLElement                                        | `() => document.body` |          |
| placement    | Position of Notification, can be one of `tl` `tr` `bl` `br`                                                 | 'topRight' \| 'topLeft' \| 'bottomLeft' \| 'bottomRight' | topRight              |          |

### NotificationOptions

| Param     | Description                                                                                                 | Type              | Default Value | Required   |
| --------- | ----------------------------------------------------------------------------------------------------------- | ----------------- | ------------- | ---------- | ------ | ------------------------------------------------------- | --------- | --- |
| key       | The unique identifier of the Notification                                                                   | string            | -             |            |
| type      | Notification type, `Notification.open` optional parameter, optional value: `success`\\                      | `error`\\         | `warning`\\   | `notice`\\ | `help` | 'success' \| 'error' \| 'warning' \| 'notice' \| 'help' | `success` |     |
| title     | The title of notification box                                                                               | ReactNode         | -             |            |
| content   | The content of notification box                                                                             | ReactNode         | -             |            |
| icon      | Customized icon                                                                                             | string            | -             |            |
| duration  | Time in seconds before Notification is closed. When set to 0 or null, it will never be closed automatically | number            | 4500          |            |
| style     | Customized inline style                                                                                     | CSSProperties     | -             |            |
| className | Customized CSS class                                                                                        | string            | -             |            |
| onClose   | Specify a function that will be called when the close button is clicked                                     | () => void        | -             |            |
| onClick   | Specify a function that will be called when the notification is clicked                                     | MouseEventHandler | -             |            |
