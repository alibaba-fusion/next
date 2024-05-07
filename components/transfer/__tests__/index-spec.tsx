import React from 'react';
import type { MountReturn } from 'cypress/react';
import Transfer from '../index';
import type { TransferDataItem, TransferProps } from '../types';
import Tree from '../../tree/index';
import '../style';

type ChangeEventHandler = Required<TransferProps>['onChange'];
type SortEventHandler = Required<TransferProps>['onSort'];
type SelectEventHandler = Required<TransferProps>['onSelect'];

const TreeNode = Tree.Node;
const dataSource: TransferDataItem[] = [
    { label: '0', value: '0', disabled: true },
    { label: '1', value: '1' },
    { label: '2', value: '2' },
    { label: '3', value: '3' },
];

function findPanel(panelIndex: number) {
    return cy.get('div.next-transfer-panel').eq(panelIndex);
}

function findFooter(panelIndex: number) {
    return findPanel(panelIndex).find('div.next-transfer-panel-footer');
}

function expectFooterCount(panelIndex: number, count: string) {
    return findFooter(panelIndex)
        .find('span.next-transfer-panel-count')
        .invoke('text')
        .then(text => {
            const num = text.split(/\s/)[0];
            expect(num).to.eq(count);
        });
}

function findFooterCheckbox(panelIndex: number) {
    return findFooter(panelIndex).find('label.next-checkbox-wrapper');
}

function findItems(panelIndex: number) {
    return findPanel(panelIndex).find('li.next-transfer-panel-item');
}

function findItem(panelIndex: number, itemIndex: number) {
    return findItems(panelIndex).eq(itemIndex);
}

function findItemCheckbox(panelIndex: number, itemIndex: number) {
    return findItem(panelIndex, itemIndex).find('label.next-checkbox-wrapper');
}

function checkAll(checkbox: Cypress.Chainable<JQuery<HTMLElement>>, checked: boolean) {
    checked ? checkbox.find('input').check() : checkbox.find('input').uncheck();
}

function checkSingle(item: Cypress.Chainable<JQuery<HTMLElement>>) {
    return item.should('be.visible').click();
}

function shouldHasClass(item: Cypress.Chainable<JQuery<HTMLElement>>, className: string) {
    item.should('have.class', className);
}

function shouldHasItem(panelIndex: number, itemIndex: number, itemText: string) {
    findItem(panelIndex, itemIndex).should('have.text', itemText);
}

function shouldHasTitle(panelIndex: number, titleText: string) {
    findPanel(panelIndex).find('div.next-transfer-panel-header').should('have.text', titleText);
}

function compareDomAndDataSource(panelIndex: number, dataSource: TransferDataItem[]) {
    findItems(panelIndex).each(($el, index) => {
        // 在这里，$el 是当前遍历到的元素（jQuery 对象）
        // index 是元素在列表中的索引
        cy.wrap($el).find('span.next-menu-item-text').should('have.text', dataSource[index].label);
        if (dataSource[index].disabled) {
            cy.wrap($el).should('have.class', 'next-disabled');
            cy.wrap($el).find('label.next-checkbox-wrapper').should('have.class', 'disabled');
        }
    });
}

describe('Transfer', () => {
    it('should render by dataSource', () => {
        cy.mount(<Transfer dataSource={dataSource} />);
        compareDomAndDataSource(0, dataSource);
        expectFooterCount(0, '4');
    });

    it('should render by defaultValue', () => {
        cy.mount(<Transfer defaultValue={['1']} dataSource={dataSource} />);
        compareDomAndDataSource(0, [
            { label: '0', value: '0' },
            { label: '2', value: '2' },
            { label: '3', value: '3' },
        ]);
        compareDomAndDataSource(1, [{ label: '1', value: '1' }]);
        expectFooterCount(0, '3');
        expectFooterCount(1, '1');
    });

    it('should render by value', () => {
        cy.mount(<Transfer defaultValue={['1']} value={['2']} dataSource={dataSource} />);
        compareDomAndDataSource(0, [
            { label: '0', value: '0' },
            { label: '1', value: '1' },
            { label: '3', value: '3' },
        ]);
        compareDomAndDataSource(1, [{ label: '2', value: '2' }]);
        expectFooterCount(0, '3');
        expectFooterCount(1, '1');
    });

    it('should render by defaultLeftChecked and defaultRightChecked', () => {
        cy.mount(
            <Transfer
                defaultValue={['1']}
                defaultLeftChecked={['2']}
                defaultRightChecked={['1']}
                dataSource={dataSource}
            />
        );

        expectFooterCount(0, '1/3');
        shouldHasClass(findFooterCheckbox(0), 'indeterminate');
        shouldHasClass(findItemCheckbox(0, 1), 'checked');

        expectFooterCount(1, '1/1');
        shouldHasClass(findFooterCheckbox(1), 'checked');
        shouldHasClass(findItemCheckbox(1, 0), 'checked');
    });

    it('should render by check checkbox of item and checkbox of footer', () => {
        cy.mount(<Transfer defaultValue={['1']} dataSource={dataSource} />);

        checkSingle(findItem(0, 1));
        shouldHasClass(findItemCheckbox(0, 1), 'checked');
        shouldHasClass(findFooterCheckbox(0), 'indeterminate');
        expectFooterCount(0, '1/3');

        checkSingle(findItem(0, 2));
        shouldHasClass(findItemCheckbox(0, 2), 'checked');
        shouldHasClass(findFooterCheckbox(0), 'checked');
        expectFooterCount(0, '2/3');

        checkAll(findFooterCheckbox(0), false);
        findFooterCheckbox(0).should('not.have.class', 'checked');
        findItemCheckbox(0, 1).should('not.have.class', 'checked');
        findItemCheckbox(0, 2).should('not.have.class', 'checked');
        expectFooterCount(0, '3');

        checkAll(findFooterCheckbox(0), true);
        shouldHasClass(findFooterCheckbox(0), 'checked');
        shouldHasClass(findItemCheckbox(0, 1), 'checked');
        shouldHasClass(findItemCheckbox(0, 2), 'checked');
        expectFooterCount(0, '2/3');

        checkSingle(findItem(0, 2));
        findItemCheckbox(0, 2).should('not.have.class', 'checked');
        findFooterCheckbox(0).should('not.have.class', 'checked');
        expectFooterCount(0, '1/3');
    });

    it('should render search box when set showSearch', () => {
        const dataSource = [
            { label: 'a', value: '0' },
            { label: 'b', value: '1' },
            { label: <i>abc</i>, value: '2' },
        ];

        cy.mount(
            <Transfer
                showSearch
                searchProps={{
                    hasClear: true,
                }}
                searchPlaceholder="input something..."
                dataSource={dataSource}
            />
        );

        cy.get('span.next-search').should('have.length', 2);
        findPanel(0).find('span.next-search').find('input').as('searchInput');

        cy.get('@searchInput')
            .then(el => {
                cy.wrap(el).should('be.visible');
            })
            .then(el => {
                cy.wrap(el).should('have.attr', 'placeholder', 'input something...');
            })
            .then(el => {
                cy.wrap(el).type('a');
            })
            .then(el => {
                cy.wrap(el).should('have.value', 'a');
            });

        findItems(0).should('have.length', 2);
        shouldHasItem(0, 0, 'a');
        shouldHasItem(0, 1, 'abc');
    });

    it('should render search box when set showSearch（array）', () => {
        const dataSource = [
            { label: 'a', value: '0' },
            { label: 'b', value: '1' },
            { label: <i>abc</i>, value: '2' },
        ];

        cy.mount(
            <Transfer
                showSearch={[true, false]}
                searchProps={[
                    {
                        hasClear: true,
                    },
                    {
                        size: 'large',
                    },
                ]}
                searchPlaceholder="input something..."
                dataSource={dataSource}
            />
        );

        cy.get('span.next-search').should('have.length', 1);
        findPanel(0).find('span.next-search').find('input').as('searchInput');

        cy.get('@searchInput')
            .then(el => {
                cy.wrap(el).should('be.visible');
            })
            .then(el => {
                cy.wrap(el).should('have.attr', 'placeholder', 'input something...');
            })
            .then(el => {
                cy.wrap(el).type('a');
            })
            .then(el => {
                cy.wrap(el).should('have.value', 'a');
            });
        findItems(0).should('have.length', 2);
        shouldHasItem(0, 0, 'a');
        shouldHasItem(0, 1, 'abc');
    });

    it('should custom style and text', () => {
        const dataSource = [
            {
                label: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx',
                value: '0',
            },
        ];

        cy.mount(
            <Transfer
                className="custom"
                listStyle={{ width: '200px' }}
                titles={['Source', 'Target']}
                operations={['>>', '<<']}
                dataSource={dataSource}
            />
        );

        cy.get('div.next-transfer.custom').should('have.length', 1);
        findPanel(0).find('ul.next-transfer-panel-list').should('have.css', 'width', '200px');
        shouldHasTitle(0, 'Source');
        shouldHasTitle(1, 'Target');
        cy.get('div.next-transfer-operations button').eq(0).should('have.text', '>>');
        cy.get('div.next-transfer-operations button').eq(1).should('have.text', '<<');
    });

    it('should move items between the panels', () => {
        const dataSource = [
            { label: '0', value: '0' },
            { label: '1', value: '1' },
            { label: '2', value: '2' },
        ];

        let value: string[],
            data: TransferDataItem[],
            extra: Parameters<ChangeEventHandler>['2'],
            changeCalled: boolean;

        const handleChange: ChangeEventHandler = (v, d, e) => {
            expect(v).to.deep.equal(value);
            expect(d).to.deep.equal(data);
            expect(e).to.deep.equal(extra);
            changeCalled = true;
        };

        cy.mount(<Transfer dataSource={dataSource} onChange={handleChange} />);
        cy.get('div.next-transfer-operations button').eq(0).as('l2r');
        cy.get('div.next-transfer-operations button').eq(1).as('r2l');

        cy.get('@l2r').should('have.attr', 'disabled');
        shouldHasClass(cy.get('@l2r'), 'next-btn-normal');
        cy.get('@r2l').should('have.attr', 'disabled');
        shouldHasClass(cy.get('@r2l'), 'next-btn-normal');

        checkSingle(findItemCheckbox(0, 0));
        checkSingle(findItemCheckbox(0, 1));
        cy.get('@l2r').should('not.have.attr', 'disabled');
        shouldHasClass(cy.get('@l2r'), 'next-btn-primary');

        cy.then(() => {
            value = ['0', '1'];
            data = [
                { label: '0', value: '0' },
                { label: '1', value: '1' },
            ];
            extra = {
                leftValue: ['2'],
                leftData: [{ label: '2', value: '2' }],
                movedValue: ['0', '1'],
                movedData: [
                    { label: '0', value: '0' },
                    { label: '1', value: '1' },
                ],
                direction: 'right',
            };
        });

        checkSingle(cy.get('@l2r')).then(() => {
            expect(changeCalled).to.eq(true);
        });
        findItems(0).should('have.length', 1);
        shouldHasItem(0, 0, '2');
        findItems(1).should('have.length', 2);
        shouldHasItem(1, 0, '0');
        shouldHasItem(1, 1, '1');

        changeCalled = false;
        checkSingle(findItemCheckbox(1, 0));
        cy.get('@r2l').should('not.have.attr', 'disabled');
        shouldHasClass(cy.get('@r2l'), 'next-btn-primary');

        cy.then(() => {
            value = ['1'];
            data = [{ label: '1', value: '1' }];
            extra = {
                leftValue: ['0', '2'],
                leftData: [
                    { label: '0', value: '0' },
                    { label: '2', value: '2' },
                ],
                movedValue: ['0'],
                movedData: [{ label: '0', value: '0' }],
                direction: 'left',
            };
        });

        checkSingle(cy.get('@r2l')).then(() => {
            expect(changeCalled).to.eq(true);
        });
        findItems(0).should('have.length', 2);
        shouldHasItem(0, 0, '0');
        shouldHasItem(0, 1, '2');
        findItems(1).should('have.length', 1);
        shouldHasItem(1, 0, '1');
    });

    it('should move items between the panels under control', () => {
        const dataSource = [
            { label: '0', value: '0' },
            { label: '1', value: '1' },
            { label: '2', value: '2' },
        ];

        let value: string[],
            data: TransferDataItem[],
            extra: Parameters<ChangeEventHandler>['2'],
            changeCalled: boolean;

        const handleChange: ChangeEventHandler = (v, d, e) => {
            expect(v).to.deep.equal(value);
            expect(d).to.deep.equal(data);
            expect(e).to.deep.equal(extra);
            changeCalled = true;
        };

        cy.mount(<Transfer dataSource={dataSource} onChange={handleChange} />).as('wrapper');
        cy.get('div.next-transfer-operations button').eq(0).as('l2r');
        cy.get('div.next-transfer-operations button').eq(1).as('r2l');

        cy.get('@l2r').should('have.attr', 'disabled');
        shouldHasClass(cy.get('@l2r'), 'next-btn-normal');
        cy.get('@r2l').should('have.attr', 'disabled');
        shouldHasClass(cy.get('@r2l'), 'next-btn-normal');

        checkSingle(findItemCheckbox(0, 0));
        checkSingle(findItemCheckbox(0, 1));
        cy.get('@l2r').should('not.have.attr', 'disabled');
        shouldHasClass(cy.get('@l2r'), 'next-btn-primary');

        cy.then(() => {
            value = ['0', '1'];
            data = [
                { label: '0', value: '0' },
                { label: '1', value: '1' },
            ];
            extra = {
                leftValue: ['2'],
                leftData: [{ label: '2', value: '2' }],
                movedValue: ['0', '1'],
                movedData: [
                    { label: '0', value: '0' },
                    { label: '1', value: '1' },
                ],
                direction: 'right',
            };
        });

        checkSingle(cy.get('@l2r')).then(() => {
            expect(changeCalled).to.eq(true);
        });
        cy.get<MountReturn>('@wrapper').then(({ component, rerender }) => {
            return rerender(
                React.cloneElement(component as React.ReactElement, {
                    value,
                })
            );
        });

        findItems(0).should('have.length', 1);
        shouldHasItem(0, 0, '2');
        findItems(1).should('have.length', 2);
        shouldHasItem(1, 0, '0');
        shouldHasItem(1, 1, '1');

        changeCalled = false;
        checkSingle(findItemCheckbox(1, 0));
        cy.get('@r2l').should('not.have.attr', 'disabled');
        shouldHasClass(cy.get('@r2l'), 'next-btn-primary');
        cy.then(() => {
            value = ['1'];
            data = [{ label: '1', value: '1' }];
            extra = {
                leftValue: ['0', '2'],
                leftData: [
                    { label: '0', value: '0' },
                    { label: '2', value: '2' },
                ],
                movedValue: ['0'],
                movedData: [{ label: '0', value: '0' }],
                direction: 'left',
            };
        });

        checkSingle(cy.get('@r2l')).then(() => {
            expect(changeCalled).to.eq(true);
        });
        cy.get<MountReturn>('@wrapper').then(({ component, rerender }) => {
            return rerender(
                React.cloneElement(component as React.ReactElement, {
                    value,
                })
            );
        });

        findItems(0).should('have.length', 2);
        shouldHasItem(0, 0, '0');
        shouldHasItem(0, 1, '2');
        findItems(1).should('have.length', 1);
        shouldHasItem(1, 0, '1');
    });

    it('should support simple mode', () => {
        const dataSource = [
            { label: '0', value: '0' },
            { label: '1', value: '1' },
            { label: '2', value: '2' },
        ];

        let value: string[],
            data: TransferDataItem[],
            extra: Parameters<ChangeEventHandler>['2'],
            changeCalled: boolean;

        const handleChange: ChangeEventHandler = (v, d, e) => {
            expect(v).to.deep.equal(value);
            expect(d).to.deep.equal(data);
            expect(e).to.deep.equal(extra);
            changeCalled = true;
        };

        cy.mount(<Transfer mode="simple" dataSource={dataSource} onChange={handleChange} />).as(
            'wrapper'
        );
        cy.get('div.next-transfer-operations i.next-icon-switch').should('have.length', 1);
        findItem(0, 0).find('.next-checkbox-wrapper').should('have.length', 0);
        findFooter(0).find('a.next-transfer-panel-move-all').should('have.text', '移动全部');
        cy.then(() => {
            value = ['0'];
            data = [{ label: '0', value: '0' }];
            extra = {
                leftValue: ['1', '2'],
                leftData: [
                    { label: '1', value: '1' },
                    { label: '2', value: '2' },
                ],
                movedValue: ['0'],
                movedData: [{ label: '0', value: '0' }],
                direction: 'right',
            };
        });

        checkSingle(findItem(0, 0)).then(() => {
            expect(changeCalled).to.eq(true);
        });
        findItems(0).should('have.length', 2);
        shouldHasItem(0, 0, '1');
        shouldHasItem(0, 1, '2');
        findItems(1).should('have.length', 1);
        shouldHasItem(1, 0, '0');

        changeCalled = false;
        cy.then(() => {
            value = [];
            data = [];
            extra = {
                leftValue: ['0', '1', '2'],
                leftData: [
                    { label: '0', value: '0' },
                    { label: '1', value: '1' },
                    { label: '2', value: '2' },
                ],
                movedValue: ['0'],
                movedData: [{ label: '0', value: '0' }],
                direction: 'left',
            };
        });
        checkSingle(findItem(1, 0)).then(() => {
            expect(changeCalled).to.eq(true);
        });
        findItems(0).should('have.length', 3);
        shouldHasItem(0, 0, '0');
        shouldHasItem(0, 1, '1');
        shouldHasItem(0, 2, '2');
        findItems(1).should('have.length', 0);

        changeCalled = false;
        cy.then(() => {
            value = ['0', '1', '2'];
            data = [
                { label: '0', value: '0' },
                { label: '1', value: '1' },
                { label: '2', value: '2' },
            ];
            extra = {
                leftValue: [],
                leftData: [],
                movedValue: ['0', '1', '2'],
                movedData: [
                    { label: '0', value: '0' },
                    { label: '1', value: '1' },
                    { label: '2', value: '2' },
                ],
                direction: 'right',
            };
        });

        findFooter(0)
            .find('a.next-transfer-panel-move-all')
            .click()
            .then(() => {
                expect(changeCalled).to.eq(true);
            });
        findItems(0).should('have.length', 0);
        findItems(1).should('have.length', 3);
        shouldHasItem(1, 0, '0');
        shouldHasItem(1, 1, '1');
        shouldHasItem(1, 2, '2');

        changeCalled = false;
        cy.then(() => {
            value = [];
            data = [];
            extra = {
                leftValue: ['0', '1', '2'],
                leftData: [
                    { label: '0', value: '0' },
                    { label: '1', value: '1' },
                    { label: '2', value: '2' },
                ],
                movedValue: ['0', '1', '2'],
                movedData: [
                    { label: '0', value: '0' },
                    { label: '1', value: '1' },
                    { label: '2', value: '2' },
                ],
                direction: 'left',
            };
        });

        findFooter(1)
            .find('a.next-transfer-panel-move-all')
            .click()
            .then(() => {
                expect(changeCalled).to.eq(true);
            });
        findItems(0).should('have.length', 3);
        shouldHasItem(0, 0, '0');
        shouldHasItem(0, 1, '1');
        shouldHasItem(0, 2, '2');
        findItems(1).should('have.length', 0);
    });

    it('should highlight moved item', () => {
        cy.mount(<Transfer defaultLeftChecked={['0']} dataSource={[{ label: '0', value: '0' }]} />);
        checkSingle(cy.get('div.next-transfer-operations button').eq(0));

        cy.then(() => {
            shouldHasClass(findItem(1, 0), 'next-focused');
            findItem(1, 0).should('not.have.class', 'next-highlight');
        });

        // TODO 不清楚这里需要测试什么？代码中并没有看在这个 next-highlight class
        // setTimeout(() => {
        //     assert(!hasClass(item.instance(), 'next-highlight'));
        //     done();
        // }, 1000);
    });

    it('should support rtl prop', () => {
        cy.mount(
            <Transfer rtl defaultLeftChecked={['0']} dataSource={[{ label: '0', value: '0' }]} />
        ).as('wrapper');
        cy.get('@wrapper').get('div').eq(1).should('have.attr', 'dir', 'rtl');
    });

    it('should support sorting items', () => {
        let value: string[], position: string, sortCalled: boolean;

        const handleSort: SortEventHandler = (v, p) => {
            expect(v).to.deep.equal(value);
            expect(p).to.deep.equal(position);
            sortCalled = true;
        };

        cy.mount(<Transfer dataSource={dataSource} sortable onSort={handleSort} />);
        cy.then(() => {
            value = ['0', '2', '3', '1'];
            position = 'left';
        });
        const dataTransfer = new DataTransfer();
        findItem(0, 1).trigger('mousedown', { force: true }).trigger('dragstart', { dataTransfer });
        findItem(0, 3).trigger('drop', { dataTransfer });
        findItem(0, 1)
            .trigger('dragend', { dataTransfer })
            .then(() => {
                expect(sortCalled).to.eq(true);
                shouldHasItem(0, 0, '0');
                shouldHasItem(0, 1, '2');
                shouldHasItem(0, 2, '3');
                shouldHasItem(0, 3, '1');
            });

        sortCalled = false;
        cy.then(() => {
            value = ['0', '3', '2', '1'];
            position = 'left';
        });

        findItem(0, 1).trigger('mousedown', { force: true }).trigger('dragstart', { dataTransfer });
        findItem(0, 2).trigger('drop', { dataTransfer });
        findItem(0, 1)
            .trigger('dragend', { dataTransfer })
            .then(() => {
                expect(sortCalled).to.eq(true);
                shouldHasItem(0, 0, '0');
                shouldHasItem(0, 1, '3');
                shouldHasItem(0, 2, '2');
                shouldHasItem(0, 3, '1');
            });
    });

    it('should support id on panel elements', () => {
        cy.mount(
            <Transfer dataSource={dataSource} id="transfer-test" titles={['left', 'right']} />
        ).as('wrapper');

        cy.get('@wrapper').get('#transfer-test-panel-footer-left').should('have.length', 1);
        cy.get('@wrapper').get('#transfer-test-panel-footer-right').should('have.length', 1);
        cy.get('@wrapper').get('#transfer-test-panel-header-left').should('have.length', 1);
        cy.get('@wrapper').get('#transfer-test-panel-header-right').should('have.length', 1);
    });

    it('should disabled item not move', () => {
        cy.mount(
            <Transfer
                mode="simple"
                defaultLeftChecked={['0']}
                defaultValue={['0']}
                value={['1', '2', '3']}
                dataSource={dataSource}
            />
        );
        checkSingle(findFooter(0).find('a.next-transfer-panel-move-all'));
        findItems(0).should('have.length', 1);
        findItems(1).should('have.length', 3);
    });

    it('should customer panel work well', () => {
        const treeDataSource = [
            {
                label: 'Form',
                key: '2',
                value: '2',
                selectable: false,
                children: [
                    {
                        label: 'Input',
                        key: '4',
                        value: '4',
                    },
                    {
                        label: 'Field',
                        key: '7',
                        value: '7',
                    },
                    {
                        label: 'Select',
                        key: '5',
                        value: '5',
                    },
                ],
            },
        ];

        function getTreeDataSource(dataSource: TransferDataItem[] = [], value: string[]) {
            return dataSource.map(({ children, ...props }) => (
                <TreeNode
                    {...props}
                    disabled={props.disabled || value.includes(props.value)}
                    key={props.value}
                >
                    {getTreeDataSource(children, value)}
                </TreeNode>
            ));
        }
        const transferDataSource: TransferDataItem[] = [];
        function flatten(list: TransferDataItem[] = []) {
            list.forEach(item => {
                transferDataSource.push(item);
                flatten(item.children);
            });
        }
        flatten(treeDataSource);
        cy.mount(
            <Transfer dataSource={transferDataSource}>
                {({ position, onChange, value }) => {
                    if (position === 'left') {
                        return (
                            <Tree
                                checkable
                                editable
                                style={{ padding: '10px' }}
                                checkedKeys={value}
                                onCheck={(keys, extra: Record<string, unknown>) => {
                                    const newValues = (
                                        extra.checkedNodes as React.ReactElement[]
                                    ).map(item => item.props.value);
                                    onChange(position, newValues);
                                }}
                            >
                                {getTreeDataSource(treeDataSource, value)}
                            </Tree>
                        );
                    }
                }}
            </Transfer>
        ).as('wrapper');
        checkSingle(cy.get('@wrapper').get('.next-checkbox').eq(0));
        shouldHasClass(
            cy
                .get('div.next-transfer-panel-list')
                .find('li.next-tree-node')
                .eq(0)
                .find('label.next-checkbox-wrapper'),
            'checked'
        );
        shouldHasClass(
            cy.get('div.next-transfer-panel-footer').eq(0).find('label.next-checkbox-wrapper'),
            'checked'
        );
    });

    it('should onSelect work well', () => {
        const onSelect: SelectEventHandler = (
            sourceSelectedValue,
            targetSelectedValue,
            trigger
        ) => {
            expect(trigger).to.eq('source', 'position should be source');
            expect(sourceSelectedValue && sourceSelectedValue[0] === '1').to.eq(
                true,
                'checked value should be 1'
            );
        };
        cy.mount(
            <Transfer
                defaultValue={['1']}
                value={['2']}
                dataSource={dataSource}
                onSelect={onSelect}
            />
        );
        compareDomAndDataSource(0, [
            { label: '0', value: '0' },
            { label: '1', value: '1' },
            { label: '3', value: '3' },
        ]);
        compareDomAndDataSource(1, [{ label: '2', value: '2' }]);
        expectFooterCount(0, '3');
        expectFooterCount(1, '1');
        checkSingle(cy.get('.next-checkbox').eq(1));
    });

    it('should support virtual list', () => {
        const dataSource = (() => {
            const dataSource = [];

            for (let i = 0; i < 10000; i++) {
                dataSource.push({
                    label: `content${i}`,
                    value: `${i}`,
                    disabled: i % 4 === 0,
                });
            }

            return dataSource;
        })();
        cy.mount(<Transfer mode="simple" useVirtual dataSource={dataSource} />);
        cy.get('div.next-transfer-operations i.next-icon-switch').should('have.length', 1);
        findItems(0).should('have.length', 9);
    });
});
