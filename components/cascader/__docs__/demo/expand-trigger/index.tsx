import React from 'react';
import ReactDOM from 'react-dom';
import { Radio, Cascader } from '@alifd/next';
import type { CascaderProps } from '@alifd/next/types/cascader';
import type { GroupProps } from '@alifd/next/types/radio';
import 'whatwg-fetch';

const RadioGroup = Radio.Group;

class Demo extends React.Component {
    state = {
        triggerType: 'click',
        data: [],
    };

    componentDidMount() {
        fetch('https://os.alipayobjects.com/rmsportal/ODDwqcDFTLAguOvWEolX.json')
            .then(response => response.json())
            .then(data => this.setState({ data }))
            .catch(e => console.log(e));
    }

    handleChange: CascaderProps['onChange'] = (value, data, extra) => {
        console.log(value, data, extra);
    };

    handleTriggerTypeChange: GroupProps['onChange'] = triggerType => {
        this.setState({
            triggerType,
        });
    };

    render() {
        return (
            <div>
                <div className="trigger-check">
                    <RadioGroup
                        dataSource={['click', 'hover']}
                        shape="button"
                        value={this.state.triggerType}
                        onChange={this.handleTriggerTypeChange}
                    />
                </div>
                <Cascader
                    expandTriggerType={this.state.triggerType as CascaderProps['expandTriggerType']}
                    dataSource={this.state.data}
                    onChange={this.handleChange}
                />
            </div>
        );
    }
}

ReactDOM.render(<Demo />, mountNode);
