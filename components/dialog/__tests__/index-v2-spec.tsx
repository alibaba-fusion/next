import React from 'react';
import ReactDOM from 'react-dom';
import assert from 'power-assert';
import ReactTestUtils from 'react-dom/test-utils';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { dom } from '../../util';
import Button from '../../button';
import ConfigProvider from '../../config-provider';
import Dialog from '../index';
import '../style';
import zhCN from '../../locale/zh-cn';

Enzyme.configure({ adapter: new Adapter() });

/* eslint-disable react/jsx-filename-extension */
/* global describe it afterEach */
/* global describe it beforeEach */

const { hasClass, getStyle } = dom;
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

class Demo2 extends React.Component {
    state = {
        visible: false,
        content: '开启您的贸易生活从 Alibaba.com 开始',
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
                <style>
                    {`
                        .next-dialog-header {
                            height: 48px;
                        }
                    `}
                </style>
                <Dialog
                    v2
                    title="欢迎来到 Alibaba.com"
                    visible={this.state.visible}
                    onOk={this.onClose}
                    onCancel={this.onClose}
                    onClose={this.onClose}
                    {...this.props}
                >
                    {this.state.content}
                </Dialog>
            </div>
        );
    }
}

describe('v2', () => {
    let wrapper;
    const delay = time => new Promise(resolve => setTimeout(resolve, time));

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
        document.body.style = '';
    });

    it('should show and hide with no cache', async () => {
        wrapper = render(<Demo2 animation={false} />);
        const btn = document.querySelector('button');
        ReactTestUtils.Simulate.click(btn);
        await delay(40);
        assert(document.querySelector('.next-dialog'));

        const okBtn = document.querySelector('.next-btn-primary.next-dialog-btn');
        ReactTestUtils.Simulate.click(okBtn);
        await delay(40);
        // no cache should unmount
        assert(!document.querySelector('.next-dialog'));

        ReactTestUtils.Simulate.click(btn);
        await delay(40);
        const cancelBtn = document.querySelector('.next-btn-normal.next-dialog-btn');
        ReactTestUtils.Simulate.click(cancelBtn);
        await delay(40);
        assert(!document.querySelector('.next-dialog'));

        ReactTestUtils.Simulate.click(btn);
        await delay(40);
        const closeLink = document.querySelector('.next-dialog-close');
        ReactTestUtils.Simulate.click(closeLink);
        await delay(40);
        assert(!document.querySelector('.next-dialog'));
    });

    it('should support footerAlign', () => {
        wrapper = render(<Dialog v2 visible />);
        assert(hasClass(document.querySelector('.next-dialog-footer'), 'next-align-right'));

        wrapper.setProps({
            footerAlign: 'center',
        });
        assert(hasClass(document.querySelector('.next-dialog-footer'), 'next-align-center'));
        wrapper.setProps({
            footerAlign: 'left',
        });
        assert(hasClass(document.querySelector('.next-dialog-footer'), 'next-align-left'));
    });

    it('should support footerActions', () => {
        wrapper = render(<Dialog v2 visible />);
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
        wrapper = render(<Dialog v2 visible footer={false} />);
        assert(!document.querySelector('.next-dialog-footer'));

        wrapper.setProps({
            footer: (
                <a className="custom" href>
                    Link
                </a>
            ),
        });
        assert(
            document.querySelector('.next-dialog-footer a.custom').textContent.trim() === 'Link'
        );
    });

    it('should support typeof closeMode === string', () => {
        wrapper = render(<Dialog v2 visible closeMode="esc" />);
        assert(document.querySelector('.next-dialog'));
    });

    it('should support closeIcon', () => {
        wrapper = render(<Dialog v2 visible closeIcon={<span className="closeicon">x</span>} />);
        assert(document.querySelector('.closeicon').textContent.trim() === 'x');
    });

    it('should support custom footer button text', () => {
        wrapper = render(
            <Dialog
                v2
                visible
                okProps={{ className: 'custom-ok', children: 'my ok' }}
                cancelProps={{
                    className: 'custom-cancel',
                    children: 'my cancel',
                }}
            />
        );
        assert(document.querySelector('.custom-ok').textContent.trim() === 'my ok');

        assert(document.querySelector('.custom-cancel').textContent.trim() === 'my cancel');
    });

    it('should support show', async () => {
        let called = false;
        const { hide } = Dialog.show({
            v2: true,
            title: 'Title',
            content: 'Content',
            animation: false,
            afterClose: () => {
                called = true;
            },
        });

        await delay(20);
        assert(document.querySelector('.next-dialog'));
        assert(document.querySelector('.next-dialog-header').textContent.trim() === 'Title');
        assert(document.querySelector('.next-dialog-body').textContent.trim() === 'Content');

        hide();
        await delay(20);
        assert(!document.querySelector('.next-dialog'));
        assert(called);
    });

    it('should support alert', () => {
        const { hide } = Dialog.alert({
            v2: true,
            title: 'Title',
            content: 'Content',
            animation: false,
        });
        assert(
            hasClass(
                document.querySelector('.next-dialog-message.next-message.next-addon.next-large'),
                'next-message-warning'
            )
        );
        assert(!document.querySelector('.next-dialog-header'));
        assert(document.querySelector('.next-message-title').textContent.trim() === 'Title');
        assert(document.querySelector('.next-message-content').textContent.trim() === 'Content');
        const btns = document.querySelectorAll('.next-dialog-btn');
        assert(btns.length === 1);
        assertOkBtn(btns[0]);

        hide();
    });

    it('should support confirm', async () => {
        const { hide } = Dialog.confirm({
            v2: true,
            title: 'Title',
            content: 'Content',
            animation: false,
        });
        await delay(20);
        assert(
            hasClass(
                document.querySelector('.next-dialog-message.next-message.next-addon.next-large'),
                'next-message-help'
            )
        );
        assert(!document.querySelector('.next-dialog-header'));
        assert(document.querySelector('.next-message-title').textContent.trim() === 'Title');
        assert(document.querySelector('.next-message-content').textContent.trim() === 'Content');
        const btns = document.querySelectorAll('.next-dialog-btn');
        assert(btns.length === 2);
        assertOkBtn(btns[0]);
        assertCancelBtn(btns[1]);

        hide();
    });

    it('should support height', async () => {
        wrapper = render(<Dialog v2 visible />);
        await delay(20);
        assert(!document.querySelector('.next-dialog').style.height);

        assert(
            !hasClass(
                document.querySelector('.next-dialog-footer'),
                'next-dialog-footer-fixed-height'
            )
        );

        wrapper.setProps({
            height: '500px',
        });
        assert(document.querySelector('.next-dialog').style.height === '500px');
        assert(
            hasClass(
                document.querySelector('.next-dialog-footer'),
                'next-dialog-footer-fixed-height'
            )
        );
    });

    it('should support style.width compcat with v1', async () => {
        wrapper = render(<Dialog v2 visible style={{ width: 345 }} />);
        await delay(20);
        assert(document.querySelector('.next-dialog').style.width === '345px');
    });

    it('should close dialog if click the ok button', async () => {
        Dialog.show({
            v2: true,
            animation: false,
            title: 'Title',
            content: 'Content',
            animation: false,
        });

        await delay(20);
        ReactTestUtils.Simulate.click(document.querySelector('.next-btn-primary'));
        await delay(20);
        assert(!document.querySelector('.next-dialog'));
    });

    it('should not close dialog if onOk return false', async () => {
        const { hide } = Dialog.show({
            v2: true,
            title: 'Title',
            content: 'Content',
            animation: false,
            onOk: () => false,
        });

        await delay(20);

        ReactTestUtils.Simulate.click(document.querySelector('.next-btn-primary'));
        await delay(20);

        assert(document.querySelector('.next-dialog'));

        hide();
    });

    it('should not close dialog immediately if onOk return promise and resolve true', async () => {
        Dialog.show({
            v2: true,
            title: 'Title',
            content: 'Content',
            animation: false,
            onOk: () => {
                return new Promise(resolve => {
                    setTimeout(resolve, 100);
                });
            },
        });

        await delay(20);
        ReactTestUtils.Simulate.click(document.querySelector('.next-btn-primary'));
        await delay(20);

        assert(document.querySelector('.next-dialog'));
        assert(hasClass(document.querySelector('.next-btn-primary'), 'next-btn-loading'));

        await delay(100);
        assert(!document.querySelector('.next-dialog'));
    });

    it('should not close dialog if onOk return promise and resolve false', done => {
        const { hide } = Dialog.show({
            v2: true,
            title: 'Title',
            content: 'Content',
            animation: false,
            onOk: () => {
                return new Promise(resolve => {
                    setTimeout(() => resolve(false), 100);
                });
            },
        });
        ReactTestUtils.Simulate.click(document.querySelector('.next-btn-primary'));

        setTimeout(() => {
            assert(document.querySelector('.next-dialog'));
            hide();
            done();
        }, 200);
    });

    it('should work when set <ConfigProvider popupContainer/> ', async () => {
        wrapper = render(
            <ConfigProvider popupContainer={'dialog-popupcontainer'}>
                <div id="dialog-popupcontainer" style={{ height: 300, overflow: 'auto' }}>
                    <Dialog v2 title="Welcome to Alibaba.com" visible>
                        Start your business here by searching a popular product
                    </Dialog>
                </div>
            </ConfigProvider>
        );

        await delay(20);
        const overlay = document.querySelector('#dialog-popupcontainer > .next-overlay-wrapper');
        assert(overlay);
    });

    it('should not close dialog if onOk return promise and reject', done => {
        const { hide } = Dialog.show({
            v2: true,
            title: 'Title',
            content: 'Content',
            animation: false,
            onOk: () => {
                return new Promise((resolve, reject) => {
                    setTimeout(reject, 100);
                });
            },
        });

        ReactTestUtils.Simulate.click(document.querySelector('.next-btn-primary'));

        setTimeout(() => {
            assert(!hasClass(document.querySelector('.next-btn-primary'), 'next-btn-loading'));
            assert(document.querySelector('.next-dialog'));
            hide();
            done();
        }, 200);
    });

    it('should obey: self.locale > nearest ConfigProvider.locale > further ConfigProvider.locale', async () => {
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
                    <Demo2 locale={{ ok: 'my ok' }} animation={false} />
                </ConfigProvider>
            </ConfigProvider>
        );

        await delay(20);
        const btn = document.querySelector('button');
        ReactTestUtils.Simulate.click(btn);

        await delay(20);
        const footer = document.querySelector('.near-dialog-footer');
        const ok = footer.querySelectorAll('button')[0];
        const cancel = footer.querySelectorAll('button')[1];

        assert(footer);
        assert(ok.textContent === 'my ok');
        assert(cancel.textContent === 'near cancel');
    });

    it("quick-calling should use root context's state if its exists", async () => {
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
                                v2: true,
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
        assert(ok.textContent === 'far ok');
        assert(cancel.textContent === 'my cancel');

        cancel.click();
        await delay(800);

        assert(!document.querySelector('.far-overlay-wrapper'));
    });

    it('quick-calling should should support set prefix for dialog', () => {
        const { hide } = Dialog.show({
            v2: true,
            prefix: 'test-',
            title: 'Title',
            content: 'Content',
        });

        assert(hasClass(document.querySelector('.test-dialog'), 'test-closeable'));

        hide();
    });

    it('should throw error (async)', () => {
        const { hide } = Dialog.show({
            v2: true,
            title: 'Title',
            content: 'Content',
            onOk: async () => {
                throw Error();
            },
        });
        try {
            ReactTestUtils.Simulate.click(document.querySelector('.next-btn-primary'));
            assert(false);
        } catch (e) {
            assert(true);
        }
        hide();
    });

    it('should throw error', () => {
        const { hide } = Dialog.show({
            v2: true,
            title: 'Title',
            content: 'Content',
            onOk: () => {
                throw Error();
            },
        });
        try {
            ReactTestUtils.Simulate.click(document.querySelector('.next-btn-primary'));
            assert(false);
        } catch (e) {
            assert(true);
        }
        hide();
    });

    it('should support okProps={loading:true} ', () => {
        const { hide } = Dialog.show({
            v2: true,
            title: 'Title',
            content: 'Content',
            okProps: {
                loading: true,
            },
        });

        assert(document.querySelector('.next-btn-loading'));
        hide();
    });
    it('should support hasMask={false}', async () => {
        const overlays = document.querySelectorAll('.next-overlay-wrapper');
        overlays.forEach(o => {
            try {
                o.parentElement.removeChild(o);
            } catch (e) {}
        });

        const { hide } = Dialog.show({
            v2: true,
            hasMask: false,
            title: 'Title',
            content: 'Content',
        });

        await delay(40);
        assert(!document.querySelector('.next-overlay-backdrop'));
        hide();

        wrapper = render(<Demo2 animation={false} hasMask={false} />);
        const btn = document.querySelector('button');
        ReactTestUtils.Simulate.click(btn);
        await delay(40);
        assert(!document.querySelector('.next-overlay-backdrop'));
    });
    // 测试环境隔离问题一直搞不定，先注释
    // it('should rollback document.body.style in order', async () => {
    //     document.body.setAttribute('style', '');
    //     const config = {
    //         v2: true,
    //         animation: false,
    //         title: 'First',
    //         content: 'content content content...',
    //         onOk: () => {
    //             Dialog.success({
    //                 v2: true,
    //                 animation: false,
    //                 title: 'Second',
    //                 content: 'content content content...'
    //             });
    //         },
    //     };

    //     Dialog.success(config);

    //     await delay(40);
    //     assert(document.body.getAttribute('style').match('overflow: hidden'));

    //     assert(document.querySelectorAll('.next-btn-primary').length == 1);
    //     ReactTestUtils.Simulate.click(document.querySelector('.next-btn-primary'));
    //     await delay(40);
    //     assert(document.body.getAttribute('style').match('overflow: hidden'));
    //     assert(document.querySelectorAll('.next-btn-primary').length === 1);

    //     ReactTestUtils.Simulate.click(document.querySelector('.next-btn-primary'));
    //     await delay(40);
    //     assert(document.body.getAttribute('style') === '');
    // });
});

function assertOkBtn(btn) {
    assert(hasClass(btn, 'next-btn-primary'));
    assert(btn.textContent.trim() === '确定');
}

function assertCancelBtn(btn) {
    assert(hasClass(btn, 'next-btn-normal'));
    assert(btn.textContent.trim() === '取消');
}
