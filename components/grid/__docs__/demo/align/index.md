# zh-CN order=10

# 多列垂直方向对齐方式

（不支持 IE9 浏览器）基于 Flex 的 align-items 和 align-self 属性实现，在 `Row` 上设置 `align` 属性，即可控制 `Row` 下面所有 `Col` 的垂直方向对齐方式：top（顶部对齐，默认），center（居中对齐），bottom（底部对齐），baseline（第一行文字的基线对齐），stretch（如果未设置高度或设为 auto，将占满整个容器的高度）；在 `Col` 上设置 `align` 属性，可允许它与其它列不一样的对齐方式，覆盖 `Row` 的 `align` 属性。

---

# en-US order=10

# Vertical alignment of columns

(IE9 is not supported) Based on Flex's align-items and align-self attributes, set the `align` property on `Row` to control the vertical alignment of all `Col` below `Row`: top (top alignment, default), center (center alignment), bottom (bottom alignment), baseline (baseline alignment of the first line of text), stretch (if no height is set or set to auto, it will fill the height of the entire container); set the `align` property on `Col`, it can override the `align` property of `Row`.
