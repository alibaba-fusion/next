import React, { useRef, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import simulateEvent from 'simulate-event';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';

import co from 'co';
import assert from 'power-assert';
import { dom, KEYCODE, env } from '../../util';
import Overlay from '../index';
import Button from '../../button/index';
import '../../button/style';
import '../../animate/style';
import '../style';

Enzyme.configure({ adapter: new Adapter() });

/* eslint-disable react/jsx-filename-extension, react/no-multi-comp */
/* global describe it afterEach */
/* global describe it beforeEach */

const { hasClass } = dom;
const { Popup } = Overlay;
const delay = time => new Promise(resolve => setTimeout(resolve, time));

const render = element => {
    let inc;
    const container = document.createElement('div');
    container.className = 'container';
    document.body.appendChild(container);
    ReactDOM.render(element, container, function () {
        inc = this;
    });
    return {
        setProps: props => {
            ReactDOM.unmountComponentAtNode(container);
            const clonedElement = React.cloneElement(element, props);
            ReactDOM.render(clonedElement, container);
        },
        unmount: () => {
            ReactDOM.unmountComponentAtNode(container);
            document.body.removeChild(container);
        },
        instance: () => {
            return inc;
        },
        find: selector => {
            return container.querySelectorAll(selector);
        },
    };
};

class OverlayControlDemo extends React.Component {
    constructor(props) {
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
                        this.btn = ref;
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
    let wrapper;

    let onerror = window.onerror;
    before(() => {
        // 捕获，否则进行不下去 ResizeObserver loop limit exceeded
        window.onerror = null;
    });
    after(() => {
        window.onerror = onerror;
    });

    beforeEach(() => {
        const nodeListArr = [].slice.call(document.querySelectorAll('.next-overlay-wrapper'));

        nodeListArr.forEach(node => {
            node.parentNode.removeChild(node);
        });
    });

    afterEach(() => {
        if (wrapper) {
            wrapper.unmount();
            wrapper = null;
        }
        document.body.style = '';
    });

    it('should support rendering overlay', async () => {
        return co(function* () {
            wrapper = render(
                <Overlay v2 visible>
                    <div className="content" />
                </Overlay>
            );
            yield delay(20);
            assert(document.querySelector('.next-overlay-wrapper.opened'));
            assert(document.querySelector('.next-overlay-inner.content'));

            wrapper.setProps({
                visible: false,
            });
            yield delay(20);
            assert(!document.querySelector('.next-overlay-wrapper'));

            wrapper.setProps({
                visible: true,
            });
            yield delay(20);
            assert(document.querySelector('.next-overlay-wrapper.opened'));
            assert(document.querySelector('.next-overlay-inner.content'));
        });
    });

    it('should support setting animation to false', async () => {
        wrapper = render(
            <Overlay v2 animation={false}>
                <div className="content" />
            </Overlay>
        );
        assert(!document.querySelector('.next-overlay-wrapper'));

        wrapper.setProps({
            visible: true,
        });
        await delay(20);
        assert(document.querySelector('.next-overlay-wrapper'));
        assert(hasClass(document.querySelector('.next-overlay-inner'), 'content'));
        assert(!document.querySelector('.next-overlay-backdrop'));

        wrapper.setProps({
            visible: true,
            hasMask: true,
        });
        await delay(20);
        assert(document.querySelector('.next-overlay-backdrop'));
    });

    it('should support canCloseByEsc', async () => {
        let called = false;
        const handleClose = e => {
            called = true;
            assert('target' in e);
        };

        wrapper = render(
            <Overlay v2 visible canCloseByEsc={false} onRequestClose={handleClose}>
                <div className="content" />
            </Overlay>
        );

        await delay(20);
        simulateEvent.simulate(document.body, 'keydown', { keyCode: KEYCODE.ESC });
        assert(!called);

        wrapper.setProps({
            canCloseByEsc: true,
        });

        await delay(20);
        simulateEvent.simulate(document.body, 'keydown', { keyCode: KEYCODE.ESC });
        assert(called);
    });

    it('should support canCloseByOutSideClick', async () => {
        let called = false;
        const handleClose = e => {
            called = true;
            assert('target' in e);
        };

        wrapper = render(
            <Overlay v2 visible canCloseByOutSideClick={false} onRequestClose={handleClose}>
                <div className="content" />
            </Overlay>
        );

        await delay(20);
        simulateEvent.simulate(document.body, 'mousedown');
        assert(!called);

        wrapper.setProps({
            canCloseByOutSideClick: true,
        });

        await delay(20);
        simulateEvent.simulate(document.body, 'mousedown');
        assert(called);
    });

    it('should support canCloseByMask', async () => {
        let called = false;
        const handleClose = e => {
            called = true;
            assert('target' in e);
        };

        wrapper = render(
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

        await delay(20);
        simulateEvent.simulate(document.querySelector('.next-overlay-backdrop'), 'mousedown');
        assert(!called);

        wrapper.setProps({
            canCloseByMask: true,
        });

        await delay(20);
        simulateEvent.simulate(document.querySelector('.next-overlay-backdrop'), 'mousedown');
        assert(called);
    });

    it('should support safeNode', async () => {
        wrapper = render(
            <OverlayControlDemo>
                <span id="inner" style={{ width: 100, height: 100 }}>
                    123
                </span>
            </OverlayControlDemo>
        );
        let btn = document.querySelector('button');

        simulateEvent.simulate(btn, 'click');
        await delay(20);
        assert(document.querySelector('.next-overlay-wrapper'));

        simulateEvent.simulate(document.querySelector('#inner'), 'click');
        await delay(20);
        assert(document.querySelector('.next-overlay-wrapper'));

        simulateEvent.simulate(btn, 'click');
        await delay(20);
        assert(!document.querySelector('.next-overlay-wrapper'));
    });

    it('should support disableScroll', async () => {
        wrapper = render(<OverlayControlDemo disableScroll hasMask />);
        const btn = document.querySelector('button');

        simulateEvent.simulate(btn, 'click');
        await delay(20);
        assert(document.body.style.overflowY === 'hidden');
        // paddingRight 有没有值取决于当前浏览器环境是否有滚动条（mac可以设置默认有，或默认没有）
        // assert(document.body.style.paddingRight === `${scrollbarWidth}px`);

        simulateEvent.simulate(btn, 'click');
        await delay(20);
        assert(!document.body.style.overflowY);
        assert(!document.body.style.paddingRight);
    });

    it('should support autoFocus', async () => {
        const outerInput = document.createElement('input');
        outerInput.id = 'outer';
        document.body.appendChild(outerInput);
        outerInput.focus();
        wrapper = render(
            <OverlayControlDemo autoFocus>
                <input id="inner" />
            </OverlayControlDemo>
        );
        const btn = document.querySelector('button');

        simulateEvent.simulate(btn, 'click');
        await delay(200);
        assert(document.activeElement === document.querySelector('#inner'));

        simulateEvent.simulate(btn, 'click');
        await delay(200);
        // ie9/ie10 document.activeElement === document.body
        if (env.ieVersion > 10) {
            assert(document.activeElement === document.querySelector('#outer'));
        }

        document.body.removeChild(outerInput);
    });

    it('should not destory overlay node if set cache to true', async () => {
        wrapper = render(<OverlayControlDemo cache wrapperClassName="overlay-cache-test" />);
        const btn = document.querySelector('button');

        simulateEvent.simulate(btn, 'click');
        await delay(20);

        simulateEvent.simulate(btn, 'click');
        await delay(200);

        assert(
            document.querySelector('.overlay-cache-test.next-overlay-wrapper').style.display ===
                'none'
        );
    });

    it('should propagate click event to parent DOM', async () => {
        const clickHandler = sinon.spy();

        wrapper = render(
            <div id="overlay-container" onClick={clickHandler}>
                <Overlay v2 visible container={'overlay-container'}>
                    <div className="content" />
                </Overlay>
            </div>
        );

        await delay(20);
        simulateEvent.simulate(document.querySelector('.content'), 'click');
        assert(clickHandler.calledOnce);
    });

    // // https://github.com/alibaba-fusion/next/issues/2033
    it('should support set container dynamic', async () => {
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

        const container = document.createElement('div');
        document.body.append(container);
        ReactDOM.render(<OverlayDemo />, container);

        await delay(20);
        assert(document.querySelector('#container0 .next-overlay-wrapper'));

        const btn = document.querySelector('#btn');
        simulateEvent.simulate(btn, 'click');

        await delay(20);
        assert(document.querySelector('#container1 .next-overlay-wrapper'));
        container.remove();
    });

    it('should on right of body', async () => {
        const container = document.createElement('div');

        function Demo(props) {
            const btnRef = useRef();

            return (
                <div>
                    <Button style={{ width: '100%' }} ref={btnRef}>
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
        document.body.append(container);
        ReactDOM.render(<Demo align="tl tr" />, container);

        // visible 直接为true，会自动delay 100ms渲染
        await delay(200);
        // 空间不够了弹窗顶开页面宽度
        assert(
            document.querySelector('.next-overlay-inner').style.left ===
                `${parseFloat(window.getComputedStyle(document.body).width)}px`
        );
        container.remove();
        document.querySelector('.next-overlay-wrapper').remove();
    });

    it('fix bug on position when target is a svg element', async () => {
        wrapper = render(
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

        await delay(200);
        assert(document.querySelector('.overlay-btn').style.left === `${(200 - 50) / 2}px`);
    });
});

describe('Popup v2', async () => {
    let wrapper;
    let onerror = window.onerror;
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

    it('should support rendering trigger and overlay', async () => {
        return co(function* () {
            wrapper = render(
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
            yield delay(20);
            assert(document.querySelector('button'));
            assert(document.querySelector('.next-overlay-wrapper'));

            simulateEvent.simulate(document.body, 'mousedown');
            yield delay(20);
            assert(!document.querySelector('.next-overlay-wrapper'));
        });
    });

    it('should support triggerType=hover', async () => {
        wrapper = render(
            <Popup animation={false} v2 trigger={<button>Open</button>}>
                <span className="content">Hello World From Popup!</span>
            </Popup>
        );

        await delay(20);
        const btn = document.querySelector('button');
        ReactTestUtils.Simulate.mouseEnter(btn);
        await delay(220); // hover 触发时长是 200
        assert(document.querySelector('.next-overlay-wrapper'));

        ReactTestUtils.Simulate.mouseLeave(btn);
        ReactTestUtils.Simulate.mouseEnter(document.querySelector('.content'));
        await delay(220);
        assert(document.querySelector('.next-overlay-wrapper'));

        ReactTestUtils.Simulate.mouseLeave(document.querySelector('.content'));
        await delay(220);
        assert(!document.querySelector('.next-overlay-wrapper'));
    });

    it('should still open when click overlay with triggerType = focus', async () => {
        wrapper = render(
            <Popup v2 animation={false} trigger={<button>Open</button>} triggerType="focus">
                <span className="content">Hello World From Popup!</span>
            </Popup>
        );
        await delay(20);
        const btn = document.querySelector('button');
        ReactTestUtils.Simulate.focus(btn);
        await delay(20);
        assert(document.querySelector('.next-overlay-wrapper'));

        ReactTestUtils.Simulate.mouseDown(document.querySelector('.content'));
        ReactTestUtils.Simulate.blur(btn);
        await delay(20);
        assert(document.querySelector('.next-overlay-wrapper'));

        ReactTestUtils.Simulate.blur(btn);
        await delay(20);
        assert(!document.querySelector('.next-overlay-wrapper'));
    });

    it('should support setting triggerType to click', async () => {
        wrapper = render(
            <Popup v2 animation={false} trigger={<button>Open</button>} triggerType="click">
                <span className="content">Hello World From Popup!</span>
            </Popup>
        );
        await delay(20);
        const btn = document.querySelector('button');
        assert(btn);
        ReactTestUtils.Simulate.click(btn);
        await delay(20);
        assert(document.querySelector('.next-overlay-wrapper'));

        ReactTestUtils.Simulate.click(btn);
        await delay(20);
        assert(!document.querySelector('.next-overlay-wrapper'));
    });

    it('should support setting triggerType to click with custom triggerClickKeycode', async () => {
        wrapper = render(
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
        const btn = document.querySelector('button');

        ReactTestUtils.Simulate.click(btn);
        await delay(20);
        assert(document.querySelector('.next-overlay-wrapper'));

        ReactTestUtils.Simulate.click(btn);
        await delay(20);
        assert(!document.querySelector('.next-overlay-wrapper'));

        ReactTestUtils.Simulate.keyDown(btn, { keyCode: KEYCODE.DOWN_ARROW });
        await delay(20);
        assert(document.querySelector('.next-overlay-wrapper'));

        // triggerClickKeycode 具备开/关功能
        ReactTestUtils.Simulate.keyDown(btn, { keyCode: KEYCODE.DOWN_ARROW });
        await delay(20);
        assert(!document.querySelector('.next-overlay-wrapper'));
    });

    it('should support onClick on trigger while triggerType=click', async () => {
        const onClick = sinon.spy();

        wrapper = render(
            <Popup
                v2
                animation={false}
                trigger={<button onClick={onClick}>Open</button>}
                triggerType="click"
            >
                <span className="content">Hello World From Popup!</span>
            </Popup>
        );
        await delay(20);
        const btn = document.querySelector('button');
        assert(btn);
        ReactTestUtils.Simulate.click(btn);
        await delay(20);
        assert(onClick.calledOnce);
        assert(document.querySelector('.next-overlay-wrapper'));

        ReactTestUtils.Simulate.click(btn);
        await delay(20);
        assert(onClick.calledTwice);
        assert(!document.querySelector('.next-overlay-wrapper'));
    });

    it('should support safeNode', async () => {
        class SafeNodeDemo extends React.Component {
            constructor(props) {
                super(props);

                this.state = {
                    visible: false,
                };
            }

            onGroupVisibleChange = groupVisible => {
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
                                    this.overlay1 = ref;
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
                                    this.overlay2 = ref;
                                }}
                            >
                                Hello World From Popup!
                            </span>
                        </Popup>
                    </div>
                );
            }
        }

        wrapper = render(<SafeNodeDemo />);

        await delay(20);
        const btn = document.querySelector('#btn1');
        simulateEvent.simulate(btn, 'click');

        await delay(20);
        const overlay2 = document.querySelector('.overlay-demo2');
        assert(overlay2);
        assert(document.querySelector('.overlay-demo1'));

        ReactTestUtils.Simulate.click(overlay2);
        assert(document.querySelector('.overlay-demo2'));
        assert(document.querySelector('.overlay-demo1'));
    });

    // it('should support setting canCloseByTrigger to false', async () => {
    //     wrapper = render(
    //         <Popup v2  animation={false}  trigger={<button>Open</button>} triggerType="click" canCloseByTrigger={false}>
    //             <span className="content">Hello World From Popup!</span>
    //         </Popup>
    //     );
    //     const btn = document.querySelector('button');
    //     ReactTestUtils.Simulate.click(btn);
    //     await delay(20);
    //     assert(document.querySelector('.next-overlay-wrapper'));

    //     ReactTestUtils.Simulate.click(btn);
    //     await delay(20);
    //     assert(document.querySelector('.next-overlay-wrapper'));
    // });

    it('should support setting custom container', async () => {
        wrapper = render(
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

        const btn = document.querySelector('button');

        ReactTestUtils.Simulate.click(btn);
        await delay(20);
        assert(document.querySelector('.next-overlay-wrapper').parentElement.id === 'myContainer');

        ReactTestUtils.Simulate.click(btn);
        await delay(200);
        assert(!document.querySelector('.next-overlay-wrapper'));
    });

    it('should support controling', async () => {
        class PopupControlDemo extends React.Component {
            constructor(props) {
                super(props);

                this.state = {
                    visible: false,
                };
            }

            onVisibleChange = visible => {
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

        wrapper = render(<PopupControlDemo />);
        const btn = document.querySelector('button');

        ReactTestUtils.Simulate.click(btn);
        await delay(20);
        assert(document.querySelector('.next-overlay-wrapper'));

        ReactTestUtils.Simulate.click(btn);
        await delay(20);
        assert(!document.querySelector('.next-overlay-wrapper'));
    });

    it('should support render in shadow dom', async () => {
        const host = document.createElement('div');
        const shadowRoot = host.attachShadow({ mode: 'open' });
        document.body.appendChild(host);

        ReactDOM.render(
            <Popup v2 animation={false} trigger={<button>Open</button>} triggerType="click">
                <span className="content">Hello World From Popup!</span>
            </Popup>,
            shadowRoot
        );

        await delay(20);
        const btn = shadowRoot.querySelector('button');
        ReactTestUtils.Simulate.click(btn);

        await delay(20);
        assert(document.querySelector('.next-overlay-wrapper'));

        btn.click();
        await delay(20);
        assert(!document.querySelector('.next-overlay-wrapper'));

        ReactDOM.unmountComponentAtNode(shadowRoot);
        document.body.removeChild(host);
    });

    // https://github.com/alibaba-fusion/next/issues/3233
    it('should not crash when Popup receives an empty node', async () => {
        wrapper = render(
            <div>
                <Popup v2 trigger={<Button className="btn">Open</Button>} triggerType="click" />
                <br />
            </div>
        );
        const buttonDom = wrapper.find('.btn');

        assert(buttonDom);
    });
});
