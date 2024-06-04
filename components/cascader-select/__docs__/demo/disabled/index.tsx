import React from 'react';
import ReactDOM from 'react-dom';
import { CascaderSelect } from '@alifd/next';
import 'whatwg-fetch';
import type { CascaderSelectProps } from '@alifd/next/types/cascader-select';

class Demo extends React.Component {
    state = {
        data: [
            {
                value: '2973',
                label: '陕西',
                children: [
                    {
                        value: '2974',
                        label: '西安',
                        children: [
                            {
                                value: '2975',
                                label: '西安市',
                                isLeaf: true,
                                checkboxDisabled: true,
                            },
                            { value: '2976', label: '高陵县', isLeaf: true },
                        ],
                    },
                    {
                        value: '2980',
                        label: '铜川',
                        disabled: true,
                        children: [
                            { value: '2981', label: '铜川市', isLeaf: true },
                            { value: '2982', label: '宜君县', isLeaf: true },
                        ],
                    },
                ],
            },
        ],
    };

    handleChange: CascaderSelectProps['onChange'] = (value, data, extra) => {
        console.log(value, data, extra);
    };

    render() {
        return (
            <CascaderSelect multiple dataSource={this.state.data} onChange={this.handleChange} />
        );
    }
}

ReactDOM.render(<Demo />, mountNode);
