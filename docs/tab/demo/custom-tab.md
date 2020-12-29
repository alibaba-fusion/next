# 自定义选项卡

- order: 10

Tab 支持使用 `tabRender` 属性返回自定义组件作为选项卡内容，注意该属性接收函数作为属性值。

:::lang=en-us
# Custom tab

- order: 10

By default, tabs are rendered by a default template function. Howerver, you can pass your template function to `tabRender`.

:::

---

````jsx
import { Tab } from '@alifd/next';

function CustomTabItem({ title, desc, img }) {
    return (<div className="custom-tab-item">
        <div className="tab-title"><img className="tab-img" src={img}/>{title}</div>
        <div className="tab-desc">{desc}</div>
    </div>);
}

const panes = [
    { key: 'e-checking', title: 'Alipay', desc: 'The fee to be paid is $15', img: 'https://img.alicdn.com/tfs/TB1wra0otTfau8jSZFwXXX1mVXa-80-80.png' },
    { key: 'brand-card', title: 'Bank Card', desc: 'The fee to be paid is $17', img: 'https://img.alicdn.com/tfs/TB1nKE5s79l0K4jSZFKXXXFjpXa-67-65.png' }
];

ReactDOM.render(
    <Tab shape="wrapped" tabRender={(key, props) => <CustomTabItem key={key} {...props} />}>
        {
            panes.map(pane => <Tab.Item key={pane.key} {...pane} tabStyle={{ height: '60px' }}>{pane.desc}</Tab.Item>)
        }
    </Tab>
    , mountNode);
````

````css
.custom-tab-item {
    padding: 10px;
}

.tab-title {
    display: flex;
    align-items: center;
}
.tab-img {
    margin-right: 8px;
    width: 20px;
}
.tab-desc {
    margin: 10px 0 0 0;
    font-size: 12px;
}
.next-tabs-content {
    color: #333;
    font-size: 12px;
    padding: 12px;
}
````
