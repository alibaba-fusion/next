import React, { type ReactElement } from 'react';
import VirtualList from '../index';
import '../style';

const generateData = (len: number) => {
    const dataSource = [];

    for (let i = 0; i < len; i++) {
        dataSource.push(
            <li key={`${i}-test`} data-key={`${i}-test`} style={{ lineHeight: '20px' }}>
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

    it('should support scroll', () => {
        cy.mount(
            <div
                className="scrollBox"
                style={{
                    height: '200px',
                    width: '200px',
                    overflow: 'auto',
                }}
            >
                <VirtualList>{generateData(100)}</VirtualList>
            </div>
        );
        cy.get('.scrollBox').scrollTo(0, 500);
        cy.get('[data-key="25-test"]').should('be.visible');
        cy.get('.scrollBox').scrollTo(0, 1000);
        cy.get('[data-key="50-test"]').should('be.visible');
    });

    it('should support jumpIndex', () => {
        cy.mount(
            <div
                style={{
                    height: '200px',
                    width: '200px',
                    overflow: 'auto',
                }}
            >
                <VirtualList jumpIndex={50}>{generateData(100)}</VirtualList>
            </div>
        );

        cy.get('li')
            .should('be.visible')
            .first()
            .invoke('text')
            .then(text => {
                expect(parseInt(text, 10)).to.be.above(40);
            });
    });

    it('should support jumpIndex with itemSizeGetter', () => {
        cy.mount(
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

        cy.get('li')
            .should('be.visible')
            .first()
            .invoke('text')
            .then(text => {
                expect(parseInt(text, 10)).to.be.above(40);
            });
    });

    it('should support scroll with jumpIndex', () => {
        cy.mount(
            <div
                className="scrollBox"
                style={{
                    height: '200px',
                    width: '200px',
                    overflow: 'auto',
                }}
            >
                <VirtualList jumpIndex={50}>{generateData(100)}</VirtualList>
            </div>
        );
        cy.get('.scrollBox').scrollTo(0, 0);
        cy.get('[data-key="0-test"]').should('be.visible');
        cy.get('.scrollBox').scrollTo(0, 1000);
        cy.get('[data-key="50-test"]').should('be.visible');
    });

    it('should render single item', () => {
        const singleItem = (
            <li className="test" key="test" style={{ lineHeight: '20px' }}>
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
                    <VirtualList>{singleItem}</VirtualList>
                </div>
            );
        }

        cy.mount(<App />);
        cy.get('.test').should('exist');
    });

    it('should render single item with abnormal jumpIndex', () => {
        const singleItem = (
            <li className="test" key="test" style={{ lineHeight: '20px' }}>
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
                    <VirtualList jumpIndex={100}>{singleItem}</VirtualList>
                </div>
            );
        }

        cy.mount(<App />);
        cy.get('.test').should('exist');
    });
    describe('issue', () => {
        it('should not change children key, issue #4942', () => {
            const handleItemsRender = cy.spy();
            cy.mount(
                <div
                    className="scrollBox"
                    style={{
                        height: '200px',
                        width: '200px',
                        overflow: 'auto',
                    }}
                >
                    <VirtualList
                        itemsRenderer={(items, ref) => {
                            handleItemsRender((items[0] as ReactElement).key);
                            return <ul ref={ref}>{items}</ul>;
                        }}
                        jumpIndex={50}
                    >
                        {generateData(100)}
                    </VirtualList>
                </div>
            );
            cy.wrap(handleItemsRender).should('be.calledWith', '0-test');
        });
    });
});
