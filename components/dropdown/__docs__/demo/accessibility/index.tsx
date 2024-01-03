import React from 'react';
import ReactDOM from 'react-dom';
import { Dropdown, Menu } from '@alifd/next';

const menu = (
    <Menu>
        <Menu.Item>Option 1</Menu.Item>
        <Menu.Item>Option 2</Menu.Item>
        <Menu.Item>Option 3</Menu.Item>
        <Menu.Item>Option 4</Menu.Item>
    </Menu>
);

ReactDOM.render(
    <div>
        <Dropdown
            trigger={<button>Hello dropdown</button>}
            triggerType={['click', 'hover']}
            afterOpen={() => console.log('after open')}
        >
            {menu}
        </Dropdown>
    </div>,
    mountNode
);
