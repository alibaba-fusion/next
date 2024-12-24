import React from 'react';
import ReactDOM from 'react-dom';
import { Table, Button } from '@alifd/next';
import type { ColumnProps } from '@alifd/next/types/table';

const dataSource = () => {
        const result = [];
        for (let i = 0; i < 5; i++) {
            result.push({
                title: `Quotation for 1PCS Nano ${3 + i}.0 controller compatible. `.repeat(3),
                id: 100306660940 + i,
                time: 2000 + i,
            });
        }
        return result;
    },
    render: ColumnProps['cell'] = (value, index, record) => {
        return <a>Remove({record.id})</a>;
    };
type AppState = {
    dataSource: ReturnType<typeof dataSource>;
    className: string;
    align: 'left' | 'right';
    wordBreak?: 'word' | 'all';
    isZebra?: boolean;
    hasBorder?: boolean;
};
class App extends React.Component<object, AppState> {
    state: AppState = {
        dataSource: dataSource(),
        className: '',
        align: 'left' as const,
    };
    toggleZebra() {
        this.setState({
            isZebra: !this.state.isZebra,
        });
    }
    toggleBorder() {
        this.setState({
            hasBorder: !this.state.hasBorder,
        });
    }
    makeBeauty() {
        this.setState({
            className: 'beauty',
        });
    }
    makeAlign() {
        this.setState({
            align: 'right',
        });
    }
    toggleWordBreak() {
        this.setState(prevState => {
            return {
                wordBreak: prevState.wordBreak === 'word' ? 'all' : 'word',
            };
        });
    }

    render() {
        return (
            <span>
                <div className="style-table-action">
                    <Button onClick={this.toggleZebra.bind(this)}> Toggle zebra </Button>
                    <Button onClick={this.toggleBorder.bind(this)}> Toggle border</Button>
                    <Button onClick={this.makeBeauty.bind(this)}>
                        {' '}
                        Make second column beauty{' '}
                    </Button>
                    <Button onClick={this.makeAlign.bind(this)}>
                        {' '}
                        Make second column align right{' '}
                    </Button>
                    <Button onClick={this.toggleWordBreak.bind(this)}>
                        {' '}
                        Toggle second column's wordBreak{' '}
                    </Button>
                </div>
                <br />
                <Table
                    dataSource={this.state.dataSource}
                    isZebra={this.state.isZebra}
                    hasBorder={this.state.hasBorder}
                >
                    <Table.Column title="Id" dataIndex="id" alignHeader="center" width={100} />
                    <Table.Column
                        title="Title"
                        dataIndex="title"
                        align={this.state.align}
                        className={this.state.className}
                        wordBreak={this.state.wordBreak}
                        width={340}
                    />
                    <Table.Column title="Time" dataIndex="time" width={200} />
                    <Table.Column cell={render} width={200} />
                </Table>
            </span>
        );
    }
}

ReactDOM.render(<App />, mountNode);
