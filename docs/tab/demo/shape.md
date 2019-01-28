# 形态

- order: 1

根据使用场景及触发控件的类型，可以通过 `shape` 属性配置选项卡的类型，主要包括：

- `pure` 普通选项卡（默认）
- `wrapped`  包裹型选项卡
- `text` 文本型选项卡
- `capsule` 胶囊型选项卡

:::lang=en-us
# Shape

- order: 1

Change shape of Tab by `shape`.

:::

---

````jsx
import { Tab } from '@alifd/next';

function onChange(key) {
    console.log(key);
}

const tabs = [
    { tab: 'Home', key: 'home', content: 'This is home page' },
    { tab: 'Document', key: 'doc', content: 'This is document page' },
    { tab: 'API', key: 'api', content: 'This is api page' },
    { tab: 'Repo', key: 'repo', content: 'This ia repo link' }
];

const shapes = ['pure', 'wrapped', 'text', 'capsule'];

ReactDOM.render(
    <div className="fusion-demo">
        {
            shapes.map(shape => (<div key={shape} className="fusion-demo-item">
                <Tab shape={shape} onChange={onChange}>
                    {
                        tabs.map(tab => <Tab.Item title={tab.tab} key={tab.key}>{tab.content}</Tab.Item>)
                    }
                </Tab>
            </div>))
        }
    </div>
    , mountNode);
````

````css
.fusion-demo-item {
    margin: 14px 0;
}

.next-tabs-content {
    color: #333;
    font-size: 12px;
    padding: 12px;
}
````
