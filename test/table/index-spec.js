import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import assert from 'power-assert';
import Promise from 'promise-polyfill';
// import ReactTestUtils from 'react-dom/test-utils';
import sinon from 'sinon';
import Loading from '../../src/loading';
import Checkbox from '../../src/checkbox';
import Table from '../../src/table/index';

/* eslint-disable */
Enzyme.configure({ adapter: new Adapter() });


describe('Table', () => {

    let dataSource = [{ id: '1', name: 'test' }, { id: '2', name: 'test2' }],
        table,
        wrapper, timeout;

    beforeEach(() => {
        table = <Table dataSource={dataSource}>
            <Table.Column dataIndex='id' />
            <Table.Column dataIndex='name' />
        </Table>

        wrapper = mount(table);
        timeout = (props, callback) => {
            return new Promise((resolve) => {
                wrapper.setProps(props);
                setTimeout(function () {
                    resolve();
                }, 10);
            }).then(callback);
        }
    })

    afterEach(() => {
        table = null;
    })

    it('should mount table', () => {
        assert(wrapper.find('.next-table-body .next-table-row').length === 2);
    });

    it('should render checkboxMode', (done) => {
        timeout({
            rowSelection: {
                getProps: (record) => {
                    if (record.id === '1') {
                        return {
                            disabled: true
                        }
                    }
                }
            }
        }, () => {
            assert(wrapper.find(Checkbox).length === 3);
            assert(wrapper.find('.next-checkbox-wrapper.disabled').length === 1);
            wrapper.find('.next-checkbox').at(2).find('input').simulate('click');
            wrapper.find('.next-checkbox').at(2).find('input').simulate('change');
            done();
        });
    });

    it('should support rowSelect control', (done) => {
        timeout({
            rowSelection: {
                selectedRowKeys: ['1']
            }
        }, () => {
            assert(wrapper.find('.next-checkbox-wrapper.checked').length === 1);
            done();
        })
    });

    it('should render RadioMode', (done) => {
        timeout({
            rowSelection: {
                mode: 'single'
            }
        }, () => {
            assert(wrapper.find('.next-radio').length === 2);
            done();
        });
    });

    it('should support events', (done) => {
        const onRowClick = sinon.spy();
        const onRowMouseEnter = sinon.spy();
        const onRowMouseLeave = sinon.spy();
        timeout({
            onRowClick,
            onRowMouseEnter,
            onRowMouseLeave
        }, () => {
            const row = wrapper.find('.next-table-body .next-table-row').first();
            row.simulate('click');
            assert(onRowClick.called);
            row.simulate('mouseenter');
            assert(onRowMouseEnter.called);
            row.simulate('mouseleave');
            assert(onRowMouseLeave.called);
            done();
        })
    });

    it('should support sort', (done) => {
        const onSort = (dataIndex, order) => {
            assert(dataIndex === 'id');
            assert(order === 'desc');

        };

        timeout({
            children: [<Table.Column dataIndex='id' sortable/>,
            <Table.Column dataIndex='name' />],
            onSort,
        }, () => {
            const sortNode = wrapper.find('.next-table-header .next-table-sort');
            sortNode.simulate('click');
            done();
        });
    });

    it('should support getRowProps for setting className', (done) => {
        const getRowProps = (record) => {
            if (record.id === '1') {
                return {className: 'rowClassName'}
            }
        };
        timeout({
            getRowProps
        }, () => {
            const row = wrapper.find('.next-table-body .next-table-row').first();
            assert(row.hasClass('rowClassName'));
            done();
        });
    });

    it('should support fixedHeader, isZebra, hasBorder, loading', (done) => {
        timeout({
            fixedHeader: true
        }, () => {
            assert(wrapper.find('div.next-table-fixed').length === 1);
        }).then(() => {
            return timeout({
                isZebra: true
            }, () => {
                assert(wrapper.find('div.zebra').length === 1);
            });
        }).then(() => {
            return timeout({
                hasBorder: false
            }, () => {
                assert(wrapper.find('div.only-bottom-border').length === 1);
            });
        }).then(() => {
            return timeout({
                loading: true
            }, () => {
                wrapper.debug();
                assert(wrapper.find(Loading).length === 1);
            });
        }).then(() => {
            const loadingIndicator = (
                <div className="test-custom-loading">Loading...</div>
            )
            const CustomLoading = ({ className }) => (
                <Loading
                    className={className}
                    indicator={loadingIndicator}
                />
            )

            return timeout({
                loading: true,
                loadingComponent: CustomLoading,
            }, () => {
                wrapper.debug();
                assert(wrapper.find(CustomLoading).length === 1);
                assert(wrapper.find('div.test-custom-loading').length === 1);
                done();
            });
        });
    });

    it('should support expandedRowRender', (done) => {
        timeout({
            expandedRowRender: (record) => record.name
        }, () => {
            let expandedCtrl = wrapper.find('.next-table-body .next-table-expanded-ctrl').first();

            expandedCtrl.simulate('click');

            let expandedRow = wrapper.find('.next-table-body .next-table-expanded-row').first();
            assert(expandedRow.text().replace(/\s$|^\s/g, '') === 'test');

        }).then(() => {
            return timeout({
                expandedRowIndent: [2, 1]
            }, () => {
                let expandedRowTdFirst = wrapper.find('.next-table-body .next-table-expanded-row td').first(),
                    expandedRowTdSecond = wrapper.find('.next-table-body .next-table-expanded-row td').at(1);
                assert(expandedRowTdFirst.text().replace(/\s$|^\s/g, '') === '');
                assert(expandedRowTdSecond.text().replace(/\s$|^\s/g, '') === '');
                done();
            });
        });
    });

    it('should support expandedRowEvents', (done) => {
        timeout({
            expandedRowRender: (record) => record.name,
            onRowOpen: (rowKeys) => {
                assert(rowKeys[0] === '1');
                done();
            }
        }, () => {
            let expandedRow = wrapper.find('.next-table-body .next-table-expanded-row').first();
            assert(expandedRow.length === 0);
            let expandedCtrl = wrapper.find('.next-table-body .next-table-expanded-ctrl').first();
            expandedCtrl.simulate('click');
        });
    });

    it('should support multiple header', (done) => {
        timeout({
            children: [
                <Table.ColumnGroup title="group1">
                    <Table.Column dataIndex='id' />
                    <Table.Column dataIndex='name' />
                </Table.ColumnGroup>,
                <Table.ColumnGroup title="group2">
                    <Table.Column dataIndex='id' />
                    <Table.Column dataIndex='name' />
                </Table.ColumnGroup>
            ]
        }, () => {
            let header = wrapper.find('.next-table-header tr');
            assert(header.length === 2);
            assert(header.first().text().replace(/\s/g, '') === 'group1group2');
            done();
        });
    });
    // it('should support filter', () => {
    //     let id;
    //     const onFilter = (...args) => {
    //         id = args[0].id.selectedKeys[0];
    //     },
    //         filters = [{
    //             label: 'Nano 包含3',
    //             value: 3
    //         }, {
    //             label: 'Nano 包含2',
    //             value: 2,
    //             children: [{
    //                 label: 'Nano 包含12',
    //                 value: 22
    //             }, {
    //                 label: 'Nano 包含23',
    //                 value: 23
    //             }]
    //         }, {
    //             label: '其他',
    //             children: [{
    //                 label: 'Nano 包含4',
    //                 value: 4
    //             }, {
    //                 label: 'Nano 包含5',
    //                 value: 5
    //             }]
    //         }];
    //     wrapper.setProps({
    //         onFilter,
    //         children: [<Table.Column dataIndex='id' filters={filters}></Table.Column>]
    //     });
    //     wrapper.find('.next-icon-filter').simulate('click');
    //     ReactTestUtils.Simulate.click(document.querySelectorAll('.next-btn')[0])
    //     wrapper.find('.next-icon-filter').simulate('click');
    //     ReactTestUtils.Simulate.click(document.querySelectorAll('.next-btn')[1])
    //     wrapper.find('.next-icon-filter').simulate('click');
    //     ReactTestUtils.Simulate.click(document.querySelectorAll('.next-menu-item')[0])
    //     ReactTestUtils.Simulate.click(document.querySelectorAll('.next-btn')[0])
    //     assert.deepEqual(id, '3');
    //     wrapper.find('.next-icon-filter').simulate('click');
    //     ReactTestUtils.Simulate.click(document.querySelectorAll('.next-btn')[1])
    //     wrapper.setProps({
    //         filterParams: {
    //             id: {
    //                 selectedKeys: '3'
    //             }
    //         }
    //     });
    //     wrapper.find('.next-icon-filter').simulate('click');
    //     assert.deepEqual(document.querySelectorAll('.next-menu-item')[0].className.indexOf('selected') > -1, true);
    // })

    it('should support lock', () => {
        wrapper.setProps({
            children: [<Table.Column dataIndex='id' lock width={200}></Table.Column>,
            <Table.Column dataIndex='id' lock='right' width={200}></Table.Column>]
        })
        wrapper.debug();
        assert(wrapper.find('div.next-table-lock-left').length === 1);
        assert(wrapper.find('div.next-table-lock-right').length === 1);
        assert(wrapper.find('div.next-table-empty').length === 0);
        //Fix #21
        wrapper.setProps({
            dataSource: []
        });
        assert(wrapper.find('div.next-table-empty').length !== 0);
    })

    it('should support treeMode', (done) => {
        timeout({
            dataSource: [{
                id: '1',
                name: 'test',
                children: [{
                    id: '12',
                    name: '12test'
                }]
            }, {
                id: '2',
                name: 'test2'
            }],
            isTree: true
        }, () => {
            assert(wrapper.find('.next-table-row.hidden').length === 1);
            let treeNode = wrapper.find('.next-table-row .next-icon-arrow-right.next-table-tree-arrow');
            treeNode.simulate('click');
            assert(wrapper.find('.next-table-row.hidden').length === 0);
            assert(wrapper.find('.next-table-row').at(1)
                .find('.next-table-cell-wrapper').first().props().style.paddingLeft === 24)
            done();
        });
    })

    it('should support colspan & rowspan', (done) => {
        wrapper.setProps({

        });
        timeout({
            dataSource: [{ id: '1', name: 'test' }, { id: '2', name: 'test2' }, { id: '3', name: 'test3' }],
            getCellProps: (rowIndex, colIndex) => {
                if (rowIndex == 0 && colIndex == 1) {
                    return {
                        rowSpan: 3
                    }
                }
            }
        }, () => {
            assert(/test/.test(wrapper.find('.next-table-row').at(0).find('td').at(1).text()));
            assert(wrapper.find('.next-table-row').at(1).find('td').length === 1);
            assert(wrapper.find('.next-table-row').at(2).find('td').length === 1);
        }).then(() => {
            timeout({
                dataSource: [{ id: '1', name: 'test' }, { id: '2', name: 'test2' }, { id: '3', name: 'test3' }],
                getCellProps: (rowIndex, colIndex) => {
                    if (rowIndex == 0 && colIndex == 0) {
                        return {
                            colSpan: 2
                        }
                    }
                }
            }, () => {
                done();
                assert(/1/.test(wrapper.find('.next-table-row').at(0).find('td').at(0).text()));
            })
        });
    });

    it('should support getRowProps', (done) => {
        timeout({
            dataSource: [{ id: '1', name: 'test' }, { id: '2', name: 'test2' }, { id: '3', name: 'test3' }],
            getRowProps: (record, index) => {
                if (index == 0 ) {
                    return {
                        'data-props': 'rowprops'
                    };
                }
            }
        }, () => {
            assert(wrapper.find('.next-table-row').at(0).prop('data-props') === 'rowprops');
            done();
        });
    });

    it('should support list Header', (done) => {
        timeout({
            children: [<Table.GroupHeader cell={<div>header</div>}/>, <Table.Column dataIndex="id"/>, <Table.GroupFooter cell={<div>footer</div>}/>],
            dataSource: [{
                id: '1',
                name: 'test',
                children: [{
                    id: '12',
                    name: '12test'
                }]
            }, {
                id: '2',
                name: 'test2'
            }],
        }).then(() => {
            assert(wrapper.find('tr.next-table-group-header').length === 2);
            assert(wrapper.find('tr.next-table-group-footer').length === 2);
            done();
        });
    });

    it('should render null when ColGroup, GroupHeader, Col', () => {
        const colgroup = mount(<Table.ColumnGroup/>)
        const col = mount(<Table.Column/>)
        const groupHeader = mount(<Table.GroupHeader/>)
    });
});
