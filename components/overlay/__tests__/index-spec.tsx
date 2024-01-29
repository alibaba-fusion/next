import React, { useRef, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import simulateEvent from 'simulate-event';
import co from 'co';
import assert from 'power-assert';
import { dom, KEYCODE, env } from '../../util';
import Overlay from '../index';
import Dialog from '../../dialog/index';
import Balloon from '../../balloon/index';
import Button from '../../button/index';
import Drawer from '../../drawer/index';
import ConfigProvider from '../../config-provider/index';
import '../../button/style';
import '../style';

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
    let wrapper;

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
    });

    it('should support rendering overlay', () => {
        return co(function* () {
            wrapper = render(
                <Overlay visible>
                    <div className="content" />
                </Overlay>
            );
            yield delay(500);
            assert(document.querySelector('.next-overlay-wrapper.opened'));
            assert(document.querySelector('.next-overlay-inner.content'));

            wrapper.setProps({
                visible: false,
            });
            yield delay(500);
            assert(!document.querySelector('.next-overlay-wrapper'));

            wrapper.setProps({
                visible: true,
            });
            yield delay(500);
            assert(document.querySelector('.next-overlay-wrapper.opened'));
            assert(document.querySelector('.next-overlay-inner.content'));
        });
    });

    it('should support rendering overlay and mask', () => {
        return co(function* () {
            wrapper = render(
                <Overlay>
                    <div className="content" />
                </Overlay>
            );
            yield delay(500);
            assert(!document.querySelector('.next-overlay-wrapper'));

            wrapper.setProps({
                visible: true,
            });

            yield delay(500);
            assert(document.querySelector('.next-overlay-wrapper.opened'));
            assert(document.querySelector('.next-overlay-inner.content'));

            assert(!document.querySelector('.next-overlay-backdrop'));

            wrapper.setProps({
                visible: true,
                hasMask: true,
            });
            yield delay(500);
            assert(document.querySelector('.next-overlay-backdrop'));
        });
    });

    it('should support setting animation to false', () => {
        wrapper = render(
            <Overlay animation={false}>
                <div className="content" />
            </Overlay>
        );
        assert(!document.querySelector('.next-overlay-wrapper'));

        wrapper.setProps({
            visible: true,
        });
        assert(document.querySelector('.next-overlay-wrapper'));
        assert(hasClass(document.querySelector('.next-overlay-inner'), 'content'));
        assert(!document.querySelector('.next-overlay-backdrop'));

        wrapper.setProps({
            visible: true,
            hasMask: true,
        });
        assert(document.querySelector('.next-overlay-backdrop'));
    });

    it('should support canCloseByEsc', () => {
        let called = false;
        const handleClose = (type, e) => {
            called = true;
            assert(type === 'keyboard');
            assert('target' in e);
        };

        wrapper = render(
            <Overlay visible canCloseByEsc={false} onRequestClose={handleClose}>
                <div className="content" />
            </Overlay>
        );

        simulateEvent.simulate(document, 'keydown', { keyCode: KEYCODE.ESC });
        assert(!called);

        wrapper.setProps({
            canCloseByEsc: true,
        });

        simulateEvent.simulate(document, 'keydown', { keyCode: KEYCODE.ESC });
        assert(called);
    });

    it('should support canCloseByOutSideClick', () => {
        let called = false;
        const handleClose = (type, e) => {
            called = true;
            assert(type === 'docClick');
            assert('target' in e);
        };

        wrapper = render(
            <Overlay visible canCloseByOutSideClick={false} onRequestClose={handleClose}>
                <div className="content" />
            </Overlay>
        );

        simulateEvent.simulate(document, 'click');
        assert(!called);

        wrapper.setProps({
            canCloseByOutSideClick: true,
        });

        simulateEvent.simulate(document, 'click');
        assert(called);
    });

    it('should support canCloseByMask', () => {
        let called = false;
        const handleClose = (type, e) => {
            called = true;
            assert(type === 'maskClick');
            assert('target' in e);
        };

        wrapper = render(
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

        simulateEvent.simulate(document.querySelector('.next-overlay-backdrop'), 'click');
        assert(!called);

        wrapper.setProps({
            canCloseByMask: true,
        });

        simulateEvent.simulate(document.querySelector('.next-overlay-backdrop'), 'click');
        assert(called);
    });

    it('should support safeNode', () => {
        return co(function* () {
            wrapper = render(
                <OverlayControlDemo>
                    <span id="inner">123</span>
                </OverlayControlDemo>
            );
            let btn = document.querySelector('button');

            simulateEvent.simulate(btn, 'click');
            yield delay(500);
            assert(document.querySelector('.next-overlay-wrapper'));

            simulateEvent.simulate(document.querySelector('#inner'), 'click');
            yield delay(500);
            assert(document.querySelector('.next-overlay-wrapper'));

            simulateEvent.simulate(btn, 'click');
            yield delay(500);
            assert(!document.querySelector('.next-overlay-wrapper'));

            wrapper.setProps({
                animation: false,
            });
            btn = document.querySelector('button');
            simulateEvent.simulate(btn, 'click');
            assert(document.querySelector('.next-overlay-wrapper'));

            simulateEvent.simulate(btn, 'click');
            assert(!document.querySelector('.next-overlay-wrapper'));
        });
    });

    it('should support disableScroll', () => {
        return co(function* () {
            wrapper = render(<OverlayControlDemo disableScroll />);
            const btn = document.querySelector('button');

            simulateEvent.simulate(btn, 'click');
            assert(document.body.style.overflowY === 'hidden');
            // paddingRight 有没有值取决于当前浏览器环境是否有滚动条（mac可以设置默认有，或默认没有）
            // assert(document.body.style.paddingRight === `${scrollbarWidth}px`);

            simulateEvent.simulate(btn, 'click');
            yield delay(500);
            assert(!document.body.style.overflowY);
            assert(!document.body.style.paddingRight);
        });
    });

    it('should support autoFocus', () => {
        return co(function* () {
            const outerInput = document.createElement('input');
            outerInput.id = 'outer';
            document.body.appendChild(outerInput);
            outerInput.focus();
            wrapper = render(
                <OverlayControlDemo animation={false} autoFocus>
                    <input id="inner" />
                </OverlayControlDemo>
            );
            const btn = document.querySelector('button');

            simulateEvent.simulate(btn, 'click');
            yield delay(500);
            assert(document.activeElement === document.querySelector('#inner'));

            simulateEvent.simulate(btn, 'click');
            yield delay(500);
            // ie9/ie10 document.activeElement === document.body
            if (env.ieVersion > 10) {
                assert(document.activeElement === document.querySelector('#outer'));
            }

            document.body.removeChild(outerInput);
        });
    });

    it('should not destory overlay node if set cache to true', () => {
        return co(function* () {
            wrapper = render(<OverlayControlDemo cache wrapperClassName="overlay-cache-test" />);
            const btn = document.querySelector('button');

            simulateEvent.simulate(btn, 'click');
            yield delay(500);

            simulateEvent.simulate(btn, 'click');
            yield delay(500);

            assert(
                document.querySelector('.overlay-cache-test.next-overlay-wrapper').style.display ===
                    'none'
            );
        });
    });

    it('should support getContent', () => {
        wrapper = render(
            <Overlay visible>
                <span>content</span>
            </Overlay>
        );
        const overlay = wrapper.instance().getInstance();
        const content = overlay.getContent();
        assert(content.textContent.trim() === 'content');
    });

    it('should support autoFit', () => {
        wrapper = render(
            <div
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
                        container={node => node.parentNode}
                        autoFit
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

        wrapper.instance().scrollTop = 220;
        document.getElementById('overlay-autofit-btn').click();
        assert(document.getElementById('overlay-autofit-wrapper').style.top === '245px');

        document.body.click();
        wrapper.instance().scrollTop = 140;
        document.getElementById('overlay-autofit-btn').click();
        assert(document.getElementById('overlay-autofit-wrapper').style.top === '150px');

        document.body.click();
        wrapper.instance().scrollTop = 170;
        document.getElementById('overlay-autofit-btn').click();
        assert(document.getElementById('overlay-autofit-wrapper').style.top === '170px');
    });

    it('should support onClick', done => {
        const handleClick = e => {
            assert('target' in e);
            done();
        };

        wrapper = render(
            <Overlay visible onClick={handleClick}>
                <div className="content" />
            </Overlay>
        );

        simulateEvent.simulate(document.querySelector('.content'), 'click');
    });

    it('should support stop Child Click propagation by default', done => {
        const clickHandler = () => {
            assert(false);
        };

        wrapper = render(
            <div id="overlay-container" onClick={clickHandler}>
                <Overlay visible container={'overlay-container'}>
                    <div className="content" />
                </Overlay>
            </div>
        );

        simulateEvent.simulate(document.querySelector('.content'), 'click');

        setTimeout(() => {
            done();
        }, 1000);
    });

    it('should support function children', () => {
        const MyFuncComp = () => {
            return 'content';
        };
        wrapper = render(
            <Overlay visible>
                <MyFuncComp />
            </Overlay>
        );

        const overlay = wrapper.instance().getInstance();
        const content = overlay.getContent();
        assert(content.textContent.trim() === 'content');
    });

    // https://github.com/alibaba-fusion/next/issues/2033
    it('fix bug on Gateway when settting ContainerNode', done => {
        const container = document.createElement('div');
        document.body.append(container);
        ReactDOM.render(<OverlayDemo />, container);

        assert(document.querySelector('#container0 .next-overlay-wrapper'));

        const btn = document.querySelector('#btn');
        simulateEvent.simulate(btn, 'click');

        setTimeout(() => {
            assert(document.querySelector('#container1 .next-overlay-wrapper'));
            container.remove();
            done();
        });
    });

    // https://github.com/alibaba-fusion/next/issues/2277
    it('dom should ready when call onOpen & afterOpen evnet', done => {
        const container = document.createElement('div');

        function Demo() {
            return (
                <Dialog
                    overlayProps={{
                        wrapperClassName: 'myWrapper',
                        afterOpen() {
                            const myWrapper = document.querySelector('.myWrapper');
                            assert(myWrapper.classList.contains('opened'));
                            ReactDOM.unmountComponentAtNode(container);
                            container.remove();
                            myWrapper.remove();
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
        document.body.append(container);
        ReactDOM.render(<Demo />, container);
        container.remove();
    });

    it('fix left overflow', () => {
        const container = document.createElement('div');

        function Demo(props) {
            const btnRef = useRef();

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
        document.body.append(container);
        ReactDOM.render(<Demo align="tl tr" />, container);

        assert(
            document.querySelector('.next-overlay-inner').style.left ===
                `${parseFloat(window.getComputedStyle(document.body).width) - 200 - 1}px` // Reason to subtract 1, see: Overly._isInViewport
        );
        container.remove();
        document.querySelector('.next-overlay-wrapper').remove();
    });

    it('fix bug on position when target is a svg element', () => {
        wrapper = render(
            <div>
                <Overlay target="lzy" visible align="cc cc">
                    <Button className="overlay-btn">cc cc</Button>
                </Overlay>
                <svg id="ppc" width={200} height={200}>
                    <rect id="lzy" width={200} height={200} fill="red" />
                </svg>
            </div>
        );

        assert(document.querySelector('.overlay-btn').style.left.match('73'));
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

        wrapper = render(<Demo />);
        wrapper.find('.btn')[0].click();

        const container = wrapper.find('#luodan')[0];

        assert(container.style.overflow === 'hidden');
        assert(container.style.paddingRight === '');

        wrapper.find('.btn')[0].click();
    });

    // https://codesandbox.io/s/next-overlay-overflow-2-fulpq?file=/src/App.js
    it('fix overlay overflow hidden', done => {
        function App() {
            const appRef = useRef(null);

            useEffect(() => {
                appRef.current.style.overflow = 'hidden';
                Dialog.show({
                    popupContainer: 'app',
                    content: 'Dialog Content',
                    onOk() {
                        appRef.current.style.overflow = '';

                        setTimeout(() => {
                            assert(appRef.current.style.overflow === '');
                            done();
                        });
                    },
                });
                setTimeout(() => {
                    simulateEvent.simulate(document.querySelector('.next-dialog-btn'), 'click');
                });
            }, []);

            return (
                <div id="app" ref={appRef} style={{ height: 1200 }}>
                    Dialog Demo
                </div>
            );
        }

        wrapper = render(<App />);
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

        wrapper = render(<MyDrawer />);
        simulateEvent.simulate(document.querySelector('.btn-open'), 'click');
        assert(document.body.style.overflow === 'hidden');
        simulateEvent.simulate(document.querySelector('.next-overlay-backdrop'), 'click');
        simulateEvent.simulate(document.querySelector('.btn-close '), 'click');
        assert(document.body.style.overflow === 'hidden');
        simulateEvent.simulate(document.querySelector('.next-dialog-btn'), 'click');
        document.body.style.overflow = undefined;
        assert(document.body.style.overflow === '');
    });
});

describe('Popup', () => {
    let wrapper;

    afterEach(() => {
        if (wrapper) {
            wrapper.unmount();
            wrapper = null;
        }
    });

    it('should support rendering trigger and overlay', () => {
        return co(function* () {
            wrapper = render(
                <Popup defaultVisible trigger={<button>Open</button>} triggerType="click">
                    <span>Hello World From Popup!</span>
                </Popup>
            );
            assert(document.querySelector('button'));
            yield delay(500);
            assert(document.querySelector('.next-overlay-wrapper'));

            simulateEvent.simulate(document, 'click');
            yield delay(500);
            assert(!document.querySelector('.next-overlay-wrapper'));
        });
    });

    it('should support triggerType', async () => {
        wrapper = render(
            <Popup trigger={<button>Open</button>}>
                <span className="content">Hello World From Popup!</span>
            </Popup>
        );
        const btn = document.querySelector('button');

        ReactTestUtils.Simulate.mouseEnter(btn);
        await delay(300);
        assert(document.querySelector('.next-overlay-wrapper'));

        ReactTestUtils.Simulate.mouseLeave(btn);
        ReactTestUtils.Simulate.mouseEnter(document.querySelector('.content'));
        await delay(300);
        assert(document.querySelector('.next-overlay-wrapper'));

        ReactTestUtils.Simulate.mouseLeave(document.querySelector('.content'));
        await delay(600);
        assert(!document.querySelector('.next-overlay-wrapper'));
    });

    it('should support setting triggerType to click', async () => {
        wrapper = render(
            <Popup trigger={<button>Open</button>} triggerType="click">
                <span className="content">Hello World From Popup!</span>
            </Popup>
        );
        const btn = document.querySelector('button');

        ReactTestUtils.Simulate.click(btn);
        await delay(300);
        assert(document.querySelector('.next-overlay-wrapper'));

        ReactTestUtils.Simulate.click(btn);
        await delay(300);
        assert(!document.querySelector('.next-overlay-wrapper'));

        ReactTestUtils.Simulate.keyDown(btn, { keyCode: KEYCODE.SPACE });
        await delay(300);
        assert(document.querySelector('.next-overlay-wrapper'));

        ReactTestUtils.Simulate.keyDown(btn, { keyCode: KEYCODE.ENTER });
        await delay(300);
        assert(!document.querySelector('.next-overlay-wrapper'));
    });

    it('should support setting triggerType to focus', () => {
        return co(function* () {
            wrapper = render(
                <Popup trigger={<button>Open</button>} triggerType="focus">
                    <span className="content">Hello World From Popup!</span>
                </Popup>
            );
            const btn = document.querySelector('button');

            ReactTestUtils.Simulate.focus(btn);
            yield delay(300);
            assert(document.querySelector('.next-overlay-wrapper'));

            ReactTestUtils.Simulate.mouseDown(document.querySelector('.content'));
            ReactTestUtils.Simulate.blur(btn);
            yield delay(300);
            assert(document.querySelector('.next-overlay-wrapper'));

            ReactTestUtils.Simulate.blur(btn);
            yield delay(300);
            assert(!document.querySelector('.next-overlay-wrapper'));
        });
    });

    it('should support setting triggerType to click with custom triggerClickKeycode', () => {
        return co(function* () {
            wrapper = render(
                <Popup trigger={<button>Open</button>} triggerType="click" triggerClickKeycode={40}>
                    <span className="content">Hello World From Popup!</span>
                </Popup>
            );
            const btn = document.querySelector('button');

            ReactTestUtils.Simulate.click(btn);
            yield delay(300);
            assert(document.querySelector('.next-overlay-wrapper'));

            ReactTestUtils.Simulate.click(btn);
            yield delay(300);
            assert(!document.querySelector('.next-overlay-wrapper'));

            ReactTestUtils.Simulate.keyDown(btn, {
                keyCode: KEYCODE.DOWN_ARROW,
            });
            yield delay(300);
            assert(document.querySelector('.next-overlay-wrapper'));

            ReactTestUtils.Simulate.keyDown(btn, {
                keyCode: KEYCODE.DOWN_ARROW,
            });
            yield delay(300);
            assert(!document.querySelector('.next-overlay-wrapper'));

            ReactTestUtils.Simulate.keyDown(btn, { keyCode: KEYCODE.ENTER });
            yield delay(300);
            assert(!document.querySelector('.next-overlay-wrapper'));

            ReactTestUtils.Simulate.keyDown(btn, { keyCode: KEYCODE.SPACE });
            yield delay(300);
            assert(!document.querySelector('.next-overlay-wrapper'));
        });
    });

    it('should support setting canCloseByTrigger to false', () => {
        return co(function* () {
            wrapper = render(
                <Popup
                    trigger={<button>Open</button>}
                    triggerType="click"
                    canCloseByTrigger={false}
                >
                    <span className="content">Hello World From Popup!</span>
                </Popup>
            );
            const btn = document.querySelector('button');

            ReactTestUtils.Simulate.click(btn);
            yield delay(300);
            assert(document.querySelector('.next-overlay-wrapper'));

            ReactTestUtils.Simulate.click(btn);
            yield delay(300);
            assert(document.querySelector('.next-overlay-wrapper'));
        });
    });

    it('should support setting custom container', () => {
        return co(function* () {
            wrapper = render(
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

            const btn = document.querySelector('button');

            ReactTestUtils.Simulate.click(btn);
            yield delay(300);

            assert(
                document.querySelector('.next-overlay-wrapper').parentElement.id === 'myContainer'
            );

            ReactTestUtils.Simulate.click(btn);
            yield delay(300);
            assert(document.querySelector('.next-overlay-wrapper'));
        });
    });

    it('should support controling', () => {
        return co(function* () {
            wrapper = render(<PopupControlDemo />);
            const btn = document.querySelector('button');

            ReactTestUtils.Simulate.click(btn);
            yield delay(300);
            assert(document.querySelector('.next-overlay-wrapper'));

            ReactTestUtils.Simulate.click(btn);
            yield delay(300);
            assert(!document.querySelector('.next-overlay-wrapper'));
        });
    });

    it('should support render in shadow dom', () => {
        return co(function* () {
            const host = document.createElement('div');
            const shadowRoot = host.attachShadow({ mode: 'open' });
            document.body.appendChild(host);

            ReactDOM.render(
                <Popup trigger={<button>Open</button>} triggerType="click">
                    <span className="content">Hello World From Popup!</span>
                </Popup>,
                shadowRoot
            );

            yield delay(300);
            const btn = shadowRoot.querySelector('button');
            // NOTE: 此处不能使用 ReactTestUtils.Simulate.click(btn);
            btn.click();

            yield delay(300);
            assert(document.querySelector('.next-overlay-wrapper'));

            btn.click();
            yield delay(300);
            assert(!document.querySelector('.next-overlay-wrapper'));

            ReactDOM.unmountComponentAtNode(shadowRoot);
            document.body.removeChild(host);
        });
    });

    // https://riddle.alibaba-inc.com/riddles/b58b48a6
    it('should support container return a react component', () => {
        class App extends React.Component {
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
        const wrapper = render(<App />);
        wrapper.find('#balloon-button-container')[0].click();
        assert(document.querySelector('.next-balloon') !== null);
        assert(wrapper.find('#balloon-button-container .next-balloon'));
        wrapper.unmount();
    });

    // https://riddle.alibaba-inc.com/riddles/10f7eac1
    it('should base on BaseElement`offset event when BaseElement is fixed', () => {
        wrapper = render(
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
        const triggerEl = document.querySelector('.aem-feedback');
        ReactTestUtils.Simulate.click(triggerEl);

        const overlayInner = document.querySelector('.next-overlay-inner');
        assert(overlayInner.style.top !== '0px');
    });

    it('should configprovider work', () => {
        const container = document.createElement('div');

        function Demo() {
            return (
                <ConfigProvider popupContainer={() => document.getElementById('config-provider')}>
                    <div>
                        <div id="config-provider" />
                        <div id="self" />
                        <Popup visible>
                            <span id="test-popup">this is popup</span>
                        </Popup>
                        <Balloon visible popupContainer={() => document.getElementById('self')}>
                            <span id="test-balloon">this is balloon</span>
                        </Balloon>
                    </div>
                </ConfigProvider>
            );
        }
        wrapper = render(<Demo />, container);
        const popupDom = wrapper.find('#config-provider #test-popup')[0];
        const balloonDom = wrapper.find('#self #test-balloon')[0];

        assert(balloonDom);
        assert(popupDom);

        ReactDOM.unmountComponentAtNode(container);
    });

    // https://github.com/alibaba-fusion/next/issues/3233
    it('fix crash when Popup receives an empty node', () => {
        wrapper = render(
            <div>
                <Popup trigger={<Button className="btn">Open</Button>} triggerType="click" />
                <br />
            </div>
        );
        const buttonDom = wrapper.find('.btn');

        assert(buttonDom);
    });

    it('fix support show-hide in nested scroll component', async function () {
        wrapper = render(
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
        const popupButton = document.querySelector('button');
        ReactTestUtils.Simulate.click(popupButton);
        await delay(200);
        const rootContainerNode = document.querySelector('.root-container');
        assert(rootContainerNode);
        rootContainerNode.scrollTop = 300;
        await delay(200);
        assert(document.querySelector('.next-overlay-inner').style.display === 'none');
        rootContainerNode.scrollTop = 0;
        await delay(200);
        assert(document.querySelector('.next-overlay-inner').style.display !== 'none');

        const parentContainerNode = document.querySelector('.parent-container');
        assert(parentContainerNode);
        parentContainerNode.scrollTop = 200;
        await delay(200);
        assert(document.querySelector('.next-overlay-inner').style.display === 'none');
        parentContainerNode.scrollTop = 0;
        await delay(200);
        assert(document.querySelector('.next-overlay-inner').style.display !== 'none');
    });
});
