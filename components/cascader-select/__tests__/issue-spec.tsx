import React, { forwardRef, useEffect, useState } from 'react';
import CascaderSelect from '../index';
import '../style';

const ChinaAreaData = [
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
    {
        children: [
            {
                value: '3372',
                label: '乌鲁木齐',
                children: [
                    {
                        value: '3373',
                        label: '乌鲁木齐市',
                    },
                    {
                        value: '3374',
                        label: '乌鲁木齐县',
                    },
                ],
            },
        ],
        value: '3371',
        label: '新疆',
    },
];

function findItem(menuIndex: number, itemIndex: number) {
    return cy.get('.next-cascader-menu').eq(menuIndex).children().eq(itemIndex);
}

function shouldExpanded(text: string, menuIndex: number, itemIndex: number) {
    const item = findItem(menuIndex, itemIndex);
    item.should('have.text', text);
    item.should('have.class', 'next-expanded');
}

function shouldSelected(text: string, menuIndex: number, itemIndex: number) {
    const item = findItem(menuIndex, itemIndex);
    item.should('exist');
    item.should('have.text', text);
    item.should('have.class', 'next-selected');
}

describe('CascaderSelect issues', function () {
    it('should sync expandedValue when visible=false and props.value changed ', () => {
        const Demo = forwardRef<unknown, { value?: string; visible?: boolean }>(props => {
            const { value: propsValue = '2975', visible = false } = props;
            const [value, setValue] = useState(propsValue);
            useEffect(() => {
                setValue(propsValue);
            }, [propsValue]);
            return (
                <CascaderSelect
                    followTrigger
                    value={value}
                    visible={visible}
                    dataSource={ChinaAreaData}
                    onChange={(v: string) => setValue(v)}
                />
            );
        });
        cy.mount(<Demo />).as('Demo');
        cy.get('span.next-select-inner em').should('have.text', '陕西 / 西安 / 西安市');
        cy.rerender('Demo', { visible: true });
        shouldExpanded('陕西', 0, 0);
        shouldExpanded('西安', 1, 0);
        shouldSelected('西安市', 2, 0);
        cy.rerender('Demo', { value: '3373', visible: false }).as('Demo1');
        cy.get('span.next-select-inner em').should('have.text', '新疆 / 乌鲁木齐 / 乌鲁木齐市');
        cy.get('.next-cascader-menu').should('not.exist');
        cy.rerender('Demo', { value: '3373', visible: true });
        shouldExpanded('新疆', 0, 2);
        shouldExpanded('乌鲁木齐', 1, 0);
        shouldSelected('乌鲁木齐市', 2, 0);
    });
});
