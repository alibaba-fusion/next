import React, { useState } from 'react';
import CascaderSelect, { type CascaderSelectDataItem, type CascaderSelectProps } from '../index';
import '../style';

function freeze(dataSource: NonNullable<CascaderSelectProps['dataSource']>) {
    return dataSource.map(item => {
        const { children } = item;
        children && freeze(children);
        return Object.freeze({ ...item });
    });
}

function findItem(menuIndex: number, itemIndex: number) {
    return cy.get('.next-cascader-menu').eq(menuIndex).children().eq(itemIndex);
}

function labelsShouldBe(expected: string[]) {
    cy.get('span.next-tag-body').should('have.text', expected.join(''));
}

function findRealItem(
    cascader: Cypress.Chainable<JQuery<HTMLElement>>,
    listIndex: number,
    itemIndex: number
) {
    return cascader
        .find('.next-cascader-menu')
        .eq(listIndex)
        .find('.next-cascader-menu-item')
        .eq(itemIndex);
}

const ChinaArea = [
    {
        value: '2973',
        label: '陕西',
        children: [
            {
                value: '2974',
                label: '西安',
                children: [
                    { value: '2975', label: '西安市' },
                    { value: '2976', label: '高陵县' },
                ],
            },
            {
                value: '2980',
                label: '铜川',
                children: [
                    { value: '2981', label: '铜川市' },
                    { value: '2982', label: '宜君县' },
                ],
            },
        ],
    },
    {
        value: '3078',
        label: '四川',
    },
];

describe('CascaderSelect', () => {
    it('should show dropdown when set defaultVisible to true', () => {
        cy.mount(<CascaderSelect dataSource={ChinaArea} defaultVisible />);
        cy.get('.next-cascader-select-dropdown').should('exist');
    });

    it('should show dropdown when click select box', () => {
        cy.mount(<CascaderSelect dataSource={ChinaArea} />);
        cy.get('.next-cascader-select-dropdown').should('not.exist');
        cy.get('.next-select').click();
        cy.get('.next-cascader-select-dropdown').should('exist');
    });

    it('should render single cascader select', () => {
        const handleChange = cy.spy();

        cy.mount(
            <CascaderSelect
                defaultVisible
                defaultValue="2975"
                dataSource={ChinaArea}
                onChange={handleChange}
            />
        ).as('Demo');
        cy.get('.next-select-inner em').should('have.text', '陕西 / 西安 / 西安市');

        findItem(2, 1).click();
        cy.wrap(handleChange).should('be.called');
        cy.get('.next-select-inner em').should('have.text', '陕西 / 西安 / 高陵县');
        cy.rerender('Demo', { displayRender: (label: string[]) => label.join('-') });
        cy.get('.next-select-inner em').should('have.text', '陕西-西安-高陵县');
    });

    it('should render single cascader under control', () => {
        const changedSpy = cy.spy();
        const Demo = () => {
            const [value, setValue] = useState('2975');
            const handleChange: CascaderSelectProps['onChange'] = (value: string) => {
                changedSpy(value);
                setValue(value);
            };
            return (
                <CascaderSelect
                    defaultVisible
                    defaultValue="2976"
                    value={value}
                    dataSource={ChinaArea}
                    onChange={handleChange}
                />
            );
        };

        cy.mount(<Demo />);
        cy.get('.next-select-inner em').should('have.text', '陕西 / 西安 / 西安市');
        findItem(2, 1).click();
        cy.wrap(changedSpy).should('be.called');
        cy.get('.next-select-inner em').should('have.text', '陕西 / 西安 / 高陵县');
    });

    it('should change select box display when expand item if set changeOnSelect to true', () => {
        cy.mount(<CascaderSelect changeOnSelect defaultVisible dataSource={ChinaArea} />);
        findItem(0, 0).click();
        cy.get('.next-select-inner em').should('have.text', '陕西');
        findItem(1, 0).click();
        cy.get('.next-select-inner em').should('have.text', '陕西 / 西安');
        findItem(2, 0).click();
        cy.get('.next-select-inner em').should('have.text', '陕西 / 西安 / 西安市');
    });

    it('should render multiple cascader', () => {
        const dataSource = [
            {
                value: '2973',
                label: '陕西',
                children: [
                    {
                        value: '2974',
                        label: '西安',
                        children: [
                            {
                                value: '2975',
                                label: '西安市',
                            },
                            {
                                value: '2976',
                                label: '高陵县',
                            },
                        ],
                    },
                    {
                        value: '2980',
                        label: '铜川',
                    },
                ],
            },
        ];
        const spyChange = cy.spy().as('handleChange');
        const handleChange: CascaderSelectProps['onChange'] = (v, d, e) => {
            spyChange();
            expect(v).to.deep.equal(['2980']);
            expect(d).to.deep.equal([
                {
                    value: '2980',
                    label: '铜川',
                    pos: '0-0-1',
                },
            ]);
            delete e!.indeterminateData![0].children;
            expect(e).deep.equal({
                checked: false,
                currentData: { value: '2975', label: '西安市', pos: '0-0-0-0' },
                checkedData: [{ value: '2980', label: '铜川', pos: '0-0-1' }],
                indeterminateData: [{ value: '2973', label: '陕西', pos: '0-0' }],
            });
        };

        cy.mount(
            <CascaderSelect
                multiple
                defaultVisible
                defaultValue={['2975', '2980']}
                dataSource={dataSource}
                onChange={handleChange}
            />
        );
        labelsShouldBe(['铜川', '西安市']);
        cy.get('span.next-tag-close-btn').eq(1).click();
        labelsShouldBe(['铜川']);
        cy.get('@handleChange').should('be.called');
    });

    it('should render multiple cascader when set checkStrictly to true', () => {
        const dataSource = [
            {
                value: '2973',
                label: '陕西',
                children: [
                    {
                        value: '2974',
                        label: '西安',
                        children: [
                            {
                                value: '2975',
                                label: '西安市',
                            },
                            {
                                value: '2976',
                                label: '高陵县',
                            },
                        ],
                    },
                    {
                        value: '2980',
                        label: '铜川',
                    },
                ],
            },
        ];
        const spyChange = cy.spy().as('handleChange');
        const handleChange: CascaderSelectProps['onChange'] = (v, d, e) => {
            spyChange();
            expect(v).to.deep.equal(['2980']);
            expect(d).to.deep.equal([
                {
                    value: '2980',
                    label: '铜川',
                    pos: '0-0-1',
                },
            ]);
            expect(e).to.deep.equal({
                checked: false,
                currentData: { value: '2975', label: '西安市', pos: '0-0-0-0' },
                checkedData: [{ value: '2980', label: '铜川', pos: '0-0-1' }],
            });
        };
        cy.mount(
            <CascaderSelect
                multiple
                defaultVisible
                checkStrictly
                defaultValue={['2975', '2980']}
                dataSource={dataSource}
                onChange={handleChange}
            />
        );
        labelsShouldBe(['西安市', '铜川']);
        cy.get('span.next-tag-close-btn').eq(0).click();
        labelsShouldBe(['铜川']);
        cy.get('@handleChange').should('be.called');
    });

    it('should support searching when it is a single cascader select', () => {
        cy.mount(
            <CascaderSelect showSearch defaultVisible defaultValue="2975" dataSource={ChinaArea} />
        );
        cy.get('.next-select-trigger-search input').type('哈哈');
        cy.get('.next-cascader-select-not-found').should('have.text', '无选项');
        cy.get('.next-select-trigger-search input').clear();
        cy.get('.next-select-trigger-search input').type('高陵');
        cy.get('.next-cascader-filtered-list').should('have.text', '陕西 / 西安 / 高陵县');
        cy.get('.next-cascader-filtered-list em').should('have.text', '高陵');
        cy.get('.next-cascader-filtered-item').click();
        cy.get('.next-select-inner em').should('have.text', '陕西 / 西安 / 高陵县');
    });

    it('should support searching when it is a multiple cascader select', () => {
        cy.mount(
            <CascaderSelect
                multiple
                showSearch
                defaultVisible
                defaultValue="2975"
                dataSource={ChinaArea}
            />
        );
        cy.get('.next-select-trigger-search input').type('哈哈');
        cy.get('.next-cascader-select-not-found').should('have.text', '无选项');
        cy.get('.next-select-trigger-search input').clear();
        cy.get('.next-select-trigger-search input').type('高陵');
        cy.get('.next-cascader-filtered-list').should('have.text', '陕西 / 西安 / 高陵县');
        cy.get('.next-cascader-filtered-list em').should('have.text', '高陵');
    });

    it('should ignore case when searching', () => {
        const SpecialChars = '-[.+*?^$()[]{}|\\';
        const dataSource = [
            {
                value: 'Aa',
                label: 'Aa',
                children: [
                    {
                        value: 'Bb',
                        label: 'Bb',
                    },
                    {
                        value: SpecialChars,
                        label: SpecialChars,
                    },
                ],
            },
        ];
        cy.mount(
            <CascaderSelect showSearch defaultVisible defaultValue="Aa" dataSource={dataSource} />
        );

        const specialCharCases = SpecialChars.split('').map(c => [c, c]);

        [['aa', 'Aa'], ['BB', 'Bb'], ...specialCharCases].forEach(([iptVal, excepted]) => {
            cy.get('.next-select-trigger-search input').type(iptVal);
            cy.get('.next-cascader-filtered-list em').eq(0).should('have.text', excepted);
            cy.get('.next-select-trigger-search input').clear();
        });
    });

    it('should support keyboard', () => {
        cy.mount(<CascaderSelect dataSource={ChinaArea} />);
        cy.get('.next-select').click();
        cy.get('.next-cascader').should('exist');
        cy.get('.next-select-trigger-search input').type('{downArrow}', { force: true });
        findRealItem(cy.get('.next-cascader'), 0, 0).then($el => {
            expect($el.get(0)).to.equal(document.activeElement);
        });
    });

    it('should support signle value not in dataSource', () => {
        const VALUE = '222333';
        const handleValueRender = cy.spy().as('handleValueRender');
        const valueRender: CascaderSelectProps['valueRender'] = item => {
            handleValueRender(!item.label, item.value);
        };
        cy.mount(
            <CascaderSelect dataSource={ChinaArea} defaultValue={VALUE} valueRender={valueRender} />
        );
        cy.get('@handleValueRender').should('be.calledWith', true, VALUE);
    });

    it('should support multiple value not in dataSource', () => {
        const VALUE = '222333';
        const handleValueRender = cy.spy().as('handleValueRender');
        const valueRender: CascaderSelectProps['valueRender'] = item => {
            handleValueRender(!item.label, item.value);
        };
        cy.mount(
            <CascaderSelect
                multiple
                displayRender={(displayPath, item) => item.label || ''}
                dataSource={ChinaArea}
                valueRender={valueRender}
                defaultVisible
            />
        ).as('Demo');
        cy.rerender('Demo', { value: VALUE });
        cy.get('@handleValueRender').should('be.calledWith', true, VALUE);
        const handleChange = cy.spy();
        cy.rerender<CascaderSelectProps>('Demo', {
            valueRender: item => item.label,
            onChange: handleChange,
        });
        findItem(0, 0).find('input').check();
        cy.wrap(handleChange).should('be.calledWith', [VALUE, '2973']);
    });

    it('should support preview mode render', () => {
        const dataSource = [
            {
                value: '2973',
                label: '陕西',
                children: [
                    {
                        value: '2974',
                        label: '西安',
                        children: [
                            {
                                value: '2975',
                                label: '西安市',
                            },
                            {
                                value: '2976',
                                label: '高陵县',
                            },
                        ],
                    },
                    {
                        value: '2980',
                        label: '铜川',
                    },
                ],
            },
        ];

        cy.mount(<CascaderSelect dataSource={dataSource} isPreview defaultValue={'2975'} />).as(
            'Demo'
        );
        cy.get('.next-form-preview').should('exist');
        cy.get('.next-form-preview').should('have.text', '陕西 / 西安 / 西安市');
        cy.rerender<CascaderSelectProps>('Demo', {
            renderPreview: (items: CascaderSelectDataItem[]) => {
                expect(items.length).to.equal(1);
                expect(items[0].label).to.equal('陕西 / 西安 / 西安市');
                return 'Hello World';
            },
        });
        cy.get('.next-form-preview').should('have.text', 'Hello World');
    });

    it('should support setting resultAutoWidth to false', () => {
        const width = '120px';
        cy.mount(
            <CascaderSelect
                popupProps={{ className: 'result-auto-width-popup' }}
                className="cs-auto-width"
                style={{ width }}
                multiple
                resultAutoWidth={false}
                showSearch
                defaultVisible
                defaultValue="2975"
                dataSource={ChinaArea}
            />
        );
        cy.get('.cs-auto-width input').type('杭州');
        cy.get('.result-auto-width-popup').then($el => {
            expect($el.get(0).style.width).to.equal('');
        });
    });

    it('should support expandedValue', () => {
        cy.mount(
            <CascaderSelect
                popupProps={{ className: 'myCascaderSelect' }}
                dataSource={ChinaArea}
                expandedValue={['2973', '2974']}
                defaultVisible
            />
        );
        findRealItem(cy.get('.myCascaderSelect'), 2, 1).should('exist');
    });

    it('should support immutable data', () => {
        cy.mount(
            <CascaderSelect
                immutable
                popupProps={{ className: 'myCascaderSelect' }}
                dataSource={freeze(ChinaArea)}
                expandedValue={['2973', '2974']}
                defaultVisible
            />
        );
        findRealItem(cy.get('.myCascaderSelect'), 2, 1).should('exist');
    });

    it('should support onSearch', () => {
        const handleSearch = cy.spy();
        cy.mount(
            <CascaderSelect
                dataSource={ChinaArea}
                expandedValue={['2973', '2974']}
                onSearch={handleSearch}
                showSearch
                defaultVisible
            />
        );
        cy.get('input').type('searchValue');
        cy.wrap(handleSearch).should('be.calledWith', 'searchValue');
    });

    it('keep value && label after dataSource updated', () => {
        const newDataSource = [
            {
                value: '3478',
                label: '浙江',
                children: [
                    {
                        value: '3479',
                        label: '杭州',
                        children: [
                            { value: '3480', label: '杭州市' },
                            { value: '3481', label: '建德市' },
                        ],
                    },
                ],
            },
        ];

        // 多选 multiple=true
        cy.mount(
            <CascaderSelect visible multiple dataSource={ChinaArea} defaultValue={['2975']} />
        ).as('Demo');

        cy.rerender('Demo', { dataSource: newDataSource });

        labelsShouldBe(['西安市']);

        cy.get('.next-checkbox-input').eq(0).check();
        labelsShouldBe(['西安市', '浙江']);

        cy.get('.next-tag-close-btn').eq(0).click();
        labelsShouldBe(['浙江']);

        // // 单选 multiple=false
        cy.mount(<CascaderSelect dataSource={ChinaArea} value="2975" />).as('Demo1');

        cy.get('.next-input-text-field em').should('have.text', '陕西 / 西安 / 西安市');

        cy.rerender('Demo1', { dataSource: newDataSource });

        cy.get('.next-input-text-field em').should('have.text', '陕西 / 西安 / 西安市');
    });

    it('should support popup v2', () => {
        cy.mount(<CascaderSelect dataSource={ChinaArea} popupProps={{ v2: true }} showSearch />);
        cy.get('.next-select').click();
        cy.get('.next-cascader-select-dropdown').should('exist');
    });

    it('should support focus api', () => {
        let cs: InstanceType<typeof CascaderSelect> | null = null;
        cy.mount(
            <CascaderSelect
                id="cascader-focus"
                ref={c => {
                    cs = c;
                }}
                dataSource={ChinaArea}
            />
        ).as('Demo');
        cy.then(() => {
            cs?.getInstance().focus();
            expect(document.activeElement!.id).to.equal('cascader-focus');
        });
    });

    it('should support visible by keyboard', () => {
        cy.mount(<CascaderSelect followTrigger dataSource={ChinaArea} />);
        cy.get('input').type('{upArrow}', { force: true });
        cy.get('.next-cascader-select-dropdown').should('exist');
    });
});
