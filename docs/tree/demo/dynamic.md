# 异步加载

-   order: 6

点击展开节点之后动态加载数据，常用于通过后端接口获取数据的场景。通过设置 `loadData` 属性开启，通过设置 `isLeaf` 属性，判断节点是否是叶子节点，允许异步加载数据。

:::lang=en-us

# Loading data asynchronously

-   order: 6

Click node to load data dynamically.
:::

---

````jsx
import { Tree } from '@alifd/next';

class Demo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [
                { label: 'Expand to load', key: '0' },
                { label: 'Expand to load', key: '1' },
                { label: 'Leaf', key: '2', isLeaf: true },
            ],
        };

        this.onLoadData = this.onLoadData.bind(this);
    }

    onLoadData(node) {
        return new Promise(resolve => {
            if (node.props.children) {
                return resolve();
            }

            const { eventKey, pos } = node.props;
            const item = this.getItemByPos(pos);
            setTimeout(() => {
                item.children = [
                    { label: 'Child Tree', key: `${eventKey}-0` },
                    { label: 'Child Tree', key: `${eventKey}-1` },
                ];
                this.setState({
                    data: [...this.state.data],
                });
                resolve();
            }, 1000);
        });
    }

    getItemByPos(pos) {
        return pos
            .split('-')
            .slice(1)
            .reduce((ret, num) => ret.children[num], { children: this.state.data });
    }

    render() {
        return <Tree dataSource={this.state.data} loadData={this.onLoadData} />;
    }
}

ReactDOM.render(<Demo />, mountNode);
````
