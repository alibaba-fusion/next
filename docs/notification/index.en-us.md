# Noticfication

-   category: Components
-   family: Feedback
-   chinese: 通知
-   type: 展示

---

Display a notification message globally.

## When To Use

To display a notification message at any of the four corners of the viewport. Typically it can be used in the following cases:

- A notification with complex content.
- A notification providing a feedback based on the user interaction. Or it may show some details about upcoming steps the user may have to follow.
- A notification that is pushed by the application.

## Guide

## API


- `Noticfication.success(config)`
- `Noticfication.error(config)`
- `Noticfication.warning(config)`
- `Noticfication.notice(config)`
- `Noticfication.help(config)`
- `Noticfication.open(config)`
- `Noticfication.close(key: String)`
- `Noticfication.destroy()`

The properties of config are as follows:

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| key | The unique identifier of the Notification | String | - |  |
| title | The title of notification box (required)| String\|ReactNode | - |  |
| content | The content of notification box (required) | String\|ReactNode | - |  |
| duration | Time in seconds before Notification is closed. When set to 0 or null, it will never be closed automatically | Number | 4.5 |  |
| icon | Customized icon | ReactNode | - |  |
| style | Customized inline style | [React.CSSProperties](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/e434515761b36830c3e58a970abf5186f005adac/types/react/index.d.ts#L794) | - |  |
| className | Customized CSS class | String | - |  |
| onClose | Specify a function that will be called when the close button is clicked | Function | - |  |
| onClick | Specify a function that will be called when the notification is clicked | Function | - | |

`notification` also provides a global `config()` method that can be used for specifying the default options. Once this method is used, all the notification boxes will take into account these globally defined options when displaying.

- `Noticfication.config(options)`

```js
Noticfication.config({
  placement: 'bottomRight',
  duration: 3000,
});
```

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| duration | Time in seconds before Notification is closed. When set to 0 or null, it will never be closed automatically | Number | 4.5 |  |
| maxCount | Max visible count, default Infinity | Number | - |  |
| getContainer | Return the mount node for Notification | () => HTMLNode | () => document.body |  |
| offset | Offset after align, [x, y] | Array | [30, 30] |  |
| placement |  Position of Notification, can be one of `tl` `tr` `bl` `br` | String | topRight |  |
| size | Use `Message` size prop | String | large |  |
