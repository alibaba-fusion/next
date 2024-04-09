import React from 'react';
import ReactDOM from 'react-dom';
import { Checkbox, Tree } from '@alifd/next';

const data = [
    {
        label: 'Component',
        key: '1',
        children: [
            {
                label: 'Form',
                key: '2',
                selectable: false,
                children: [
                    {
                        label: 'Input',
                        key: '4',
                    },
                    {
                        label: 'Select',
                        key: '5',
                        disabled: true,
                    },
                ],
            },
            {
                label: 'Display',
                key: '3',
                children: [
                    {
                        label: 'Table',
                        key: '6',
                    },
                ],
            },
        ],
    },
];

class Demo extends React.Component<
    any,
    {
        multiple: boolean;
        selectedKeys: string[];
    }
> {
    constructor(props: any) {
        super(props);

        this.state = {
            selectedKeys: [],
            multiple: false,
        };
        this.handleSelect = this.handleSelect.bind(this);
        this.handleCheck = this.handleCheck.bind(this);
    }

    handleSelect(keys: string[], info: any) {
        console.log(keys, info);

        this.setState({
            selectedKeys: keys,
        });
    }

    handleCheck() {
        this.setState({
            multiple: !this.state.multiple,
            selectedKeys: [],
        });
    }

    render() {
        const { multiple, selectedKeys } = this.state;

        return (
            <div className="control-select-demo">
                <label className="multiple-check">
                    <Checkbox checked={multiple} onChange={this.handleCheck} />
                    <span className="multiple-text">多选</span>
                </label>
                <Tree
                    defaultExpandAll
                    multiple={multiple}
                    selectedKeys={selectedKeys}
                    onSelect={this.handleSelect}
                    dataSource={data}
                />
            </div>
        );
    }
}

ReactDOM.render(<Demo />, mountNode);
