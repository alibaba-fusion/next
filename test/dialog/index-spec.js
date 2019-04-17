import React from 'react';
import ReactDOM from 'react-dom';
import assert from 'power-assert';
import ReactTestUtils from 'react-dom/test-utils';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { dom } from '../../src/util';
import Button from '../../src/button';
import ConfigProvider from '../../src/config-provider';
import Dialog from '../../src/dialog/index';
import Message from '../../src/message';
import '../../src/dialog/style.js';
import zhCN from '../../src/locale/zh-cn';
import { ModalInner as QuickInner } from '../../src/dialog/show';

Enzyme.configure({ adapter: new Adapter() });

/* eslint-disable react/jsx-filename-extension */
/* global describe it afterEach */
/* global describe it beforeEach */

const { hasClass, getStyle } = dom;
const render = element => {
    let inc;
    const container = document.createElement('div');
    document.body.appendChild(container);
    ReactDOM.render(element, container, function() {
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

class Demo extends React.Component {
    state = {
        visible: false,
    };

    onOpen = () => {
        this.setState({
            visible: true,
        });
    };

    onClose = () => {
        this.setState({
            visible: false,
        });
    };

    render() {
        return (
            <div>
                <Button onClick={this.onOpen} type="primary">
                    打开对话框
                </Button>
                <Dialog
                    title="欢迎来到 Alibaba.com"
                    visible={this.state.visible}
                    onOk={this.onClose}
                    onCancel={this.onClose}
                    onClose={this.onClose}
                    {...this.props}
                >
                    开启您的贸易生活从 Alibaba.com 开始
                </Dialog>
            </div>
        );
    }
}

describe('inner', () => {
    let wrapper;

    beforeEach(() => {
        ConfigProvider.initLocales({
            'zh-cn': zhCN,
        });
        ConfigProvider.setLanguage('zh-cn');
    });

    afterEach(() => {
        if (wrapper) {
            wrapper.unmount();
            wrapper = null;
        }
    });

    it('should show and hide', () => {
        wrapper = render(<Demo animation={false} />);
        const btn = document.querySelector('button');
        ReactTestUtils.Simulate.click(btn);
        assert(document.querySelector('.next-dialog'));

        ReactTestUtils.Simulate.click(btn);
        const okBtn = document.querySelector(
            '.next-btn-primary.next-dialog-btn'
        );
        ReactTestUtils.Simulate.click(okBtn);
        assert(!document.querySelector('.next-dialog'));

        ReactTestUtils.Simulate.click(btn);
        const cancelBtn = document.querySelector(
            '.next-btn-normal.next-dialog-btn'
        );
        ReactTestUtils.Simulate.click(cancelBtn);
        assert(!document.querySelector('.next-dialog'));

        ReactTestUtils.Simulate.click(btn);
        const closeLink = document.querySelector('.next-dialog-close');
        ReactTestUtils.Simulate.click(closeLink);
        assert(!document.querySelector('.next-dialog'));
    });

    it('should support footerAlign', () => {
        wrapper = render(<Dialog visible />);
        assert(
            hasClass(
                document.querySelector('.next-dialog-footer'),
                'next-align-right'
            )
        );

        wrapper.setProps({
            footerAlign: 'center',
        });
        assert(
            hasClass(
                document.querySelector('.next-dialog-footer'),
                'next-align-center'
            )
        );
        wrapper.setProps({
            footerAlign: 'left',
        });
        assert(
            hasClass(
                document.querySelector('.next-dialog-footer'),
                'next-align-left'
            )
        );
    });

    it('should support footerActions', () => {
        wrapper = render(<Dialog visible />);
        let btns = document.querySelectorAll('.next-dialog-btn');
        assert(btns.length === 2);
        assertOkBtn(btns[0]);
        assertCancelBtn(btns[1]);

        wrapper.setProps({
            footerActions: ['cancel', 'ok'],
        });
        btns = document.querySelectorAll('.next-dialog-btn');
        assert(btns.length === 2);
        assertCancelBtn(btns[0]);
        assertOkBtn(btns[1]);

        wrapper.setProps({
            footerActions: ['ok'],
        });
        btns = document.querySelectorAll('.next-dialog-btn');
        assert(btns.length === 1);
        assertOkBtn(btns[0]);

        wrapper.setProps({
            footerActions: ['cancel'],
        });
        btns = document.querySelectorAll('.next-dialog-btn');
        assert(btns.length === 1);
        assertCancelBtn(btns[0]);
    });

    it('should support custom footer', () => {
        wrapper = render(<Dialog visible footer={false} />);
        assert(!document.querySelector('.next-dialog-footer'));

        wrapper.setProps({
            footer: <a className="custom">Link</a>,
        });
        assert(
            document
                .querySelector('.next-dialog-footer a.custom')
                .textContent.trim() === 'Link'
        );
    });

    it("should use css to position dialog if set isFullScreen to true and align to 'cc cc'", () => {
        wrapper = render(<Dialog visible isFullScreen />);
        assert(document.querySelector('.next-dialog-container'));
    });

    it('should adjust position and size if not use css to position', () => {
        const viewportHeight =
            window.innerHeight || document.documentElement.clientHeight;
        const dialogHeight = viewportHeight - 40 + 20;
        wrapper = render(<Demo style={{ height: dialogHeight }} />);
        const btn = document.querySelector('button');
        ReactTestUtils.Simulate.click(btn);
        assert(getStyle(document.querySelector('.next-dialog'), 'top'), '40');
    });

    it('should hide close link if set closeable to false', () => {
        wrapper = render(<Dialog visible closeable={false} />);
        assert(!document.querySelector('.next-dialog-close'));
    });

    it('should support show', () => {
        let called = false;
        const { hide } = Dialog.show({
            title: 'Title',
            content: 'Content',
            animation: false,
            afterClose: () => {
                called = true;
            },
        });

        assert(document.querySelector('.next-dialog'));
        assert(
            document.querySelector('.next-dialog-header').textContent.trim() ===
                'Title'
        );
        assert(
            document.querySelector('.next-dialog-body').textContent.trim() ===
                'Content'
        );

        hide();
        assert(!document.querySelector('.next-dialog'));
        assert(called);
    });

    it('should support alert', () => {
        const { hide } = Dialog.alert({
            title: 'Title',
            content: 'Content',
            animation: false,
        });
        assert(
            hasClass(
                document.querySelector(
                    '.next-dialog-message.next-message.next-addon.next-large'
                ),
                'next-message-warning'
            )
        );
        assert(!document.querySelector('.next-dialog-header'));
        assert(
            document.querySelector('.next-message-title').textContent.trim() ===
                'Title'
        );
        assert(
            document
                .querySelector('.next-message-content')
                .textContent.trim() === 'Content'
        );
        const btns = document.querySelectorAll('.next-dialog-btn');
        assert(btns.length === 1);
        assertOkBtn(btns[0]);

        hide();
    });

    it('should support confirm', () => {
        const { hide } = Dialog.confirm({
            title: 'Title',
            content: 'Content',
            animation: false,
        });
        assert(
            hasClass(
                document.querySelector(
                    '.next-dialog-message.next-message.next-addon.next-large'
                ),
                'next-message-help'
            )
        );
        assert(!document.querySelector('.next-dialog-header'));
        assert(
            document.querySelector('.next-message-title').textContent.trim() ===
                'Title'
        );
        assert(
            document
                .querySelector('.next-message-content')
                .textContent.trim() === 'Content'
        );
        const btns = document.querySelectorAll('.next-dialog-btn');
        assert(btns.length === 2);
        assertOkBtn(btns[0]);
        assertCancelBtn(btns[1]);

        hide();
    });

    it('should close dialog if click the ok button', () => {
        Dialog.show({
            title: 'Title',
            content: 'Content',
            animation: false,
        });

        ReactTestUtils.Simulate.click(
            document.querySelector('.next-btn-primary')
        );
        assert(!document.querySelector('.next-dialog'));
    });

    it('should not close dialog if onOk return false', () => {
        const { hide } = Dialog.show({
            title: 'Title',
            content: 'Content',
            animation: false,
            onOk: () => false,
        });

        ReactTestUtils.Simulate.click(
            document.querySelector('.next-btn-primary')
        );
        assert(document.querySelector('.next-dialog'));

        hide();
    });

    it('should not close dialog immediately if onOk return promise and resolve true', done => {
        Dialog.show({
            title: 'Title',
            content: 'Content',
            animation: false,
            onOk: () => {
                return new Promise(resolve => {
                    setTimeout(resolve, 500);
                });
            },
        });

        ReactTestUtils.Simulate.click(
            document.querySelector('.next-btn-primary')
        );
        assert(document.querySelector('.next-dialog'));
        assert(
            hasClass(
                document.querySelector('.next-btn-primary'),
                'next-btn-loading'
            )
        );

        setTimeout(() => {
            assert(!document.querySelector('.next-dialog'));
            done();
        }, 1000);
    });

    it('should not close dialog if onOk return promise and resolve false', done => {
        const { hide } = Dialog.show({
            title: 'Title',
            content: 'Content',
            animation: false,
            onOk: () => {
                return new Promise(resolve => {
                    setTimeout(() => resolve(false), 500);
                });
            },
        });
        ReactTestUtils.Simulate.click(
            document.querySelector('.next-btn-primary')
        );

        setTimeout(() => {
            assert(document.querySelector('.next-dialog'));
            hide();
            done();
        }, 1000);
    });

    it('should not close dialog if onOk return promise and reject', done => {
        const { hide } = Dialog.show({
            title: 'Title',
            content: 'Content',
            animation: false,
            onOk: () => {
                return new Promise((resolve, reject) => {
                    setTimeout(reject, 500);
                });
            },
        });

        ReactTestUtils.Simulate.click(
            document.querySelector('.next-btn-primary')
        );

        setTimeout(() => {
            assert(
                !hasClass(
                    document.querySelector('.next-btn-primary'),
                    'next-btn-loading'
                )
            );
            assert(document.querySelector('.next-dialog'));
            hide();
            done();
        }, 1000);
    });

    it('should obey: self.locale > nearest ConfigProvider.locale > further ConfigProvider.locale', () => {
        wrapper = render(
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
                    <Demo locale={{ ok: 'my ok' }} animation={false} />
                </ConfigProvider>
            </ConfigProvider>
        );

        const btn = document.querySelector('button');
        ReactTestUtils.Simulate.click(btn);

        const footer = document.querySelector('.near-dialog-footer');
        const ok = footer.querySelectorAll('button')[0];
        const cancel = footer.querySelectorAll('button')[1];

        assert(footer);
        assert(ok.innerHTML === 'my ok');
        assert(cancel.innerHTML === 'near cancel');
    });

    it("quick-calling should use root context's state if its exists", () => {
        wrapper = render(
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
                    <Button
                        type="primary"
                        onClick={() => {
                            Dialog.show({
                                locale: {
                                    cancel: 'my cancel',
                                },
                                content: <Button type="primary">test</Button>,
                            });
                        }}
                    >
                        OK
                    </Button>
                </ConfigProvider>
            </ConfigProvider>
        );

        const btn = document.querySelector('button');
        ReactTestUtils.Simulate.click(btn);

        const footer = document.querySelector('.far-dialog-footer');
        const overlayWrapper = document.querySelector('.far-overlay-wrapper');
        const ok = footer.querySelectorAll('button')[0];
        const cancel = footer.querySelectorAll('button')[1];

        assert(footer);
        assert(overlayWrapper);
        assert(ok.innerHTML === 'far ok');
        assert(cancel.innerHTML === 'my cancel');

        cancel.click();
        document.body.removeChild(overlayWrapper);

        assert(!document.querySelector('.far-overlay-wrapper'));
    });

    it('should throw error (async)', () => {
        const { hide } = Dialog.show({
            title: 'Title',
            content: 'Content',
            onOk: async () => {
                throw Error();
            },
        });
        try {
            ReactTestUtils.Simulate.click(
                document.querySelector('.next-btn-primary')
            );
            assert(false);
        } catch (e) {
            assert(true);
        }
        hide();
    });

    it('should throw error', () => {
        const { hide } = Dialog.show({
            title: 'Title',
            content: 'Content',
            onOk: () => {
                throw Error();
            },
        });
        try {
            ReactTestUtils.Simulate.click(
                document.querySelector('.next-btn-primary')
            );
            assert(false);
        } catch (e) {
            assert(true);
        }
        hide();
    });
});

describe('Quick', () => {
    let wrapper;
    afterEach(() => {
        if (wrapper) {
            wrapper.unmount();
            wrapper = null;
        }
    });

    it('should support alert message', () => {
        wrapper = shallow(
            <QuickInner
                type="alert"
                title="quick confirm modal inner"
                locale={zhCN}
                content={<span>Modal Content</span>}
            />
        );

        const message = wrapper.find(Message);
        assert(message.prop('type') === 'warning');
    });

    it('should support confirm message', () => {
        wrapper = shallow(
            <QuickInner
                type="confirm"
                title="quick confirm modal inner"
                locale={zhCN}
                content={<span>Modal Content</span>}
            />
        );

        const message = wrapper.find(Message);
        assert(message.prop('type') === 'help');
    });

    it('should support message title', () => {
        wrapper = shallow(
            <QuickInner
                type="confirm"
                title="quick confirm modal inner"
                locale={zhCN}
                content={<span>Modal Content</span>}
            />
        );

        const message = wrapper.find(Message);
        assert(message.prop('title') === 'quick confirm modal inner');
    });

    it('should support default prefix', () => {
        wrapper = shallow(
            <QuickInner
                type="confirm"
                title="quick confirm modal inner"
                locale={zhCN}
                content={<span>Modal Content</span>}
            />
        );

        const message = wrapper.find(Message);
        assert(message.prop('className') === 'next-dialog-message');
    });

    it('should support messageProps', () => {
        wrapper = shallow(
            <QuickInner
                type="confirm"
                title="quick confirm modal inner"
                locale={zhCN}
                messageProps={{testProp: 'test'}}
                content={<span>Modal Content</span>}
            />
        );

        const message = wrapper.find(Message);
        assert(message.prop('testProp') === 'test');
    });

    it('should support custom prefix', () => {
        wrapper = shallow(
            <QuickInner
                type="confirm"
                title="quick confirm modal inner"
                prefix="test-"
                locale={zhCN}
                content={<span>Modal Content</span>}
            />
        );

        const message = wrapper.find(Message);
        assert(message.prop('className') === 'test-dialog-message');
    });

    it('should pass content as child', () => {
        wrapper = shallow(
            <QuickInner
                type="confirm"
                title="quick confirm modal inner"
                prefix="test-"
                locale={zhCN}
                content={<span>Modal Content</span>}
            />
        );

        const message = wrapper.find(Message);
        assert(message.children().type() === 'span');
    });

})

function assertOkBtn(btn) {
    assert(hasClass(btn, 'next-btn-primary'));
    assert(btn.textContent.trim() === '确认');
}

function assertCancelBtn(btn) {
    assert(hasClass(btn, 'next-btn-normal'));
    assert(btn.textContent.trim() === '取消');
}
