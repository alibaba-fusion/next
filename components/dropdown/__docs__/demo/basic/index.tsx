import React from 'react';
import ReactDOM from 'react-dom';
import { Dropdown, Menu, Button } from '@alifd/next';

const menu = (
    <Menu>
        <Menu.Item>Option 1</Menu.Item>
        <Menu.Item>Option 2</Menu.Item>
        <Menu.Item>Option 3</Menu.Item>
        <Menu.Item>Option 4</Menu.Item>
    </Menu>
);

const pic = (
    <div
        style={{
            width: 200,
            height: 100,
            lineHeight: '100px',
            textAlign: 'center',
            background: '#ddd',
            color: '#555',
        }}
    >
        Click and Disappear
    </div>
);

ReactDOM.render(
    <div>
        <Dropdown
            trigger={<Button>hover me</Button>}
            onVisibleChange={console.log}
            triggerType={['hover']}
            afterOpen={() => console.log('after open')}
        >
            {menu}
        </Dropdown>
        &nbsp;&nbsp;
        <Dropdown
            autoClose
            trigger={<Button>click me</Button>}
            onVisibleChange={console.log}
            triggerType={['click']}
            afterOpen={() => console.log('after open')}
        >
            {pic}
        </Dropdown>
    </div>,
    mountNode
);
