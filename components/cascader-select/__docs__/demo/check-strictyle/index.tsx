import React from 'react';
import ReactDOM from 'react-dom';
import { Checkbox, CascaderSelect } from '@alifd/next';
import type { CascaderSelectProps } from '@alifd/next/types/cascader-select';
import 'whatwg-fetch';

class Demo extends React.Component {
    state = {
        data: [],
        checkStrictly: false,
    };

    componentDidMount() {
        fetch('https://os.alipayobjects.com/rmsportal/ODDwqcDFTLAguOvWEolX.json')
            .then(response => response.json())
            .then(data => this.setState({ data, value: ['2975'] }))
            .catch(e => console.log(e));
    }

    handleCheck = () => {
        this.setState({
            checkStrictly: !this.state.checkStrictly,
        });
    };

    handleChange: CascaderSelectProps['onChange'] = (value, data, extra) => {
        console.log(value, data, extra);
    };

    render() {
        return (
            <div className="control-multiple-demo">
                <label className="strictly-check">
                    <Checkbox checked={this.state.checkStrictly} onChange={this.handleCheck} />
                    <span className="strictly-text">Enable checkStrictly</span>
                </label>
                <CascaderSelect
                    multiple
                    checkStrictly={this.state.checkStrictly}
                    dataSource={this.state.data}
                    onChange={this.handleChange}
                />
            </div>
        );
    }
}

ReactDOM.render(<Demo />, mountNode);
