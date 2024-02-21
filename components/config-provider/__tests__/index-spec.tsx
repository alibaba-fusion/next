import React, {
    forwardRef,
    Component,
    FC,
    EventHandler,
    MouseEvent,
    useImperativeHandle,
    createRef,
} from 'react';
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
import { CommonProps } from '../../util';

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

interface ToastProps extends ComponentCommonProps {
    afterClose: () => void;
}

class Toast extends Component<ToastProps> {
    static defaultProps = {
        locale: locales['zh-cn'].Toast,
        afterClose: () => {},
    };
    static create = (props = {}) => {
        const newLocale = getContextProps(props, 'Toast').locale;
        const wrapper = render(<Toast afterClose={() => wrapper.unmount()} locale={newLocale} />);
        return wrapper;
    };

    constructor(props: ToastProps) {
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
                <button onClick={this.handleClose}>{this.props.locale!.close}</button>
            </div>
        );
    }
}

const NewClickMe = config(ClickMe);
const NewToast = config(Toast);

type Language = 'zh-cn' | 'en-us';
class Demo extends Component<unknown, { language: Language }> {
    wrapper: ReturnType<typeof render> | null = null;

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

    handleClick() {
        if (this.wrapper) {
            this.wrapper.unmount();
            this.wrapper = null;
        }
        this.wrapper = NewToast.create();
    }

    handleChangeLanguage(e: React.ChangeEvent<HTMLSelectElement>) {
        this.setState({
            language: e.target.value as Language,
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

    it('should change moment locale', () => {
        cy.mount(
            <ConfigProvider locale={{ momentLocale: 'zh-cn' }}>
                <div />
            </ConfigProvider>
        );
        expect(moment.locale()).to.equal('zh-cn');
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
            },
        });
        cy.mount(<Select />);
        cy.get('span.next-select input').should('have.attr', 'placeholder', '哈哈');
    });
});

describe('ConfigProvider.config', () => {
    interface IProps extends CommonProps {
        name: string;
    }
    describe('support all types of react component', () => {
        it('should support class component', () => {
            class Demo extends Component<IProps> {
                render() {
                    return <button>{this.props.name}</button>;
                }
            }
            const ConfiguredDemo = ConfigProvider.config(Demo);
            cy.mount(<ConfiguredDemo name="1" device="phone" />);
            cy.get('button').should('have.text', '1');
        });
        it('should support function component', () => {
            const Demo: FC<IProps> = ({ name }) => {
                return <button>{name}</button>;
            };
            const ConfiguredDemo = ConfigProvider.config(Demo);
            cy.mount(<ConfiguredDemo name="1" device="phone" />);
            cy.get('button').should('have.text', '1');
        });
        it('should support forwardRef function component', () => {
            const Demo = forwardRef<{ props: IProps }, IProps>((props, ref) => {
                useImperativeHandle(ref, () => ({ props }));
                return <button>{props.name}</button>;
            });
            const ConfiguredDemo = ConfigProvider.config(Demo);
            cy.mount(<ConfiguredDemo name="1" device="phone" />);
            cy.get('button').should('have.text', '1');
        });
        it('should support jsx constructor function component', () => {
            function Demo({ name }: IProps) {
                return <button>{name}</button>;
            }
            const ConfiguredDemo = ConfigProvider.config(Demo);
            cy.mount(<ConfiguredDemo name="1" device="phone" />);
            cy.get('button').should('have.text', '1');
        });
    });

    describe('usual', () => {
        it('should use default prop by default', () => {
            class Demo extends Component<Partial<IProps>> {
                static defaultProps = {
                    name: '22',
                };
                render() {
                    return <button>{this.props.name}</button>;
                }
            }
            const ConfiguredDemo = ConfigProvider.config(Demo);
            cy.mount(<ConfiguredDemo />);
            cy.get('button').should('have.text', '22');
        });
        it('should not pure render by default', () => {
            const obj = { text: '0' };
            class Pure extends Component<{ obj: { text: string } }> {
                render() {
                    return <div data-cy="pure">{this.props.obj.text}</div>;
                }
            }

            const ConfigPure = config(Pure);
            cy.mount(<ConfigPure obj={obj} />).then(({ rerender }) => {
                obj.text = '1';
                rerender(<ConfigPure obj={obj} />);
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
            cy.mount(<ConfigPure obj={obj} pure />).then(({ rerender }) => {
                obj.text = '1';
                rerender(<ConfigPure obj={obj} pure />);
                cy.get('[data-cy="pure"]').should('have.text', '0');
            });
        });
        it('should change context of component which is off the component tree', () => {
            cy.mount(<Demo />);
            cy.get('.click-me').click();
            cy.then(() => {
                let toast = document.querySelector<HTMLButtonElement>('.toast button')!;
                expect(toast.innerHTML.trim()).to.equal('关闭');
                toast.click();

                cy.get('select').invoke('val', 'en-us').trigger('change');

                cy.get('.click-me').click();
                cy.then(() => {
                    toast = document.querySelector<HTMLButtonElement>('.toast button')!;
                    expect(toast.innerHTML.trim()).to.equal('close');
                });
            });
        });
    });

    describe('should wrap displayName', () => {
        it('should wrap displayName for class component', () => {
            class Demo1 extends Component<IProps> {
                render() {
                    return <div>{this.props.name}</div>;
                }
            }
            const ConfiguredDemo1 = ConfigProvider.config(Demo1);
            cy.wrap(ConfiguredDemo1.displayName).should('eq', 'Config(Demo1)');
            class Demo2 extends Component<IProps> {
                static displayName = 'D2';
                render() {
                    return <div>{this.props.name}</div>;
                }
            }
            const ConfiguredDemo2 = ConfigProvider.config(Demo2);
            cy.wrap(ConfiguredDemo2.displayName).should('eq', 'Config(D2)');
        });
        it('should wrap displayName for function component', () => {
            const Demo1: FC<IProps> = ({ name }) => {
                return <div>{name}</div>;
            };
            const ConfiguredDemo1 = ConfigProvider.config(Demo1);
            cy.wrap(ConfiguredDemo1.displayName).should('eq', 'Config(Demo1)');
            Demo1.displayName = 'D1';
            const ConfiguredDemo11 = ConfigProvider.config(Demo1);
            cy.wrap(ConfiguredDemo11.displayName).should('eq', 'Config(D1)');

            const Demo2: FC<IProps> = function Demox({ name }) {
                return <div>{name}</div>;
            };
            const ConfiguredDemo2 = ConfigProvider.config(Demo2);
            cy.wrap(ConfiguredDemo2.displayName).should('eq', 'Config(Demox)');
            Demo2.displayName = 'D2';
            const ConfiguredDemo22 = ConfigProvider.config(Demo2);
            cy.wrap(ConfiguredDemo22.displayName).should('eq', 'Config(D2)');
        });
        it('should wrap displayName for forwardRef function component', () => {
            const Demo1 = forwardRef<{ props: IProps }, IProps>((props, ref) => {
                useImperativeHandle(ref, () => ({ props }));
                return <div>{props.name}</div>;
            });
            const ConfiguredDemo1 = ConfigProvider.config(Demo1);
            cy.wrap(ConfiguredDemo1.displayName).should('eq', 'Config(Component)');
            Demo1.displayName = 'D1';
            const ConfiguredDemo11 = ConfigProvider.config(Demo1);
            cy.wrap(ConfiguredDemo11.displayName).should('eq', 'Config(D1)');

            const Demo2 = forwardRef<{ props: IProps }, IProps>(function D2(props, ref) {
                useImperativeHandle(ref, () => ({ props }));
                return <div>{props.name}</div>;
            });

            const ConfiguredDemo2 = ConfigProvider.config(Demo2);
            cy.wrap(ConfiguredDemo2.displayName).should('eq', 'Config(Component)');
            Demo2.displayName = 'D1';
            const ConfiguredDemo22 = ConfigProvider.config(Demo2);
            cy.wrap(ConfiguredDemo22.displayName).should('eq', 'Config(D1)');
        });
        it('should wrap displayName for jsx constructor function component', () => {
            function Demo1({ name }: IProps) {
                return <div>{name}</div>;
            }
            const ConfiguredDemo1 = ConfigProvider.config(Demo1);
            cy.wrap(ConfiguredDemo1.displayName).should('eq', 'Config(Demo1)');
            Demo1.displayName = 'D1';
            const ConfiguredDemo11 = ConfigProvider.config(Demo1);
            cy.wrap(ConfiguredDemo11.displayName).should('eq', 'Config(D1)');
        });
    });

    describe('should pass ref', () => {
        it('should pass ref for class component', () => {
            class Demo extends Component<IProps> {
                type = 'demo';
                render() {
                    return <div>{this.props.name}</div>;
                }
            }
            const ConfiguredDemo = ConfigProvider.config(Demo);
            const ref = createRef<InstanceType<typeof ConfiguredDemo>>();
            cy.mount(<ConfiguredDemo name="1" ref={ref} />);
            cy.then(() => {
                const ins = ref.current!;
                cy.wrap(ins).should('be.ok');
                cy.wrap(ins.getInstance().type).should('eq', 'demo');
            });
        });
        it('should pass ref for forwardRef component', () => {
            const Demo = forwardRef<{ props: IProps }, IProps>((props, ref) => {
                useImperativeHandle(ref, () => ({ props }));
                return <div>{props.name}</div>;
            });
            const ConfiguredDemo = ConfigProvider.config(Demo);
            const ref = createRef<InstanceType<typeof ConfiguredDemo>>();
            cy.mount(<ConfiguredDemo name="1" ref={ref} />);
            cy.then(() => {
                const ins = ref.current!;
                cy.wrap(ins).should('be.ok');
                cy.wrap(ins.getInstance().props.name).should('eq', '1');
            });
        });
        it('should not pass ref for function component and return undefined', () => {
            const Demo: FC<IProps> = ({ name }) => {
                return <div>{name}</div>;
            };
            const ConfiguredDemo = ConfigProvider.config(Demo);
            const ref = createRef<InstanceType<typeof ConfiguredDemo>>();
            cy.mount(<ConfiguredDemo name="1" ref={ref} />);
            cy.then(() => {
                const ins = ref.current!;
                cy.wrap(ins).should('be.ok');
                cy.wrap(ins.getInstance()).should('be.undefined');
            });
        });
        it('should not pass ref for jsx constructor component and return undefined', () => {
            function Demo({ name }: IProps) {
                return <div>{name}</div>;
            }
            const ConfiguredDemo = ConfigProvider.config(Demo);
            const ref = createRef<InstanceType<typeof ConfiguredDemo>>();
            cy.mount(<ConfiguredDemo name="1" ref={ref} />);
            cy.then(() => {
                const ins = ref.current!;
                cy.wrap(ins).should('be.ok');
                cy.wrap(ins.getInstance()).should('be.undefined');
            });
        });
    });

    describe('should support exportNames', () => {
        it('should support exportNames for class component', () => {
            class Demo extends Component<IProps> {
                type = 'demo';
                sayHello() {
                    return `${this.type}-hello`;
                }
                render() {
                    return <div>{this.props.name}</div>;
                }
            }
            const ConfiguredDemo = ConfigProvider.config(Demo, {
                exportNames: ['type', 'sayHello'],
            });
            const ref = createRef<InstanceType<typeof ConfiguredDemo>>();
            cy.mount(<ConfiguredDemo name="1" ref={ref} />);
            cy.then(() => {
                const ins = ref.current!;
                cy.wrap(ins).should('be.ok');
                cy.wrap(ins.type).should('eq', 'demo');
                cy.wrap(ins.sayHello).should('be.a', 'function');
                cy.wrap((ins.sayHello as () => string)()).should('eq', 'demo-hello');
                ins.type = 'xx';
                cy.wrap((ins.sayHello as () => string)()).should('eq', 'demo-hello');
                const comp = ins.getInstance();
                cy.wrap(comp).should('be.ok');
                cy.wrap(comp.setState).should('be.a', 'function');
                cy.wrap(comp.type).should('eq', 'demo');
                cy.wrap(comp.sayHello).should('be.a', 'function');
                cy.wrap(comp.sayHello()).should('eq', 'demo-hello');
                comp.type = 'xx';
                cy.wrap(comp.sayHello()).should('eq', 'xx-hello');
            });
        });
        it('should support exportNames for forwardRef component', () => {
            const Demo = forwardRef<{ type: string; sayHello: () => string }, IProps>(
                (props, ref) => {
                    useImperativeHandle(ref, () => ({
                        type: 'demo',
                        sayHello() {
                            return `${this.type}-hello`;
                        },
                    }));
                    return <div>{props.name}</div>;
                }
            );
            const ConfiguredDemo = ConfigProvider.config(Demo, {
                exportNames: ['type', 'sayHello'],
            });
            const ref = createRef<InstanceType<typeof ConfiguredDemo>>();
            cy.mount(<ConfiguredDemo name="1" ref={ref} />);
            cy.then(() => {
                const ins = ref.current!;
                cy.wrap(ins).should('be.ok');
                cy.wrap(ins.type).should('eq', 'demo');
                cy.wrap(ins.sayHello).should('be.a', 'function');
                cy.wrap((ins.sayHello as () => string)()).should('eq', 'demo-hello');
                ins.type = 'xx';
                cy.wrap((ins.sayHello as () => string)()).should('eq', 'demo-hello');
                const comp = ins.getInstance();
                cy.wrap(comp).should('be.ok');
                cy.wrap(comp.type).should('eq', 'demo');
                cy.wrap(comp.sayHello).should('be.a', 'function');
                cy.wrap(comp.sayHello()).should('eq', 'demo-hello');
                comp.type = 'xx';
                cy.wrap(comp.sayHello()).should('eq', 'xx-hello');
            });
        });
        it('should support exportNames for function component and do nothing', () => {
            function Demo({ name }: IProps) {
                return <div>{name}</div>;
            }
            const ConfiguredDemo = ConfigProvider.config(Demo, {
                exportNames: ['type', 'sayHello'],
            });
            const ref = createRef<InstanceType<typeof ConfiguredDemo>>();
            cy.mount(<ConfiguredDemo name="1" ref={ref} />);
            cy.then(() => {
                const ins = ref.current!;
                cy.wrap(ins).should('be.ok');
                cy.wrap(ins).should('not.have.property', 'type');
                cy.wrap(ins).should('not.have.property', 'sayHello');
                cy.wrap(ins.getInstance()).should('be.undefined');
            });
        });
        it('should hoist undefined when component ref does not have properties', () => {
            class Demo extends Component<IProps> {
                type = 'demo';
                sayHello() {
                    return `${this.type}-hello`;
                }
                render() {
                    return <div>{this.props.name}</div>;
                }
            }
            const ConfiguredDemo = ConfigProvider.config(Demo, {
                exportNames: ['type', 'aa'] as any,
            });
            const ref = createRef<InstanceType<typeof ConfiguredDemo>>();
            cy.mount(<ConfiguredDemo name="1" ref={ref} />);
            cy.then(() => {
                const ins = ref.current!;
                cy.wrap(ins).should('be.ok');
                cy.wrap(ins.type).should('eq', 'demo');
                cy.wrap(ins).should('have.property', 'aa').and('be.undefined');
                const comp = ins.getInstance();
                cy.wrap(comp.type).should('eq', 'demo');
                cy.wrap(comp).should('not.have.property', 'aa');
            });
        });
    });

    describe('should pass self default props by special componentName', () => {
        it('should pass self default props by displayName', () => {
            class Demo extends Component<{ name?: string }> {
                static displayName = 'Demo';
                render() {
                    return <div>{this.props.name}</div>;
                }
            }
            const ConfiguredDemo = ConfigProvider.config(Demo);
            const ref1 = createRef<InstanceType<typeof ConfiguredDemo>>();
            const ref2 = createRef<InstanceType<typeof ConfiguredDemo>>();
            cy.mount(
                <ConfigProvider defaultPropsConfig={{ Demo: { name: 'xx' } }}>
                    <div>
                        <ConfiguredDemo ref={ref1} />
                        <ConfiguredDemo name="1" ref={ref2} />
                    </div>
                </ConfigProvider>
            );
            cy.then(() => {
                const ins1 = ref1.current!;
                const ins2 = ref2.current!;
                cy.wrap(ins1).should('be.ok');
                cy.wrap(ins2).should('be.ok');

                cy.wrap(ins1.getInstance().props.name).should('eq', 'xx');
                cy.wrap(ins2.getInstance().props.name).should('eq', '1');
            });
        });
        it('should pass self default props by special componentName', () => {
            class Demo extends Component<{ name?: string }> {
                static displayName = 'Demo';
                render() {
                    return <div>{this.props.name}</div>;
                }
            }
            const ConfiguredDemo = ConfigProvider.config(Demo, { componentName: 'D' });
            const ref1 = createRef<InstanceType<typeof ConfiguredDemo>>();
            const ref2 = createRef<InstanceType<typeof ConfiguredDemo>>();
            cy.mount(
                <ConfigProvider defaultPropsConfig={{ Demo: { name: 'xx' }, D: { name: 'dd' } }}>
                    <div>
                        <ConfiguredDemo ref={ref1} />
                        <ConfiguredDemo name="1" ref={ref2} />
                    </div>
                </ConfigProvider>
            );
            cy.then(() => {
                const ins1 = ref1.current!;
                const ins2 = ref2.current!;
                cy.wrap(ins1).should('be.ok');
                cy.wrap(ins2).should('be.ok');

                cy.wrap(ins1.getInstance().props.name).should('eq', 'dd');
                cy.wrap(ins2.getInstance().props.name).should('eq', '1');
            });
        });
    });

    describe('should transform work', () => {
        it('should pass transformed props to component', () => {
            class Demo extends Component<IProps> {
                render() {
                    return <div>{this.props.name}</div>;
                }
            }
            const callback = cy.spy();
            const ConfiguredDemo = ConfigProvider.config(Demo, {
                transform(props) {
                    callback(props.name);

                    return {
                        ...props,
                        name: `${props.name}-modified`,
                    };
                },
            });
            const ref = createRef<InstanceType<typeof ConfiguredDemo>>();
            cy.mount(<ConfiguredDemo name="1" ref={ref} />);
            cy.then(() => {
                const ins = ref.current!;
                cy.wrap(ins).should('be.ok');
                cy.wrap(ins.props.name).should('eq', '1');
                cy.wrap(callback).should('be.calledOnceWith', '1');
                const comp = ins.getInstance();
                cy.wrap(comp.props.name).should('eq', '1-modified');
            });
        });
        it('should transform props can be modify and also worked', () => {
            class Demo extends Component<IProps> {
                render() {
                    return <div>{this.props.name}</div>;
                }
            }
            const callback = cy.spy();
            const ConfiguredDemo = ConfigProvider.config(Demo, {
                transform(props) {
                    callback(props);
                    props.name = `${props.name}-modified`;
                    return props;
                },
            });
            const ref = createRef<InstanceType<typeof ConfiguredDemo>>();
            cy.mount(<ConfiguredDemo name="1" ref={ref} />);
            cy.then(() => {
                const ins = ref.current!;
                cy.wrap(ins).should('be.ok');
                cy.wrap(ins.props.name).should('eq', '1');
                cy.wrap(callback).should('be.calledOnce');
                cy.wrap(callback.firstCall.args[0]).should('not.be.frozen');
                const comp = ins.getInstance();
                cy.wrap(comp.props.name).should('eq', '1-modified');
            });
        });
    });

    describe('should hoist static properties', () => {
        it('should hoist static properties for class component', () => {
            class Demo extends Component<IProps> {
                static xx = 'demo';
                render() {
                    return <div>{this.props.name}</div>;
                }
            }
            const ConfiguredDemo = config(Demo);
            cy.wrap(ConfiguredDemo.xx).should('eq', 'demo');
        });
        it('should hoist constructor properties for function component', () => {
            function Demo({ name }: IProps) {
                return <div>{name}</div>;
            }
            Demo.xx = 'demo';
            const ConfiguredDemo = config(Demo as typeof Demo & { xx: string });
            cy.wrap(ConfiguredDemo.xx).should('eq', 'demo');
        });
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
