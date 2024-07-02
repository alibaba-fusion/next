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

    it('should be able to select multiple options while enable option filtering with keyword input in multi-select mode', () => {
        const dataSource = [
            { value: '10001', label: 'Lucy King' },
            { value: '10002', label: 'Ami Lucky' },
            { value: '10003', label: 'Tom Cat' },
            { value: '10003', label: 'Serge Cat' },
        ];

        cy.mount(
            <Select
                dataSource={dataSource}
                filterLocal
                hiddenSelected={false}
                mode="multiple"
                showSearch
                style={{ width: '300px' }}
                autoClearSearchValue={false}
            />
        );
        cy.get('.next-select input').type('l');
        cy.get('.next-menu-item').should('have.length', 2);
        cy.get('.next-menu-item').eq(1).click();
        cy.get('.next-menu-item').should('have.length', 2);

        // Tag mode 时，也应该支持
        cy.mount(
            <Select
                dataSource={dataSource}
                filterLocal
                hiddenSelected={false}
                mode="tag"
                showSearch
                style={{ width: '300px' }}
                autoClearSearchValue={false}
            />
        );
        cy.get('.next-select input').type('l');
        cy.get('.next-menu-item').should('have.length', 3);
        cy.get('.next-menu-item').eq(1).click();
        cy.get('.next-menu-item').should('have.length', 3);
    });
});

describe('issue in Select', () => {
    it('Selecting all does not affect options that are already disabled, close #4802', () => {
        const onChange = cy.spy().as('onChange');
        const dataSource = [
            { value: '10001', label: 'Lucy King' },
            { value: '10002', label: 'Lily King' },
            { value: '10003', label: 'Tom Cat', disabled: true },
            {
                label: 'Special Group',
                children: [
                    { value: '-1', label: 'FALSE' },
                    { value: '0', label: 'ZERO' },
                ],
            },
        ];
        cy.mount(
            <Select
                placeholder="select all"
                hasSelectAll
                mode="multiple"
                onChange={onChange}
                dataSource={dataSource}
                defaultValue={['10003']}
            />
        );
        cy.get('.next-select input').eq(0).click();
        cy.get('.next-select-all').eq(0).click();
        cy.get('.next-tag-closable').should('have.length', 5);
        cy.get('.next-select input').eq(0).click();
        cy.get('.next-select-all').eq(0).click();
        cy.get('.next-tag-closable').should('have.length', 1);

        cy.mount(
            <Select
                placeholder="select all"
                hasSelectAll
                mode="multiple"
                onChange={onChange}
                dataSource={dataSource}
            />
        );
        cy.get('.next-select input').eq(0).click();
        cy.get('.next-select-all').eq(0).click();
        cy.get('.next-tag-closable').should('have.length', 4);

        cy.get('.next-select input').eq(0).click();
        cy.get('.next-select-all').eq(0).click();
        cy.get('.next-tag-closable').should('have.length', 0);
    });
});
