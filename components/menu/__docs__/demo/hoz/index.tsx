import React from 'react';
import ReactDOM from 'react-dom';
import { Menu } from '@alifd/next';

const { SubMenu, Item } = Menu;

ReactDOM.render(
    <Menu
        hozInLine
        direction="hoz"
        mode="popup"
        className="my-hoz-menu"
        popupClassName="my-hoz-menu"
        popupAutoWidth
    >
        <Item key="1">First</Item>
        <Item key="2">Second</Item>
        <SubMenu label="Sub Nav">
            <Item key="sub-12">Sub option 1</Item>
            <Item key="sub-22">Sub option 2</Item>
            <SubMenu label="Sub Sub Nav">
                <Item key="sub-sub-122">Sub sub option 1</Item>
                <Item key="sub-sub-222">Sub sub option 2</Item>
            </SubMenu>
        </SubMenu>
        <SubMenu label="Sub Nav">
            <Item key="sub-1">Sub option 1</Item>
            <Item key="sub-2">Sub option 2</Item>
            <SubMenu label="Sub Sub Nav">
                <Item key="sub-sub-1">Sub sub option 1</Item>
                <Item key="sub-sub-2">Sub sub option 2</Item>
            </SubMenu>
        </SubMenu>
        <Item key="3">Third</Item>
    </Menu>,
    mountNode
);
