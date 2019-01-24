# 基本

- order: 1

最简单的用法，展示 ConfigProvider 是如何工作的。

:::lang=en-us
# Basic

- order: 1

The simplest usage, demo how ConfigProvider works.
:::

---

````jsx
import { ConfigProvider } from '@alifd/next';
import PropTypes from 'prop-types';

const { config } = ConfigProvider;

class Output extends React.Component {
    static propTypes = {
        prefix: PropTypes.string,
        locale: PropTypes.object,
        pure: PropTypes.bool
    };

    static defaultProps = {
        prefix: 'next-',
        locale: {
            hello: '你好'
        },
        pure: false
    };

    render() {
        const { prefix, locale, pure } = this.props;

        return (
            <ul>
                <li>prefix: {prefix}</li>
                <li>locale: {JSON.stringify(locale)}</li>
                <li>pure: {pure.toString()}</li>
            </ul>
        );
    }
}

const NewOutput = config(Output);

class Demo extends React.Component {
    render() {
        return (
            <ConfigProvider prefix="custom-" locale={{ Output: { hello: 'hello' } }} pure>
                <NewOutput />
            </ConfigProvider>
        );
    }
}

ReactDOM.render(<Demo />, mountNode);
````
