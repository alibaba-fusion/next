import React from 'react';
import ReactDOM from 'react-dom';
import { Avatar, List } from '@alifd/next';

interface DataItem {
    title: string;
    img: string;
    money: string;
}

const data: DataItem[] = [
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
    <div style={{ width: 288 }}>
        <List
            size="small"
            header={<div>Notifications</div>}
            dataSource={data}
            renderItem={(item: DataItem, i) => (
                <List.Item
                    key={i}
                    extra={item.money}
                    title={item.title}
                    media={<Avatar src={item.img} />}
                >
                    List Item {i}
                </List.Item>
            )}
        />
    </div>,
    mountNode
);
