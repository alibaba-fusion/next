import React, { ChangeEventHandler } from 'react';
import { support } from '../../util';
import Badge from '../index';
import '../style';

describe('Badge', () => {
    it("should have next-badge-not-a-wrapper class if don't pass children", () => {
        cy.mount(<Badge />);
        cy.get('.next-badge.next-badge-not-a-wrapper');
        cy.mount(
            <Badge>
                <a>some link</a>
            </Badge>
        );
        cy.get('.next-badge.next-badge-not-a-wrapper').should('not.exist');
    });

    it('should receive className prop', () => {
        cy.mount(<Badge className="custom" />);
        cy.get('.next-badge.custom');
    });

    it('should receive style prop', () => {
        cy.mount(<Badge dot style={{ color: 'green' }} />);
        cy.get('.next-badge sup').should('have.css', 'color', 'rgb(0, 128, 0)');
    });

    it('should receive content prop', () => {
        cy.mount(<Badge content="hot" />);
        cy.get('.next-badge sup.next-badge-custom').should('have.text', 'hot');
    });

    class Test extends React.Component {
        state = {
            count: 0,
        };

        handleChange: ChangeEventHandler<HTMLInputElement> = e => {
            this.setState({
                count: Number(e.target.value),
            });
        };

        render() {
            return (
                <div>
                    <input type="text" id="input" onChange={this.handleChange} />
                    <Badge count={this.state.count} />
                </div>
            );
        }
    }
    const enterNumber = async (num: number) => {
        cy.get('#input').clear();
        cy.get('#input').type(num.toString());
    };
    const expectStyle = (removeTransition: boolean, position: number, index: number = 0) => {
        cy.get('.next-badge .next-badge-scroll-number-only').eq(index).as('number');
        const transformTo = position * 16;
        if (support.animation) {
            const expectTransition = () => {
                if (removeTransition) {
                    cy.get('@number').should('have.css', 'transition', 'none');
                } else {
                    cy.get('@number').should(
                        'have.css',
                        'transition',
                        'transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1), -webkit-transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1)'
                    );
                }
            };
            expectTransition();
            cy.get('@number').should(
                'have.css',
                'transform',
                `matrix(1, 0, 0, 1, 0, -${transformTo})`
            );
        } else {
            cy.get('@number').should('have.css', 'top', -transformTo);
        }
    };

    it('should render by count part one', () => {
        cy.mount(<Test />);
        cy.get('.next-badge sup').should('not.exist');
        enterNumber(1);
        expectStyle(true, 11);
        enterNumber(2);
        expectStyle(true, 12);
        enterNumber(1);
        expectStyle(true, 11);
        enterNumber(0);
        cy.get('.next-badge sup').should('not.exist');
    });

    it('should render by count part two', () => {
        cy.mount(<Test />);
        enterNumber(9);
        enterNumber(10);
        expectStyle(true, 11);
        expectStyle(true, 10, 1);
        enterNumber(9);
        expectStyle(true, 19);
    });

    it('should render by overflowCount', () => {
        cy.mount(<Test />);
        enterNumber(100);
        cy.get('.next-badge sup').should('have.text', '99+');
        enterNumber(99);
        expectStyle(true, 19);
        expectStyle(true, 19, 1);
    });

    it('should show zero when count is even zero by setting showZero', () => {
        cy.mount(<Badge count={0} showZero />);
        cy.get('.next-badge-count.next-badge-scroll-number');
    });
});
