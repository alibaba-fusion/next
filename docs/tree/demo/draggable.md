# 实现拖动

-   order: 9

实现节点的拖动逻辑。

:::lang=en-us

# Drag

-   order: 9

Drag the node inside or around other nodes.
:::

---

````jsx
import { Tree } from '@alifd/next';

const TreeNode = Tree.Node;

const x = 3;
const y = 2;
const z = 1;
const gData = [];

const generateData = (_level, _preKey, _tns) => {
    const preKey = _preKey || '0';
    const tns = _tns || gData;

    const children = [];
    for (let i = 0; i < x; i++) {
        const key = `${preKey}-${i}`;
        tns.push({ label: key, key });
        if (i < y) {
            children.push(key);
        }
    }

    if (_level < 0) {
        return tns;
    }

    const level = _level - 1;
    children.forEach((key, index) => {
        tns[index].children = [];
        return generateData(level, key, tns[index].children);
    });
};

generateData(z);

class Demo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            gData,
        };
    }

    onDrop(info) {
        if (!info.dragNode) {
            return;
        }
        const dragKey = info.dragNode.props.eventKey;
        const dropKey = info.node.props.eventKey;
        const dropPosition = info.dropPosition;

        const loop = (data, key, callback) => {
            data.forEach((item, index, arr) => {
                if (item.key === key) {
                    return callback(item, index, arr);
                }
                if (item.children) {
                    return loop(item.children, key, callback);
                }
            });
        };

        const data = [...this.state.gData];
        let dragObj;

        loop(data, dragKey, (item, index, arr) => {
            arr.splice(index, 1);
            dragObj = item;
        });

        if (info.dropPosition === 0) {
            loop(data, dropKey, item => {
                item.children = item.children || [];
                item.children.push(dragObj);
            });
        } else {
            let ar;
            let i;
            loop(data, dropKey, (item, index, arr) => {
                ar = arr;
                i = index;
            });
            if (dropPosition === -1) {
                ar.splice(i, 0, dragObj);
            } else {
                ar.splice(i + 1, 0, dragObj);
            }
        }

        this.setState({
            gData: data,
        });
    }
    render() {
        const loop = data =>
            data.map(item => {
                if (item.children) {
                    return (
                        <TreeNode key={item.key} label={item.key}>
                            {loop(item.children)}
                        </TreeNode>
                    );
                }
                return <TreeNode key={item.key} label={item.key} />;
            });

        return (
            <Tree
                draggable
                selectable={false}
                isLabelBlock
                defaultExpandedKeys={['0-0', '0-0-0', '0-0-0-0']}
                onDrop={this.onDrop.bind(this)}
            >
                {loop(this.state.gData)}
            </Tree>
        );
    }
}

ReactDOM.render(<Demo />, mountNode);
````
