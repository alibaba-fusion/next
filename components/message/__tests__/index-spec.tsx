import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import assert from 'power-assert';
import Icon from '../../icon';
import Button from '../../button';
import ConfigProvider from '../../config-provider';
import { env } from '../../util';
import Message from '../index';
import '../style';

/* eslint-disable react/jsx-filename-extension */
/* global describe it afterEach */
Enzyme.configure({ adapter: new Adapter() });

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
        },
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
            assert(wrapper.find(Icon).hasClass('next-message-symbol-icon'));
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

    it('should not show icon if set iconType to false', () => {
        const wrapper = mount(<Message iconType={false} />);
        assert(wrapper.find(Icon).length === 0);
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
        const wrapper = mount(
            <Message defaultVisible visible={false} animation={false} title="title" />
        );
        assert(wrapper.find('.next-message').length === 0);
        wrapper.setProps({
            visible: true,
        });
        assert(wrapper.find('.next-message').length === 1);
        wrapper.unmount();
    });
});
describe('toast', done => {
    it('should render nowrap message when content too long[Overlay case]', done => {
        const content =
            'content content content content content content content content content content content content content content content content content content content content';
        Message.show(content);

        const dom = document.querySelector('.next-overlay-wrapper .next-message');

        assert(dom.innerText.trim() === content);
        assert(dom.offsetWidth > 200);

        Message.hide();

        setTimeout(done, 500);
    });

    it('should render message when only pass content string', done => {
        Message.show('content');
        assert(
            document.querySelector('.next-overlay-wrapper .next-message').innerText.trim() ===
                'content'
        );

        Message.hide();
        setTimeout(done, 500);
    });

    it('should render message when only pass content react element', done => {
        Message.show(<i>content</i>);
        assert(
            document
                .querySelector('.next-overlay-wrapper .next-message-title i')
                .innerText.trim() === 'content'
        );

        Message.hide();

        setTimeout(done, 500);
    });

    it('should render message when pass config object', done => {
        Message.show({
            type: 'warning',
            content: 'content',
        });
        assert(
            document
                .querySelector('.next-overlay-wrapper .next-message.next-message-warning')
                .innerText.trim() === 'content'
        );

        Message.hide();
        setTimeout(done, 500);
    });

    it('should close message after duration and call afterClose method', done => {
        let called = false;

        Message.show({
            content: 'content',
            duration: 100,
            afterClose: () => {
                called = true;
            },
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
            duration: 0,
        });

        setTimeout(() => {
            assert(
                document.querySelector('.next-overlay-wrapper .next-message.next-message') !== null
            );
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
            },
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
            closeable: true,
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

describe('should support configProvider', () => {
    it('normal should obey: self.locale > nearest ConfigProvider.locale > further ConfigProvider.locale', () => {
        const methods = ['success', 'warning', 'error', 'notice', 'help', 'loading'];
        const wrapper = render(
            <ConfigProvider
                prefix="far-"
                locale={{
                    momentLocale: 'en',
                    Dialog: {
                        ok: 'far ok',
                        cancel: 'far cancel',
                    },
                }}
            >
                <ConfigProvider
                    prefix="near-"
                    locale={{
                        momentLocale: 'en',
                        Dialog: {
                            ok: 'near ok',
                            cancel: 'near cancel',
                        },
                    }}
                >
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
        const innerBtn = document.querySelectorAll(
            '.near-message .near-message-content .near-btn-primary'
        );
        assert(innerBtn.length === methods.length);
        wrapper.unmount();
    });

    // it('quick-calling should use root context\'s state if its exists', () => {

    //     ConfigProvider.initLocales({
    //         'zh-cn': zhCN
    //     });
    //     ConfigProvider.setLanguage('zh-cn');

    //     const methods = ['success', 'warning', 'error', 'notice', 'help', 'loading'];
    //     methods.forEach(method => {
    //         const wrapper = render(
    //             <ConfigProvider prefix="far-" locale={{
    //                 momentLocale: 'en',
    //                 Dialog: {
    //                     ok: 'far ok',
    //                     cancel: 'far cancel'
    //                 }
    //             }}>
    //                 <ConfigProvider prefix="near-" locale={{
    //                     momentLocale: 'en',
    //                     Dialog: {
    //                         ok: 'near ok',
    //                         cancel: 'near cancel'
    //                     }
    //                 }}>
    //                     <Button
    //                         type="primary"
    //                         onClick={() => {
    //                             Message[method]({
    //                                 type: method,
    //                                 title: method,
    //                                 animation: false,
    //                                 content: <Button type="primary">请联系相关人员反馈！</Button>,
    //                                 hasMask: true
    //                             });
    //                         }}>
    //                         OK
    //                     </Button>
    //                 </ConfigProvider>
    //             </ConfigProvider>
    //         );

    //         const btn = document.querySelector('button');
    //         ReactTestUtils.Simulate.click(btn);
    //         const icon = document.querySelector('.far-icon.far-message-symbol');
    //         const innerBtn = document.querySelector('.far-message-content .far-btn-primary');

    //         assert(icon);
    //         assert(innerBtn);

    //         wrapper.unmount();
    //     });
    // });
});

describe('toast quick-calling', () => {
    const avaliableMethods = ['success', 'warning', 'error', 'notice', 'help', 'loading'];

    for (const method of avaliableMethods) {
        it(`render ${method}`, done => {
            Message.show('content');
            assert(
                document.querySelector('.next-overlay-wrapper .next-message').innerText.trim() ===
                    'content'
            );
            setTimeout(() => {
                Message.hide();
                done();
            }, 500);
        });
    }
});
describe('Message v2', () => {
    it('should support config to open multiple instance', done => {
        Message.config({});
        const instance1 = Message.show('content');
        const instance2 = Message.success('content');
        assert(document.querySelectorAll('.next-message-wrapper-v2 .next-message').length === 2);
        Message.destory();
        setTimeout(done, 500);
    });
});
