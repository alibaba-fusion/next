import React from 'react';
import ReactDOM from 'react-dom';
import { Tree } from '@alifd/next';

class Demo extends React.Component<
    any,
    {
        data: any[];
    }
> {
    constructor(props: any) {
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

    onLoadData(node: any) {
        return new Promise<void>(resolve => {
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

    getItemByPos(pos: string) {
        return pos
            .split('-')
            .slice(1)
            .reduce((ret, num) => ret.children[Number(num)], { children: this.state.data });
    }

    render() {
        return <Tree dataSource={this.state.data} loadData={this.onLoadData} />;
    }
}

ReactDOM.render(<Demo />, mountNode);
