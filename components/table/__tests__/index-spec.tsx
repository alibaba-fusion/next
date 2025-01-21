import React from 'react';
import PropTypes from 'prop-types';
import Loading from '../../loading';
import Icon from '../../icon';
import Table, { type TableProps } from '../index';
import '../style';

const dataSource = [
    { id: '1', name: 'test' },
    { id: '2', name: 'test2' },
];

const table = (
    <Table dataSource={dataSource}>
        <Table.Column dataIndex="id" />
        <Table.Column dataIndex="name" />
    </Table>
);

const stickyLock = (
    <Table.StickyLock dataSource={dataSource}>
        <Table.Column dataIndex="id" />
        <Table.Column dataIndex="name" />
    </Table.StickyLock>
);

describe('Table', () => {
    it('should mount table', () => {
        cy.mount(table);
        cy.get('.next-table-body .next-table-row').should('have.length', 2);
    });

    it('should render checkboxMode', () => {
        cy.mount(table).as('Demo');
        cy.rerender<TableProps>('Demo', {
            rowSelection: {
                getProps: record => {
                    if (record.id === '1') {
                        return {
                            disabled: true,
                        };
                    }
                },
            },
        });
        cy.get('.next-checkbox').should('have.length', 3);
        cy.get('.next-checkbox-wrapper.disabled').should('have.length', 1);
    });

    it('should support rowSelect control', () => {
        cy.mount(table).as('Demo');
        cy.rerender<TableProps>('Demo', {
            rowSelection: {
                selectedRowKeys: ['1'],
            },
        });
        cy.get('.next-checkbox-wrapper.checked').should('have.length', 1);
    });

    it('should render when dataSource is [] & children is null', () => {
        cy.mount(table).as('Demo');
        cy.rerender<TableProps>('Demo', {
            dataSource: [],
            children: [],
        });
        cy.get('.next-table-empty').should('exist');
        cy.rerender<TableProps>('Demo', {
            dataSource: [],
            children: null,
        });
        cy.get('.next-table-empty').should('exist');
    });

    it('should render when dataSource is made of string', () => {
        cy.mount(table).as('Demo');
        cy.rerender<TableProps>('Demo', {
            // @ts-expect-error 参考 types 里 RecordItem 的描述
            dataSource: ['string1', 'string2'],
            children: [<Table.Column key={1} cell={(value, index, record) => record} />],
        });
        cy.get('.next-table-body .next-table-row').should('have.length', 2);
    });

    it('should render RadioMode', () => {
        cy.mount(table).as('Demo');
        cy.rerender<TableProps>('Demo', {
            rowSelection: {
                mode: 'single',
            },
        });
        cy.get('.next-radio').should('have.length', 2);
    });

    it('should support columnProps/titleProps/titleAddons of rowSelection', () => {
        cy.mount(table).as('Demo');
        cy.rerender<TableProps>('Demo', {
            rowSelection: {
                columnProps: () => {
                    return {
                        lock: 'right',
                        width: 90,
                        align: 'center',
                    };
                },
                titleAddons: () => {
                    return <div id="table-titleAddons">请选择</div>;
                },
                titleProps: () => {
                    return {
                        disabled: true,
                        children: '>',
                    };
                },
            },
        });
        cy.get('#table-titleAddons').eq(0).should('have.text', '请选择');
        cy.get('colgroup col').eq(2).should('have.css', 'width', '90px');
        cy.get('th .next-checkbox-wrapper').eq(0).should('have.class', 'disabled');
        cy.get('th .next-checkbox-wrapper .next-checkbox-label').eq(0).should('have.text', '>');
    });

    it('should support events', () => {
        const onRowClick = cy.spy();
        const onRowMouseEnter = cy.spy();
        const onRowMouseLeave = cy.spy();
        cy.mount(table).as('Demo');
        cy.rerender<TableProps>('Demo', {
            onRowClick,
            onRowMouseEnter,
            onRowMouseLeave,
        });
        cy.get('.next-table-body .next-table-row').first().trigger('click');
        cy.wrap(onRowClick).should('be.called');
        // React 的 mouseEnter 事件是通过监听 mouseover 实现的
        cy.get('.next-table-body .next-table-row').first().trigger('mouseover');
        cy.wrap(onRowMouseEnter).should('be.called');
        // React 的 mouseLeave 事件是通过监听 mouseout 实现的
        cy.get('.next-table-body .next-table-row').first().trigger('mouseout');
        cy.wrap(onRowMouseLeave).should('be.called');
    });

    it('should support sort', () => {
        const onSort = cy.spy();

        cy.mount(table).as('Demo');
        cy.rerender<TableProps>('Demo', {
            children: [
                <Table.Column key={1} dataIndex="id" sortable />,
                <Table.Column key={2} dataIndex="name" />,
            ],
            onSort,
        });
        cy.get('.next-table-header .next-table-sort').first().click();
        cy.wrap(onSort).should('be.calledWith', 'id', 'desc');
    });

    it('should support tableLayout&tableWidth', () => {
        cy.mount(table).as('Demo');
        cy.rerender<TableProps>('Demo', {
            children: [
                <Table.Column key="id" dataIndex="id" sortable />,
                <Table.Column key="name" dataIndex="name" />,
            ],
            tableLayout: 'fixed',
            tableWidth: 1200,
        });
        cy.get('.next-table').should('have.class', 'next-table-layout-fixed');
        cy.get('.next-table table').should('have.css', 'width', '1200px');
    });
    it('should support sortIcons', () => {
        const onSort = cy.spy();

        cy.mount(table).as('Demo');
        cy.rerender<TableProps>('Demo', {
            children: [
                <Table.Column key="id" dataIndex="id" sortable />,
                <Table.Column key="name" dataIndex="name" />,
            ],
            onSort,
            sortIcons: {
                desc: <Icon style={{ top: '6px', left: '4px' }} type={'arrow-down'} size="small" />,
                asc: <Icon style={{ top: '-6px', left: '4px' }} type={'arrow-up'} size="small" />,
            },
        });
        cy.get('.next-table-header .next-table-sort .next-icon-arrow-down').should('exist');
        cy.get('.next-table-header .next-table-sort .next-icon-arrow-up').should('exist');
        cy.get('.next-table-header .next-table-sort').first().click();
        cy.wrap(onSort).should('be.calledWith', 'id', 'desc');
    });

    it('should support getRowProps for setting className', () => {
        const getRowProps: TableProps['getRowProps'] = record => {
            if (record.id === '1') {
                return { className: 'rowClassName' };
            }
        };
        cy.mount(table).as('Demo');
        cy.rerender<TableProps>('Demo', {
            getRowProps,
        });
        cy.get('.next-table-body .next-table-row').first().should('have.class', 'rowClassName');
    });

    it('should support rowProps for setting className', () => {
        const rowProps: TableProps['rowProps'] = record => {
            if (record.id === '1') {
                return { className: 'rowClassName' };
            }
        };
        cy.mount(table).as('Demo');
        cy.rerender<TableProps>('Demo', {
            rowProps,
        });
        cy.get('.next-table-body .next-table-row').first().should('have.class', 'rowClassName');
    });

    it('should support fixedHeader, isZebra, hasBorder, loading', () => {
        cy.mount(table).as('Demo');
        cy.rerender<TableProps>('Demo', {
            fixedHeader: true,
        });
        cy.get('.next-table-fixed').should('exist');
        cy.rerender<TableProps>('Demo', {
            isZebra: true,
        });
        cy.get('.zebra').should('exist');
        cy.rerender<TableProps>('Demo', {
            hasBorder: false,
        });
        cy.get('.only-bottom-border').should('exist');
        cy.rerender<TableProps>('Demo', {
            loading: true,
        });
        cy.get('.next-loading').should('exist');
        const loadingIndicator = <div className="test-custom-loading">Loading...</div>;
        const CustomLoading: TableProps['loadingComponent'] = ({ className }) => (
            <Loading className={className} indicator={loadingIndicator} />
        );
        CustomLoading.propTypes = {
            className: PropTypes.string,
        };
        cy.rerender<TableProps>('Demo', {
            loading: true,
            loadingComponent: CustomLoading,
        });
        cy.get('.test-custom-loading').should('exist');
    });

    it('should support expandedRowRender getExpandedColProps with expandedIndexSimulate', () => {
        cy.mount(table).as('Demo');
        const cellHandler = cy.spy();
        cy.rerender<TableProps>('Demo', {
            children: [
                <Table.Column key="id" dataIndex="id" width={200} />,
                <Table.Column
                    key="custom"
                    cell={(record, index) => {
                        cellHandler(index);
                    }}
                    width={200}
                />,
            ],
            expandedRowRender: (record: { name: string }, index) => record.name + index,
            getRowProps: (record: { id: string }, index) => {
                expect(Number(record.id)).equal(index + 1);
                return { className: `next-myclass-${index}` };
            },
            getExpandedColProps: (record: { id: string }, index) => {
                expect(Number(record.id)).equal(index + 1);
            },
            expandedIndexSimulate: true,
            expandedRowIndent: [1, 1],
        });
        cy.wrap(cellHandler).should('be.calledTwice');
        cy.get('.next-table-body .next-table-expanded-ctrl').eq(0).click();
        cy.get('.next-table-body .next-table-expanded-row')
            .eq(0)
            .invoke('text')
            .then(text => {
                expect(text.trim()).equal('test0');
            });
        cy.get('.next-table-body .next-table-expanded-ctrl').eq(1).click();
        cy.get('.next-table-body .next-table-expanded-row')
            .eq(1)
            .invoke('text')
            .then(text => {
                expect(text.trim()).equal('test21');
            });
        cy.get('.next-table-body .next-table-expanded-row td')
            .eq(0)
            .invoke('text')
            .then(text => {
                expect(text.trim()).equal('');
            });
        cy.get('.next-table-body .next-table-expanded-row')
            .eq(0)
            .find('td')
            .last()
            .invoke('text')
            .then(text => {
                expect(text.trim()).equal('');
            });
    });

    it('should support expandedRowEvents', () => {
        const onRowOpen = cy.spy();
        cy.mount(table).as('Demo');
        cy.rerender<TableProps>('Demo', {
            expandedRowRender: (record: { name: string }, index) => record.name + index,
            onRowOpen: rowKeys => {
                onRowOpen(rowKeys[0]);
            },
        });
        cy.get('.next-table-body .next-table-expanded-row').should('not.exist');
        cy.get('.next-table-body .next-table-expanded-ctrl').first().click();
        cy.wrap(onRowOpen).should('be.calledWith', '1');
    });

    it('should support rowExpandable', () => {
        cy.mount(table).as('Demo');
        cy.rerender<TableProps>('Demo', {
            dataSource: [
                { id: '1', name: 'test', expandable: false },
                { id: '2', name: 'test2', expandable: true },
                { id: '3', name: 'test3', expandable: true },
            ],
            expandedRowRender: (record: { name: string }) => record.name,
            rowExpandable: (record: { expandable: boolean }) => record.expandable,
        });
        cy.get('.next-table-row').should('have.length', 3);
        cy.get('.next-table-prerow .next-table-cell-wrapper .next-icon').should('have.length', 2);
    });

    it('should support multiple header', () => {
        cy.mount(table).as('Demo');
        cy.rerender<TableProps>('Demo', {
            children: [
                <Table.ColumnGroup key="group1" title="group1">
                    <Table.Column dataIndex="id" />
                    <Table.Column dataIndex="name" />
                </Table.ColumnGroup>,
                <Table.ColumnGroup key="group2" title="group2">
                    <Table.Column dataIndex="id" />
                    <Table.Column dataIndex="name" />
                </Table.ColumnGroup>,
            ],
        });
        cy.get('.next-table-header tr').should('have.length', 2);
        cy.get('.next-table-header tr')
            .first()
            .invoke('text')
            .then(text => {
                expect(text.trim()).equal('group1group2');
            });
    });

    it('should support filter', () => {
        const onFilterSpy = cy.spy();
        const onFilter: TableProps['onFilter'] = (...args) => {
                console.log('on filter', args);
                onFilterSpy(args[0].id.selectedKeys[0]);
            },
            filters = [
                {
                    label: 'Nano 包含 1',
                    value: 1,
                },
                {
                    label: 'Nano 包含 3',
                    value: 3,
                },
                {
                    label: 'Nano 包含 2',
                    value: 2,
                    children: [
                        {
                            label: 'Nano 包含 12',
                            value: 22,
                        },
                        {
                            label: 'Nano 包含 23',
                            value: 23,
                        },
                    ],
                },
                {
                    label: '其他',
                    children: [
                        {
                            label: 'Nano 包含 4',
                            value: 4,
                        },
                        {
                            label: 'Nano 包含 5',
                            value: 5,
                        },
                    ],
                },
            ];
        cy.mount(table).as('Demo');
        cy.rerender('Demo', {
            onFilter,
            children: [<Table.Column key="id" dataIndex="id" filters={filters} />],
        }).as('Demo2');

        cy.get('next-table-filter-active').should('not.exist');

        cy.get('.next-icon-filter').click();
        cy.get('.next-btn').first().click();
        cy.wrap(onFilterSpy).should('be.calledWith', undefined);
        cy.get('.next-icon-filter').click();
        cy.get('.next-menu-item').eq(1).click();
        cy.get('.next-btn').first().click();
        cy.wrap(onFilterSpy).should('be.calledWith', '3');
        cy.get('.next-table-filter-active').should('exist');
        cy.rerender('Demo2', {
            filterParams: {
                id: {
                    selectedKeys: '1',
                },
            },
        });
        cy.get('.next-icon-filter').click();
        cy.get('.next-btn').eq(0).click();
        cy.wrap(onFilterSpy).should('be.calledWith', '1');
        cy.get('.next-icon-filter').click();
        cy.get('.next-menu-item').eq(0).should('have.class', 'next-selected');
    });

    it('should support lock', () => {
        cy.mount(table).as('Demo');
        cy.rerender<TableProps>('Demo', {
            children: [
                <Table.Column key="id" dataIndex="id" lock width={200} />,
                <Table.Column key="name" dataIndex="name" lock="right" width={200} />,
            ],
        }).as('Demo2');
        cy.get('.next-table-lock-left').should('exist');
        cy.get('.next-table-lock-right').should('exist');
        cy.get('.next-table-empty').should('not.exist');
        cy.rerender('Demo2', {
            dataSource: [],
        });
        cy.get('.next-table-empty').should('exist');
    });

    it('should support async virtual', () => {
        cy.mount(table).as('Demo');
        cy.rerender<TableProps>('Demo', {
            dataSource: [],
            useVirtual: true,
            children: [
                <Table.Column key="id" dataIndex="id" lock width={200} />,
                <Table.Column key="name" dataIndex="name" lock="right" width={200} />,
            ],
        }).as('Demo2');
        cy.rerender('Demo2', {
            dataSource: new Array(40).fill((i: number) => {
                return {
                    id: `${i}`,
                    name: `test${i}`,
                };
            }),
        });
        cy.get('.next-table-empty').should('not.exist');
        cy.get('.next-table-row').its('length').should('be.lt', 40);
    });

    it('should support virtual + list table', () => {
        cy.mount(table).as('Demo');
        cy.rerender<TableProps>('Demo', {
            children: [
                <Table.GroupHeader key="header" cell={<div>header</div>} />,
                <Table.Column key="id" dataIndex="id" />,
                <Table.GroupFooter key="footer" cell={<div>footer</div>} />,
            ],
            useVirtual: true,
            dataSource: [
                {
                    id: '1',
                    name: 'test',
                    children: [
                        {
                            id: '12',
                            name: '12test',
                        },
                    ],
                },
                {
                    id: '2',
                    name: 'test2',
                },
            ],
        });
        cy.get('.next-table-group-header').should('have.length', 2);
        cy.get('.next-table-group-footer').should('have.length', 2);
    });

    it('should support lock row mouseEnter mouseLeave', () => {
        const onRowClick = cy.spy();
        const onRowMouseEnter = cy.spy();
        const onRowMouseLeave = cy.spy();
        cy.mount(table).as('Demo');
        cy.rerender<TableProps>('Demo', {
            children: [
                <Table.Column key="id" dataIndex="id" lock width={200} />,
                <Table.Column key="name" dataIndex="name" lock="right" width={200} />,
            ],
            onRowClick,
            onRowMouseEnter,
            onRowMouseLeave,
        });
        cy.get('.next-table-body .next-table-row').first().click();
        cy.wrap(onRowClick).should('be.called');
        cy.get('.next-table-body .next-table-row').first().trigger('mouseover');
        cy.wrap(onRowMouseEnter).should('be.called');
        cy.get('.next-table-body .next-table-row').first().trigger('mouseout');
        cy.wrap(onRowMouseLeave).should('be.called');
    });

    it('should support treeMode', () => {
        cy.mount(table).as('Demo');
        cy.rerender<TableProps>('Demo', {
            dataSource: [
                {
                    id: '1',
                    name: 'test',
                    children: [
                        {
                            id: '12',
                            name: '12test',
                        },
                    ],
                },
                {
                    id: '2',
                    name: 'test2',
                },
            ],
            isTree: true,
        });
        cy.get('.next-table-row.hidden').should('have.length', 1);
        cy.get('.next-table-row .next-icon-arrow-right.next-table-tree-arrow').click();
        cy.get('.next-table-row.hidden').should('have.length', 0);
        cy.get('.next-table-row')
            .eq(1)
            .find('.next-table-cell-wrapper')
            .first()
            .should('have.css', 'padding-left', '24px');
    });

    it('header should support colspan', () => {
        cy.mount(table).as('Demo');
        cy.rerender<TableProps>('Demo', {
            children: [
                <Table.Column key="id" dataIndex="id" />,
                <Table.Column key="name" dataIndex="name" />,
            ],
        });
        cy.get('.next-table-header th').should('have.length', 2);
        cy.rerender<TableProps>('Demo', {
            children: [
                <Table.Column key="id" dataIndex="id" colSpan="2" />,
                <Table.Column key="name" dataIndex="name" colSpan="0" />,
            ],
        });
        cy.get('.next-table-header th').should('have.length', 1);
    });

    it('should support colspan & rowspan', () => {
        cy.mount(table).as('Demo');
        cy.rerender<TableProps>('Demo', {
            dataSource: [
                { id: '1', name: 'test' },
                { id: '2', name: 'test2' },
                { id: '3', name: 'test3' },
            ],
            cellProps: (rowIndex, colIndex) => {
                if (rowIndex === 0 && colIndex === 1) {
                    return {
                        rowSpan: 3,
                    };
                }
            },
        });
        cy.get('.next-table-row').eq(0).find('td').eq(1).should('have.text', 'test');
        cy.get('.next-table-row').eq(1).find('td').should('have.length', 1);
        cy.get('.next-table-row').eq(2).find('td').should('have.length', 1);
        cy.rerender<TableProps>('Demo', {
            dataSource: [
                { id: '1', name: 'test' },
                { id: '2', name: 'test2' },
                { id: '3', name: 'test3' },
            ],
            cellProps: (rowIndex, colIndex) => {
                if (rowIndex === 0 && colIndex === 0) {
                    return {
                        colSpan: 2,
                    };
                }
            },
        });
        cy.get('.next-table-row').eq(0).find('td').eq(0).should('have.text', '1');
    });

    it('should support getRowProps', () => {
        cy.mount(table).as('Demo');
        cy.rerender<TableProps>('Demo', {
            dataSource: [
                { id: '1', name: 'test' },
                { id: '2', name: 'test2' },
                { id: '3', name: 'test3' },
            ],
            getRowProps: (record, index) => {
                if (index === 0) {
                    return {
                        'data-props': 'rowprops',
                    };
                }
            },
        });
        cy.get('.next-table-row').eq(0).should('have.attr', 'data-props', 'rowprops');
    });

    it('should support rowProps', () => {
        cy.mount(table).as('Demo');
        cy.rerender<TableProps>('Demo', {
            dataSource: [
                { id: '1', name: 'test' },
                { id: '2', name: 'test2' },
                { id: '3', name: 'test3' },
            ],
            rowProps: (record, index) => {
                if (index === 0) {
                    return {
                        'data-props': 'rowprops',
                    };
                }
            },
        });
        cy.get('.next-table-row').eq(0).should('have.attr', 'data-props', 'rowprops');
    });

    it('should support list Header', () => {
        cy.mount(table).as('Demo');
        cy.rerender<TableProps>('Demo', {
            children: [
                <Table.GroupHeader key="header" cell={<div>header</div>} />,
                <Table.Column key="id" dataIndex="id" />,
                <Table.GroupFooter key="footer" cell={<div>footer</div>} />,
            ],
            dataSource: [
                {
                    id: '1',
                    name: 'test',
                    children: [
                        {
                            id: '12',
                            name: '12test',
                        },
                    ],
                },
                {
                    id: '2',
                    name: 'test2',
                },
            ],
        });
        cy.get('.next-table-group-header').should('have.length', 2);
        cy.get('.next-table-group-footer').should('have.length', 2);
    });

    it('should render null when ColGroup, GroupHeader, Col', () => {
        cy.mount(<Table.ColumnGroup />);
        cy.get('div').should('have.length', 1);
        cy.mount(<Table.Column />);
        cy.get('div').should('have.length', 1);
        cy.mount(<Table.GroupHeader />);
        cy.get('div').should('have.length', 1);
    });

    it('should support stickyHeader', () => {
        cy.mount(table).as('Demo');
        cy.rerender<TableProps>('Demo', {
            stickyHeader: true,
        });
        cy.get('.next-table-affix').should('exist');
    });

    it('should support resize', () => {
        cy.mount(table).as('Demo');
        cy.rerender<TableProps>('Demo', {
            children: [
                <Table.Column key="id" dataIndex="id" resizable width={200} />,
                <Table.Column key="name" dataIndex="name" width={200} />,
            ],
            onResizeChange: (dataIndex, value) => {
                console.log(dataIndex, value);
            },
        });
        cy.get('.next-table-resize-handler').first().trigger('mousedown', { pageX: 0 });
        cy.get('body').should('have.css', 'cursor', 'ew-resize');
        cy.get('body').trigger('mousemove', { pageX: 0 });
        cy.get('body').trigger('mouseup');
        cy.get('body').should('have.css', 'cursor', 'auto');
    });

    it('should support rtl', () => {
        cy.mount(table).as('Demo');
        cy.rerender<TableProps>('Demo', {
            rtl: true,
            children: [
                <Table.Column key="id" dataIndex="id" lock width={200} />,
                <Table.Column key="name" dataIndex="name" width={200} />,
            ],
        });
        cy.get('.next-table[dir="rtl"]').should('have.length', 3);
    });

    it('should support rtl resize', () => {
        cy.mount(table).as('Demo');
        cy.rerender<TableProps>('Demo', {
            rtl: true,
            children: [
                <Table.Column key="id" dataIndex="id" resizable width={200} />,
                <Table.Column key="name" dataIndex="name" width={200} />,
            ],
            onResizeChange: (dataIndex, value) => {
                console.log(dataIndex, value);
            },
        });
        cy.get('.next-table-resize-handler').first().trigger('mousedown', { pageX: 0 });
        cy.get('body').should('have.css', 'cursor', 'ew-resize');
        cy.get('body').trigger('mousemove', { pageX: 0 });
        cy.get('body').trigger('mouseup');
        cy.get('body').should('have.css', 'cursor', 'auto');
    });

    it('should support dataSource [] => [{},{}] => []', () => {
        cy.mount(table).as('Demo');
        cy.rerender<TableProps>('Demo', {
            children: [
                <Table.Column key="id" dataIndex="id" lock width={200} />,
                <Table.Column key="id2" dataIndex="id" lock="right" width={200} />,
            ],
        }).as('Demo2');
        cy.get('.next-table-lock-left').should('have.length', 1);
        cy.get('.next-table-lock-right').should('have.length', 1);
        cy.get('.next-table-empty').should('have.length', 0);
        cy.rerender<TableProps>('Demo2', {
            dataSource: [],
        }).as('Demo3');
        cy.get('.next-table-empty').should('have.length', 1);
        cy.rerender<TableProps>('Demo3', {
            dataSource: [
                { id: '1', name: 'test' },
                { id: '2', name: 'test2' },
            ],
        }).as('Demo4');
        cy.get('.next-table-lock-left').should('have.length', 1);
        cy.get('.next-table-lock-right').should('have.length', 1);
        cy.get('.next-table-empty').should('have.length', 0);
    });

    it('should support lock scroll x', () => {
        const ds = new Array(30).fill(1).map((val, i) => {
            return { id: i, name: `test${i}` };
        });
        cy.mount(table).as('Demo');
        cy.rerender<TableProps>('Demo', {
            children: [
                <Table.Column key="id" dataIndex="id" lock width={200} />,
                <Table.Column key="name" dataIndex="name" width={500} />,
                <Table.Column key="id2" dataIndex="id" lock="right" width={700} />,
            ],
            dataSource: ds,
            fixedHeader: true,
        });
        cy.get('.next-table-lock-left').should('have.length', 1);
        cy.get('.next-table-lock-right').should('have.length', 1);
        cy.get('div.next-table-lock-left .next-table-body').then($ele => {
            $ele.scrollTop(100);
        });
        cy.get('.next-table-body').eq(0).should('have.prop', 'scrollTop', 100);
        cy.get('div.next-table-lock-right .next-table-body').should('have.prop', 'scrollTop', 100);
        cy.get('div.next-table-lock-right .next-table-body').then($ele => {
            $ele.scrollTop(200);
        });
        cy.get('.next-table-body').eq(0).should('have.prop', 'scrollTop', 200);
        cy.get('div.next-table-lock-left .next-table-body').should('have.prop', 'scrollTop', 200);
        cy.get('.next-table-body')
            .eq(0)
            .then($ele => {
                $ele.scrollTop(300);
            });
        cy.get('div.next-table-lock-left .next-table-body').should('have.prop', 'scrollTop', 300);
        cy.get('div.next-table-lock-right .next-table-body').should('have.prop', 'scrollTop', 300);
    });

    it('should support StickyLock', () => {
        const ds = new Array(30).fill(1).map((val, i) => {
            return { id: i, name: `test${i}` };
        });
        cy.mount(stickyLock).as('Demo');
        cy.rerender<TableProps>('Demo', {
            children: [
                <Table.Column key="id" dataIndex="id" lock width={200} />,
                <Table.Column key="name" dataIndex="name" width={500} />,
                <Table.Column key="id2" dataIndex="id" lock="right" width={700} />,
            ],
            dataSource: ds,
        });
        cy.get('.next-table-lock-left').should('not.exist');
        cy.get('.next-table-lock-right').should('not.exist');
        cy.get('div.next-table-lock tr td.next-table-fix-left.next-table-fix-left-last')
            .eq(0)
            .should('have.css', 'position', 'sticky');
        cy.get('div.next-table-lock tr td.next-table-fix-left.next-table-fix-left-last').should(
            'have.length',
            ds.length
        );
    });

    it('should support align alignHeader', () => {
        cy.mount(table).as('Demo');
        cy.rerender<TableProps>('Demo', {
            children: [
                <Table.Column
                    key="id"
                    title="id"
                    dataIndex="id"
                    align="right"
                    alignHeader="left"
                    width={200}
                />,
                <Table.Column key="name" title="name" dataIndex="name" align="left" width={200} />,
                <Table.Column
                    key="id2"
                    title="id"
                    dataIndex="id"
                    alignHeader="right"
                    width={200}
                />,
            ],
        });
        cy.get('thead tr th').eq(0).should('have.css', 'text-align', 'left');
        cy.get('thead tr th').eq(1).should('have.css', 'text-align', 'left');
        cy.get('thead tr th').eq(2).should('have.css', 'text-align', 'right');
        cy.get('tbody tr').eq(0).find('td').eq(0).should('have.css', 'text-align', 'right');
        cy.get('tbody tr').eq(0).find('td').eq(1).should('have.css', 'text-align', 'left');
        cy.get('tbody tr').eq(0).find('td').eq(2).should('have.css', 'text-align', 'start');
    });

    it('should support align alignHeader rtl', () => {
        cy.mount(table).as('Demo');
        cy.rerender<TableProps>('Demo', {
            rtl: true,
            children: [
                <Table.Column
                    key="id"
                    title="id"
                    dataIndex="id"
                    align="right"
                    alignHeader="left"
                    width={200}
                />,
                <Table.Column key="name" title="name" dataIndex="name" align="left" width={200} />,
                <Table.Column
                    key="id2"
                    title="id"
                    dataIndex="id"
                    alignHeader="right"
                    width={200}
                />,
            ],
        });
        cy.get('thead tr th').eq(0).should('have.css', 'text-align', 'right');
        cy.get('thead tr th').eq(1).should('have.css', 'text-align', 'right');
        cy.get('thead tr th').eq(2).should('have.css', 'text-align', 'left');
        cy.get('tbody tr').eq(0).find('td').eq(0).should('have.css', 'text-align', 'left');
        cy.get('tbody tr').eq(0).find('td').eq(1).should('have.css', 'text-align', 'right');
        cy.get('tbody tr').eq(0).find('td').eq(2).should('have.css', 'text-align', 'start');
    });
});
