import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import assert from 'power-assert';
import Promise from 'promise-polyfill';
import Table from '../index';
import Button from '../../button/index';
import ConfigProvider from '../../config-provider';
import Input from '../../input';
import '../style';
/* eslint-disable */
Enzyme.configure({ adapter: new Adapter() });
const delay = duration => new Promise(resolve => setTimeout(resolve, duration));
const generateDataSource = j => {
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

describe('Issue', () => {
    let dataSource = [{ id: '1', name: 'test' }, { id: '2', name: 'test2' }],
        table,
        timeout,
        wrapper;

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

    it('should support not display empty when table is Loading', done => {
        wrapper.setProps({});
        timeout(
            {
                loading: true,
                dataSource: [],
            },
            () => {
                assert(wrapper.find('.next-table-empty').text() === ' ');
            }
        ).then(() => {
            timeout(
                {
                    loading: false,
                },
                () => {
                    assert(wrapper.find('.next-table-empty').text() === '没有数据');
                    done();
                }
            );
        });
    });

    it('should support rowSelection without children and columns', done => {
        const container = document.createElement('div');
        document.body.appendChild(container);
        class App extends React.Component {
            render() {
                return (
                    <Table
                        dataSource={dataSource}
                        rowSelection={{ onChange: () => {} }}
                        expandedRowRender={record => record.title}
                    />
                );
            }
        }

        ReactDOM.render(<App />, container, function() {
            setTimeout(() => {
                ReactDOM.unmountComponentAtNode(container);
                document.body.removeChild(container);
                done();
            }, 10);
        });
    });

    it('should support columns with lock', done => {
        const container = document.createElement('div');
        document.body.appendChild(container);
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
                        <Table id="normal-table" dataSource={dataSource} columns={columns} tableWidth={600} />
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

        ReactDOM.render(<App />, container, function() {
            assert(
                container.querySelectorAll('#normal-table .next-table-lock-left .next-table-body tbody tr').length === 2
            );
            assert(container.querySelectorAll('#sticky-table .next-table-fix-left')[0].style.position === 'sticky');
            setTimeout(() => {
                ReactDOM.unmountComponentAtNode(container);
                document.body.removeChild(container);
                done();
            }, 10);
        });
    });

    it('should fix onChange reRender bug', done => {
        const container = document.createElement('div');
        document.body.appendChild(container);
        class App extends React.Component {
            state = {
                selected: [],
            };
            onSelectionChange = (ids, records) => {
                this.setState({
                    selected: records,
                });
            };
            render() {
                return (
                    <Table dataSource={dataSource} rowSelection={{ onChange: this.onSelectionChange }}>
                        <Table.Column dataIndex="id" />
                        <Table.Column dataIndex="name" />
                    </Table>
                );
            }
        }

        ReactDOM.render(<App />, container, function() {
            const input = container.querySelector('.next-table-header .next-checkbox input');
            input.click();
            setTimeout(() => {
                assert(container.querySelectorAll('.next-table-body .next-checkbox-wrapper.checked').length === 2);
                ReactDOM.unmountComponentAtNode(container);
                document.body.removeChild(container);
                done();
            }, 10);
        });
    });

    it('should support null child', () => {
        wrapper.setProps({
            children: [null, <Table.Column dataIndex="id" />],
        });
        assert(wrapper.find('.next-table-body tr').length === 2);
    });

    it('should support rowSelection & tree', done => {
        timeout(
            {
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
            },
            () => {
                assert(wrapper.find('.next-table-row').find('.hidden').length === 1);
                done();
            }
        );
    });

    it('should support rowSelection click', () => {
        const div = document.createElement('div');
        document.body.appendChild(div);
        const rowSelection = {
            onChange: () => {},
        };

        ReactDOM.render(
            <Table dataSource={[{ id: 1 }, { id: 2 }]} rowSelection={rowSelection}>
                <Table.Column dataIndex="id" style={{ textAlign: 'left' }} />
            </Table>,
            div
        );

        div.querySelectorAll('.next-checkbox-wrapper')[1].click();
        assert(div.querySelectorAll('.next-checkbox-wrapper.checked').length === 1);
        div.querySelectorAll('.next-checkbox-wrapper')[0].click();
        assert(div.querySelectorAll('.next-checkbox-wrapper.checked').length === 3);

        ReactDOM.unmountComponentAtNode(div);
        document.body.removeChild(div);
    });

    it('should ignore lock as `true` string', () => {
        wrapper.setProps({
            rowSelection: {
                onChange: () => {},
            },
            children: <Table.Column dataIndex="id" lock="true" width={200} />,
        });
    });

    // it('should support optimization', (done) => {
    //     class App extends React.Component {
    //         state = {
    //             extra: 'abc'
    //         }
    //         cellRender = (value) => {
    //             return value + this.state.extra;
    //         }
    //         render() {
    //             return <Table dataSource={[{ id: 1 }]} optimization={false}>
    //                 <Table.Column cell={this.cellRender} dataIndex="id" />
    //             </Table>
    //         }
    //         componentDidMount() {
    //             setTimeout(() => {
    //                 this.setState({
    //                     extra: 'bcd'
    //                 });
    //             }, 10);
    //         }
    //     }
    //     const wrapper = mount(<App />);
    //     setTimeout(() => {
    //         assert(/bcd/.test(wrapper.find('.next-table-body td').at(0).text()));
    //         done();
    //     }, 100);
    // });

    it('should ignore lock when colWidth < tableWidth', done => {
        class App extends React.Component {
            state = {
                cols: [
                    <Table.Column cell={this.cellRender} dataIndex="id" lock width={300} key="id" />,
                    <Table.Column cell={this.cellRender} dataIndex="id" width={400} key="id1" />,
                    <Table.Column cell={this.cellRender} dataIndex="id" width={500} key="id2" />,
                ],
            };
            cellRender = value => {
                return value;
            };
            render() {
                return (
                    <div style={{ width: '400px' }}>
                        <Table dataSource={[{ id: 1 }]}>{this.state.cols}</Table>
                    </div>
                );
            }
            componentDidMount() {
                setTimeout(() => {
                    this.setState({
                        cols: <Table.Column cell={this.cellRender} dataIndex="id" lock width={300} />,
                    });
                }, 100);
            }
        }

        const div = document.createElement('div');
        document.body.appendChild(div);
        ReactDOM.render(<App />, div);
        assert(div.querySelectorAll('.next-table-lock-left')[0].children.length !== 0);
        assert(div.querySelectorAll('.next-table-lock-right')[0].children.length === 0);
        assert(div.querySelectorAll('div.next-table-lock.next-table-scrolling-to-right').length === 1);

        setTimeout(() => {
            assert(div.querySelectorAll('.next-table-lock-left')[0].children.length === 0);
            assert(div.querySelectorAll('.next-table-lock-right')[0].children.length === 0);
            ReactDOM.unmountComponentAtNode(div);
            document.body.removeChild(div);
            done();
        }, 200);
    });

    it('should has border when set hasHeader as false', () => {
        const div = document.createElement('div');
        document.body.appendChild(div);
        ReactDOM.render(
            <Table dataSource={[{ id: 1 }, { id: 2 }]} hasHeader={false}>
                <Table.Column dataIndex="id" />
            </Table>,
            div
        );
        //Hack firefox,IE10,IE11 render error;
        div.querySelectorAll('.next-table table')[0].style.borderCollapse = 'separate';
        assert(parseInt(window.getComputedStyle(div.querySelectorAll('.next-table')[0]).borderTopWidth, 10) === 1);
        ReactDOM.unmountComponentAtNode(div);
        document.body.removeChild(div);
    });

    it('should support style config for Table.Column', () => {
        const div = document.createElement('div');
        document.body.appendChild(div);
        ReactDOM.render(
            <Table dataSource={[{ id: 1 }, { id: 2 }]}>
                <Table.Column dataIndex="id" style={{ textAlign: 'left' }} />
            </Table>,
            div
        );
        assert(div.querySelectorAll('.next-table table td')[0].style.textAlign === '');
        assert(div.querySelectorAll('.next-table table th')[0].style.textAlign === 'left');
        ReactDOM.unmountComponentAtNode(div);
        document.body.removeChild(div);
    });

    it('should support pass null to sort and any others', () => {
        const div = document.createElement('div');
        document.body.appendChild(div);
        ReactDOM.render(
            <Table
                dataSource={[{ id: 1 }, { id: 2 }]}
                hasHeader={false}
                sort={null}
                openRowKeys={null}
                filterParams={null}
                expandedRowKeys={null}
            >
                <Table.Column dataIndex="id" />
            </Table>,
            div
        );
        ReactDOM.unmountComponentAtNode(div);
        document.body.removeChild(div);
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

        const div = document.createElement('div');
        document.body.appendChild(div);
        ReactDOM.render(<App />, div);

        assert(div.querySelectorAll('.next-table-body tbody tr').length < 100);

        ReactDOM.unmountComponentAtNode(div);
        document.body.removeChild(div);
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

        const div = document.createElement('div');
        document.body.appendChild(div);
        ReactDOM.render(<App />, div);

        let expandedTotal = div.querySelectorAll('tbody tr');
        assert(expandedTotal.length === 5);

        ReactDOM.unmountComponentAtNode(div);
        document.body.removeChild(div);
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

        const div = document.createElement('div');
        document.body.appendChild(div);
        ReactDOM.render(<App />, div);

        const sortBtn = div.querySelectorAll('.next-table-header .next-table-sort');
        sortBtn[0].click();
        sortBtn[1].click();

        assert(div.getElementsByClassName('current').length === 1);
        ReactDOM.unmountComponentAtNode(div);
        document.body.removeChild(div);
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

        const div = document.createElement('div');
        document.body.appendChild(div);
        ReactDOM.render(<App />, div);

        const sortBtn = div.querySelectorAll('.next-table-header .next-table-sort');
        sortBtn[0].click();
        assert(div.querySelectorAll('a.current .next-icon-descending'));
        sortBtn[0].click();
        assert(div.querySelectorAll('a.current .next-icon-ascending'));
        sortBtn[0].click();
        assert(div.querySelectorAll('a.current').length === 0);

        ReactDOM.unmountComponentAtNode(div);
        document.body.removeChild(div);
    });

    it('sort should have only one empty when datasorce=[] && enough width', () => {
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

        const div = document.createElement('div');
        document.body.appendChild(div);
        ReactDOM.render(<App />, div);

        assert(div.querySelectorAll('div.next-table-empty').length === 1);
        ReactDOM.unmountComponentAtNode(div);
        document.body.removeChild(div);
    });

    it('fix #466, stickHeader + lock with enough space', () => {
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

        const div = document.createElement('div');
        document.body.appendChild(div);
        ReactDOM.render(<App />, div);

        assert(div.querySelectorAll('div.next-table-empty').length === 1);
        ReactDOM.unmountComponentAtNode(div);
        document.body.removeChild(div);
    });

    it('should support crossline hover', done => {
        const container = document.createElement('div');
        document.body.appendChild(container);
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

        ReactDOM.render(<App />, container, function() {
            const cell = container.querySelector('td[data-next-table-col="1"][data-next-table-row="1"]');
            const mouseover = new MouseEvent('mouseover', {
                view: window,
                bubbles: true,
                cancelable: true,
            });

            cell.dispatchEvent(mouseover);

            assert(container.querySelectorAll('td.next-table-cell.hovered').length === 2);

            assert(container.querySelectorAll('tr.next-table-row.hovered').length === 1);

            const mouseout = new MouseEvent('mouseout', {
                view: window,
                bubbles: true,
                cancelable: true,
            });

            cell.dispatchEvent(mouseout);

            assert(container.querySelectorAll('td.next-table-cell.hovered').length === 0);

            // target is in inner
            const renderA = container.querySelector('#name-0');
            renderA.dispatchEvent(mouseover);

            assert(container.querySelectorAll('td.next-table-cell.hovered').length === 2);

            assert(container.querySelectorAll('tr.next-table-row.hovered').length === 1);

            renderA.dispatchEvent(mouseout);

            assert(container.querySelectorAll('td.next-table-cell.hovered').length === 0);

            ReactDOM.unmountComponentAtNode(container);
            document.body.removeChild(container);
            done();
        });
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
                                        avatar:
                                            'https://sc01.alicdn.com/kf/HTB1ravHKXXXXXccXVXXq6xXFXXXJ/Chinese-Style-Fashion-Custom-Digital-Print-Silk.jpg_220x220.jpg',
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
                            cell={product => {
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

        const div = document.createElement('div');
        document.body.appendChild(div);
        ReactDOM.render(<App />, div);

        assert(div.querySelectorAll('.next-table-group-header + tr').length === 1);
        ReactDOM.unmountComponentAtNode(div);
        document.body.removeChild(div);
    });

    // fix https://github.com/alibaba-fusion/next/issues/4396
    it('should support Header and Body follow the TableGroupHeader when it locks the columns', async () => {
        const container = document.createElement('div');
        document.body.appendChild(container);

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
                        lock: 'left',
                        width: 140,
                    },
                    {
                        title: 'Title3',
                        lock: 'left',
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

        ReactDOM.render(
            <Table.StickyLock dataSource={dataSource()} columns={columns}>
                <Table.GroupHeader
                    cell={() => {
                        return <div>title</div>;
                    }}
                />
            </Table.StickyLock>,
            container
        );
        const tableHeader = container.querySelector('.next-table-header');
        const tableBody = container.querySelector('.next-table-body');
        assert(tableHeader);
        assert(tableBody);
        // wait for initial scroll align
        await delay(200);
        tableHeader.scrollLeft = 100;
        ReactTestUtils.Simulate.scroll(tableHeader);
        await delay(200);
        assert(tableHeader.scrollLeft === 100);
        assert(tableBody.scrollLeft === 100);

        tableBody.scrollLeft = 0;
        ReactTestUtils.Simulate.scroll(tableBody);
        await delay(200);
        assert(tableHeader.scrollLeft === 0);
        assert(tableBody.scrollLeft === 0);
    });

    it('should support multiple header lock', done => {
        const container = document.createElement('div');
        document.body.appendChild(container);

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
        const render = (value, index, record) => {
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

        ReactDOM.render(<Table.StickyLock dataSource={dataSource()} columns={columns} />, container, function() {
            setTimeout(() => {
                assert(parseInt(container.querySelector('#target-line').style.left) - 340 < 1);
                ReactDOM.unmountComponentAtNode(container);
                document.body.removeChild(container);
                done();
            }, 10);
        });
    });

    it('should set right offset, fix #2276', done => {
        const container = document.createElement('div');
        document.body.appendChild(container);

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
        const render = (value, index, record) => {
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

        ReactDOM.render(<Table.StickyLock dataSource={dataSource()} columns={columns} />, container, function() {
            setTimeout(() => {
                assert(
                    parseInt(container.querySelectorAll('.next-table-cell.next-table-fix-right.next-table-fix-right-first')[3]
                        .style.right) - 200 < 1
                );
                ReactDOM.unmountComponentAtNode(container);
                document.body.removeChild(container);
                done();
            }, 10);
        });
    });

    it('should work with expanded virtual table, fix #2646', done => {
        const container = document.createElement('div');
        document.body.appendChild(container);

        const dataSource = n => {
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
        const render = (value, index, record) => {
            return <a href="javascript:;">Remove({record.id})</a>;
        };

        class App extends React.Component {
            state = {
                scrollToRow: 20,
            };
            onBodyScroll = start => {
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

        ReactDOM.render(<App />, container, function() {
            setTimeout(() => {
                const trCount = container.querySelectorAll('.next-table .next-table-body table tr.next-table-row')
                    .length;
                assert(trCount > 10);
                assert(trCount < 100);

                const ctrl = container.querySelectorAll(
                    '.next-table .next-table-body table tr.next-table-row .next-table-expanded-ctrl'
                )[0];
                ctrl.click();

                assert(container.querySelectorAll('.next-table .next-table-body table tr.next-table-expanded-row'));

                ReactDOM.unmountComponentAtNode(container);
                document.body.removeChild(container);
                done();
            }, 10);
        });
    });
    it("should set expanded row's  width after stickylock table toggle loading, close #3000", done => {
        const container = document.createElement('div');
        document.body.appendChild(container);

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
            expandedRowRender = record => record.title,
            render = (value, index, record) => {
                return <a>Remove({record.id})</a>;
            };

        class App extends React.Component {
            constructor(props) {
                super(props);
                this.state = {
                    dataSource: dataSource(),
                    loading: false,
                };
            }

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

        ReactDOM.render(<App />, container, function() {
            setTimeout(() => {
                const expandedRows = container.querySelectorAll('.next-table-expanded-row .next-table-cell-wrapper');
                expandedRows.forEach(row => {
                    assert(row.style.width === '499px');
                });

                const btn = container.querySelector('#sticky-expanded-row-width');
                btn.click();
                setTimeout(() => {
                    btn.click();

                    expandedRows.forEach(row => {
                        assert(row.style.width === '499px');
                    });

                    ReactDOM.unmountComponentAtNode(container);
                    document.body.removeChild(container);
                    done();
                }, 100);
            }, 100);
        });
    });
    it('Different sorts have different className of table header , close #3386', done => {
        const container = document.createElement('div');
        document.body.appendChild(container);
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

        ReactDOM.render(<App />, container, function() {
            const input = container.querySelector('.next-table-header .next-table-sort');
            input.click();
            setTimeout(() => {
                assert(container.querySelectorAll(`.next-table-header-node.next-table-header-sort-desc`).length === 1);
                input.click();
                setTimeout(() => {
                    assert(
                        container.querySelectorAll(`.next-table-header-node.next-table-header-sort-asc`).length === 1
                    );
                    ReactDOM.unmountComponentAtNode(container);
                    document.body.removeChild(container);
                    done();
                }, 10);
            }, 10);
        });
    });

    it('should not modify columns props passed from outside, close #4062', () => {
        const container = document.createElement('div');
        document.body.appendChild(container);

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
                    itemName: '测试商品16858180524065799',
                    ownerId: 624144,
                    ownerName: '快消-商家测试帐号86',
                },
                {
                    barcode: 'Bar16858755068847002',
                    itemCode: 'code16858755068847002',
                    itemId: 128581770,
                    itemName: '测试商品16858755068835325',
                    ownerId: 624144,
                    ownerName: '快消-商家测试帐号86',
                },
            ];
            const [selectedRowKeys, setSelectedRowKeys] = useState([]);
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
        ReactDOM.render(<App />, container);

        assert(columns.length === 2);
    });

    it('should support ConfigProvider prefix, close #4073', () => {
        const container = document.createElement('div');
        document.body.appendChild(container);

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

        ReactDOM.render(
            <ConfigProvider prefix="my-">
                <Table dataSource={dataSource()}>
                    <Table.Column title="Id" htmlTitle="Unique Id" dataIndex="id" />
                    <Table.Column title="Title" dataIndex="title.name" />
                    <Table.Column title="Time" dataIndex="time" />
                </Table>
            </ConfigProvider>,
            container
        );

        assert(container.querySelectorAll('.my-table').length >= 1);
    });

    it('should not crash when dataSource is undefined, close #4073', () => {
        const container = document.createElement('div');
        document.body.appendChild(container);

        ReactDOM.render(
            <Table>
                <Table.Column title="Id" lock htmlTitle="Unique Id" dataIndex="id" />
                <Table.Column title="Title" dataIndex="title.name" />
                <Table.Column title="Time" dataIndex="time" />
            </Table>,
            container
        );

        assert(container.querySelector('.next-table-empty'));
    });

    it('should not crash when columns is undefined, close #4070', done => {
        wrapper.setProps({});
        timeout(
            {
                columns: undefined,
            },
            () => {
                assert(wrapper.find('.next-table-empty'));
                done();
            }
        );
    });

    it('should can use Input at column.title, close #4370', () => {
        const container = document.createElement('div');
        document.body.appendChild(container);

        ReactDOM.render(
            <Table>
                <Table.Column title={<Input />} lock htmlTitle="Unique Id" dataIndex="id" />
                <Table.Column title="Title" dataIndex="title.name" />
                <Table.Column title="Time" dataIndex="time" />
            </Table>,
            container
        );
        const input = container.querySelector('input');
        assert(input);
        ReactTestUtils.Simulate.change(input, { target: { value: 'aa' } });
        assert(input.value === 'aa');
    });

    it('should support locking columns when the data source is empty and in the same grouping, close #4282', () => {
        const container = document.createElement('div');
        document.body.appendChild(container);

        ReactDOM.render(
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
            </Table.StickyLock>,
            container
        );

        const title1Cell = container.querySelector('th.next-table-fix-left[rowspan="1"]');
        const title1CellLeft = title1Cell.getBoundingClientRect().left;
        const title1CellWidth = title1Cell.getBoundingClientRect().width;
        const title2CellLeft = container
            .querySelector('th.next-table-fix-left-last[rowspan="1"]')
            .getBoundingClientRect().left;
        assert(title1CellLeft + title1CellWidth === title2CellLeft);
    });

    it('should support when dataSource item id 0, close #3740', () => {
        const container = document.createElement('div');
        document.body.appendChild(container);

        function CheckTable() {
            const dataSource = [{ id: 0, name: 'test' }, { id: 1, name: 'test1' },{ id: 2, name: 'test2' }];
            return (
                <Table 
                    rowSelection={{
                        mode: 'multiple',
                        selectedRowKeys: [0]
                    }} 
                    dataSource={dataSource} 
                >
                    <Table.Column title="Id" dataIndex="id" />
                    <Table.Column title="Name" dataIndex="name" />
                </Table>
            )
        };
        ReactDOM.render(
            <CheckTable />,
            container
        );
        const getRowCell = function(row, index = 1) {
            return row.querySelectorAll('.next-table-cell')[index];
        }
        const rows = container.querySelectorAll('tr.next-table-row');
        assert(container.querySelectorAll('.next-checkbox-wrapper.checked').length === 1);
        assert(container.querySelectorAll('.next-table-body .next-table-row').length === 3);
        assert(getRowCell(rows[0]).textContent === '0' && getRowCell(rows[0], 2).textContent === 'test');
        assert(getRowCell(rows[1]).textContent === '1' && getRowCell(rows[1], 2).textContent === 'test1');
        assert(getRowCell(rows[2]).textContent === '2' && getRowCell(rows[2], 2).textContent === 'test2');
        ReactDOM.unmountComponentAtNode(container);
        document.body.removeChild(container);
    });

});

describe('TableScroll', () => {
    let mountNode;

    beforeEach(() => {
        mountNode = document.createElement('div');
        document.body.appendChild(mountNode);
    });

    afterEach(() => {
        ReactDOM.unmountComponentAtNode(mountNode);
        document.body.removeChild(mountNode);
    });

    it('scroll position error, close #4484', () => {
        const dataSource = j => {
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
        const relockColumn = (value, index, record) => {
            return <a>Remove({record.id})</a>;
        };
        class Demo extends React.Component {
            constructor(props) {
                super(props);
            }
            state = {
                scrollToRow: 20,
            };
            onBodyScroll = start => {
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
                            <Table.Column cell={relockColumn} width={200} lock />
                        </Table>
                        <Button onClick={this.onClick100}> 跳转到100行</Button>
                    </div>
                );
            }
        }
        ReactDOM.render(<Demo />, mountNode);
        const scrollNode = mountNode.querySelector('.next-table-body');
        const rowHeight = scrollNode.querySelector('.next-table-cell').clientHeight;
        scrollNode.scrollTop = 200;
        ReactTestUtils.Simulate.click(mountNode.querySelector('.next-btn'));
        assert(rowHeight * 100 === scrollNode.scrollTop);
    });

    // fix https://github.com/alibaba-fusion/next/issues/4394
    it('should support onBodyScroll under the condition that useVirtual, dataSource is returned asynchronously, close #4394', async () => {
        const container = document.createElement('div');
        document.body.appendChild(container);

        const dataSource = j => {
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
            onBodyScroll = start => {
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
                        <Table.Column title="add" dataIndex="add" cell={this.renderCell} width={200} />
                    </Table>
                );
            }
        }

        ReactDOM.render(<App />, container);

        await delay(200);
        const button = container.querySelector('tr.next-table-row.first button');
        assert(button);
        button.click();
        await delay(200);

        const getBodyTop = () => {
            const { top, height } = container.querySelector('thead').getBoundingClientRect();
            return top + height;
        };
        const skipRow = container.querySelectorAll('tr.next-table-row')[10];
        assert(skipRow.children[0].textContent === '180');
        await delay(200);
        const skipRowTop = skipRow.getBoundingClientRect().top;
        assert(skipRowTop >= getBodyTop());
        const tbody = container.querySelector('.next-table-body');
        tbody.scrollTop += 10;
        ReactTestUtils.Simulate.scroll(tbody);
        await delay(200);
        const scrollRow = container.querySelectorAll('tr.next-table-row')[10];
        assert(scrollRow.children[0].textContent === '180');
        const scrollRowTop = scrollRow.getBoundingClientRect().top;
        assert(scrollRowTop >= getBodyTop() - 10);
    });

    // fix https://github.com/alibaba-fusion/next/issues/4264
    // fix https://github.com/alibaba-fusion/next/issues/4716
    it('should support for merging cells in locked columns, close #4264, #4716', async () => {
        const container = document.createElement('div');
        document.body.appendChild(container);

        const dataSource = j => {
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

        const mergeCell = (rowIndex, colIndex) => {
            if (colIndex === 0 && rowIndex === 0) {
                return {
                    rowSpan: 2,
                    colSpan: 2,
                };
            }
        };

        ReactDOM.render(
            <div className="table-container" style={{width: 800}}> 
                <Table.StickyLock dataSource={dataSource(3)} cellProps={mergeCell}>
                    <Table.Column title="Id" dataIndex="id" width={200} lock />
                    <Table.Column title="Title" dataIndex="title.name" lock width={100} />
                    <Table.Column title="Time" dataIndex="time" width={300} lock />
                    <Table.Column title="test" width={100} />
                    <Table.Column title="test2" width={800} />
                </Table.StickyLock>
            </div>, 
            container
        );

        const titleHeaderNode = container.querySelectorAll('thead .next-table-header-node')[1];
        assert(titleHeaderNode);
        const idHeaderNode = container.querySelectorAll('thead .next-table-header-node')[0];
        assert(idHeaderNode);
        assert(titleHeaderNode.getBoundingClientRect().left === idHeaderNode.getBoundingClientRect().right);
        
        const tableNode = container.querySelector('.next-table-body');
        tableNode.scrollLeft = 900;
        ReactTestUtils.Simulate.scroll(tableNode);
        await delay(200);
        const timeNode = container.querySelectorAll('thead .next-table-header-node')[2];
        assert(timeNode);
        assert(timeNode.getBoundingClientRect().left === titleHeaderNode.getBoundingClientRect().right);
    });
    it('set keepForwardRenderRows to support large rowSpan when useVirtual, close #4395', async () => {
        const datas = j => {
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
        class App extends React.Component {
            state = {
                scrollToRow: 0,
                dataSource: datas(200),
            };

            componentDidUpdate(prevProps) {
                if ('scrollToRow' in this.props && this.props.scrollToRow !== prevProps.scrollToRow) {
                    this.setState({
                        scrollToRow: this.props.scrollToRow,
                    });
                }
            }

            onBodyScroll = start => {
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
                        cellProps={(rowIndex, colIndex) => {
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

        const container = document.createElement('div');
        document.body.appendChild(container);
        const wrapper = mount(<App keepForwardRenderRows={10} />, { attachTo: container });
        await delay(100);

        wrapper.setProps({ scrollToRow: 15 });
        assert(!container.querySelector('[data-next-table-row="0"]'));

        wrapper.setProps({ keepForwardRenderRows: 17 });
        assert(container.querySelector('[data-next-table-row="0"]'));

        wrapper.unmount();
    });
});
