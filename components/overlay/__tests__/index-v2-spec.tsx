import React, {
    useRef,
    useEffect,
    cloneElement,
    Component,
    type FC,
    type ReactElement,
    createRef,
} from 'react';
import type { MountReturn } from 'cypress/react';
import Button from '../../button/index';

import { KEYCODE, env } from '../../util';
import Overlay, { type OverlayProps } from '../index';
import type { PopupProps } from '../types';

import '../../button/style';
import '../../animate/style';
import '../style';

const { Popup } = Overlay;

interface OverlayControlDemoState {
    visible: boolean;
}

class OverlayControlDemo extends Component<OverlayProps, OverlayControlDemoState> {
    btn: HTMLButtonElement;

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
        const { children, align, animation, ...others } = this.props;

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
                    v2
                    align={align as string}
                    animation={false}
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

describe('Overlay v2', async () => {
    it('should support rendering overlay', () => {
        cy.mount(
            <Overlay v2 visible>
                <div className="content" />
            </Overlay>
        ).as('overlay');
        cy.get('.next-overlay-wrapper.opened').should('exist');
        cy.get('.next-overlay-inner.content').should('exist');
        cy.get<MountReturn>('@overlay').then(({ component, rerender }) => {
            return rerender(cloneElement(component as ReactElement, { visible: false }));
        });

        cy.get('.next-overlay-wrapper').should('not.be.visible');
        cy.get<MountReturn>('@overlay').then(({ component, rerender }) => {
            return rerender(cloneElement(component as ReactElement, { visible: true }));
        });

        cy.get('.next-overlay-wrapper.opened').should('exist');
        cy.get('.next-overlay-inner.content').should('exist');
    });

    it('should support setting animation to false', () => {
        cy.mount(
            <Overlay v2 animation={false}>
                <div className="content" />
            </Overlay>
        ).as('overlay');
        cy.get('.next-overlay-wrapper').should('not.exist');
        cy.get<MountReturn>('@overlay').then(({ component, rerender }) => {
            return rerender(cloneElement(component as ReactElement, { visible: true }));
        });

        cy.get('.next-overlay-wrapper').should('exist');
        cy.get('.next-overlay-inner').should('have.class', 'content');
        cy.get('.next-overlay-backdrop').should('not.exist');
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
            <Overlay v2 visible canCloseByEsc={false} onRequestClose={handleClose}>
                <div className="content" />
            </Overlay>
        ).as('overlay');

        cy.get('html').trigger('keydown', { keyCode: KEYCODE.ESC });
        cy.wrap(handleClose).should('not.be.calledOnce');

        cy.get<MountReturn>('@overlay').then(({ component, rerender }) => {
            return rerender(cloneElement(component as ReactElement, { canCloseByEsc: true }));
        });

        cy.get('html').trigger('keydown', { keyCode: KEYCODE.ESC });
        cy.wrap(handleClose).should('be.calledOnce');
    });

    it('should support canCloseByOutSideClick', () => {
        const handleClose = cy.spy();
        cy.mount(
            <Overlay v2 visible canCloseByOutSideClick={false} onRequestClose={handleClose}>
                <div className="content" />
            </Overlay>
        ).as('overlay');

        cy.get('html').trigger('mousedown');
        cy.wrap(handleClose).should('not.be.calledOnce');
        cy.get<MountReturn>('@overlay').then(({ component, rerender }) => {
            return rerender(
                cloneElement(component as ReactElement, { canCloseByOutSideClick: true })
            );
        });

        cy.get('html').trigger('mousedown');
        cy.wrap(handleClose).should('be.calledOnce');
    });

    it('should support canCloseByMask', () => {
        const handleClose = cy.spy();
        cy.mount(
            <Overlay
                v2
                visible
                animation={false}
                hasMask
                canCloseByMask={false}
                onRequestClose={handleClose}
            >
                <div className="content" />
            </Overlay>
        );

        cy.get('.next-overlay-backdrop').trigger('mousedown');
        cy.wrap(handleClose).should('not.be.calledOnce');

        cy.mount(
            <Overlay
                v2
                visible
                animation={false}
                hasMask
                canCloseByMask
                onRequestClose={handleClose}
            >
                <div className="content" />
            </Overlay>
        );

        cy.get('.next-overlay-backdrop').trigger('mousedown', { force: true });
        cy.wrap(handleClose).should('be.calledOnce');
    });

    it('should support safeNode', () => {
        cy.mount(
            <OverlayControlDemo>
                <span id="inner" style={{ width: 100, height: 100 }}>
                    123
                </span>
            </OverlayControlDemo>
        );

        cy.get('button').click();
        cy.get('.next-overlay-wrapper').should('exist');

        cy.get('#inner').click();
        cy.get('.next-overlay-wrapper').should('exist');

        cy.get('button').click();
        cy.get('.next-overlay-wrapper').should('not.exist');
    });

    it('should support disableScroll', () => {
        cy.mount(<OverlayControlDemo disableScroll hasMask />);

        cy.get('button').click({ force: true });
        cy.get('body').should('have.css', 'overflowY', 'hidden');

        cy.get('button').click({ force: true });
        cy.get('body').should('not.have.css', 'overflowY', 'hidden');
        cy.get('body').should('not.have.css', 'paddingRight', '0');
    });

    it('should support autoFocus', () => {
        cy.mount(<input id="outer" />).as('outerInput');
        cy.mount(
            <OverlayControlDemo autoFocus>
                <input id="inner" />
            </OverlayControlDemo>
        ).as('OverlayControlDemo');

        cy.get('button').click();
        cy.get('#inner').should('be.focused');

        cy.get('button').click();
        // ie9/ie10 document.activeElement === document.body
        if ((env.ieVersion as number) > 10) {
            cy.get('@outerInput').should('be.focused');
        }
    });

    it('should not destory overlay node if set cache to true', () => {
        cy.mount(<OverlayControlDemo cache wrapperClassName="overlay-cache-test" />);

        cy.get('button').click();

        cy.get('button').click();

        cy.get('.overlay-cache-test.next-overlay-wrapper').should('have.css', 'display', 'none');
    });

    it('should propagate click event to parent DOM', () => {
        const clickHandler = cy.spy();
        cy.mount(
            <div id="overlay-container" onClick={clickHandler}>
                <Overlay v2 visible container={'overlay-container'}>
                    <div className="content" />
                </Overlay>
            </div>
        );
        cy.get('.content').click({ force: true });
        cy.wrap(clickHandler).should('be.calledOnce');
    });

    // // https://github.com/alibaba-fusion/next/issues/2033
    it('should support set container dynamic', () => {
        // 动态更新container
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
                        <Overlay v2 container={this.state.container} visible>
                            <div>Start your business here by searching a popular product</div>
                        </Overlay>
                        <div id="container0" />
                        <div id="container1" />
                    </div>
                );
            }
        }

        cy.mount(
            <div>
                <OverlayDemo />
            </div>
        );
        cy.get('#container0 .next-overlay-wrapper').should('exist');

        cy.get('#btn').click();
        cy.get('#container1 .next-overlay-wrapper').should('exist');
    });

    it('should on right of body', () => {
        function Demo(props: OverlayProps) {
            const { align, animation, ...other } = props;
            const btnRef = createRef<InstanceType<typeof Button>>();

            return (
                <div>
                    <Button style={{ width: '100%' }} ref={btnRef}>
                        Toggle visible
                    </Button>
                    <Overlay
                        v2
                        visible
                        animation={animation as string}
                        align={align as string}
                        target={() => btnRef.current}
                        {...other}
                    >
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
        // visible 直接为true，会自动delay 100ms渲染
        // 空间不够了弹窗顶开页面宽度
        cy.get('.next-overlay-inner').click({ scrollBehavior: false, force: true });
        cy.get('.next-overlay-inner').should(
            'have.css',
            'left',
            `${document.documentElement.clientWidth}px`
        );
    });

    it('fix bug on position when target is a svg element', () => {
        cy.mount(
            <div>
                <Overlay v2 target="lzy" visible align="cc cc">
                    <Button className="overlay-btn" style={{ width: 50 }}>
                        cc cc
                    </Button>
                </Overlay>
                <svg id="ppc" width={200} height={200}>
                    <rect id="lzy" width={200} height={200} fill="red" />
                </svg>
            </div>
        );
        cy.get('.overlay-btn').should('have.css', 'left', `${(200 - 50) / 2}px`);
    });
});

describe('Popup v2', async () => {
    it('should support rendering trigger and overlay', () => {
        cy.mount(
            <Popup
                v2
                animation={false}
                defaultVisible
                trigger={<button>Open</button>}
                triggerType="click"
            >
                <span>Hello World From Popup!</span>
            </Popup>
        );
        cy.get('button').should('exist');
        cy.get('.next-overlay-wrapper').should('exist');

        cy.get('html').trigger('mousedown');
        cy.get('.next-overlay-wrapper').should('not.exist');
    });

    it('should support triggerType=hover', () => {
        cy.mount(
            <Popup animation={false} v2 trigger={<button>Open</button>}>
                <span className="content">Hello World From Popup!</span>
            </Popup>
        );
        cy.get('button').trigger('mouseover');
        cy.get('.next-overlay-wrapper').should('exist');
        cy.get('button').trigger('mouseleave');
        cy.get('.content').trigger('mouseover');
        cy.get('.next-overlay-wrapper').should('exist');

        cy.get('button').trigger('mouseleave');
        cy.get('.content').trigger('mouseenter');
        cy.get('.next-overlay-wrapper').should('exist');

        cy.get('.content').trigger('mouseleave');
        cy.get('.next-overlay-wrapper').should('not.be.visible');
    });

    it('should still open when click overlay with triggerType = focus', () => {
        cy.mount(
            <Popup v2 animation={false} trigger={<button>Open</button>} triggerType="focus">
                <span className="content">Hello World From Popup!</span>
            </Popup>
        );
        cy.get('button').trigger('focus');
        cy.get('.next-overlay-wrapper').should('exist');

        cy.get('.content').trigger('mousedown');
        cy.get('button').focus();
        cy.get('.next-overlay-wrapper').should('exist');

        cy.get('button').blur();
        cy.get('.next-overlay-wrapper').should('not.be.visible');
    });

    it('should support setting triggerType to click', () => {
        cy.mount(
            <Popup v2 animation={false} trigger={<button>Open</button>} triggerType="click">
                <span className="content">Hello World From Popup!</span>
            </Popup>
        );
        cy.get('button').should('be.visible');
        cy.get('button').click();
        cy.get('.next-overlay-wrapper').should('exist');

        cy.get('button').click();
        cy.get('.next-overlay-wrapper').should('not.exist');
    });

    it('should support setting triggerType to click with custom triggerClickKeycode', () => {
        cy.mount(
            <Popup
                v2
                animation={false}
                trigger={<button>Open</button>}
                triggerType="click"
                triggerClickKeycode={KEYCODE.DOWN_ARROW}
            >
                <span className="content">Hello World From Popup!</span>
            </Popup>
        );

        cy.get('button').click();
        cy.get('.next-overlay-wrapper').should('exist');

        cy.get('button').click();
        cy.get('.next-overlay-wrapper').should('not.exist');

        cy.get('button').trigger('keydown', { keyCode: KEYCODE.DOWN_ARROW });
        cy.get('.next-overlay-wrapper').should('exist');

        // triggerClickKeycode 具备开/关功能
        cy.get('button').trigger('keydown', { keyCode: KEYCODE.DOWN_ARROW });
        cy.get('.next-overlay-wrapper').should('not.exist');
    });

    it('should support onClick on trigger while triggerType=click', () => {
        const onClick = cy.spy();
        cy.mount(
            <Popup
                v2
                animation={false}
                trigger={<button onClick={onClick}>Open</button>}
                triggerType="click"
            >
                <span className="content">Hello World From Popup!</span>
            </Popup>
        );
        cy.get('button').should('be.visible');
        cy.get('button').click();
        cy.wrap(onClick).should('be.calledOnce');
        cy.get('.next-overlay-wrapper').should('exist');

        cy.get('button').click();
        cy.wrap(onClick).should('be.calledTwice');
        cy.get('.next-overlay-wrapper').should('not.exist');
    });

    it('should support safeNode', () => {
        class SafeNodeDemo extends Component<
            PopupProps,
            { groupVisible?: boolean; visible: boolean }
        > {
            btn1: InstanceType<typeof Button> | null;
            btn2: InstanceType<typeof Button> | null;
            overlay2: HTMLElement;
            overlay1: HTMLElement;

            constructor(props: PopupProps) {
                super(props);

                this.state = {
                    visible: false,
                };
            }

            onGroupVisibleChange = (groupVisible: boolean) => {
                this.setState({
                    groupVisible,
                });
            };

            render() {
                return (
                    <div>
                        <Popup
                            v2
                            trigger={
                                <Button
                                    id="btn1"
                                    ref={ref => {
                                        this.btn1 = ref;
                                    }}
                                >
                                    Paired Popup 1
                                </Button>
                            }
                            triggerType="click"
                            visible={this.state.groupVisible}
                            safeNode={[() => this.overlay2]}
                            onVisibleChange={this.onGroupVisibleChange}
                        >
                            <span
                                className="overlay-demo1"
                                ref={ref => {
                                    this.overlay1 = ref!;
                                }}
                            >
                                Hello World From Popup!
                            </span>
                        </Popup>
                        <Popup
                            v2
                            trigger={
                                <Button
                                    ref={ref => {
                                        this.btn2 = ref;
                                    }}
                                >
                                    Paired Popup 2
                                </Button>
                            }
                            triggerType="click"
                            visible={this.state.groupVisible}
                            safeNode={[() => this.overlay1]}
                            onVisibleChange={this.onGroupVisibleChange}
                        >
                            <span
                                className="overlay-demo2"
                                ref={ref => {
                                    this.overlay2 = ref!;
                                }}
                            >
                                Hello World From Popup!
                            </span>
                        </Popup>
                    </div>
                );
            }
        }

        cy.mount(<SafeNodeDemo />);

        cy.get('#btn1').click();

        cy.get('.overlay-demo1').should('exist');

        cy.get('.overlay-demo2').click();
        cy.get('.overlay-demo2').should('exist');
        cy.get('.overlay-demo1').should('exist');
    });

    it('should support setting canCloseByTrigger to false', () => {
        cy.mount(
            <Popup
                v2
                animation={false}
                trigger={<button>Open</button>}
                triggerType="click"
                canCloseByTrigger={false}
            >
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
                    v2
                    animation={false}
                    trigger={<button>Open</button>}
                    triggerType="click"
                    container={'myContainer'}
                >
                    <span className="content">Hello World From Popup!</span>
                </Popup>
            </div>
        );
        cy.get('button').click();

        cy.get('.next-overlay-wrapper').parent().should('have.attr', 'id', 'myContainer');
        cy.get('button').click();

        cy.get('.next-overlay-wrapper').should('not.exist');
    });

    it('should support controling', () => {
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
                        animation={false}
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

        cy.mount(<PopupControlDemo />);

        cy.get('button').click();
        cy.get('.next-overlay-wrapper').should('exist');

        cy.get('button').click();
        cy.get('.next-overlay-wrapper').should('not.exist');
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
                    <Popup v2 animation={false} trigger={<button>Open</button>} triggerType="click">
                        <span className="content">Hello World From Popup!</span>
                    </Popup>
                </div>
            );
        };
        cy.mount(<ShadowComponent />);

        // NOTE: 此处不能使用 ReactTestUtils.Simulate.click(btn);
        cy.get('#host').find('button').click({ force: true });

        cy.get('.next-overlay-wrapper').should('exist');
        cy.get('#host').find('button').click({ force: true });

        cy.get('.next-overlay-wrapper').should('have.length', 0);
    });

    // https://github.com/alibaba-fusion/next/issues/3233
    it('should not crash when Popup receives an empty node', () => {
        cy.mount(
            <div>
                <Popup v2 trigger={<Button className="btn">Open</Button>} triggerType="click" />
                <br />
            </div>
        );
        cy.get('.btn').should('exist');
    });
});
