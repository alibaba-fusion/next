import React from 'react';
import Rating from '../index';
import '../style';
import { KEYCODE } from '../../util';

function triggerPosition(x: number, y: number, type: 'click' | 'mouseover') {
    cy.get(`.next-rating`).then(dom => {
        const rect = dom[0].getBoundingClientRect();
        cy.get('.next-rating-base').trigger(type, {
            pageX: rect.left + x,
            pageY: rect.top + y,
        });
    });
}

describe('Rating', () => {
    describe('render', () => {
        it('should render correct when value < min value', () => {
            cy.mount(<Rating value={-1} />);
            // 16 x 0 + 4 x (0 + 1) = 0 + 4 = 4
            cy.get('.next-rating-overlay').should('have.css', 'width', '4px');
        });

        it('should render correct rating', () => {
            cy.mount(<Rating value={3} />);

            // 16 x 3 + 4 x (3 + 1) = 48 + 16 = 64
            cy.get('.next-rating-overlay').should('have.css', 'width', '64px');
        });

        it('should render correct when value > count', () => {
            cy.mount(<Rating value={6} />);

            // 16 x 5 + 4 x (5 + 1) = 80 + 24 = 104
            cy.get('.next-rating-overlay').should('have.css', 'width', '104px');
        });

        it('should render with different types', () => {
            // 覆盖 componentWillReceiveProps 的 setState
            cy.mount(<Rating defaultValue={3.3} />).as('x');
            cy.rerender('x', { value: 3.3, showGrade: true });
            cy.get('.next-rating-grade-high').should('have.length', 1);
        });
    });

    describe.only('action', () => {
        // let ret, hval, parent, rect, onChange, onHoverChange;

        // beforeEach(() => {
        //     ret = -1;
        //     hval = -1;
        //     parent = document.createElement('div');
        //     document.body.appendChild(parent);
        //     onChange = function (val) {
        //         return (ret = val);
        //     };
        //     onHoverChange = function (val) {
        //         return (hval = val);
        //     };
        // });

        // afterEach(() => {
        //     document.body.removeChild(parent);
        //     parent = null;
        //     rect = null;
        //     onChange = null;
        //     onHoverChange = null;
        // });

        it('should be controlled ', () => {
            cy.mount(<Rating value={3} />);
            cy.get('.next-rating-overlay').should('have.css', 'width', '64px');
            triggerPosition(8, 8, 'click');
            cy.get('.next-rating-overlay').should('have.css', 'width', '64px');
        });

        it('should trigger click event', () => {
            const onChange = cy.spy();
            cy.mount(<Rating defaultValue={3} onChange={onChange} />);
            triggerPosition(8, 8, 'click');
            cy.wrap(onChange).should('be.calledOnceWith', 1);
        });

        it('should allowClear={false} work', () => {
            const onChange = cy.spy();
            cy.mount(<Rating defaultValue={3} onChange={onChange} />);
            triggerPosition(8, 8, 'click');
            triggerPosition(8, 8, 'click');
            cy.wrap(onChange).should('be.calledOnceWith', 1);
        });

        it('should allowClear={true} work', () => {
            const onChange = cy.spy();
            cy.mount(<Rating allowClear defaultValue={3} onChange={onChange} />);
            triggerPosition(8, 8, 'click');
            triggerPosition(8, 8, 'click');
            cy.wrap(onChange).should('be.calledTwice');
            cy.wrap(onChange).should('be.calledWith', 1);
            cy.wrap(onChange).should('be.calledWith', 0);
        });

        it('should trigger click event correct', () => {
            const onChange = cy.spy();
            cy.mount(<Rating defaultValue={3} onChange={onChange} />);
            triggerPosition(1000, 8, 'click');
            cy.wrap(onChange).should('be.calledOnceWith', 5);
        });

        it('should trigger mouse event', () => {
            cy.mount(<Rating defaultValue={3} />);
            triggerPosition(8, 8, 'mouseover');
            cy.get('.next-rating-overlay').should('have.css', 'width', '24px');
        });

        it('should trigger mouse event when allow half', () => {
            cy.mount(<Rating defaultValue={3} allowHalf />);
            triggerPosition(4, 8, 'mouseover');
            cy.get('.next-rating-overlay').should('have.css', 'width', '12px');
        });

        it('should trigger twice mouse over', () => {
            cy.mount(<Rating defaultValue={3} />);
            triggerPosition(4, 8, 'mouseover');
            triggerPosition(48, 8, 'mouseover');
            cy.get('.next-rating-overlay').should('have.css', 'width', '64px');
        });

        it('should trigger mouse leave', () => {
            cy.mount(<Rating defaultValue={3} />);
            triggerPosition(4, 8, 'mouseover');
            cy.get('.next-rating-overlay').should('have.css', 'width', '24px');
            cy.get('.next-rating-base').trigger('mouseout');
            cy.get('.next-rating-overlay').should('have.css', 'width', '64px');
        });

        it('should render disabled rating', () => {
            const onChange = cy.spy();
            cy.mount(<Rating value={3} disabled onChange={onChange} />);
            triggerPosition(8, 8, 'click');
            cy.wrap(onChange).should('not.be.called');
            cy.get('.next-rating-overlay').should('have.css', 'width', '64px');
        });

        it('should render readonly rating', () => {
            const onChange = cy.spy();
            cy.mount(<Rating value={3} readOnly onChange={onChange} />);
            triggerPosition(8, 8, 'click');
            cy.wrap(onChange).should('not.be.called');
            cy.get('.next-rating-overlay').should('have.css', 'width', '64px');
        });

        it('should renderPreview', () => {
            cy.mount(<Rating defaultValue={3} isPreview renderPreview={() => 'preview rating'} />);
            cy.get('.next-form-preview').should('have.text', 'preview rating');
        });

        it('should trigger mouse over', () => {
            const onHoverChange = cy.spy();
            cy.mount(<Rating onHoverChange={onHoverChange} />);
            triggerPosition(4, 8, 'mouseover');
            triggerPosition(48, 8, 'mouseover');
            cy.wrap(onHoverChange).should('be.calledTwice');
            cy.wrap(onHoverChange).should('be.calledWith', 1);
            cy.wrap(onHoverChange).should('be.calledWith', 3);
        });

        it('should trigger keyboard right event correct', () => {
            const onChange = cy.spy();
            cy.mount(<Rating defaultValue={3} onChange={onChange} />);
            cy.get('.next-rating').trigger('keydown', { keyCode: KEYCODE.RIGHT });
            cy.get('.next-rating').trigger('keydown', { keyCode: KEYCODE.ENTER });
            cy.wrap(onChange).should('be.calledOnceWith', 4);
        });

        it('should trigger keyboard left event correct', () => {
            const onChange = cy.spy();
            cy.mount(<Rating defaultValue={3} onChange={onChange} />);
            cy.get('.next-rating').trigger('keydown', { keyCode: KEYCODE.LEFT });
            cy.get('.next-rating').trigger('keydown', { keyCode: KEYCODE.ENTER });
            cy.wrap(onChange).should('be.calledOnceWith', 2);
        });

        it('should trigger keyboard down event correct', () => {
            const onChange = cy.spy();
            cy.mount(<Rating defaultValue={3} onChange={onChange} />);
            cy.get('.next-rating').trigger('keydown', { keyCode: KEYCODE.DOWN });
            cy.get('.next-rating').trigger('keydown', { keyCode: KEYCODE.ENTER });
            cy.wrap(onChange).should('be.calledOnceWith', 4);
        });

        it('should trigger keyboard up event correct', () => {
            const onChange = cy.spy();
            cy.mount(<Rating defaultValue={3} onChange={onChange} />);
            cy.get('.next-rating').trigger('keydown', { keyCode: KEYCODE.UP });
            cy.get('.next-rating').trigger('keydown', { keyCode: KEYCODE.ENTER });
            cy.wrap(onChange).should('be.calledOnceWith', 2);
        });

        it('should ignore unsupported keyboard event correct', () => {
            const onChange = cy.spy();
            cy.mount(<Rating defaultValue={3} onChange={onChange} />);
            cy.get('.next-rating').trigger('keydown', { keyCode: KEYCODE.SPACE });
            cy.get('.next-rating').trigger('keydown', { keyCode: KEYCODE.ENTER });
            cy.wrap(onChange).should('be.calledOnceWith', 3);
        });

        it('should trigger keyboard left event correct when value is 0', () => {
            const onChange = cy.spy();
            cy.mount(<Rating defaultValue={0} onChange={onChange} />);
            cy.get('.next-rating').trigger('keydown', { keyCode: KEYCODE.LEFT });
            cy.get('.next-rating').trigger('keydown', { keyCode: KEYCODE.ENTER });
            cy.wrap(onChange).should('be.calledOnceWith', 5);
        });

        it('should trigger keyboard right event correct when value is the count of rating', () => {
            const onChange = cy.spy();
            cy.mount(<Rating defaultValue={5} onChange={onChange} />);
            cy.get('.next-rating').trigger('keydown', { keyCode: KEYCODE.RIGHT });
            cy.get('.next-rating').trigger('keydown', { keyCode: KEYCODE.ENTER });
            cy.wrap(onChange).should('be.calledOnceWith', 1);
        });

        it('should behave correct when click outside rating', () => {
            const onChange = cy.spy();
            cy.mount(<Rating defaultValue={3} onChange={onChange} />);
            triggerPosition(-1000, 8, 'click');
            cy.wrap(onChange).should('not.be.called');
        });

        it('should support rtl', () => {
            cy.mount(<Rating rtl defaultValue={3} />);
            cy.get('.next-rating[dir="rtl"]').should('exist');
        });

        it('should support rtl in half mode', () => {
            cy.mount(<Rating rtl allowHalf defaultValue={3} />);
            cy.get('.next-rating[dir="rtl"]').should('exist');
        });
    });
});
