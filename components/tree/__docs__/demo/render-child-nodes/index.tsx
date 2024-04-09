import React from 'react';
import ReactDOM from 'react-dom';
import { Tree } from '@alifd/next';
import type { DataNode } from '@alifd/next/lib/tree';

const formatDataSource = (data: any[]): DataNode[] => {
    return data.map(it => {
        return {
            ...it,
            key: it.value,
            children: formatDataSource(it.children || []),
        };
    });
};

class Demo extends React.Component<
    any,
    {
        data: any[];
    }
> {
    constructor(props: any) {
        super(props);

        this.state = {
            data: [],
        };
    }

    componentDidMount() {
        fetch('https://os.alipayobjects.com/rmsportal/ODDwqcDFTLAguOvWEolX.json')
            .then(response => response.json())
            .then(data => this.setState({ data: formatDataSource([data[0]]) }))
            .catch(e => console.log(e));
    }

    render() {
        return (
            <Tree
                checkable
                renderChildNodes={nodes => {
                    if (nodes.find(node => node.props.children)) {
                        <ul role="group" className={`next-tree-child-tree`}>
                            {nodes}
                        </ul>;
                    }
                    return (
                        <ul role="group" className="next-tree-child-tree custom-leaf-tree">
                            {nodes}
                        </ul>
                    );
                }}
                defaultExpandAll
                dataSource={this.state.data}
            />
        );
    }
}

ReactDOM.render(<Demo />, mountNode);
