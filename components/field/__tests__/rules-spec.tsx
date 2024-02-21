import React from 'react';
import Input from '../../input';
import Field from '../index';

describe('rules', () => {
    it('required', () => {
        const field = new Field({});
        const { value, ...inited } = field.init('input', {
            rules: [
                {
                    required: true,
                    message: 'cant be null',
                },
            ],
        });

        cy.mount(<Input {...inited} />);
        cy.get('input').type('1');
        cy.get('input').clear();
        cy.then(() => {
            cy.wrap(field.getError('input')).should('deep.equal', ['cant be null']);
        });

        const { value: _v, ...inited2 } = field.init('input', { rules: [] });
        cy.mount(<Input {...inited2} />);
        const callback = cy.spy();
        field.validateCallback(callback);

        cy.wrap(callback).should('be.calledOnce');
        cy.wrap(callback).should('be.calledWithMatch', null);
    });
    it('triger', () => {
        const field = new Field({});
        const { value, ...inited } = field.init('input', {
            rules: [
                {
                    required: true,
                    trigger: 'onBlur',
                    message: 'cant be null',
                },
            ],
        });

        cy.mount(<Input {...inited} />);
        cy.get('input').trigger('blur');
        cy.then(() => {
            cy.wrap(field.getError('input')).should('deep.equal', ['cant be null']);
        });
    });
    it('validator', () => {
        const field = new Field({});
        const { value, ...inited } = field.init('input', {
            rules: [
                {
                    validator: (_rule, value, callback) => {
                        if (!value) {
                            callback('不能为空！');
                        } else {
                            callback();
                        }
                    },
                },
            ],
        });

        cy.mount(<Input {...inited} />);
        cy.get('input').type('a');
        cy.get('input').clear();
        cy.then(() => {
            cy.wrap(field.getError('input')).should('deep.equal', ['不能为空！']);
        });
    });
});
