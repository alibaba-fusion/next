import React from 'react';
import ReactDOM from 'react-dom';
import { SplitButton } from '@alifd/next';

const { Item } = SplitButton;
const menu = ['Undo', 'Redo', 'Cut', 'Copy', 'Paste'].map(item => <Item key={item}>{item}</Item>);

ReactDOM.render(
    <div>
        <SplitButton
            label="Edit Document"
            type="primary"
            triggerProps={{ 'aria-label': 'click to see more menu option' }}
        >
            {menu}
        </SplitButton>
    </div>,
    mountNode
);
