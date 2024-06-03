import React, { useState } from 'react';
import { debounce } from 'lodash';
import { KEYCODE } from '../../util';
import TreeSelect from '../index';
import '../style';
import type { DataSourceItem, ObjectItem } from '../../select';
import type { TreeSelectDataItem } from '../types';

const TreeNode = TreeSelect.Node;

const dataSource: TreeSelectDataItem[] = [
    {
        label: '服装',
        className: 'k-1',
        value: '1',
        children: [
            {
                label: '男装',
                value: '2',
                className: 'k-2',
                disabled: true,
                children: [
                    {
                        label: '外套',
                        className: 'k-4',
                        value: '4',
                    },
                    {
                        label: '夹克',
                        className: 'k-5',
                        value: '5',
                    },
                ],
            },
            {
                label: '女装',
                value: '3',
                className: 'k-3',
                children: [
                    {
                        label: '裙子',
                        className: 'k-6',
                        value: '6',
                    },
                ],
            },
        ],
    },
];

function freeze(dataSource: TreeSelectDataItem[]) {
    return Object.freeze([
        ...dataSource.map(item => {
            const { children } = item;
            item.children =
                children && (freeze(children as TreeSelectDataItem[]) as TreeSelectDataItem[]);
            return Object.freeze({ ...item });
        }),
    ]) as TreeSelectDataItem[];
}

function cloneData(data: TreeSelectDataItem[], valueMap: Record<string, TreeSelectDataItem> = {}) {
    const loop = (data: TreeSelectDataItem[]) =>
        data.map(item => {
            let newItem: TreeSelectDataItem;

            if ((item.value as string) in valueMap) {
                newItem = { ...item, ...valueMap[item.value as string] };
            } else {
                newItem = { ...item };
            }
            if (newItem.children) {
                newItem.children = loop(newItem.children as TreeSelectDataItem[]);
            }

            return newItem;
        });

    return loop(data);
}

function flattenData(dataSource: ObjectItem[]) {
    const flattenList: ObjectItem[] = [];
    const drill = (data: ObjectItem[]) => {
        data.forEach(item => {
            const { children, ...newItem } = item;
            flattenList.push(newItem);
            children && children.length && drill(children as ObjectItem[]);
        });
    };

    drill(dataSource);

    return flattenList;
}

function shouldDataAndNodes(dataSource: ObjectItem[]) {
    cy.get('li.next-tree-node .next-tree-node-label').then($el => {
        flattenData(dataSource).every((item, index) =>
            expect(item.label).to.equal($el[index].textContent?.trim())
        );
    });
}

function findTreeNodeByValue(value: string) {
    return cy.get(`.k-${value}`);
}

function createMap(data: ObjectItem[]) {
    const map: Record<string, ObjectItem> = {};

    const loop = (data: ObjectItem[], prefix = '0') => {
        data.forEach((item, index) => {
            const { value, label, children, ...rests } = item;
            const pos = `${prefix}-${index}`;
            map[value as string] = { ...rests, value, label, pos, key: pos };
            if (children && children.length) {
                loop(children as ObjectItem[], pos);
            }
        });
    };
    loop(data);

    return map;
}

function selectTreeNode(value: string) {
    findTreeNodeByValue(value).find('.next-tree-node-label').first().click();
}

function checkTreeNode(value: string) {
    findTreeNodeByValue(value).find('.next-checkbox input').click();
}

function shouldSelected(value: string, selected: boolean) {
    findTreeNodeByValue(value)
        .find('.next-tree-node-inner')
        .should(selected ? 'have.class' : 'not.have.class', 'next-selected');
}

function shouldChecked(value: string, checked: boolean) {
    findTreeNodeByValue(value)
        .find('.next-checkbox-wrapper')
        .should(checked ? 'have.class' : 'not.have.class', 'checked');
}

function getLabels() {
    return cy.get('span.next-tag-body').then($el => {
        return $el.map((index, el) => {
            return Cypress.$(el).text().trim();
        });
    });
}

function shouldHideElement() {
    cy.document().then(document => {
        const overlay = document.querySelector('.next-overlay-wrapper');
        if (overlay) {
            cy.wrap(overlay).should($el => {
                expect($el).to.have.css('display', 'none');
            });
        } else {
            expect(overlay).to.be.null;
        }
    });
}

function shouldShowElement() {
    cy.document().then(document => {
        const overlay = document.querySelector('.next-overlay-wrapper');
        expect(overlay).to.not.be.null;
        cy.wrap(overlay).should($el => {
            expect($el).to.not.have.css('display', 'none');
        });
    });
}

const _v2n = createMap(dataSource);

describe('TreeSelect', () => {
    it('should show dropdown when click select box', () => {
        cy.mount(<TreeSelect dataSource={dataSource} />);
        cy.get('.next-select').trigger('click');
        cy.get('.next-tree-select-dropdown').should('exist');
    });

    it('should show dropdown when set defaultVisible to true', () => {
        cy.mount(<TreeSelect defaultVisible />);
        cy.get('.next-tree-select-dropdown').should('exist');
    });

    it('should render by loop TreeNode', () => {
        const loop = (data: ObjectItem[]) =>
            data.map(item => {
                return (
                    <TreeNode key={item.value as string} {...item}>
                        {item.children ? loop(item.children as ObjectItem[]) : null}
                    </TreeNode>
                );
            });
        cy.mount(
            <TreeSelect defaultVisible treeDefaultExpandAll>
                {loop(dataSource)}
            </TreeSelect>
        ).as('Demo');
        shouldDataAndNodes(dataSource);

        const newDataSource = [...dataSource];
        newDataSource.push({
            label: '鞋',
            value: '7',
        });

        cy.rerender('Demo', {
            children: loop(newDataSource),
        });
        shouldDataAndNodes(newDataSource);
    });

    it('should render by dataSource', () => {
        cy.mount(<TreeSelect defaultVisible treeDefaultExpandAll dataSource={dataSource} />).as(
            'Demo'
        );
        shouldDataAndNodes(dataSource);

        const newDataSource = [...dataSource];
        newDataSource.push({
            label: '鞋',
            value: '7',
        });
        cy.rerender('Demo', { dataSource: newDataSource });
        shouldDataAndNodes(newDataSource);
    });

    it('should render by defaultValue', () => {
        cy.mount(
            <TreeSelect
                defaultValue="4"
                defaultVisible
                treeDefaultExpandAll
                dataSource={dataSource}
            />
        ).as('Demo');
        shouldSelected('4', true);

        cy.rerender('Demo', {
            defaultValue: '6',
        });
        shouldSelected('6', false);
    });

    it('should render by detail defaultValue', () => {
        cy.mount(
            <TreeSelect
                defaultValue={{ label: '外套', value: '4' }}
                defaultVisible
                treeDefaultExpandAll
                dataSource={dataSource}
            />
        ).as('Demo');
        shouldSelected('4', true);

        cy.rerender('Demo', {
            defaultValue: { label: '裙子', value: '6' },
        });
        shouldSelected('6', false);
    });

    it('should render by value', () => {
        cy.mount(
            <TreeSelect
                defaultValue="4"
                value="6"
                multiple
                defaultVisible
                treeDefaultExpandAll
                dataSource={dataSource}
            />
        ).as('Demo');
        shouldSelected('4', false);
        shouldSelected('6', true);

        const newValue = ['4', '6'];
        cy.rerender('Demo', {
            value: newValue,
        });
        shouldSelected('4', true);
        shouldSelected('6', true);
    });

    it('should render by detail value', () => {
        cy.mount(
            <TreeSelect
                defaultValue={{ label: '外套', value: '4' }}
                value={{ label: '裙子', value: '6' }}
                multiple
                defaultVisible
                treeDefaultExpandAll
                dataSource={dataSource}
            />
        ).as('Demo');
        shouldSelected('4', false);
        shouldSelected('6', true);
        const newValue = [
            { label: '外套', value: '4' },
            { label: '裙子', value: '6' },
        ];
        cy.rerender('Demo', {
            value: newValue,
        });
        shouldSelected('4', true);
        shouldSelected('6', true);
    });

    it('should render by defaultValue when enable treeCheckable', () => {
        cy.mount(
            <TreeSelect
                defaultValue="4"
                defaultVisible
                treeCheckable
                treeDefaultExpandAll
                dataSource={dataSource}
            />
        ).as('Demo');
        shouldChecked('4', true);
        cy.rerender('Demo', {
            defaultValue: '6',
        });
        shouldChecked('6', false);
    });

    it('should render by value when enable treeCheckable', () => {
        cy.mount(
            <TreeSelect
                defaultValue="4"
                value="6"
                defaultVisible
                treeCheckable
                treeDefaultExpandAll
                dataSource={dataSource}
            />
        ).as('Demo');
        shouldChecked('4', false);
        shouldChecked('6', true);
        const newValue = ['4', '6'];
        cy.rerender('Demo', {
            value: newValue,
        });
        shouldChecked('4', true);
        shouldChecked('6', true);
    });

    it('should trigger onChange and close dropdown when select tree node', () => {
        const onClick = cy.spy();

        const expectValue = '4';
        const expectItem = _v2n[expectValue];
        const handleChange = (
            value: DataSourceItem | DataSourceItem[],
            data: ObjectItem | ObjectItem[] | null
        ) => {
            onClick();
            expect(value).to.equal(expectValue);
            expect(data).to.deep.equal(expectItem);
        };

        cy.mount(
            <TreeSelect
                defaultVisible
                treeDefaultExpandAll
                dataSource={dataSource}
                onChange={handleChange}
            />
        );
        selectTreeNode(expectValue);
        cy.wrap(onClick).should('be.calledOnce');
        shouldHideElement();
    });

    it('should not trigger onChange but close dropdown when select selected node', () => {
        const onClick = cy.spy();
        const value = '4';
        const handleChange = () => {
            onClick();
        };

        cy.mount(
            <TreeSelect
                defaultVisible
                treeDefaultExpandAll
                dataSource={dataSource}
                value={value}
                onChange={handleChange}
            />
        );
        selectTreeNode(value);
        cy.wrap(onClick).should('not.be.called');
        shouldHideElement();
    });

    it('should trigger onChange but not close dropdown when select node and enable multiple', () => {
        const onClick = cy.spy();
        const initValue = '4';
        const appendValue = '6';
        const expectValue = [initValue, appendValue];
        const handleChange = (
            value: DataSourceItem | DataSourceItem[],
            data: ObjectItem | ObjectItem[] | null
        ) => {
            onClick();
            expect(value).to.deep.equal(expectValue);
            expect(data).to.deep.equal(expectValue.map(v => _v2n[v]));
        };

        cy.mount(
            <TreeSelect
                defaultVisible
                multiple
                treeDefaultExpandAll
                dataSource={dataSource}
                value={initValue}
                onChange={handleChange}
            />
        );
        selectTreeNode(appendValue);
        cy.wrap(onClick).should('be.calledOnce');
        shouldShowElement();
    });

    it('should trigger onChange when check node', () => {
        const onClick = cy.spy();
        const initValue = '4';
        const appendValue = '6';
        const expectValue = ['4', '3'];
        const handleChange = (
            value: DataSourceItem | DataSourceItem[],
            data: ObjectItem | ObjectItem[] | null
        ) => {
            onClick();
            expect(value).to.deep.equal(expectValue);
            expect(data).to.deep.equal(expectValue.map(v => _v2n[v]));
        };
        cy.mount(
            <TreeSelect
                defaultVisible
                treeCheckable
                treeDefaultExpandAll
                dataSource={cloneData(dataSource, {
                    2: { disabled: false },
                })}
                value={initValue}
                onChange={handleChange}
            />
        ).then(() => {
            checkTreeNode(appendValue);
            cy.wrap(onClick).should('be.calledOnce');
        });
    });

    it('should trigger onChange when check node and enable treeCheckStrictly', () => {
        const onClick = cy.spy();
        const appendValue = '6';
        const expectValue = [appendValue];
        const handleChange = (
            value: DataSourceItem | DataSourceItem[],
            data: ObjectItem | ObjectItem[] | null
        ) => {
            onClick();
            expect(value).to.deep.equal(expectValue);
            expect(data).to.deep.equal(expectValue.map(v => _v2n[v]));
        };

        cy.mount(
            <TreeSelect
                defaultVisible
                treeCheckable
                treeCheckStrictly
                treeDefaultExpandAll
                dataSource={dataSource}
                onChange={handleChange}
            />
        ).then(() => {
            checkTreeNode(appendValue);
            cy.wrap(onClick).should('be.calledOnce');
        });
    });

    it('should render tag when defaultValue [{ label, value}]', () => {
        cy.mount(
            <TreeSelect
                defaultValue={[{ label: 'test1', value: '123' }]}
                treeDefaultExpandAll
                treeCheckable
                preserveNonExistentValue
                dataSource={dataSource}
            />
        );

        getLabels().then($labels => {
            expect($labels.get()).to.deep.equal(['test1']);
        });
    });

    it('should set parent node checked if all child nodes is checked even treeCheckedStrategy is "child"', () => {
        cy.mount(
            <TreeSelect
                defaultVisible
                treeCheckable
                treeDefaultExpandAll
                dataSource={dataSource}
                style={{ width: 200 }}
                treeCheckedStrategy="child"
                value={['6']}
            />
        );

        shouldChecked('3', true);
    });

    it('should render parent tag when set treeCheckedStrategy to all', () => {
        cy.mount(
            <TreeSelect
                treeCheckable
                dataSource={cloneData(dataSource, {
                    2: { disabled: false },
                })}
                defaultValue={['6']}
                treeCheckedStrategy="parent"
            />
        );
        getLabels().then($labels => {
            expect($labels.get()).to.deep.equal(['女装']);
        });
    });

    it('should render child tag when set treeCheckedStrategy to all', () => {
        cy.mount(
            <TreeSelect
                treeCheckable
                dataSource={dataSource}
                defaultValue={['6']}
                treeCheckedStrategy="child"
            />
        );
        getLabels().then($labels => {
            expect($labels.get()).to.deep.equal(['裙子']);
        });
    });

    it('should render all tag when set treeCheckedStrategy to all', () => {
        cy.mount(
            <TreeSelect
                defaultVisible
                treeDefaultExpandAll
                treeCheckable
                dataSource={cloneData(dataSource, {
                    2: { disabled: false },
                })}
                defaultValue={['6']}
                treeCheckedStrategy="all"
            />
        );

        getLabels().then($labels => {
            expect($labels.get()).to.deep.equal(['女装', '裙子']);
        });

        cy.get('div.next-tag').eq(0).find('.next-icon-close').click();
        cy.get('span.next-tag-body').should('not.exist');
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

        cy.mount(<TreeSelect dataSource={dataSource} isPreview defaultValue={'2975'} />).as('Demo');
        cy.get('.next-form-preview')
            .should('exist')
            .and($el => {
                expect($el.text()).to.equal('西安市');
            });

        cy.rerender('Demo', {
            renderPreview: (items: ObjectItem[]) => {
                expect(items.length).to.equal(1);
                expect(items[0].label).to.equal('西安市');
                return 'Hello World';
            },
        });
        cy.get('.next-form-preview').then($el => {
            expect($el.text()).to.equal('Hello World');
        });
    });

    it('should trigger onChange when remove tag', () => {
        const onClick = cy.spy();
        const value = ['6'];
        const handleChange = (
            value: ObjectItem | ObjectItem[],
            data: ObjectItem | ObjectItem[]
        ) => {
            onClick();
            expect(value).to.deep.equal([]);
            expect(data).to.deep.equal([]);
        };

        cy.mount(
            <TreeSelect
                defaultVisible
                multiple
                treeDefaultExpandAll
                dataSource={dataSource}
                value={value}
                onChange={handleChange}
            />
        );
        cy.get('.next-icon-close').click();
        cy.wrap(onClick).should('be.called');
    });

    it('should support multiple with hasClear', () => {
        cy.mount(
            <TreeSelect
                multiple
                hasClear
                dataSource={dataSource}
                value={['yyy', 'abcd']}
                onChange={value => {
                    expect(value).to.equal(null);
                }}
            />
        );
        cy.get('i.next-icon-delete-filling').click({ force: true });
    });

    it('should trigger onSearch when search some keyword', () => {
        const onClick = cy.spy();
        const searchedValue = '外套';
        const handleSearch = (value: string) => {
            onClick();
            expect(value).to.equal(searchedValue);
        };

        cy.mount(
            <TreeSelect
                defaultVisible
                treeDefaultExpandAll
                dataSource={dataSource}
                showSearch
                onSearch={debounce(handleSearch, 20)} // Debounce for simulate Cypress action type below
            />
        );
        cy.get('.next-select-trigger-search input').type('外套');
        cy.wrap(onClick).should('be.calledOnce');
    });

    it('should hightlight matched node when search some keyword', () => {
        cy.mount(
            <TreeSelect defaultVisible treeDefaultExpandAll showSearch>
                <TreeNode label="string" value="string" key="string">
                    <TreeNode
                        label={<i>react-element</i>}
                        value="react-element"
                        key="react-element"
                        className="react-element"
                    />
                </TreeNode>
            </TreeSelect>
        );

        cy.get('.next-select-trigger-search input').type('element');
        cy.get('.react-element').should('have.class', 'next-filtered');
    });

    it('should ignore case when search', () => {
        const treeData = [
            {
                label: 'Component',
                value: '1',
                selectable: false,
                children: [
                    {
                        label: 'Form',
                        value: '2',
                        children: [
                            {
                                label: 'Input',
                                value: '4',
                            },
                        ],
                    },
                ],
            },
        ];
        cy.mount(
            <TreeSelect defaultVisible dataSource={treeData} treeDefaultExpandAll showSearch />
        );

        ['INPUT', 'input'].forEach(kw => {
            cy.get('.next-select-trigger-search input').clear(); // Need to clear first
            cy.get('.next-select-trigger-search input').type(kw);

            cy.get('.next-filtered').find('.next-tree-node-label').should('have.text', 'Input');
        });
    });

    // https://github.com/alibaba-fusion/next/issues/2029
    it('fix bug after setState onSearch', () => {
        function Demo() {
            const [data, setData] = useState([
                { label: 'element', key: '0', className: 'react-element' },
            ]);

            function handleChange() {
                setData([{ label: 'react-element-new', key: '1', className: 'react-element-new' }]);
            }
            return (
                <TreeSelect
                    defaultVisible
                    treeDefaultExpandAll
                    showSearch
                    dataSource={data}
                    onSearch={debounce(handleChange, 20)}
                />
            );
        }

        cy.mount(<Demo />);

        cy.get('.next-select-trigger-search input').type('element');
        cy.get('.react-element').should('not.exist');
        cy.get('.react-element-new').should('have.class', 'next-filtered');
    });

    it('should only show matched node and its parent node when search some keyword', () => {
        cy.mount(
            <TreeSelect defaultVisible treeDefaultExpandAll dataSource={dataSource} showSearch />
        );
        cy.get('.next-select-trigger-search input').type('外套');

        const expectTreeData = [
            {
                label: '服装',
                value: '1',
                children: [
                    {
                        label: '男装',
                        value: '2',
                        children: [
                            {
                                label: '外套',
                                value: '4',
                            },
                        ],
                    },
                ],
            },
        ];
        shouldDataAndNodes(expectTreeData);

        ['3', '5'].forEach(v => findTreeNodeByValue(v).should('have.css', { display: 'none' }));
    });

    it('should support search well when use virtual', () => {
        const data = cloneData(dataSource);

        data[0].children = (data[0].children as TreeSelectDataItem[]).concat(
            new Array(100).fill(null).map((__, index) => {
                return {
                    value: String(index),
                    label: String(index),
                };
            })
        );
        cy.mount(
            <TreeSelect
                defaultVisible
                treeDefaultExpandAll
                dataSource={data}
                showSearch
                style={{ width: 200 }}
                useVirtual
                treeProps={{
                    style: { maxHeight: '100px', overflow: 'auto' },
                }}
            />
        );
        cy.get('.next-select-trigger-search input').type('77');

        const expectTreeData = [
            {
                label: '服装',
                value: '1',
                children: [
                    {
                        label: '77',
                        value: '77',
                    },
                ],
            },
        ];
        shouldDataAndNodes(expectTreeData);
    });

    // https://github.com/alibaba-fusion/next/issues/2271
    it('fix search bug when useVirtual', () => {
        const data = cloneData(dataSource);

        data[0].children = (data[0].children as TreeSelectDataItem[]).concat(
            new Array(100).fill(null).map((__, index) => {
                return {
                    value: String(index),
                    label: String(index),
                };
            })
        );
        cy.mount(
            <TreeSelect
                defaultVisible
                useVirtual
                treeCheckable
                treeDefaultExpandAll
                dataSource={data}
                showSearch
                style={{ width: 200 }}
                treeProps={{
                    style: { maxHeight: '100px', overflow: 'auto' },
                }}
            />
        );
        cy.get('.next-select-trigger-search input').type('77');

        cy.get('.next-tree-node[value="77"] input').click();

        cy.get('.next-tree-node[value="1"] .indeterminate').should('exist');
    });

    it('should render not found if dataSource is empty or there is no search result', () => {
        cy.mount(<TreeSelect showSearch defaultVisible dataSource={[]} />).as('Demo');
        cy.get('.next-tree-select-not-found').should('have.text', 'Not Found');
        cy.rerender('Demo', { dataSource });
        cy.get('.next-tree').should('exist');

        cy.get('.next-select-trigger-search input').type('哈哈');
        cy.get('.next-tree-select-not-found').should('have.text', 'Not Found');
    });

    it('should turn off local search when filterLocal is false', () => {
        cy.mount(
            <TreeSelect
                defaultVisible
                filterLocal={false}
                treeDefaultExpandAll
                dataSource={dataSource}
                showSearch
                style={{ width: 200 }}
                useVirtual
                treeProps={{
                    style: { maxHeight: '100px', overflow: 'auto' },
                }}
            />
        );

        cy.get('.next-select-trigger-search input').type('外套');

        shouldDataAndNodes(dataSource);
    });

    it('should not clear search value when autoClearSearch is false', () => {
        cy.mount(
            <TreeSelect
                dataSource={dataSource}
                showSearch
                autoClearSearch={false}
                style={{ width: 200 }}
            />
        );

        cy.get('.next-select-trigger-search input').type('外套');
        cy.get('.next-tree-node[value="4"]').click();

        cy.get('.next-select-trigger-search input').should('have.value', '外套');
    });

    it('fix issues use isPreview when value is empty', () => {
        cy.mount(<TreeSelect isPreview dataSource={dataSource} />);
        cy.get('.next-form-preview').should('have.text', '');
    });

    it('should support immutable ', () => {
        cy.mount(
            <TreeSelect defaultVisible treeDefaultExpandAll dataSource={freeze(dataSource)} />
        );
        shouldDataAndNodes(dataSource);
    });

    it('should support keyboard', () => {
        cy.mount(
            <TreeSelect
                dataSource={cloneData(dataSource, {
                    2: {
                        disabled: false,
                    },
                })}
            />
        );
        cy.get('.next-select').click();

        cy.get('.next-tree').should('exist');
        cy.get('.next-select-trigger-search input').trigger('keydown', { keyCode: KEYCODE.DOWN });
        cy.get(
            '.next-tree > .next-tree-node > .next-tree-node-inner > .next-tree-node-label-wrapper'
        ).then($el => {
            cy.document().its('activeElement').should('eq', $el[0]);
        });
    });

    it('should support single line display', () => {
        cy.mount(
            <TreeSelect
                dataSource={dataSource}
                treeCheckable
                treeCheckStrictly
                treeCheckedStrategy="all"
                tagInline
                value={['1', '2', '3']}
            />
        );

        cy.get('.next-select-tag-compact').should('exist');
        cy.get('.next-select-tag-compact').should('include.text', '3/6');
    });

    it('should support valueRender', () => {
        cy.mount(
            <TreeSelect
                dataSource={dataSource}
                value={['2']}
                valueRender={(item, paths) => {
                    return paths.map(t => t.label).join('/');
                }}
            />
        );
        cy.get('.next-select-values').should('exist');
        cy.contains('.next-select-values', '服装/男装');
    });

    describe('should support useDetailValue', () => {
        it('Support dataSource mode', () => {
            const handleChange = (value: ObjectItem) => {
                expect(typeof value).to.equal('object');
                expect(value.value).to.equal('1');
            };
            cy.mount(
                <TreeSelect
                    followTrigger
                    useDetailValue
                    defaultVisible
                    treeDefaultExpandAll
                    dataSource={dataSource}
                    onChange={handleChange}
                />
            );
            selectTreeNode('1');
        });
        it('Support children mode', () => {
            const handleChange = (value: ObjectItem) => {
                expect(typeof value).to.equal('object');
                expect(value.value).to.equal('1');
            };
            cy.mount(
                <TreeSelect
                    followTrigger
                    useDetailValue
                    defaultVisible
                    treeDefaultExpandAll
                    onChange={handleChange}
                >
                    <TreeNode key="1" className="k-1" value="1" label="Component">
                        <TreeNode key="2" value="2" label="Form">
                            <TreeNode key="4" value="4" label="Input" />
                            <TreeNode key="5" value="5" label="Select" disabled />
                        </TreeNode>
                        <TreeNode key="3" value="3" label="Display">
                            <TreeNode key="6" value="6" label="Table" />
                        </TreeNode>
                    </TreeNode>
                </TreeSelect>
            );
            selectTreeNode('1');
        });
        it('Control mode available', () => {
            function App() {
                const [value, setValue] = useState({
                    label: 'Component',
                    value: '1',
                } as ObjectItem);

                return (
                    <TreeSelect
                        followTrigger
                        useDetailValue
                        visible
                        treeDefaultExpandAll
                        value={value}
                        onChange={(v: ObjectItem) => {
                            expect(v).to.exist;
                            expect(typeof v).to.equal('object');
                            expect(v.value).to.exist;
                            setValue(v);
                        }}
                    >
                        <TreeNode key="1" value="1" label="Component">
                            <TreeNode key="2" className="k-2" value="2" label="Form">
                                <TreeNode key="4" value="4" label="Input" />
                                <TreeNode key="5" value="5" label="Select" disabled />
                            </TreeNode>
                            <TreeNode key="3" value="3" label="Display">
                                <TreeNode key="6" value="6" label="Table" />
                            </TreeNode>
                        </TreeNode>
                    </TreeSelect>
                );
            }

            cy.mount(<App />);
            cy.get('.next-select-values').should('include.text', 'Component');
            selectTreeNode('2');
            cy.get('.next-select-values').should('include.text', 'Form');
            shouldSelected('2', true);
        });
    });
});
