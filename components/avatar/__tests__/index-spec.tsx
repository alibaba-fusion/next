import React from 'react';
import Avatar from '../index';
import Icon from '../../icon';
import '../style';
import '../../icon/style';
import Box from '../../box';

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
    it('should render current size when avatar in box', () => {
        cy.mount(
            <Box>
                <Avatar size={24} icon="account" />
            </Box>
        );
        cy.get('.next-avatar').should('have.css', 'width', '24px');
        cy.get('.next-avatar').should('have.css', 'height', '24px');
    });
    // feature: imgProps referrerPolicy
    it('should set src referrerPolicy', () => {
        const link = 'https://img.alicdn.com/tfs/TB1EHhicAH0gK0jSZPiXXavapXa-904-826.png';
        cy.mount(<Avatar src={link} imgProps={{ referrerPolicy: 'no-referrer' }} />);
        cy.get('img').should('have.attr', 'referrerPolicy', 'no-referrer');
    });
});
