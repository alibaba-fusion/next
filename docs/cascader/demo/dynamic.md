# 异步加载数据

- order: 4

通过`loadData`动态获取数据，`isLeaf`属性用于标志是否是叶子节点。

:::lang=en-us
# Loading data asynchronously

- order: 4

Demon loading data asynchronously.
:::

---

````jsx
import { Cascader } from '@alifd/next';
import 'whatwg-fetch';

const dataSource = [{
    value: '2973',
    label: '陕西'
}];

class Demo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            dataSource
        };

        this.onLoadData = this.onLoadData.bind(this);
    }

    onLoadData(data) {
        console.log(data);

        return new Promise(resolve => {
            setTimeout(() => {
                this.setState({
                    dataSource: [{
                        value: '2973',
                        label: '陕西',
                        children: [{
                            value: '2974',
                            label: '西安',
                            children: [
                                { value: '2975', label: '西安市', isLeaf: true },
                                { value: '2976', label: '高陵县', isLeaf: true }
                            ]
                        }, {
                            value: '2980',
                            label: '铜川',
                            children: [
                                { value: '2981', label: '铜川市', isLeaf: true },
                                { value: '2982', label: '宜君县', isLeaf: true }
                            ]
                        }]
                    }]
                }, resolve);
            }, 500);
        });
    }

    render() {
        return <Cascader canOnlySelectLeaf dataSource={this.state.dataSource} loadData={this.onLoadData} />;
    }
}

ReactDOM.render(<Demo />, mountNode);
````

```` css
.cascader-value {
    margin-bottom: 10px;
    font-size: 14px;
    color: #666;
}
````
