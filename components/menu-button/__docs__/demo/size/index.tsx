import React from 'react';
import ReactDOM from 'react-dom';
import { MenuButton, Box } from '@alifd/next';

const { Item } = MenuButton;
const menu = ['Undo', 'Redo', 'Cut', 'Copy', 'Paste'].map(item => <Item key={item}>{item}</Item>);

ReactDOM.render(
    <Box direction="row" spacing={20}>
        <MenuButton label="Edit Document" size="small" type="secondary">
            {menu}
        </MenuButton>
        <MenuButton label="Edit Document" size="medium" type="secondary">
            {menu}
        </MenuButton>
        <MenuButton label="Edit Document" size="large" type="secondary">
            {menu}
        </MenuButton>
    </Box>,
    mountNode
);
