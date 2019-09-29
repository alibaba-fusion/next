# Paragraph

-   category: Components
-   family: General
-   chinese: 段落
-   type: 基本

---

## Guide

（已废弃，请使用Typography）段落用于控制页面整体的文本视觉，主要由行间距及文本大小体现。

## 何时使用

-   页面文本展示需要一致体验。
-   一般短文本和长文本的行间距是有差别的，短文本的行间距会更小(一般为三行以内)

## API

### Paragraph

| 参数   | 说明                                                                 | 类型   | 默认值      |
| ---- | ------------------------------------------------------------------ | ---- | -------- |
| size | 组件大小。<br><br>**可选值**:<br>'medium'(中号)<br>'small'(小号)               | Enum | 'medium' |
| type | 什么方式展示段落<br><br>**可选值**:<br>'long'(展示所有文本)<br>'short'(展示三行以内（非强制）) | Enum | 'long'   |
