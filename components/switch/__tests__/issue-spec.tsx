import React from 'react';
import Switch from '../index';
import Form from '../../form';
import '../style';

describe('Issue', () => {
    it('checked should be passed by Form', () => {
        cy.mount(
            <Form value={{ a: true }}>
                <Form.Item name="a">
                    <Switch />
                </Form.Item>
            </Form>
        );
        cy.get('.next-switch-on').should('have.length', 1);
    });
});
