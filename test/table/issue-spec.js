import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import assert from 'power-assert';
import Promise from 'promise-polyfill';
import Table from '../../src/table/index';
import '../../src/table/style.js';

/* eslint-disable */
Enzyme.configure({ adapter: new Adapter() });

const generateDataSource = j => {
    const result = [];
    for (let i = 0; i < j; i++) {
        result.push({
            title: {
                name: `Quotation for 1PCS Nano ${3 +
                    i}.0 controller compatible`,
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
                    assert(
                        wrapper.find('.next-table-empty').text() === '没有数据'
                    );
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
                        rowSelection={{ onChange: console.log }}
                        expandedRowRender={(record) => record.title}
                    >
                    </Table>
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
        const columns = [{
            title: "Title6",
            dataIndex: "id",
            width: 400,
        }, {
            title: "Title7",
            dataIndex: "id",
            width: 200,
            lock: true
        }, {
            title: "Title7",
            dataIndex: "id",
            width: 200
        }, {
            title: "Title7",
            dataIndex: "id",
            width: 200
        }];

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

        ReactDOM.render(<App />, container, function() {

            assert(document.querySelectorAll('#normal-table .next-table-lock-left .next-table-body tbody tr').length === 2);
            assert(document.querySelectorAll('#sticky-table .next-table-fix-left')[0].style.position === 'sticky');
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

        ReactDOM.render(<App />, container, function() {
            const input = container.querySelector(
                '.next-table-header .next-checkbox input'
            );
            input.click();
            setTimeout(() => {
                assert(
                    document.querySelectorAll(
                        '.next-table-body .next-checkbox-wrapper.checked'
                    ).length === 2
                );
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
                assert(
                    wrapper.find('.next-table-row').find('.hidden').length === 1
                );
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
            <Table
                dataSource={[{ id: 1 }, { id: 2 }]}
                rowSelection={rowSelection}
            >
                <Table.Column dataIndex="id" style={{ textAlign: 'left' }} />
            </Table>,
            div
        );

        div.querySelectorAll('.next-checkbox-wrapper')[1].click();
        assert(
            div.querySelectorAll('.next-checkbox-wrapper.checked').length === 1
        );
        div.querySelectorAll('.next-checkbox-wrapper')[0].click();
        assert(
            div.querySelectorAll('.next-checkbox-wrapper.checked').length === 3
        );

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
                    <Table.Column
                        cell={this.cellRender}
                        dataIndex="id"
                        lock
                        width={300}
                        key="id"
                    />,
                    <Table.Column
                        cell={this.cellRender}
                        dataIndex="id"
                        width={400}
                        key="id1"
                    />,
                    <Table.Column
                        cell={this.cellRender}
                        dataIndex="id"
                        width={500}
                        key="id2"
                    />,
                ],
            };
            cellRender = value => {
                return value;
            };
            render() {
                return (
                    <div style={{ width: '400px' }}>
                        <Table dataSource={[{ id: 1 }]}>
                            {this.state.cols}
                        </Table>
                    </div>
                );
            }
            componentDidMount() {
                setTimeout(() => {
                    this.setState({
                        cols: (
                            <Table.Column
                                cell={this.cellRender}
                                dataIndex="id"
                                lock
                                width={300}
                            />
                        ),
                    });
                }, 100);
            }
        }

        const div = document.createElement('div');
        document.body.appendChild(div);
        ReactDOM.render(<App />, div);
        assert(
            div.querySelectorAll('.next-table-lock-left')[0].children.length ===
                1
        );
        assert(
            div.querySelectorAll('.next-table-lock-right')[0].children
                .length === 0
        );
        assert(div.querySelectorAll('div.next-table-lock.next-table-scrolling-to-right').length === 1);

        setTimeout(() => {
            assert(
                div.querySelectorAll('.next-table-lock-left')[0].children
                    .length === 0
            );
            assert(
                div.querySelectorAll('.next-table-lock-right')[0].children
                    .length === 0
            );
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
        div.querySelectorAll('.next-table table')[0].style.borderCollapse =
            'separate';
        assert(
            parseInt(
                window.getComputedStyle(
                    div.querySelectorAll('.next-table')[0]
                ).borderTopWidth,
                10
            ) === 1
        );
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
        assert(
            div.querySelectorAll('.next-table table td')[0].style.textAlign === ''
        );
        assert(
            div.querySelectorAll('.next-table table th')[0].style.textAlign === 'left'
        );
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
                    <Table
                        useVirtual
                        dataSource={generateDataSource(100)}
                        scrollToRow={20}
                    >
                        <Table.Column title="Id1" dataIndex="id" width={100} />
                        <Table.Column
                            title="Index"
                            dataIndex="index"
                            width={200}
                        />
                        <Table.Column
                            title="Time"
                            dataIndex="time"
                            width={200}
                        />
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

    it('sort should be singleton', () => {
        class App extends React.Component {
            render() {
                return (
                    <Table dataSource={generateDataSource(10)} scrollToRow={20}>
                        <Table.Column
                            title="Id1"
                            dataIndex="id"
                            width={100}
                            sortable
                        />
                        <Table.Column
                            title="Index"
                            dataIndex="index"
                            width={200}
                        />
                        <Table.Column
                            title="Time"
                            dataIndex="time"
                            width={200}
                            sortable
                        />
                    </Table>
                );
            }
        }

        const div = document.createElement('div');
        document.body.appendChild(div);
        ReactDOM.render(<App />, div);

        const sortBtn = div.querySelectorAll(
            '.next-table-header .next-table-sort'
        );
        sortBtn[0].click();
        sortBtn[1].click();

        assert(document.getElementsByClassName('current').length === 1);
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
                        <Table.Column
                            title="Index"
                            dataIndex="index"
                            width={200}
                        />
                    </Table>
                );
            }
        }

        const div = document.createElement('div');
        document.body.appendChild(div);
        ReactDOM.render(<App />, div);

        const sortBtn = div.querySelectorAll(
            '.next-table-header .next-table-sort'
        );
        console.log(sortBtn)
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
                    <Table
                        style={{ width: '600px' }}
                        dataSource={[]}
                        scrollToRow={20}
                    >
                        <Table.Column
                            title="Id1"
                            lock
                            dataIndex="id"
                            width={100}
                        />
                        <Table.Column
                            title="Index"
                            dataIndex="index"
                            width={200}
                        />
                        <Table.Column
                            title="Time"
                            dataIndex="time"
                            lock="right"
                            width={200}
                        />
                    </Table>
                );
            }
        }

        const div = document.createElement('div');
        document.body.appendChild(div);
        ReactDOM.render(<App />, div);

        assert(document.querySelectorAll('div.next-table-empty').length === 1);
        ReactDOM.unmountComponentAtNode(div);
        document.body.removeChild(div);
    });

    it('fix #466, stickHeader + lock with enough space', () => {
        class App extends React.Component {
            render() {
                return (
                    <Table stickyHeader dataSource={[]}>
                        <Table.Column
                            title="Time"
                            dataIndex="name"
                            width={200}
                            lock
                        />
                        <Table.Column
                            title="Time"
                            dataIndex="time"
                            width={200}
                            lock="right"
                        />
                    </Table>
                );
            }
        }

        const div = document.createElement('div');
        document.body.appendChild(div);
        ReactDOM.render(<App />, div);

        assert(document.querySelectorAll('div.next-table-empty').length === 1);
        ReactDOM.unmountComponentAtNode(div);
        document.body.removeChild(div);
    });

    it('should support crossline hover', done => {
        const container = document.createElement('div');
        document.body.appendChild(container);
        class App extends React.Component {
            render() {
                return (
                    <Table
                        dataSource={dataSource}
                        crossline
                    >
                        <Table.Column dataIndex="id" />
                        <Table.Column dataIndex="name" />
                        <Table.Column dataIndex="name" cell={(val, i) => {
                            return <a id={`name-${i}`} href="">val</a>
                        }}/>
                    </Table>
                );
            }
        }

        ReactDOM.render(<App />, container, function() {
            const cell = container.querySelector(
                'td[data-next-table-col="1"][data-next-table-row="1"]'
            );
            const mouseover = new MouseEvent('mouseover', {
                'view': window,
                'bubbles': true,
                'cancelable': true
            });

            cell.dispatchEvent(mouseover);

            assert(
                document.querySelectorAll(
                    'td.next-table-cell.hovered'
                ).length === 2
            );

            assert(
                document.querySelectorAll(
                    'tr.next-table-row.hovered'
                ).length === 1
            );

            const mouseout = new MouseEvent('mouseout', {
                'view': window,
                'bubbles': true,
                'cancelable': true
            });

            cell.dispatchEvent(mouseout);

            assert(
                document.querySelectorAll(
                    'td.next-table-cell.hovered'
                ).length === 0
            );

            // target is in inner
            const renderA = document.getElementById('name-0');
            renderA.dispatchEvent(mouseover);

            assert(
                document.querySelectorAll(
                    'td.next-table-cell.hovered'
                ).length === 2
            );

            assert(
                document.querySelectorAll(
                    'tr.next-table-row.hovered'
                ).length === 1
            );

            renderA.dispatchEvent(mouseout);

            assert(
                document.querySelectorAll(
                    'td.next-table-cell.hovered'
                ).length === 0
            );

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
                                        title:
                                            "2014 New Fashion Novelty Tank Slim Women's Fashion Dresses With Lace",
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
                        <Table.Column
                            title="Price"
                            dataIndex="price"
                            width={120}
                        />
                        <Table.Column
                            title="Status"
                            dataIndex="status"
                            width={100}
                        />
                        <Table.Column title="Operation" width={100} />
                    </Table>
                );
            }
        }

        const div = document.createElement('div');
        document.body.appendChild(div);
        ReactDOM.render(<App />, div);

        assert(
            document.querySelectorAll('.next-table-group-header + tr')
                .length === 1
        );
        ReactDOM.unmountComponentAtNode(div);
        document.body.removeChild(div);
    });

    it('should support multiple header lock', done => {
        const container = document.createElement('div');
        document.body.appendChild(container);

        const dataSource = () => {
            const result = [];
            for (let i = 0; i < 5; i++) {
                result.push({
                    title: {name: `Quotation for 1PCS Nano ${3 + i}.0 controller compatible`},
                    id: 100306660940 + i,
                    time: 2000 + i
                });
            }
            return result;
        };
        const render = (value, index, record) => {
            return <a href="javascript:;">Remove({record.id})</a>;
        };

        const columns = [{
            title: "Group2-7",
            children: [{
                title: "Title2",
                dataIndex: "id",
                lock: 'left',
                width: 140,
            }, {
                title: "Title3",
                lock: 'left',
                dataIndex: "title.name",
                width: 200
            }]
        },
        {
            title: "Title6",
            dataIndex: "title.name",
            width: 400,
        },
        {
            title: "Title1",
            dataIndex: "id",
            width: 140,
        }, {
            title: '这行有错',
            id: 'target-line',
            cell: render,
            lock: 'left',
            width: 200
        },{
            title: "Time",
            dataIndex: "time",
            width: 500,
        }];

        ReactDOM.render(<Table.StickyLock dataSource={dataSource()} columns={columns} />, container, function() {
            setTimeout(() => {
                console.log(document.getElementById('target-line'))
                assert(
                    document.getElementById('target-line').style.left === '340px'
                );
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
                    title: {name: `Quotation for 1PCS Nano ${3 + i}.0 controller compatible`},
                    id: 100306660940 + i,
                    time: 2000 + i
                });
            }
            return result;
        };
        const render = (value, index, record) => {
            return <a href="javascript:;">Remove({record.id})</a>;
        };

        const columns = [{
            title: "Title1",
            dataIndex: "id",
            width: 140,
        }, {
            title: "Group2-7",
            children: [{
                title: "Title2",
                dataIndex: "id",
                lock: 'right',
                width: 140,
            }, {
                title: "Title3",
                dataIndex: "title.name",
                lock: 'right',
                width: 200
            }, {
                title: 'Group4-7',
                children: [{
                    title: "Title4",
                    dataIndex: "title.name",
                    width: 400,
                }, {
                    title: "Title5",
                    dataIndex: "title.name",
                    lock: true,
                    width: 200
                }, {
                    title: 'tet',
                    children: [{
                        title: "Title6",
                        dataIndex: "title.name",
                        width: 400,
                    }, {
                        title: "Title7",
                        dataIndex: "title.name",
                        lock: true,
                        width: 200
                    }]
                }]
            }]
        }, {
            title: '',
            children: [{
                title: "Time",
                dataIndex: "time",
                width: 500,
            }, {
                cell: render,
                width: 200
            }]
        }];


        ReactDOM.render(<Table.StickyLock dataSource={dataSource()} columns={columns} />, container, function() {
            setTimeout(() => {
                assert(
                    document.querySelectorAll('.next-table-cell.next-table-fix-right.next-table-fix-right-first')[3].style.right === '200px'
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

        const dataSource = (n) => {
            const result = [];
            for (let i = 0; i < n; i++) {
                result.push({
                    title: {name: `Quotation for 1PCS Nano ${3 + i}.0 controller compatible`},
                    id: 100306660940 + i,
                    time: 2000 + i
                });
            }
            return result;
        };
        const render = (value, index, record) => {
            return <a href="javascript:;">Remove({record.id})</a>;
        };

        class App extends React.Component {
            state = {
                scrollToRow: 20
            }
            onBodyScroll = (start) => {
                this.setState({
                    scrollToRow: start
                });
            }
            render() {
                return (
                <Table
                    dataSource={dataSource(200)}
                    maxBodyHeight={400}
                    useVirtual
                    scrollToRow={this.state.scrollToRow}
                    onBodyScroll={this.onBodyScroll}
                    expandedRowRender={() => (<div>adddd</div>)}
                >
                    <Table.Column title="Id1" dataIndex="id" width={100}/>
                    <Table.Column title="Index" dataIndex="index" width={200}/>
                    <Table.Column title="Time" dataIndex="time" width={200}/>
                    <Table.Column title="Time" dataIndex="time" width={200}/>
                    <Table.Column title="Time" dataIndex="time" width={200} lock="right"/>
                    <Table.Column cell={render} width={200} />
                </Table>
                );
            }
        }


        ReactDOM.render(<App />, container, function() {
            setTimeout(() => {
                const trCount = container.querySelectorAll('.next-table .next-table-body table tr.next-table-row').length;
                assert(trCount > 10);
                assert(trCount < 100);

                const ctrl = container.querySelectorAll('.next-table .next-table-body table tr.next-table-row .next-table-expanded-ctrl')[0];
                ctrl.click();

                assert(container.querySelectorAll('.next-table .next-table-body table tr.next-table-expanded-row'));

                ReactDOM.unmountComponentAtNode(container);
                document.body.removeChild(container);
                done();
            }, 10);
        });
    });
    it('should set expanded row\'s  width after stickylock table toggle loading, close #3000', done => {
        const container = document.createElement('div');
        document.body.appendChild(container);

        const dataSource = () => {
            const result = [];
            for (let i = 0; i < 5; i++) {
                result.push({
                    title: `Quotation for 1PCS Nano ${3 + i}.0 controller compatible`,
                    id: 100306660940 + i,
                    time: 2000 + i,
                    expandable:  i !== 2
                });
            }
            return result;
        },
        expandedRowRender = (record) => record.title,
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
                    loading: !this.state.loading
                })
            }

            render() {
                return (<div style={{width: 500}}>
                    <button id="sticky-expanded-row-width" onClick={this.toggleLoading}>Toggle Loading</button>
                    <br /><br />
                    <Table.StickyLock
                        loading={this.state.loading}
                        expandedIndexSimulate
                        openRowKeys={[100306660940, 100306660941]}
                        dataSource={this.state.dataSource}
                        // expandedRowIndent 仅在IE下才会生效，非IE模式下为[0,0]且不可修改
                        expandedRowIndent={[2, 0]}
                        expandedRowRender={expandedRowRender}
                    >
                        <Table.Column title="Id" dataIndex="id" lock width={300}/>
                        <Table.Column title="Title" dataIndex="title" width={300}/>
                        <Table.Column title="Time" dataIndex="time" width={300}/>
                        <Table.Column cell={render} width={300}/>
                    </Table.StickyLock>
                </div>);
            }
        }


        ReactDOM.render(<App />, container, function() {
            setTimeout(() => {
                const expandedRows = container.querySelectorAll('.next-table-expanded-row .next-table-cell-wrapper');
                expandedRows.forEach(row => {
                    assert(row.style.width === '498px');
                })

                const btn = container.querySelector('#sticky-expanded-row-width');
                btn.click();
                setTimeout(() => {
                    btn.click();

                    expandedRows.forEach(row => {
                        assert(row.style.width === '498px');
                    });

                    ReactDOM.unmountComponentAtNode(container);
                    document.body.removeChild(container);
                    done();
                }, 100)
            }, 100);
        });
    });
});
