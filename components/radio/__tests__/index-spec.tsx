import React, { cloneElement, createRef, type ReactElement } from 'react';
import type { MountReturn } from 'cypress/react';
import Radio from '../index';
import '../style';

describe('Radio', () => {
    describe('[render] normal', () => {
        it('should get a normal radio', () => {
            cy.mount(<Radio />);
            cy.get('.next-radio').should('have.length', 1);
            cy.mount(<Radio id="banana">香蕉</Radio>);
            cy.get('.next-radio').should('have.length', 1);
            cy.get('#banana').should('have.length', 1).and('have.prop', 'tagName', 'INPUT');
        });
        it('with checked && defaultChecked', () => {
            cy.mount(<Radio defaultChecked={false} />);
            cy.get('.next-radio.checked').should('not.exist');
            cy.mount(<Radio checked={false} />);
            cy.get('.next-radio.checked').should('not.exist');
        });
        it('disabled', () => {
            cy.mount(<Radio disabled />);
            cy.get('.next-radio.disabled').should('have.length', 1);
        });
        it('should support className', () => {
            cy.mount(<Radio className="custom-name" />);
            cy.get('.next-radio-wrapper.custom-name').should('have.length', 1);
        });
        it('should support name', () => {
            cy.mount(<Radio name="customer" />);
            cy.get('input[name="customer"]').should('have.length', 1);
        });

        it('should isPreview', () => {
            cy.mount(<Radio isPreview defaultChecked label="apple" />);
            cy.get('.next-form-preview').should('have.text', 'apple');
        });

        it('should renderPreview', () => {
            cy.mount(<Radio isPreview renderPreview={() => 'render preivew'} />);
            cy.get('.next-form-preview').should('have.text', 'render preivew');
        });
    });

    describe('[focus] call focus()', () => {
        it('should focus', () => {
            const ref = createRef<InstanceType<typeof Radio>>();
            cy.mount(<Radio ref={ref}>1</Radio>);
            cy.get('input').should('not.be.focused');
            cy.then(() => {
                ref.current?.getInstance().focus();
            });
            cy.get('input').should('be.focused');
        });
        it('should not focus when disabled', () => {
            const ref = createRef<InstanceType<typeof Radio>>();
            cy.mount(
                <Radio disabled ref={ref}>
                    1
                </Radio>
            );
            cy.get('input').should('not.be.focused');
            cy.then(() => {
                ref.current?.getInstance().focus();
            });
            cy.get('input').should('not.be.focused');
        });
    });

    describe('behavior', () => {
        it('simulate click', () => {
            it('should checked after click', () => {
                cy.mount(<Radio />);
                cy.get('.next-radio.checked').should('not.exist');
                cy.get('input').check();
                cy.get('.next-radio.checked').should('exist');
            });
            it('should call `onChange`', () => {
                const onChange = cy.spy();
                cy.mount(<Radio onChange={onChange} />);
                cy.get('input').should('have.prop', 'checked', false);
                cy.get('input').check();
                cy.then(() => {
                    cy.wrap(onChange).should('be.calledOnce');
                });
                cy.get('input').should('have.prop', 'checked', true);
            });
        });
        it('should support controlled `checked`', () => {
            cy.mount(<Radio checked />).as('radio');
            cy.get('input').should('have.prop', 'checked', true);
            cy.get('.checked').should('exist');
            cy.get<MountReturn>('@radio').then(({ component, rerender }) => {
                return rerender(
                    cloneElement(component as ReactElement, {
                        checked: false,
                    })
                );
            });
            cy.get('input').should('have.prop', 'checked', false);
            cy.get('.checked').should('not.exist');
        });
    });
});
