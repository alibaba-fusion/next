import React from 'react';
import ReactDOM from 'react-dom';
import { VirtualList } from '@alifd/next';

const dataSource = [];

const generateLi = (index: number) => {
    if (index % 3 === 0) {
        return (
            <li
                key={`key-${index}`}
                style={{ lineHeight: '30px', background: '#5f83ff', color: '#fff' }}
            >
                key-{index}
            </li>
        );
    } else {
        return (
            <li key={`key-${index}`} style={{ lineHeight: '20px' }}>
                key-{index}
            </li>
        );
    }
};

for (let i = 0; i < 1000; i++) {
    dataSource.push(generateLi(i));
}

const demo = (
    <div className={'virtual-box'}>
        <VirtualList>{dataSource}</VirtualList>
    </div>
);

ReactDOM.render(demo, mountNode);
