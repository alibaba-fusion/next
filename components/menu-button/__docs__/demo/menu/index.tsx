import React from 'react';
import ReactDOM from 'react-dom';
import { MenuButton } from '@alifd/next';

const { Item, Group, Divider } = MenuButton;

function selectItem(id: any) {
    console.log(id);
}

ReactDOM.render(
    <MenuButton type="primary" label="Document Edit" onItemClick={selectItem}>
        <Item key="undo">Undo</Item>
        <Item key="redo">Redo</Item>
        <Divider />
        <Group>
            <Item key="cut">Cut</Item>
            <Item key="copy">Copy</Item>
            <Item key="paste">Paste</Item>
        </Group>
    </MenuButton>,
    mountNode
);
