import React from 'react';
import ReactDOM from 'react-dom';
import { SplitButton } from '@alifd/next';

const { Item, Group, Divider } = SplitButton;

ReactDOM.render(
    <SplitButton type="primary" label="Edit Document" onItemClick={key => console.log(key)}>
        <Item>Undo</Item>
        <Item>Redo</Item>
        <Divider />
        <Group>
            <Item helper="CTRL + X">Cut</Item>
            <Item helper="CTRL + C">Copy</Item>
            <Item helper="CTRL + V">Paste</Item>
        </Group>
    </SplitButton>,
    mountNode
);
