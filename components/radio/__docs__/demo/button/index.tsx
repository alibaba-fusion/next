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

class ControlApp extends React.Component {
    state = {
        value1: 'apple',
        value2: 'apple',
        value3: '',
    };

    onSmallChange = (value: string) => {
        this.setState({
            value1: value,
        });
    };

    onMediumChange = (value: string) => {
        this.setState({
            value2: value,
        });
    };

    onNestChange = (value: string) => {
        this.setState({
            value3: value,
        });
    };

    render() {
        return (
            <div>
                <p style={{ fontSize: 14 }}>Small size</p>
                <RadioGroup
                    dataSource={list}
                    shape="button"
                    size="small"
                    value={this.state.value1}
                    onChange={this.onSmallChange}
                />
                <br />
                <br />
                <p style={{ fontSize: 14 }}>Medium size (default)</p>
                <RadioGroup
                    dataSource={list}
                    shape="button"
                    size="medium"
                    value={this.state.value2}
                    onChange={this.onMediumChange}
                />
                <br />
                <br />
                <p style={{ fontSize: 14 }}>Large size</p>
                <RadioGroup
                    shape="button"
                    size="large"
                    value={this.state.value3}
                    onChange={this.onNestChange}
                >
                    <Radio id="banana" value="banana">
                        Banana
                    </Radio>
                    <Radio id="watermelon" value="watermelon">
                        Watermelon
                    </Radio>
                    <Radio id="peach" value="peach">
                        Peach
                    </Radio>
                </RadioGroup>
                <br />
                <br />
                <p style={{ fontSize: 14 }}>Disabled and Selected-Disabled status</p>
                <RadioGroup shape="button" value="banana" onChange={this.onNestChange}>
                    <Radio id="peach" disabled value="peach">
                        Peach
                    </Radio>
                    <Radio id="banana" disabled value="banana">
                        Banana
                    </Radio>
                </RadioGroup>
            </div>
        );
    }
}

ReactDOM.render(<ControlApp />, mountNode);
