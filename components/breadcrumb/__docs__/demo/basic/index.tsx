import React from 'react';
import ReactDOM from 'react-dom';
import { Breadcrumb } from '@alifd/next';

ReactDOM.render(
    <Breadcrumb>
        <Breadcrumb.Item link="javascript:void(0);">Home</Breadcrumb.Item>
        <Breadcrumb.Item link="javascript:void(0);">All Categories</Breadcrumb.Item>
        <Breadcrumb.Item link="javascript:void(0);">Women’s Clothing</Breadcrumb.Item>
        <Breadcrumb.Item link="javascript:void(0);">Blouses & Shirts</Breadcrumb.Item>
        <Breadcrumb.Item>
            T-shirts <b>78,999</b> Results
        </Breadcrumb.Item>
    </Breadcrumb>,
    mountNode
);
