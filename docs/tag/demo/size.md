# 尺寸

- order: 1

三种尺寸的 `Tag`


:::lang=en-us
# Size

- order: 1

three sizes of `Tag`

:::

---

````jsx
import { Tag, Icon } from '@alifd/next';

const {Group: TagGroup} = Tag;

ReactDOM.render(<div className="tag-list">
    <Tag size="small">小</Tag>
    <Tag size="medium">中</Tag>
    <Tag size="large">大</Tag>
</div>,
mountNode);
````

````css
.tag-list > * {
    margin-left: 10px;
}
````
