import React from 'react';
import ReactDOM from 'react-dom';
import { MenuButton } from '@alifd/next';

const { Item } = MenuButton;
const menu = ['Undo', 'Redo', 'Cut', 'Copy', 'Paste'].map(item => <Item key={item}>{item}</Item>);

ReactDOM.render(
    <div>
        <MenuButton
            label="Single"
            selectMode="single"
            onSelect={keys => console.log(keys)}
            type="secondary"
            style={{ marginRight: 20 }}
        >
            {menu}
        </MenuButton>
        <MenuButton
            label="Multiple"
            selectMode="multiple"
            onSelect={keys => console.log(keys)}
            type="secondary"
        >
            {menu}
        </MenuButton>
    </div>,
    mountNode
);
