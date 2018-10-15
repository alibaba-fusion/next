import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import assert from 'power-assert';
import Icon from '../../src/icon';
import Button from '../../src/button';
import ConfigProvider from '../../src/config-provider';
import { env } from '../../src/util';
import Message from '../../src/message/index';
import '../../src/message/style.js';

/* eslint-disable react/jsx-filename-extension */
/* global describe it afterEach */

Enzyme.configure({ adapter: new Adapter() });

const TYPE_MAPS = {
    success: 'success',
    warning: 'warning',
    error: 'error',
    notice: 'prompt',
    help: 'help',
    loading: 'loading'
};

const render = element => {
    let inc;
    const container = document.createElement('div');
    document.body.appendChild(container);
    ReactDOM.render(element, container, function () {
        inc = this;
    });
    return {
        setProps: props => {
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
        }
    };
};

describe('Message', () => {
    it('should receive className prop', () => {
        const wrapper = mount(<Message className="custom" />);
        assert(wrapper.find('.next-message.custom').length === 1);
        wrapper.unmount();
    });

    it('should receive style prop', () => {
        const wrapper = mount(<Message style={{ color: 'red' }} />);
        assert(wrapper.prop('style').color === 'red');
        wrapper.unmount();
    });

    it('should have type class', () => {
        const types = ['success', 'warning', 'error', 'notice', 'help', 'loading'];
        types.forEach(type => {
            const wrapper = mount(<Message type={type} />);
            assert(wrapper.find(`.next-message.next-message-${type}`).length === 1);
            assert(wrapper.find(Icon).prop('type') === TYPE_MAPS[type]);
            wrapper.unmount();
        });
    });

    it('should have shape class', () => {
        const shapes = ['inline', 'addon', 'toast'];
        shapes.forEach(shape => {
            const wrapper = mount(<Message shape={shape} />);
            assert(wrapper.find(`.next-message.next-${shape}`).length === 1);
            wrapper.unmount();
        });
    });

    it('should have size class', () => {
        const sizes = ['medium', 'large'];
        sizes.forEach(size => {
            const wrapper = mount(<Message size={size} />);
            assert(wrapper.find(`.next-message.next-${size}`).length === 1);
            wrapper.unmount();
        });
    });

    it('should show title if you pass it', () => {
        const wrapper = mount(<Message title="title" />);
        assert(wrapper.find('.next-message-title').text() === 'title');
        wrapper.unmount();
    });

    it('should show content if you pass it', () => {
        const wrapper = mount(<Message>content</Message>);
        assert(wrapper.find('.next-message-content').text() === 'content');
        wrapper.unmount();
    });

    it('should custom icon type', () => {
        const wrapper = mount(<Message iconType="smile" />);
        assert(wrapper.find(Icon).prop('type') === 'smile');
        wrapper.unmount();
    });

    it('should show close link if set closeable to true', done => {
        const wrapper = mount(<Message animation={false} title="title" closeable />);
        const closeLink = wrapper.find('.next-message-close');
        assert(closeLink.length === 1);
        closeLink.simulate('click');
        setTimeout(() => {
            assert(wrapper.find('.next-message').length === 0);
            wrapper.unmount();
            done();
        }, 500);
    });

    it('should show or hide under control', () => {
        const wrapper = mount(<Message defaultVisible visible={false} animation={false} title="title" />);
        assert(wrapper.find('.next-message').length === 0);
        wrapper.setProps({
            visible: true
        });
        assert(wrapper.find('.next-message').length === 1);
        wrapper.unmount();
    });
});

describe('toast', done => {
    it('should render message when only pass content string', () => {
        Message.show('content');
        assert(document.querySelector('.next-overlay-wrapper .next-message').innerText.trim() === 'content');

        setTimeout(() => {
            Message.hide();
        }, 500);

        setTimeout(done, 1000);
    });

    it('should render message when only pass content react element', () => {
        Message.show(<i>content</i>);
        assert(document.querySelector('.next-overlay-wrapper .next-message-title i').innerText.trim() === 'content');

        setTimeout(() => {
            Message.hide();
        }, 500);

        setTimeout(done, 1000);
    });

    it('should render message when pass config object', () => {
        Message.show({
            type: 'warning',
            content: 'content'
        });
        assert(document.querySelector('.next-overlay-wrapper .next-message.next-message-warning').innerText.trim() === 'content');

        setTimeout(() => {
            Message.hide();
        }, 500);

        setTimeout(done, 1000);
    });

    it('should close message after duration and call afterClose method', done => {
        let called = false;

        Message.show({
            content: 'content',
            duration: 100,
            afterClose: () => {
                called = true;
            }
        });
        setTimeout(() => {
            assert(document.querySelector('.next-overlay-wrapper .next-message') === null);
            assert(called);
            done();
        }, 1000);
    });

    it('should show message all the time when set duration to 0', done => {
        Message.show({
            content: 'content',
            duration: 0
        });

        setTimeout(() => {
            assert(document.querySelector('.next-overlay-wrapper .next-message.next-message') !== null);
            Message.hide();
        }, 500);

        setTimeout(done, 1000);
    });

    it('should hide message when call hide method', done => {
        let called = false;

        Message.show({
            content: 'content',
            duration: 100,
            afterClose: () => {
                called = true;
            }
        });

        setTimeout(() => {
            Message.hide();
        }, 500);

        setTimeout(() => {
            assert(document.querySelector('.next-overlay-wrapper .next-message') === null);
            assert(called);
            done();
        }, 1000);
    });

    it('should hide message when click this close link', done => {
        // it will trigger page reload when click `<a />` in ie9 or ie10 of karma web driver, even if its href has been set to `javascript:;`
        // and then it will case test failed, so skip this case.
        if (env.ieVersion === 9 || env.ieVersion === 10) {
            return done();
        }

        Message.show({
            content: 'content',
            duration: 0,
            closeable: true
        });

        setTimeout(() => {
            const closeLink = document.querySelector('.next-message-close');
            closeLink.click();
        }, 500);

        setTimeout(() => {
            assert(document.querySelector('.next-overlay-wrapper .next-message') === null);
            done();
        }, 1000);
    });
});

describe('toast quick', () => {
    it('should render type message', () => {
        const methods = ['success', 'warning', 'error', 'notice', 'help', 'loading'];
        methods.forEach(method => {
            Message[method](method);
            const nodes = document.querySelectorAll(`.next-overlay-wrapper .next-message.next-message-${method}`);
            assert(nodes[nodes.length - 1].innerText.trim() === method);
        });
    });
});

describe('should support configProvider', () => {

    let wrapper;

    afterEach(() => {
        if (wrapper) {
            wrapper.unmount();
            wrapper = null;
        }
    });

    it('normal should obey: self.locale > nearest ConfigProvider.locale > further ConfigProvider.locale', () => {
        const methods = ['success', 'warning', 'error', 'notice', 'help', 'loading'];
        wrapper = render(
                <ConfigProvider prefix="far-" locale={{
                    momentLocale: 'en',
                    Dialog: {
                        ok: 'far ok',
                        cancel: 'far cancel'
                    }
                }}>
                    <ConfigProvider prefix="near-" locale={{
                        momentLocale: 'en',
                        Dialog: {
                            ok: 'near ok',
                            cancel: 'near cancel'
                        }
                    }}>
                        <div>
                            {methods.map(method => (
                                <Message key={method} title="title" type={method} shape="inline">
                                    <Button type="primary">button-{method}</Button>
                                </Message>
                            ))}
                        </div>
                    </ConfigProvider>
                </ConfigProvider>
            );
        const innerBtn = document.querySelectorAll('.near-message .near-message-content .near-btn-primary');
        assert(innerBtn.length === methods.length);
    });

    it('quick should obey: self.locale > nearest ConfigProvider.locale > further ConfigProvider.locale', () => {
        const methods = ['success', 'warning', 'error', 'notice', 'help', 'loading'];
        methods.forEach(method => {
            wrapper = render(
                <ConfigProvider prefix="far-" locale={{
                    momentLocale: 'en',
                    Dialog: {
                        ok: 'far ok',
                        cancel: 'far cancel'
                    }
                }}>
                    <ConfigProvider prefix="near-" locale={{
                        momentLocale: 'en',
                        Dialog: {
                            ok: 'near ok',
                            cancel: 'near cancel'
                        }
                    }}>
                        <Button
                            type="primary"
                            onClick={() => {
                                Message[method]({
                                    type: method,
                                    title: method,
                                    animation: false,
                                    content: <Button type="primary">请联系相关人员反馈！</Button>,
                                    hasMask: true
                                });
                            }}>
                            OK
                        </Button>
                    </ConfigProvider>
                </ConfigProvider>
            );

            const btn = document.querySelector('button');
            ReactTestUtils.Simulate.click(btn);
            const overlayWrapper = document.querySelector('.near-overlay-wrapper');
            const icon = document.querySelector('.near-icon.near-message-symbol');
            const innerBtn = document.querySelector('.near-message-content .near-btn-primary');

            assert(overlayWrapper);
            assert(icon);
            assert(innerBtn);

            wrapper.unmount();
            wrapper = null;
        });

        const lastOverlayWrapper = document.querySelector('.near-overlay-wrapper');
        document.body.removeChild(lastOverlayWrapper);
        assert(!document.querySelector('.near-overlay-wrapper'));
    });
});
