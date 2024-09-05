import React from 'react';
import Button from '../../button';
import Card from '../index';
import '../style';

describe('Card', () => {
    const commonProps = {
        style: { width: 300 },
        title: 'Title',
        subTitle: 'sub title',
        extra: 'Link',
    };

    describe('render', () => {
        it('should render card', () => {
            cy.mount(<Card {...commonProps}>Card content</Card>);
            cy.get('.next-card').should('have.length', 1);
            cy.get('.next-card-head-show-bullet').should('have.length', 1);
            cy.get('.next-card-head-show-underline').should('not.exist');
        });

        it('should render without title bullet', () => {
            cy.mount(
                <Card {...commonProps} showTitleBullet={false}>
                    Card Content
                </Card>
            );
            cy.get('.next-card-head-show-bullet').should('not.exist');
        });

        it('should render without head underline', () => {
            cy.mount(
                <Card {...commonProps} showHeadDivider={false}>
                    Card Content
                </Card>
            );
            cy.get('.next-card-head-show-underline').should('not.exist');
        });

        it('should render without head', () => {
            cy.mount(
                <Card {...commonProps} title={null}>
                    Card Content
                </Card>
            );
            cy.get('.next-card-head').should('not.exist');
        });

        it('should render media & actions', () => {
            cy.mount(
                <Card
                    {...commonProps}
                    media={
                        <img src="https://img.alicdn.com/tfs/TB1FNIOSFXXXXaWXXXXXXXXXXXX-260-188.png" />
                    }
                    actions={
                        <Button text type="primary">
                            Button
                        </Button>
                    }
                >
                    Card Content
                </Card>
            );
            cy.get('.next-card-media').should('exist');
            cy.get('.next-card-actions').should('exist');
        });

        it('should render when contentHeight is auto', () => {
            cy.mount(
                <Card {...commonProps} title="Card Title" contentHeight="300">
                    Card Content <br />
                    Card Content <br />
                    Card Content <br />
                    Card Content <br />
                    Card Content <br />
                    Card Content <br />
                    Card Content <br />
                    Card Content <br />
                    Card Content <br />
                    Card Content <br />
                    Card Content <br />
                    Card Content <br />
                    Card Content <br />
                    Card Content <br />
                    Card Content <br />
                    Card Content <br />
                    Card Content <br />
                    Card Content <br />
                    Card Content <br />
                    Card Content <br />
                    Card Content <br />
                    Card Content <br />
                    Card Content <br />
                </Card>
            ).as('Demo');

            cy.get('.next-card-content').should('have.css', 'height', '300px');

            cy.rerender('Demo', {
                contentHeight: 'auto',
            });
            cy.get('.next-card-content').should($element => {
                const height = parseInt($element.css('height'), 10);
                expect(height).to.be.greaterThan(400);
            });
        });

        it('should render free', () => {
            cy.mount(
                <Card style={{ width: 300 }} free>
                    <Card.Media>
                        <img src="https://img.alicdn.com/tfs/TB1FNIOSFXXXXaWXXXXXXXXXXXX-260-188.png" />
                    </Card.Media>
                    <Card.Header
                        title="Title"
                        subTitle="Sub Title"
                        extra={
                            <Button type="primary" text>
                                Link
                            </Button>
                        }
                    />
                    <Card.Divider />
                    <Card.Content>Card Content</Card.Content>
                    <Card.Actions>
                        <Button type="primary" key="action1" text>
                            Action 1
                        </Button>
                        <Button type="primary" key="action2" text>
                            Action 2
                        </Button>
                    </Card.Actions>
                </Card>
            );
            cy.get('.next-card-free').should('exist');
        });
    });

    describe('action', () => {
        it('should expand card', () => {
            cy.mount(
                <Card {...commonProps}>
                    <div style={{ height: 600 }} />
                </Card>
            );
            cy.get('.next-icon-arrow-down').should('not.have.class', 'expand');
            cy.get('Button').click();
            cy.get('.next-icon-arrow-down').should('have.class', 'expand');
        });
    });
});
