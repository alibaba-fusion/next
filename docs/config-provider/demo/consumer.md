# 使用 Consumer 组件读取上下文中的数据

- order: 0

使用 `<Consumer>` 可以方便地读取 `<ConfigProvider>` 中上下文的数据

:::lang=en-us
# Basic

- order: 0

`<Consumer>` can be to read context state of `<ConfigProvider>` with easly and highly customized
:::

---

````jsx
import { ConfigProvider } from '@alifd/next';
import PropTypes from 'prop-types';

const localeSettings = {
    momentLocale: 'fr-FR',
    CustomizedComponent: {
        helloWorld: 'hello, world',
    },
};

const App = ({ children }) => (
    <ConfigProvider
        prefix="customized-"
        locale={localeSettings}
        pure
        warning={false}
    >
        {children}
    </ConfigProvider>
);

App.propTypes = {
    children: PropTypes.node,
};

const Child = () => (
    <ConfigProvider.Consumer>
        {
            context => (
                <div className="context-data">
                    <h3>Context's state</h3>
                    <pre>{JSON.stringify(context, false, 2)}</pre>
                </div>
            )
        }
    </ConfigProvider.Consumer>
);

const Demo = () => (
    <App>
        <Child />
    </App>
);

ReactDOM.render(<Demo />, mountNode);
````

````css
.context-data {
    padding: 0 32px 32px;
    border: 3px dashed #aaa;
    border-radius: 9px;
}
````
