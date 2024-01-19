import React from 'react';
import ReactDOM from 'react-dom';
import { Tree } from '@alifd/next';

const TreeNode = Tree.Node;

const formatDataSource = data => {
    return data.map(it => {
        return {
            ...it,
            key: it.value,
            children: formatDataSource(it.children || []),
        };
    });
};

class Demo extends React.Component {
    constructor(props) {
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
                    if (nodes.find(node => node.props.children && node.props.children.length)) {
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
