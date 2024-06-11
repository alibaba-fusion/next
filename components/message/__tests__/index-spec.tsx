import React from 'react';
import Button from '../../button';
import ConfigProvider from '../../config-provider';
import { env } from '../../util';
import Message from '../index';
import '../style';

describe('Message', () => {
    it('should receive className prop', () => {
        cy.mount(<Message className="custom" />);
        cy.get('.next-message.custom').should('have.length', 1);
    });

    it('should receive style prop', () => {
        cy.mount(<Message style={{ color: 'red' }} />);
        cy.get('.next-message').should('have.css', 'color', 'rgb(255, 0, 0)');
    });

    it('should have type class', () => {
        const types = ['success', 'warning', 'error', 'notice', 'help', 'loading'] as const;
        types.forEach(type => {
            cy.mount(<Message type={type} />);
            cy.get(`.next-message.next-message-${type}`).should('have.length', 1);
            cy.get('.next-icon').should('have.class', 'next-message-symbol-icon');
        });
    });

    it('should have shape class', () => {
        const shapes = ['inline', 'addon', 'toast'] as const;
        shapes.forEach(shape => {
            cy.mount(<Message shape={shape} />);
            cy.get(`.next-message.next-${shape}`).should('have.length', 1);
        });
    });

    it('should have size class', () => {
        const sizes = ['medium', 'large'] as const;
        sizes.forEach(size => {
            cy.mount(<Message size={size} />);
            cy.get(`.next-message.next-${size}`).should('have.length', 1);
        });
    });

    it('should show title if you pass it', () => {
        cy.mount(<Message title="title" />);
        cy.get('.next-message-title').should('have.text', 'title');
    });

    it('should show content if you pass it', () => {
        cy.mount(<Message>content</Message>);
        cy.get('.next-message-content').should('have.text', 'content');
    });

    it('should not show icon if set iconType to false', () => {
        cy.mount(<Message iconType={false} />);
        cy.get('.next-icon').should('have.length', 0);
    });

    it('should custom icon type', () => {
        cy.mount(<Message iconType="smile" />);
        cy.get('.next-icon').should('have.class', 'next-icon-smile');
    });

    it('should show close link if set closeable to true', () => {
        cy.mount(<Message animation={false} title="title" closeable />);
        cy.get('.next-message-close').should('have.length', 1);
        cy.get('.next-message-close').click();
        cy.get('.next-message').should('have.length', 0);
    });

    it('should show or hide under control', () => {
        cy.mount(<Message defaultVisible visible={false} animation={false} title="title" />).as(
            'Message'
        );
        cy.get('.next-message').should('have.length', 0);
        cy.rerender('Message', { visible: true });
        cy.get('.next-message').should('have.length', 1);
    });
});
describe('toast', () => {
    it('should render nowrap message when content too long[Overlay case]', () => {
        const content =
            'content content content content content content content content content content content content content content content content content content content content';
        Message.show(content);
        cy.get('.next-overlay-wrapper').find('.next-message').should('have.text', content);
        cy.get('.next-overlay-wrapper')
            .find('.next-message')
            .should($toast => {
                // access the native DOM element
                expect($toast.get(0).innerText.trim()).to.eq(content);
                expect($toast.get(0).offsetWidth).to.be.greaterThan(200);
            });
        Message.hide();
    });

    it('should render message when only pass content string', () => {
        Message.show('content');
        cy.get('.next-overlay-wrapper .next-message').should('have.text', 'content');
        Message.hide();
    });

    it('should render message when only pass content react element', () => {
        Message.show(<i>content</i>);
        cy.get('.next-overlay-wrapper .next-message-title i').should('have.text', 'content');
        Message.hide();
    });

    it('should render message when pass config object', () => {
        Message.show({
            type: 'warning',
            content: 'content',
        });
        cy.get('.next-overlay-wrapper .next-message.next-message-warning').should(
            'have.text',
            'content'
        );
        Message.hide();
    });

    it('should close message after duration and call afterClose method', () => {
        const afterClose = cy.spy();
        Message.show({
            content: 'content',
            duration: 100,
            afterClose,
        });
        cy.get('.next-overlay-wrapper .next-message', { timeout: 500 }).should('not.exist');
        cy.wrap(afterClose).should('be.calledOnce');
    });

    it('should show message all the time when set duration to 0', () => {
        cy.clock();
        Message.show({
            content: 'content',
            duration: 0,
        });
        // 验证duration为0的配置是否生效，若不生效则3000ms后会自动消失
        cy.tick(3500);
        cy.get('.next-overlay-wrapper .next-message')
            .should('exist')
            .then(() => {
                Message.hide();
            });
    });

    it('should hide message when call hide method', () => {
        const afterClose = cy.spy();
        Message.show({
            content: 'content',
            afterClose,
        });
        Message.hide();
        cy.get('.next-overlay-wrapper .next-message').should('not.exist');
        cy.wrap(afterClose).should('be.calledOnce');
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
        cy.get('.next-message-close').click();
        cy.get('.next-overlay-wrapper .next-message').should('not.exist');
        done();
    });
});

describe('should support configProvider', () => {
    it('normal should obey: self.prefix > nearest ConfigProvider.prefix > further ConfigProvider.prefix', () => {
        const methods = ['success', 'warning', 'error', 'notice', 'help', 'loading'] as const;
        cy.mount(
            <ConfigProvider prefix="far-">
                <ConfigProvider prefix="near-">
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
        cy.get('.near-message .near-message-content .near-btn-primary').should(
            'have.length',
            methods.length
        );
    });

    it('Message.withContext should use nearest context instead of root context', () => {
        // 清除缓存, 防止其他包含configProvider测试case影响
        ConfigProvider.clearCache();
        const BeforeFix = () => {
            return (
                <Button
                    onClick={() => {
                        Message.notice({
                            title: 'Message.notice 命令式弹窗',
                            duration: 10000,
                        });
                    }}
                    type="primary"
                >
                    使用 Message.notice
                </Button>
            );
        };
        const AfterFix = Message.withContext(({ contextMessage }) => {
            return (
                <div>
                    <Button
                        onClick={() => {
                            contextMessage.notice({
                                title: 'Message.withContext 命令式弹窗',
                                duration: 10000,
                            });
                        }}
                    >
                        使用 Message.withContext
                    </Button>
                </div>
            );
        });
        cy.mount(
            <ConfigProvider prefix="root-">
                <ConfigProvider prefix="next-">
                    <div>
                        <BeforeFix />
                        <AfterFix />
                    </div>
                </ConfigProvider>
            </ConfigProvider>
        );
        cy.get('.next-btn-primary').click();
        cy.get('.root-message');
        cy.get('.next-message').should('not.exist');
        Message.hide();

        cy.get('.next-btn-normal').click();
        cy.get('.next-message');
        cy.get('.root-message').should('not.exist');
        Message.hide();
    });
});

describe('toast quick-calling', () => {
    const avaliableMethods = ['success', 'warning', 'error', 'notice', 'help', 'loading'] as const;

    for (const method of avaliableMethods) {
        it(`render ${method}`, done => {
            Message[method]('content');
            cy.get('.next-overlay-wrapper .next-message').should('have.text', 'content');
            Message.hide();
            done();
        });
    }
});
describe('Message v2', () => {
    it('should support config to open multiple instance', () => {
        Message.config({});
        Message.show('content');
        Message.success('content');
        cy.get('.next-message-wrapper-v2 .next-message')
            .should('have.length', 2)
            .then(() => {
                Message.destory();
            });
    });
});
