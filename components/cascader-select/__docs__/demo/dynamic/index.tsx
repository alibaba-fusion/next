import React from 'react';
import ReactDOM from 'react-dom';
import { CascaderSelect } from '@alifd/next';
import 'whatwg-fetch';
import type { CascaderSelectProps } from '@alifd/next/types/cascader-select';

const dataSource = [
    {
        value: '2973',
        label: '陕西',
    },
];

class Demo extends React.Component {
    state = {
        dataSource,
    };

    onLoadData: CascaderSelectProps['loadData'] = data => {
        console.log(data);

        return new Promise<void>(resolve => {
            setTimeout(() => {
                this.setState(
                    {
                        dataSource: [
                            {
                                value: '2973',
                                label: '陕西',
                                children: [
                                    {
                                        value: '2974',
                                        label: '西安',
                                        children: [
                                            { value: '2975', label: '西安市', isLeaf: true },
                                            { value: '2976', label: '高陵县', isLeaf: true },
                                        ],
                                    },
                                    {
                                        value: '2980',
                                        label: '铜川',
                                        children: [
                                            { value: '2981', label: '铜川市', isLeaf: true },
                                            { value: '2982', label: '宜君县', isLeaf: true },
                                        ],
                                    },
                                ],
                            },
                        ],
                    },
                    resolve
                );
            }, 500);
        });
    };

    render() {
        return <CascaderSelect dataSource={this.state.dataSource} loadData={this.onLoadData} />;
    }
}

ReactDOM.render(<Demo />, mountNode);
