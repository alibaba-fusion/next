import React, { type ReactElement, cloneElement, useState } from 'react';
import { type MountReturn } from 'cypress/react';
import { dom } from '../../util';
import Button from '../../button';
import ConfigProvider from '../../config-provider';
import Dialog, { type DialogProps } from '../index';
import '../style';
import zhCN from '../../locale/zh-cn';
import { ModalInner as QuickInner } from '../show';

const { getStyle } = dom;

function shouldOkBtn(btn: Cypress.Chainable<JQuery<HTMLElement>>) {
    btn.should('have.class', 'next-btn-primary');
    btn.should('have.text', '确定');
}

function shouldCancelBtn(btn: Cypress.Chainable<JQuery<HTMLElement>>) {
    btn.should('have.class', 'next-btn-normal');
    btn.should('have.text', '取消');
}

const COUNT = 5;

class Demo extends React.Component<DialogProps> {
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

    onChangeContent = () => {
        this.setState({
            content: new Array(COUNT)
                .fill('')
                .map((__, index) => (
                    <p key={index}>Start your business here by searching a popular product</p>
                )),
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
                    title="欢迎来到 Alibaba.com"
                    visible={this.state.visible}
                    onOk={this.onClose}
                    onCancel={this.onClose}
                    onClose={this.onClose}
                    {...this.props}
                >
                    <Button
                        className="contentChangeBt"
                        onClick={this.onChangeContent}
                        type="primary"
                    >
                        修改内容
                    </Button>
                    {this.state.content}
                </Dialog>
            </div>
        );
    }
}

describe('inner', () => {
    beforeEach(() => {
        ConfigProvider.initLocales({
            'zh-cn': zhCN,
        });
        ConfigProvider.setLanguage('zh-cn');
    });

    it('should show and hide', () => {
        cy.mount(<Demo animation={false} />);
        cy.get('button').click();
        cy.get('.next-dialog').should('exist');

        cy.get('.next-btn-primary.next-dialog-btn').click();
        cy.get('.next-dialog').should('not.exist');

        cy.get('button').click();
        cy.get('.next-btn-normal.next-dialog-btn').click();
        cy.get('.next-dialog').should('not.exist');

        cy.get('button').click();
        cy.get('.next-dialog-close').click();
        cy.get('.next-dialog').should('not.exist');
    });

    it('should support footerAlign', () => {
        cy.mount(<Dialog visible />).as('Demo');
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
        cy.mount(<Dialog visible />).as('Demo');
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
        cy.mount(<Dialog visible footer={false} />).as('Demo');
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

    it('should support custom footer button text', () => {
        cy.mount(
            <Dialog
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

    it("should use css to position dialog if set isFullScreen to true and align to 'cc cc'", () => {
        cy.mount(<Dialog visible isFullScreen />);
        cy.get('.next-dialog-container').should('exist');
    });

    it('should adjust position and size if not use css to position', () => {
        const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
        const dialogHeight = viewportHeight - 80 + 20;

        cy.mount(<Demo height={`${dialogHeight}px`} />);
        cy.get('button').click();
        cy.get('.next-dialog').should('have.css', 'top', '40px');
    });

    it('should update position and size when dailog content has been changed', () => {
        cy.mount(<Demo visible shouldUpdatePosition />);
        const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
        let contentHeight = 28;
        // 42 为 body padding + dialog border
        const extraHeight = 40 + 2;
        const heightAndTopShouldBeOk = ($dialog: JQuery<HTMLElement>) => {
            const headerHeight = getStyle(
                document.querySelector<HTMLElement>('.next-dialog-header')!,
                'height'
            ) as number;
            const footerHeight = getStyle(
                document.querySelector<HTMLElement>('.next-dialog-footer')!,
                'height'
            ) as number;
            const expectDialogHeight = headerHeight + footerHeight + contentHeight + extraHeight;
            cy.wrap($dialog).should('have.css', 'height', `${expectDialogHeight}px`);
            cy.wrap($dialog).should(
                'have.css',
                'top',
                `${(viewportHeight - expectDialogHeight) / 2}px`
            );
        };
        cy.get('.next-dialog').then($dialog => {
            heightAndTopShouldBeOk($dialog);
        });
        cy.get('.contentChangeBt').click();
        cy.get('.next-dialog').then($dialog => {
            contentHeight = 28 + COUNT * (18 + 12) + 12;
            heightAndTopShouldBeOk($dialog);
        });
    });

    it('dialog body should has max-height when setting smaller value of height', () => {
        cy.mount(<Demo visible height="200px" shouldUpdatePosition />);

        cy.get('.next-dialog-body').should('have.css', 'max-height', '100px');
    });

    it('should hide close link if set closeable to false', () => {
        cy.mount(<Dialog visible closeable={false} />);
        cy.get('.next-dialog-close').should('not.exist');
    });

    it('should support show', () => {
        const handleClose = cy.spy().as('handleClose');
        const { hide } = Dialog.show({
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
    });

    it('should support height', () => {
        cy.mount(<Dialog visible />).as('Demo');
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

    it('should close dialog if click the ok button', () => {
        Dialog.show({
            title: 'Title',
            content: 'Content',
            animation: false,
        });

        cy.get('.next-btn-primary').click();
        cy.get('.next-dialog').should('not.exist');
    });

    it('should not close dialog if onOk return false', () => {
        const { hide } = Dialog.show({
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

        cy.get('.next-btn-primary').click();
        cy.get('.next-dialog').should('exist');
        cy.get('.next-btn-primary').should('have.class', 'next-btn-loading');
        cy.get('.next-dialog').should('not.exist');
    });

    it('should not close dialog if onOk return promise and resolve false', () => {
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
        cy.get('.next-btn-primary').click();
        // 这里的 wait 是有必要的
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(1000);
        cy.get('.next-dialog').should('exist');
        cy.then(() => {
            hide();
        });
    });

    it('should work when set <ConfigProvider popupContainer/> ', () => {
        cy.mount(
            <ConfigProvider popupContainer={'dialog-popupcontainer'}>
                <div id="dialog-popupcontainer" style={{ height: 300, overflow: 'auto' }}>
                    <Dialog title="Welcome to Alibaba.com" visible>
                        Start your business here by searching a popular product
                    </Dialog>
                </div>
            </ConfigProvider>
        );
        cy.get('#dialog-popupcontainer > .next-overlay-wrapper').should('exist');
    });

    it('should not close dialog if onOk return promise and reject', () => {
        const { hide } = Dialog.show({
            title: 'Title',
            content: 'Content',
            animation: false,
            onOk: () => {
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        reject('test');
                    }, 500);
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
                    <Demo locale={{ ok: 'my ok' }} animation={false} />
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

    // https://github.com/alibaba-fusion/next/issues/2868
    it('should resize after children size changed', () => {
        function MyContent() {
            const [height, setHeight] = useState(100);

            return (
                <div className="content">
                    <div style={{ width: 400, height }} />
                    <button onClick={() => setHeight(200)} />
                </div>
            );
        }
        let left: string, top: string;
        cy.mount(
            <Dialog shouldUpdatePosition visible centered>
                <MyContent />
            </Dialog>
        );
        // 等待 dialog 调整完成
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(1000);
        cy.get('.next-dialog').then($el => {
            left = $el.css('left');
            top = $el.css('top');
        });

        cy.get('.content button').click();
        cy.then(() => {
            cy.get('.next-dialog').should('not.have.css', 'top', top);
            cy.get('.next-dialog').should('have.css', 'left', left);
        });
    });
});

describe('Quick', () => {
    it('should support alert message', () => {
        cy.mount(
            <QuickInner
                type="alert"
                title="quick confirm modal inner"
                locale={zhCN}
                content={<span>Modal Content</span>}
            />
        );

        cy.get('.next-message-warning').should('exist');
    });

    it('should support confirm message', () => {
        cy.mount(
            <QuickInner
                type="confirm"
                title="quick confirm modal inner"
                locale={zhCN}
                content={<span>Modal Content</span>}
            />
        );

        cy.get('.next-message-help').should('exist');
    });

    it('should support message title', () => {
        cy.mount(
            <QuickInner
                type="confirm"
                title="quick confirm modal inner"
                locale={zhCN}
                content={<span>Modal Content</span>}
            />
        );

        cy.get('.next-message-title').should('have.text', 'quick confirm modal inner');
    });

    it('should support default prefix', () => {
        cy.mount(
            <QuickInner
                type="confirm"
                title="quick confirm modal inner"
                locale={zhCN}
                content={<span>Modal Content</span>}
            />
        );

        cy.get('.next-dialog-message').should('exist');
    });

    it('should support messageProps', () => {
        cy.mount(
            <QuickInner
                type="confirm"
                title="quick confirm modal inner"
                locale={zhCN}
                messageProps={{ iconType: 'close' }}
                content={<span>Modal Content</span>}
            />
        );

        cy.get('.next-icon-close').should('exist');
    });

    it('should support custom prefix', () => {
        cy.mount(
            <QuickInner
                type="confirm"
                title="quick confirm modal inner"
                prefix="test-"
                locale={zhCN}
                content={<span>Modal Content</span>}
            />
        );

        cy.get('.test-dialog-message').should('exist');
    });

    it('should pass content as child', () => {
        cy.mount(
            <QuickInner
                type="confirm"
                title="quick confirm modal inner"
                prefix="test-"
                locale={zhCN}
                content={<span>Modal Content</span>}
            />
        );

        cy.get('.next-message-content').should('have.text', 'Modal Content');
    });
});
