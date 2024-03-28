import React from 'react';
import ReactDOM from 'react-dom';
import { Transfer } from '@alifd/next';
import BaseDemo from '../BaseDemo';
import { TransferProps } from '../../../types';

const dataSource = (() => {
    const dataSource = [];

    for (let i = 0; i < 10; i++) {
        dataSource.push({
            label: `content${i}`,
            value: `${i}`,
            disabled: i % 4 === 0,
        });
    }

    return dataSource;
})();

class Demo extends BaseDemo {
    constructor(props: TransferProps) {
        super(props);

        this.handleSort = this.handleSort.bind(this);
    }

    render() {
        return (
            <Transfer
                sortable
                defaultValue={['3']}
                dataSource={dataSource}
                onSort={this.handleSort}
                titles={['Sortable', 'Sortable']}
            />
        );
    }
}

ReactDOM.render(<Demo />, mountNode);
