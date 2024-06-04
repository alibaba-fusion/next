import React from 'react';
import ReactDOM from 'react-dom';
import { CascaderSelect } from '@alifd/next';
import type { CascaderSelectProps } from '@alifd/next/types/cascader-select';
import 'whatwg-fetch';

class Demo extends React.Component {
    state = {
        data: [],
    };

    componentDidMount() {
        fetch('https://os.alipayobjects.com/rmsportal/ODDwqcDFTLAguOvWEolX.json')
            .then(response => response.json())
            .then(data => {
                data[1].disabled = true;
                this.setState({ data });
            })
            .catch(e => console.log(e));
    }

    handleChange: CascaderSelectProps['onChange'] = (value, data, extra) => {
        console.log(value, data, extra);
    };

    valueRender: CascaderSelectProps['valueRender'] = item => {
        if (item.label) {
            return item.label; // 正常的 item
        }

        // value 在 dataSouce 里不存在时渲染。
        return item.value === '432988' ? '不存在的值' : item.value;
    };

    render() {
        return (
            <CascaderSelect
                valueRender={this.valueRender}
                defaultValue="432988"
                dataSource={this.state.data}
                onChange={this.handleChange}
            />
        );
    }
}
ReactDOM.render(<Demo />, mountNode);
