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

    handleSelect(sourceSelectedValue, targetSelectedValue, trigger) {
        console.log('in panel: ', trigger);
        console.log('sourceSelectedValue are: ', sourceSelectedValue);
        console.log('targetSelectedValue are: ', targetSelectedValue);
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
