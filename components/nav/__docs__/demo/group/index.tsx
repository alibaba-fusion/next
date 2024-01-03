import React from 'react';
import ReactDOM from 'react-dom';
import { Nav } from '@alifd/next';

const { Item, Group } = Nav;

ReactDOM.render(
    <Nav style={{ width: 240 }}>
        <Group label="Group Label 1">
            <Item icon="account">Navigation One</Item>
            <Item icon="account">Navigation Two</Item>
            <Item icon="account">Navigation Three</Item>
        </Group>
        <Group label="Group Label 2">
            <Item icon="account">Navigation Four</Item>
            <Item icon="account">Navigation Five</Item>
            <Item icon="account">Navigation Six</Item>
        </Group>
    </Nav>,
    mountNode
);
