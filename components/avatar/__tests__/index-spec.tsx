import * as React from 'react';
import Avatar from '../index';
import Icon from '../../icon';
import '../style';
import '../../icon/style';

describe('Avatar', () => {
    it('should render', () => {
        cy.mount(<Avatar />);
        cy.get('.next-avatar');
    });

    it('should render src', () => {
        const link = 'https://img.alicdn.com/tfs/TB1EHhicAH0gK0jSZPiXXavapXa-904-826.png';
        cy.mount(<Avatar />);
        cy.get('.next-avatar');

        cy.mount(<Avatar src={link} />);
        cy.get('img').should('have.attr', 'src', link);

        const onError = cy.spy();
        cy.mount(<Avatar src="unexist" onError={onError} />);
        cy.wrap(onError).should('have.been.called');
    });

    it('should render icon', () => {
        cy.mount(<Avatar />);
        cy.get('.next-avatar');

        cy.mount(<Avatar icon="account" />);
        cy.get('.next-icon-account');

        cy.mount(<Avatar icon={<Icon type="atm" />} />);
        cy.get('.next-icon-atm');
    });

    it('should render letters', () => {
        cy.mount(<Avatar />);
        cy.get('.next-avatar');

        cy.mount(<Avatar children="U" />);
        cy.get('.next-avatar').should('have.html', 'U');
    });
});
