# zh-CN order=7

# 弹层自动跟随滚动

如果弹层显示隐藏的触发元素所在容器有滚动条，弹窗会自动更新自己的位置跟随滚动。但是实时更新会消耗较大的计算，可以通过更好挂载容器到父节点获得更好性能

# en-US order=7

# Overlay follows the container scroll

The overlay defaults to absolute positioning with reference to document.body. If the overlay trigger element's container (usually the parent node) has a scrollbar, then when the container is scrolled, the trigger element can be scroll autoly
