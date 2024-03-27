import React from 'react';
import Drawer from '../index';
import ConfigProvider from '../../config-provider';
import '../style';
import type { DrawerProps } from '../types';

describe('Drawer', () => {
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
            cy.mount(<Drawer visible placement={dir} />);
            cy.get('.next-drawer').should('exist');
            cy.get(`.next-drawer-${dir}`).should('exist');
        });
    });

    it('should work when set <ConfigProvider popupContainer/> ', () => {
        cy.mount(
            <ConfigProvider popupContainer={'dialog-popupcontainer'}>
                <div id="dialog-popupcontainer" style={{ height: 300, overflow: 'auto' }}>
                    <Drawer title="Welcome to Alibaba.com" visible>
                        Start your business here by searching a popular product
                    </Drawer>
                </div>
            </ConfigProvider>
        );
        cy.get('#dialog-popupcontainer').within(() => {
            cy.get('.next-overlay-wrapper').should('exist');
        });
    });

    it('should hide close link if set closeable to false', () => {
        cy.mount(<Drawer visible closeable={false} />);
        cy.get('.next-drawer-close').should('not.exist');
    });

    it('should hide close link if set closeMode to []', () => {
        cy.mount(<Drawer visible closeMode={[]} />);
        cy.get('.next-drawer-close').should('not.exist');
    });

    it('should support headerStyle/bodyStyle', () => {
        cy.mount(
            <Drawer
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
});
