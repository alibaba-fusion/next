# 自定义 loading 样式

- order: 3

自定义 `loading` 样式。

:::lang=en-us
# Basic Usage

- order: 3

Custom Loading component.

:::
---

````jsx
import { List, Avatar, Button, Loading, Icon } from '@alifd/next';
import { useState } from 'react';

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

const indicator = (
    <div>
        <Icon type="loading" />
    </div>
);

const CustomLoading = (props) => (
    <Loading
        indicator={indicator}
        {...props}
    />
);

const App = () => {
    const [loading, setLoading] = useState(false);

    return <div style={{width: 288}}>
        <Button onClick={() => setLoading(!loading)}>Toggle loading</Button>
        <List
            size="small"
            loading={loading}
            loadingComponent={CustomLoading}
            header={<div>Notifications</div>}
            dataSource={data}
            renderItem={(item, i) => <List.Item key={i} extra={item.money} title={item.title} media={<Avatar src={item.img}/>}>List Item {i}</List.Item>}
        />
    </div>
}
ReactDOM.render(
    <App />
, mountNode);
````

````css

````
