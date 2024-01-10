/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Input from '../../input';
import Field from '../index';

/* global describe it */
describe('rules', () => {
    it('required', function () {
        const field = new Field(this);
        const inited = field.init<string>('input', {
            initValue: '123',
            rules: [
                {
                    required: true,
                    message: 'cant be null',
                },
            ],
        });

        cy.mount(<Input {...inited} />);
        cy.get('input').clear();
        cy.then(() => {
            assert((field.getError('input') as string[])[0] === 'cant be null');
        });

        // validator can't callback when option.rules is an empty Array
        cy.mount(<Input {...field.init('input', { rules: [] })} />);
        cy.then(() => {
            const callback = cy.spy();
            field.validate(callback);
            expect(callback.calledOnce).equal(true);
        });
    });
    it('triger', function () {
        const field = new Field(this);
        const inited = field.init<string>('input', {
            rules: [
                {
                    required: true,
                    trigger: 'onBlur',
                    message: 'cant be null',
                },
            ],
        });

        cy.mount(<Input {...inited} />);
        cy.get('input').focus();
        cy.get('input').blur();
        cy.then(() => {
            assert((field.getError('input') as string[])[0] === 'cant be null');
        });
        const inited2 = field.init<string>('input2', {
            rules: [
                {
                    required: true,
                    trigger: ['onBlur'],
                    message: 'cannot be null',
                },
            ],
        });

        cy.mount(<Input {...inited2} />);
        cy.get('input').focus();
        cy.get('input').blur();
        cy.then(() => {
            assert((field.getError('input2') as string[])[0] === 'cannot be null');
        });
    });
    it('validator', function () {
        const field = new Field(this);
        const inited = field.init<string>('input', {
            initValue: '123',
            rules: [
                {
                    validator: (rule, value, callback) => {
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
        cy.get('input').clear();
        cy.then(() => {
            assert((field.getError('input') as string[])[0] === '不能为空！');
        });
    });
});
