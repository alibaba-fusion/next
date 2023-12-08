# 无障碍支持

- order: 6

按下Enter键调用`onSearch`事件去处理,请参考[无障碍键盘操作指南](#无障碍键盘操作指南)。

:::lang=en-us
# Accessibility

- order: 6

Press the Enter key to call the `onSearch` event handle,Please refer to `ARIA and KeyBoard`.

:::
---

````jsx
import { Search } from '@alifd/next';

ReactDOM.render(<div>
    <Search key="3" placeholder="Please enter the search content" onSearch={v => console.log(v)} searchText={<span>search</span>} style={{width: '400px'}}/>
</div>, mountNode);
````
