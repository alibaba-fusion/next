import React from 'react';
import ReactDOM from 'react-dom';
import { SplitButton } from '@alifd/next';

const { Item } = SplitButton;
const menu = ['Undo', 'Redo', 'Cut', 'Copy', 'Paste'].map(item => <Item key={item}>{item}</Item>);

ReactDOM.render(
    <div className="split-button-size-demo">
        <SplitButton label="Edit Document" size="small" type="secondary">
            {menu}
        </SplitButton>
        <SplitButton label="Edit Document" size="medium" type="secondary">
            {menu}
        </SplitButton>
        <SplitButton label="Edit Document" size="large" type="secondary">
            {menu}
        </SplitButton>
    </div>,
    mountNode
);
