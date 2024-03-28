import React from 'react';
import ReactDOM from 'react-dom';
import { Transfer } from '@alifd/next';
import BaseDemo from '../BaseDemo';
import { TransferProps } from '../../../types';

const dataSource = (() => {
    const dataSource = [];

    for (let i = 0; i < 1000; i++) {
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
                mode="simple"
                useVirtual
                defaultValue={['3']}
                dataSource={dataSource}
                defaultLeftChecked={['1']}
                onChange={this.handleChange}
                titles={['Simple Mode', 'Simple Mode']}
            />
        );
    }
}

ReactDOM.render(<Demo />, mountNode);
