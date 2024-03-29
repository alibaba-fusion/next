import React from 'react';
import Select from '../index';
import '../style';

describe('issue in AutoComplete', () => {
    it('should fix #93', () => {
        const onChange = cy.spy().as('onChange');
        class App extends React.Component {
            state = {
                value: 1,
            };
            setValue = () => {
                this.setState({
                    value: 1,
                });
            };
            render() {
                const dataSource = [
                    {
                        value: 1,
                        label: 'jack',
                    },
                    {
                        value: 2,
                        label: 'lucy',
                    },
                ];
                return (
                    <div>
                        <button id="btn_93" onClick={this.setValue}>
                            set value
                        </button>
                        <Select
                            value={this.state.value}
                            dataSource={dataSource}
                            visible
                            onChange={onChange}
                        />
                    </div>
                );
            }
        }
        cy.mount(<App />);
        cy.get('.next-menu-item').eq(0).click();
        cy.get('@onChange').should('not.be.called');
        cy.get('.next-menu-item').eq(1).click();
        cy.get('@onChange').should('be.calledWith', 2);
        cy.get('#btn_93').click();
        cy.get('.next-menu-item').eq(1).click();
        cy.get('@onChange').should('be.calledWith', 2);
    });

    it('should escape special char when filter local', () => {
        const dataSource = [
            { label: '[测试] 文案 11', value: '1' },
            { label: '[tag] 文案 22', value: '2' },
        ];
        cy.mount(<Select dataSource={dataSource} showSearch visible style={{ width: '300px' }} />);
        cy.get('.next-select input').type('t');
        cy.get('.next-menu-item').should('have.length', 1);
    });
});
