import React, { useRef, useState, useEffect, cloneElement, ReactElement } from 'react';
import ReactDOM from 'react-dom';
import type { MountReturn } from 'cypress/react';
import type { ButtonProps } from '@alifd/next/lib/button';

import { KEYCODE, env } from '../../util';
import Overlay, { OverlayProps } from '../index';
import type { PopupProps } from '../types';
import Button from '../../button/view/button';

import '../../button/style';
import '../../animate/style';
import '../style';

``;

/* eslint-disable react/jsx-filename-extension, react/no-multi-comp */
/* global describe it afterEach */
/* global describe it beforeEach */

/**
 * 仅在渲染多个组件时使用，单一组件请使用cy.mount
 */
export function render<P = unknown>(element: ReactElement<P>) {
    let inc: any;
    const container = document.createElement('div');
    document.body.appendChild(container);
    // eslint-disable-next-line react/no-deprecated
    ReactDOM.render(element, container, function () {
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        inc = this;
    });
    return {
        setProps: (props: Partial<P>) => {
            const clonedElement = React.cloneElement(element, props);
            // eslint-disable-next-line react/no-deprecated
            ReactDOM.render(clonedElement, container);
        },
        unmount: () => {
            // eslint-disable-next-line react/no-deprecated
            ReactDOM.unmountComponentAtNode(container);
            if (document.body.contains(container)) {
                document.body.removeChild(container);
            }
        },
        instance: () => {
            return inc;
        },
        find: (selector: string) => {
            return container.querySelectorAll(selector);
        },
    };
}

const { Popup } = Overlay;

interface OverlayControlDemoState {
    visible: boolean;
}

class OverlayControlDemo extends React.Component<OverlayProps, OverlayControlDemoState> {
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
        // eslint-disable-next-line
        const { children, ...others } = this.props;

        return (
            <div style={{ height: '110vh' }}>
                <button
                    onClick={this.onClick}
                    ref={ref => {
                        this.btn = ref as HTMLButtonElement;
                    }}
                >
                    Toggle visible
                </button>
                <Overlay
                    v2
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
    let wrapper: ReturnType<typeof render> | null = null;

    const onerror = window.onerror;
    before(() => {
        // 捕获，否则进行不下去 ResizeObserver loop limit exceeded
        window.onerror = null;
    });
    after(() => {
        window.onerror = onerror;
    });

    beforeEach(() => {
        const nodeListArr = [].slice.call(document.querySelectorAll('.next-overlay-wrapper'));

        nodeListArr.forEach((node: HTMLElement) => {
            (node.parentNode as HTMLElement).removeChild(node);
        });
    });

    afterEach(() => {
        if (wrapper) {
            wrapper.unmount();
            wrapper = null;
        }
        (document.body as any).style = '';
    });

    it('should support rendering overlay', () => {
        cy.mount(
            <Overlay v2 visible>
                <div className="content" />
            </Overlay>
        ).as('overlay');
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(20);

        cy.get('.next-overlay-wrapper.opened');
        cy.get('.next-overlay-inner.content');
        cy.get<MountReturn>('@overlay').then(({ component, rerender }) => {
            return rerender(cloneElement(component as ReactElement, { visible: false }));
        });
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(20);

        cy.get('.next-overlay-wrapper').should('not.be.visible');
        cy.get<MountReturn>('@overlay').then(({ component, rerender }) => {
            return rerender(cloneElement(component as ReactElement, { visible: true }));
        });
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(20);

        cy.get('.next-overlay-wrapper.opened');
        cy.get('.next-overlay-inner.content');
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
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(20);

        cy.clock();
        cy.get('.next-overlay-wrapper');
        cy.get('.next-overlay-inner').should('have.class', 'content');
        cy.get('.next-overlay-backdrop').should('not.exist');
        cy.get<MountReturn>('@overlay').then(({ component, rerender }) => {
            return rerender(
                cloneElement(component as ReactElement, { visible: true, hasMask: true })
            );
        });
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(20);

        cy.get('.next-overlay-backdrop');
    });

    it('should support canCloseByEsc', () => {
        const handleClose = cy.spy();
        cy.mount(
            <Overlay v2 visible canCloseByEsc={false} onRequestClose={handleClose}>
                <div className="content" />
            </Overlay>
        ).as('overlay');
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(20);

        cy.clock();
        cy.get('html').trigger('keydown', { keyCode: KEYCODE.ESC });
        cy.wrap(handleClose).should('not.be.calledOnce');

        cy.get<MountReturn>('@overlay').then(({ component, rerender }) => {
            return rerender(cloneElement(component as ReactElement, { canCloseByEsc: true }));
        });
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(20);

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
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(20);

        cy.get('html').trigger('mousedown');
        cy.wrap(handleClose).should('not.be.calledOnce');
        cy.get<MountReturn>('@overlay').then(({ component, rerender }) => {
            return rerender(
                cloneElement(component as ReactElement, { canCloseByOutSideClick: true })
            );
        });
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(20);

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
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(20);

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
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(20);

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
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(20);
        cy.get('.next-overlay-wrapper');

        cy.get('#inner').click();
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(20);
        cy.get('.next-overlay-wrapper');

        cy.get('button').click();
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(20);
        cy.get('.next-overlay-wrapper').should('not.exist');
    });

    it('should support disableScroll', () => {
        cy.mount(<OverlayControlDemo disableScroll hasMask />);

        cy.get('button').click({ force: true });
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(20);
        cy.get('body').should('have.css', 'overflowY', 'hidden');

        cy.get('button').click({ force: true });
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(20);
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
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(200);
        cy.get('#inner').should('be.focused');

        cy.get('button').click();
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(200);
        // ie9/ie10 document.activeElement === document.body
        if ((env.ieVersion as number) > 10) {
            cy.get('@outerInput').should('be.focused');
        }
    });

    it('should not destory overlay node if set cache to true', () => {
        cy.mount(<OverlayControlDemo cache wrapperClassName="overlay-cache-test" />);

        cy.get('button').click();
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(20);

        cy.get('button').click();
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(200);

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
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(20);
        cy.get('.content').click({ force: true });
        cy.wrap(clickHandler).should('be.calledOnce');
    });

    // // https://github.com/alibaba-fusion/next/issues/2033
    it('should support set container dynamic', () => {
        // 动态更新container
        class OverlayDemo extends React.Component {
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
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(20);
        cy.get('#container0 .next-overlay-wrapper');

        cy.get('#btn').click();
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(20);
        cy.get('#container1 .next-overlay-wrapper');
    });

    it('should on right of body', () => {
        function Demo(props: OverlayProps) {
            const btnRef = useRef();

            return (
                <div>
                    <Button style={{ width: '100%' }} ref={btnRef as any}>
                        Toggle visible
                    </Button>
                    <Overlay v2 visible target={() => btnRef.current} {...props}>
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
        });
        cy.wait(200);
        cy.mount(
            <div>
                <Demo align="tl tr" />
            </div>
        );
        // visible 直接为true，会自动delay 100ms渲染

        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(200);
        // 空间不够了弹窗顶开页面宽度
        cy.get('.next-overlay-inner')
            .click({ scrollBehavior: false, force: true })
            .should('have.css', 'left', `${document.documentElement.clientWidth}px`);
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
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(200);
        cy.get('.overlay-btn').should('have.css', 'left', `${(200 - 50) / 2 + 8}px`);
    });
});

describe('Popup v2', async () => {
    let wrapper: ReturnType<typeof render> | null = null;
    const onerror = window.onerror;
    before(() => {
        // 捕获，否则进行不下去 ResizeObserver loop limit exceeded
        window.onerror = null;
    });
    after(() => {
        window.onerror = onerror;
    });
    afterEach(() => {
        if (wrapper) {
            wrapper.unmount();
            wrapper = null;
        }
    });

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
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(20);
        cy.get('button');
        cy.get('.next-overlay-wrapper');

        cy.get('html').trigger('mousedown');
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(20);
        cy.get('.next-overlay-wrapper').should('not.exist');
    });

    it('should support triggerType=hover', () => {
        cy.mount(
            <Popup animation={false} v2 trigger={<button>Open</button>}>
                <span className="content">Hello World From Popup!</span>
            </Popup>
        );
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(20);
        cy.get('button').trigger('mouseover');
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(220);
        cy.get('.next-overlay-wrapper');
        cy.get('button').trigger('mouseleave');
        cy.get('.content').trigger('mouseover');
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(220); // hover 触发时长是 200
        cy.get('.next-overlay-wrapper');

        cy.get('button').trigger('mouseleave');
        cy.get('.content').trigger('mouseenter');
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(220);
        cy.get('.next-overlay-wrapper');

        cy.get('.content').trigger('mouseleave');
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(220);
        cy.get('.next-overlay-wrapper').should('not.be.visible');
    });

    it('should still open when click overlay with triggerType = focus', () => {
        cy.mount(
            <Popup v2 animation={false} trigger={<button>Open</button>} triggerType="focus">
                <span className="content">Hello World From Popup!</span>
            </Popup>
        );
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(20);
        cy.get('button').trigger('focus');
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(20);
        cy.get('.next-overlay-wrapper');

        cy.get('.content').trigger('mousedown');
        cy.get('button').focus();
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(20);
        cy.get('.next-overlay-wrapper');

        cy.get('button').blur();
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(20);
        cy.get('.next-overlay-wrapper').should('not.be.visible');
    });

    it('should support setting triggerType to click', () => {
        cy.mount(
            <Popup v2 animation={false} trigger={<button>Open</button>} triggerType="click">
                <span className="content">Hello World From Popup!</span>
            </Popup>
        );
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(20);
        cy.get('button').should('be.visible');
        cy.get('button').click();
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(20);
        cy.get('.next-overlay-wrapper');

        cy.get('button').click();
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(20);
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
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(20);
        cy.get('.next-overlay-wrapper');

        cy.get('button').click();
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(20);
        cy.get('.next-overlay-wrapper').should('not.exist');

        cy.get('button').trigger('keydown', { keyCode: KEYCODE.DOWN_ARROW });
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(20);
        cy.get('.next-overlay-wrapper');

        // triggerClickKeycode 具备开/关功能
        cy.get('button').trigger('keydown', { keyCode: KEYCODE.DOWN_ARROW });
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(20);
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
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(20);
        cy.get('button').should('be.visible');
        cy.get('button').click();
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(20);
        cy.wrap(onClick).should('be.calledOnce');
        cy.get('.next-overlay-wrapper');

        cy.get('button').click();
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(20);
        cy.wrap(onClick).should('be.calledTwice');
        cy.get('.next-overlay-wrapper').should('not.exist');
    });

    it('should support safeNode', () => {
        class SafeNodeDemo extends React.Component<
            PopupProps,
            { groupVisible?: boolean; visible: boolean }
        > {
            btn1: ButtonProps;
            btn2: ButtonProps;
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
                                        this.btn1 = ref as ButtonProps;
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
                                    this.overlay1 = ref as HTMLElement;
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
                                        this.btn2 = ref as ButtonProps;
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
                                    this.overlay2 = ref as HTMLElement;
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
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(20);

        cy.get('#btn1').click();

        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(20);
        cy.get('.overlay-demo1');

        cy.get('.overlay-demo2').click();
        cy.get('.overlay-demo2');
        cy.get('.overlay-demo1');
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
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(20);
        cy.get('.next-overlay-wrapper');

        cy.get('button').click();
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(20);
        cy.get('.next-overlay-wrapper');
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
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(20);

        cy.get('.next-overlay-wrapper').parent().should('have.attr', 'id', 'myContainer');
        cy.get('button').click();
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(200);

        cy.get('.next-overlay-wrapper').should('not.exist');
    });

    it('should support controling', () => {
        class PopupControlDemo extends React.Component<PopupProps, { visible: boolean }> {
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
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(20);
        cy.get('.next-overlay-wrapper');

        cy.get('button').click();
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(200);
        cy.get('.next-overlay-wrapper').should('not.exist');
    });

    it('should support render in shadow dom', () => {
        // const host = document.createElement('div');
        // const shadowRoot = host.attachShadow({ mode: 'open' });
        // document.body.appendChild(host);
        // ReactDOM.render(
        //     <Popup v2 animation={false} trigger={<button>Open</button>} triggerType="click">
        //         <span className="content">Hello World From Popup!</span>
        //     </Popup>,
        //     shadowRoot
        // );
        // await delay(20);
        // const btn = shadowRoot.querySelector('button');
        // ReactTestUtils.Simulate.click(btn);
        // await delay(20);
        // assert(document.querySelector('.next-overlay-wrapper'));
        // btn.click();
        // await delay(20);
        // assert(!document.querySelector('.next-overlay-wrapper'));
        // ReactDOM.unmountComponentAtNode(shadowRoot);
        // document.body.removeChild(host);
    });

    // https://github.com/alibaba-fusion/next/issues/3233
    it('should not crash when Popup receives an empty node', () => {
        cy.mount(
            <div>
                <Popup v2 trigger={<Button className="btn">Open</Button>} triggerType="click" />
                <br />
            </div>
        );
        cy.get('.btn');
    });
});
