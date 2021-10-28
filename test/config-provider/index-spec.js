import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import moment from 'moment';
import assert from 'power-assert';
import Select from '../../src/select';
import Button from '../../src/button';
import enUS from '../../src/locale/en-us';
import zhCN from '../../src/locale/zh-cn';
import ConfigProvider from '../../src/config-provider';

/* eslint-disable react/jsx-filename-extension, react/no-multi-comp, react/prop-types, react/prefer-stateless-function */
/* global describe, it, afterEach */

Enzyme.configure({ adapter: new Adapter() });

const { config, getContextProps, ErrorBoundary } = ConfigProvider;

class Output extends Component {
    static propTypes = {
        prefix: PropTypes.string,
        locale: PropTypes.object,
        pure: PropTypes.bool,
    };

    static defaultProps = {
        prefix: 'next-',
        locale: {
            hello: '你好',
        },
        pure: false,
    };

    internalMethod() {}

    render() {
        const { prefix, locale } = this.props;

        return <div className={`${prefix}output`}>{locale.hello}</div>;
    }
}
const NewOutput = config(Output);

class TestPure extends Component {
    static propTypes = {
        obj: PropTypes.object,
        pure: PropTypes.bool,
    };

    static defaultProps = {
        pure: false,
    };

    render() {
        return <div>{this.props.obj.text}</div>;
    }
}
const NewTestPure = config(TestPure);

const locales = {
    'zh-cn': {
        ClickMe: {
            clickMe: '点我！',
        },
        Toast: {
            close: '关闭',
        },
    },
    'en-us': {
        ClickMe: {
            clickMe: 'click me!',
        },
        Toast: {
            close: 'close',
        },
    },
};
class ClickMe extends Component {
    static propTypes = {
        locale: PropTypes.object,
        onClick: PropTypes.func,
    };

    static defaultProps = {
        locale: locales['zh-cn'].ClickMe,
        onClick: () => {},
    };

    render() {
        const { locale, onClick } = this.props;
        return (
            <button className="click-me" onClick={onClick}>
                {locale.clickMe}
            </button>
        );
    }
}
class Toast extends Component {
    static propTypes = {
        locale: PropTypes.object,
        afterClose: PropTypes.func,
    };

    static defaultProps = {
        locale: locales['zh-cn'].Toast,
        afterClose: () => {},
    };

    constructor(props) {
        super(props);

        this.state = {
            visible: false,
        };

        this.handleClose = this.handleClose.bind(this);
    }

    handleClose() {
        this.setState({
            visible: false,
        });
        this.props.afterClose();
    }

    render() {
        return (
            <div className="toast">
                <button onClick={this.handleClose}>
                    {this.props.locale.close}
                </button>
            </div>
        );
    }
}
Toast.create = (props = {}) => {
    const mountNode = document.createElement('div');
    document.body.appendChild(mountNode);

    const closeChain = () => {
        ReactDOM.unmountComponentAtNode(mountNode);
        document.body.removeChild(mountNode);
    };

    const newLocale = getContextProps(props, 'Toast').locale;

    ReactDOM.render(
        <Toast afterClose={closeChain} locale={newLocale} />,
        mountNode
    );
};
const NewClickMe = config(ClickMe);
const NewToast = config(Toast);
class Demo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            language: 'zh-cn',
        };

        this.handleClick = this.handleClick.bind(this);
        this.handleChangeLanguage = this.handleChangeLanguage.bind(this);
    }

    handleClick() {
        NewToast.create();
    }

    handleChangeLanguage(e) {
        this.setState({
            language: e.target.value,
        });
    }

    render() {
        const { language } = this.state;

        return (
            <ConfigProvider locale={locales[language]}>
                <div>
                    <div className="select-language">
                        <select
                            value={language}
                            onChange={this.handleChangeLanguage}
                        >
                            <option value="zh-cn">zh-cn</option>
                            <option value="en-us">en-us</option>
                        </select>
                    </div>
                    <NewClickMe onClick={this.handleClick} />
                </div>
            </ConfigProvider>
        );
    }
}

class TestMoment extends Component {
    render() {
        return (
            <ConfigProvider locale={this.props.locale}>
                <div />
            </ConfigProvider>
        );
    }
}

class A extends Component {
    render() {
        return <div className="a">{this.props.locale.text}</div>;
    }
}
const NewA = config(A, { componentName: 'B' });
class TestAlias extends Component {
    render() {
        return (
            <ConfigProvider locale={this.props.locale}>
                <NewA />
            </ConfigProvider>
        );
    }
}

class TestDevice extends Component {
    render() {
        return <span>{this.props.device}</span>
    }
}

const NTestDevice = config(TestDevice);

function FunComponent (props) {
    return <div {...props}/>
};
const NewFunComponent = config(FunComponent);

const ForwardRef = React.forwardRef((props,ref)=>{
    return (
        <div ref={ref} {...props}></div>
    )
});
const NewForwardRef = config(ForwardRef);
describe('ConfigProvider', () => {
    let wrapper;

    afterEach(() => {
        if (wrapper) {
            wrapper.unmount();
            wrapper = null;
        }
    });

    it('should support function component', () => {
        wrapper = mount(<ConfigProvider>
            <NewFunComponent title="ssss" />
        </ConfigProvider>);
        const output = wrapper.find(FunComponent);
        assert(output);
    });

    it('should support forwardRef component', () => {
        wrapper = mount(<ConfigProvider>
            <NewForwardRef title="ssss" />
        </ConfigProvider>);
        const output = wrapper.find(FunComponent);
        assert(output);
    });

    it('should use default prop by default', () => {
        wrapper = mount(<NewOutput />);
        const output = wrapper.find(Output);
        assert(output.prop('prefix') === 'next-');
        assert(output.prop('locale').hello === '你好');
        assert(!output.prop('pure'));
    });

    it('should use context prop if wrapped by ConfigProvider', () => {
        wrapper = mount(
            <ConfigProvider
                prefix="context-"
                locale={{ Output: { hello: 'context' } }}
                pure
            >
                <NewOutput />
            </ConfigProvider>
        );
        const output = wrapper.find(Output);
        assert(output.prop('prefix') === 'context-');
        assert(output.prop('locale').hello === 'context');
        assert(output.prop('pure'));
    });

    it('should use passed prop if pass custom prop', () => {
        wrapper = mount(
            <ConfigProvider
                prefix="context-"
                locale={{ Output: { hello: 'context' } }}
                pure
            >
                <NewOutput prefix="my-" locale={{ hello: 'my' }} pure={false} />
            </ConfigProvider>
        );
        const output = wrapper.find(Output);
        assert(output.prop('prefix') === 'my-');
        assert(output.prop('locale').hello === 'my');
        assert(!output.prop('pure'));
    });

    it('should expose getInstance method', () => {
        wrapper = mount(<NewOutput />);
        assert(
            typeof wrapper.instance().getInstance().internalMethod ===
                'function'
        );
    });

    it('should not pure render by default', () => {
        const obj = { text: '0' };
        wrapper = mount(<NewTestPure obj={obj} />);
        obj.text = '1';
        wrapper.setProps({
            obj,
        });
        assert(wrapper.find('div').text() === '1');
    });

    it('should pure render if set pure to true', () => {
        const obj = { text: '0' };
        wrapper = mount(<NewTestPure obj={obj} pure />);
        obj.text = '1';
        wrapper.setProps({
            obj,
        });
        assert(wrapper.find('div').text() === '0');
    });

    it('should change context of component which is off the component tree', () => {
        wrapper = mount(<Demo />);
        const clickMe = wrapper.find('.click-me');
        clickMe.simulate('click');

        let toast = document.querySelector('.toast button');
        assert(toast.innerHTML.trim() === '关闭');
        toast.click();

        const select = wrapper.find('select');
        select.simulate('change', { target: { value: 'en-us' } });
        clickMe.simulate('click');
        toast = document.querySelector('.toast button');
        assert(toast.innerHTML.trim() === 'close');
        toast.click();
    });

    it('should change moment locale', () => {
        wrapper = mount(<TestMoment locale={{ momentLocale: 'zh-cn' }} />);
        assert(moment.locale() === 'zh-cn');
    });

    it('should support alias displayName', () => {
        wrapper = mount(<TestAlias locale={{ B: { text: '2' } }} />);
        assert(wrapper.find('.a').text() === '2');
    });

    it('should support setLanguage', () => {
        ConfigProvider.initLocales({
            'zh-cn': zhCN,
            'en-us': enUS,
        });
        ConfigProvider.setLanguage('en-us');
        wrapper = mount(<Select />);
        assert(
            wrapper.find('span.next-select input').props().placeholder ===
                enUS.Select.selectPlaceholder
        );
    });

    it('should support setLocale', () => {
        ConfigProvider.initLocales({
            'zh-cn': zhCN,
            'en-us': enUS,
        });
        ConfigProvider.setLocale({
            Select: {
                selectPlaceholder: '哈哈',
                selectPlaceHolder: '哈哈'
            },
        });
        wrapper = mount(<Select />);
        assert(
            wrapper.find('span.next-select input').props().placeholder ===
                '哈哈'
        );
    });
});

describe('ConfigProvider.Consumer', () => {
    let wrapper;

    afterEach(() => {
        if (wrapper) {
            wrapper.unmount();
            wrapper = null;
        }
    });

    it('can be to read the context state of provider', () => {
        const contextState = {
            prefix: 'context-prefix-',
            locale: {
                momentLocale: 'fr-FR',
                TestComponent: {
                    helloWorld: 'hello, world',
                },
            },
            pure: true,
            warning: true,
        };

        const App = ({ children }) => (
            <ConfigProvider {...contextState}>{children}</ConfigProvider>
        );

        const ContextReader = props => <div>{props.nextPrefix}</div>;

        const Child = () => (
            <ConfigProvider.Consumer>
                {context => <ContextReader {...context} />}
            </ConfigProvider.Consumer>
        );

        const TestConsumer = () => (
            <App>
                <Child />
            </App>
        );

        wrapper = mount(<TestConsumer />);

        const output = wrapper.find(ContextReader);
        assert(output.prop('prefix') === contextState.prefix);
        assert.equal(output.prop('locale'), contextState.locale);
        assert(output.prop('pure') === contextState.pure);
        assert(output.prop('warning') === contextState.warning);
    });
});

describe('ConfigProvider.ErrorBoundary', () => {
    let wrapper;

    afterEach(() => {
        if (wrapper) {
            wrapper.unmount();
            wrapper = null;
        }
    });

    it('should catch errors with componentDidCatch', () => {
        const Something = () => null;

        wrapper = mount(
            <ErrorBoundary>
                <Something />
            </ErrorBoundary>
        );
        const error = new Error('test');

        wrapper.find(Something).simulateError(error);
    });

    it('should catch errors with componentDidCatch as to basic component', () => {
        const Something = () => null;
        wrapper = mount(
            <ConfigProvider errorBoundary>
                <Button>
                    <Something />
                </Button>
            </ConfigProvider>
        );
        const error = new Error('test');

        wrapper.find(Something).simulateError(error);
    });

    it('should on: errorBoundary should work', () => {
        wrapper = shallow(
            <ConfigProvider errorBoundary>
                <Button />
            </ConfigProvider>
        );
        assert(wrapper.dive().name() === 'ErrorBoundary');
    });

    it('should on: errorBoundary={{}} should work', () => {
        wrapper = shallow(
            <ConfigProvider errorBoundary={{}}>
                <Button />
            </ConfigProvider>
        );
        assert(wrapper.dive().name() === 'ErrorBoundary');
    });

    it('should off: errorBoundary={false} should work', () => {
        wrapper = shallow(
            <ConfigProvider errorBoundary={false}>
                <Button />
            </ConfigProvider>
        );
        assert(wrapper.dive().name() === 'Button');
    });

    it('should on: errorBoundary={{open: true}} should work', () => {
        wrapper = shallow(
            <ConfigProvider errorBoundary={{ open: true }}>
                <Button />
            </ConfigProvider>
        );
        assert(wrapper.dive().name() === 'ErrorBoundary');
    });

    it('should off: errorBoundary={{open: false}} should work', () => {
        wrapper = shallow(
            <ConfigProvider errorBoundary={{ open: false }}>
                <Button />
            </ConfigProvider>
        );
        assert(wrapper.dive().name() === 'Button');
    });

    it('should off: config on component iteself >  on ConfigProvider 1', () => {
        wrapper = shallow(
            <ConfigProvider errorBoundary={{}}>
                <Button errorBoundary={false} />
            </ConfigProvider>
        );
        assert(wrapper.dive().name() === 'Button');
    });

    it('should on: config on component iteself >  on ConfigProvider 2', () => {
        wrapper = shallow(
            <ConfigProvider errorBoundary={false}>
                <Button errorBoundary={{}} />
            </ConfigProvider>
        );
        assert(wrapper.dive().name() === 'ErrorBoundary');
    });

    it('should on: config on component iteself >  on ConfigProvider 3', () => {
        wrapper = shallow(
            <ConfigProvider errorBoundary={{ open: false }}>
                <Button errorBoundary />
            </ConfigProvider>
        );
        assert(wrapper.dive().name() === 'ErrorBoundary');
    });

    it('should off: config on component iteself >  on ConfigProvider 4', () => {
        wrapper = shallow(
            <ConfigProvider errorBoundary>
                <Button errorBoundary={{ open: false }} />
            </ConfigProvider>
        );
        assert(wrapper.dive().name() === 'Button');
    });

    it('should on: config on component iteself >  on ConfigProvider 5', () => {
        wrapper = shallow(
            <ConfigProvider errorBoundary={{ open: false }}>
                <Button errorBoundary={{ open: true }} />
            </ConfigProvider>
        );
        assert(wrapper.dive().name() === 'ErrorBoundary');
    });

    it('should support device', () => {
        wrapper = mount(
            <ConfigProvider device="tablet">
                <NTestDevice />
            </ConfigProvider>
        );

        assert(wrapper.text() === 'tablet');
        wrapper.setProps({
            device: 'desktop'
        });

        assert(wrapper.text() === 'desktop');
    });
});
