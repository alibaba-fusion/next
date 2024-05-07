import React from 'react';
import ReactDOM from 'react-dom';
import { Transfer } from '@alifd/next';
import type { TransferProps } from '../../../types';

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

class Demo extends React.Component {
    handleSort: TransferProps['onSort'] = (value, position) => {
        console.log(value, position);
    };

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
