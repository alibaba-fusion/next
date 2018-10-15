# 大小

- order: 2

通过size进行大小设置，支持large、medium

:::lang=en-us

# Size

- order: 2

Filter dropdown, use with onFilterChange.
:::
---

````jsx
import { Search } from '@alifd/next';

ReactDOM.render(<div>
    <Search
        size="large"
        defaultValue="large"
        searchText="Search"
        placeholder="What are you looking for..." />
    <br/><br/>
    <Search
        size="medium"
        defaultValue="medium"
        searchText="Search"
        placeholder="What are you looking for..." />
</div>, mountNode);
````
