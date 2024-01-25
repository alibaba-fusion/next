import React, { ReactElement } from 'react';
import { MountReturn } from 'cypress/react';
import Search from '../index';
import enUS from '../../locale/en-us';
import '../style';

describe('Search', () => {
    describe('render', () => {
        it('should accept type ', () => {
            cy.mount(<Search type="secondary" />).as('Search');
            cy.get('.next-secondary');
        });
        it('should accept value ', () => {
            const VALUE = '123';
            cy.mount(<Search value={VALUE} />);
            cy.get('input').should('have.prop', 'value', VALUE);
        });
        it('should accept value=undefind ', () => {
            const VALUE = undefined;
            cy.mount(<Search value={VALUE} />);
            cy.get('input').should('have.prop', 'value', '');
        });
        it('should accept simple icon ', () => {
            cy.mount(<Search shape="simple" />);
            cy.get('button').should('not.exist');
            cy.get('.next-icon-search').should('have.length', 1);
        });
        it('should accept no-icon', () => {
            cy.mount(<Search hasIcon={false} />);
            cy.get('.next-icon').should('not.exist');

            cy.mount(<Search hasIcon={false} shape="simple" />);
            cy.get('.next-icon').should('not.exist');
        });

        it('should accept search text', () => {
            const text = 'search';
            const SearchText = <span>{text}</span>;
            cy.mount(<Search searchText={SearchText} />);
            cy.get('.next-search-btn-text').should('have.length', 1).and('have.text', text);
        });
        it('should set default aria-label to locale.buttonText', () => {
            cy.mount(<Search />);
            cy.get('[aria-label]');
        });

        it('should set aria-label to locale.buttonText', () => {
            cy.mount(<Search locale={enUS.Search} />);
            cy.get('[aria-label]');
        });

        it('should override aria-label with prop', () => {
            cy.mount(<Search locale={enUS.Search} aria-label="a11y search" />);
            cy.get('input').should('not.have.attr', 'aria-label', `${enUS.Search.buttonText}`);
            cy.get('[aria-label]');
        });

        it('should support icons', () => {
            cy.mount(
                <Search
                    icons={{ search: <span id="icon-text">sc</span> }}
                    aria-label="a11y search"
                />
            );
            cy.get('.next-search-btn span').eq(0).should('have.text', 'sc');
        });
    });

    describe('behavior', () => {
        it('simulates onChange/onSearch/onBlur events', () => {
            const onChange = cy.spy();
            const onSearch = cy.spy();
            const onBlur = cy.spy();

            cy.mount(<Search onChange={onChange} onSearch={onSearch} onBlur={onBlur} />).as(
                'Search'
            );
            cy.get('input').type('2');
            cy.wrap(onChange).should('be.calledOnce');

            cy.get('button').click();
            cy.wrap(onSearch).should('be.calledOnce');

            cy.get('input').type('{enter}');
            cy.wrap(onSearch).should('be.calledTwice');

            cy.get('input').blur();
            cy.get('input').focus();
        });
        it('should support defaultValue ', () => {
            const onChange = cy.spy();
            cy.mount(<Search defaultValue={'123'} onChange={onChange} />).as('Search');

            cy.get('input').type('20');
            cy.wrap(onChange).should('be.calledTwice', '20');
            cy.get<MountReturn>('@Search').then(({ component, rerender }) => {
                return rerender(React.cloneElement(component as ReactElement, { value: '30' }));
            });
            cy.wrap(onChange).should('be.calledTwice', '20');
        });

        it('should support onSearch ', () => {
            const onSearch = cy.spy();
            cy.mount(<Search defaultValue={'123'} onSearch={onSearch} />);
            cy.get('input').type('{enter}');
            cy.wrap(onSearch).should('be.calledOnceWith', '123');
        });

        it('should support onChange/onSearch ', () => {
            const dataSource = [
                {
                    label: 'AAAAA',
                    value: 'AAAAA',
                },
                {
                    label: 'AAAAA12345',
                    value: 'AAAAA12345',
                },
                {
                    label: 'CCCC',
                    value: 'CCCC',
                },
            ];
            const onSearch = cy.spy();
            cy.mount(<Search dataSource={dataSource} onSearch={onSearch} />);
            cy.get('.next-search input').click();
            cy.get('.next-search input').type('A');

            cy.get('.next-search input').type('{enter}');
            cy.get('input').should('have.prop', 'value', 'AAAAA');
        });

        it('should support filter ', () => {
            let filter = [
                {
                    text: 'Products',
                    value: 'Products',
                },
                {
                    text: 'Products1',
                    value: 'Products1',
                    default: true,
                },
                {
                    text: 'Products2',
                    value: 'Products2',
                },
            ];

            const FILTER_INDEX = 1;
            const onFilterChange = cy.spy();
            cy.mount(
                <Search filter={filter} defaultValue={'123'} onFilterChange={onFilterChange} />
            ).as('Search');
            // 点击
            cy.get('.next-search-left-addon .next-select-single').click();
            cy.get('.next-menu-item').eq(FILTER_INDEX).click();
            cy.wrap(onFilterChange).should('be.calledWith', filter[FILTER_INDEX].value);
            filter = [
                {
                    text: 'Products',
                    value: 'Products',
                },
                {
                    text: 'newone',
                    value: 'newone',
                    default: true,
                },
                {
                    text: 'Products2',
                    value: 'Products2',
                },
            ];
            cy.get<MountReturn>('@Search').then(({ component, rerender }) => {
                return rerender(React.cloneElement(component as ReactElement, { filter }));
            });
            cy.get('.next-search-left-addon .next-select-single').click();
            cy.get('.next-menu-item').eq(FILTER_INDEX).click();
            cy.wrap(onFilterChange).should('be.calledWith', filter[FILTER_INDEX].value);
        });

        it('should support filterValue', () => {
            const FILTER_VALUE = 'Products1';

            const filter = [
                {
                    text: 'Products',
                    value: 'Products',
                },
                {
                    text: 'Products1',
                    value: 'Products1',
                },
                {
                    text: 'Products2',
                    value: 'Products2',
                },
            ];
            const onSearch = cy.spy();
            cy.mount(
                <Search
                    defaultValue={'123'}
                    filter={filter}
                    filterValue={FILTER_VALUE}
                    onSearch={onSearch}
                />
            );
            cy.get('.next-select-values em').should('have.text', FILTER_VALUE);
            cy.get('button').click();
            cy.wrap(onSearch).should('be.calledWith', '123', FILTER_VALUE);
        });

        it('act in controlled way', () => {
            const filter = [
                {
                    text: 'Products',
                    value: 'Products',
                    default: true,
                },
                {
                    text: 'Products1',
                    value: 'Products1',
                },
                {
                    text: 'Products2',
                    value: 'Products2',
                },
            ];
            const FILTER_INDEX = 2;
            const FILTER_VALUE = filter[FILTER_INDEX].value;
            const VALUE = 'test';

            const onSearch = cy.spy();

            cy.mount(<Search onSearch={onSearch} />).as('Search');
            cy.get<MountReturn>('@Search').then(({ component, rerender }) => {
                return rerender(
                    React.cloneElement(component as ReactElement, {
                        value: VALUE,
                        filterValue: FILTER_VALUE,
                    })
                );
            });
            cy.get('button').click();
            cy.wrap(onSearch).should('be.calledWith', VALUE, FILTER_VALUE);
        });
        it('should support disabled', () => {
            const onSearch = cy.spy().as('onSearch');
            const onChange = cy.spy().as('onChange');
            cy.mount(<Search shape="simple" onSearch={onSearch} onChange={onChange} disabled />).as(
                'Search'
            );
            cy.get('.next-icon').click({ force: true });
            cy.get('@onSearch').should('not.have.been.called');

            cy.get('input').type('20', { force: true });
            cy.get('@onChange').should('not.have.been.called');
        });

        it('should support enter key', () => {
            const onSearch = cy.spy();
            cy.mount(<Search onSearch={onSearch} value="123" />);
            // 支持enter
            cy.get('button.next-search-btn').trigger('keydown', { keyCode: 13 });
            cy.wrap(onSearch).should('have.been.calledOnce');
            // 不支持非enter
            cy.get('button.next-search-btn').trigger('keydown', { keyCode: 14 });
            cy.wrap(onSearch).should('have.been.calledOnce');
        });

        it('should support disable enter key', () => {
            const onSearch = cy.spy();
            cy.mount(<Search disabled shape="simple" onSearch={onSearch} value="123" />);
            cy.get('.next-icon').trigger('keydown', { keyCode: 13 });
            cy.wrap(onSearch).should('not.have.been.called');
        });
    });

    describe('CombobBox', () => {
        const dataSource = [
            {
                label: 'xxx',
                value: 'yyy',
            },
            {
                label: 'Recent',
                value: 'Recent',
            },
        ];

        it('should support DataSource ', () => {
            cy.mount(<Search dataSource={dataSource} />);
            cy.get('input').click();
            cy.get('.next-menu-item').should('have.length', dataSource.length);
            cy.get('input').type('y');

            cy.get('.next-menu-item').should('have.length', 1);
            cy.get('.next-menu-item').eq(0).should('text', 'xxx');
            cy.get('.next-menu-item').eq(0).click();
            cy.get('input').should('have.value', 'yyy');
        });
        it('should support dataSource filter ', () => {
            cy.mount(<Search dataSource={dataSource} />);
            cy.get('input').click();
            cy.get('input').type('y');
            cy.get('.next-menu-item').should('have.length', 1);
            cy.get('.next-menu-item')
                .eq(0)
                .find('.next-menu-item-text')
                .should('contain', dataSource[0].label);
        });
        it('should support dataSource value click ', () => {
            cy.mount(<Search dataSource={dataSource} />);
            cy.get('input').click();
            cy.get('input').type('y');
            cy.get('.next-menu-item').eq(0).click();
            cy.get('input').should('have.value', dataSource[0].value);
        });
        it('should support dataSource and onSearch', () => {
            const onSearch = cy.stub();
            cy.mount(<Search dataSource={dataSource} onSearch={onSearch} />);
            // has matched item
            cy.get('input').type('y{enter}');
            cy.wrap(onSearch).should('have.been.calledOnceWith', 'yyy');
            cy.get('input').clear();
            // does not has matched item
            cy.get('input').type('abc{enter}');
            cy.wrap(onSearch).should('have.been.calledTwice');
            cy.wrap(onSearch).should('have.been.calledWith', 'abc');
        });
    });
});
