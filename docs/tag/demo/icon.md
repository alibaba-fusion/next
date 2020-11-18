# 带有图标

- order: 2

根据自身需要设置 icon

:::lang=en-us
# Basic Usage

- order: 2

add `Icon` in tag if it's necessary

:::

---

````jsx
import { Tag, Icon } from '@alifd/next';

const {Group: TagGroup} = Tag;

ReactDOM.render(<div className="tag-list">
    <Tag>
        <Icon type="add" />
        tag 1
    </Tag>
    <Tag>
        <Icon type="account" />
        tag 2
    </Tag>
    <Tag>
        <Icon type="smile" />
        tag 3
    </Tag>
</div>,
mountNode);
````

````css
.tag-list > * {
    margin-left: 10px;
}
````
