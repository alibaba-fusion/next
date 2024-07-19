import React from 'react';
import ReactDOM from 'react-dom';
import { Search, Tree } from '@alifd/next';
import type { DataNode, NodeInstance } from '@alifd/next/types/tree';

function generateDataSource(count = 100) {
    return new Array(count).fill(null).map((__, i) => {
        return {
            label: '服装',
            key: `${i}`,
            className: `k-${i}`,
            children: [
                {
                    label: '男装',
                    key: `${i}_${i}`,
                    className: `k-${i}-${i}`,
                    children: [
                        {
                            label: '外套',
                            key: `${i}_${i}_${i}`,
                            className: `k-${i}-${i}-${i}`,
                        },
                        {
                            label: '夹克',
                            key: `${i}_${i}_${i}_${i}`,
                            className: `k-${i}-${i}-${i}-${i}`,
                        },
                    ],
                },
            ],
        };
    });
}

const data: DataNode[] = [
    ...generateDataSource(),
    {
        label: '服装',
        key: '100',
        className: 'k-100',
        children: [
            {
                label: '女装',
                key: '100_100',
                className: 'k-100-100',
                children: [
                    {
                        label: '裙子',
                        key: '100_100_100',
                        className: 'k-100-100-100',
                    },
                    {
                        label: '毛衣',
                        key: '100_100_100_100',
                        className: 'k-100-100-100-100',
                    },
                ],
            },
        ],
    },
];

class Demo extends React.Component<
    any,
    {
        expandedKeys: string[];
        autoExpandParent: boolean;
    }
> {
    matchedKeys: string[] | null;
    treeRef: React.MutableRefObject<InstanceType<typeof Tree> | null>;
    constructor(props: any) {
        super(props);

        this.state = {
            expandedKeys: ['2'],
            autoExpandParent: true,
        };

        this.matchedKeys = [];

        this.handleSearch = this.handleSearch.bind(this);
        this.handleExpand = this.handleExpand.bind(this);
        this.treeRef = React.createRef();
    }

    handleSearch(value: string) {
        value = value.trim();
        if (!value) {
            this.matchedKeys = null;
            return;
        }

        const matchedKeys: string[] = [];
        const loop = (data: DataNode[]) =>
            data.forEach(item => {
                if ((item.label! as string).indexOf(value) > -1) {
                    matchedKeys.push(item.key);
                }
                if (item.children && item.children.length) {
                    loop(item.children);
                }
            });
        loop(data);

        this.setState(
            {
                expandedKeys: [...matchedKeys],
                autoExpandParent: true,
            },
            () => {
                if (this.treeRef.current && this.treeRef.current.getInstance) {
                    this.treeRef.current.getInstance().scrollFilterNodeIntoView();
                }
            }
        );
        this.matchedKeys = matchedKeys;
    }

    handleExpand(keys: string[]) {
        this.setState({
            expandedKeys: keys,
            autoExpandParent: false,
        });
    }

    render() {
        const { expandedKeys, autoExpandParent } = this.state;
        const filterTreeNode = (node: NodeInstance) => {
            return !!this.matchedKeys && this.matchedKeys.indexOf(node.props.eventKey!) > -1;
        };

        return (
            <div>
                <Search
                    shape="simple"
                    size="medium"
                    style={{ width: '200px', marginBottom: '10px' }}
                    onChange={this.handleSearch}
                />
                <Tree
                    ref={this.treeRef}
                    expandedKeys={expandedKeys}
                    autoExpandParent={autoExpandParent}
                    style={{ maxHeight: '300px', overflow: 'auto' }}
                    filterTreeNode={filterTreeNode}
                    onExpand={this.handleExpand}
                    dataSource={data}
                />
            </div>
        );
    }
}

ReactDOM.render(<Demo />, mountNode);
