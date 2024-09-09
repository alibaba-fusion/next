import React from 'react';
import Button from '../../button';
import Balloon from '../index';
import '../style';

const defaultTrigger = (
    <span className="triggerSpan" style={{ margin: '5px' }}>
        trigger
    </span>
);

describe('Balloon', () => {
    describe('closable', () => {
        it('closable: true', () => {
            cy.mount(
                <Balloon
                    visible
                    closable
                    type="normal"
                    trigger={defaultTrigger}
                    triggerType="click"
                >
                    i am balloon content
                </Balloon>
            );
            cy.get('.next-balloon-close').should('exist');
        });

        it('closable: false', () => {
            cy.mount(
                <Balloon
                    visible
                    closable={false}
                    type="normal"
                    trigger={defaultTrigger}
                    triggerType="click"
                >
                    i am balloon content
                </Balloon>
            );
            cy.get('.next-balloon-close').should('not.exist');
        });
    });

    describe('safeNode', () => {
        it('safeNode', () => {
            function Demo() {
                return (
                    <div>
                        <button id="safe" className="safeButton">
                            safeButton
                        </button>
                        <Balloon
                            trigger={<span className="balloon">trigger</span>}
                            id="balloon"
                            safeNode="safe"
                            triggerType="click"
                        >
                            i am balloon content
                        </Balloon>
                    </div>
                );
            }
            cy.mount(<Demo />);
            cy.get('.balloon').trigger('click');
            cy.get('.safeButton').trigger('click');
            // eslint-disable-next-line cypress/no-unnecessary-waiting
            cy.wait(300);
            cy.get('.next-balloon').should('exist');
        });
    });
    describe('type', () => {
        it('type: normal', () => {
            cy.mount(
                <Balloon
                    visible
                    closable={false}
                    type="normal"
                    trigger={defaultTrigger}
                    triggerType="click"
                >
                    i am balloon content
                </Balloon>
            );
            cy.get('.next-balloon-normal').should('exist');
        });
        it('type: primary', () => {
            cy.mount(
                <Balloon
                    visible
                    closable={false}
                    type="primary"
                    trigger={defaultTrigger}
                    triggerType="click"
                >
                    i am balloon content
                </Balloon>
            );
            cy.get('.next-balloon-primary').should('exist');
        });
    });

    describe('align', () => {
        beforeEach(() => {
            cy.mount(
                <Balloon trigger={<span>trigger</span>} align="t" triggerType="click">
                    i am balloon content
                </Balloon>
            ).as('Demo');
        });

        it('balloon align t', () => {
            cy.get('span').trigger('click');
            cy.get('.next-balloon-bottom').should('exist');
        });
        it('balloon align tl', () => {
            cy.rerender('Demo', {
                align: 'tl',
            });
            cy.get('span').trigger('click');
            cy.get('.next-balloon-bottom-right').should('exist');
        });
        it('balloon align tr', () => {
            cy.rerender('Demo', {
                align: 'tr',
            });
            cy.get('span').trigger('click');
            cy.get('.next-balloon-bottom-left').should('exist');
        });
        it('balloon align b', () => {
            //bottom
            cy.rerender('Demo', {
                align: 'b',
            });
            cy.get('span').trigger('click');
            cy.get('.next-balloon-top').should('exist');
        });
        it('balloon align bl', () => {
            cy.rerender('Demo', {
                align: 'bl',
            });
            cy.get('span').trigger('click');
            cy.get('.next-balloon-top-right').should('exist');
        });
        it('balloon align br', () => {
            cy.rerender('Demo', {
                align: 'br',
            });
            cy.get('span').trigger('click');
            cy.get('.next-balloon-top-left').should('exist');
        });
        it('balloon align l', () => {
            //left
            cy.rerender('Demo', {
                align: 'l',
            });
            cy.get('span').trigger('click');
            cy.get('.next-balloon-right').should('exist');
        });
        it('balloon align lt', () => {
            cy.rerender('Demo', {
                align: 'lt',
            });
            cy.get('span').trigger('click');
            cy.get('.next-balloon-right-bottom').should('exist');
        });
        it('balloon align lb', () => {
            cy.rerender('Demo', {
                align: 'lb',
            });
            cy.get('span').trigger('click');
            cy.get('.next-balloon-right-top').should('exist');
        });
        it('balloon align r', () => {
            //right
            cy.rerender('Demo', {
                align: 'r',
            });
            cy.get('span').trigger('click');
            cy.get('.next-balloon-left').should('exist');
        });
        it('balloon align rt', () => {
            cy.rerender('Demo', {
                align: 'rt',
            });
            cy.get('span').trigger('click');
            cy.get('.next-balloon-left-bottom').should('exist');
        });
        it('balloon align rb', () => {
            cy.rerender('Demo', {
                align: 'rb',
            });
            cy.get('span').trigger('click');
            cy.get('.next-balloon-left-top').should('exist');
        });
    });

    describe('Balloon onClose ComponentWillReceiveProps closeIcon', () => {
        it('onClose ComponentWillReceiveProps closeIcon', () => {
            interface AppProps {}
            class App extends React.Component<AppProps, { visible: boolean }> {
                constructor(props: AppProps) {
                    super(props);
                    this.state = {
                        visible: false,
                    };
                }

                hide() {
                    this.setState({
                        visible: false,
                    });
                }
                handleVisibleChange(visible: boolean) {
                    this.setState({ visible });
                }

                onClose() {}

                afterClose() {}

                render() {
                    const visibleTrigger = (
                        <Button className="trigger-btn" type="primary">
                            点击弹出卡片
                        </Button>
                    );

                    const content = (
                        <div>
                            点击按钮操作
                            <br />
                            <a style={{ right: 0 }} onClick={this.hide.bind(this)}>
                                确认
                            </a>
                            <a style={{ marginLeft: '4px' }} onClick={this.hide.bind(this)}>
                                关闭
                            </a>
                        </div>
                    );
                    return (
                        <div>
                            <Balloon
                                trigger={visibleTrigger}
                                triggerType="click"
                                visible={this.state.visible}
                                onVisibleChange={this.handleVisibleChange.bind(this)}
                                afterClose={this.afterClose.bind(this)}
                                onClose={this.onClose.bind(this)}
                            >
                                {content}
                            </Balloon>
                        </div>
                    );
                }
            }
            cy.mount(<App />);
            cy.get('.trigger-btn').trigger('click');
            cy.get('.next-balloon').should('exist');
            cy.get('.next-balloon-close').trigger('click');
            cy.get('.next-balloon').should('not.exist');
        });
    });

    describe('trigger ,triggerType', () => {
        it('should has the trigger element', () => {
            cy.mount(
                <Balloon
                    closable={false}
                    type="normal"
                    trigger={defaultTrigger}
                    triggerType="click"
                >
                    i am balloon content
                </Balloon>
            );

            cy.get('.triggerSpan').should('have.text', 'trigger');
        });
        it('triggerType can set click', () => {
            cy.mount(
                <Balloon
                    closable={false}
                    type="normal"
                    trigger={defaultTrigger}
                    triggerType="click"
                >
                    i am balloon content
                </Balloon>
            );
            cy.get('span').trigger('click');
            cy.get('.next-balloon').should('exist');
        });

        it('triggerType can set hover', () => {
            cy.mount(
                <Balloon
                    closable={false}
                    type="normal"
                    trigger={defaultTrigger}
                    triggerType="hover"
                >
                    i am balloon content
                </Balloon>
            );
            cy.get('span').trigger('mouseover');
            // eslint-disable-next-line cypress/no-unnecessary-waiting
            cy.wait(500);
            cy.get('.next-balloon').should('exist');
        });

        it('trigger can be string', () => {
            cy.mount(
                <Balloon closable={false} type="normal" trigger="trigger" triggerType="hover">
                    i am balloon content
                </Balloon>
            );
            cy.get('span').trigger('mouseover');
            // eslint-disable-next-line cypress/no-unnecessary-waiting
            cy.wait(300);
            cy.get('.next-balloon').should('exist');
        });

        // trigger 不传，默认用空的<span></span>填充
        it('trigger default is span', () => {
            cy.mount(<Balloon triggerType="click">trigger</Balloon>);
            cy.get('span').should('have.length', 1);
        });
    });
});
