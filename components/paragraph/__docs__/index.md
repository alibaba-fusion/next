# Paragraph

-   category: Components
-   family: General
-   chinese: 段落
-   type: 基本

---

**已废弃，请使用Typography**，段落用于控制页面整体的文本视觉，主要由行间距及文本大小体现。

## 何时使用

-   页面文本展示需要一致体验。
-   一般短文本和长文本的行间距是有差别的，短文本的行间距会更小(一般为三行以内)

## API

### Paragraph

| 参数      | 说明                              | 类型                | 默认值   | 是否必填 |
| --------- | --------------------------------- | ------------------- | -------- | -------- |
| className | 额外的样式名 会附加到 root dom 上 | string              | -        |          |
| type      | 什么方式展示段落                  | 'long' \| 'short'   | 'long'   |          |
| size      | 组件大小。                        | 'medium' \| 'small' | 'medium' |          |
