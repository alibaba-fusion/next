# 基本用法

- order: 0

通过设置 `type` 属性来控制标签的展示类型，可选值包括：`normal`, `primary`

建议不要在标签中使用过长的文本，超出宽度的文本会使用 `...` 表示。

:::lang=en-us
# Basic Usage

- order: 0

set attribute `type` to controll how it displays, options：`normal`, `primary`
It is not recommamd to use long text inside tag. the exceeding limit part will be repalced with `...`.

:::

---

````jsx
import { Tag, Icon } from '@alifd/next';

const {Group: TagGroup} = Tag;

ReactDOM.render(<div className="tag-list">
    <h4>large size</h4>
    <TagGroup>
        <Tag type="normal" size="large">Normal large Tag</Tag>
        <Tag type="primary" size="large">Primary large Tag</Tag>
        <Tag size="large"><Icon type="smile" /> Tag With Icon</Tag>
    </TagGroup>

    <h4>medium(default) size</h4>
    <TagGroup>
        <Tag type="normal" size="medium">Normal Tag</Tag>
        <Tag type="primary">Primary Tag</Tag>
        <Tag><Icon type="smile" /> Tag With Icon</Tag>
    </TagGroup>

    <h4>small size</h4>
    <TagGroup>
        <Tag type="normal" size="small">Normal Small Tag</Tag>
        <Tag type="primary" size="small">Primary Small Tag</Tag>
        <Tag size="small"><Icon type="smile" /> Tag With Icon</Tag>
    </TagGroup>

    <h4>link tag</h4>
    <TagGroup>
        <Tag type="normal"><a href="//www.alibaba.com" target="_blank">normal Link Tag</a></Tag>
        <Tag type="primary"><a href="//www.alibaba.com" target="_blank">primary Link Tag</a></Tag>
        <Tag size="small"><a href="//www.alibaba.com" target="_blank"><Icon type="smile" /> Link Tag With Icon</a></Tag>
    </TagGroup>
</div>,
mountNode);
````
