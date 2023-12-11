import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ConfigProvider } from '@alifd/next';
import PropTypes from 'prop-types';

const localeSettings = {
    momentLocale: 'fr-FR',
    CustomizedComponent: {
        helloWorld: 'hello, world',
    },
};

const App = ({ children }) => (
    <ConfigProvider prefix="customized-" locale={localeSettings} pure warning={false}>
        {children}
    </ConfigProvider>
);

App.propTypes = {
    children: PropTypes.node,
};

const Child = () => (
    <ConfigProvider.Consumer>
        {context => (
            <div className="context-data">
                <h3>Context's state</h3>
                <pre>{JSON.stringify(context, false, 2)}</pre>
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
