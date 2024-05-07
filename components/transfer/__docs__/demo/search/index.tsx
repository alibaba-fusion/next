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
    handleChange: TransferProps['onChange'] = (value, data, extra) => {
        console.log(value, data, extra);
    };

    render() {
        return (
            <Transfer
                showSearch={[true, false]}
                searchProps={{
                    hasClear: true,
                }}
                defaultValue={['3']}
                dataSource={dataSource}
                defaultLeftChecked={['1']}
                onChange={this.handleChange}
                titles={['Searchable', 'Searchable']}
                notFoundContent={['left not found', 'right not found']}
            />
        );
    }
}

ReactDOM.render(<Demo />, mountNode);
