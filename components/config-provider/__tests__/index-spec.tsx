import React, { forwardRef, Component, FC, EventHandler, MouseEvent } from 'react';
import moment from 'moment';
import 'moment/locale/zh-cn';
import Select from '../../select';
import Button from '../../button';
import enUS from '../../locale/en-us';
import zhCN from '../../locale/zh-cn';
import ConfigProvider from '../index';
import { ComponentCommonProps } from '../types';
import { render, shallow } from '../../util/__tests__';
import { ConsumerState } from '../consumer';

const { config, getContextProps, ErrorBoundary } = ConfigProvider;

class Output extends Component<ComponentCommonProps> {
    static defaultProps = {
        prefix: 'next-',
        locale: {
            hello: '你好',
        },
        pure: false,
    };

    internalMethod() {}

    render() {
        const { prefix, locale, pure } = this.props;

        return (
            <div
                className={`${prefix}output`}
                data-cy="output"
                data-cy-prefix={prefix}
                data-cy-pure={String(pure)}
                data-cy-locale={locale!.hello}
            >
                {locale!.hello}
            </div>
        );
    }
}
const NewOutput = config(Output);

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
class ClickMe extends Component<ComponentCommonProps & { onClick?: EventHandler<MouseEvent> }> {
    static defaultProps = {
        locale: locales['zh-cn'].ClickMe,
        onClick: () => {},
    };

    render() {
        const { locale, onClick } = this.props;
        return (
            <button className="click-me" onClick={onClick}>
                {locale!.clickMe}
            </button>
        );
    }
}
class Toast extends Component<ComponentCommonProps & { afterClose?: () => void }> {
    static defaultProps = {
        locale: locales['zh-cn'].Toast,
        afterClose: () => {},
    };
    static create = (props = {}) => {
        const newLocale = getContextProps(props, 'Toast').locale;
        const wrapper = render(<Toast afterClose={() => wrapper.unmount()} locale={newLocale} />);
        return wrapper;
    };

    constructor(props: any) {
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
        this.props.afterClose!();
    }

    render() {
        return (
            <div className="toast">
                <button onClick={this.handleClose}>{this.props.locale!.close}</button>
            </div>
        );
    }
}

const NewClickMe = config(ClickMe);
const NewToast = config(Toast) as unknown as typeof Toast;
class Demo extends Component<unknown, { language: 'zh-cn' | 'en-us' }> {
    constructor(props: unknown) {
        super(props);

        this.state = {
            language: 'zh-cn',
        };

        this.handleClick = this.handleClick.bind(this);
        this.handleChangeLanguage = this.handleChangeLanguage.bind(this);
    }

    componentWillUnmount() {
        this.wrapper && this.wrapper.unmount();
    }

    wrapper: ReturnType<typeof render> | null = null;

    handleClick() {
        if (this.wrapper) {
            this.wrapper.unmount();
            this.wrapper = null;
        }
        this.wrapper = NewToast.create();
    }

    handleChangeLanguage(e: any) {
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
                        <select value={language} onChange={this.handleChangeLanguage}>
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

describe('ConfigProvider', () => {
    it('should support function component', () => {
        const FC: FC<{ title: string }> = ({ title }) => {
            return <div data-cy="fc">{title}</div>;
        };
        const ConfigFC = config(FC);
        cy.mount(
            <ConfigProvider>
                <ConfigFC title="ssss" />
            </ConfigProvider>
        );
        cy.get('[data-cy="fc"]').should('have.text', 'ssss');
    });

    it('should support forwardRef component', () => {
        const ForwardFC = forwardRef<unknown, { title: string }>(({ title }, ref) => {
            return <div data-cy="ffc">{title}</div>;
        });
        const ConfigForwardFC = config(ForwardFC);
        cy.mount(
            <ConfigProvider>
                <ConfigForwardFC title="ssss" />
            </ConfigProvider>
        );
        cy.get('[data-cy="ffc"]').should('have.text', 'ssss');
    });

    it('should use default prop by default', () => {
        cy.mount(<NewOutput />);
        cy.get('[data-cy="output"]')
            .should('have.attr', 'data-cy-prefix', 'next-')
            .should('have.attr', 'data-cy-pure', 'false')
            .should('have.attr', 'data-cy-locale', '你好');
    });

    it('should use context prop if wrapped by ConfigProvider', () => {
        cy.mount(
            <ConfigProvider prefix="context-" locale={{ Output: { hello: 'context' } }} pure>
                <NewOutput />
            </ConfigProvider>
        );
        cy.get('[data-cy="output"]')
            .should('have.attr', 'data-cy-prefix', 'context-')
            .should('have.attr', 'data-cy-pure', 'true')
            .should('have.attr', 'data-cy-locale', 'context');
    });

    it('should use passed prop if pass custom prop', () => {
        cy.mount(
            <ConfigProvider prefix="context-" locale={{ Output: { hello: 'context' } }} pure>
                <NewOutput prefix="my-" locale={{ hello: 'my' }} pure={false} />
            </ConfigProvider>
        );
        cy.get('[data-cy="output"]')
            .should('have.attr', 'data-cy-prefix', 'my-')
            .should('have.attr', 'data-cy-pure', 'false')
            .should('have.attr', 'data-cy-locale', 'my');
    });

    it('should expose getInstance method', () => {
        const ref: { current: any } = { current: null };
        cy.mount(<NewOutput ref={ref} />).then(() => {
            expect(typeof ref.current?.getInstance?.().internalMethod).to.equal('function');
        });
    });

    it('should not pure render by default', () => {
        const obj = { text: '0' };
        class Pure extends Component<{ obj: { text: string } }> {
            render() {
                return <div data-cy="pure">{this.props.obj.text}</div>;
            }
        }

        const ConfigPure = config(Pure);
        cy.mount(<ConfigPure obj={obj} />).then(xx => {
            obj.text = '1';
            xx.rerender(<ConfigPure obj={obj} />);
            cy.get('[data-cy="pure"]').should('have.text', '1');
        });
    });

    it('should pure render if set pure to true', () => {
        const obj = { text: '0' };
        class Pure extends Component<{ obj: { text: string } }> {
            render() {
                return <div data-cy="pure">{this.props.obj.text}</div>;
            }
        }

        const ConfigPure = config(Pure);
        cy.mount(<ConfigPure obj={obj} pure />).then(xx => {
            obj.text = '1';
            xx.rerender(<ConfigPure obj={obj} pure />);
            cy.get('[data-cy="pure"]').should('have.text', '0');
        });
    });

    it('should change context of component which is off the component tree', () => {
        cy.mount(<Demo />);
        cy.get('.click-me').click();
        cy.then(() => {
            let toast: HTMLButtonElement | null = document.querySelector('.toast button');
            expect(toast?.innerHTML.trim()).to.equal('关闭');
            toast!.click();

            cy.get('select').invoke('val', 'en-us').trigger('change');

            cy.get('.click-me').click();
            cy.then(() => {
                toast = document.querySelector('.toast button');
                expect(toast?.innerHTML.trim()).to.equal('close');
            });
        });
    });

    it('should change moment locale', () => {
        cy.mount(
            <ConfigProvider locale={{ momentLocale: 'zh-cn' }}>
                <div />
            </ConfigProvider>
        );
        expect(moment.locale()).to.equal('zh-cn');
    });

    it('should support alias displayName', () => {
        const FC: FC<{ locale?: { text?: string } }> = ({ locale }) => {
            return <div data-cy="alias">{locale?.text}</div>;
        };
        const ConfigFC = config(FC, { componentName: 'B' });
        cy.mount(
            <ConfigProvider locale={{ B: { text: '2' } }}>
                <ConfigFC />
            </ConfigProvider>
        );
        cy.get('[data-cy="alias"]').should('have.text', '2');
    });

    it('should support setLanguage', () => {
        ConfigProvider.initLocales({
            'zh-cn': zhCN,
            'en-us': enUS,
        });
        ConfigProvider.setLanguage('en-us');
        cy.mount(<Select />);
        cy.get('span.next-select input').should(
            'have.attr',
            'placeholder',
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
            } as any,
        });
        cy.mount(<Select />);
        cy.get('span.next-select input').should('have.attr', 'placeholder', '哈哈');
    });
});

describe('ConfigProvider.Consumer', () => {
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

        const App: FC = ({ children }) => (
            <ConfigProvider {...contextState}>{children}</ConfigProvider>
        );
        const ref: { current: ConsumerState | null } = { current: null };
        const ContextReader: FC<ConsumerState> = props => {
            ref.current = props;
            return <div data-cy="reader">{props.prefix}</div>;
        };

        const Child = () => (
            <ConfigProvider.Consumer>
                {context => <ContextReader {...context} />}
            </ConfigProvider.Consumer>
        );

        const TestConsumer: FC = () => (
            <App>
                <Child />
            </App>
        );

        cy.mount(<TestConsumer />);
        cy.get('[data-cy="reader"]').should('not.be.empty');
        cy.then(() => {
            cy.wrap(ref.current).should('not.be.null');
            cy.wrap(ref.current?.prefix).should('equal', contextState.prefix);
            cy.wrap(ref.current?.locale).should('deep.equal', contextState.locale);
            cy.wrap(ref.current?.pure).should('equal', contextState.pure);
            cy.wrap(ref.current?.warning).should('equal', contextState.warning);
        });
    });
});

describe('ConfigProvider.ErrorBoundary', () => {
    const Something = () => {
        React.useEffect(() => {
            throw new Error('ErrorBoundary test');
        });
        return null;
    };
    cy.on('uncaught:exception', error => {
        expect(error.message).to.include('ErrorBoundary test');
        return false;
    });
    it('should catch errors with componentDidCatch', () => {
        const afterCatch = cy.spy().as('afterCatch');
        cy.on('uncaught:exception', error => {
            expect(error.message).to.include('ErrorBoundary test');
            return false;
        });
        cy.mount(
            <ErrorBoundary afterCatch={afterCatch}>
                <Something />
            </ErrorBoundary>
        );
        cy.get('@afterCatch').should('have.been.calledOnce');
    });

    it('should catch errors with componentDidCatch as to basic component', () => {
        const afterCatch = cy.spy().as('afterCatch');
        cy.on('uncaught:exception', error => {
            expect(error.message).to.include('ErrorBoundary test');
            return false;
        });
        cy.mount(
            <ConfigProvider errorBoundary={{ afterCatch }}>
                <Button>
                    <Something />
                </Button>
            </ConfigProvider>
        );
        cy.get('@afterCatch').should('have.been.calledOnce');
    });

    it('should on: errorBoundary should work', () => {
        const wrapper = shallow(
            <ConfigProvider errorBoundary>
                <Button />
            </ConfigProvider>
        );
        expect(wrapper.findByType(ErrorBoundary)).to.not.be.null;
    });

    it('should on: errorBoundary={{}} should work', () => {
        const wrapper = shallow(
            <ConfigProvider errorBoundary={{}}>
                <Button />
            </ConfigProvider>
        );
        expect(wrapper.findByType(ErrorBoundary)).to.not.be.null;
    });

    it('should off: errorBoundary={false} should work', () => {
        const wrapper = shallow(
            <ConfigProvider errorBoundary={false}>
                <Button />
            </ConfigProvider>
        );
        expect(wrapper.findByType(ErrorBoundary)).to.be.null;
    });

    it('should on: errorBoundary={{open: true}} should work', () => {
        const wrapper = shallow(
            <ConfigProvider errorBoundary={{ open: true }}>
                <Button />
            </ConfigProvider>
        );
        expect(wrapper.findByType(ErrorBoundary)).to.not.be.null;
    });

    it('should off: errorBoundary={{open: false}} should work', () => {
        const wrapper = shallow(
            <ConfigProvider errorBoundary={{ open: false }}>
                <Button />
            </ConfigProvider>
        );
        expect(wrapper.findByType(ErrorBoundary)).to.be.null;
    });

    it('should off: config on component iteself >  on ConfigProvider 1', () => {
        const wrapper = shallow(
            <ConfigProvider errorBoundary={{}}>
                <Button errorBoundary={false} />
            </ConfigProvider>
        );
        expect(wrapper.findByType(ErrorBoundary)).to.be.null;
    });

    it('should on: config on component iteself >  on ConfigProvider 2', () => {
        const wrapper = shallow(
            <ConfigProvider errorBoundary={false}>
                <Button errorBoundary={{}} />
            </ConfigProvider>
        );
        expect(wrapper.findByType(ErrorBoundary)).to.not.be.null;
    });

    it('should on: config on component iteself >  on ConfigProvider 3', () => {
        const wrapper = shallow(
            <ConfigProvider errorBoundary={{ open: false }}>
                <Button errorBoundary />
            </ConfigProvider>
        );
        expect(wrapper.findByType(ErrorBoundary)).to.not.be.null;
    });

    it('should off: config on component iteself >  on ConfigProvider 4', () => {
        const wrapper = shallow(
            <ConfigProvider errorBoundary>
                <Button errorBoundary={{ open: false }} />
            </ConfigProvider>
        );
        expect(wrapper.findByType(ErrorBoundary)).to.be.null;
    });

    it('should on: config on component iteself >  on ConfigProvider 5', () => {
        const wrapper = shallow(
            <ConfigProvider errorBoundary={{ open: false }}>
                <Button errorBoundary={{ open: true }} />
            </ConfigProvider>
        );
        expect(wrapper.findByType(ErrorBoundary)).to.not.be.null;
    });

    it('should support device', () => {
        class TestDevice extends Component<ComponentCommonProps> {
            render() {
                return <span data-cy="device">{this.props.device}</span>;
            }
        }

        const NTestDevice = config(TestDevice);
        cy.mount(
            <ConfigProvider device="tablet">
                <NTestDevice />
            </ConfigProvider>
        ).then(({ rerender }) => {
            cy.get('[data-cy="device"]').should('have.text', 'tablet');
            rerender(
                <ConfigProvider device="desktop">
                    <NTestDevice />
                </ConfigProvider>
            ).then(() => {
                cy.get('[data-cy="device"]').should('have.text', 'desktop');
            });
        });
    });
});
