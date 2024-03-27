import React from 'react';
import ReactDOM from 'react-dom';
import { Checkbox } from '@alifd/next';
import { type GroupProps } from '@alifd/next/lib/checkbox';

class App extends React.Component {
    state = {
        value: 'orange',
    };

    onChange: GroupProps['onChange'] = value => {
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
                <Checkbox.Group
                    value={this.state.value}
                    onChange={this.onChange}
                    aria-labelledby="groupId"
                >
                    <Checkbox id="apple" value="apple">
                        Apple
                    </Checkbox>
                    <Checkbox id="watermelon" value="watermelon">
                        Watermelon
                    </Checkbox>
                    <Checkbox id="orange" value="orange">
                        Orange
                    </Checkbox>
                </Checkbox.Group>
            </div>
        );
    }
}

ReactDOM.render(<App />, mountNode);
