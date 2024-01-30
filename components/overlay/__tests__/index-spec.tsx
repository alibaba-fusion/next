import React, {
    useRef,
    useState,
    useEffect,
    cloneElement,
    type FC,
    Component,
    type ReactElement,
    createRef,
} from 'react';
import ReactDOM from 'react-dom';
import type { MountReturn } from 'cypress/react';

import { KEYCODE, env } from '../../util';
import Overlay, { type OverlayProps } from '../index';
import Dialog from '../../dialog/index';
import Balloon from '../../balloon/index';
import Button from '../../button/index';
import Drawer from '../../drawer/index';
import ConfigProvider from '../../config-provider/index';
import '../../button/style';
import '../style';
import type { PopupProps } from '../types';

const { Popup } = Overlay;

class OverlayControlDemo extends Component<OverlayProps, { visible: boolean }> {
    btn: HTMLElement;

    constructor(props: OverlayProps) {
        super(props);

        this.state = {
            visible: false,
        };
    }

    onClick = () => {
        this.setState({
            visible: !this.state.visible,
        });
    };

    onClose = () => {
        this.setState({
            visible: false,
        });
    };

    render() {
        const { children, ...others } = this.props;

        return (
            <div style={{ height: '110vh' }}>
                <button
                    onClick={this.onClick}
                    ref={ref => {
                        this.btn = ref!;
                    }}
                >
                    Toggle visible
                </button>
                <Overlay
                    visible={this.state.visible}
                    target={() => this.btn}
                    safeNode={() => this.btn}
                    onRequestClose={this.onClose}
                    {...others}
                >
                    {children || <span className="overlay-demo">Hello World From Overlay!</span>}
                </Overlay>
            </div>
        );
    }
}

class PopupControlDemo extends Component<PopupProps, { visible: boolean }> {
    constructor(props: PopupProps) {
        super(props);

        this.state = {
            visible: false,
        };
    }

    onVisibleChange = (visible: boolean) => {
        this.setState({
            visible,
        });
    };

    render() {
        return (
            <Popup
                trigger={<button>Open</button>}
                triggerType="click"
                visible={this.state.visible}
                onVisibleChange={this.onVisibleChange}
            >
                <span className="overlay-demo">Hello World From Popup!</span>
            </Popup>
        );
    }
}

class OverlayDemo extends Component {
    state = {
        container: () => document.getElementById('container0'),
    };

    changeContainer = () => {
        this.setState({
            container: () => document.getElementById('container1'),
        });
    };

    render() {
        return (
            <div>
                <Button id="btn" onClick={this.changeContainer} />
                <Overlay container={this.state.container} visible>
                    <div>Start your business here by searching a popular product</div>
                </Overlay>
                <div id="container0" />
                <div id="container1" />
            </div>
        );
    }
}

describe('Overlay', () => {
    it('should support rendering overlay', () => {
        cy.mount(
            <Overlay visible>
                <div className="content" />
            </Overlay>
        ).as('overlay');

        cy.get('.next-overlay-wrapper.opened').should('exist');
        cy.get('.next-overlay-inner.content').should('exist');

        cy.get<MountReturn>('@overlay').then(({ component, rerender }) => {
            return rerender(cloneElement(component as ReactElement, { visible: false }));
        });

        cy.get('.next-overlay-wrapper').should('have.length', 0);

        cy.get<MountReturn>('@overlay').then(({ component, rerender }) => {
            return rerender(cloneElement(component as ReactElement, { visible: true }));
        });

        cy.get('.next-overlay-wrapper.opened').should('exist');
        cy.get('.next-overlay-inner.content').should('exist');
    });

    it('should support rendering overlay and mask', () => {
        cy.mount(
            <Overlay>
                <div className="content" />
            </Overlay>
        ).as('overlay');
        cy.get('.next-overlay-wrapper').should('have.length', 0);
        cy.get<MountReturn>('@overlay').then(({ component, rerender }) => {
            return rerender(cloneElement(component as ReactElement, { visible: true }));
        });
        cy.get('.next-overlay-wrapper.opened').should('exist');
        cy.get('.next-overlay-inner.content').should('exist');
        cy.get('.next-overlay-backdrop').should('have.length', 0);
        cy.get<MountReturn>('@overlay').then(({ component, rerender }) => {
            return rerender(
                cloneElement(component as ReactElement, { visible: true, hasMask: true })
            );
        });
        cy.get('.next-overlay-backdrop').should('exist');
    });

    it('should support setting animation to false', () => {
        cy.mount(
            <Overlay animation={false}>
                <div className="content" />
            </Overlay>
        ).as('overlay');
        cy.get('.next-overlay-wrapper').should('have.length', 0);
        cy.get<MountReturn>('@overlay').then(({ component, rerender }) => {
            return rerender(cloneElement(component as ReactElement, { visible: true }));
        });
        cy.get('.next-overlay-wrapper').should('exist');
        cy.get('.next-overlay-inner').should('have.class', 'content');
        cy.get('.next-overlay-backdrop').should('have.length', 0);
        cy.get<MountReturn>('@overlay').then(({ component, rerender }) => {
            return rerender(
                cloneElement(component as ReactElement, { visible: true, hasMask: true })
            );
        });
        cy.get('.next-overlay-backdrop').should('exist');
    });

    it('should support canCloseByEsc', () => {
        const handleClose = cy.spy();
        cy.mount(
            <Overlay visible canCloseByEsc={false} onRequestClose={handleClose}>
                <div className="content" />
            </Overlay>
        );

        cy.document().trigger('keydown', { keyCode: KEYCODE.ESC });
        cy.wrap(handleClose).should('not.be.calledOnce');
        cy.mount(
            <Overlay visible canCloseByEsc onRequestClose={handleClose}>
                <div className="content" />
            </Overlay>
        );

        cy.document().trigger('keydown', { keyCode: KEYCODE.ESC });
        cy.wrap(handleClose).should('have.been.calledOnce');
    });

    it('should support canCloseByOutSideClick', () => {
        const handleClose = cy.spy();
        cy.mount(
            <Overlay visible canCloseByOutSideClick={false} onRequestClose={handleClose}>
                <div className="content" />
            </Overlay>
        );

        cy.get('body').click({ force: true });
        cy.wrap(handleClose).should('not.be.calledOnce');

        cy.mount(
            <Overlay visible canCloseByOutSideClick onRequestClose={handleClose}>
                <div className="content" />
            </Overlay>
        );

        cy.get('body').click({ force: true });
        cy.wrap(handleClose).should('be.calledOnce');
    });

    it('should support canCloseByMask', () => {
        const handleClose = cy.spy();
        cy.mount(
            <Overlay
                visible
                animation={false}
                hasMask
                canCloseByMask={false}
                onRequestClose={handleClose}
            >
                <div className="content" />
            </Overlay>
        );
        cy.get('.next-overlay-backdrop').click();
        cy.wrap(handleClose).should('not.be.calledOnce');

        cy.mount(
            <Overlay visible animation={false} hasMask canCloseByMask onRequestClose={handleClose}>
                <div className="content" />
            </Overlay>
        );
        cy.get('.next-overlay-backdrop').click();
        cy.wrap(handleClose).should('be.calledOnce');
    });

    it('should support safeNode', () => {
        cy.mount(
            <OverlayControlDemo>
                <span id="inner">123</span>
            </OverlayControlDemo>
        ).as('OverlayControlDemo');
        cy.get('button').click();

        cy.get('.next-overlay-wrapper').should('exist');
        cy.get('#inner').click();

        cy.get('.next-overlay-wrapper').should('exist');
        cy.get('button').click();

        cy.get('.next-overlay-wrapper').should('have.length', 0);
        cy.get<MountReturn>('@OverlayControlDemo').then(({ component, rerender }) => {
            return rerender(cloneElement(component as ReactElement, { animation: false }));
        });
        cy.get('button').click();
        cy.get('.next-overlay-wrapper').should('exist');
        cy.get('button').click();
        cy.get('.next-overlay-wrapper').should('have.length', 0);
    });

    it('should support disableScroll', () => {
        cy.mount(<OverlayControlDemo disableScroll />).as('OverlayControlDemo');
        cy.get('button').click();
        cy.get('body').should('have.css', 'overflowY', 'hidden');
        cy.get('button').click({ force: true });

        cy.get('body').should('have.css', 'overflowY', 'visible');
        cy.get('body').should('have.css', 'paddingRight', '0px');
    });

    it('should support autoFocus', () => {
        const outerInput = document.createElement('input');
        outerInput.id = 'outer';
        document.body.appendChild(outerInput);
        outerInput.focus();
        cy.mount(
            <OverlayControlDemo animation={false} autoFocus>
                <input id="inner" />
            </OverlayControlDemo>
        ).as('OverlayControlDemo');
        cy.get('button').click();

        cy.get('#inner').should('exist');

        cy.get('button').click();
        // ie9/ie10 document.activeElement === document.body
        if ((env.ieVersion as number) > 10) {
            cy.get('#outer').should('exist');
        }
        document.body.removeChild(outerInput);
    });

    it('should not destory overlay node if set cache to true', () => {
        cy.mount(<OverlayControlDemo cache wrapperClassName="overlay-cache-test" />).as(
            'OverlayControlDemo'
        );
        cy.get('button').click();

        cy.get('button').click();
        cy.get('.overlay-cache-test.next-overlay-wrapper').should('have.css', 'display', 'none');
    });

    it('should support getContent', () => {
        cy.mount(
            <Overlay visible>
                <span>content</span>
            </Overlay>
        ).as('OverlayDemo');
        cy.get('.next-overlay-wrapper').then(el => {
            expect(el.text().trim()).to.equal('content');
        });
    });

    it('should support autoFit', () => {
        cy.mount(
            <div
                id="auto-fit-el"
                style={{
                    width: 300,
                    height: 100,
                    position: 'relative',
                    overflow: 'auto',
                }}
            >
                <div style={{ height: 200, width: 500 }}>
                    <Popup
                        animation={false}
                        container={(node: HTMLElement) => node.parentNode}
                        autoFit
                        autoFocus={false}
                        trigger={
                            <button
                                id="overlay-autofit-btn"
                                style={{
                                    margin: 220,
                                    marginRight: 0,
                                    height: 25,
                                }}
                            >
                                Use Down Arrow to open
                            </button>
                        }
                        triggerType="click"
                        triggerClickKeycode={40}
                    >
                        <span
                            id="overlay-autofit-wrapper"
                            style={{
                                width: 120,
                                height: 70,
                                background: 'purple',
                            }}
                        >
                            Hello
                        </span>
                    </Popup>
                    <div style={{ height: 50, width: 10 }} />
                </div>
            </div>
        );
        cy.get('#auto-fit-el').scrollTo(0, 220);
        cy.get('#overlay-autofit-btn').click({ scrollBehavior: false, force: true });
        cy.get('#overlay-autofit-wrapper').should('have.css', 'top', '245px');

        cy.get('body').click();

        cy.get('#auto-fit-el').scrollTo(0, 140);

        cy.get('#overlay-autofit-btn').click({ scrollBehavior: false, force: true });
        cy.get('#overlay-autofit-wrapper').should('have.css', 'top', '150px');

        cy.get('body').click();

        cy.get('#auto-fit-el').scrollTo(0, 170);
        cy.get('#overlay-autofit-btn').click({ scrollBehavior: false, force: true });
        cy.get('#overlay-autofit-wrapper').should('have.css', 'top', '170px');
    });

    it('should support onClick', () => {
        const handleClick = cy.spy();
        cy.mount(
            <Overlay visible onClick={handleClick}>
                <div className="content" />
            </Overlay>
        );
        cy.get('.content').click({ force: true });

        cy.wrap(handleClick).should('be.calledOnce');
    });

    it('should support stop Child Click propagation by default', done => {
        const clickHandler = cy.spy();
        cy.mount(
            <div id="overlay-container" onClick={clickHandler}>
                <Overlay visible container={'overlay-container'}>
                    <div className="content" />
                </Overlay>
            </div>
        );

        cy.get('.content').click();
        cy.wrap(clickHandler).should('be.false');

        setTimeout(() => {
            done();
        }, 1000);
    });

    it('should support function children', () => {
        const MyFuncComp = () => {
            return <div>content</div>;
        };
        cy.mount(
            <Overlay visible>
                <MyFuncComp />
            </Overlay>
        ).as('OverlayDemo');

        cy.get('.next-overlay-wrapper').then(el => {
            expect(el.text().trim()).to.equal('content');
        });
    });

    // https://github.com/alibaba-fusion/next/issues/2033
    it('fix bug on Gateway when settting ContainerNode', done => {
        const container = document.createElement('div');
        document.body.append(container);
        // eslint-disable-next-line react/no-deprecated
        ReactDOM.render(<OverlayDemo />, container);

        cy.get('#container0 .next-overlay-wrapper').should('exist');

        cy.get('#btn').click();

        setTimeout(() => {
            cy.get('#container1 .next-overlay-wrapper').should('exist');
            container.remove();
            done();
        });
    });

    // https://github.com/alibaba-fusion/next/issues/2277
    it('dom should ready when call onOpen & afterOpen evnet', done => {
        function Demo() {
            return (
                <Dialog
                    overlayProps={{
                        wrapperClassName: 'myWrapper',
                        afterOpen() {
                            cy.get('.myWrapper').should('have.class', 'opened');
                            done();
                        },
                    }}
                    animation={false}
                    visible
                    isFullScreen
                    title="Welcome to Alibaba.com"
                    footer={false}
                >
                    Start your business here by searching a popular product
                </Dialog>
            );
        }
        cy.mount(
            <div>
                <Demo />
            </div>
        );
    });

    it('fix left overflow', () => {
        function Demo(props: OverlayProps) {
            const btnRef = createRef<InstanceType<typeof Button>>();

            return (
                <div>
                    <Button style={{ width: '100%' }} ref={btnRef}>
                        Toggle visible
                    </Button>
                    <Overlay visible target={() => btnRef.current} {...props}>
                        <div
                            style={{
                                width: '200px',
                                height: '100vh',
                                background: 'red',
                            }}
                        >
                            Hello World From Overlay!
                        </div>
                    </Overlay>
                </div>
            );
        }
        cy.get('body').then(b => {
            b[0].style.margin = '0';
            b[0].style.overflow = 'hidden';
        });
        cy.mount(
            <div>
                <Demo align="tl tr" />
            </div>
        );
        cy.get('.next-overlay-inner').should(
            'have.css',
            'left',
            `${document.documentElement.clientWidth - 200 - 1}px`
        ); // Reason to subtract 1, see: Overly._isInViewport
    });

    it('fix bug on position when target is a svg element', () => {
        cy.mount(
            <div>
                <Overlay target="lzy" visible align="cc cc">
                    <Button className="overlay-btn">cc cc</Button>
                </Overlay>
                <svg id="ppc" width={200} height={200}>
                    <rect id="lzy" width={200} height={200} fill="red" />
                </svg>
            </div>
        );
        cy.get('.overlay-btn').should('have.css', 'left', '73.5px');
    });

    it('should set overflow hidden to container', () => {
        function Demo() {
            const [visible, setVisible] = useState(false);

            return (
                <div id="luodan">
                    <button className="btn" onClick={() => setVisible(true)}>
                        Open dialog
                    </button>
                    <Dialog visible={visible} popupContainer="luodan">
                        Small Content in a fixed size Dialog
                    </Dialog>
                </div>
            );
        }

        cy.mount(<Demo />);
        cy.get('#luodan').find('.btn').first().click();

        cy.get('#luodan').first().should('have.css', 'overflow', 'hidden');
        cy.get('#luodan').first().should('have.css', 'paddingRight', '0px');
    });

    // https://codesandbox.io/s/next-overlay-overflow-2-fulpq?file=/src/App.js
    it('fix overlay overflow hidden', done => {
        function App() {
            const appRef = createRef<HTMLDivElement>();

            useEffect(() => {
                appRef.current!.style.overflow = 'hidden';
                Dialog.show({
                    popupContainer: 'app',
                    content: 'Dialog Content',
                    onOk() {
                        appRef.current!.style.overflow = 'visible';
                        cy.get('#app').should('have.css', 'overflow', 'visible');
                        done();
                    },
                });
                cy.get('.next-dialog-btn').then(el => {
                    el[0].click();
                });
            }, []);

            return (
                <div id="app" ref={appRef} style={{ height: 1200 }}>
                    Dialog Demo
                </div>
            );
        }

        cy.mount(<App />);
    });

    // https://github.com/alibaba-fusion/next/issues/3104
    it('fix overflow bug with multiple overlay', () => {
        function MyDrawer() {
            const [visible, setVisible] = useState(false);
            const onOpen = () => {
                setVisible(true);
            };

            const onClose = () => {
                Dialog.confirm({
                    content: '确认关闭',
                });
            };

            return (
                <div>
                    <Button className="btn-open" onClick={onOpen} />
                    <Button className="btn-close" onClick={() => setVisible(false)} />
                    <Drawer visible={visible} onClose={onClose} />
                </div>
            );
        }

        cy.mount(<MyDrawer />);
        cy.get('.btn-open').click();
        cy.get('body').should('have.css', 'overflow', 'hidden');
        cy.get('.next-overlay-backdrop').click();
        cy.get('.btn-close').click({ force: true });
        cy.get('body').should('have.css', 'overflow', 'hidden');
        cy.get('.next-dialog-btn').click({ multiple: true });
        cy.get('body').then(el => {
            el[0].style.overflow = 'visible';
        });
        cy.get('body').should('have.css', 'overflow', 'visible');
    });
});

describe('Popup', () => {
    it('should support rendering trigger and overlay', () => {
        cy.mount(
            <Popup defaultVisible trigger={<button>Open</button>} triggerType="click">
                <span>Hello World From Popup!</span>
            </Popup>
        );
        cy.get('button').should('exist');

        cy.get('.next-overlay-wrapper').should('exist');
        cy.get('body').click();
        cy.get('.next-overlay-wrapper').should('have.length', 0);
    });

    it('should support triggerType', () => {
        cy.mount(
            <Popup trigger={<button>Open</button>}>
                <span className="content">Hello World From Popup!</span>
            </Popup>
        );

        cy.get('button').trigger('mouseover');

        cy.get('.next-overlay-wrapper').should('exist');
        cy.get('button').trigger('mouseleave');
        cy.get('.content').trigger('mouseover');

        cy.get('.next-overlay-wrapper').should('exist');
        cy.get('.content').trigger('mouseleave');

        cy.get('.next-overlay-wrapper').should('not.be.visible');
    });

    it('should support setting triggerType to click', () => {
        cy.mount(
            <Popup trigger={<button>Open</button>} triggerType="click">
                <span className="content">Hello World From Popup!</span>
            </Popup>
        );

        cy.get('button').click();

        cy.get('.next-overlay-wrapper').should('exist');
        cy.get('button').click();

        cy.get('.next-overlay-wrapper').should('have.length', 0);
        cy.get('button').trigger('keydown', { keyCode: KEYCODE.SPACE });

        cy.get('.next-overlay-wrapper').should('exist');
        cy.get('button').trigger('keydown', { keyCode: KEYCODE.ENTER });
        cy.get('.next-overlay-wrapper').should('have.length', 0);
    });

    it('should support setting triggerType to focus', () => {
        cy.mount(
            <Popup trigger={<button>Open</button>} triggerType="focus">
                <span className="content">Hello World From Popup!</span>
            </Popup>
        );
        cy.get('button').focus();

        cy.get('.next-overlay-wrapper').should('exist');
        cy.get('.content').trigger('mousedown');
        cy.get('button').blur();

        cy.get('button').focus();
        cy.get('.next-overlay-wrapper').should('exist');
        cy.get('button').blur();
        cy.get('.next-overlay-wrapper').should('not.be.visible');
    });

    it('should support setting triggerType to click with custom triggerClickKeycode', () => {
        cy.mount(
            <Popup trigger={<button>Open</button>} triggerType="click" triggerClickKeycode={40}>
                <span className="content">Hello World From Popup!</span>
            </Popup>
        );
        cy.get('button').click();

        cy.get('.next-overlay-wrapper').should('exist');
        cy.get('button').click();

        cy.get('.next-overlay-wrapper').should('have.length', 0);
        cy.get('button').trigger('keydown', { keyCode: KEYCODE.DOWN_ARROW });

        cy.get('.next-overlay-wrapper').should('exist');
        cy.get('button').trigger('keydown', { keyCode: KEYCODE.DOWN_ARROW });

        cy.get('.next-overlay-wrapper').should('have.length', 0);
        cy.get('button').trigger('keydown', { keyCode: KEYCODE.ENTER });

        cy.get('.next-overlay-wrapper').should('have.length', 0);
        cy.get('button').trigger('keydown', { keyCode: KEYCODE.SPACE });

        cy.get('.next-overlay-wrapper').should('have.length', 0);
    });

    it('should support setting canCloseByTrigger to false', () => {
        cy.mount(
            <Popup trigger={<button>Open</button>} triggerType="click" canCloseByTrigger={false}>
                <span className="content">Hello World From Popup!</span>
            </Popup>
        );
        cy.get('button').click();

        cy.get('.next-overlay-wrapper').should('exist');
        cy.get('button').click();

        cy.get('.next-overlay-wrapper').should('exist');
    });

    it('should support setting custom container', () => {
        cy.mount(
            <div id="myContainer">
                <Popup
                    trigger={<button>Open</button>}
                    triggerType="click"
                    container={'myContainer'}
                    canCloseByTrigger={false}
                >
                    <span className="content">Hello World From Popup!</span>
                </Popup>
            </div>
        );
        cy.get('button').click();

        cy.get('#myContainer .next-overlay-wrapper').should('exist');
        cy.get('button').click();
        cy.get('.next-overlay-wrapper').should('exist');
    });

    it('should support controling', () => {
        cy.mount(<PopupControlDemo />);
        cy.get('button').click();

        cy.get('.next-overlay-wrapper').should('exist');
        cy.get('button').click();

        cy.get('.next-overlay-wrapper').should('have.length', 0);
    });

    it('should support render in shadow dom', () => {
        const ShadowComponent: FC = () => {
            // 使用useRef钩子来获取DOM引用
            const ref = useRef<HTMLDivElement>(null);

            // 使用useEffect钩子来处理组件挂载后的逻辑
            useEffect(() => {
                // 确保ref.current存在，并且是HTMLElement的实例
                if (ref.current && 'shadowRoot' in ref.current) {
                    // 使用attachShadow方法创建Shadow Root
                    const shadowRoot = ref.current.attachShadow({ mode: 'open' });

                    // 在Shadow Root中添加内容
                    shadowRoot.innerHTML = `
                  <style>
                    /* Shadow DOM styles */
                    .shadow-content {
                      color: red;
                      text-align: center;
                    }
                  </style>
                  <div class="shadow-content">This is inside the Shadow DOM!</div>
                `;
                }
            }, []);

            // 渲染一个宿主元素，它将包含Shadow DOM
            return (
                <div id="host" ref={ref} className="shadow-host">
                    <Popup trigger={<button>Open</button>} triggerType="click">
                        <span className="content">Hello World From Popup!</span>
                    </Popup>
                </div>
            );
        };
        cy.mount(<ShadowComponent />);
        // eslint-disable-next-line cypress/no-unnecessary-waiting

        // NOTE: 此处不能使用 ReactTestUtils.Simulate.click(btn);
        cy.get('#host').find('button').click({ force: true });

        cy.get('.next-overlay-wrapper').should('exist');
        cy.get('#host').find('button').click({ force: true });
        // eslint-disable-next-line cypress/no-unnecessary-waiting

        cy.get('.next-overlay-wrapper').should('have.length', 0);
    });

    // https://riddle.alibaba-inc.com/riddles/b58b48a6
    it('should support container return a react component', () => {
        class App extends Component {
            downloadRef: InstanceType<typeof Button> | null;
            render() {
                const innerButton = (
                    <Button
                        id="balloon-button-container"
                        className="btrigger"
                        ref={n => {
                            this.downloadRef = n;
                        }}
                    >
                        Show Inner Balloon\
                    </Button>
                );
                return (
                    <div className="container nested">
                        <Balloon
                            type="primary"
                            trigger={innerButton}
                            closable={false}
                            triggerType="click"
                            popupContainer={() => this.downloadRef}
                        >
                            12121
                        </Balloon>
                    </div>
                );
            }
        }
        cy.mount(<App />);
        cy.get('#balloon-button-container').first().click();
        cy.get('.next-balloon').should('exist');
        cy.get('#balloon-button-container .next-balloon').should('exist');
    });

    // https://riddle.alibaba-inc.com/riddles/10f7eac1
    it('should base on BaseElement`offset event when BaseElement is fixed', () => {
        cy.mount(
            <div className="container" style={{ height: '400px', overflow: 'auto' }}>
                <div style={{ height: 1200, width: '100%', background: 'red' }} />
                <Balloon
                    align="l"
                    triggerType="click"
                    popupClassName="fb-pop"
                    trigger={
                        <div
                            style={{
                                position: 'fixed',
                                top: '100px',
                                left: '100px',
                                width: '10px',
                                height: '10px',
                            }}
                            className="aem-feedback"
                        >
                            trigger
                        </div>
                    }
                    closable={false}
                >
                    <p>用户钉钉群</p>
                    <p>问题反馈</p>
                </Balloon>
            </div>
        );
        cy.get('.aem-feedback').click({ force: true });
        cy.get('.next-overlay-inner').should('not.have.css', 'top', '0px');
    });

    it('should configprovider work', () => {
        function Demo() {
            return (
                <ConfigProvider popupContainer={() => document.getElementById('config-provider')!}>
                    <div>
                        <div id="config-provider" />
                        <div id="self" />
                        <Popup visible>
                            <span id="test-popup">this is popup</span>
                        </Popup>
                        <Balloon visible popupContainer={() => document.getElementById('self')!}>
                            <span id="test-balloon">this is balloon</span>
                        </Balloon>
                    </div>
                </ConfigProvider>
            );
        }
        cy.mount(
            <div>
                <Demo />
            </div>
        );

        cy.get('#config-provider #test-popup').first();
        cy.get('#self #test-balloon').first();
    });

    // https://github.com/alibaba-fusion/next/issues/3233
    it('fix crash when Popup receives an empty node', () => {
        cy.mount(
            <div>
                <Popup trigger={<Button className="btn">Open</Button>} triggerType="click" />
                <br />
            </div>
        );
        cy.get('.btn');
    });

    it('fix support show-hide in nested scroll component', function () {
        cy.mount(
            <div
                className="root-container"
                style={{
                    height: 150,
                    padding: 50,
                    border: '1px solid #eee',
                    overflowY: 'scroll',
                }}
            >
                <div style={{ height: 50, border: '1px solid #eee' }} />
                <div
                    className="parent-container"
                    style={{
                        height: 100,
                        overflowY: 'scroll',
                        border: '1px solid #eee',
                        background: 'gray',
                    }}
                >
                    <div style={{ height: 30, border: '1px solid #eee' }} />
                    <Popup v2 trigger={<button>Open</button>} triggerType="click">
                        <div className="overlay-content" style={{ width: 400, height: 100 }}>
                            Hello World From Popup!
                        </div>
                    </Popup>
                    <div style={{ height: 200, border: '1px solid #eee' }} />
                </div>
                <div style={{ height: 200, border: '1px solid #eee' }} />
            </div>
        );
        cy.get('button').click();

        cy.get('.root-container').then($el => {
            if ($el.length) {
                $el[0].scrollTop = 300;
            }
        });

        cy.get('.next-overlay-inner').should('have.css', 'display', 'none');
        cy.get('.root-container').then($el => {
            if ($el.length) {
                $el[0].scrollTop = 0;
            }
        });

        cy.get('.next-overlay-inner').should('have.css', 'display', 'block');
        cy.get('.parent-container').then($el => {
            if ($el.length) {
                $el[0].scrollTop = 200;
            }
        });

        cy.get('.next-overlay-inner').should('have.css', 'display', 'none');
        cy.get('.parent-container').then($el => {
            if ($el.length) {
                $el[0].scrollTop = 0;
            }
        });

        cy.get('.next-overlay-inner').should('have.css', 'display', 'block');
    });
});
