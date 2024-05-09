import React from 'react';
import ReactDOM from 'react-dom';
import { Cascader } from '@alifd/next';
import type { CascaderProps } from '@alifd/next/types/cascader';
import 'whatwg-fetch';

class Demo extends React.Component {
    state = {
        value: null,
        data: [],
    };

    componentDidMount() {
        fetch('https://os.alipayobjects.com/rmsportal/ODDwqcDFTLAguOvWEolX.json')
            .then(response => response.json())
            .then(data => this.setState({ data, value: '2975' }))
            .catch(e => console.log(e));
    }

    handleChange: CascaderProps['onChange'] = (value, data, extra) => {
        console.log(value, data, extra);
    };

    render() {
        return (
            <div className="control-single-demo">
                <Cascader
                    canOnlySelectLeaf
                    dataSource={this.state.data}
                    onChange={this.handleChange}
                />
                <br />
                <br />
                <Cascader
                    multiple
                    canOnlyCheckLeaf
                    dataSource={this.state.data}
                    onChange={this.handleChange}
                />
            </div>
        );
    }
}

ReactDOM.render(<Demo />, mountNode);
