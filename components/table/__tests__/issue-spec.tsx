import React, { useState } from 'react';
import Table, { type ColumnProps, type TableProps } from '../index';
import Button from '../../button/index';
import ConfigProvider from '../../config-provider';
import Input from '../../input';
import '../style';

const generateDataSource = (j: number) => {
    const result = [];
    for (let i = 0; i < j; i++) {
        result.push({
            title: {
                name: `Quotation for 1PCS Nano ${3 + i}.0 controller compatible`,
            },
            id: `100306660940${i}`,
            time: 2000 + i,
            index: i,
        });
    }
    return result;
};
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

describe('Issue', () => {
    beforeEach(() => {
        cy.mount(table).as('Demo');
    });

    it('should support not display empty when table is Loading', () => {
        cy.rerender<TableProps>('Demo', {
            loading: true,
            dataSource: [],
        }).as('Demo2');
        cy.get('.next-table-empty').should('have.text', ' ');
        cy.rerender<TableProps>('Demo2', {
            loading: false,
        });
        cy.get('.next-table-empty').should('have.text', '没有数据');
    });

    it('should support rowSelection without children and columns', () => {
        const onRowSelect = cy.spy();
        cy.mount(
            <Table
                dataSource={dataSource}
                rowSelection={{
                    onChange: selectedRowKeys => {
                        onRowSelect(selectedRowKeys);
                    },
                }}
            />
        );
        cy.get('.next-table-row .next-checkbox-input').eq(0).click();
        cy.wrap(onRowSelect).should('be.calledWith', ['1']);
    });

    it('should support columns with lock', () => {
        const columns = [
            {
                title: 'Title6',
                dataIndex: 'id',
                width: 400,
            },
            {
                title: 'Title7',
                dataIndex: 'id',
                width: 200,
                lock: true,
            },
            {
                title: 'Title7',
                dataIndex: 'id',
                width: 200,
            },
            {
                title: 'Title7',
                dataIndex: 'id',
                width: 200,
            },
        ];

        class App extends React.Component {
            render() {
                return (
                    <div>
                        <Table
                            id="normal-table"
                            dataSource={dataSource}
                            columns={columns}
                            tableWidth={600}
                        />
                        <Table.StickyLock
                            id="sticky-table"
                            dataSource={dataSource}
                            columns={columns}
                            tableWidth={600}
                        />
                    </div>
                );
            }
        }
        cy.mount(<App />);
        cy.get('#normal-table .next-table-lock-left .next-table-body tbody tr').should(
            'have.length',
            2
        );
        cy.get('#sticky-table .next-table-fix-left').should('have.css', 'position', 'sticky');
    });

    it('should fix onChange reRender bug', () => {
        // const container = document.createElement('div');
        // document.body.appendChild(container);
        class App extends React.Component {
            state = {
                selected: [],
            };
            onSelectionChange: NonNullable<TableProps['rowSelection']>['onChange'] = (
                ids,
                records
            ) => {
                this.setState({
                    selected: records,
                });
            };
            render() {
                return (
                    <Table
                        dataSource={dataSource}
                        rowSelection={{ onChange: this.onSelectionChange }}
                    >
                        <Table.Column dataIndex="id" />
                        <Table.Column dataIndex="name" />
                    </Table>
                );
            }
        }

        cy.mount(<App />);
        cy.get('.next-table-header .next-checkbox input').eq(0).click();
        cy.get('.next-table-body .next-checkbox-wrapper.checked').should('have.length', 2);
    });

    it('should support null child', () => {
        cy.rerender<TableProps>('Demo', {
            children: [null, <Table.Column key="id" dataIndex="id" />],
        });
        cy.get('.next-table-body tr').should('have.length', 2);
    });

    it('should support rowSelection & tree', () => {
        cy.rerender<TableProps>('Demo', {
            isTree: true,
            rowSelection: {
                onChange: () => {},
            },
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
        cy.get('.next-table-row.hidden').should('have.length', 1);
    });

    it('should support rowSelection click', () => {
        cy.rerender<TableProps>('Demo', {
            rowSelection: {
                onChange: () => {},
            },
            children: <Table.Column dataIndex="id" style={{ textAlign: 'left' }} />,
        });
        cy.get('.next-checkbox-wrapper').eq(1).click();
        cy.get('.next-checkbox-wrapper.checked').should('have.length', 1);
        cy.get('.next-checkbox-wrapper').eq(0).click();
        cy.get('.next-checkbox-wrapper.checked').should('have.length', 3);
    });

    it('should ignore lock as `true` string', () => {
        cy.rerender<TableProps>('Demo', {
            rowSelection: {
                onChange: () => {},
            },
            children: <Table.Column dataIndex="id" lock="true" width={200} />,
        });
        cy.get('.next-table-lock-left').should('not.exist');
    });

    it('should ignore lock when colWidth < tableWidth', () => {
        const cellRender = (value: unknown) => {
            return value;
        };
        class App extends React.Component<{ more: boolean }> {
            static defaultProps = {
                more: true,
            };
            render() {
                return (
                    <div style={{ width: '400px' }}>
                        <Table dataSource={[{ id: 1 }]}>
                            <Table.Column cell={cellRender} dataIndex="id" lock width={300} />
                            {this.props.more
                                ? [
                                      <Table.Column
                                          cell={cellRender}
                                          dataIndex="id"
                                          width={400}
                                          key="id1"
                                      />,
                                      <Table.Column
                                          cell={cellRender}
                                          dataIndex="id"
                                          width={500}
                                          key="id2"
                                      />,
                                  ]
                                : null}
                        </Table>
                    </div>
                );
            }
        }

        cy.mount(<App />).as('Demo');
        cy.get('.next-table-lock-left').children().should('have.length.gt', 0);
        cy.get('.next-table-lock-right').children().should('have.length', 0);
        cy.rerender('Demo', { more: false });
        cy.get('.next-table-lock-left').children().should('have.length', 0);
        cy.get('.next-table-lock-right').children().should('have.length', 0);
    });

    it('should has border when set hasHeader as false', () => {
        cy.rerender<TableProps>('Demo', {
            hasHeader: false,
        });
        cy.get('.next-table').should('have.css', 'border-top-width', '1px');
    });

    it('should support style config for Table.Column', () => {
        cy.mount(
            <Table dataSource={[{ id: 1 }, { id: 2 }]}>
                <Table.Column dataIndex="id" style={{ textAlign: 'left' }} />
            </Table>
        );
        cy.get('.next-table td').eq(0).should('have.css', 'text-align', 'start');
        cy.get('.next-table th').eq(0).should('have.css', 'text-align', 'left');
    });

    it('should support pass null to sort and any others', () => {
        cy.mount(
            <Table
                dataSource={[{ id: 1 }, { id: 2 }]}
                hasHeader={false}
                sort={null}
                openRowKeys={null}
                filterParams={null}
                expandedRowKeys={null}
            >
                <Table.Column dataIndex="id" />
            </Table>
        );
        cy.get('.next-table').should('exist');
    });

    it('should support virtual list', () => {
        class App extends React.Component {
            render() {
                return (
                    <Table useVirtual dataSource={generateDataSource(100)} scrollToRow={20}>
                        <Table.Column title="Id1" dataIndex="id" width={100} />
                        <Table.Column title="Index" dataIndex="index" width={200} />
                        <Table.Column title="Time" dataIndex="time" width={200} />
                    </Table>
                );
            }
        }
        cy.mount(<App />);
        cy.get('.next-table-body tbody tr').should('have.length.lt', 100);
    });

    it('should support defaultOpenRowKeys', () => {
        class App extends React.Component {
            render() {
                return (
                    <Table
                        dataSource={generateDataSource(3)}
                        defaultOpenRowKeys={['1003066609400', '1003066609401']}
                        expandedRowRender={record => record.name}
                    >
                        <Table.Column title="Id1" dataIndex="id" width={100} sortable />
                        <Table.Column title="Index" dataIndex="index" width={200} />
                        <Table.Column title="Time" dataIndex="id" width={200} />
                    </Table>
                );
            }
        }

        cy.mount(<App />);
        cy.get('tbody tr').should('have.length', 5);
    });

    it('sort should be singleton', () => {
        class App extends React.Component {
            render() {
                return (
                    <Table dataSource={generateDataSource(10)} scrollToRow={20}>
                        <Table.Column title="Id1" dataIndex="id" width={100} sortable />
                        <Table.Column title="Index" dataIndex="index" width={200} />
                        <Table.Column title="Time" dataIndex="time" width={200} sortable />
                    </Table>
                );
            }
        }
        cy.mount(<App />);
        cy.get('.next-table-header .next-table-sort').eq(0).click();
        cy.get('.next-table-header .next-table-sort').eq(1).click();
        cy.get('.current').should('have.length', 1);
    });

    it('should sortDirections work', () => {
        class App extends React.Component {
            render() {
                return (
                    <Table dataSource={generateDataSource(10)} scrollToRow={20}>
                        <Table.Column
                            title="Id1"
                            dataIndex="id"
                            width={100}
                            sortable
                            sortDirections={['desc', 'asc', 'default']}
                        />
                        <Table.Column title="Index" dataIndex="index" width={200} />
                    </Table>
                );
            }
        }
        cy.mount(<App />);
        cy.get('.next-table-header .next-table-sort').eq(0).click();
        cy.get('a.current .next-icon-descending').should('exist');
        cy.get('.next-table-header .next-table-sort').eq(0).click();
        cy.get('a.current .next-icon-ascending').should('exist');
        cy.get('.next-table-header .next-table-sort').eq(0).click();
        cy.get('a.current').should('not.exist');
    });

    it('there should be only one empty block with lock config when datasource=[] && enough width', () => {
        class App extends React.Component {
            render() {
                return (
                    <Table style={{ width: '600px' }} dataSource={[]} scrollToRow={20}>
                        <Table.Column title="Id1" lock dataIndex="id" width={100} />
                        <Table.Column title="Index" dataIndex="index" width={200} />
                        <Table.Column title="Time" dataIndex="time" lock="right" width={200} />
                    </Table>
                );
            }
        }

        cy.mount(<App />);
        cy.get('.next-table-empty').should('exist');
    });

    it('fix #466, stickyHeader + lock with enough space', () => {
        class App extends React.Component {
            render() {
                return (
                    <Table stickyHeader dataSource={[]}>
                        <Table.Column title="Time" dataIndex="name" width={200} lock />
                        <Table.Column title="Time" dataIndex="time" width={200} lock="right" />
                    </Table>
                );
            }
        }

        cy.mount(<App />);
        cy.get('.next-table-empty').should('have.length', 1);
    });

    it('should support crossline hover', () => {
        // const container = document.createElement('div');
        // document.body.appendChild(container);
        class App extends React.Component {
            render() {
                return (
                    <Table dataSource={dataSource} crossline>
                        <Table.Column dataIndex="id" />
                        <Table.Column dataIndex="name" />
                        <Table.Column
                            dataIndex="name"
                            cell={(val, i) => {
                                return (
                                    <a id={`name-${i}`} href="">
                                        val
                                    </a>
                                );
                            }}
                        />
                    </Table>
                );
            }
        }

        cy.mount(<App />);
        cy.get('td[data-next-table-col="1"][data-next-table-row="1"]')
            .as('cell')
            .trigger('mouseover');
        cy.get('.next-table-cell.hovered').should('have.length', 2);
        cy.get('.next-table-row.hovered').should('have.length', 1);
        cy.get('@cell').trigger('mouseout');
        cy.get('.next-table-cell.hovered').should('have.length', 0);
        cy.get('#name-0').as('renderA').trigger('mouseover');
        cy.get('.next-table-cell.hovered').should('have.length', 2);
        cy.get('.next-table-row.hovered').should('have.length', 1);
        cy.get('@renderA').trigger('mouseout');
        cy.get('.next-table-cell.hovered').should('have.length', 0);
    });

    it('should support useFirstLevelDataWhenNoChildren', () => {
        class App extends React.Component {
            render() {
                return (
                    <Table
                        dataSource={[
                            {
                                price: 'US $3',
                                status: 3,
                                parent: 'root',
                                id: 3,
                                product: [
                                    {
                                        title: "2014 New Fashion Novelty Tank Slim Women's Fashion Dresses With Lace",
                                        avatar: 'https://sc01.alicdn.com/kf/HTB1ravHKXXXXXccXVXXq6xXFXXXJ/Chinese-Style-Fashion-Custom-Digital-Print-Silk.jpg_220x220.jpg',
                                    },
                                ],
                            },
                        ]}
                    >
                        <Table.GroupHeader
                            useFirstLevelDataWhenNoChildren
                            cell={() => {
                                return <div>title</div>;
                            }}
                        />
                        <Table.Column
                            cell={(product: Array<{ title: string }>) => {
                                return product[0].title;
                            }}
                            title="Product Details"
                            dataIndex="product"
                        />
                        <Table.Column title="Price" dataIndex="price" width={120} />
                        <Table.Column title="Status" dataIndex="status" width={100} />
                        <Table.Column title="Operation" width={100} />
                    </Table>
                );
            }
        }
        cy.mount(<App />);
        cy.get('.next-table-group-header + tr').should('have.length', 1);
    });

    // fix https://github.com/alibaba-fusion/next/issues/4396
    it('should support Header and Body follow the TableGroupHeader when it locks the columns', () => {
        // const container = document.createElement('div');
        // document.body.appendChild(container);

        const dataSource = () => {
            const result = [];
            for (let i = 0; i < 5; i++) {
                result.push({
                    title: { name: `Quotation for 1PCS Nano ${3 + i}.0 controller compatible` },
                    id: 100306660940 + i,
                    time: 2000 + i,
                });
            }
            return result;
        };
        const columns = [
            {
                title: 'Group2-7',
                children: [
                    {
                        title: 'Title2',
                        dataIndex: 'id',
                        lock: 'left' as const,
                        width: 140,
                    },
                    {
                        title: 'Title3',
                        lock: 'left' as const,
                        dataIndex: 'time',
                        width: 200,
                    },
                ],
            },
            {
                title: 'Title1',
                dataIndex: 'id',
                width: 1400,
            },
            {
                title: 'Time',
                dataIndex: 'time',
                width: 500,
            },
        ];
        cy.mount(
            <Table.StickyLock dataSource={dataSource()} columns={columns}>
                <Table.GroupHeader
                    cell={() => {
                        return <div>title</div>;
                    }}
                />
            </Table.StickyLock>
        );
        cy.get('.next-table-header').as('tableHeader').should('exist');
        cy.get('.next-table-body').as('tableBody').should('exist');
        // table 内部有定时锁阻止同一时间多次设置 scroll，需要等待一段时间
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(200);
        cy.get('@tableHeader').then(tableHeader => {
            tableHeader.scrollLeft(100);
        });
        cy.get('@tableBody').should('have.prop', 'scrollLeft', 100);
        // eslint-disable-next-line cypress/no-unnecessary-waiting
        cy.wait(200);
        cy.get('@tableBody').then(tableHeader => {
            tableHeader.scrollLeft(0);
        });
        cy.get('@tableHeader').should('have.prop', 'scrollLeft', 0);
    });

    it('should support multiple header lock', () => {
        const dataSource = () => {
            const result = [];
            for (let i = 0; i < 5; i++) {
                result.push({
                    title: { name: `Quotation for 1PCS Nano ${3 + i}.0 controller compatible` },
                    id: 100306660940 + i,
                    time: 2000 + i,
                });
            }
            return result;
        };
        const render: ColumnProps['cell'] = (value, index, record) => {
            return <a href="javascript:;">Remove({record.id})</a>;
        };

        const columns = [
            {
                title: 'Group2-7',
                children: [
                    {
                        title: 'Title2',
                        dataIndex: 'id',
                        lock: 'left',
                        width: 140,
                    },
                    {
                        title: 'Title3',
                        lock: 'left',
                        dataIndex: 'title.name',
                        width: 200,
                    },
                ],
            },
            {
                title: 'Title6',
                dataIndex: 'title.name',
                width: 400,
            },
            {
                title: 'Title1',
                dataIndex: 'id',
                width: 140,
            },
            {
                title: '这行有错',
                id: 'target-line',
                cell: render,
                lock: 'left',
                width: 200,
            },
            {
                title: 'Time',
                dataIndex: 'time',
                width: 500,
            },
        ];

        cy.mount(<Table.StickyLock dataSource={dataSource()} columns={columns} />);
        cy.get('#target-line').then($ele => {
            expect(parseInt($ele.css('left'))).to.be.closeTo(340, 1);
        });
    });

    it('should set right offset, fix #2276', () => {
        const dataSource = () => {
            const result = [];
            for (let i = 0; i < 5; i++) {
                result.push({
                    title: { name: `Quotation for 1PCS Nano ${3 + i}.0 controller compatible` },
                    id: 100306660940 + i,
                    time: 2000 + i,
                });
            }
            return result;
        };
        const render: ColumnProps['cell'] = (value, index, record) => {
            return <a href="javascript:;">Remove({record.id})</a>;
        };

        const columns = [
            {
                title: 'Title1',
                dataIndex: 'id',
                width: 140,
            },
            {
                title: 'Group2-7',
                children: [
                    {
                        title: 'Title2',
                        dataIndex: 'id',
                        lock: 'right',
                        width: 140,
                    },
                    {
                        title: 'Title3',
                        dataIndex: 'title.name',
                        lock: 'right',
                        width: 200,
                    },
                    {
                        title: 'Group4-7',
                        children: [
                            {
                                title: 'Title4',
                                dataIndex: 'title.name',
                                width: 400,
                            },
                            {
                                title: 'Title5',
                                dataIndex: 'title.name',
                                lock: true,
                                width: 200,
                            },
                            {
                                title: 'tet',
                                children: [
                                    {
                                        title: 'Title6',
                                        dataIndex: 'title.name',
                                        width: 400,
                                    },
                                    {
                                        title: 'Title7',
                                        dataIndex: 'title.name',
                                        lock: true,
                                        width: 200,
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
            {
                title: '',
                children: [
                    {
                        title: 'Time',
                        dataIndex: 'time',
                        width: 500,
                    },
                    {
                        cell: render,
                        width: 200,
                    },
                ],
            },
        ];

        cy.mount(<Table.StickyLock dataSource={dataSource()} columns={columns} />);
        cy.get('.next-table-cell.next-table-fix-right.next-table-fix-right-first')
            .eq(3)
            .then($ele => {
                expect(parseInt($ele.css('right'))).to.be.closeTo(200, 1);
            });
    });

    it('should work with expanded virtual table, fix #2646', () => {
        const dataSource = (n: number) => {
            const result = [];
            for (let i = 0; i < n; i++) {
                result.push({
                    title: { name: `Quotation for 1PCS Nano ${3 + i}.0 controller compatible` },
                    id: 100306660940 + i,
                    time: 2000 + i,
                });
            }
            return result;
        };
        const render: ColumnProps['cell'] = (value, index, record) => {
            return <a href="javascript:;">Remove({record.id})</a>;
        };

        class App extends React.Component {
            state = {
                scrollToRow: 20,
            };
            onBodyScroll: TableProps['onBodyScroll'] = start => {
                this.setState({
                    scrollToRow: start,
                });
            };
            render() {
                return (
                    <Table
                        dataSource={dataSource(200)}
                        maxBodyHeight={400}
                        useVirtual
                        scrollToRow={this.state.scrollToRow}
                        onBodyScroll={this.onBodyScroll}
                        expandedRowRender={() => <div>adddd</div>}
                    >
                        <Table.Column title="Id1" dataIndex="id" width={100} />
                        <Table.Column title="Index" dataIndex="index" width={200} />
                        <Table.Column title="Time" dataIndex="time" width={200} />
                        <Table.Column title="Time" dataIndex="time" width={200} />
                        <Table.Column title="Time" dataIndex="time" width={200} lock="right" />
                        <Table.Column cell={render} width={200} />
                    </Table>
                );
            }
        }

        cy.mount(<App />);
        cy.get('.next-table .next-table-body table tr.next-table-row')
            .its('length')
            .should('be.greaterThan', 10);
        cy.get('.next-table .next-table-body table tr.next-table-row')
            .its('length')
            .should('be.lessThan', 100);
        cy.get('.next-table .next-table-body table tr.next-table-row .next-table-expanded-ctrl')
            .eq(0)
            .click({ force: true });
        cy.get('.next-table .next-table-body table tr.next-table-expanded-row').should('exist');
    });
    it("should set expanded row's width after stickyLock table toggle loading, close #3000", () => {
        const dataSource = () => {
                const result = [];
                for (let i = 0; i < 5; i++) {
                    result.push({
                        title: `Quotation for 1PCS Nano ${3 + i}.0 controller compatible`,
                        id: 100306660940 + i,
                        time: 2000 + i,
                        expandable: i !== 2,
                    });
                }
                return result;
            },
            expandedRowRender: TableProps['expandedRowRender'] = record => record.title,
            render: ColumnProps['cell'] = (value, index, record) => {
                return <a>Remove({record.id})</a>;
            };

        class App extends React.Component {
            state = {
                dataSource: dataSource(),
                loading: false,
            };

            toggleLoading = () => {
                this.setState({
                    loading: !this.state.loading,
                });
            };

            render() {
                return (
                    <div style={{ width: 500 }}>
                        <button id="sticky-expanded-row-width" onClick={this.toggleLoading}>
                            Toggle Loading
                        </button>
                        <br />
                        <br />
                        <Table.StickyLock
                            loading={this.state.loading}
                            expandedIndexSimulate
                            openRowKeys={[100306660940, 100306660941]}
                            dataSource={this.state.dataSource}
                            // expandedRowIndent 仅在IE下才会生效，非IE模式下为[0,0]且不可修改
                            expandedRowIndent={[2, 0]}
                            expandedRowRender={expandedRowRender}
                        >
                            <Table.Column title="Id" dataIndex="id" lock width={300} />
                            <Table.Column title="Title" dataIndex="title" width={300} />
                            <Table.Column title="Time" dataIndex="time" width={300} />
                            <Table.Column cell={render} width={300} />
                        </Table.StickyLock>
                    </div>
                );
            }
        }

        cy.mount(<App />);
        cy.get('.next-table-expanded-row .next-table-cell-wrapper').each($row => {
            expect(parseInt($row.css('width'))).to.be.closeTo(499, 1);
        });
        cy.get('#sticky-expanded-row-width').click();
        cy.get('#sticky-expanded-row-width').click();
        cy.get('.next-table-expanded-row .next-table-cell-wrapper').each($row => {
            expect(parseInt($row.css('width'))).to.be.closeTo(499, 1);
        });
    });
    it('Different sorts have different className of table header , close #3386', () => {
        // const container = document.createElement('div');
        // document.body.appendChild(container);
        class App extends React.Component {
            render() {
                return (
                    <Table dataSource={dataSource}>
                        <Table.Column dataIndex="id" sortable />
                        <Table.Column dataIndex="name" />
                    </Table>
                );
            }
        }

        cy.mount(<App />);
        cy.get('.next-table-header .next-table-sort').click();
        cy.get('.next-table-header-node.next-table-header-sort-desc').should('have.length', 1);
        cy.get('.next-table-header .next-table-sort').click();
        cy.get('.next-table-header-node.next-table-header-sort-asc').should('have.length', 1);
    });

    it('should not modify columns props passed from outside, close #4062', () => {
        const columns = [
            {
                title: '商品编码',
                dataIndex: 'barcode',
            },
            {
                title: '商品名称',
                dataIndex: 'itemName',
            },
        ];

        function DemoTable() {
            const dataSource = [
                {
                    barcode: 'Bar16858180524079952',
                    itemCode: 'code16858180524079952',
                    itemId: 128581419,
                    itemName: '测试商品 16858180524065799',
                    ownerId: 624144,
                    ownerName: '快消 - 商家测试帐号 86',
                },
                {
                    barcode: 'Bar16858755068847002',
                    itemCode: 'code16858755068847002',
                    itemId: 128581770,
                    itemName: '测试商品 16858755068835325',
                    ownerId: 624144,
                    ownerName: '快消 - 商家测试帐号 86',
                },
            ];
            const [selectedRowKeys, setSelectedRowKeys] = useState<Array<string | number>>([]);
            return (
                <Table
                    size="small"
                    columns={columns}
                    dataSource={dataSource}
                    fixedHeader
                    maxBodyHeight={300}
                    primaryKey="itemId"
                    rowSelection={{
                        mode: 'single',
                        selectedRowKeys: selectedRowKeys,
                        onChange: newSelectedRowKeys => {
                            setSelectedRowKeys(newSelectedRowKeys);
                        },
                    }}
                />
            );
        }

        function App() {
            return (
                <div>
                    <DemoTable />
                </div>
            );
        }
        cy.mount(<App />);
        expect(columns.length).to.equal(2);
    });

    it('should support ConfigProvider prefix, close #4073', () => {
        const dataSource = () => {
            const result = [];
            for (let i = 0; i < 5; i++) {
                result.push({
                    title: { name: `Quotation for 1PCS Nano ${3 + i}.0 controller compatible` },
                    id: 100306660940 + i,
                    time: 2000 + i,
                });
            }
            return result;
        };
        cy.mount(
            <ConfigProvider prefix="my-">
                <Table dataSource={dataSource()}>
                    <Table.Column title="Id" htmlTitle="Unique Id" dataIndex="id" />
                    <Table.Column title="Title" dataIndex="title.name" />
                    <Table.Column title="Time" dataIndex="time" />
                </Table>
            </ConfigProvider>
        );
        cy.get('.my-table').should('exist');
    });

    it('should not crash when dataSource is undefined, close #4073', () => {
        cy.mount(
            <Table>
                <Table.Column title="Id" lock htmlTitle="Unique Id" dataIndex="id" />
                <Table.Column title="Title" dataIndex="title.name" />
                <Table.Column title="Time" dataIndex="time" />
            </Table>
        );

        cy.get('.next-table-empty').should('exist');
    });

    it('should not crash when columns is undefined, close #4070', () => {
        cy.rerender('Demo', { children: undefined });
        cy.get('.next-table').should('exist');
    });

    it('should can use Input at column.title, close #4370', () => {
        cy.mount(
            <Table>
                <Table.Column title={<Input />} lock htmlTitle="Unique Id" dataIndex="id" />
                <Table.Column title="Title" dataIndex="title.name" />
                <Table.Column title="Time" dataIndex="time" />
            </Table>
        );
        cy.get('input').type('aa');
        cy.get('input').should('have.value', 'aa');
    });

    it('should support locking columns when the data source is empty and in the same grouping, close #4282', () => {
        cy.mount(
            <Table.StickyLock dataSource={[]} fixedHeader maxBodyHeight={400}>
                <Table.ColumnGroup title="Group1-3">
                    <Table.Column title="Title1" dataIndex="id" lock="left" width={140} />
                    <Table.Column title="Title2" dataIndex="name" lock="left" width={140} />
                </Table.ColumnGroup>
                <Table.ColumnGroup title="Group4-5">
                    <Table.Column title="Title4" dataIndex="title" width={400} />
                    <Table.Column title="Title5" dataIndex="phone" width={200} />
                </Table.ColumnGroup>
                <Table.ColumnGroup>
                    <Table.Column title="Time" dataIndex="time" width={500} />
                </Table.ColumnGroup>
            </Table.StickyLock>
        );
        cy.get('th.next-table-fix-left[rowspan="1"]').eq(0).as('title1Cell');
        cy.get('th.next-table-fix-left-last[rowspan="1"]').as('title2Cell');
        cy.get('@title1Cell').then($title1Cell => {
            const title1CellLeft = $title1Cell.get(0).getBoundingClientRect().left;
            const title1CellWidth = $title1Cell.get(0).getBoundingClientRect().width;
            cy.get('@title2Cell').then($title2Cell => {
                const title2CellLeft = $title2Cell.get(0).getBoundingClientRect().left;
                expect(title1CellLeft + title1CellWidth).to.equal(title2CellLeft);
            });
        });
    });

    it('should support when dataSource item id 0, close #3740', () => {
        function CheckTable() {
            const dataSource = [
                { id: 0, name: 'test' },
                { id: 1, name: 'test1' },
                { id: 2, name: 'test2' },
            ];
            return (
                <Table
                    rowSelection={{
                        mode: 'multiple',
                        selectedRowKeys: [0],
                    }}
                    dataSource={dataSource}
                >
                    <Table.Column title="Id" dataIndex="id" />
                    <Table.Column title="Name" dataIndex="name" />
                </Table>
            );
        }
        cy.mount(<CheckTable />);
        const getRowCell = function (row: Cypress.Chainable<JQuery<HTMLElement>>, index = 1) {
            return row.find('.next-table-cell').eq(index);
        };
        cy.get('tr.next-table-row').as('rows');
        cy.get('.next-checkbox-wrapper.checked').should('have.length', 1);
        cy.get('.next-table-body .next-table-row').should('have.length', 3);
        getRowCell(cy.get('@rows').eq(0)).should('have.text', '0');
        getRowCell(cy.get('@rows').eq(0), 2).should('have.text', 'test');
        getRowCell(cy.get('@rows').eq(1)).should('have.text', '1');
        getRowCell(cy.get('@rows').eq(1), 2).should('have.text', 'test1');
        getRowCell(cy.get('@rows').eq(2)).should('have.text', '2');
        getRowCell(cy.get('@rows').eq(2), 2).should('have.text', 'test2');
    });
});

describe('TableScroll', () => {
    it('scroll position error, close #4484', () => {
        const dataSource = (j: number) => {
            const result = [];
            for (let i = 0; i < j; i++) {
                result.push({
                    title: { name: `Quotation for 1PCS Nano ${3 + i}.0 controller compatible` },
                    id: `100306660940${i}`,
                    time: 2000 + i,
                    index: i,
                });
            }
            return result;
        };
        const reLockColumn: ColumnProps['cell'] = (value, index, record) => {
            return <a>Remove({record.id})</a>;
        };
        class Demo extends React.Component {
            state = {
                scrollToRow: 20,
            };
            onBodyScroll: TableProps['onBodyScroll'] = start => {
                this.setState({
                    scrollToRow: start,
                });
            };
            onClick100 = () => {
                this.setState({ scrollToRow: 100 });
            };
            render() {
                return (
                    <div style={{ width: '90%' }}>
                        <Table
                            dataSource={dataSource(200)}
                            maxBodyHeight={400}
                            useVirtual
                            scrollToRow={this.state.scrollToRow}
                            onBodyScroll={this.onBodyScroll}
                        >
                            <Table.Column title="Id1" dataIndex="id" width={100} />
                            <Table.Column title="Index" dataIndex="index" width={200} />
                            <Table.Column title="Time" dataIndex="time" width={200} />
                            <Table.Column title="Time" dataIndex="time" width={200} />
                            <Table.Column title="Time" dataIndex="time" width={200} lock="right" />
                            <Table.Column cell={reLockColumn} width={200} lock />
                        </Table>
                        <Button onClick={this.onClick100}> 跳转到 100 行</Button>
                    </div>
                );
            }
        }
        cy.mount(<Demo />);
        cy.get('.next-table-body')
            .eq(0)
            .then($scrollNode => {
                const rowHeight = $scrollNode
                    .get(0)
                    .querySelector('.next-table-cell')!.clientHeight;
                cy.get('.next-table-body').eq(0).scrollTo(0, 200);
                cy.get('.next-btn').click();
                cy.get('.next-table-body').should('have.prop', 'scrollTop', rowHeight * 100);
            });
    });

    // fix https://github.com/alibaba-fusion/next/issues/4394
    it('should support onBodyScroll under the condition that useVirtual, dataSource is returned asynchronously, close #4394', () => {
        const dataSource = (j: number) => {
            const result = [];
            for (let i = 0; i < j; i++) {
                result.push({
                    title: { name: `Quotation for 1PCS Nano ${3 + i}.0 controller compatible` },
                    id: `100306660940${i}`,
                    time: 2000 + i,
                    index: i,
                });
            }
            return result;
        };
        class App extends React.Component {
            state = {
                scrollToRow: 0,
                dataSource: [],
            };
            componentDidMount = () => {
                setTimeout(() => {
                    this.setState({
                        dataSource: dataSource(200),
                    });
                }, 50);
            };
            onBodyScroll: TableProps['onBodyScroll'] = start => {
                this.setState({
                    scrollToRow: start,
                });
            };
            handleAdd = () => {
                this.setState({
                    scrollToRow: 180,
                });
            };
            renderCell = () => {
                return <button onClick={this.handleAdd}>跳到底部</button>;
            };

            render() {
                return (
                    <Table
                        dataSource={this.state.dataSource}
                        maxBodyHeight={400}
                        useVirtual
                        scrollToRow={this.state.scrollToRow}
                        onBodyScroll={this.onBodyScroll}
                    >
                        <Table.Column title="Index" dataIndex="index" width={200} />
                        <Table.Column
                            title="add"
                            dataIndex="add"
                            cell={this.renderCell}
                            width={200}
                        />
                    </Table>
                );
            }
        }

        cy.mount(<App />);
        cy.get('tr.next-table-row.first button').click();
        cy.get('tr.next-table-row')
            .eq(10)
            .as('skipRow')
            .children()
            .eq(0)
            .should('have.text', '180');
        cy.get('@skipRow').then($skipRow => {
            const skipRowTop = $skipRow.get(0).getBoundingClientRect().top;
            cy.get('thead').then($thead => {
                const theadTop = $thead.get(0).getBoundingClientRect().top;
                const theadHeight = $thead.get(0).getBoundingClientRect().height;
                expect(skipRowTop).to.gte(theadTop + theadHeight);
            });
        });
        cy.get('.next-table-body').then($tbody => {
            $tbody.get(0).scrollTop += 10;
        });
        cy.get('@skipRow').then($skipRow => {
            const skipRowTop = $skipRow.get(0).getBoundingClientRect().top;
            cy.get('thead').then($thead => {
                const theadTop = $thead.get(0).getBoundingClientRect().top;
                const theadHeight = $thead.get(0).getBoundingClientRect().height;
                expect(skipRowTop).to.gte(theadTop + theadHeight - 10);
            });
        });
    });

    // fix https://github.com/alibaba-fusion/next/issues/4264
    // fix https://github.com/alibaba-fusion/next/issues/4716
    it('should support for merging cells in locked columns, close #4264, #4716', () => {
        // const container = document.createElement('div');
        // document.body.appendChild(container);

        const dataSource = (j: number) => {
            const result = [];
            for (let i = 0; i < j; i++) {
                result.push({
                    title: { name: `Quotation for 1PCS Nano ${3 + i}.0 controller compatible` },
                    id: `100306660940${i}`,
                    time: 2000 + i,
                    index: i,
                });
            }
            return result;
        };

        const mergeCell: TableProps['cellProps'] = (rowIndex, colIndex) => {
            if (colIndex === 0 && rowIndex === 0) {
                return {
                    rowSpan: 2,
                    colSpan: 2,
                };
            }
        };

        cy.mount(
            <div className="table-container" style={{ width: 800 }}>
                <Table.StickyLock dataSource={dataSource(3)} cellProps={mergeCell}>
                    <Table.Column title="Id" dataIndex="id" width={200} lock />
                    <Table.Column title="Title" dataIndex="title.name" lock width={100} />
                    <Table.Column title="Time" dataIndex="time" width={300} lock />
                    <Table.Column title="test" width={100} />
                    <Table.Column title="test2" width={800} />
                </Table.StickyLock>
            </div>
        );
        cy.get('thead .next-table-header-node').eq(0).as('idHeaderNode').should('exist');
        cy.get('thead .next-table-header-node').eq(1).as('titleHeaderNode').should('exist');
        cy.get('thead .next-table-header-node').eq(2).as('timeHeaderNode').should('exist');
        cy.get('@idHeaderNode').then($id => {
            const idRight = $id.get(0).getBoundingClientRect().right;
            cy.get('@titleHeaderNode').then($title => {
                const titleLeft = $title.get(0).getBoundingClientRect().left;
                expect(titleLeft).to.equal(idRight);
            });
        });
        cy.get('.next-table-body').scrollTo(900, 0);
        cy.get('@timeHeaderNode').then($time => {
            const timeLeft = $time.get(0).getBoundingClientRect().left;
            cy.get('@titleHeaderNode').then($title => {
                const titleRight = $title.get(0).getBoundingClientRect().right;
                expect(timeLeft).to.equal(titleRight);
            });
        });
    });
    it('set keepForwardRenderRows to support large rowSpan when useVirtual, close #4395', () => {
        const datas = (j: number) => {
            const result = [];
            for (let i = 0; i < j; i++) {
                result.push({
                    title: { name: `Quotation for 1PCS Nano ${3 + i}.0 controller compatible` },
                    id: `100306660940${i}\nid\ntest`,
                    time: 2000 + i,
                    index: i,
                });
            }
            return result;
        };
        type AppProps = { scrollToRow?: number; keepForwardRenderRows?: number };
        class App extends React.Component<AppProps> {
            state = {
                scrollToRow: 0,
                dataSource: datas(200),
            };

            componentDidUpdate(prevProps: AppProps) {
                if (
                    'scrollToRow' in this.props &&
                    this.props.scrollToRow !== prevProps.scrollToRow
                ) {
                    this.setState({
                        scrollToRow: this.props.scrollToRow,
                    });
                }
            }

            onBodyScroll: TableProps['onBodyScroll'] = start => {
                this.setState({
                    scrollToRow: start,
                });
            };

            render() {
                return (
                    <Table
                        className="inventory-table"
                        dataSource={this.state.dataSource}
                        maxBodyHeight={314}
                        useVirtual
                        keepForwardRenderRows={this.props.keepForwardRenderRows}
                        scrollToRow={this.state.scrollToRow}
                        onBodyScroll={this.onBodyScroll}
                        cellProps={(rowIndex: number, colIndex) => {
                            if ([0, 17, 34].includes(rowIndex) && colIndex === 0) {
                                return {
                                    rowSpan: 17,
                                };
                            }
                        }}
                    >
                        <Table.Column title="Id1" dataIndex="id" width={120} />
                        <Table.Column title="Index" dataIndex="index" width={200} />
                        <Table.Column title="Time" dataIndex="time" width={200} />
                    </Table>
                );
            }
        }
        cy.mount(<App keepForwardRenderRows={10} />).as('Demo');
        cy.rerender('Demo', { scrollToRow: 15 }).as('Demo2');
        cy.get('[data-next-table-row="0"]').should('not.exist');
        cy.rerender('Demo2', { keepForwardRenderRows: 17 });
        cy.get('[data-next-table-row="0"]').should('exist');
    });
});
