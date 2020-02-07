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
                    div.querySelectorAll('.next-table tr:first-child td')[0]
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
});
