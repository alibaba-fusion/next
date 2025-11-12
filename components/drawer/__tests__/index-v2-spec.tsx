import React from 'react';
import Drawer from '../index';
import ConfigProvider from '../../config-provider';
import '../style';
import type { DrawerProps } from '../types';

describe('Drawer v2', () => {
    it('should show and hide', () => {
        class DrawerDemo extends React.Component<{ animation: DrawerProps['animation'] }> {
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
                        <button id="open-drawer" onClick={this.onOpen}>
                            打开抽屉
                        </button>
                        <Drawer
                            v2
                            title="欢迎来到 Alibaba.com"
                            visible={this.state.visible}
                            onClose={this.onClose}
                            {...this.props}
                        >
                            开启您的贸易生活从 Alibaba.com 开始
                        </Drawer>
                    </div>
                );
            }
        }
        cy.mount(<DrawerDemo animation={false} />);
        cy.get('button#open-drawer').click();
        cy.get('.next-drawer').should('be.visible');
        cy.get('.next-drawer-close').click();
        cy.get('.next-drawer').should('not.exist');
    });

    it('should support placement', () => {
        ['top', 'left', 'bottom', 'right'].forEach((dir: 'top' | 'left' | 'bottom' | 'right') => {
            cy.mount(<Drawer v2 visible placement={dir} />);
            cy.get('.next-drawer').should('exist');
            cy.get(`.next-drawer-${dir}`).should('exist');
        });
    });

    it('should work when set <ConfigProvider popupContainer/> ', () => {
        cy.mount(
            <ConfigProvider popupContainer={'dialog-popupcontainer'}>
                <div id="dialog-popupcontainer" style={{ height: 300, overflow: 'auto' }}>
                    <Drawer v2 title="Welcome to Alibaba.com" visible>
                        Start your business here by searching a popular product
                    </Drawer>
                </div>
            </ConfigProvider>
        );
        cy.get('#dialog-popupcontainer').within(() => {
            cy.get('.next-overlay-wrapper').should('exist');
        });
    });

    it('should support headerStyle/bodyStyle', () => {
        cy.mount(
            <Drawer
                v2
                visible
                title="test"
                headerStyle={{ background: 'blue' }}
                bodyStyle={{ background: 'red' }}
                closeMode={[]}
            >
                body
            </Drawer>
        );
        cy.get('.next-drawer-header').should('have.css', 'background-color', 'rgb(0, 0, 255)');
        cy.get('.next-drawer-body').should('have.css', 'background-color', 'rgb(255, 0, 0)');
    });

    it('quick-calling should should support set prefix for dialog', () => {
        const { hide } = Drawer.show({
            v2: true,
            prefix: 'test-',
            title: 'Title',
            content: <span className="drawer-quick-content" />,
        });

        cy.get('.test-drawer').should('exist');
        cy.get('.test-closeable').should('exist');
        cy.get('.drawer-quick-content').should('exist');

        cy.then(() => {
            hide();
        });
    });
    it('should add paddingRight to body when body is scroll on open Drawer', () => {
        let tallDiv: HTMLDivElement;

        // 创建一个高元素使 body 产生滚动条
        cy.document().then(doc => {
            tallDiv = doc.createElement('div');
            tallDiv.style.height = '110vh';
            tallDiv.setAttribute('data-test-element', 'scroll-trigger'); // 添加标识方便查找
            doc.body.appendChild(tallDiv);
        });

        // 设置初始 padding-right
        cy.get('body').invoke('css', 'padding-right', '10px');
        cy.get('body').invoke('css', 'overflow', 'auto');

        cy.mount(
            <Drawer v2 visible title="test" closeMode={[]}>
                body
            </Drawer>
        );

        cy.then(() => {
            const scrollDiv = document.createElement('div');
            scrollDiv.className = 'just-to-get-scrollbar-size';
            scrollDiv.style.width = '100px';
            scrollDiv.style.height = '100px';
            scrollDiv.style.overflow = 'scroll';
            scrollDiv.style.position = 'absolute';
            scrollDiv.style.top = '-9999px';
            document.body.appendChild(scrollDiv);
            const scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
            document.body.removeChild(scrollDiv);
            cy.get('body').should('have.css', 'padding-right', `${10 + scrollbarWidth}px`);
        });

        // 清理添加的元素
        cy.then(() => {
            if (tallDiv && tallDiv.parentNode) {
                tallDiv.parentNode.removeChild(tallDiv);
            }
        });
    });
});
