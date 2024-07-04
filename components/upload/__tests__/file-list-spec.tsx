import React from 'react';
import Upload from '../index';

describe('listType', () => {
    describe('render', () => {
        it('should not render upload file list', () => {
            cy.mount(
                <Upload
                    listType="none"
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
            cy.get('.next-upload-list').should('not.exist');
        });
        it('should render text upload file list', () => {
            cy.mount(
                <Upload
                    listType="text"
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
            cy.get('.next-upload-list').should('exist');
            cy.get('.next-upload-list-item').should('have.length', 3);
        });
        it('should render card upload file list', () => {
            cy.mount(
                <Upload
                    listType="card"
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
            cy.get('.next-upload-list').should('exist');
            cy.get('.next-upload-list-item').should('have.length', 3);
        });
        it('should render image upload file list', () => {
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
            cy.get('.next-upload-list').should('exist');
            cy.get('.next-upload-list-item').should('have.length', 3);
        });
    });
});
