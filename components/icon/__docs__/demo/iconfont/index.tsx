import React from 'react';
import ReactDOM from 'react-dom';
import { Icon } from '@alifd/next';

const sizes = ['xxs', 'xs', 'small', 'medium', 'large', 'xl', 'xxl', 'xxxl'] as const;

const CustomIcon = Icon.createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_1464085_egnk4s8yv2f.js',
});

ReactDOM.render(
    <div>
        <div className="icon-list-2">
            <CustomIcon type="icon-store" />
            <CustomIcon type="icon-pic" />
            <CustomIcon type="icon-gift" />
        </div>
        <br />
        <ul className="icon-sizes">
            {sizes.map((size, index) => (
                <li key={index}>
                    <CustomIcon type="icon-pic" size={size} />
                    <span>{size}</span>
                </li>
            ))}
        </ul>
    </div>,
    mountNode
);
