# 自定义样式

- order: 6

可以通过 displayRender 来定制单选时展示的结果，可以通过 listStyle，listClassName 来定制组件宽高。

:::lang=en-us
# Customize style

- order: 6

You can use displayRender to customize the results displayed when single select, and you can customize the component width and height by using listStyle and listClassName.
:::

---

````jsx
import { CascaderSelect, Icon } from '@alifd/next';

const dataSource = [{
    value: '2973',
    label: '陕西',
    children: [{
        value: '2974',
        label: '西安',
        children: [
            { value: '2975', label: '西安市' },
            { value: '2976', label: '高陵县' }
        ]
    }, {
        value: '2980',
        label: '铜川',
        children: [
            { value: '2981', label: '铜川市' },
            { value: '2982', label: '宜君县' }
        ]
    }]
}, {
    value: '3371',
    label: '新疆',
    children: [{
        value: '3430',
        label: '巴音郭楞蒙古自治州',
        children: [
            { value: '3431', label: '库尔勒市' },
            { value: '3432', label: '和静县' }
        ]
    }]
}];

const itemRender = item => {
    return (
        <span>
            <Icon type="account" size="xs" /> {item.label}
        </span>
    );
};

ReactDOM.render(<CascaderSelect style={{ width: '452px'}} listStyle={{ width: '150px', height: '160px' }} displayRender={labels => labels[labels.length - 1]} defaultValue="3431" dataSource={dataSource} itemRender={itemRender} />, mountNode);
````
