# Card

-   category: Components
-   family: DataDisplay
-   chinese: 卡片
-   type: 基本

---

## Guide

一个通用的卡片组件。

### 何时使用

当一个模块的同类信息不能自然形成区块感，可借助 Card 组件将信息整合，帮助界面信息模块感更强。

## API

### Card

| 参数              | 说明           | 类型            | 默认值  |
| --------------- | ------------ | ------------- | ---- |
| title           | 卡片的标题        | ReactNode     | -    |
| subTitle        | 卡片的副标题       | ReactNode     | -    |
| showTitleBullet | 是否显示标题的项目符号  | Boolean       | true |
| showHeadDivider | 是否展示头部的分隔线   | Boolean       | true |
| contentHeight   | 内容区域的固定高度    | String/Number | 120  |
| extra           | 标题区域的用户自定义内容 | ReactNode     | -    |
