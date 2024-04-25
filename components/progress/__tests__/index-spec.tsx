import React from 'react';
import Progress from '../index';

function getCirclePercent(pathSelect: string) {
    const pathEl = document.querySelector(pathSelect) as SVGPathElement;
    const total = pathEl.getTotalLength();
    const offset = parseFloat(pathEl.getAttribute('stroke-dashoffset')!);
    return Math.round(((total - offset) / total) * 100);
}

describe('Line', () => {
    describe('render', () => {
        it('should render a line progress', () => {
            cy.mount(<Progress percent={30} />);
            cy.get('.next-progress-line-overlay').then($element => {
                const width = $element[0].style.width;
                expect(width).to.eq('30%');
            });
        });

        it('should render a line progress without text', () => {
            cy.mount(<Progress percent={30} textRender={() => false} />);
            cy.get('.next-progress-line-text').should('have.length', 0);
        });

        it('should render a line progress use custom text', () => {
            cy.mount(<Progress percent={66} textRender={percent => `${percent}/100`} />);
            cy.get('.next-progress-line-text').should('have.text', '66/100');
        });

        it('should render a line progress with border', () => {
            cy.mount(<Progress percent={66} hasBorder />);
            cy.get('.next-progress-line-show-border').should('have.length', 1);
        });

        it('should render a line progress with custom background color', () => {
            cy.mount(<Progress percent={66} backgroundColor={'blue'} />);
            cy.get('.next-progress-line-underlay').should(
                'have.css',
                'background-color',
                'rgb(0, 0, 255)'
            );
        });
    });

    describe('action', () => {
        it('should change percent', () => {
            cy.mount(<Progress percent={30} />).as('progress');
            cy.get('.next-progress-line-overlay').then($element => {
                const width = $element[0].style.width;
                expect(width).to.eq('30%');
            });
            cy.rerender('progress', { percent: 60 });
            cy.get('.next-progress-line-overlay').then($element => {
                const width = $element[0].style.width;
                expect(width).to.eq('60%');
            });
        });

        it('should change style in progressive mode', () => {
            cy.mount(<Progress percent={30} progressive />).as('progress');
            cy.get('.next-progress-line-overlay-started').should('have.length', 1);
            cy.rerender('progress', { percent: 60 });
            cy.get('.next-progress-line-overlay-middle').should('have.length', 1);
            cy.rerender('progress', { percent: 90 });
            cy.get('.next-progress-line-overlay-finishing').should('have.length', 1);
        });
    });
});

describe('Circle', () => {
    describe('render', () => {
        it('should render a circle progress', () => {
            cy.mount(<Progress percent={30} shape="circle" />);
            cy.get('.next-progress-circle-overlay').should('have.length', 1);
        });

        it('should render a circle progress without text', () => {
            cy.mount(<Progress percent={30} textRender={() => false} shape="circle" />);
            cy.get('.next-progress-circle-text').should('have.length', 0);
        });

        it('should render a circle progress use custom text', () => {
            cy.mount(
                <Progress percent={66} textRender={percent => `${percent}/10`} shape="circle" />
            );
            cy.get('.next-progress-circle-text').should('have.text', '66/10');
        });

        it('should render a circle progress with custom background color', () => {
            cy.mount(<Progress percent={66} backgroundColor="#ff0000" shape="circle" />);
            cy.get('.next-progress-circle-underlay').should('have.css', 'stroke', 'rgb(255, 0, 0)');
        });
    });

    describe('action', () => {
        it('should change percent', () => {
            cy.mount(<Progress percent={30} shape="circle" />).as('progress');
            cy.get('.next-progress-circle-overlay').then(() => {
                expect(30).to.eq(getCirclePercent('.next-progress-circle-overlay'));
            });
            cy.rerender('progress', { percent: 60 });
            cy.get('.next-progress-circle-overlay').then(() => {
                expect(60).to.eq(getCirclePercent('.next-progress-circle-overlay'));
            });
        });

        it('should change style in progressive mode', () => {
            cy.mount(<Progress percent={30} shape="circle" progressive />).as('progress');
            cy.get('.next-progress-circle-overlay-started').should('have.length', 1);
            cy.rerender('progress', { percent: 60 });
            cy.get('.next-progress-circle-overlay-middle').should('have.length', 1);
            cy.rerender('progress', { percent: 90 });
            cy.get('.next-progress-circle-overlay-finishing').should('have.length', 1);
        });
    });
});
