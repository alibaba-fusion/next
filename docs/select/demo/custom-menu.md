# 自定义菜单

- order: 7

通过 `itemRender` 和 `valueRender` (仅 Select) 自定义渲染的节点内容。

:::lang=en-us

# custom menu

- order: 7

custom render Item by api of `itemRender` and `valueRender` (only support by Select)

:::
---

````jsx
import { Select, Icon } from '@alifd/next';

const dataSource = [
    {value: '#FF0000', label: 'red', title: 'red'},
    {value: '#00AA00', label: 'green', title: 'green'},
    {value: '#B482DB', label: 'purple', title: 'purple'},
    {value: '#F17334', label: 'orange', title: 'orange'},
    {value: '#66CCFF', label: 'blue', title: 'blue'}
];

const itemRender = item => {
    return (
        <span>
            <Icon type="account" size="xs" style={{color: item.value}} />
            <Icon type="account" size="xs" style={{color: item.value}} />
            <Icon type="account" size="xs" style={{color: item.value}} />
            <Icon type="account" size="xs" style={{color: item.value}} />
            <Icon type="account" size="xs" style={{color: item.value}} />
        </span>
    );
};

const valueRender = item => {
    return <span><Icon type="account" size="xs" style={{color: item.value}} /> {item.label}</span>;
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
    'deserunt mollit anim id est laborum'
];

// highlight keywords
const itemRender2 = (item, searchKey) => {
    let label = item.label;
    if (searchKey && searchKey.length) {
        const key = searchKey.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
        const reg = new RegExp(`(${key})`, 'ig');
        label = label.replace(reg, x => `<span class="next-select-highlight">${x}</span>`);
    }

    return <span dangerouslySetInnerHTML={{__html: label}} />;
};

ReactDOM.render(
    <div className="demo-container">
        <Select dataSource={dataSource} itemRender={itemRender} valueRender={valueRender} placeholder="pick your color" />
        <Select showSearch dataSource={dataSource2} itemRender={itemRender2} placeholder="highlight keywords" style={{minWidth: 200, marginLeft: 8}} />
    </div>,
    mountNode
);
````
