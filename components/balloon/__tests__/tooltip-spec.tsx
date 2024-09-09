import React from 'react';
import Balloon from '../index';
import Button from '../../button';
import '../style';

const Tooltip = Balloon.Tooltip;
const trigger = (
    <span className="trigger" onMouseEnter={() => {}}>
        xiachi
    </span>
);
describe('Tooltip', () => {
    // trigger 不传，默认用空的<span></span>填充
    it('trigger default is span', () => {
        cy.mount(<Tooltip>test</Tooltip>);
        cy.get('span').should('have.length', 1);
    });

    it('tooltip should have the trigger element', () => {
        cy.mount(
            <Tooltip trigger={trigger} triggerType="hover">
                i am tooltip content
            </Tooltip>
        );
        cy.get('.trigger').should('have.text', 'xiachi');
    });

    it('text not string should throw an error', () => {
        cy.on('uncaught:exception', err => {
            expect(err).to.be.an.instanceOf(Error);
            return false;
        });
        cy.mount(
            <Tooltip trigger={trigger} text={2} triggerType="hover">
                i am tooltip content
            </Tooltip>
        );
    });

    it('trigger is disabled button, hover enter and leave, popup should not resolve', () => {
        cy.mount(
            <Tooltip
                trigger={
                    <Button disabled id="balloon-btn" style={{ color: 'red', display: 'inline' }}>
                        button
                    </Button>
                }
                triggerType="hover"
            >
                i am tooltip content
            </Tooltip>
        );
        cy.get('span').trigger('mouseover');
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(300);
        cy.get('.next-balloon-tooltip').should('not.exist');
    });

    it('trigger can be string', () => {
        cy.mount(
            <Tooltip trigger="trigger" triggerType="hover">
                i am tooltip content
            </Tooltip>
        );
        cy.get('span').trigger('mouseover');
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(300);
        cy.get('.next-balloon-tooltip').should('exist');
    });

    it('add mouseEnterDelay and mouseLeaveDelay, with higher priority than delay.', () => {
        cy.mount(
            <Tooltip
                trigger={<div className="trigger">trigger1111111</div>}
                delay={500}
                mouseEnterDelay={1000}
                mouseLeaveDelay={1000}
            >
                test
            </Tooltip>
        );
        cy.get('.trigger').trigger('mouseover');
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(500);
        cy.get('.next-balloon-tooltip').should('not.exist');

        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(550);
        cy.get('.next-balloon-tooltip').should('exist');

        cy.get('.trigger').trigger('mouseout');
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(500);
        cy.get('.next-balloon-tooltip').should('exist');

        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(1000);
        cy.get('.next-balloon-tooltip').should('not.exist');
    });
});
