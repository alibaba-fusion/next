import React from 'react';
import ReactDOM from 'react-dom';
import { Transfer } from '@alifd/next';

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
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(value, data, extra) {
        console.log(value, data, extra);
    }

    render() {
        return (
            <Transfer
                mode="simple"
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
