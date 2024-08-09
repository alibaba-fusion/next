import React from 'react';
import VirtualList from '../index';
import '../style';

const generateData = (len: number) => {
    const dataSource = [];

    for (let i = 0; i < len; i++) {
        dataSource.push(
            <li key={`${i}-test`} style={{ lineHeight: '20px' }}>
                {i}
            </li>
        );
    }

    return dataSource;
};

describe('VirtualList', () => {
    it('should render', () => {
        function App() {
            return (
                <div
                    style={{
                        height: '200px',
                        width: '200px',
                        overflow: 'auto',
                    }}
                >
                    <VirtualList>{generateData(10)}</VirtualList>
                </div>
            );
        }

        cy.mount(<App />);
        cy.get('li').should('have.length', 10);
    });

    it('should render much more', () => {
        function App() {
            return (
                <div
                    style={{
                        height: '200px',
                        width: '200px',
                        overflow: 'auto',
                    }}
                >
                    <VirtualList>{generateData(100)}</VirtualList>
                </div>
            );
        }

        cy.mount(<App />);
        cy.get('li').should('have.length.at.most', 20);
    });

    it('should support jumpIndex', () => {
        function App() {
            return (
                <div
                    style={{
                        height: '200px',
                        width: '200px',
                        overflow: 'auto',
                    }}
                >
                    <VirtualList
                        jumpIndex={50}
                        itemSizeGetter={() => {
                            return 20;
                        }}
                    >
                        {generateData(100)}
                    </VirtualList>
                </div>
            );
        }

        cy.mount(<App />);

        cy.get('li')
            .should('be.visible')
            .first()
            .invoke('text')
            .then(text => {
                expect(parseInt(text, 10)).to.be.above(40);
            });
    });

    it('should render single item', () => {
        const singleItem = (
            <li key={`${0}-test`} style={{ lineHeight: '20px' }}>
                {0}
            </li>
        );
        function App() {
            return (
                <div
                    style={{
                        height: '200px',
                        width: '200px',
                        overflow: 'auto',
                    }}
                >
                    <VirtualList
                        jumpIndex={50}
                        itemSizeGetter={() => {
                            return 20;
                        }}
                    >
                        {singleItem}
                    </VirtualList>
                </div>
            );
        }

        cy.mount(<App />);
    });
});
