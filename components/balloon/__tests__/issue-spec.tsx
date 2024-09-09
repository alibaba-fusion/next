import React from 'react';
import Balloon from '../index';
import '../style';

describe('Balloon issues', function () {
    describe('https://github.com/alibaba-fusion/next/issues/4137', function () {
        it('autoAdjust when in the fixed box and followTrigger=true', function () {
            cy.mount(
                <div>
                    <div style={{ position: 'fixed', bottom: 0, left: 10 }}>
                        <Balloon
                            v2
                            triggerType="click"
                            title="Balloon Title"
                            trigger={<button className="trigger">trigger</button>}
                            align="t"
                            followTrigger
                            animation={false}
                        >
                            long overlay content,long overlay content,long overlay content,long
                            overlay content,long overlay content,long overlay content,long overlay
                            content
                        </Balloon>
                    </div>
                </div>
            );
            cy.get('.trigger').trigger('click');
            cy.get('.next-balloon').should('exist');

            cy.get('.next-balloon')
                .should('exist')
                .then($overlay => {
                    const rect = $overlay[0].getBoundingClientRect();

                    expect(rect.left > 0);
                    const triggerHeight = document.querySelector('.trigger')!.clientHeight;
                    expect(
                        rect.top + rect.height + triggerHeight! <
                            document.documentElement.clientHeight
                    );
                });
        });
        it('autoAdjust when in the fixed box and followTrigger=false', function () {
            const overlayClassName = `overlay-${Math.random().toString(36).slice(2)}`;
            cy.mount(
                <div>
                    <div style={{ position: 'fixed', bottom: 0, left: 10 }}>
                        <Balloon
                            v2
                            triggerType="click"
                            title="Balloon Title"
                            trigger={<button className="trigger">trigger</button>}
                            align="t"
                            popupClassName={overlayClassName}
                            animation={false}
                            followTrigger={false}
                        >
                            long overlay content,long overlay content,long overlay content,long
                            overlay content,long overlay content,long overlay content,long overlay
                            content
                        </Balloon>
                    </div>
                </div>
            );

            cy.get('button').trigger('click');
            cy.get(`.${overlayClassName}.next-balloon-bottom-left`).should('exist');
        });
    });
});

describe('balloon delay', () => {
    it.only('add mouseEnterDelay and mouseLeaveDelay, with higher priority than delay.', () => {
        cy.mount(
            <Balloon
                trigger={<div className="trigger">trigger1111111</div>}
                delay={500}
                mouseEnterDelay={1000}
                mouseLeaveDelay={1000}
                triggerType="hover"
            >
                trigger
            </Balloon>
        );

        cy.get('.trigger').trigger('mouseover');

        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(500);
        cy.get('.next-balloon').should('not.exist');

        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(550);
        cy.get('.next-balloon').should('exist');

        cy.get('.trigger').trigger('mouseout');

        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(500);
        cy.get('.next-balloon').should('exist');

        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(1000);
        cy.get('.next-balloon').should('not.exist');
    });
});
