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

class Demo extends React.Component<
    TransferProps,
    {
        value: TransferProps['value'];
    }
> {
    constructor(props: TransferProps) {
        super(props);

        this.state = {
            value: ['3'],
        };
    }

    handleChange: TransferProps['onChange'] = (value, data, extra) => {
        console.log(value, data, extra);

        this.setState({
            value,
        });
    };

    render() {
        return (
            <Transfer
                value={this.state.value}
                dataSource={dataSource}
                defaultLeftChecked={['1']}
                onChange={this.handleChange}
                titles={['Title', 'Title']}
            />
        );
    }
}

ReactDOM.render(<Demo />, mountNode);
