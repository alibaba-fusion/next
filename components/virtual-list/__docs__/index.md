# VirtualList

-   category: Components
-   family: Util
-   chinese: 虚拟滚动列表

---

虚拟滚动列表。

## 何时使用

主要用于解决大数据情况下的渲染速度问题。组件的设计思想可以看这篇文章 <a href="https://zhuanlan.zhihu.com/p/55329238" target="_blank">https&#x3A;//zhuanlan.zhihu.com/p/55329238</a>。

## API

### VirtualList

| 参数           | 说明                                                                                           | 类型                                                                                                                                           | 默认值                                       | 是否必填 |
| -------------- | ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- | -------- |
| children       | 渲染的子节点                                                                                   | React.ReactElement \| Array\<React.ReactElement \| undefined \| null>                                                                          | -                                            |          |
| minSize        | 最小加载数量                                                                                   | number                                                                                                                                         | 1                                            |          |
| pageSize       | 一屏数量                                                                                       | number                                                                                                                                         | 10                                           |          |
| itemsRenderer  | 父渲染函数                                                                                     | (<br/> items: React.ReactNodeArray,<br/> ref: (instance: React.ReactInstance \| null) => React.ReactInstance \| null<br/> ) => React.ReactNode | `(items, ref) => <ul ref={ref}>{items}</ul>` |          |
| threshold      | 缓冲区高度                                                                                     | number                                                                                                                                         | 100                                          |          |
| itemSizeGetter | 获取 item 高度的函数                                                                           | (index?: number) => void                                                                                                                       | -                                            |          |
| jumpIndex      | 设置跳转位置，需要设置 itemSizeGetter 才能生效，不设置认为元素等高并取第一个元素高度作为默认高 | number                                                                                                                                         | 0                                            |          |
