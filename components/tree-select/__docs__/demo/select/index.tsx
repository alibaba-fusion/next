import React from 'react';
import ReactDOM from 'react-dom';
import { TreeSelect, Checkbox } from '@alifd/next';

const dataSource = [
    {
        label: 'Component',
        value: '1',
        children: [
            {
                label: 'Form',
                value: '2',
                children: [
                    {
                        label: 'Input',
                        value: '4',
                    },
                    {
                        label: 'Select',
                        value: '5',
                        disabled: true,
                    },
                ],
            },
            {
                label: 'Display',
                value: '3',
                children: [
                    {
                        label: 'Table',
                        value: '6',
                    },
                ],
            },
        ],
    },
];
class Demo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            multiple: false,
        };

        this.handleCheck = this.handleCheck.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(value, data) {
        console.log(value, data);
    }

    handleCheck(v) {
        this.setState({
            multiple: v,
        });
    }

    render() {
        const { multiple } = this.state;

        return (
            <div className="control-select-demo" key={`control-select-demo-${multiple}`}>
                <label className="multiple-check">
                    <Checkbox checked={multiple} onChange={this.handleCheck} />
                    <span className="multiple-text">允许多选</span>
                </label>
                <TreeSelect
                    treeDefaultExpandAll
                    hasClear
                    multiple={multiple}
                    onSelect={this.handleSelect}
                    dataSource={dataSource}
                    style={{ width: 200 }}
                />
            </div>
        );
    }
}

ReactDOM.render(<Demo />, mountNode);
