import React, { FC } from 'react';
import ReactDOM from 'react-dom';
import { ConfigProvider } from '@alifd/next';

const localeSettings = {
    momentLocale: 'fr-FR',
    CustomizedComponent: {
        helloWorld: 'hello, world',
    },
};

const App: FC = ({ children }) => (
    <ConfigProvider prefix="customized-" locale={localeSettings} pure warning={false}>
        {children}
    </ConfigProvider>
);

const Child = () => (
    <ConfigProvider.Consumer>
        {context => (
            <div className="context-data">
                <h3>Context's state</h3>
                <pre>{JSON.stringify(context, null, 2)}</pre>
            </div>
        )}
    </ConfigProvider.Consumer>
);

const Demo = () => (
    <App>
        <Child />
    </App>
);

ReactDOM.render(<Demo />, mountNode);
