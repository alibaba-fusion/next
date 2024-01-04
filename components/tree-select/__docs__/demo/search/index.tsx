import React from 'react';
import ReactDOM from 'react-dom';
import { TreeSelect } from '@alifd/next';

const treeData = [
    {
        label: 'Component',
        value: '1',
        selectable: false,
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
            value: ['4', '6'],
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(value, data) {
        console.log(value, data);
    }

    render() {
        return (
            <TreeSelect
                treeDefaultExpandAll
                showSearch
                dataSource={treeData}
                onChange={this.handleChange}
                style={{ width: 200 }}
            />
        );
    }
}

ReactDOM.render(<Demo />, mountNode);
