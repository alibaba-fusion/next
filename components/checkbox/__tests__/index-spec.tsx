import React, { type ReactElement } from 'react';
import { type MountReturn } from 'cypress/react';
import Checkbox from '../index';

describe('Checkbox', () => {
    describe('[render] normal', () => {
        it('should get a normal checkbox', () => {
            cy.mount(<Checkbox />);
            cy.get('.next-checkbox').should('have.length', 1);
            cy.mount(<Checkbox id="banana">香蕉</Checkbox>);
            cy.get('.next-checkbox').should('have.length', 1);
            cy.get('input#banana').should('have.length', 1);
        });
    });

    describe('[render] checked', () => {
        it('should get a checked checkbox', () => {
            cy.mount(<Checkbox defaultChecked />);
            cy.get('.checked').should('have.length', 1);
            cy.mount(<Checkbox checked />);
            cy.get('.checked').should('have.length', 1);
        });
    });

    describe('[render] indeterminate', () => {
        it('should get a indeterminate checkbox', () => {
            cy.mount(<Checkbox defaultIndeterminate />);
            cy.get('.indeterminate').should('have.length', 1);
            cy.mount(<Checkbox indeterminate />);
            cy.get('.indeterminate').should('have.length', 1);
        });
    });

    describe('[render] disabled', () => {
        it('should get a disabled checkbox', () => {
            cy.mount(<Checkbox disabled />);
            cy.get('.disabled').should('have.length', 1);
        });
    });

    describe('[render] label', () => {
        it('should get a checkbox with label', () => {
            cy.mount(<Checkbox label="banana" />);
            cy.get('.next-checkbox-label').should('have.length', 1);
        });
    });

    describe('[attribute] set custom `className`', () => {
        it('should has className `custom-name`', () => {
            cy.mount(<Checkbox className="custom-name" />);
            cy.get('.next-checkbox-wrapper.custom-name').should('exist');
        });
    });

    describe('[events] simulate click', () => {
        it('should checked after click', () => {
            cy.mount(<Checkbox />);
            cy.get('input').eq(0).check();
            cy.get('input').should('have.prop', 'checked', true);
        });
        it('should call `onChange`', () => {
            const onChange = cy.spy().as('onChange');
            cy.mount(<Checkbox onChange={onChange} />);
            cy.get('input').eq(0).check();
            cy.get('@onChange').should('be.called');
        });
        it('should return the passed value', () => {
            const onChange = cy.spy().as('onChange');
            cy.mount(
                <Checkbox
                    onChange={(checked, e) => {
                        e.persist();
                        onChange(e);
                    }}
                    value="banana"
                />
            );
            cy.get('input').eq(0).check();
            cy.get('@onChange').should(
                'be.calledWithMatch',
                (e: React.ChangeEvent<HTMLInputElement>) => {
                    return e.target.value === 'banana';
                }
            );
        });
        it('should call `onMouseEnter`', () => {
            const onMouseEnter = cy.spy().as('onMouseEnter');
            cy.mount(<Checkbox onMouseEnter={onMouseEnter} />);
            // React 的 mouseEnter 事件是通过监听 mouseover 实现的
            cy.get('.next-checkbox-wrapper').trigger('mouseover');
            cy.get('@onMouseEnter').should('be.calledOnce');
        });
        it('should call `onMouseLeave`', () => {
            const onMouseLeave = cy.spy().as('onMouseLeave');
            cy.mount(<Checkbox onMouseLeave={onMouseLeave} />);
            // React 的 mouseLeave 事件是通过监听 mouseout 实现的
            cy.get('.next-checkbox-wrapper').trigger('mouseout');
            cy.get('@onMouseLeave').should('be.calledOnce');
        });
    });

    describe('[behavior] controlled', () => {
        it('should support controlled `checked` and `indeterminate`', () => {
            cy.mount(<Checkbox checked />).as('Demo');
            cy.get('input').should('be.checked');
            cy.get('.checked').should('have.length', 1);
            cy.get<MountReturn>('@Demo').then(({ component, rerender }) => {
                return rerender(React.cloneElement(component as ReactElement, { checked: false }));
            });
            cy.get('input').should('not.be.checked');
            cy.get('.checked').should('have.length', 0);
            cy.get<MountReturn>('@Demo').then(({ component, rerender }) => {
                return rerender(
                    React.cloneElement(component as ReactElement, { indeterminate: true })
                );
            });
            cy.get('.indeterminate').should('have.length', 1);
        });
    });

    describe('render in preview mode', () => {
        it('should isPreview', () => {
            cy.mount(<Checkbox checked label="apple" isPreview />);
            cy.get('.next-form-preview').should('have.text', 'apple');
        });

        it('should renderPreview', () => {
            cy.mount(<Checkbox checked isPreview renderPreview={() => 'checked'} />);
            cy.get('.next-form-preview').should('have.text', 'checked');
        });
    });
});
