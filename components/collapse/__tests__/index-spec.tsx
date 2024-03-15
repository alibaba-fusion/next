import React, { type ReactElement } from 'react';
import Collapse from '../index';
import '../style';

const Panel = Collapse.Panel;

describe('Collapse', () => {
    describe('render', () => {
        it('[normal] Should render null', () => {
            cy.mount(<Collapse />);
            cy.get('.next-collapse').should('have.length', 1);
        });
        it('[normal] Should render from children', () => {
            cy.mount(
                <Collapse>
                    <Panel title="Pannel Title">Pannel Content</Panel>
                    <Panel title="Pannel Title">Pannel Content</Panel>
                    <div>others</div>
                </Collapse>
            );
            cy.get('.next-collapse').should('have.length', 1);
            cy.get('.next-collapse-panel').should('have.length', 2);
        });

        it('hidden panel should be hidden', () => {
            cy.mount(
                <Collapse>
                    <Panel title="Pannel Title">Pannel Content</Panel>
                    <Panel title="Pannel Title">Pannel Content</Panel>
                </Collapse>
            );
            cy.get('.next-collapse-panel-hidden').should('have.length', 2);
        });

        it('Should render from dataSource', () => {
            const list = [
                {
                    title: 'Well, hello there',
                    content:
                        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
                },
                {
                    title: 'Well, hello there',
                    content:
                        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
                },
            ];
            cy.mount(<Collapse dataSource={list} />);
            cy.get('.next-collapse-panel').should('have.length', 2);
        });

        it('should default expand keys passed in `defaultExpandedKeys`', () => {
            cy.mount(
                <Collapse defaultExpandedKeys={[]}>
                    <Panel title="Pannel Title">Pannel Content</Panel>
                    <Panel title="Pannel Title">Pannel Content</Panel>
                    <div>others</div>
                </Collapse>
            );
            cy.get('.next-collapse').should('have.length', 1);
            cy.get('.next-collapse-panel').should('have.length', 2);
        });
    });

    describe('defaultExpandedKeys', () => {
        describe('default mode', () => {
            it('should expand panel with string key', () => {
                cy.mount(
                    <Collapse defaultExpandedKeys={['2']}>
                        <Panel title="Pannel Title">Pannel Content</Panel>
                        <Panel title="Pannel Title">Pannel Content</Panel>
                        <Panel title="Pannel Title">Pannel Content</Panel>
                        <Panel title="Pannel Title">Pannel Content</Panel>

                        <div>others</div>
                    </Collapse>
                );
                cy.get('.next-collapse-panel')
                    .eq(2)
                    .should('have.class', 'next-collapse-panel-expanded');
            });

            it('should expand panel with number key', () => {
                cy.mount(
                    <Collapse defaultExpandedKeys={[2]}>
                        <Panel title="Pannel Title">Pannel Content</Panel>
                        <Panel title="Pannel Title">Pannel Content</Panel>
                        <Panel title="Pannel Title">Pannel Content</Panel>
                        <Panel title="Pannel Title">Pannel Content</Panel>

                        <div>others</div>
                    </Collapse>
                );
                cy.get('.next-collapse-panel')
                    .eq(2)
                    .should('have.class', 'next-collapse-panel-expanded');
            });

            it('should close default expanded string keys', () => {
                cy.mount(
                    <Collapse defaultExpandedKeys={['2']}>
                        <Panel title="Pannel Title">Pannel Content</Panel>
                        <Panel title="Pannel Title">Pannel Content</Panel>
                        <Panel title="Pannel Title">Pannel Content</Panel>
                        <Panel title="Pannel Title">Pannel Content</Panel>

                        <div>others</div>
                    </Collapse>
                );
                cy.get('.next-collapse-panel').eq(2).as('secondPanel');
                cy.get('@secondPanel').find('.next-collapse-panel-title').click();
                cy.get('@secondPanel').should('not.have.class', 'next-collapse-panel-expanded');
            });

            it('should close default expanded number keys', () => {
                cy.mount(
                    <Collapse defaultExpandedKeys={[2]}>
                        <Panel title="Pannel Title">Pannel Content</Panel>
                        <Panel title="Pannel Title">Pannel Content</Panel>
                        <Panel title="Pannel Title">Pannel Content</Panel>
                        <Panel title="Pannel Title">Pannel Content</Panel>

                        <div>others</div>
                    </Collapse>
                );
                cy.get('.next-collapse-panel').eq(2).as('secondPanel');
                cy.get('@secondPanel').find('.next-collapse-panel-title').click();
                cy.get('@secondPanel').should('not.have.class', 'next-collapse-panel-expanded');
            });

            it('should open default expanded datasource using number keys', () => {
                const list = [
                    {
                        title: 'Well, hello there',
                        key: 0,
                        content:
                            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
                    },
                    {
                        title: 'Well, hello there',
                        key: 1,
                        content:
                            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
                    },
                ];
                cy.mount(<Collapse dataSource={list} defaultExpandedKeys={[1]} />);
                cy.get('.next-collapse-panel')
                    .eq(1)
                    .should('have.class', 'next-collapse-panel-expanded');
            });

            it('should close default expanded datasource using number keys on click', () => {
                const list = [
                    {
                        title: 'Well, hello there',
                        key: 0,
                        content:
                            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
                    },
                    {
                        title: 'Well, hello there',
                        key: 1,
                        content:
                            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
                    },
                ];
                cy.mount(<Collapse dataSource={list} defaultExpandedKeys={[1]} />);
                cy.get('.next-collapse-panel-title').eq(1).click();
                cy.get('.next-collapse-panel-expanded').should('have.length', 0);
            });
        });

        describe('accordian mode', () => {
            it('should expand panel with string key', () => {
                cy.mount(
                    <Collapse defaultExpandedKeys={['2']} accordion>
                        <Panel title="Pannel Title">Pannel Content</Panel>
                        <Panel title="Pannel Title">Pannel Content</Panel>
                        <Panel title="Pannel Title">Pannel Content</Panel>
                        <Panel title="Pannel Title">Pannel Content</Panel>

                        <div>others</div>
                    </Collapse>
                );
                cy.get('.next-collapse-panel')
                    .eq(2)
                    .should('have.class', 'next-collapse-panel-expanded');
            });

            it('should expand panel with number key', () => {
                cy.mount(
                    <Collapse defaultExpandedKeys={[2]} accordion>
                        <Panel title="Pannel Title">Pannel Content</Panel>
                        <Panel title="Pannel Title">Pannel Content</Panel>
                        <Panel title="Pannel Title">Pannel Content</Panel>
                        <Panel title="Pannel Title">Pannel Content</Panel>

                        <div>others</div>
                    </Collapse>
                );
                cy.get('.next-collapse-panel')
                    .eq(2)
                    .should('have.class', 'next-collapse-panel-expanded');
            });

            it('should close default expanded string keys', () => {
                cy.mount(
                    <Collapse defaultExpandedKeys={['2']} accordion>
                        <Panel title="Pannel Title">Pannel Content</Panel>
                        <Panel title="Pannel Title">Pannel Content</Panel>
                        <Panel title="Pannel Title">Pannel Content</Panel>
                        <Panel title="Pannel Title">Pannel Content</Panel>

                        <div>others</div>
                    </Collapse>
                );
                cy.get('.next-collapse-panel').eq(2).as('secondPanel');
                cy.get('@secondPanel').find('.next-collapse-panel-title').click();
                cy.get('@secondPanel').should('not.have.class', 'next-collapse-panel-expanded');
            });

            it('should close default expanded number keys', () => {
                cy.mount(
                    <Collapse defaultExpandedKeys={[2]} accordion>
                        <Panel title="Pannel Title">Pannel Content</Panel>
                        <Panel title="Pannel Title">Pannel Content</Panel>
                        <Panel title="Pannel Title">Pannel Content</Panel>
                        <Panel title="Pannel Title">Pannel Content</Panel>

                        <div>others</div>
                    </Collapse>
                );
                cy.get('.next-collapse-panel').eq(2).as('secondPanel');
                cy.get('@secondPanel').find('.next-collapse-panel-title').click();
                cy.get('@secondPanel').should('not.have.class', 'next-collapse-panel-expanded');
            });

            it('should open default expanded datasource using number keys', () => {
                const list = [
                    {
                        title: 'Well, hello there',
                        key: 0,
                        content:
                            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
                    },
                    {
                        title: 'Well, hello there',
                        key: 1,
                        content:
                            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
                    },
                ];
                cy.mount(<Collapse dataSource={list} defaultExpandedKeys={[1]} accordion />);

                cy.get('.next-collapse-panel')
                    .eq(1)
                    .should('have.class', 'next-collapse-panel-expanded');
            });

            it('should close default expanded datasource using number keys on click', () => {
                const list = [
                    {
                        title: 'Well, hello there',
                        key: 0,
                        content:
                            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
                    },
                    {
                        title: 'Well, hello there',
                        key: 1,
                        content:
                            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
                    },
                ];
                cy.mount(<Collapse dataSource={list} defaultExpandedKeys={[1]} accordion />);
                cy.get('.next-collapse-panel-title').eq(1).click();
                cy.get('.next-collapse-panel-expanded').should('have.length', 0);
            });
        });
    });

    describe('event', () => {
        it('Should expanded by click', () => {
            const collapse = (
                <Collapse>
                    <Panel title="Pannel Title1">Pannel Content1</Panel>
                    <Panel title="Pannel Title2">Pannel Content2</Panel>
                    <Panel title="Pannel Title3">Pannel Content3</Panel>
                </Collapse>
            );
            cy.mount(collapse);
            cy.get('.next-collapse-panel-title').first().click();
            cy.get('.next-collapse-panel-expanded').should('have.length', 1);
            cy.get('.next-collapse-panel-title').eq(1).click();
            cy.get('.next-collapse-panel-expanded').should('have.length', 2);
            cy.get('.next-collapse-panel-title').eq(1).click();
            cy.get('.next-collapse-panel-expanded').should('have.length', 1);
        });

        it('Should expanded by space key', () => {
            const collapse = (
                <Collapse id="test-id">
                    <Panel title="Pannel Title1">Pannel Content1</Panel>
                    <Panel title="Pannel Title2">Pannel Content2</Panel>
                    <Panel title="Pannel Title3">Pannel Content3</Panel>
                </Collapse>
            );
            cy.mount(collapse);

            cy.get('.next-collapse-panel-title').first().trigger('keydown', { keyCode: 32 });
            cy.get('.next-collapse-panel-expanded').should('have.length', 1);
            cy.get('.next-collapse-panel-title').eq(1).trigger('keydown', { keyCode: 32 });
            cy.get('.next-collapse-panel-expanded').should('have.length', 2);
            cy.get('.next-collapse-panel-title').eq(1).trigger('keydown', { keyCode: 32 });
            cy.get('.next-collapse-panel-expanded').should('have.length', 1);
        });
        it('should support accordion', () => {
            const collapse = (
                <Collapse accordion>
                    <Panel title="Pannel Title1">Pannel Content1</Panel>
                    <Panel title="Pannel Title2">Pannel Content2</Panel>
                    <Panel title="Pannel Title3">Pannel Content3</Panel>
                </Collapse>
            );
            cy.mount(collapse);
            cy.get('.next-collapse-panel-title').first().click();
            cy.get('.next-collapse-panel-expanded').should('have.length', 1);
            cy.get('.next-collapse-panel-title').eq(1).click();
            cy.get('.next-collapse-panel-expanded').should('have.length', 1);
            cy.get('.next-collapse-panel-title').eq(2).click();
            cy.get('.next-collapse-panel-expanded').should('have.length', 1);
        });

        it('disabled', () => {
            const collapse = (
                <Collapse disabled>
                    <Panel title="Pannel Title">Pannel Content</Panel>
                </Collapse>
            );
            cy.mount(collapse);
            cy.get('.next-collapse-panel-title').first().click();
            cy.get('.next-collapse-panel-expanded').should('have.length', 0);
        });

        it('[onExpand] Call when the trigger', () => {
            const onExpand = cy.spy();
            const collapse = (
                <Collapse onExpand={onExpand}>
                    <Panel title="Pannel Title1">Pannel Content1</Panel>
                    <Panel title="Pannel Title2">Pannel Content2</Panel>
                </Collapse>
            );
            cy.mount(collapse);
            cy.get('.next-collapse-panel-title').first().click();
            cy.wrap(onExpand).should('be.calledOnce');
        });

        it('under Control', () => {
            const collapse = (
                <Collapse expandedKeys={['1']}>
                    <Panel title="Pannel Title1">Pannel Content1</Panel>
                    <Panel title="Pannel Title2">Pannel Content2</Panel>
                </Collapse>
            );
            cy.mount(collapse);
            cy.get('.next-collapse-panel-title').first().click();
            cy.get('.next-collapse-panel-expanded').should('have.length', 1);
        });
    });
    describe('react api', () => {
        it('calls componentWillReceiveProps', () => {
            const collapse = (
                <Collapse>
                    <Panel title="Pannel Title">Pannel Content</Panel>
                </Collapse>
            );
            cy.mount(collapse).then(({ component, rerender }) => {
                return rerender(
                    React.cloneElement(component as ReactElement, { expandedKeys: ['0'] })
                );
            });

            cy.get('.next-collapse-panel-expanded').should('have.length', 1);
        });
    });
    describe('panel', () => {
        it('id should be auto add', () => {
            const collapse = (
                <Collapse>
                    <Panel id="test-id-1" title="Pannel Title">
                        Pannel Content
                    </Panel>
                </Collapse>
            );
            cy.mount(collapse);
            cy.get('#test-id-1-heading').should('have.length', 1);
            cy.get('#test-id-1-region').should('have.length', 1);
        });
        it('all id should be auto add', () => {
            const collapse = (
                <Collapse id="test-id-2">
                    <Panel title="Pannel Title 1">Pannel Content</Panel>
                    <Panel title="Pannel Title 2">Pannel Content</Panel>
                </Collapse>
            );
            cy.mount(collapse);
            cy.get('.next-collapse#test-id-2').should('have.length', 1);
            cy.get('.next-collapse-panel').should('have.length', 2);
            cy.get('.next-collapse-panel').eq(0).should('have.attr', 'id');
            cy.get('.next-collapse-panel').eq(1).should('have.attr', 'id');
        });
    });
});
