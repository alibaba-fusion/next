import React from 'react';
import type { MountReturn } from 'cypress/react';
import Icon from '../../icon';
import Nav from '../index';
import '../style';

const { Item, SubNav, PopupItem, Group } = Nav;

describe('Nav', () => {
    describe('render', () => {
        it('should render item', () => {
            cy.mount(
                <Nav>
                    <Item key="1">First</Item>
                    <Item icon="account" key="2">
                        Second
                    </Item>
                    <Item icon={<Icon type="atm" />} key="3">
                        Third
                    </Item>
                </Nav>
            );

            cy.get('li.next-nav-item').should('have.length', 3);
            cy.get('li.next-nav-item')
                .eq(1)
                .find('i.next-nav-icon')
                .should('have.class', 'next-icon-account');
            cy.get('li.next-nav-item')
                .eq(2)
                .find('i.next-icon')
                .should('have.class', 'next-icon-atm');
        });

        it('should render sub nav', () => {
            cy.mount(
                <Nav>
                    <SubNav key="1">
                        <Item key="1-1">First</Item>
                        <Item key="1-2">Second</Item>
                    </SubNav>
                    <SubNav key="2" icon="account">
                        <Item key="2-1">First</Item>
                        <Item key="2-2">Second</Item>
                    </SubNav>
                    <SubNav key="3" icon={<Icon className="custom-icon" type="atm" />}>
                        <Item key="3-1">First</Item>
                        <Item key="3-2">Second</Item>
                    </SubNav>
                </Nav>
            );

            cy.get('li.next-nav-sub-nav-item').should('have.length', 3);
            cy.get('li.next-nav-sub-nav-item')
                .eq(1)
                .find('i.next-nav-icon')
                .should('have.class', 'next-icon-account');
            cy.get('li.next-nav-sub-nav-item')
                .eq(2)
                .find('i.custom-icon')
                .should('have.class', 'next-icon-atm');
        });

        it('should render popup item', () => {
            cy.mount(
                <Nav>
                    <PopupItem key="1">
                        <div>Custom</div>
                    </PopupItem>
                    <PopupItem key="2" icon="account">
                        <div>Custom</div>
                    </PopupItem>
                    <PopupItem key="3" icon={<Icon className="custom-icon" type="atm" />}>
                        <div>Custom</div>
                    </PopupItem>
                </Nav>
            );

            cy.get('li.next-nav-popup-item').should('have.length', 3);
            cy.get('li.next-nav-popup-item')
                .eq(1)
                .find('i.next-nav-icon')
                .should('have.class', 'next-icon-account');
            cy.get('li.next-nav-popup-item')
                .eq(2)
                .find('i.custom-icon')
                .should('have.class', 'next-icon-atm');
        });

        it('should render group', () => {
            cy.mount(
                <Nav>
                    <Group label="Group label">
                        <Item key="1">First</Item>
                        <Item key="2">Second</Item>
                    </Group>
                </Nav>
            );

            cy.get('li.next-nav-group-label').should('have.length', 1);
        });
    });

    describe('properties', () => {
        it('should support type', () => {
            cy.mount(
                <Nav>
                    <Item key="1">First</Item>
                    <Item key="2">Second</Item>
                </Nav>
            ).as('el');

            ['normal', 'primary', 'secondary', 'line'].forEach(type => {
                cy.get<MountReturn>('@el').then(({ component, rerender }) => {
                    return rerender(React.cloneElement(component as React.ReactElement, { type }));
                });
                cy.get('ul.next-nav').should('have.class', `next-${type}`);
            });
        });

        it('should support direction', () => {
            cy.mount(
                <Nav>
                    <Item key="1">First</Item>
                    <Item key="2">Second</Item>
                </Nav>
            ).as('el');

            ['hoz', 'ver'].forEach(direction => {
                cy.get<MountReturn>('@el').then(({ component, rerender }) => {
                    return rerender(
                        React.cloneElement(component as React.ReactElement, { direction })
                    );
                });
                cy.get('ul.next-nav').should('have.class', `next-${direction}`);
            });
        });

        it('should support activeDirection', () => {
            cy.mount(
                <Nav>
                    <Item key="1">First</Item>
                    <Item key="2">Second</Item>
                </Nav>
            ).as('el');
            ['left', 'right'].forEach(activeDirection => {
                cy.get<MountReturn>('@el').then(({ component, rerender }) => {
                    return rerender(
                        React.cloneElement(component as React.ReactElement, { activeDirection })
                    );
                });
                cy.get('ul.next-nav')
                    .should('have.class', 'next-active')
                    .should('have.class', `next-${activeDirection}`);
            });
            ['top', 'bottom'].forEach(activeDirection => {
                cy.get<MountReturn>('@el').then(({ component, rerender }) => {
                    return rerender(
                        React.cloneElement(component as React.ReactElement, { activeDirection })
                    );
                });
                cy.get('ul.next-nav').should('not.have.class', 'next-active');
            });

            ['top', 'bottom'].forEach(activeDirection => {
                cy.get<MountReturn>('@el').then(({ component, rerender }) => {
                    return rerender(
                        React.cloneElement(component as React.ReactElement, {
                            activeDirection,
                            direction: 'hoz',
                        })
                    );
                });
                cy.get('ul.next-nav')
                    .should('have.class', 'next-active')
                    .should('have.class', `next-${activeDirection}`);
            });
            ['left', 'right'].forEach(activeDirection => {
                cy.get<MountReturn>('@el').then(({ component, rerender }) => {
                    return rerender(
                        React.cloneElement(component as React.ReactElement, {
                            activeDirection,
                            direction: 'hoz',
                        })
                    );
                });
                cy.get('ul.next-nav').should('not.have.class', 'next-active');
            });
        });

        it('should support defaultSelectedKeys undefined/null', () => {
            cy.mount(
                <Nav defaultSelectedKeys={null}>
                    <SubNav label="Group label">
                        <Item key="1">First</Item>
                        <Item key="2">Second</Item>
                    </SubNav>
                </Nav>
            );
        });

        it('should support showChildSelected', () => {
            cy.mount(<Nav selectedKeys="1" />).as('el');
            cy.get('ul.next-nav').should('exist');

            cy.get<MountReturn>('@el')
                .then(({ component, rerender }) => {
                    return rerender(
                        React.cloneElement(component as React.ReactElement, {
                            children: (
                                <SubNav label="Group label">
                                    <Item key="1">First</Item>
                                    <Item key="2">Second</Item>
                                </SubNav>
                            ),
                        })
                    );
                })
                .as('el1');
            cy.get('li.next-nav-sub-nav-item').eq(0).should('exist');
            cy.get('.next-nav-item').should('have.class', 'next-child-selected');

            cy.get<MountReturn>('@el1')
                .then(({ component, rerender }) => {
                    return rerender(
                        React.cloneElement(component as React.ReactElement, {
                            mode: 'popup',
                        })
                    );
                })
                .as('el2');
            cy.get('.next-nav-item').should('have.class', 'next-child-selected');

            cy.get<MountReturn>('@el2')
                .then(({ component, rerender }) => {
                    return rerender(
                        React.cloneElement(component as React.ReactElement, {
                            selectedKeys: 'ddasdfa',
                        })
                    );
                })
                .as('el2');
            cy.get('ul.next-nav').should('exist');
        });

        it('should support iconOnly and mode="popup" switched and openKeys reset', () => {
            cy.mount(
                <Nav defaultOpenAll>
                    <SubNav label="Group label">
                        <Item key="1">First</Item>
                        <Item key="2">Second</Item>
                    </SubNav>
                </Nav>
            ).as('el');
            cy.get('ul.next-nav').should('exist');
            cy.get('li.next-nav-sub-nav-item').first().get('.next-nav-item.next-opened');
            cy.get<MountReturn>('@el').then(({ component, rerender }) => {
                return rerender(
                    React.cloneElement(component as React.ReactElement, {
                        iconOnly: true,
                        mode: 'popup',
                    })
                );
            });
            cy.get('li.next-nav-sub-nav-item').first().not('.next-nav-item.next-opened');
        });

        it('should support iconOnly', () => {
            cy.mount(
                <Nav iconOnly style={{ width: '200px' }}>
                    <Item icon="account" key="1">
                        First
                    </Item>
                    <Item key="2">Second</Item>
                    <SubNav icon="account" label="SubNav label">
                        <Item icon="account" key="1">
                            First
                        </Item>
                        <Item icon="account" key="2">
                            Second
                        </Item>
                    </SubNav>
                    <SubNav label="SubNav label">
                        <Item icon="account" key="1">
                            First
                        </Item>
                        <Item icon="account" key="2">
                            Second
                        </Item>
                    </SubNav>
                    <PopupItem icon="account" label="PopupItem label">
                        <Item icon="account" key="1">
                            First
                        </Item>
                        <Item icon="account" key="2">
                            Second
                        </Item>
                    </PopupItem>
                    <PopupItem label="PopupItem label">
                        <Item icon="account" key="1">
                            First
                        </Item>
                        <Item icon="account" key="2">
                            Second
                        </Item>
                    </PopupItem>
                    <Group label="Group label">
                        <Item icon="account" key="1">
                            First
                        </Item>
                        <Item icon="account" key="2">
                            Second
                        </Item>
                    </Group>
                </Nav>
            ).as('el');

            cy.get('ul.next-nav')
                .should('have.class', 'next-icon-only')
                .should('have.css', 'width', '58px');
            cy.get('li.next-nav-item').first().find('i.next-nav-icon').should('exist');
            cy.get('li.next-nav-item').eq(1).find('i.next-nav-icon').should('not.exist');
            cy.get('li.next-nav-sub-nav-item')
                .first()
                .find('i.next-icon-arrow-down.next-nav-icon-only-arrow')
                .should('exist');
            cy.get('li.next-nav-sub-nav-item')
                .eq(1)
                .find('i.next-icon-arrow-down.next-nav-icon-only-arrow')
                .should('exist');
            cy.get('li.next-nav-popup-item')
                .first()
                .find('i.next-icon-arrow-right.next-nav-icon-only-arrow')
                .should('exist');
            cy.get('li.next-nav-popup-item')
                .eq(1)
                .find('i.next-icon-arrow-right.next-nav-icon-only-arrow')
                .should('exist');
            cy.get('li.next-nav-group-label').find('.next-menu-item-inner > span').should('exist');

            cy.get<MountReturn>('@el')
                .then(({ component, rerender }) => {
                    return rerender(
                        React.cloneElement(component as React.ReactElement, {
                            mode: 'popup',
                        })
                    );
                })
                .as('el1');
            cy.get('ul.next-nav')
                .find('li.next-nav-sub-nav-item')
                .first()
                .find('i.next-icon-arrow-right.next-nav-icon-only-arrow')
                .should('exist');
            cy.get('ul.next-nav')
                .find('li.next-nav-sub-nav-item')
                .eq(1)
                .find('i.next-icon-arrow-right.next-nav-icon-only-arrow')
                .should('exist');

            cy.get<MountReturn>('@el1').then(({ component, rerender }) => {
                return rerender(
                    React.cloneElement(component as React.ReactElement, {
                        hasArrow: false,
                        hasTooltip: true,
                    })
                );
            });
            cy.get('ul.next-nav')
                .find('li.next-nav-sub-nav-item')
                .first()
                .find('i.next-nav-icon')
                .should('exist');
            cy.get('ul.next-nav')
                .find('li.next-nav-sub-nav-item')
                .eq(1)
                .find('.next-menu-item-text > span')
                .should('exist');
            cy.get('ul.next-nav')
                .find('li.next-nav-popup-item')
                .first()
                .find('i.next-nav-icon')
                .should('exist');
            cy.get('ul.next-nav')
                .find('li.next-nav-popup-item')
                .eq(1)
                .find('.next-menu-item-text > span')
                .should('exist');
            // test mouseover
            cy.get('ul.next-nav').find('li.next-nav-item').first().trigger('mouseover');
            cy.get('ul.next-nav')
                .find('li.next-nav-item')
                .first()
                .should('have.attr', 'aria-expanded', 'true');
            // test opened
            cy.get('.next-overlay-wrapper.opened').should('have.text', 'First');
        });

        it('should support iconOnly switch state', () => {
            cy.mount(
                <Nav
                    iconOnly={false}
                    mode={'inline'}
                    style={{ width: '200px' }}
                    openKeys="icononly-switch-subnav"
                >
                    <SubNav icon="account" label="SubNav label" key="icononly-switch-subnav">
                        <Item icon="account" key="1" id="icononly-switch-item-1">
                            First
                        </Item>
                        <Item icon="account" key="2" id="icononly-switch-item-2">
                            Second
                        </Item>
                    </SubNav>
                </Nav>
            ).as('el');
            cy.get('#icononly-switch-item-1').should('have.css', 'padding-left', '40px');
            cy.get('#icononly-switch-item-2').should('have.css', 'padding-left', '40px');

            cy.get<MountReturn>('@el')
                .then(({ component, rerender }) => {
                    return rerender(
                        React.cloneElement(component as React.ReactElement, {
                            iconOnly: true,
                            mode: 'popup',
                        })
                    );
                })
                .as('el1');
            cy.get('#icononly-switch-item-1').should('have.css', 'padding-left', '20px');
            cy.get('#icononly-switch-item-2').should('have.css', 'padding-left', '20px');

            cy.get<MountReturn>('@el1').then(({ component, rerender }) => {
                return rerender(
                    React.cloneElement(component as React.ReactElement, {
                        iconOnly: false,
                        mode: 'inline',
                    })
                );
            });
            cy.get('#icononly-switch-item-1').should('have.css', 'padding-left', '40px');
            cy.get('#icononly-switch-item-2').should('have.css', 'padding-left', '40px');
        });

        it('should support fixed', () => {
            cy.mount(
                <Nav
                    style={{ left: 0, top: 0, position: 'fixed', width: 70 }}
                    popupStyle={{ position: 'fixed' }}
                    popupClassName="fixed-popup-sub3"
                    type="primary"
                    mode="popup"
                    defaultOpenKeys="sub3"
                    activeDirection="left"
                    triggerType="click"
                >
                    <SubNav label="产品1">
                        <Item>Item 1</Item>
                    </SubNav>
                    <SubNav label="产品2">
                        <Item>Item 1</Item>
                        <Item>Item 2</Item>
                    </SubNav>
                    <SubNav label="产品3" key="sub3">
                        <Item>Item 1</Item>
                        <Item>Item 2</Item>
                        <Item>Item 3</Item>
                    </SubNav>
                    <Item>其他</Item>
                </Nav>
            );
            cy.get('.next-overlay-inner')
                .first()
                .should('have.css', 'top', '80px')
                .should('have.css', 'left', '70px');
        });
    });
});
