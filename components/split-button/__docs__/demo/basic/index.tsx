import React from 'react';
import ReactDOM from 'react-dom';
import { SplitButton, Box } from '@alifd/next';

const { Item } = SplitButton;
const menu = ['Undo', 'Redo', 'Cut', 'Copy', 'Paste'].map(item => <Item key={item}>{item}</Item>);

ReactDOM.render(
    <Box direction="row" spacing={20}>
        <SplitButton label="Edit Document">{menu}</SplitButton>
        <SplitButton label="Edit Document" type="secondary">
            {menu}
        </SplitButton>
        <SplitButton label="Edit Document" type="primary">
            {menu}
        </SplitButton>
    </Box>,
    mountNode
);
