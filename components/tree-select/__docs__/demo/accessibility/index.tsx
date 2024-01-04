import React from 'react';
import ReactDOM from 'react-dom';
import { TreeSelect } from '@alifd/next';

const data = [
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

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(value, data) {
        console.log(value, data);
    }

    render() {
        return (
            <div>
                <TreeSelect
                    treeDefaultExpandAll
                    aria-labelledby="a11y-tree-select"
                    onChange={this.handleChange}
                    style={{ width: 200 }}
                    dataSource={data}
                />
            </div>
        );
    }
}

ReactDOM.render(<Demo />, mountNode);
