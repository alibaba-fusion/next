import React from 'react';
import ReactDOM from 'react-dom';
import { Message, Radio } from '@alifd/next';

const types = ['success', 'warning', 'error', 'notice', 'help', 'loading'] as const;
const sizeList = [
    {
        value: 'medium',
        label: 'medium',
    },
    {
        value: 'large',
        label: 'large',
    },
];
const shapeList = [
    {
        value: 'inline',
        label: 'inline',
    },
    {
        value: 'addon',
        label: 'addon',
    },
    {
        value: 'toast',
        label: 'toast',
    },
];
interface State {
    size: 'medium' | 'large';
    shape: 'inline' | 'addon' | 'toast';
}
class Demo extends React.Component {
    state: State = {
        size: 'medium',
        shape: 'inline',
    };

    handleSize = (size: State['size']) => {
        this.setState({ size });
    };

    handleShape = (shape: State['shape']) => {
        this.setState({ shape });
    };

    render() {
        const { size, shape } = this.state;

        return (
            <div>
                <span className="demo-label">Select Size：</span>
                <Radio.Group
                    defaultValue="medium"
                    dataSource={sizeList}
                    value={this.state.size}
                    onChange={this.handleSize}
                />
                <br />
                <br />
                <span className="demo-label">Select Shape：</span>
                <Radio.Group
                    defaultValue="inline"
                    dataSource={shapeList}
                    value={this.state.shape}
                    onChange={this.handleShape}
                />
                <br />
                <br />
                <div className="message-size-shape-demo">
                    {types.map(type => (
                        <Message key={type} title={type} type={type} size={size} shape={shape}>
                            Content Content Content Content
                        </Message>
                    ))}
                </div>
            </div>
        );
    }
}

ReactDOM.render(<Demo />, mountNode);
