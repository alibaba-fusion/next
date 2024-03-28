import React from 'react';
import ReactDOM from 'react-dom';
import { Tree } from '@alifd/next';
import type { DataNode } from '../../../types';

function createDataSource(level = 3, count = 5) {
    const dataSource = [];
    let num = 0;

    const drill = (children: DataNode[], _level: number, _count: number) => {
        children.forEach(child => {
            child.children = new Array(_count).fill(null).map((item, k) => {
                const key = `${child.key}-${k}`;
                num++;
                return {
                    key,
                    label: key,
                };
            });
            _level > 0 && drill(child.children, _level - 1, count);
        });
    };

    dataSource.push({
        label: '0-0',
        key: '0-0',
    });
    drill(dataSource, level, count);

    console.log('node num:', num + 1);

    return dataSource;
}

class Demo extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = {
            dataSource: [],
        };
    }
    componentDidMount() {
        this.setState({
            dataSource: createDataSource(),
        });
    }

    onSelect(keys: string[], info: any) {
        console.log('onSelect', keys, info);
    }

    onCheck(keys: string[], info: any) {
        console.log('onCheck', keys, info);
    }

    render() {
        const dataSource = this.state.dataSource;

        return dataSource.length ? (
            <Tree
                checkable
                showLine
                useVirtual
                style={{ maxHeight: '300px', overflow: 'auto' }} // 注意设置Tree组件高度&允许滚动
                defaultExpandAll
                defaultCheckedKeys={['0-0-1', '0-0-2']}
                onSelect={this.onSelect}
                onCheck={this.onCheck}
                dataSource={dataSource}
                virtualListProps={{ jumpIndex: 40, itemSizeGetter: () => 28 }}
            />
        ) : null;
    }
}

ReactDOM.render(<Demo />, mountNode);
