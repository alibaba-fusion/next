import React from 'react';
import ReactDOM from 'react-dom';
import { Select, Icon } from '@alifd/next';
import { type SelectProps } from '@alifd/next/lib/select';

const dataSource = [
    { value: '#FF0000', label: 'red', title: 'red' },
    { value: '#00AA00', label: 'green', title: 'green' },
    { value: '#B482DB', label: 'purple', title: 'purple' },
    { value: '#F17334', label: 'orange', title: 'orange' },
    { value: '#66CCFF', label: 'blue', title: 'blue' },
];

const itemRender: SelectProps['itemRender'] = (item: { value: string }) => {
    return (
        <span>
            <Icon type="account" size="xs" style={{ color: item.value }} />
            <Icon type="account" size="xs" style={{ color: item.value }} />
            <Icon type="account" size="xs" style={{ color: item.value }} />
            <Icon type="account" size="xs" style={{ color: item.value }} />
            <Icon type="account" size="xs" style={{ color: item.value }} />
        </span>
    );
};

const valueRender: SelectProps['valueRender'] = (item: { value: string; label: string }) => {
    return (
        <span>
            <Icon type="account" size="xs" style={{ color: item.value }} /> {item.label}
        </span>
    );
};

const dataSource2 = [
    'Lorem ipsum dolor sit amet',
    'consectetur adipisicing elit',
    'sed do eiusmod tempor incididunt',
    'ut labore et dolore magna aliqua.',
    'Ut enim ad minim veniam',
    'quis nostrud exercitation',
    'ullamco laboris nisi ut',
    'aliquip ex ea commodo consequat',
    'Duis aute irure dolor in',
    'reprehenderit in voluptate',
    'velit esse cillum dolore eu',
    'Fugiat nulla pariatur excepteur sint',
    'occaecat cupidatat non proident',
    'sunt in culpa qui officia',
    'deserunt mollit anim id est laborum',
];

// highlight keywords
const itemRender2: SelectProps['itemRender'] = (item, searchKey) => {
    let label = item.label as string;
    if (searchKey && searchKey.length) {
        const key = searchKey.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
        const reg = new RegExp(`(${key})`, 'ig');
        label = label.replace(reg, x => `<span class="next-select-highlight">${x}</span>`);
    }

    return <span dangerouslySetInnerHTML={{ __html: label }} />;
};

ReactDOM.render(
    <div className="demo-container">
        <Select
            dataSource={dataSource}
            itemRender={itemRender}
            valueRender={valueRender}
            placeholder="pick your color"
        />
        <Select
            showSearch
            dataSource={dataSource2}
            itemRender={itemRender2}
            placeholder="highlight keywords"
            style={{ minWidth: 200, marginLeft: 8 }}
        />
    </div>,
    mountNode
);
