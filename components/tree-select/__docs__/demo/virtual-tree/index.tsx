import React from 'react';
import ReactDOM from 'react-dom';
import { TreeSelect } from '@alifd/next';

function createDataSource(level = 3, count = 5) {
    const dataSource = [];
    let num = 0;

    const drill = (children, _level, _count) => {
        children.forEach((child, i) => {
            child.children = new Array(_count).fill(null).map((item, k) => {
                const key = `${child.key}-${k}`;
                num++;
                return {
                    key,
                    label: key,
                    value: key,
                };
            });
            _level > 0 && drill(child.children, _level - 1, count);
        });
    };

    dataSource.push({
        label: '0-0',
        key: '0-0',
        value: '0-0',
    });
    drill(dataSource, level, count);
    console.log('node num:', num + 1);
    return dataSource;
}

class Demo extends React.Component {
    constructor() {
        super();

        this.state = {
            dataSource: [],
        };
    }

    onChange(keys, info) {
        console.log('onSelect', keys, info);
    }

    componentDidMount() {
        this.setState({
            dataSource: createDataSource(),
        });
    }

    render() {
        const dataSource = this.state.dataSource;

        const treeProps = {
            showLine: true,
            defaultExpandAll: true,
            defaultCheckedKeys: ['0-0-1', '0-0-2'],
        };

        return dataSource.length ? (
            <TreeSelect
                useVirtual
                style={{ width: 320 }}
                treeProps={treeProps}
                onChange={this.onChange}
                dataSource={dataSource}
            />
        ) : null;
    }
}

ReactDOM.render(<Demo />, mountNode);
