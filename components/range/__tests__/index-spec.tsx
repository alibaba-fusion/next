import React from 'react';
import Range from '../index';
import '../style';

const checkRangeSelectedDomWidthAndLeft = (width: string, left: string) => {
    cy.get('.next-range-selected')
        .should('exist')
        .then($el => {
            expect({
                width: $el[0].style.width,
                left: $el[0].style.left,
            }).deep.equal({
                width,
                left,
            });
        });
};

describe('Range ', () => {
    beforeEach(() => {
        // 在模拟鼠标选中滑动的用例中由于 body 可能存在 margin 样式，使用例中 pageX 设值偏移，从而无法选中
        document.body.style.marginLeft = '0px';
    });
    afterEach(() => {
        document.body.style.marginLeft = '';
    });
    it('defaultValue', () => {
        cy.mount(<Range defaultValue={10} />).as('el');
        checkRangeSelectedDomWidthAndLeft('10%', '0%');

        cy.rerender('el', { defaultValue: 20 });
        checkRangeSelectedDomWidthAndLeft('10%', '0%');

        cy.mount(<Range defaultValue={[10, 30]} slider="double" />).as('el');
        checkRangeSelectedDomWidthAndLeft('20%', '10%');

        cy.rerender('el', { defaultValue: [30, 40] });
        checkRangeSelectedDomWidthAndLeft('20%', '10%');
    });
    it('value', () => {
        cy.mount(<Range value={10} />).as('el');
        checkRangeSelectedDomWidthAndLeft('10%', '0%');

        cy.rerender('el', { value: 20 });
        checkRangeSelectedDomWidthAndLeft('20%', '0%');

        cy.mount(<Range value={[10, 30]} slider="double" />).as('el');
        checkRangeSelectedDomWidthAndLeft('20%', '10%');

        cy.rerender('el', { value: [30, 40] });
        checkRangeSelectedDomWidthAndLeft('10%', '30%');
    });
    it('min max', () => {
        cy.mount(<Range min={10} value={20} max={30} />);
        checkRangeSelectedDomWidthAndLeft('50%', '0%');
    });
    it('disabled', () => {
        cy.mount(<Range disabled value={20} />);
        cy.get('.next-range.disabled').should('have.length', 1);
    });
    it('step', () => {
        cy.mount(<Range min={0} max={1} step={0.03} />);
        cy.get('.next-range-slider').trigger('mousedown', {
            button: 0,
            pageX: 0,
            pageY: 0,
        });
        cy.get('.next-range-slider').trigger('mousemove', {
            pageX: 30,
            pageY: 0,
            type: 'mousemove',
        });
        cy.get('.next-range-slider').trigger('mouseup', {
            pageX: 30,
            pageY: 0,
        });
        checkRangeSelectedDomWidthAndLeft('3%', '0%');
    });

    it('hasTip === true and tipRender', () => {
        const tipRender = (value: number) => {
            expect(value).equal(20);
            return <div className="custom-tip">{value}</div>;
        };
        cy.mount(<Range value={20} hasTip tipRender={tipRender} />);
        cy.get('.next-range-slider').trigger('mouseover', {
            pageX: 0,
            pageY: 0,
        });
        cy.then(() => {
            cy.get('.custom-tip').should('exist');
        });
    });

    it('hasTip === false', () => {
        const tipRender = (value: number) => {
            expect(value).equal(20);
            return <div className="custom-tip">{value}</div>;
        };
        cy.mount(<Range value={20} hasTip={false} tipRender={tipRender} />);
        cy.get('.next-range-slider').trigger('mouseover', {
            pageX: 0,
            pageY: 0,
        });
        cy.then(() => {
            cy.get('.custom-tip').should('not.exist');
        });
    });
    it('marks', () => {
        cy.mount(<Range defaultValue={30} marks={[3, 26, 37, 100]} />).as('el');
        cy.get('.next-range-scale-item').should('have.length', 4);
        cy.get('.next-range-scale-item.activated').should('have.length', 2);
        cy.get('.next-range-scale-item')
            .first()
            .should('have.attr', 'style', 'left: 3%; right: auto;');
        cy.get('.next-range-scale-item')
            .eq(1)
            .should('have.attr', 'style', 'left: 26%; right: auto;');
        cy.get('.next-range-scale-item')
            .eq(2)
            .should('have.attr', 'style', 'left: 37%; right: auto;');

        cy.rerender('el', { marks: 10 });
        cy.get('.next-range-scale-item').should('have.length', 11);

        cy.rerender('el', { marks: { 0: '0°C', 26: '26°C', 37: '37°C', 100: '100°C' } });
        cy.get('.next-range-scale-item').should('have.length', 4);
        cy.get('.next-range-mark-text').first().should('have.text', '0°C');
    });

    it('laptop dragging onChange onProcess', () => {
        const handleChange = cy.spy().as('onChange');
        const handleProcess = cy.spy().as('onProcess');
        cy.mount(
            <Range
                defaultValue={10}
                style={{ width: 100 }}
                marks={[0, 26, 37, 100]}
                onChange={handleChange}
                onProcess={handleProcess}
                min={0}
                max={100}
            />
        )
            .get('.next-range-slider')
            .trigger('mousedown', { button: 0, pageX: 10 });
        cy.get('.next-range-slider').trigger('mousemove', { type: 'mousemove', pageX: 20 });
        cy.get('.next-range-slider').trigger('mouseup', { pageX: 20 });
        cy.get('@onChange').should('be.calledOnce');
        cy.get('@onChange').should('be.calledWith', 20);
        cy.get('@onProcess').should('be.calledOnce');
        cy.get('@onProcess').should('be.calledWith', 20);
    });

    it('mobile dragging onChange onProcess', () => {
        const handleChange = cy.spy().as('onChange');
        const handleProcess = cy.spy().as('onProcess');
        cy.mount(
            <Range
                defaultValue={10}
                style={{ width: 100 }}
                marks={[0, 26, 37, 100]}
                onChange={handleChange}
                onProcess={handleProcess}
                min={0}
                max={100}
            />
        )
            .get('.next-range-slider')
            .trigger('touchstart', { button: 0, targetTouches: [{ pageX: 10 }] });
        cy.get('.next-range-slider').trigger('touchmove', {
            type: 'touchmove',
            targetTouches: [{ pageX: 20 }],
        });
        cy.get('.next-range-slider').trigger('touchend', { targetTouches: [{ pageX: 20 }] });
        cy.get('@onChange').should('be.calledOnce');
        cy.get('@onChange').should('be.calledWith', 20);
        cy.get('@onProcess').should('be.calledOnce');
        cy.get('@onProcess').should('be.calledWith', 20);
    });

    it('exchange upper and lower', () => {
        const handleChange = cy.spy().as('onChange');
        cy.mount(
            <Range
                slider="double"
                defaultValue={[10, 20]}
                style={{ width: 100 }}
                marks={[0, 100]}
                onChange={handleChange}
                min={0}
                max={100}
            />
        )
            .get('.next-range-slider')
            .eq(1)
            .trigger('mousedown', { button: 0, pageX: 20 });
        cy.get('.next-range-slider').eq(1).trigger('mousemove', { type: 'mousemove', pageX: 30 });
        cy.get('.next-range-slider').eq(1).trigger('mouseup', { pageX: 30 });
        cy.get('.next-range-slider').eq(0).trigger('mousedown', { button: 0, pageX: 10 });
        cy.get('.next-range-slider').eq(0).trigger('mousemove', { type: 'mousemove', pageX: 20 });
        cy.get('.next-range-slider').eq(0).trigger('mouseup', { pageX: 30 });
        cy.get('@onChange').should('be.calledWith', [20, 30]);

        cy.get('.next-range-slider').eq(0).trigger('mousedown', { button: 0, pageX: 20 });
        cy.get('.next-range-slider').eq(0).trigger('mousemove', { type: 'mousemove', pageX: 0 });
        cy.get('.next-range-slider').eq(0).trigger('mouseup', { pageX: 0 });
        cy.get('.next-range-slider').eq(1).trigger('mousedown', { button: 0, pageX: 30 });
        cy.get('.next-range-slider').eq(1).trigger('mousemove', { type: 'mousemove', pageX: 20 });
        cy.get('.next-range-slider').eq(1).trigger('mouseup', { pageX: 20 });
        cy.get('@onChange').should('be.calledWith', [0, 20]);
    });

    it('value bigger max', () => {
        cy.mount(<Range value={100} max={10} min={1} />);
        cy.get('.next-range-slider')
            .should('exist')
            .then($el => {
                expect({
                    zIndex: $el[0].style.zIndex,
                    left: $el[0].style.left,
                }).deep.equal({
                    zIndex: '100',
                    left: '100%',
                });
            });

        cy.mount(<Range slider="double" value={[100, 200]} max={10} min={1} />);
        cy.get('.next-range-slider')
            .eq(0)
            .should('exist')
            .then($el => {
                expect({
                    zIndex: $el[0].style.zIndex,
                    left: $el[0].style.left,
                }).deep.equal({
                    zIndex: '100',
                    left: '100%',
                });
            });
        cy.get('.next-range-slider')
            .eq(1)
            .should('exist')
            .then($el => {
                expect({
                    zIndex: $el[0].style.zIndex,
                    left: $el[0].style.left,
                }).deep.equal({
                    zIndex: '100',
                    left: '100%',
                });
            });
    });

    it('set value === undefined for reset', () => {
        cy.mount(<Range min={2} value={10} />).as('el');
        checkRangeSelectedDomWidthAndLeft('8.16327%', '0%');
        cy.rerender('@el', { value: undefined });
        checkRangeSelectedDomWidthAndLeft('0%', '0%');

        cy.mount(<Range slider="double" value={[10, 30]} />).as('el');
        checkRangeSelectedDomWidthAndLeft('20%', '10%');
        cy.rerender('@el', { value: undefined });
        checkRangeSelectedDomWidthAndLeft('0%', '0%');
    });
    it('reverse', () => {
        cy.mount(<Range defaultValue={10} reverse />);
        checkRangeSelectedDomWidthAndLeft('90%', '10%');

        cy.mount(<Range slider="double" defaultValue={[10, 30]} reverse />);
        cy.get('.next-range-selected').should('have.length', 2);
        cy.get('.next-range-selected')
            .eq(0)
            .then($el => {
                expect({
                    width: $el[0].style.width,
                    left: $el[0].style.left,
                }).deep.equal({
                    width: '10%',
                    left: '0px',
                });
            });
        cy.get('.next-range-selected')
            .eq(1)
            .then($el => {
                expect({
                    width: $el[0].style.width,
                    left: $el[0].style.left,
                }).deep.equal({
                    width: '70%',
                    left: '30%',
                });
            });
    });

    it('fixedWidth', () => {
        cy.mount(<Range fixedWidth defaultValue={[20, 40]} />)
            .get('.next-range-frag')
            .then($el => {
                expect({
                    right: $el[0].style.right,
                    left: $el[0].style.left,
                }).deep.equal({
                    right: '60%',
                    left: '20%',
                });
            });
    });

    it('fixedWidth no tip', () => {
        cy.mount(<Range fixedWidth hasTip={false} defaultValue={[20, 40]} />);
        cy.get('.next-balloon-tooltip').should('not.exist');
    });

    it('fixedWidth dragging should have active class', () => {
        cy.mount(
            <Range marks={[0, 100]} marksPosition="below" fixedWidth defaultValue={[20, 40]} />
        )
            .get('.next-range-slider')
            .eq(0)
            .trigger('mousedown', { button: 0, pageX: 20, pageY: 0 });
        cy.get('.next-range-active').should('exist');
    });

    it('fixedWidth tooltip enter+down+leave+up', () => {
        cy.mount(<Range fixedWidth defaultValue={[20, 40]} />);
        cy.get('.next-balloon-tooltip').should('not.exist');
        cy.get('.next-range-frag').trigger('mousedown', { button: 0, pageX: 0, pageY: 0 });
        cy.get('.next-range-frag').trigger('mousemove', {
            type: 'mousemove',
            pageX: 100,
            pageY: 0,
        });
        cy.get('.next-balloon-tooltip').should('exist');
        cy.get('.next-range-frag').trigger('mouseleave', { pageX: 200, pageY: 100 });
        cy.get('.next-balloon-tooltip').should('exist');
        cy.get('.next-range-frag').trigger('mouseup', { pageX: 100, pageY: 0 });
        cy.get('.next-balloon-tooltip').should('not.exist');
    });

    it('fixedWidth tooltipVisible === true, always has tooltip', () => {
        cy.mount(<Range tooltipVisible fixedWidth defaultValue={[20, 40]} />);
        cy.get('.next-balloon-tooltip').should('exist');
        cy.get('.next-range-frag').trigger('mousedown', { button: 0, pageX: 0, pageY: 0 });
        cy.get('.next-range-frag').trigger('mousemove', {
            type: 'mousemove',
            pageX: 100,
            pageY: 0,
        });
        cy.get('.next-balloon-tooltip').should('exist');
        cy.get('.next-range-frag').trigger('mouseleave', { pageX: 200, pageY: 100 });
        cy.get('.next-balloon-tooltip').should('exist');
        cy.get('.next-range-frag').trigger('mouseup', { pageX: 100, pageY: 0 });
        cy.get('.next-balloon-tooltip').should('exist');
    });

    it('keymove right', () => {
        const onChange = cy.spy().as('onChange');
        cy.mount(<Range defaultValue={2} hasTip onChange={onChange} />);
        cy.get('.next-range-slider').trigger('keydown', { keyCode: 39 });
        cy.get('@onChange').should('be.calledOnce');
        cy.get('@onChange').should('be.calledWith', 3);
    });

    it('keymove left', () => {
        const onChange = cy.spy().as('onChange');
        cy.mount(<Range defaultValue={2} hasTip onChange={onChange} />);
        cy.get('.next-range-slider').trigger('keydown', { keyCode: 37 });
        cy.get('@onChange').should('be.calledOnce');
        cy.get('@onChange').should('be.calledWith', 1);
    });

    it('keymove right at rightmost', () => {
        const onChange = cy.spy().as('onChange');
        cy.mount(<Range defaultValue={100} min={1} max={100} hasTip onChange={onChange} />);
        cy.get('.next-range-slider').trigger('keydown', { keyCode: 39 });
        cy.get('@onChange').should('not.be.called');
        checkRangeSelectedDomWidthAndLeft('100%', '0%');
    });

    it('rtl', () => {
        cy.mount(<Range rtl value={10} />);
        checkRangeSelectedDomWidthAndLeft('10%', '90%');

        cy.mount(<Range rtl slider="double" value={[10, 30]} />);
        checkRangeSelectedDomWidthAndLeft('20%', '70%');
    });

    it('rtl & reverse', () => {
        cy.mount(<Range rtl reverse value={10} />);
        checkRangeSelectedDomWidthAndLeft('90%', '0%');

        cy.mount(<Range rtl reverse slider="double" value={[10, 30]} />);
        checkRangeSelectedDomWidthAndLeft('70%', '0px');
    });

    it('should isPreview', () => {
        cy.mount(<Range isPreview value={30} />);
        cy.get('.next-form-preview').should('have.text', '30');
        cy.mount(<Range isPreview value={[10, 40]} />);
        cy.get('.next-form-preview').should('have.text', '10~40');
    });

    it('should renderPreview', () => {
        cy.mount(<Range isPreview renderPreview={() => 'single'} value={30} />);
        cy.get('.next-form-preview').should('have.text', 'single');
        cy.mount(<Range isPreview renderPreview={() => 'double'} value={[10, 40]} />);
        cy.get('.next-form-preview').should('have.text', 'double');
    });
});
