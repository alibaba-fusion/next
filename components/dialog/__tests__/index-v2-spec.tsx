import React, { type ReactElement, cloneElement } from 'react';
import { type MountReturn } from 'cypress/react';
import Button from '../../button';
import ConfigProvider from '../../config-provider';
import Dialog, { type Config, type DialogProps } from '../index';
import '../style';
import zhCN from '../../locale/zh-cn';

function shouldOkBtn(btn: Cypress.Chainable<JQuery<HTMLElement>>) {
    btn.should('have.class', 'next-btn-primary');
    btn.should('have.text', '确定');
}

function shouldCancelBtn(btn: Cypress.Chainable<JQuery<HTMLElement>>) {
    btn.should('have.class', 'next-btn-normal');
    btn.should('have.text', '取消');
}

class Demo2 extends React.Component<DialogProps> {
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
    beforeEach(() => {
        ConfigProvider.initLocales({
            'zh-cn': zhCN,
        });
        ConfigProvider.setLanguage('zh-cn');
    });

    it('should show and hide with no cache', () => {
        cy.mount(<Demo2 animation={false} />);
        cy.get('button').eq(0).as('triggerButton').click();
        cy.get('.next-dialog').should('exist');

        cy.get('.next-btn-primary.next-dialog-btn').click();
        cy.get('.next-dialog').should('not.be.visible');

        cy.get('@triggerButton').click();
        cy.get('.next-btn-normal.next-dialog-btn').click();
        cy.get('.next-dialog').should('not.be.visible');

        cy.get('@triggerButton').click();
        cy.get('.next-dialog-close').click();
        cy.get('.next-dialog').should('not.be.visible');
    });

    it('should support footerAlign', () => {
        cy.mount(<Dialog v2 visible />).as('Demo');
        cy.get('.next-dialog-footer').should('have.class', 'next-align-right');
        cy.get<MountReturn>('@Demo').then(({ component, rerender }) => {
            rerender(cloneElement(component as ReactElement, { footerAlign: 'center' }));
        });
        cy.get('.next-dialog-footer').should('have.class', 'next-align-center');
        cy.get<MountReturn>('@Demo').then(({ component, rerender }) => {
            rerender(cloneElement(component as ReactElement, { footerAlign: 'left' }));
        });
        cy.get('.next-dialog-footer').should('have.class', 'next-align-left');
    });

    it('should support footerActions', () => {
        cy.mount(<Dialog v2 visible />).as('Demo');
        cy.get('.next-dialog-btn').should('have.length', 2);
        shouldOkBtn(cy.get('.next-dialog-btn').eq(0));
        shouldCancelBtn(cy.get('.next-dialog-btn').eq(1));

        cy.get<MountReturn>('@Demo').then(({ component, rerender }) => {
            rerender(cloneElement(component as ReactElement, { footerActions: ['cancel', 'ok'] }));
        });
        cy.get('.next-dialog-btn').should('have.length', 2);
        shouldCancelBtn(cy.get('.next-dialog-btn').eq(0));
        shouldOkBtn(cy.get('.next-dialog-btn').eq(1));

        cy.get<MountReturn>('@Demo').then(({ component, rerender }) => {
            rerender(cloneElement(component as ReactElement, { footerActions: ['ok'] }));
        });
        cy.get('.next-dialog-btn').should('have.length', 1);
        shouldOkBtn(cy.get('.next-dialog-btn').eq(0));

        cy.get<MountReturn>('@Demo').then(({ component, rerender }) => {
            rerender(cloneElement(component as ReactElement, { footerActions: ['cancel'] }));
        });
        cy.get('.next-dialog-btn').should('have.length', 1);
        shouldCancelBtn(cy.get('.next-dialog-btn').eq(0));
    });

    it('should support custom footer', () => {
        cy.mount(<Dialog v2 visible footer={false} />).as('Demo');
        cy.get('.next-dialog-footer').should('not.exist');

        cy.get<MountReturn>('@Demo').then(({ component, rerender }) => {
            rerender(
                cloneElement(component as ReactElement, {
                    footer: <a className="custom">Link</a>,
                })
            );
        });

        cy.get('.next-dialog-footer a.custom').should('have.text', 'Link');
    });

    it('should support typeof closeMode === string', () => {
        cy.mount(<Dialog v2 visible closeMode="esc" />);
        cy.get('.next-dialog').should('exist');
    });

    it('should support closeIcon', () => {
        cy.mount(<Dialog v2 visible closeIcon={<span className="closeicon">x</span>} />);
        cy.get('.closeicon').should('have.text', 'x');
    });

    it('should support custom footer button text', () => {
        cy.mount(
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
        cy.get('.custom-ok').should('have.text', 'my ok');
        cy.get('.custom-cancel').should('have.text', 'my cancel');
    });

    it('should support show', () => {
        const handleClose = cy.spy().as('handleClose');
        const { hide } = Dialog.show({
            v2: true,
            title: 'Title',
            content: 'Content',
            animation: false,
            afterClose: handleClose,
        });

        cy.get('.next-dialog').should('exist');
        cy.get('.next-dialog-header').should('have.text', 'Title');
        cy.get('.next-dialog-body').should('have.text', 'Content');

        cy.then(() => {
            hide();
        });

        cy.get('.next-dialog').should('not.exist');

        cy.get('@handleClose').should('be.called');
    });

    it('should support alert', () => {
        const { hide } = Dialog.alert({
            v2: true,
            title: 'Title',
            content: 'Content',
            animation: false,
        });
        cy.get('.next-dialog-message.next-message.next-addon.next-large').should(
            'have.class',
            'next-message-warning'
        );
        cy.get('.next-dialog-header').should('not.exist');
        cy.get('.next-message-title').should('have.text', 'Title');
        cy.get('.next-message-content').should('have.text', 'Content');
        cy.get('.next-dialog-btn').should('have.length', 1);
        shouldOkBtn(cy.get('.next-dialog-btn').eq(0));
        cy.then(() => {
            hide();
        });
    });

    it('should support confirm', () => {
        const { hide } = Dialog.confirm({
            v2: true,
            title: 'Title',
            content: 'Content',
            animation: false,
        });
        cy.get('.next-dialog-message.next-message.next-addon.next-large').should(
            'have.class',
            'next-message-help'
        );
        cy.get('.next-dialog-header').should('not.exist');
        cy.get('.next-message-title').should('have.text', 'Title');
        cy.get('.next-message-content').should('have.text', 'Content');
        cy.get('.next-dialog-btn').should('have.length', 2);
        shouldOkBtn(cy.get('.next-dialog-btn').eq(0));
        shouldCancelBtn(cy.get('.next-dialog-btn').eq(1));
        cy.then(() => {
            hide();
        });
        hide();
    });

    it('should support height', () => {
        cy.mount(<Dialog v2 visible />).as('Demo');
        cy.get('.next-dialog').then($el => {
            cy.wrap($el.prop('style').height).should('be.empty');
        });
        cy.get('.next-dialog-footer').should('not.have.class', 'next-dialog-footer-fixed-height');

        cy.get<MountReturn>('@Demo').then(({ component, rerender }) => {
            rerender(
                cloneElement(component as ReactElement, {
                    height: '500px',
                })
            );
        });
        cy.get('.next-dialog').then($el => {
            cy.wrap($el.prop('style').height).should('be.equal', '500px');
        });
        cy.get('.next-dialog-footer').should('have.class', 'next-dialog-footer-fixed-height');
    });

    it('should support style.width compcat with v1', () => {
        cy.mount(<Dialog v2 visible style={{ width: 345 }} />);
        cy.get('.next-dialog').should('have.css', 'width', '345px');
    });

    it('should close dialog if click the ok button', () => {
        Dialog.show({
            v2: true,
            animation: false,
            title: 'Title',
            content: 'Content',
        });

        cy.get('.next-btn-primary').click();

        cy.get('.next-dialog').should('not.exist');
    });

    it('should not close dialog if onOk return false', () => {
        const { hide } = Dialog.show({
            v2: true,
            title: 'Title',
            content: 'Content',
            animation: false,
            onOk: () => false,
        });

        cy.get('.next-btn-primary').click();
        cy.get('.next-dialog').should('exist');
        cy.then(() => {
            hide();
        });
    });

    it('should not close dialog immediately if onOk return promise and resolve true', () => {
        const { hide } = Dialog.show({
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

        cy.get('.next-btn-primary').click();
        cy.get('.next-dialog').should('exist');
        cy.get('.next-btn-primary').should('have.class', 'next-btn-loading');
        cy.get('.next-dialog').should('not.exist');
        cy.then(() => {
            hide();
        });
    });

    it('should not close dialog if onOk return promise and resolve false', () => {
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
        cy.get('.next-btn-primary').eq(0).click();
        // 这里的 wait 是有必要的
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(500);
        cy.get('.next-dialog').should('exist');
        cy.then(() => {
            hide();
        });
    });

    it('should work when set <ConfigProvider popupContainer/> ', () => {
        cy.mount(
            <ConfigProvider popupContainer={'dialog-popupcontainer'}>
                <div id="dialog-popupcontainer" style={{ height: 300, overflow: 'auto' }}>
                    <Dialog v2 title="Welcome to Alibaba.com" visible>
                        Start your business here by searching a popular product
                    </Dialog>
                </div>
            </ConfigProvider>
        );

        cy.get('#dialog-popupcontainer > .next-overlay-wrapper').should('exist');
    });

    it('should not close dialog if onOk return promise and reject', () => {
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

        cy.on('uncaught:exception', () => {
            return false;
        });

        cy.get('.next-btn-primary').click();
        // 这里的 wait 是有必要的
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(1000);
        cy.get('.next-btn-primary').should('not.have.class', 'next-btn-loading');
        cy.get('.next-dialog').should('exist');
        cy.then(() => {
            hide();
        });
    });

    it('should obey: self.locale > nearest ConfigProvider.locale > further ConfigProvider.locale', () => {
        cy.mount(
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

        cy.get('button').click();

        cy.get('.near-dialog-footer').as('footer').should('exist');
        cy.get('@footer').find('button').eq(0).should('have.text', 'my ok');
        cy.get('@footer').find('button').eq(1).should('have.text', 'near cancel');
    });

    it("quick-calling should use root context's state if its exists", () => {
        cy.mount(
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

        cy.get('button').click();
        cy.get('.far-dialog-footer').as('footer').should('exist');
        cy.get('@footer').find('button').eq(0).should('have.text', 'far ok');
        cy.get('@footer').find('button').eq(1).as('cancel').should('have.text', 'my cancel');

        cy.get('@cancel').click();
        cy.get('.far-overlay-wrapper').should('not.exist');
    });

    it('quick-calling should should support set prefix for dialog', () => {
        const { hide } = Dialog.show({
            v2: true,
            prefix: 'test-',
            title: 'Title',
            content: 'Content',
        });

        cy.get('.test-dialog').should('have.class', 'test-closeable');
        cy.wrap(() => {
            hide();
        });
    });

    it('should throw error (async)', () => {
        const handleError = cy.spy().as('handleError');
        const { hide } = Dialog.show({
            v2: true,
            title: 'Title',
            content: 'Content',
            onOk: async () => {
                throw Error('for test');
            },
        });
        cy.on('uncaught:exception', err => {
            expect(err.message).to.contain('for test');
            handleError();
            hide();
            return false;
        });
        cy.get('.next-btn-primary').eq(0).click();
        cy.get('@handleError').should('be.called');
    });

    it('should throw error', () => {
        const handleError = cy.spy().as('handleError');
        const { hide } = Dialog.show({
            v2: true,
            title: 'Title',
            content: 'Content',
            onOk: () => {
                throw Error('for test');
            },
        });
        cy.on('uncaught:exception', err => {
            expect(err.message).to.contain('for test');
            handleError();
            hide();
            return false;
        });
        cy.get('.next-btn-primary').eq(0).click();
        cy.get('@handleError').should('be.called');
    });

    it('should support okProps={loading:true}', () => {
        const { hide } = Dialog.show({
            v2: true,
            title: 'Title',
            content: 'Content',
            okProps: {
                loading: true,
            },
        });

        cy.get('.next-btn-loading').should('exist');
        cy.then(() => {
            hide();
        });
    });
    it('should support hasMask={false}', () => {
        const { hide } = Dialog.show({
            v2: true,
            hasMask: false,
            title: 'Title',
            content: 'Content',
        });

        cy.get('.next-overlay-backdrop').should('not.exist');
        cy.then(() => {
            hide();
        });

        cy.mount(<Demo2 animation={false} hasMask={false} />);
        cy.get('button').eq(0).click();
        cy.get('.next-overlay-backdrop').should('not.exist');
    });

    it('should rollback document.body.style in order', () => {
        document.body.setAttribute('style', '');
        const config: Config = {
            v2: true,
            animation: false,
            title: 'First',
            content: 'content content content...',
            onOk: () => {
                Dialog.success({
                    v2: true,
                    animation: false,
                    title: 'Second',
                    content: 'content content content...',
                });
            },
        };

        cy.get('body').should('have.css', 'overflow', 'visible');

        cy.then(() => {
            Dialog.success(config);
        });

        cy.get('body').should('have.css', 'overflow', 'hidden');

        cy.get('.next-btn-primary').eq(0).click();

        cy.get('body').should('have.css', 'overflow', 'hidden');

        cy.get('.next-btn-primary').eq(0).click();

        cy.get('body').should('have.css', 'overflow', 'visible');
    });
});
