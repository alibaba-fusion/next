import React from 'react';
import ReactDOM from 'react-dom';
import { Select } from '@alifd/next';
import { type SelectProps } from '@alifd/next/types/select';

const Option = Select.Option;

class App extends React.Component {
    onChange: SelectProps['onChange'] = value => {
        console.log(value);
    };

    render() {
        return (
            <div>
                <span id="select-a11y">Select: </span>
                <Select onChange={this.onChange} defaultValue="jack" aria-labelledby="select-a11y">
                    <Option value="jack">Jack</Option>
                    <Option value="frank">Frank</Option>
                    <Option value="hugo">Hugo</Option>
                </Select>
            </div>
        );
    }
}

ReactDOM.render(<App />, mountNode);
