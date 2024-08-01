# VirtualList

-   category: Components
-   family: Util
-   chinese: 虚拟滚动列表

---

## API

### VirtualList

| Param          | Description                                                                                                                                                                                   | Type                                                                                                                                           | Default Value                                | Required |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- | -------- |
| children       | Children of the virtual list component                                                                                                                                                        | React.ReactElement \| Array\<React.ReactElement \| undefined \| null>                                                                          | -                                            |          |
| minSize        | The minimum number of items to be loaded                                                                                                                                                      | number                                                                                                                                         | 1                                            |          |
| pageSize       | The number of items to be rendered in one screen                                                                                                                                              | number                                                                                                                                         | 10                                           |          |
| itemsRenderer  | The parent render function                                                                                                                                                                    | (<br/> items: React.ReactNodeArray,<br/> ref: (instance: React.ReactInstance \| null) => React.ReactInstance \| null<br/> ) => React.ReactNode | `(items, ref) => <ul ref={ref}>{items}</ul>` |          |
| threshold      | The height of the buffer                                                                                                                                                                      | number                                                                                                                                         | 100                                          |          |
| itemSizeGetter | The function to get the height of the item                                                                                                                                                    | (index?: number) => void                                                                                                                       | -                                            |          |
| jumpIndex      | Set the jump position, need to set itemSizeGetter to take effect, if not set, the element is assumed to be of equal height and the height of the first element is taken as the default height | number                                                                                                                                         | 0                                            |          |
