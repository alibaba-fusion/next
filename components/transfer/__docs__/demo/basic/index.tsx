import React from 'react';
import ReactDOM from 'react-dom';
import { Transfer } from '@alifd/next';
import { TransferProps } from '../../../types';
import BaseDemo from '../BaseDemo';

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

        this.handleChange = this.handleChange.bind(this);
    }

    render() {
        return (
            <Transfer
                defaultValue={['3']}
                dataSource={dataSource}
                defaultLeftChecked={['1']}
                onChange={this.handleChange}
                titles={['Title', 'Title']}
                onSelect={this.handleSelect}
            />
        );
    }
}

ReactDOM.render(<Demo />, mountNode);
