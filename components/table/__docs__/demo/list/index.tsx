import React from 'react';
import ReactDOM from 'react-dom';
import { Table, Button } from '@alifd/next';

const dataSource = [
        {
            price: 'US $1',
            status: 1,
            parent: 'root',
            id: 1,
            product: [
                {
                    title: "2014 New Fashion Novelty Tank Slim Women's Fashion Dresses With Lace",
                    avatar: 'https://sc01.alicdn.com/kf/HTB1ravHKXXXXXccXVXXq6xXFXXXJ/Chinese-Style-Fashion-Custom-Digital-Print-Silk.jpg_220x220.jpg',
                },
            ],
            children: [
                {
                    price: 'US $1-1',
                    status: 11,
                    id: 2,
                    parent: 0,
                    index: 0,
                    product: [
                        {
                            title: 'Free shipping women Casual dresses lady dress plus size 2014',
                            avatar: 'https://sc02.alicdn.com/kf/HTB1efnNLVXXXXbtXpXXq6xXFXXXN/Light-100-acrylic-fashionabe-snood-shawl-weight.jpg_220x220.jpg',
                        },
                    ],
                },
                {
                    price: 'US $1-2',
                    status: 12,
                    id: 3,
                    parent: 0,
                    product: [
                        {
                            title: 'Free shipping women Casual dresses lady dress plus size 2014',
                            avatar: 'https://sc02.alicdn.com/kf/HTB1efnNLVXXXXbtXpXXq6xXFXXXN/Light-100-acrylic-fashionabe-snood-shawl-weight.jpg_220x220.jpg',
                        },
                    ],
                },
                {
                    price: 'US $1-3',
                    status: 13,
                    id: 7,
                    parent: 0,
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
            children: [
                {
                    price: 'US $3-1',
                    status: 31,
                    id: 31,
                    parent: 1,
                    index: 0,
                    product: [
                        {
                            title: 'Free shipping women Casual dresses lady dress plus size 2014',
                            avatar: 'https://sc02.alicdn.com/kf/HTB1efnNLVXXXXbtXpXXq6xXFXXXN/Light-100-acrylic-fashionabe-snood-shawl-weight.jpg_220x220.jpg',
                        },
                    ],
                },
                {
                    price: 'US $3-2',
                    status: 32,
                    id: 32,
                    parent: 1,
                    product: [
                        {
                            title: 'Free shipping women Casual dresses lady dress plus size 2014',
                            avatar: 'https://sc02.alicdn.com/kf/HTB1efnNLVXXXXbtXpXXq6xXFXXXN/Light-100-acrylic-fashionabe-snood-shawl-weight.jpg_220x220.jpg',
                        },
                    ],
                },
                {
                    price: 'US $3-3',
                    status: 33,
                    id: 33,
                    parent: 1,
                    product: [
                        {
                            title: 'Free shipping women Casual dresses lady dress plus size 2014',
                            avatar: 'https://sc02.alicdn.com/kf/HTB1efnNLVXXXXbtXpXXq6xXFXXXN/Light-100-acrylic-fashionabe-snood-shawl-weight.jpg_220x220.jpg',
                        },
                    ],
                },
                {
                    price: 'US $3-4',
                    status: 34,
                    id: 34,
                    parent: 1,
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
            price: 'US $4',
            status: 4,
            parent: 'root',
            id: 4,
            product: [
                {
                    title: "2014 New Fashion Novelty Tank Slim Women's Fashion Dresses With Lace",
                    avatar: 'https://sc01.alicdn.com/kf/HTB1ravHKXXXXXccXVXXq6xXFXXXJ/Chinese-Style-Fashion-Custom-Digital-Print-Silk.jpg_220x220.jpg',
                },
            ],
            children: [
                {
                    price: 'US $4-1',
                    status: 31,
                    id: 31,
                    parent: 2,
                    index: 0,
                    product: [
                        {
                            title: 'Free shipping women Casual dresses lady dress plus size 2014',
                            avatar: 'https://sc02.alicdn.com/kf/HTB1efnNLVXXXXbtXpXXq6xXFXXXN/Light-100-acrylic-fashionabe-snood-shawl-weight.jpg_220x220.jpg',
                        },
                    ],
                },
                {
                    price: 'US $4-2',
                    status: 32,
                    id: 32,
                    parent: 2,
                    product: [
                        {
                            title: 'Free shipping women Casual dresses lady dress plus size 2014',
                            avatar: 'https://sc02.alicdn.com/kf/HTB1efnNLVXXXXbtXpXXq6xXFXXXN/Light-100-acrylic-fashionabe-snood-shawl-weight.jpg_220x220.jpg',
                        },
                    ],
                },
                {
                    price: 'US $4-3',
                    status: 33,
                    id: 33,
                    parent: 2,
                    product: [
                        {
                            title: 'Free shipping women Casual dresses lady dress plus size 2014',
                            avatar: 'https://sc02.alicdn.com/kf/HTB1efnNLVXXXXbtXpXXq6xXFXXXN/Light-100-acrylic-fashionabe-snood-shawl-weight.jpg_220x220.jpg',
                        },
                    ],
                },
            ],
        },
    ],
    productRender = function (product) {
        return (
            <div className="media">
                <img src={product[0].avatar} className="media-side" />
                <div className="media-content">{product[0].title}</div>
            </div>
        );
    },
    priceRender = function (price) {
        return <b>{price}</b>;
    },
    statusRender = function (status) {
        if (status) {
            return 'Already Priced';
        } else {
            return 'No Priced';
        }
    },
    operRender = function () {
        return <a href="javascript:;">View</a>;
    },
    groupHeaderRender = function (record) {
        return <div>{record.product[0].title}</div>;
    },
    rowSelection = {
        onChange: function (selectedKeys) {
            console.log(selectedKeys);
        },
    };

const cellProps = (rowIndex, colIndex, dataIndex, record) => {
    if (colIndex === 3 && record.index === 0) {
        return {
            rowSpan: dataSource[record.parent].children.length,
        };
    }

    if (colIndex === 4 && record.index === 0) {
        return {
            rowSpan: dataSource[record.parent].children.length,
        };
    }
};

class App extends React.Component {
    state = {
        hasSelection: false,
    };

    toggleGroupSelection = () => {
        this.setState({
            hasSelection: !this.state.hasSelection,
        });
    };
    render() {
        return (
            <div>
                <p>
                    <Button onClick={this.toggleGroupSelection}>
                        Toggle GroupHeader Selection
                    </Button>
                </p>
                <Table
                    tableLayout="fixed"
                    dataSource={dataSource}
                    rowSelection={rowSelection}
                    cellProps={cellProps}
                >
                    <Table.GroupHeader
                        cell={groupHeaderRender}
                        hasChildrenSelection={this.state.hasSelection}
                    />
                    <Table.GroupFooter cell={groupHeaderRender} />
                    <Table.Column
                        cell={productRender}
                        title="Product Details"
                        dataIndex="product"
                    />
                    <Table.Column cell={priceRender} title="Price" dataIndex="price" width={120} />
                    <Table.Column
                        cell={statusRender}
                        title="Status"
                        dataIndex="status"
                        width={100}
                    />
                    <Table.Column cell={operRender} title="Operation" width={100} />
                </Table>
            </div>
        );
    }
}

ReactDOM.render(<App />, mountNode);
