/* eslint-disable react/prop-types */
import React, { type ReactElement } from 'react';
import ReactDOM from 'react-dom';
import '../../../demo-helper/style';
import '../../style';
import { Demo, type DemoFunctionDefineForObject, DemoGroup, initDemo } from '../../../demo-helper';
import ConfigProvider from '../../../config-provider';
import zhCN from '../../../locale/zh-cn';
import enUS from '../../../locale/en-us';
import Table, { ColumnProps, type TableProps } from '../../index';

const i18nMap = {
    'en-us': {
        productDetail: 'Product Details',
        price: 'Price',
        status: 'Status',
        view: 'View',
        priced: 'Already Priced',
        noPriced: 'No Priced',
        source: [
            "2014 New Fashion Novelty Tank Slim Women's Fashion Dresses With Lace",
            'Free shipping women Casual dresses lady dress plus size 2014',
        ],
    },
    'zh-cn': {
        productDetail: '产品详情',
        price: '价格',
        status: '状态',
        view: '查看',
        priced: '已报价',
        noPriced: '未报价',
        source: [
            '中文范例，为了那失去的青春，诗和远方',
            '中文范例，为了那忘却的纪念，你和你的爱情',
        ],
    },
};

const convert = (object: ReturnType<typeof normalize>) => {
    const obj: {
        [key in keyof typeof object]?: string;
    } = {};
    Object.keys(object).forEach((key: keyof typeof object) => {
        obj[key] = object[key].value as string;
    });
    return obj;
};

const functions: {
    label: string;
    name: string;
    value: string;
    enum: (
        | {
              label: string;
              value: string;
          }
        | string
    )[];
}[] = [
    {
        label: '筛选',
        name: 'filters',
        value: 'false',
        enum: ['true', 'false'],
    },
    {
        label: '排序',
        name: 'sortable',
        value: 'false',
        enum: ['true', 'false'],
    },
    {
        label: '表格有无竖线',
        name: 'hasBorder',
        value: 'false',
        enum: ['true', 'false'],
    },
];

const normalize = (demoFunction: typeof functions) => {
    const ret = demoFunction.reduce(
        (current, value) => {
            current[value.name] = {} as DemoFunctionDefineForObject;
            current[value.name].label = value.label;
            current[value.name].value = value.value;
            current[value.name].enum = value.enum.map(item => ({
                label: typeof item === 'object' ? item.label : item === 'true' ? '显示' : '隐藏',
                value: typeof item === 'object' ? item.value : item,
            }));
            return current;
        },
        {} as Record<string, DemoFunctionDefineForObject>
    );
    return ret;
};

class FunctionDemo extends React.Component<{ lang: 'zh-cn' | 'en-us' }> {
    state = {
        demoFunction: normalize(functions),
    };

    onFunctionChange = (demoFunction: ReturnType<typeof normalize>) => {
        this.setState({
            demoFunction,
        });
    };

    render() {
        const { demoFunction } = this.state;
        const functions = convert(demoFunction);
        const { lang } = this.props;
        const i18n = i18nMap[lang];
        const { size } = functions;
        const rowSelection: TableProps['rowSelection'] = {
            mode: functions.rowSelection as 'single' | 'multiple',
            selectedRowKeys: [4],
        };
        let filters,
            sortable = false,
            hasBorder = false;
        if (functions.filters === 'true') {
            filters = [
                { label: 'Option1', value: 'Option1' },
                { label: 'Option2', value: 'Option2' },
            ];
        }

        if (functions.sortable === 'true') {
            sortable = true;
        }

        if (functions.hasBorder === 'true') {
            hasBorder = true;
        }

        function productRender(product: { avatar: string; title: string }[]) {
            return (
                <div className="media">
                    <img
                        src={product[0].avatar}
                        style={{ width: 48, height: 48, float: 'left', marginRight: 10 }}
                    />
                    <div className="media-content">{product[0].title}</div>
                </div>
            );
        }

        function statusRender(status: boolean) {
            if (status) {
                return i18n.priced;
            } else {
                return i18n.noPriced;
            }
        }

        function priceRender(price: string) {
            return <b>{price}</b>;
        }

        function operRender() {
            return <a href="javascript:;">{i18n.view}</a>;
        }
        function groupHeaderRender(record: { product: { title: string }[] }) {
            return <div>{record.product[0].title}</div>;
        }
        function groupFooterRender(record: { product: { title: string }[] }) {
            return <div>{record.product[0].title}</div>;
        }
        const listDataSource = [
            {
                price: '$2.45(USD)',
                status: 0,
                id: 1,
                product: [
                    {
                        title: "2014 New Fashion Novelty Tank Slim Women's Fashion Dresses With Lace",
                        avatar: 'https://sc01.alicdn.com/kf/HTB1ravHKXXXXXccXVXXq6xXFXXXJ/Chinese-Style-Fashion-Custom-Digital-Print-Silk.jpg_220x220.jpg',
                    },
                ],
                children: [
                    {
                        price: '$2.5(USD)',
                        status: 1,
                        id: 2,
                        product: [
                            {
                                title: 'Free shipping women Casual dresses lady dress plus size 2014',
                                avatar: 'https://sc02.alicdn.com/kf/HTB1efnNLVXXXXbtXpXXq6xXFXXXN/Light-100-acrylic-fashionabe-snood-shawl-weight.jpg_220x220.jpg',
                            },
                        ],
                    },
                    {
                        price: '$2.5(USD)',
                        status: 1,
                        id: 3,
                        product: [
                            {
                                title: 'Free shipping women Casual dresses lady dress plus size 2014',
                                avatar: 'https://sc02.alicdn.com/kf/HTB1efnNLVXXXXbtXpXXq6xXFXXXN/Light-100-acrylic-fashionabe-snood-shawl-weight.jpg_220x220.jpg',
                            },
                        ],
                    },
                ],
            },
            {
                price: '$2.5(USD)',
                status: 1,
                id: 4,
                product: [
                    {
                        title: 'Free shipping women Casual dresses lady dress plus size 2014',
                        avatar: 'https://sc02.alicdn.com/kf/HTB1efnNLVXXXXbtXpXXq6xXFXXXN/Light-100-acrylic-fashionabe-snood-shawl-weight.jpg_220x220.jpg',
                    },
                ],
                children: [
                    {
                        price: '$2.5(USD)',
                        status: 1,
                        id: 5,
                        product: [
                            {
                                title: 'Free shipping women Casual dresses lady dress plus size 2014',
                                avatar: 'https://sc02.alicdn.com/kf/HTB1efnNLVXXXXbtXpXXq6xXFXXXN/Light-100-acrylic-fashionabe-snood-shawl-weight.jpg_220x220.jpg',
                            },
                        ],
                    },
                    {
                        price: '$2.5(USD)',
                        status: 1,
                        id: 6,
                        product: [
                            {
                                title: 'Free shipping women Casual dresses lady dress plus size 2014',
                                avatar: 'https://sc02.alicdn.com/kf/HTB1efnNLVXXXXbtXpXXq6xXFXXXN/Light-100-acrylic-fashionabe-snood-shawl-weight.jpg_220x220.jpg',
                            },
                        ],
                    },
                ],
            },
        ];
        const getSelectedRowProps: TableProps['rowProps'] = (record, index) => ({
            className: index === 1 ? 'selected' : '',
        });
        const cols = [
            <Table.Column
                cell={priceRender}
                title={i18n.price}
                dataIndex="price"
                key="price"
                sortable={sortable}
            />,
            <Table.Column
                cell={statusRender}
                title={i18n.status}
                dataIndex="status"
                key="status"
            />,
            <Table.Column cell={operRender} title="" dataIndex="oper" key="oper" />,
        ];

        const smallCols = ([] as ReactElement[]).concat(
            <Table.Column
                title={i18n.productDetail}
                key="product"
                dataIndex="product[0].title"
                filters={filters}
            />,
            cols
        );

        cols.unshift(
            <Table.Column
                cell={productRender}
                title={i18n.productDetail}
                key="product"
                dataIndex="product"
                filters={filters}
            />
        );

        const groupCols = cols.slice();
        groupCols.unshift(<Table.GroupHeader cell={groupHeaderRender} />);
        groupCols.push(<Table.GroupFooter cell={groupFooterRender} />);

        const smallGroupCols = smallCols.slice();
        smallGroupCols.unshift(<Table.GroupHeader cell={groupHeaderRender} />);
        smallGroupCols.push(<Table.GroupFooter cell={groupFooterRender} />);

        return (
            <Demo title="List" demoFunction={demoFunction} onFunctionChange={this.onFunctionChange}>
                <Demo title="List medium">
                    <DemoGroup label="Normal">
                        <Table dataSource={listDataSource} hasBorder={hasBorder} onSort={() => {}}>
                            {cols}
                        </Table>
                    </DemoGroup>
                    <DemoGroup label="Selected">
                        <Table
                            rowSelection={rowSelection}
                            dataSource={listDataSource}
                            hasBorder={hasBorder}
                            rowProps={getSelectedRowProps}
                            onSort={() => {}}
                        >
                            {cols}
                        </Table>
                    </DemoGroup>
                    <DemoGroup label="No Data">
                        <Table dataSource={[]} hasBorder={hasBorder} onSort={() => {}}>
                            {cols}
                        </Table>
                    </DemoGroup>
                </Demo>
                <Demo title="List small">
                    <DemoGroup label="Normal">
                        <Table
                            size="small"
                            dataSource={listDataSource}
                            hasBorder={hasBorder}
                            onSort={() => {}}
                        >
                            {smallCols}
                        </Table>
                    </DemoGroup>
                </Demo>
                <Demo title="Group medium">
                    <DemoGroup label="Normal">
                        <Table dataSource={listDataSource} hasBorder={hasBorder} onSort={() => {}}>
                            {groupCols}
                        </Table>
                    </DemoGroup>
                    <DemoGroup label="Selected">
                        <Table
                            rowSelection={rowSelection}
                            dataSource={listDataSource}
                            rowProps={getSelectedRowProps}
                            hasBorder={hasBorder}
                            onSort={() => {}}
                        >
                            {groupCols}
                        </Table>
                    </DemoGroup>
                    <DemoGroup label="No Data">
                        <Table dataSource={[]} hasBorder={hasBorder} onSort={() => {}}>
                            {groupCols}
                        </Table>
                    </DemoGroup>
                </Demo>
                <Demo title="Group small">
                    <DemoGroup label="Normal">
                        <Table
                            size="small"
                            hasBorder={hasBorder}
                            dataSource={listDataSource}
                            onSort={() => {}}
                        >
                            {smallGroupCols}
                        </Table>
                    </DemoGroup>
                </Demo>
            </Demo>
        );
    }
}
const demoFunction = [
    {
        label: '斑马线',
        name: 'zebra',
        value: 'false',
        enum: ['true', 'false'],
    },
    {
        label: '选择',
        name: 'rowSelection',
        value: 'false',
        enum: [{ value: 'single', label: '单选' }, { value: 'multiple', label: '多选' }, 'false'],
    },
    {
        label: '单列对齐方式',
        name: 'align',
        value: 'left',
        enum: [
            { value: 'left', label: '左对齐' },
            { value: 'center', label: '居中对齐' },
            { value: 'right', label: '右对齐' },
        ],
    },
    {
        label: '表头',
        name: 'hasHeader',
        value: 'true',
        enum: ['true', 'false'],
    },
    {
        label: '表格有无竖线',
        name: 'hasBorder',
        value: 'false',
        enum: ['true', 'false'],
    },
];

class TableFunctionDemo extends React.Component<{ lang: 'zh-cn' | 'en-us' }> {
    state = {
        demoFunction: normalize(demoFunction),
    };

    onFunctionChange = (demoFunction: ReturnType<typeof normalize>) => {
        this.setState({
            demoFunction,
        });
    };

    render() {
        const { demoFunction } = this.state;
        const functions = convert(demoFunction);
        const { lang } = this.props;
        const i18n = i18nMap[lang];
        const { size } = functions;
        const rowSelection: TableProps['rowSelection'] =
            functions.rowSelection === 'false'
                ? null
                : {
                      mode: functions.rowSelection as 'single' | 'multiple',
                      selectedRowKeys: [1],
                  };
        let filters;
        if (functions.filters) {
            filters = [
                { label: 'Option1', value: 'Option1' },
                { label: 'Option2', value: 'Option2' },
            ];
        }
        const hasHeader = functions.hasHeader === 'true';
        const hasBorder = functions.hasBorder === 'true';
        const isZebra = functions.zebra === 'true';
        const align = functions.align as ColumnProps['align'];
        const listDataSource = [
            {
                price: '$2.45(USD)',
                status: 0,
                id: 1,
                product: [
                    {
                        title: "2014 New Fashion Novelty Tank Slim Women's Fashion Dresses With Lace",
                        avatar: 'https://sc01.alicdn.com/kf/HTB1ravHKXXXXXccXVXXq6xXFXXXJ/Chinese-Style-Fashion-Custom-Digital-Print-Silk.jpg_220x220.jpg',
                    },
                ],
                children: [
                    {
                        price: '$2.5(USD)',
                        status: 1,
                        id: 2,
                        product: [
                            {
                                title: 'Free shipping women Casual dresses lady dress plus size 2014',
                                avatar: 'https://sc02.alicdn.com/kf/HTB1efnNLVXXXXbtXpXXq6xXFXXXN/Light-100-acrylic-fashionabe-snood-shawl-weight.jpg_220x220.jpg',
                            },
                        ],
                    },
                    {
                        price: '$2.5(USD)',
                        status: 1,
                        id: 3,
                        product: [
                            {
                                title: 'Free shipping women Casual dresses lady dress plus size 2014',
                                avatar: 'https://sc02.alicdn.com/kf/HTB1efnNLVXXXXbtXpXXq6xXFXXXN/Light-100-acrylic-fashionabe-snood-shawl-weight.jpg_220x220.jpg',
                            },
                        ],
                    },
                ],
            },
            {
                price: '$2.5(USD)',
                status: 1,
                id: 4,
                product: [
                    {
                        title: 'Free shipping women Casual dresses lady dress plus size 2014',
                        avatar: 'https://sc02.alicdn.com/kf/HTB1efnNLVXXXXbtXpXXq6xXFXXXN/Light-100-acrylic-fashionabe-snood-shawl-weight.jpg_220x220.jpg',
                    },
                ],
            },
        ];

        function productRender(product: { title: string; avatar: string }[]) {
            return (
                <div className="media">
                    <img
                        src={product[0].avatar}
                        style={{ width: 48, height: 48, float: 'left', marginRight: 10 }}
                    />
                    <div className="media-content">{product[0].title}</div>
                </div>
            );
        }

        function statusRender(status: boolean) {
            if (status) {
                return i18n.priced;
            } else {
                return i18n.noPriced;
            }
        }

        function priceRender(price: string) {
            return <b>{price}</b>;
        }

        function operRender() {
            return <a href="javascript:;">{i18n.view}</a>;
        }

        function groupHeaderRender(record: { product: { title: string }[] }) {
            return <div>{record.product[0].title}</div>;
        }

        function groupFooterRender(record: { product: { title: string }[] }) {
            return <div>{record.product[0].title}</div>;
        }

        const cols = [
            <Table.Column cell={priceRender} title={i18n.price} dataIndex="price" key="price" />,
            <Table.Column
                cell={statusRender}
                title={i18n.status}
                dataIndex="status"
                key="status"
            />,
            <Table.Column cell={operRender} title="" dataIndex="oper" key="oper" />,
        ];
        const smallCols = ([] as ReactElement[]).concat(
            <Table.Column
                align={align}
                title={i18n.productDetail}
                key="product"
                dataIndex="product[0].title"
                filters={filters}
            />,
            cols
        );

        cols.unshift(
            <Table.Column
                cell={productRender}
                align={align}
                title={i18n.productDetail}
                key="product"
                dataIndex="product"
                filters={filters}
            />
        );
        const groupCols = cols.slice();
        groupCols.unshift(<Table.GroupHeader cell={groupHeaderRender} />);
        groupCols.push(<Table.GroupFooter cell={groupFooterRender} />);

        return (
            <Demo
                title="Table"
                demoFunction={demoFunction}
                onFunctionChange={this.onFunctionChange}
            >
                <Demo title="Table medium">
                    <DemoGroup label="Normal">
                        <Table
                            rowSelection={rowSelection}
                            dataSource={listDataSource}
                            hasBorder={hasBorder}
                            hasHeader={hasHeader}
                            isZebra={isZebra}
                        >
                            {cols}
                        </Table>
                    </DemoGroup>
                    <DemoGroup label="Selected">
                        <Table
                            rowSelection={rowSelection}
                            dataSource={listDataSource}
                            hasBorder={hasBorder}
                            hasHeader={hasHeader}
                            isZebra={isZebra}
                        >
                            {cols}
                        </Table>
                    </DemoGroup>
                    <DemoGroup label="Selected & Expanded">
                        <Table
                            rowSelection={rowSelection}
                            expandedRowRender={record => record.price}
                            dataSource={listDataSource}
                            hasBorder={hasBorder}
                            hasHeader={hasHeader}
                            isZebra={isZebra}
                        >
                            {cols}
                        </Table>
                    </DemoGroup>
                    <DemoGroup label="Tree">
                        <Table
                            rowSelection={rowSelection}
                            dataSource={listDataSource}
                            hasBorder={hasBorder}
                            hasHeader={hasHeader}
                            isZebra={isZebra}
                            isTree
                        >
                            {cols.slice(1)}
                        </Table>
                    </DemoGroup>
                    <DemoGroup label="No Data">
                        <Table
                            rowSelection={rowSelection}
                            dataSource={[]}
                            hasBorder={hasBorder}
                            hasHeader={hasHeader}
                            isZebra={isZebra}
                        >
                            {cols}
                        </Table>
                    </DemoGroup>
                </Demo>
                <Demo title="Table small">
                    <DemoGroup label="Normal">
                        <Table
                            size="small"
                            rowSelection={rowSelection}
                            dataSource={listDataSource}
                            hasBorder={hasBorder}
                            hasHeader={hasHeader}
                            isZebra={isZebra}
                        >
                            {smallCols}
                        </Table>
                    </DemoGroup>
                </Demo>
            </Demo>
        );
    }
}

window.renderDemo = function (lang: 'zh-cn' | 'en-us') {
    ReactDOM.render(
        <ConfigProvider locale={lang === 'en-us' ? enUS : zhCN}>
            <div className="demo-container">
                <FunctionDemo lang={lang} />
                <TableFunctionDemo lang={lang} />
            </div>
        </ConfigProvider>,
        document.getElementById('container')
    );
};
window.renderDemo('en-us');
initDemo('table');
