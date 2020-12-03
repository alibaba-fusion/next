# Message

-   category: Components
-   family: Feedback
-   chinese: 信息提示
-   type: 展示

---

全局展示操作反馈信息。

## 何时使用

- 可提供成功、警告和错误等反馈信息。
- 顶部居中显示并自动消失，是一种不打断用户操作的轻量级提示方式。

## API

### Message

| 参数             | 说明                                                                                 | 类型        | 默认值       |
| -------------- | ---------------------------------------------------------------------------------- | --------- | --------- |
| size           | 反馈大小<br><br>**可选值**:<br>'medium', 'large'                                          | Enum      | 'medium'  |
| type           | 反馈类型<br><br>**可选值**:<br>'success', 'warning', 'error', 'notice', 'help', 'loading' | Enum      | 'success' |
| shape          | 反馈外观<br><br>**可选值**:<br>'inline', 'addon', 'toast'                                 | Enum      | 'inline'  |
| title          | 标题                                                                                 | ReactNode | -         |
| children       | 内容                                                                                 | ReactNode | -         |
| defaultVisible | 默认是否显示                                                                             | Boolean   | true      |
| visible        | 当前是否显示                                                                             | Boolean   | -         |
| iconType       | 显示的图标类型，会覆盖内部设置的IconType                                                           | String    | -         |
| closeable      | 显示关闭按钮                                                                             | Boolean   | false     |
| onClose        | 关闭按钮的回调<br><br>**签名**:<br>Function() => void                                       | Function  | () => {}  |
| afterClose     | 关闭之后调用的函数<br><br>**签名**:<br>Function() => void                                     | Function  | () => {}  |
| animation      | 是否开启展开收起动画                                                                         | Boolean   | true      |

<!-- api-extra-start -->

### Message.show

`Message.show(props)` 提供一个单例的调用方式，配置参数如下（继承 `Overlay` 的配置）：

| 参数           | 说明                    | 类型        | 默认值       |
| ------------ | --------------------- | --------- | --------- |
| type         | 反馈类型                  | String    | 'success' |
| title        | 反馈标题                  | ReactNode | -         |
| content      | 反馈内容                  | ReactNode | -         |
| duration     | 显示持续时间，0表示一直存在，以毫秒为单位 | Number    | 3000      |
| align        | 对齐方式，参考Overlay        | String    | 'tc tc'   |
| offset       | 对齐之后的偏移位置             | Array     | [0, 0]    |
| hasMask      | 是否带有遮罩                | Boolean   | false     |
| closeable    | 显示关闭按钮                | Boolean   | false     |
| afterClose   | 关闭事件的回调函数             | Function  | -         |
| overlayProps | 透传到弹层的属性对象            | Object    | -         |

示例：

```js
Message.show({
    type: 'error',
    title: '错误',
    content: '请联系相关人员反馈！',
    hasMask: true
});
```

### Message.hide

`Message.hide()` 提供关闭反馈弹层的快捷方法。

### Message.[success|error|notice|help|loading]

`Message.show({type: type, title: 'xxx'});` 的便捷调用方法。

示例：

```js
Message.success('反馈内容');

// 或者
Message.success({
    title: '反馈内容',
    duration: 1000
});
```

### Message.withContext

1.21.6加入，建议通过这个HOC来获得命令式调起Message的API，而尽量不使用 `Message.[success|error|notice|help|loading|show|hide]`，能避免fusion config错误的bug，详细原因参考 `Dialog.withContext` 的文档。

<!-- api-extra-end -->

## 无障碍键盘操作指南

- 弹窗`Message`没有键盘操作，需要结合其他组件使用来聚焦提示，参考上文[#无障碍支持](#accessibility-container)。
