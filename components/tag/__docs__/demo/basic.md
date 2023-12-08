# 基本

- order: 0

基本的标签

:::lang=en-us
# Basic Usage

- order: 0

basic tag

:::

---

````jsx
import { Tag, Icon } from '@alifd/next';

const {Group: TagGroup} = Tag;

ReactDOM.render(<div className="tag-list">
    <Tag type="normal">Normal Tag</Tag>
    <Tag type="primary">Primary Tag</Tag>
</div>,
mountNode);
````

````css
.tag-list > * {
    margin-left: 10px;
}
````
