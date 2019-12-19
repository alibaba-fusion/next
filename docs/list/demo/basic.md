# 基本

- order: 0

简单的列表展示。

:::lang=en-us
# Basic Usage

- order: 0

Simple usage of List component.

:::
---

````jsx
import { List, Avatar } from '@alifd/next';

ReactDOM.render(
    <div style={{width: 288}}>
        <List size="small" header={<div>Notifications</div>}>
            <List.Item extra={'$20'} media={<Avatar src={'https://img.alicdn.com/tfs/TB1QS.4l4z1gK0jSZSgXXavwpXa-1024-1024.png'}/>} title="Title">List Item 1</List.Item>
            <List.Item extra={'$20'} title="Title" media={<Avatar src={'https://img.alicdn.com/tfs/TB1QS.4l4z1gK0jSZSgXXavwpXa-1024-1024.png'}/>}>List Item 2</List.Item>
            <List.Item extra={'$20'} title="Title" media={<Avatar src={'https://img.alicdn.com/tfs/TB1QS.4l4z1gK0jSZSgXXavwpXa-1024-1024.png'}/>}>List Item 3</List.Item>
            <List.Item extra={'$20'} title="Title" media={<Avatar src={'https://img.alicdn.com/tfs/TB1QS.4l4z1gK0jSZSgXXavwpXa-1024-1024.png'}/>}>List Item 4</List.Item>
            <List.Item extra={'$20'} title="Title" media={<Avatar src={'https://img.alicdn.com/tfs/TB1QS.4l4z1gK0jSZSgXXavwpXa-1024-1024.png'}/>}>List Item 5</List.Item>
        </List>
    </div>
, mountNode);
````

````css

````
