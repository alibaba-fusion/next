import React from 'react';
import ReactDOM from 'react-dom';
import { Table, Button, Dialog, Checkbox } from '@alifd/next';

const { Group } = Checkbox;
const dataSource = () => {
        const result = [];
        for (let i = 0; i < 5; i++) {
            result.push({
                title: `Quotation for 1PCS Nano ${3 + i}.0 controller compatible`,
                id: 100306660940 + i,
                time: 2000 + i,
            });
        }
        return result;
    },
    cols = [
        {
            title: 'id',
            dataIndex: 'id',
        },
        {
            title: 'Title',
            dataIndex: 'title',
        },
        {
            title: 'Time',
            dataIndex: 'time',
        },
    ];

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: dataSource(),
            cols: cols,
        };
    }
    openDialog = () => {
        Dialog.alert({
            content: this.renderControlContent(),
            title: 'Select columns',
            onOk: () => {
                this.setState({
                    cols: this.changedCols || this.state.cols,
                });
                return true;
            },
        });
    };

    renderControlContent() {
        const groupSource = cols.map(col => {
                return {
                    label: col.title,
                    value: col.dataIndex,
                };
            }),
            defaultValue = this.state.cols.map(col => col.dataIndex);
        return (
            <Group dataSource={groupSource} onChange={this.onChange} defaultValue={defaultValue} />
        );
    }

    onChange = value => {
        this.changedCols = cols.filter(col => value.indexOf(col.dataIndex) > -1);
    };

    renderCols() {
        const { cols } = this.state;
        return cols.map(col => {
            return <Table.Column title={col.title} dataIndex={col.dataIndex} key={col.dataIndex} />;
        });
    }

    render() {
        return (
            <div>
                <p>
                    <Button onClick={this.openDialog}> Select columns </Button>
                </p>
                <Table dataSource={this.state.dataSource}>{this.renderCols()}</Table>
            </div>
        );
    }
}

ReactDOM.render(<App />, mountNode);
