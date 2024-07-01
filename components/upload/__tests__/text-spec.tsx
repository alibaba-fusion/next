import React from 'react';
import Upload from '../index';

const defaultValue = [
    {
        name: 'IMG.png',
        state: 'done',
        size: 1024,
        url: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
    },
];

describe('TextUpload', () => {
    describe('render', () => {
        it('should render a wrapper upload', () => {
            cy.mount(<Upload listType="text" defaultValue={defaultValue} />);
            cy.get('.next-upload');
            cy.get('.next-upload-list-item');
        });
        it('should render a error item without text', () => {
            cy.mount(
                <Upload
                    listType="text"
                    defaultValue={[
                        {
                            name: 'IMG.png',
                            state: 'error',
                            size: 1024,
                            url: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
                        },
                    ]}
                />
            );
            cy.get('.next-upload');
            cy.get('.next-upload-list-item-error');
            cy.get('.next-upload-list-item-error-with-text').should('not.exist');
        });
        it('should render a upload item', () => {
            cy.mount(
                <Upload
                    listType="text"
                    defaultValue={[
                        {
                            name: 'IMG.png',
                            state: 'uploading',
                            percent: 85,
                            size: 1024,
                            url: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
                            errorText: 'error text',
                        },
                    ]}
                />
            );
            cy.get('.next-upload');
            cy.get('.next-upload-list-item-uploading');
        });
        it('should render a error item with text', () => {
            cy.mount(
                <Upload
                    listType="text"
                    defaultValue={[
                        {
                            name: 'IMG.png',
                            state: 'error',
                            size: 1024,
                            url: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
                            errorMsg: 'error text',
                        },
                    ]}
                />
            );
            cy.get('.next-upload');
            cy.get('.next-upload-list-item-error');
            cy.get('.next-upload-list-item-error-with-msg');
            cy.get('.next-upload-list-item-error-msg');
            cy.get('.next-upload-list-item-error-msg').first().should('have.text', 'error text');
        });
    });
});
