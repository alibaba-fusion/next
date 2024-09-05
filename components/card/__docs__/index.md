# Card

-   category: Components
-   family: DataDisplay
-   chinese: 卡片
-   type: 基本

---

一个通用的卡片组件。

## 何时使用

当一个模块的同类信息不能自然形成区块感，可借助 Card 组件将信息整合，帮助界面信息模块感更强。

## API

### Card

| 参数            | 说明                                                                                             | 类型             | 默认值 | 是否必填 | 支持版本 |
| --------------- | ------------------------------------------------------------------------------------------------ | ---------------- | ------ | -------- | -------- |
| media           | 卡片的上的图片 / 视频                                                                            | ReactNode        | -      |          | -        |
| title           | 卡片的标题                                                                                       | ReactNode        | -      |          | -        |
| subTitle        | 卡片的副标题                                                                                     | ReactNode        | -      |          | -        |
| actions         | 卡片操作组，位置在卡片底部                                                                       | ReactNode        | -      |          | -        |
| showTitleBullet | 是否显示标题的项目符号                                                                           | boolean          | true   |          | -        |
| showHeadDivider | 是否展示头部的分隔线                                                                             | boolean          | true   |          | -        |
| contentHeight   | 内容区域的固定高度                                                                               | string \| number | 120    |          | -        |
| extra           | 标题区域的用户自定义内容                                                                         | ReactNode        | -      |          | -        |
| free            | 是否开启自由模式，开启后 card 将使用子组件配合使用，设置此项后 title, subtitle, 等等属性都将失效 | boolean          | false  |          | -        |
| hasBorder       | 是否带边框                                                                                       | boolean          | true   |          | 1.24     |

### Card.Media

| 参数      | 说明           | 类型        | 默认值 | 是否必填 |
| --------- | -------------- | ----------- | ------ | -------- |
| component | 设置标签类型   | ElementType | 'div'  |          |
| image     | 背景图片地址   | string      | -      |          |
| src       | 媒体源文件地址 | string      | -      |          |

### Card.Header

| 参数      | 说明                     | 类型        | 默认值 | 是否必填 |
| --------- | ------------------------ | ----------- | ------ | -------- |
| title     | 卡片的标题               | ReactNode   | -      |          |
| subTitle  | 卡片的副标题             | ReactNode   | -      |          |
| extra     | 标题区域的用户自定义内容 | ReactNode   | -      |          |
| component | 设置标签类型             | ElementType | 'div'  |          |

### Card.Content

| 参数      | 说明         | 类型        | 默认值 | 是否必填 |
| --------- | ------------ | ----------- | ------ | -------- |
| component | 设置标签类型 | ElementType | 'div'  |          |

### Card.Divider

| 参数      | 说明               | 类型        | 默认值 | 是否必填 |
| --------- | ------------------ | ----------- | ------ | -------- |
| component | 设置标签类型       | ElementType | 'hr'   |          |
| inset     | 分割线是否向内缩进 | boolean     | -      |          |

### Card.Actions

| 参数      | 说明         | 类型        | 默认值 | 是否必填 |
| --------- | ------------ | ----------- | ------ | -------- |
| component | 设置标签类型 | ElementType | 'div'  |          |
