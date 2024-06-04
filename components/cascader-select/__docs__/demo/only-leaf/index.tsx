import React from 'react';
import ReactDOM from 'react-dom';
import { CascaderSelect } from '@alifd/next';
import 'whatwg-fetch';
import type { CascaderSelectProps } from '@alifd/next/types/cascader-select';

class Demo extends React.Component {
    state = {
        data: [],
    };

    componentDidMount() {
        fetch('https://os.alipayobjects.com/rmsportal/ODDwqcDFTLAguOvWEolX.json')
            .then(response => response.json())
            .then(data => this.setState({ data, value: '2975' }))
            .catch(e => console.log(e));
    }

    handleChange: CascaderSelectProps['onChange'] = (value, data, extra) => {
        console.log(value, data, extra);
    };

    render() {
        return (
            <div className="control-single-demo">
                <CascaderSelect
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
