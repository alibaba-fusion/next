# 空状态

- order: 4

无数据时候的列表展示。

:::lang=en-us
# Basic Usage

- order: 4

List widthout data.

:::
---

````jsx
import { List, Avatar, Button } from '@alifd/next';

ReactDOM.render(
    <div style={{width: 288}}>
        <List
            size="small"
            header={<div>Notifications</div>}
            dataSource={[]}
            renderItem={(item, i) => <List.Item key={i} extra={item.money} title={item.title} media={<Avatar src={item.img}/>}>List Item {i}</List.Item>}
        />
    </div>
, mountNode);
````
````css

````
