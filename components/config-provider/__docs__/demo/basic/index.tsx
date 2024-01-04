import React from 'react';
import ReactDOM from 'react-dom';
import { ConfigProvider, type CommonProps } from '@alifd/next';

const { config } = ConfigProvider;

class Output extends React.Component<CommonProps> {
    static defaultProps = {
        prefix: 'next-',
        locale: {
            hello: '你好',
        },
    };

    render() {
        const { prefix, locale } = this.props;

        return (
            <ul>
                <li>prefix: {prefix}</li>
                <li>locale: {JSON.stringify(locale)}</li>
            </ul>
        );
    }
}

const Func = () => {
    return <div>This is a Function Component</div>;
};

const NewFunc = config(Func);
const NewOutput = config(Output);

function Demo() {
    return (
        <ConfigProvider prefix="custom-" locale={{ Output: { hello: 'hello' } }}>
            <div>
                <NewOutput />
                <NewFunc />
            </div>
        </ConfigProvider>
    );
}
ReactDOM.render(<Demo />, mountNode);
