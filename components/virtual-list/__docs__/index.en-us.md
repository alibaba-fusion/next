# VirtualList

-   category: Components
-   family: Util
-   chinese: 虚拟滚动列表

---

## API

### VirtualList

| 参数            | 说明                                                                                        | 类型       | 默认值                                              |
| ------------- | ----------------------------------------------------------------------------------------- | -------- | ------------------------------------------------ |
| children      | child node to be rendered                                                                                  | any      | -                                                |
| minSize       | min count of items to be loaded                                                                                   | Number   | 1                                                |
| pageSize      | the number of items in one page                                                                                   | Number   | 10                                               |
| itemsRenderer | items parent dom，by default (items, ref) => <ul ref={ref}>{items}</ul><br><br>**signature**:<br>Function() => void | Function | (items, ref) => &lt;ul ref={ref}>{items}&lt;/ul> |
| threshold     | height of threshold                                                                                     | Number   | 100                                              |
| itemSizeGetter | get item's height<br><br>**signature**:<br>Function() => void                                          | Function | -                                                |
| jumpIndex   | the index you want to jump to, set itemSizeGetter if the height of items vary                                                      | Number   | 0                                                |
