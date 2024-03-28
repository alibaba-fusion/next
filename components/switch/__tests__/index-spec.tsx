import React, { cloneElement, useState, type ReactElement } from 'react';
import type { MountReturn } from 'cypress/react';
import Switch from '../index';
import '../style';

describe('Switch', () => {
    it('on', () => {
        cy.mount(<Switch checked />);
        cy.get('.next-switch-on').should('have.length', 1);
    });
    it('off', () => {
        cy.mount(<Switch />);
        cy.get('.next-switch-off').should('have.length', 1);
    });
    it('uncontrolled', () => {
        cy.mount(<Switch defaultChecked />);
        cy.get('.next-switch-on').should('have.length', 1);
        cy.get('.next-switch').click();
        cy.get('.next-switch-off').should('have.length', 1);
    });
    it('controlled', () => {
        function Demo() {
            const [checked, setChecked] = useState(true);
            return <Switch checked={checked} onChange={v => setChecked(v)} />;
        }
        cy.mount(<Demo />);
        cy.get('.next-switch-on').should('have.length', 1);
        cy.get('.next-switch').click();
        cy.get('.next-switch-off').should('have.length', 1);
    });
    it('size', () => {
        cy.mount(<Switch size="small" />);
        cy.get('.next-switch-small').should('have.length', 1);
    });
    it('defaultChecked and disabled', () => {
        cy.mount(<Switch defaultChecked disabled />);
        cy.get('.next-switch-on').should('have.length', 1);
        cy.get('.next-switch').click();
        cy.get('.next-switch-on').should('have.length', 1);
    });
    it('should unClickable while disabled', () => {
        const onClick = cy.spy();
        cy.mount(<Switch disabled onClick={onClick} />).as('switch');
        cy.get('.next-switch').click();
        cy.wrap(onClick).should('not.be.called');
        cy.get<MountReturn>('@switch').then(({ component, rerender }) => {
            return rerender(cloneElement(component as ReactElement, { disabled: false }));
        });
        cy.get('.next-switch').click();
        cy.wrap(onClick).should('be.calledOnce');
    });
    it('children setting and onChange', () => {
        const onChange = cy.spy();
        cy.mount(<Switch checkedChildren="开" unCheckedChildren="关" onChange={onChange} />);
        cy.get('.next-switch-children').should('have.text', '关');
        cy.get('.next-switch').click();
        cy.get('.next-switch-children').should('have.text', '开');
        cy.wrap(onChange).should('be.calledOnce');
    });
    it('onClick', () => {
        const onClick = cy.spy();
        cy.mount(<Switch onClick={onClick} />);
        cy.get('.next-switch').click();
        cy.wrap(onClick).should('be.calledOnce');
    });

    it('onKeydown', () => {
        cy.mount(<Switch defaultChecked={false} />);
        cy.get('.next-switch').trigger('keydown', { keyCode: 13 });
        cy.get('.next-switch-on').should('have.length', 1);
    });
    it('checked === undefined', () => {
        cy.mount(<Switch checked={undefined} />);
        cy.get('.next-switch-off').should('have.length', 1);
    });
    it('should render readonly switch', () => {
        cy.mount(<Switch readOnly />);
        cy.get('.next-switch-off').should('have.length', 1);
        cy.get('.next-switch').click();
        cy.get('.next-switch-off').should('have.length', 1);
    });
    it('should renderPreview', () => {
        cy.mount(<Switch id="render-preview" isPreview renderPreview={() => 'preview switch'} />);
        cy.get('.next-form-preview').should('have.text', 'preview switch');
    });
    it('should use checkedChildren if exist when on & preview', () => {
        cy.mount(<Switch isPreview checked checkedChildren="✓" />);
        cy.get('.next-form-preview').should('have.text', '✓');
    });
    it('should use unCheckedChildren if exist when off & preview', () => {
        cy.mount(<Switch isPreview checked={false} unCheckedChildren="✕" />);
        cy.get('.next-form-preview').should('have.text', '✕');
    });
});
