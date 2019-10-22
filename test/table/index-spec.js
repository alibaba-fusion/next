import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import assert from 'power-assert';
import Promise from 'promise-polyfill';
import ReactTestUtils from 'react-dom/test-utils';
import sinon from 'sinon';
import Loading from '../../src/loading';
import Icon from '../../src/icon';
import Checkbox from '../../src/checkbox';
import Table from '../../src/table/index';

/* eslint-disable */
Enzyme.configure({ adapter: new Adapter() });

describe('Table', () => {
    let dataSource = [{ id: '1', name: 'test' }, { id: '2', name: 'test2' }],
        table,
        wrapper,
        timeout;

    beforeEach(() => {
        table = (
            <Table dataSource={dataSource}>
                <Table.Column dataIndex="id" />
                <Table.Column dataIndex="name" />
            </Table>
        );

        wrapper = mount(table);
        timeout = (props, callback) => {
            return new Promise(resolve => {
                wrapper.setProps(props);
                setTimeout(function() {
                    resolve();
                }, 10);
            }).then(callback);
        };
    });

    afterEach(() => {
        table = null;
    });

    it('should mount table', () => {
        assert(wrapper.find('.next-table-body .next-table-row').length === 2);
    });

    it('should render checkboxMode', done => {
        timeout(
            {
                rowSelection: {
                    getProps: record => {
                        if (record.id === '1') {
                            return {
                                disabled: true,
                            };
                        }
                    },
                },
            },
            () => {
                assert(wrapper.find(Checkbox).length === 3);
                assert(
                    wrapper.find('.next-checkbox-wrapper.disabled').length === 1
                );
                wrapper
                    .find('.next-checkbox')
                    .at(2)
                    .find('input')
                    .simulate('click');
                wrapper
                    .find('.next-checkbox')
                    .at(2)
                    .find('input')
                    .simulate('change');
                done();
            }
        );
    });

    it('should support rowSelect control', done => {
        timeout(
            {
                rowSelection: {
                    selectedRowKeys: ['1'],
                },
            },
            () => {
                assert(
                    wrapper.find('.next-checkbox-wrapper.checked').length === 1
                );
                done();
            }
        );
    });

    it('should render RadioMode', done => {
        timeout(
            {
                rowSelection: {
                    mode: 'single',
                },
            },
            () => {
                assert(wrapper.find('.next-radio').length === 2);
                done();
            }
        );
    });

    it('should support columnProps/titleProps/titleAddons of rowSelection', done => {
        timeout(
            {
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
            },
            () => {
                assert(
                    wrapper
                        .find('#table-titleAddons')
                        .at(0)
                        .text() === '请选择'
                );
                assert(
                    wrapper
                        .find('colgroup')
                        .at(2)
                        .props().children[0].props.style.width === 90
                );
                assert(
                    wrapper
                        .find('th .next-checkbox-wrapper')
                        .at(1)
                        .hasClass('disabled')
                );
                assert(
                    wrapper
                        .find('th .next-checkbox-wrapper .next-checkbox-label')
                        .at(0)
                        .text() === '>'
                );
                done();
            }
        );
    });

    it('should support events', done => {
        const onRowClick = sinon.spy();
        const onRowMouseEnter = sinon.spy();
        const onRowMouseLeave = sinon.spy();
        timeout(
            {
                onRowClick,
                onRowMouseEnter,
                onRowMouseLeave,
            },
            () => {
                const row = wrapper
                    .find('.next-table-body .next-table-row')
                    .first();
                row.simulate('click');
                assert(onRowClick.called);
                row.simulate('mouseenter');
                assert(onRowMouseEnter.called);
                row.simulate('mouseleave');
                assert(onRowMouseLeave.called);
                done();
            }
        );
    });

    it('should support sort', done => {
        const onSort = (dataIndex, order) => {
            assert(dataIndex === 'id');
            assert(order === 'desc');
        };

        timeout(
            {
                children: [
                    <Table.Column dataIndex="id" sortable />,
                    <Table.Column dataIndex="name" />,
                ],
                onSort,
            },
            () => {
                const sortNode = wrapper.find(
                    '.next-table-header .next-table-sort'
                );
                sortNode.simulate('click');
                done();
            }
        );
    });
    it('should support sortIcons', done => {
        const onSort = (dataIndex, order) => {
            assert(dataIndex === 'id');
            assert(order === 'desc');
        };

        timeout(
            {
                children: [
                    <Table.Column dataIndex="id" sortable />,
                    <Table.Column dataIndex="name" />,
                ],
                onSort,
                sortIcons: {
                    desc: <Icon style={{top: '6px', left: '4px'}} type={'arrow-down'} size="small" />,
                    asc: <Icon style={{top: '-6px', left: '4px'}} type={'arrow-up'} size="small" />
                }
            },
            () => {
                const sortNode = wrapper.find(
                    '.next-table-header .next-table-sort'
                );
                assert(sortNode.find('.next-icon-arrow-down'));
                assert(sortNode.find('.next-icon-arrow-up'));
                sortNode.simulate('click');
                done();
            }
        );
    });

    it('should support getRowProps for setting className', done => {
        const getRowProps = record => {
            if (record.id === '1') {
                return { className: 'rowClassName' };
            }
        };
        timeout(
            {
                getRowProps,
            },
            () => {
                const row = wrapper
                    .find('.next-table-body .next-table-row')
                    .first();
                assert(row.hasClass('rowClassName'));
                done();
            }
        );
    });

    it('should support rowProps for setting className', done => {
        const rowProps = record => {
            if (record.id === '1') {
                return { className: 'rowClassName' };
            }
        };
        timeout(
            {
                rowProps,
            },
            () => {
                const row = wrapper
                    .find('.next-table-body .next-table-row')
                    .first();
                assert(row.hasClass('rowClassName'));
                done();
            }
        );
    });

    it('should support fixedHeader, isZebra, hasBorder, loading', done => {
        timeout(
            {
                fixedHeader: true,
            },
            () => {
                assert(wrapper.find('div.next-table-fixed').length === 1);
            }
        )
            .then(() => {
                return timeout(
                    {
                        isZebra: true,
                    },
                    () => {
                        assert(wrapper.find('div.zebra').length === 1);
                    }
                );
            })
            .then(() => {
                return timeout(
                    {
                        hasBorder: false,
                    },
                    () => {
                        assert(
                            wrapper.find('div.only-bottom-border').length === 1
                        );
                    }
                );
            })
            .then(() => {
                return timeout(
                    {
                        loading: true,
                    },
                    () => {
                        wrapper.debug();
                        assert(wrapper.find(Loading).length === 1);
                    }
                );
            })
            .then(() => {
                const loadingIndicator = (
                    <div className="test-custom-loading">Loading...</div>
                );
                const CustomLoading = ({ className }) => (
                    <Loading
                        className={className}
                        indicator={loadingIndicator}
                    />
                );

                return timeout(
                    {
                        loading: true,
                        loadingComponent: CustomLoading,
                    },
                    () => {
                        wrapper.debug();
                        assert(wrapper.find(CustomLoading).length === 1);
                        assert(
                            wrapper.find('div.test-custom-loading').length === 1
                        );
                        done();
                    }
                );
            });
    });

    it('should support expandedRowRender getExpandedColProps with expandedIndexSimulate', done => {
        const arr = [];
        timeout(
            {
                children: [
                    <Table.Column dataIndex="id" width={200} />,
                    <Table.Column
                        cell={(record, index) => {
                            arr.push(index);
                        }}
                        width={200}
                    />,
                ],
                expandedRowRender: (record, index) => record.name + index,
                getRowProps: (record, index) => {
                    assert(record.id == index + 1);
                    return { className: `next-myclass-${index}` };
                },
                getExpandedColProps: (record, index) => {
                    assert(record.id == index + 1);
                },
                expandedIndexSimulate: true,
            },
            () => {
                assert(arr.toString() === '0,1');

                let expandedCtrl0 = wrapper
                    .find('.next-table-body .next-table-expanded-ctrl')
                    .at(0);
                expandedCtrl0.simulate('click');
                let expandedRow0 = wrapper
                    .find('.next-table-body .next-table-expanded-row')
                    .at(0);

                assert(
                    expandedRow0.text().replace(/\s$|^\s/g, '') === 'test' + '0'
                );

                let expandedCtrl1 = wrapper
                    .find('.next-table-body .next-table-expanded-ctrl')
                    .at(1);
                expandedCtrl1.simulate('click');
                let expandedRow1 = wrapper
                    .find('.next-table-body .next-table-expanded-row')
                    .at(1);

                assert(
                    expandedRow1.text().replace(/\s$|^\s/g, '') ===
                        'test2' + '1'
                );
            }
        ).then(() => {
            return timeout(
                {
                    expandedRowIndent: [2, 1],
                },
                () => {
                    let expandedRowTdFirst = wrapper
                            .find(
                                '.next-table-body .next-table-expanded-row td'
                            )
                            .first(),
                        expandedRowTdSecond = wrapper
                            .find(
                                '.next-table-body .next-table-expanded-row td'
                            )
                            .at(1);
                    assert(
                        expandedRowTdFirst.text().replace(/\s$|^\s/g, '') === ''
                    );
                    assert(
                        expandedRowTdSecond.text().replace(/\s$|^\s/g, '') ===
                            ''
                    );
                    done();
                }
            );
        });
    });

    it('should support expandedRowEvents', done => {
        timeout(
            {
                expandedRowRender: record => record.name,
                onRowOpen: rowKeys => {
                    assert(rowKeys[0] === '1');
                    done();
                },
            },
            () => {
                let expandedRow = wrapper
                    .find('.next-table-body .next-table-expanded-row')
                    .first();
                assert(expandedRow.length === 0);
                let expandedCtrl = wrapper
                    .find('.next-table-body .next-table-expanded-ctrl')
                    .first();
                expandedCtrl.simulate('click');
            }
        );
    });

    it('should support multiple header', done => {
        timeout(
            {
                children: [
                    <Table.ColumnGroup title="group1">
                        <Table.Column dataIndex="id" />
                        <Table.Column dataIndex="name" />
                    </Table.ColumnGroup>,
                    <Table.ColumnGroup title="group2">
                        <Table.Column dataIndex="id" />
                        <Table.Column dataIndex="name" />
                    </Table.ColumnGroup>,
                ],
            },
            () => {
                let header = wrapper.find('.next-table-header tr');
                assert(header.length === 2);
                assert(
                    header
                        .first()
                        .text()
                        .replace(/\s/g, '') === 'group1group2'
                );
                done();
            }
        );
    });
    it('should support filter', () => {
        let id;
        const onFilter = (...args) => {
                console.log('on filter', args);
                id = args[0].id.selectedKeys[0];
            },
            filters = [
                {
                    label: 'Nano 包含1',
                    value: 1,
                },
                {
                    label: 'Nano 包含3',
                    value: 3,
                },
                {
                    label: 'Nano 包含2',
                    value: 2,
                    children: [
                        {
                            label: 'Nano 包含12',
                            value: 22,
                        },
                        {
                            label: 'Nano 包含23',
                            value: 23,
                        },
                    ],
                },
                {
                    label: '其他',
                    children: [
                        {
                            label: 'Nano 包含4',
                            value: 4,
                        },
                        {
                            label: 'Nano 包含5',
                            value: 5,
                        },
                    ],
                },
            ];
        wrapper.setProps({
            onFilter,
            children: [<Table.Column dataIndex="id" filters={filters} />],
        });
        wrapper.find('.next-icon-filter').simulate('click');
        wrapper
            .find('.next-btn')
            .at(0)
            .simulate('click');

        assert.deepEqual(id, undefined);
        wrapper.find('.next-icon-filter').simulate('click');
        wrapper
            .find('.next-menu-item')
            .at(1)
            .simulate('click');
        wrapper
            .find('.next-btn')
            .at(0)
            .simulate('click');
        assert.deepEqual(id, '3');

        wrapper.setProps({
            filterParams: {
                id: {
                    selectedKeys: '1',
                },
            },
        });
        wrapper
            .find('.next-btn')
            .at(0)
            .simulate('click');
        assert.deepEqual(id, '1');
        wrapper.find('.next-icon-filter').simulate('click');
        assert.deepEqual(
            wrapper
                .find('.next-menu-item')
                .at(0)
                .props()
                .className.indexOf('next-selected') > -1,
            true
        );
    });

    it('should support lock', () => {
        wrapper.setProps({
            children: [
                <Table.Column dataIndex="id" lock width={200} />,
                <Table.Column dataIndex="id" lock="right" width={200} />,
            ],
        });
        wrapper.debug();
        assert(wrapper.find('div.next-table-lock-left').length === 1);
        assert(wrapper.find('div.next-table-lock-right').length === 1);
        assert(wrapper.find('div.next-table-empty').length === 0);
        //Fix #21
        wrapper.setProps({
            dataSource: [],
        });
        assert(wrapper.find('div.next-table-empty').length !== 0);
    });

    it('should support lock row mouseEnter mouseLeave', done => {
        wrapper.setProps({
            children: [
                <Table.Column dataIndex="id" lock width={200} />,
                <Table.Column dataIndex="id" lock="right" width={200} />,
            ],
        });
        const onRowClick = sinon.spy();
        const onRowMouseEnter = sinon.spy();
        const onRowMouseLeave = sinon.spy();
        timeout(
            {
                onRowClick,
                onRowMouseEnter,
                onRowMouseLeave,
            },
            () => {
                const row = wrapper
                    .find('.next-table-body .next-table-row')
                    .first();
                row.simulate('click');
                assert(onRowClick.called);
                row.simulate('mouseenter');
                assert(onRowMouseEnter.called);
                row.simulate('mouseleave');
                assert(onRowMouseLeave.called);
                done();
            }
        );
    });

    it('should support treeMode', done => {
        timeout(
            {
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
            },
            () => {
                assert(wrapper.find('.next-table-row.hidden').length === 1);
                let treeNode = wrapper.find(
                    '.next-table-row .next-icon-arrow-right.next-table-tree-arrow'
                );
                treeNode.simulate('click');
                assert(wrapper.find('.next-table-row.hidden').length === 0);
                assert(
                    wrapper
                        .find('.next-table-row')
                        .at(1)
                        .find('.next-table-cell-wrapper')
                        .first()
                        .props().style.paddingLeft === 24
                );
                done();
            }
        );
    });

    it('header should support colspan', done => {
        wrapper.setProps({});

        timeout(
            {
                children: [
                    <Table.Column dataIndex="id" />,
                    <Table.Column dataIndex="name" />,
                ]
            },
            () => {
                assert(wrapper.find('.next-table-header th').length === 2);
            }
        ).then(() => {
            timeout(
                {
                    children: [
                        <Table.Column dataIndex="id" colSpan="2" />,
                        <Table.Column dataIndex="name" colSpan="0" />,
                    ]
                },
                () => {
                    assert(wrapper.find('.next-table-header th').length === 1);
                    done();
                }
            )
        });
    });

    it('should support colspan & rowspan', done => {
        wrapper.setProps({});
        timeout(
            {
                dataSource: [
                    { id: '1', name: 'test' },
                    { id: '2', name: 'test2' },
                    { id: '3', name: 'test3' },
                ],
                cellProps: (rowIndex, colIndex) => {
                    if (rowIndex == 0 && colIndex == 1) {
                        return {
                            rowSpan: 3,
                        };
                    }
                },
            },
            () => {
                assert(
                    /test/.test(
                        wrapper
                            .find('.next-table-row')
                            .at(0)
                            .find('td')
                            .at(1)
                            .text()
                    )
                );
                assert(
                    wrapper
                        .find('.next-table-row')
                        .at(1)
                        .find('td').length === 1
                );
                assert(
                    wrapper
                        .find('.next-table-row')
                        .at(2)
                        .find('td').length === 1
                );
            }
        ).then(() => {
            timeout(
                {
                    dataSource: [
                        { id: '1', name: 'test' },
                        { id: '2', name: 'test2' },
                        { id: '3', name: 'test3' },
                    ],
                    cellProps: (rowIndex, colIndex) => {
                        if (rowIndex == 0 && colIndex == 0) {
                            return {
                                colSpan: 2,
                            };
                        }
                    },
                },
                () => {
                    done();
                    assert(
                        /1/.test(
                            wrapper
                                .find('.next-table-row')
                                .at(0)
                                .find('td')
                                .at(0)
                                .text()
                        )
                    );
                }
            );
        });
    });

    it('should support colspan & rowspan', done => {
        wrapper.setProps({});
        timeout(
            {
                dataSource: [
                    { id: '1', name: 'test' },
                    { id: '2', name: 'test2' },
                    { id: '3', name: 'test3' },
                ],
                getCellProps: (rowIndex, colIndex) => {
                    if (rowIndex == 0 && colIndex == 1) {
                        return {
                            rowSpan: 3,
                        };
                    }
                },
            },
            () => {
                assert(
                    /test/.test(
                        wrapper
                            .find('.next-table-row')
                            .at(0)
                            .find('td')
                            .at(1)
                            .text()
                    )
                );
                assert(
                    wrapper
                        .find('.next-table-row')
                        .at(1)
                        .find('td').length === 1
                );
                assert(
                    wrapper
                        .find('.next-table-row')
                        .at(2)
                        .find('td').length === 1
                );
            }
        ).then(() => {
            timeout(
                {
                    dataSource: [
                        { id: '1', name: 'test' },
                        { id: '2', name: 'test2' },
                        { id: '3', name: 'test3' },
                    ],
                    getCellProps: (rowIndex, colIndex) => {
                        if (rowIndex == 0 && colIndex == 0) {
                            return {
                                colSpan: 2,
                            };
                        }
                    },
                },
                () => {
                    done();
                    assert(
                        /1/.test(
                            wrapper
                                .find('.next-table-row')
                                .at(0)
                                .find('td')
                                .at(0)
                                .text()
                        )
                    );
                }
            );
        });
    });

    it('should support getRowProps', done => {
        timeout(
            {
                dataSource: [
                    { id: '1', name: 'test' },
                    { id: '2', name: 'test2' },
                    { id: '3', name: 'test3' },
                ],
                getRowProps: (record, index) => {
                    if (index == 0) {
                        return {
                            'data-props': 'rowprops',
                        };
                    }
                },
            },
            () => {
                assert(
                    wrapper
                        .find('.next-table-row')
                        .at(0)
                        .prop('data-props') === 'rowprops'
                );
                done();
            }
        );
    });

    it('should support rowProps', done => {
        timeout(
            {
                dataSource: [
                    { id: '1', name: 'test' },
                    { id: '2', name: 'test2' },
                    { id: '3', name: 'test3' },
                ],
                rowProps: (record, index) => {
                    if (index == 0) {
                        return {
                            'data-props': 'rowprops',
                        };
                    }
                },
            },
            () => {
                assert(
                    wrapper
                        .find('.next-table-row')
                        .at(0)
                        .prop('data-props') === 'rowprops'
                );
                done();
            }
        );
    });

    it('should support list Header', done => {
        timeout({
            children: [
                <Table.GroupHeader cell={<div>header</div>} />,
                <Table.Column dataIndex="id" />,
                <Table.GroupFooter cell={<div>footer</div>} />,
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
        }).then(() => {
            assert(wrapper.find('tr.next-table-group-header').length === 2);
            assert(wrapper.find('tr.next-table-group-footer').length === 2);
            done();
        });
    });

    it('should render null when ColGroup, GroupHeader, Col', () => {
        const colgroup = mount(<Table.ColumnGroup />);
        const col = mount(<Table.Column />);
        const groupHeader = mount(<Table.GroupHeader />);
    });

    it('should support stickyHeader', done => {
        timeout(
            {
                stickyHeader: true,
            },
            () => {
                assert(wrapper.find('div.next-table-affix').length === 1);
                done();
            }
        );
    });

    it('should support resize', done => {
        timeout(
            {
                children: [
                    <Table.Column dataIndex="id" resizable width={200} />,
                    <Table.Column dataIndex="name" width={200} />,
                ],
                onResizeChange: (dataIndex, value) => {
                    console.log(dataIndex, value);
                },
            },
            () => {
                wrapper
                    .find('.next-table-resize-handler')
                    .simulate('mousedown', { pageX: 0 });
                assert(document.body.style.cursor === 'ew-resize');
                document.dispatchEvent(new Event('mousemove', { pageX: 0 }));
                document.dispatchEvent(new Event('mouseup'));

                setTimeout(() => {
                    assert(document.body.style.cursor === '');
                    done();
                }, 100);
            }
        );
    });

    it('should support rtl', done => {
        timeout(
            {
                children: [
                    <Table.Column dataIndex="id" lock width={200} />,
                    <Table.Column dataIndex="name" width={200} />,
                ],
                rtl: true,
            },
            () => {
                assert(wrapper.find('.next-table[dir="rtl"]').length === 3);
                done();
            }
        );
    });

    it('should support rtl resize', done => {
        timeout(
            {
                children: [
                    <Table.Column dataIndex="id" resizable width={200} />,
                    <Table.Column dataIndex="name" width={200} />,
                ],
                rtl: true,
                onResizeChange: (dataIndex, value) => {
                    console.log(dataIndex, value);
                },
            },
            () => {
                wrapper
                    .find('.next-table-resize-handler')
                    .simulate('mousedown', { pageX: 0 });
                assert(document.body.style.cursor === 'ew-resize');
                document.dispatchEvent(new Event('mousemove', { pageX: 0 }));
                document.dispatchEvent(new Event('mouseup'));

                setTimeout(() => {
                    assert(document.body.style.cursor === '');
                    done();
                }, 100);
            }
        );
    });

    it('should support dataSource [] => [{},{}] => []', () => {
        wrapper.setProps({
            children: [
                <Table.Column dataIndex="id" lock width={200} />,
                <Table.Column dataIndex="id" lock="right" width={200} />,
            ],
        });
        wrapper.debug();
        assert(wrapper.find('div.next-table-lock-left').length === 1);
        assert(wrapper.find('div.next-table-lock-right').length === 1);
        assert(wrapper.find('div.next-table-empty').length === 0);

        wrapper.setProps({
            dataSource: [],
        });
        assert(wrapper.find('div.next-table-empty').length !== 0);

        wrapper.setProps({
            dataSource: [{ id: '1', name: 'test' }, { id: '2', name: 'test2' }],
        });

        assert(wrapper.find('div.next-table-lock-left').length === 1);
        assert(wrapper.find('div.next-table-lock-right').length === 1);
        assert(wrapper.find('div.next-table-empty').length === 0);
    });

    it('should support lock scroll x', () => {
        wrapper.setProps({
            children: [
                <Table.Column dataIndex="id" lock width={200} />,
                <Table.Column dataIndex="name" width={200} />,
                <Table.Column dataIndex="id" lock="right" width={200} />,
            ],
        });
        wrapper.debug();
        assert(wrapper.find('div.next-table-lock-left').length === 1);
        assert(wrapper.find('div.next-table-lock-right').length === 1);

        const body = wrapper
            .find('div.next-table-lock .next-table-body')
            .at(1)
            .props()
            .onWheel({ deltaY: 200, deltaX: 5 });
    });

    it('should support align alignHeader', () => {
        wrapper.setProps({
            children: [
                <Table.Column
                    title="id"
                    align="right"
                    alignHeader="left"
                    dataIndex="id"
                    width={200}
                />,
                <Table.Column
                    title="name"
                    align="left"
                    dataIndex="name"
                    width={200}
                />,
                <Table.Column
                    title="id"
                    alignHeader="right"
                    dataIndex="id"
                    width={200}
                />,
            ],
        });

        assert(
            wrapper
                .find('thead tr th')
                .at(0)
                .props().style.textAlign === 'left'
        );
        assert(
            wrapper
                .find('thead tr th')
                .at(1)
                .props().style.textAlign === 'left'
        );
        assert(
            wrapper
                .find('thead tr th')
                .at(2)
                .props().style.textAlign === 'right'
        );

        assert(
            wrapper
                .find('tbody tr')
                .at(0)
                .find('td')
                .at(0)
                .props().style.textAlign === 'right'
        );
        assert(
            wrapper
                .find('tbody tr')
                .at(0)
                .find('td')
                .at(1)
                .props().style.textAlign === 'left'
        );
        assert(
            wrapper
                .find('tbody tr')
                .at(0)
                .find('td')
                .at(2)
                .props().style.textAlign === undefined
        );
    });

    it('should support align alignHeader rtl', () => {
        wrapper.setProps({
            children: [
                <Table.Column
                    title="id"
                    align="right"
                    alignHeader="left"
                    dataIndex="id"
                    width={200}
                />,
                <Table.Column
                    title="name"
                    align="left"
                    dataIndex="name"
                    width={200}
                />,
                <Table.Column
                    title="id"
                    alignHeader="right"
                    dataIndex="id"
                    width={200}
                />,
            ],
            rtl: true,
        });

        assert(
            wrapper
                .find('thead tr th')
                .at(0)
                .props().style.textAlign === 'right'
        );
        assert(
            wrapper
                .find('thead tr th')
                .at(1)
                .props().style.textAlign === 'right'
        );
        assert(
            wrapper
                .find('thead tr th')
                .at(2)
                .props().style.textAlign === 'left'
        );

        assert(
            wrapper
                .find('tbody tr')
                .at(0)
                .find('td')
                .at(0)
                .props().style.textAlign === 'left'
        );
        assert(
            wrapper
                .find('tbody tr')
                .at(0)
                .find('td')
                .at(1)
                .props().style.textAlign === 'right'
        );
        assert(
            wrapper
                .find('tbody tr')
                .at(0)
                .find('td')
                .at(2)
                .props().style.textAlign === undefined
        );
    });
});
