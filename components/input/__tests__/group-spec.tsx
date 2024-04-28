import React from 'react';
import Select from '../../select';
import Button from '../../button';
import Input from '../index';

const select = (
    <Select>
        <option value="1">1</option>
    </Select>
);
const button = <Button>search</Button>;

describe('input-group', () => {
    describe('render', () => {
        it('should accept addonBefore', () => {
            cy.mount(
                <Input.Group addonBefore={select}>
                    <Input hasClear defaultValue="abc" style={{ width: '100%' }} />
                </Input.Group>
            );
            cy.get('span.next-input-group-addon').should('exist');
            cy.get('span.next-input-group-addon.next-before').should('exist');
            cy.get('span.next-input-group-addon.next-after').should('not.exist');
        });

        it('should accept addonAfter', () => {
            cy.mount(
                <Input.Group addonAfter={button}>
                    <Input hasClear defaultValue="abc" style={{ width: '100%' }} />
                </Input.Group>
            );
            cy.get('span.next-input-group-addon').should('exist');
            cy.get('span.next-input-group-addon.next-before').should('not.exist');
            cy.get('span.next-input-group-addon.next-after').should('exist');
        });
    });
});
