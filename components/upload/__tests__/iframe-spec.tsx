import React from 'react';
import Upload from '../runtime/iframe-uploader';

describe('Iframe Upload', () => {
    it('should render without crash', () => {
        cy.mount(<Upload />);

        // 检查页面中是否存在form元素
        cy.get('form').should('exist');
    });
});
