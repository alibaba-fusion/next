# Message

-   category: Components
-   family: Feedback
-   chinese: 信息提示
-   type: 展示

---

全局展示操作反馈信息。

## 何时使用

-   可提供成功、警告和错误等反馈信息。
-   顶部居中显示并自动消失，是一种不打断用户操作的轻量级提示方式。

## API

### Message

| 参数           | 说明                                                        | 类型                                                                 | 默认值      | 是否必填 |
| -------------- | ----------------------------------------------------------- | -------------------------------------------------------------------- | ----------- | -------- |
| type           | 反馈类型                                                    | 'success' \| 'warning' \| 'error' \| 'notice' \| 'help' \| 'loading' | 'success'   |          |
| shape          | 反馈外观                                                    | 'inline' \| 'addon' \| 'toast'                                       | 'inline'    |          |
| size           | 反馈大小                                                    | 'medium' \| 'large'                                                  | 'medium'    |          |
| title          | 标题                                                        | React.ReactNode                                                      | -           |          |
| children       | 内容，非函数式调用下使用                                    | React.ReactNode                                                      | -           |          |
| defaultVisible | 默认是否显示                                                | boolean                                                              | false       |          |
| visible        | 当前是否显示                                                | boolean                                                              | -           |          |
| iconType       | 显示的图标类型，会覆盖内部设置的IconType，传false不显示图标 | string \| false                                                      | -           |          |
| closeable      | 显示关闭按钮                                                | boolean                                                              | false       |          |
| onClose        | 关闭按钮的回调                                              | () => void                                                           | () =\> \{\} |          |
| afterClose     | 关闭之后调用的函数                                          | () => void                                                           | () =\> \{\} |          |
| animation      | 是否开启展开收起动画                                        | boolean                                                              | true        |          |

### Message.show

Message.show(props) 提供一个单例的调用方式，配置参数如下（继承 Overlay 的配置）：

```js
Message.show({
    type: 'error',
    title: '错误',
    content: '请联系相关人员反馈！',
    hasMask: true,
});
```

| 参数         | 说明                                      | 类型                                                                 | 默认值      | 是否必填 |
| ------------ | ----------------------------------------- | -------------------------------------------------------------------- | ----------- | -------- |
| type         | 反馈类型                                  | 'success' \| 'warning' \| 'error' \| 'notice' \| 'help' \| 'loading' | 'success'   |          |
| size         | 反馈大小                                  | 'medium' \| 'large'                                                  | 'medium'    |          |
| title        | 标题                                      | React.ReactNode                                                      | -           |          |
| content      | 内容，函数式调用下使用                    | React.ReactNode                                                      | -           |          |
| align        | 弹层对齐方式，详情见 Overlay align        | string \| boolean                                                    | 'tc tc'     |          |
| offset       | 弹层相对于参照元素定位的微调              | Array\<number>                                                       | [0, 0]      |          |
| hasMask      | 是否显示遮罩                              | boolean                                                              | false       |          |
| duration     | 显示持续时间，0表示一直存在，以毫秒为单位 | number                                                               | 3000        |          |
| closeable    | 显示关闭按钮                              | boolean                                                              | false       |          |
| onClose      | 关闭按钮的回调                            | () => void                                                           | () =\> \{\} |          |
| afterClose   | 关闭之后调用的函数                        | () => void                                                           | () =\> \{\} |          |
| animation    | 是否开启展开收起动画                      | boolean                                                              | true        |          |
| overlayProps | 透传到弹层组件的属性对象                  | OverlayProps                                                         | -           |          |

<!-- api-extra-start -->

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
    duration: 1000,
});
```

### Message.withContext

1.21.6加入，建议通过这个HOC来获得命令式调起Message的API，而尽量不使用 `Message.[success|error|notice|help|loading|show|hide]`，能避免fusion config错误的bug，详细原因参考 `Dialog.withContext` 的文档。

### Message.config 配置多实例

`@alifd/next@1.24.0` 加入，配置后会采用多实例的方式

```js
Message.config({
    top: 100,
    duration: 2000,
    maxCount: 3,
});
```

| 参数     | 说明                           | 类型   | 默认值 |     |
| -------- | ------------------------------ | ------ | ------ | --- |
| duration | 默认自动关闭延时，单位毫秒     | Number | 3000   |     |
| top      | 消息距离顶部的位置             | Number | 8      |     |
| maxCount | 最多同时出现的个数, 默认不限制 | Number | -      |     |

```js
const instance = Message.success('this is a message');

instance.close(); // 可以用 close 直接关闭弹窗
```

<!-- api-extra-end -->

## 无障碍键盘操作指南

弹窗`Message`没有键盘操作，需要结合其他组件使用来聚焦提示，参考上文[#无障碍支持](#accessibility-container)。
