# zh-CN order=28

# 虚拟滚动与行合并

虚拟滚动会卸载滚动到视区之外的行，行合并利用 td 元素的 rowSpan 属性，需要在合并的第一行设置 rowSpan 属性，若因滚动视区外卸载了该行，则会导致行合并失效，可以使用 `keepForwardRenderRows` 设置向前保留一定行数不被卸载，从而使行合并始终生效（设置 `keepForwardRenderRows` 大于 max rowSpan 即可）

# en-US order=28

# Simple

Virtual scrolling will unload rows scrolled outside the viewport. Row merging uses the rowSpan attribute of the td element. The rowSpan attribute needs to be set on the first row of the merge. If the row is unloaded due to scrolling outside the viewport, the row merging will fail. , you can use `keepForwardRenderRows` to set a certain number of rows to be reserved forward without being unloaded, so that row merging will always take effect (just set `keepForwardRenderRows` to be greater than max rowSpan)
