import React from 'react';
import Upload from '../index';

describe('ImageUpload', () => {
    describe('render', () => {
        it('should render a imageList upload', () => {
            cy.mount(
                <Upload
                    listType="image"
                    defaultValue={[
                        {
                            uid: '0',
                            name: 'IMG.png',
                            state: 'done',
                            url: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
                            downloadURL:
                                'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
                            imgURL: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
                        },
                        {
                            uid: '1',
                            name: 'IMG.png',
                            percent: 50,
                            state: 'uploading',
                            url: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
                            downloadURL:
                                'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
                            imgURL: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
                        },
                        {
                            uid: '2',
                            name: 'IMG.png',
                            state: 'error',
                            url: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
                            downloadURL:
                                'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
                            imgURL: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
                        },
                    ]}
                />
            );
            cy.get('.next-upload-list.next-upload-list-image');
            cy.get('.next-upload-list-item').should('have.length', 3);
            [
                'next-upload-list-item-done',
                'next-upload-list-item-uploading',
                'next-upload-list-item-error',
            ].forEach(className => {
                cy.get(`.${className}`);
            });
        });
        it('should render a imageList upload with error msg', () => {
            cy.mount(
                <Upload
                    listType="image"
                    defaultValue={[
                        {
                            uid: '2',
                            name: 'IMG.png',
                            state: 'error',
                            url: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
                            downloadURL:
                                'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
                            imgURL: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
                            errorMsg: 'ErrorText',
                        },
                    ]}
                />
            );
            cy.get('.next-upload-list-item-error-with-msg');
            cy.get('.next-upload-list-item-error');
            cy.get('.next-upload-list-item-error-msg');
            cy.get('.next-upload-list-item-error-msg').first().should('have.text', 'ErrorText');
        });
    });
});
