# 勾选

-   order: 3

通过设置`checkable`为`true`，开启节点勾选，默认情况下，节点的勾选状态受上下级节点的关联，可以通过`checkStrictly`为`false`关闭该关联逻辑。

:::lang=en-us

# Parent and child node checked is related

-   order: 3

Demo whether parent and child node checked is related.
:::

---

````jsx
import { Checkbox, Tree } from '@alifd/next';

const data = [
    {
        label: 'Component',
        key: '1',
        children: [
            {
                label: 'Form',
                key: '2',
                selectable: false,
                children: [
                    {
                        label: 'Input',
                        key: '4',
                    },
                    {
                        label: 'Select',
                        key: '5',
                        disabled: true,
                    },
                ],
            },
            {
                label: 'Display',
                key: '3',
                children: [
                    {
                        label: 'Table',
                        key: '6',
                    },
                ],
            },
        ],
    },
];
class Demo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            checkedKeys: [],
            checkStrictly: false,
        };
        this.handleCheck = this.handleCheck.bind(this);
        this.handleCheckStrictly = this.handleCheckStrictly.bind(this);
    }

    handleCheck(keys, info) {
        console.log(keys, info);

        this.setState({
            checkedKeys: keys,
        });
    }

    handleCheckStrictly() {
        this.setState({
            checkStrictly: !this.state.checkStrictly,
            checkedKeys: [],
        });
    }

    render() {
        const { checkedKeys, checkStrictly } = this.state;

        return (
            <div className="control-check-demo">
                <label className="strictly-check">
                    <Checkbox checked={checkStrictly} onChange={this.handleCheckStrictly} />
                    <span className="strictly-text">取消选中关联</span>
                </label>
                <Tree
                    defaultExpandAll
                    checkable
                    checkStrictly={checkStrictly}
                    checkedKeys={checkedKeys}
                    onCheck={this.handleCheck}
                    dataSource={data}
                />
            </div>
        );
    }
}

ReactDOM.render(<Demo />, mountNode);
````

````css
.control-check-demo .strictly-check {
    display: block;
    margin-bottom: 10px;
}

.control-check-demo .strictly-text {
    display: inline-block;
    margin-left: 10px;
    vertical-align: middle;
    color: #666;
    font-size: 14px;
}
````
