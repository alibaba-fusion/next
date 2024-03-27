import React from 'react';
import ReactDOM from 'react-dom';
import { Radio } from '@alifd/next';

const RadioGroup = Radio.Group;

const list = [
    {
        value: 'apple',
        label: 'Apple',
        disabled: false,
    },
    {
        value: 'pear',
        label: 'Pear',
    },
    {
        value: 'orange',
        label: 'Orange',
        disabled: true,
    },
];

class App extends React.Component {
    state = {
        value: 'apple',
        buttonValue: 'pear',
    };

    onChange = (value: string) => {
        this.setState({
            value: value,
        });
    };

    onButtonChange = (value: string) => {
        this.setState({
            buttonValue: value,
        });
    };

    render() {
        return (
            <div>
                <RadioGroup dataSource={list} value={this.state.value} onChange={this.onChange} />
                <br />
                <br />
                <RadioGroup
                    dataSource={list}
                    shape="button"
                    value={this.state.buttonValue}
                    onChange={this.onButtonChange}
                />
            </div>
        );
    }
}

ReactDOM.render(<App />, mountNode);
