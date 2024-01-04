import React from 'react';
import ReactDOM from 'react-dom';
import { MenuButton, Box } from '@alifd/next';

const { Item } = MenuButton;
const menu = ['Undo', 'Redo', 'Cut', 'Copy', 'Paste'].map(item => <Item key={item}>{item}</Item>);

ReactDOM.render(
    <div>
        <Box direction="row" spacing={20}>
            <MenuButton label="Document Edit">{menu}</MenuButton>
            <MenuButton type="primary" label="Document Edit">
                {menu}
            </MenuButton>
            <MenuButton type="secondary" label="Document Edit">
                {menu}
            </MenuButton>
        </Box>
        <br />
        <Box direction="row" spacing={20}>
            <MenuButton text label="Document Edit">
                {menu}
            </MenuButton>
            <MenuButton text type="primary" label="Document Edit">
                {menu}
            </MenuButton>
            <MenuButton text type="secondary" label="Document Edit">
                {menu}
            </MenuButton>
        </Box>
    </div>,
    mountNode
);
