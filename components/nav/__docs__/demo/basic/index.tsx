import React from 'react';
import ReactDOM from 'react-dom';
import { Nav } from '@alifd/next';

const { Item, SubNav } = Nav;

const header = <span className="fusion">FUSION</span>;
const footer = (
    <a className="login-in" href="javascript:;">
        Login in
    </a>
);

ReactDOM.render(
    <Nav
        className="basic-nav"
        mode="popup"
        direction="hoz"
        type="primary"
        header={header}
        footer={footer}
        defaultSelectedKeys={['home']}
        triggerType="hover"
    >
        <Item key="home">Home</Item>
        <SubNav label="Component" noIcon>
            <SubNav label="Next">
                <Item key="next-design">Design</Item>
                <Item key="next-doc">Document</Item>
            </SubNav>
            <SubNav label="Meet">
                <Item key="meet-design">Design</Item>
                <Item key="meet-doc">Document</Item>
            </SubNav>
        </SubNav>
        <Item key="document">Document</Item>
    </Nav>,
    mountNode
);
