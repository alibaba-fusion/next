# 异步加载数据

- order: 7

展示动态获取数据的用法。

:::lang=en-us
# Loading data asynchronously

- order: 7

Demon loading data asynchronously.
:::

---

````jsx
import { CascaderSelect } from '@alifd/next';
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
        return <CascaderSelect style={{ width: '302px' }} dataSource={this.state.dataSource} loadData={this.onLoadData} />;
    }
}

ReactDOM.render(<Demo />, mountNode);
````
