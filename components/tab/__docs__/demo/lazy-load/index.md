# zh-CN order=3

# 按需加载和自动卸载

默认情况 Tab 不会提前渲染好所有的内容，而是根据 Tab 的激活情况依次进行渲染。

-   可以设置 `lazyLoad={false}` 一次渲染所有 TabItem 内容。
-   可以设置 `unmountInactiveTabs` 在切换选项卡时自动卸载其他 TabItem。

# en-US order=3

# LazyLoad and AutoUnmount

Disable lazy load by setting `lazyLoad={false}`, and enable auto unmount inactive tabs by setting `unmountInactiveTabs`.
