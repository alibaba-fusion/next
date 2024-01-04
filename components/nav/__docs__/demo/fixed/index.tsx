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
    <div>
        请查看{' '}
        <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://codepen.io/aboutblank/pen/JjdNKrm"
        >
            https://codepen.io/aboutblank/pen/JjdNKrm
        </a>
    </div>,
    mountNode
);
