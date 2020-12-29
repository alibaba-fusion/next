# 设置是否只能选择叶子项

- order: 3

单选的时候通过`canOnlySelectLeaf`属性设置是否仅叶子节点可选中；多选的时候通过`canOnlyCheckLeaf`属性设置是否仅叶子节点可勾选。

:::lang=en-us
# Set whether to only select leaf items

- order: 3

Demo whether it can only select leaf items.
:::

---

````jsx
import { Cascader } from '@alifd/next';
import 'whatwg-fetch';

class Demo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: null,
        };
    }

    componentDidMount() {
        fetch('https://os.alipayobjects.com/rmsportal/ODDwqcDFTLAguOvWEolX.json')
            .then(response => response.json())
            .then(data => this.setState({ data, value: '2975' }))
            .catch(e => console.log(e));
    }

    handleChange = (value, data, extra) => {
        console.log(value, data, extra);
    }

    render() {
        return (
            <div className="control-single-demo">
                <Cascader
                    canOnlySelectLeaf
                    dataSource={this.state.data}
                    onChange={this.handleChange}
                />
                <br />
                <br />
                <Cascader
                    multiple
                    canOnlyCheckLeaf
                    dataSource={this.state.data}
                    onChange={this.handleChange}
                />
            </div>
        );
    }
}

ReactDOM.render(<Demo />, mountNode);
````

````css
.control-single-demo > div:not(last-child) {
    margin-right: 20px;
}
````
