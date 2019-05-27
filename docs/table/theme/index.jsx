import React from 'react';
import ReactDOM from 'react-dom';
import '../../../src/demo-helper/style.js';
import '../../../src/table/style.js';
import { Demo, DemoGroup, initDemo } from '../../../src/demo-helper';
import ConfigProvider from '../../../src/config-provider';
import zhCN from '../../../src/locale/zh-cn.js';
import enUS from '../../../src/locale/en-us.js';
import Table from '../../../src/table';

const i18nMap = {
    'en-us': {
        productDetail: 'Product Details',
        price: 'Price',
        status: 'Status',
        view: 'View',
        priced: 'Already Priced',
        noPriced: 'No Priced',
        source: ['2014 New Fashion Novelty Tank Slim Women\'s Fashion Dresses With Lace', 'Free shipping women Casual dresses lady dress plus size 2014']
    },
    'zh-cn': {
        productDetail: '产品详情',
        price: '价格',
        status: '状态',
        view: '查看',
        priced: '已报价',
        noPriced: '未报价',
        source: ['中文范例，为了那失去的青春，诗和远方', '中文范例，为了那忘却的纪念，你和你的爱情']
    }
};



const convert = (object) => {
    const obj = {};
    Object.keys(object).forEach(key => {
        obj[key] = object[key].value;
    });
    return obj;
};

const normalize = (demoFunction) => {
    const ret = demoFunction.reduce((current, value) => {
        current[value.name] = {};
        current[value.name].label = value.label;
        current[value.name].value = value.value;
        current[value.name].enum = value.enum.map(item => ({
            label: item.label ? item.label : (item === 'true' ? '显示' : '隐藏'),
            value: item.label ? item.value : item
        }));
        return current;
    }, {});
    return ret;
};

class FunctionDemo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            demoFunction: normalize([
                {
                    label: '筛选',
                    name: 'filters',
                    value: 'false',
                    enum: ['true', 'false']
                }
            ])
        };

        this.onFunctionChange = this.onFunctionChange.bind(this);
    }

    onFunctionChange(demoFunction) {
        this.setState({
            demoFunction
        });
    }

    render() {
        const { demoFunction } = this.state;
        const functions = convert(demoFunction);
        const { lang } = this.props;
        const i18n = i18nMap[lang];
        const rowSelection = {
            mode: functions.rowSelection,
            selectedRowKeys: [4]
        };
        let filters;
        if (functions.filters === 'true') {
            filters = [{ label: 'Option1', value: 'Option1' }, { label: 'Option2', value: 'Option2' }];
        }
        function productRender(product) {
            return (
                <div className="media">
                    <img src={product[0].avatar} style={{ width: 48, height: 48, float: 'left', marginRight: 10 }} />
                    <div className="media-content">{product[0].title}</div>
                </div>
            );
        }

        function statusRender(status) {
            if (status) {
                return i18n.priced;
            } else {
                return i18n.noPriced;
            }
        }

        function priceRender(price) {
            return <b>{price}</b>;
        }

        function operRender() {
            return <a href="javascript:;">{i18n.view}</a>;
        }
        function groupHeaderRender(record) {
            return <div>{record.product[0].title}</div>;
        }
        function groupFooterRender(record) {
            return <div>{record.product[0].title}</div>;
        }
        const listDataSource = [{
            price: '$2.45(USD)',
            status: 0,
            id: 1,
            product: [{
                title: '2014 New Fashion Novelty Tank Slim Women\'s Fashion Dresses With Lace',
                avatar: 'https://sc01.alicdn.com/kf/HTB1ravHKXXXXXccXVXXq6xXFXXXJ/Chinese-Style-Fashion-Custom-Digital-Print-Silk.jpg_220x220.jpg'
            }],
            children: [{
                price: '$2.5(USD)',
                status: 1,
                id: 2,
                product: [{
                    title: 'Free shipping women Casual dresses lady dress plus size 2014',
                    avatar: 'https://sc02.alicdn.com/kf/HTB1efnNLVXXXXbtXpXXq6xXFXXXN/Light-100-acrylic-fashionabe-snood-shawl-weight.jpg_220x220.jpg'
                }]
            }, {
                price: '$2.5(USD)',
                status: 1,
                id: 3,
                product: [{
                    title: 'Free shipping women Casual dresses lady dress plus size 2014',
                    avatar: 'https://sc02.alicdn.com/kf/HTB1efnNLVXXXXbtXpXXq6xXFXXXN/Light-100-acrylic-fashionabe-snood-shawl-weight.jpg_220x220.jpg'
                }]
            }]
        }, {
            price: '$2.5(USD)',
            status: 1,
            id: 4,
            product: [{
                title: 'Free shipping women Casual dresses lady dress plus size 2014',
                avatar: 'https://sc02.alicdn.com/kf/HTB1efnNLVXXXXbtXpXXq6xXFXXXN/Light-100-acrylic-fashionabe-snood-shawl-weight.jpg_220x220.jpg'
            }],
            children: [{
                price: '$2.5(USD)',
                status: 1,
                id: 5,
                product: [{
                    title: 'Free shipping women Casual dresses lady dress plus size 2014',
                    avatar: 'https://sc02.alicdn.com/kf/HTB1efnNLVXXXXbtXpXXq6xXFXXXN/Light-100-acrylic-fashionabe-snood-shawl-weight.jpg_220x220.jpg'
                }]
            }, {
                price: '$2.5(USD)',
                status: 1,
                id: 6,
                product: [{
                    title: 'Free shipping women Casual dresses lady dress plus size 2014',
                    avatar: 'https://sc02.alicdn.com/kf/HTB1efnNLVXXXXbtXpXXq6xXFXXXN/Light-100-acrylic-fashionabe-snood-shawl-weight.jpg_220x220.jpg'
                }]
            }]
        }];
        const getSelectedRowProps = (record, index) => ({
            className: index === 1 ? 'selected' : ''
        });
        const cols = [
            <Table.Column cell={productRender} title={i18n.productDetail} key="product" dataIndex="product" filters={filters} />,
            <Table.Column cell={priceRender} title={i18n.price} dataIndex="price" key="price" />,
            <Table.Column cell={statusRender} title={i18n.status} dataIndex="status" key="status" />,
            <Table.Column cell={operRender} title="" dataIndex="oper" key="oper" />
        ];

        const groupCols = cols.slice();
        groupCols.unshift(<Table.GroupHeader cell={groupHeaderRender} />);
        groupCols.push(<Table.GroupFooter cell={groupFooterRender} />);

        return (
            <Demo title="List" demoFunction={demoFunction} onFunctionChange={this.onFunctionChange}>
                <Demo title="List">
                    <DemoGroup label="Normal">
                        <Table dataSource={listDataSource} hasBorder={false}>{cols}</Table>
                    </DemoGroup>
                    <DemoGroup label="Selected">
                        <Table rowSelection={rowSelection} dataSource={listDataSource} hasBorder={false} rowProps={getSelectedRowProps}>{cols}</Table>
                    </DemoGroup>
                    <DemoGroup label="No Data">
                        <Table dataSource={[]} hasBorder={false}>{cols}</Table>
                    </DemoGroup>
                </Demo>
                <Demo title="Group">
                    <DemoGroup label="Normal">
                        <Table dataSource={listDataSource}>{groupCols}</Table>
                    </DemoGroup>
                    <DemoGroup label="Selected">
                        <Table rowSelection={rowSelection} dataSource={listDataSource} rowProps={getSelectedRowProps}>{groupCols}</Table>
                    </DemoGroup>
                    <DemoGroup label="No Data">
                        <Table dataSource={[]}>{groupCols}</Table>
                    </DemoGroup>
                </Demo>
            </Demo>
        );
    }
}

class TableFunctionDemo extends React.Component {
    constructor(props) {
        super(props);
        const demoFunction = [
            {
                label: '斑马线',
                name: 'zebra',
                value: 'false',
                enum: ['true', 'false']
            },
            {
                label: '选择',
                name: 'rowSelection',
                value: 'false',
                enum: [{ value: 'single', label: '单选' }, { value: 'multiple', label: '多选' }, 'false']
            },
            {
                label: '单列对齐方式',
                name: 'align',
                value: 'left',
                enum: [{ value: 'left', label: '左对齐' }, { value: 'center', label: '居中对齐' }, { value: 'right', label: '右对齐' }]
            },
            {
                label: '表头',
                name: 'hasHeader',
                value: 'true',
                enum: ['true', 'false']
            }
        ];


        this.state = {
            demoFunction: normalize(demoFunction)
        };

        this.onFunctionChange = this.onFunctionChange.bind(this);
    }

    onFunctionChange(demoFunction) {
        this.setState({
            demoFunction
        });
    }

    render() {
        const { demoFunction } = this.state;
        const functions = convert(demoFunction);
        const { lang } = this.props;
        const i18n = i18nMap[lang];
        const rowSelection = functions.rowSelection === 'false' ? null : {
            mode: functions.rowSelection,
            selectedRowKeys: [1]
        };
        let filters;
        if (functions.filters) {
            filters = [{ label: 'Option1', value: 'Option1' }, { label: 'Option2', value: 'Option2' }];
        }
        const hasHeader = functions.hasHeader === 'true';
        const isZebra = functions.zebra === 'true';
        const align = functions.align;
        const listDataSource = [{
            price: '$2.45(USD)',
            status: 0,
            id: 1,
            product: [{
                title: '2014 New Fashion Novelty Tank Slim Women\'s Fashion Dresses With Lace',
                avatar: 'https://sc01.alicdn.com/kf/HTB1ravHKXXXXXccXVXXq6xXFXXXJ/Chinese-Style-Fashion-Custom-Digital-Print-Silk.jpg_220x220.jpg'
            }],
            children: [{
                price: '$2.5(USD)',
                status: 1,
                id: 2,
                product: [{
                    title: 'Free shipping women Casual dresses lady dress plus size 2014',
                    avatar: 'https://sc02.alicdn.com/kf/HTB1efnNLVXXXXbtXpXXq6xXFXXXN/Light-100-acrylic-fashionabe-snood-shawl-weight.jpg_220x220.jpg'
                }]
            }, {
                price: '$2.5(USD)',
                status: 1,
                id: 3,
                product: [{
                    title: 'Free shipping women Casual dresses lady dress plus size 2014',
                    avatar: 'https://sc02.alicdn.com/kf/HTB1efnNLVXXXXbtXpXXq6xXFXXXN/Light-100-acrylic-fashionabe-snood-shawl-weight.jpg_220x220.jpg'
                }]
            }]
        }, {
            price: '$2.5(USD)',
            status: 1,
            id: 4,
            product: [{
                title: 'Free shipping women Casual dresses lady dress plus size 2014',
                avatar: 'https://sc02.alicdn.com/kf/HTB1efnNLVXXXXbtXpXXq6xXFXXXN/Light-100-acrylic-fashionabe-snood-shawl-weight.jpg_220x220.jpg'
            }]
        }];

        function productRender(product) {
            return (
                <div className="media">
                    <img src={product[0].avatar} style={{ width: 48, height: 48, float: 'left', marginRight: 10 }} />
                    <div className="media-content">{product[0].title}</div>
                </div>
            );
        }

        function statusRender(status) {
            if (status) {
                return i18n.priced;
            } else {
                return i18n.noPriced;
            }
        }

        function priceRender(price) {
            return <b>{price}</b>;
        }

        function operRender() {
            return <a href="javascript:;">{i18n.view}</a>;
        }

        function groupHeaderRender(record) {
            return <div>{record.product[0].title}</div>;
        }

        function groupFooterRender(record) {
            return <div>{record.product[0].title}</div>;
        }

        const cols = [
            <Table.Column cell={productRender} align={align} title={i18n.productDetail} key="product" dataIndex="product" filters={filters} />,
            <Table.Column cell={priceRender} title={i18n.price} dataIndex="price" key="price" />,
            <Table.Column cell={statusRender} title={i18n.status} dataIndex="status" key="status" />,
            <Table.Column cell={operRender} title="" dataIndex="oper" key="oper" />
        ];
        const groupCols = cols.slice();
        groupCols.unshift(<Table.GroupHeader cell={groupHeaderRender} />);
        groupCols.push(<Table.GroupFooter cell={groupFooterRender} />);

        return (
            <Demo title="Table" demoFunction={demoFunction} onFunctionChange={this.onFunctionChange}>
                <Demo title="Table">
                    <DemoGroup label="Normal">
                        <Table rowSelection={rowSelection} dataSource={listDataSource} hasHeader={hasHeader} isZebra={isZebra}>{cols}</Table>
                    </DemoGroup>
                    <DemoGroup label="Selected">
                        <Table rowSelection={rowSelection} dataSource={listDataSource} hasHeader={hasHeader} isZebra={isZebra}>{cols}</Table>
                    </DemoGroup>
                    <DemoGroup label="Selected & Expanded">
                        <Table rowSelection={rowSelection} expandedRowRender={(record) => record.price} dataSource={listDataSource} hasHeader={hasHeader} isZebra={isZebra}>{cols}</Table>
                    </DemoGroup>
                    <DemoGroup label="No Data">
                        <Table rowSelection={rowSelection} dataSource={[]} hasHeader={hasHeader} isZebra={isZebra}>{cols}</Table>
                    </DemoGroup>

                </Demo>

            </Demo>
        );
    }
}

window.renderDemo = function (lang) {
    ReactDOM.render((
        <ConfigProvider locale={lang === 'en-us' ? enUS : zhCN}>
            <div className="demo-container">
                <FunctionDemo lang={lang} />
                <TableFunctionDemo lang={lang} />
            </div>
        </ConfigProvider>
    ), document.getElementById('container'));
};
window.renderDemo('en-us');
initDemo('table');
