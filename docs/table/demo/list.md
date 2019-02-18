# 分组列表

- order: 10

分组列表展现

:::lang=en-us
# Group list

- order: 10

Demo the Group list.
:::

---

````jsx
import { Table, Button } from '@alifd/next';

const dataSource = [{
        price: 'US $2.45',
        status: 0,
        id: 1,
        product: [{
            title: '2014 New Fashion Novelty Tank Slim Women\'s Fashion Dresses With Lace',
            avatar: 'https://sc01.alicdn.com/kf/HTB1ravHKXXXXXccXVXXq6xXFXXXJ/Chinese-Style-Fashion-Custom-Digital-Print-Silk.jpg_220x220.jpg'
        }],
        children: [{
            price: 'US $2.5',
            status: 1,
            id: 2,
            product: [{
                title: 'Free shipping women Casual dresses lady dress plus size 2014',
                avatar: 'https://sc02.alicdn.com/kf/HTB1efnNLVXXXXbtXpXXq6xXFXXXN/Light-100-acrylic-fashionabe-snood-shawl-weight.jpg_220x220.jpg'
            }]
        }, {
            price: 'US $2.5',
            status: 1,
            id: 3,
            product: [{
                title: 'Free shipping women Casual dresses lady dress plus size 2014',
                avatar: 'https://sc02.alicdn.com/kf/HTB1efnNLVXXXXbtXpXXq6xXFXXXN/Light-100-acrylic-fashionabe-snood-shawl-weight.jpg_220x220.jpg'
            }]
        }]
    }, {
        price: 'US $2.5',
        status: 1,
        id: 4,
        product: [{
            title: 'Free shipping women Casual dresses lady dress plus size 2014',
            avatar: 'https://sc02.alicdn.com/kf/HTB1efnNLVXXXXbtXpXXq6xXFXXXN/Light-100-acrylic-fashionabe-snood-shawl-weight.jpg_220x220.jpg'
        }],
        children: [{
            price: 'US $2.5',
            status: 1,
            id: 5,
            product: [{
                title: 'Free shipping women Casual dresses lady dress plus size 2014',
                avatar: 'https://sc02.alicdn.com/kf/HTB1efnNLVXXXXbtXpXXq6xXFXXXN/Light-100-acrylic-fashionabe-snood-shawl-weight.jpg_220x220.jpg'
            }]
        }]
    }],
    productRender = function(product) {
        return (<div className="media">
            <img src={product[0].avatar} className="media-side"/>
            <div className="media-content">{product[0].title}</div>
        </div>);
    },
    priceRender = function(price) {
        return <b>{price}</b>;
    },
    statusRender = function(status) {
        if (status) {
            return 'Already Priced';
        } else {
            return 'No Priced';
        }
    },
    operRender = function() {
        return <a href="javascript:;">View</a>;
    },
    groupHeaderRender = function(record) {
        return <div>{record.product[0].title}</div>;
    },
    rowSelection = {
        onChange: function(selectedKeys) {
            console.log(selectedKeys);
        }
    };

class App extends React.Component {
    state = {
        hasSelection: false
    }

    toggleGroupSelection = () => {
        this.setState({
            hasSelection: !this.state.hasSelection
        });
    }
    render() {
        return (
            <div>
                <p><Button onClick={this.toggleGroupSelection}>Toggle GroupHeader Selection</Button></p>
                <Table dataSource={dataSource} rowSelection={rowSelection}>
                    <Table.GroupHeader cell={groupHeaderRender} hasChildrenSelection={this.state.hasSelection}/>
                    <Table.GroupFooter cell={groupHeaderRender}/>
                    <Table.Column cell={productRender} title="Product Details" dataIndex="product"/>
                    <Table.Column cell={priceRender} title="Price" dataIndex="price" width={120}/>
                    <Table.Column cell={statusRender} title="Status" dataIndex="status" width={100}/>
                    <Table.Column cell={operRender} title="" width={100}/>
                </Table>
            </div>
        );
    }
}

ReactDOM.render(<App/>, mountNode);
````

````css
.media-side{
    width:48px;
    height:48px;
    float:left;
    margin-right:10px;
}
.media-content{
    overflow: hidden;
    vertical-align: top;
}
.media{
    overflow: hidden;
}
````
