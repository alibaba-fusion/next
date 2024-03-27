import React from 'react';
import ReactDOM from 'react-dom';
import { Radio } from '@alifd/next';

const RadioGroup = Radio.Group;

class App extends React.Component {
    state = {
        value: 'orange',
    };

    onChange = (value: string) => {
        this.setState({
            value: value,
        });
    };

    render() {
        return (
            <div>
                <span style={{ fontSize: 14 }}>
                    <label id="groupId">Choose fruit: </label>
                </span>
                <br />
                <br />
                <RadioGroup
                    value={this.state.value}
                    onChange={this.onChange}
                    aria-labelledby="groupId"
                >
                    <Radio id="apple" value="apple">
                        Apple
                    </Radio>
                    <Radio id="watermelon" value="watermelon">
                        Watermelon
                    </Radio>
                    <Radio id="orange" value="orange">
                        Orange
                    </Radio>
                </RadioGroup>
            </div>
        );
    }
}

ReactDOM.render(<App />, mountNode);
