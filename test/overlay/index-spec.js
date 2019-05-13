import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import simulateEvent from 'simulate-event';
import co from 'co';
import assert from 'power-assert';
import { dom, KEYCODE, env } from '../../src/util';
import Overlay from '../../src/overlay/index';
import '../../src/overlay/style.js';

/* eslint-disable react/jsx-filename-extension, react/no-multi-comp */
/* global describe it afterEach */
/* global describe it beforeEach */

const { hasClass } = dom;
const { Popup } = Overlay;
const delay = time => new Promise(resolve => setTimeout(resolve, time));
const scrollbarWidth = dom.scrollbar().width;
const hasScroll = () => {
    const doc = document.documentElement;
    return doc.scrollHeight > doc.clientHeight && scrollbarWidth > 0;
};

const render = element => {
    let inc;
    const container = document.createElement('div');
    container.className = 'container';
    document.body.appendChild(container);
    ReactDOM.render(element, container, function() {
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
            <div>
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
                    {children || (
                        <span className="overlay-demo">
                            Hello World From Overlay!
                        </span>
                    )}
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

describe('Overlay', () => {
    let wrapper;

    beforeEach(() => {
        const nodeListArr = [].slice.call(
            document.querySelectorAll('.next-overlay-wrapper')
        );

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

    it('should support rendering overlay and mask', () => {
        return co(function*() {
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
        assert(
            hasClass(document.querySelector('.next-overlay-inner'), 'content')
        );
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
            <Overlay
                visible
                canCloseByOutSideClick={false}
                onRequestClose={handleClose}
            >
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

        simulateEvent.simulate(
            document.querySelector('.next-overlay-backdrop'),
            'click'
        );
        assert(!called);

        wrapper.setProps({
            canCloseByMask: true,
        });

        simulateEvent.simulate(
            document.querySelector('.next-overlay-backdrop'),
            'click'
        );
        assert(called);
    });

    it('should support safeNode', () => {
        return co(function*() {
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
        return co(function*() {
            wrapper = render(<OverlayControlDemo disableScroll />);
            const btn = document.querySelector('button');

            simulateEvent.simulate(btn, 'click');
            assert(document.body.style.overflowY === 'hidden');
            if (hasScroll()) {
                assert(
                    document.body.style.paddingRight === `${scrollbarWidth}px`
                );
            }

            simulateEvent.simulate(btn, 'click');
            yield delay(500);
            assert(!document.body.style.overflowY);
            if (hasScroll()) {
                assert(!document.body.style.paddingRight);
            }
        });
    });

    it('should support autoFocus', () => {
        return co(function*() {
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
            yield delay(500);
            assert(document.activeElement === document.querySelector('#inner'));

            simulateEvent.simulate(btn, 'click');
            yield delay(500);
            // ie9/ie10 document.activeElement === document.body
            if (env.ieVersion > 10) {
                assert(
                    document.activeElement === document.querySelector('#outer')
                );
            }

            document.body.removeChild(outerInput);
        });
    });

    it('should not destory overlay node if set cache to true', () => {
        return co(function*() {
            wrapper = render(
                <OverlayControlDemo
                    cache
                    wrapperClassName="overlay-cache-test"
                />
            );
            const btn = document.querySelector('button');

            simulateEvent.simulate(btn, 'click');
            yield delay(500);

            simulateEvent.simulate(btn, 'click');
            yield delay(500);

            assert(
                document.querySelector(
                    '.overlay-cache-test.next-overlay-wrapper'
                ).style.display === 'none'
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
        return co(function*() {
            wrapper = render(
                <Popup
                    defaultVisible
                    trigger={<button>Open</button>}
                    triggerType="click"
                >
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

    it('should support triggerType', () => {
        return co(function*() {
            wrapper = render(
                <Popup trigger={<button>Open</button>}>
                    <span className="content">Hello World From Popup!</span>
                </Popup>
            );
            const btn = document.querySelector('button');

            ReactTestUtils.Simulate.mouseEnter(btn);
            yield delay(300);
            assert(document.querySelector('.next-overlay-wrapper'));

            ReactTestUtils.Simulate.mouseLeave(btn);
            ReactTestUtils.Simulate.mouseEnter(
                document.querySelector('.content')
            );
            yield delay(300);
            assert(document.querySelector('.next-overlay-wrapper'));

            ReactTestUtils.Simulate.mouseLeave(
                document.querySelector('.content')
            );
            yield delay(500);
            assert(!document.querySelector('.next-overlay-wrapper'));
        });
    });

    it('should support setting triggerType to click', () => {
        return co(function*() {
            wrapper = render(
                <Popup trigger={<button>Open</button>} triggerType="click">
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

            ReactTestUtils.Simulate.keyDown(btn, { keyCode: KEYCODE.SPACE });
            yield delay(300);
            assert(document.querySelector('.next-overlay-wrapper'));

            ReactTestUtils.Simulate.keyDown(btn, { keyCode: KEYCODE.ENTER });
            yield delay(300);
            assert(!document.querySelector('.next-overlay-wrapper'));
        });
    });

    it('should support setting triggerType to focus', () => {
        return co(function*() {
            wrapper = render(
                <Popup trigger={<button>Open</button>} triggerType="focus">
                    <span className="content">Hello World From Popup!</span>
                </Popup>
            );
            const btn = document.querySelector('button');

            ReactTestUtils.Simulate.focus(btn);
            yield delay(300);
            assert(document.querySelector('.next-overlay-wrapper'));

            ReactTestUtils.Simulate.mouseDown(
                document.querySelector('.content')
            );
            ReactTestUtils.Simulate.blur(btn);
            yield delay(300);
            assert(document.querySelector('.next-overlay-wrapper'));

            ReactTestUtils.Simulate.blur(btn);
            yield delay(300);
            assert(!document.querySelector('.next-overlay-wrapper'));
        });
    });

    it('should support setting triggerType to click with custom triggerClickKeycode', () => {
        return co(function*() {
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

            ReactTestUtils.Simulate.keyDown(btn, { keyCode: KEYCODE.DOWN_ARROW });
            yield delay(300);
            assert(document.querySelector('.next-overlay-wrapper'));

            ReactTestUtils.Simulate.keyDown(btn, { keyCode: KEYCODE.DOWN_ARROW });
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
        return co(function*() {
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

    it('should support controling', () => {
        return co(function*() {
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
});
