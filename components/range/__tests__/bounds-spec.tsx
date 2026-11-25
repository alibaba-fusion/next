import React from 'react';
import Range from '../index';
import '../style';

describe('Range bounds changes while dragging', () => {
    it('commits the visible endpoint when max drops during a drag', () => {
        const onChange = cy.spy().as('onChange');
        cy.mount(<Range defaultValue={20} style={{ width: 100 }} onChange={onChange} />).as('el');
        cy.get('.next-range-slider').trigger('mousedown', { button: 0, pageX: 20 });
        cy.get('.next-range-slider').trigger('mousemove', { type: 'mousemove', pageX: 80 });
        cy.rerender('el', { max: 60 });
        cy.get('.next-range-selected').should($selected => {
            expect($selected[0].style.width).equal('100%');
        });
        cy.get('.next-range-slider').trigger('mouseup');
        cy.get('@onChange').should('have.been.calledWith', 60);
    });
});
