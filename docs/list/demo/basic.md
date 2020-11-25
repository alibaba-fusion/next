# 基础列表

- order: 0

最简单的用法。

:::lang=en-us
# Basic Usage

- order: 0

Simple usage of List component.

:::
---

````jsx
import { List, Avatar } from '@alifd/next';

const data = [
    {
        title: 'A Title',
        img: 'https://img.alicdn.com/tfs/TB1QS.4l4z1gK0jSZSgXXavwpXa-1024-1024.png',
        money: '$20',
    },
    {
        title: 'B Title',
        img: 'https://img.alicdn.com/tfs/TB1QS.4l4z1gK0jSZSgXXavwpXa-1024-1024.png',
        money: '$10',
    },
    {
        title: 'Title',
        img: 'https://img.alicdn.com/tfs/TB1QS.4l4z1gK0jSZSgXXavwpXa-1024-1024.png',
        money: '$20',
    },
    {
        title: 'Title',
        img: 'https://img.alicdn.com/tfs/TB1QS.4l4z1gK0jSZSgXXavwpXa-1024-1024.png',
        money: '$20',
    },
];

ReactDOM.render(
    <div style={{width: 288}}>
        <List
            size="small"
            header={<div>Notifications</div>}
            dataSource={data}
            renderItem={(item, i) => <List.Item key={i} extra={item.money} title={item.title} media={<Avatar src={item.img}/>}>List Item {i}</List.Item>}
        />
    </div>
, mountNode);
````

````css

````
