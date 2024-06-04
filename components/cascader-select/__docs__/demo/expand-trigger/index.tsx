import React from 'react';
import ReactDOM from 'react-dom';
import { Radio, CascaderSelect } from '@alifd/next';
import 'whatwg-fetch';
import type { CascaderSelectProps } from '@alifd/next/types/cascader-select';
import type { RadioProps } from '@alifd/next/types/radio';

const RadioGroup = Radio.Group;

class Demo extends React.Component {
    state = {
        triggerType: 'click' as const,
        data: [],
    };

    componentDidMount() {
        fetch('https://os.alipayobjects.com/rmsportal/ODDwqcDFTLAguOvWEolX.json')
            .then(response => response.json())
            .then(data => this.setState({ data }))
            .catch(e => console.log(e));
    }

    handleChange: CascaderSelectProps['onChange'] = (value, data, extra) => {
        console.log(value, data, extra);
    };

    handleTriggerTypeChange: RadioProps['onChange'] = triggerType => {
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
                <CascaderSelect
                    expandTriggerType={this.state.triggerType}
                    dataSource={this.state.data}
                    onChange={this.handleChange}
                />
            </div>
        );
    }
}

ReactDOM.render(<Demo />, mountNode);
