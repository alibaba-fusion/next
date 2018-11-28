# VirtualList

-   category: Components
-   family: Util
-   chinese: 虚拟滚动列表

---

## API

### VirtualList

| 参数             | 说明                                                                                        | 类型       | 默认值                                              |
| -------------- | ----------------------------------------------------------------------------------------- | -------- | ------------------------------------------------ |
| children       | 渲染的子节点                                                                                    | any      | -                                                |
| minSize        | 最小加载数量                                                                                    | Number   | 1                                                |
| pageSize       | 一屏数量                                                                                      | Number   | 10                                               |
| itemsRenderer  | 父渲染函数，默认为 (items, ref) => <ul ref={ref}>{items}</ul><br><br>**签名**:<br>Function() => void | Function | (items, ref) => &lt;ul ref={ref}>{items}&lt;/ul> |
| threshold      | 缓冲区高度                                                                                     | Number   | 100                                              |
| itemSizeGetter | 获取item高度的函数<br><br>**签名**:<br>Function() => void                                          | Function | -                                                |
| jumpIndex      | 设置跳转位置，需要设置 itemSizeGetter 才能生效, 不设置认为元素等高并取第一个元素高度作为默认高                                  | Number   | 0                                                |
