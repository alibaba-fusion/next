# 设置是否只能选择叶子项

- order: 3

展示受控单选以及是否只能选择叶子项的用法。

:::lang=en-us
# Set whether to only select leaf items

- order: 3

Demo the controlled single select and whether it can only select leaf items.
:::

---

````jsx
import { Checkbox, Cascader } from '@alifd/next';
import 'whatwg-fetch';

class Demo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: null,
            canOnlySelectLeaf: false,
            data: []
        };

        this.handleCheck = this.handleCheck.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        fetch('https://os.alipayobjects.com/rmsportal/ODDwqcDFTLAguOvWEolX.json')
            .then(response => response.json())
            .then(data => this.setState({ data, value: '2975' }))
            .catch(e => console.log(e));
    }

    handleCheck() {
        this.setState({
            canOnlySelectLeaf: !this.state.canOnlySelectLeaf,
            value: null
        });
    }

    handleChange(value, data, extra) {
        console.log(value, data, extra);

        this.setState({
            value
        });
    }

    render() {
        return (
            <div className="control-single-demo">
                <label className="leaf-check">
                    <Checkbox value={this.state.canOnlySelectLeaf} onChange={this.handleCheck} />
                    <span className="leaf-text">Enable canOnlySelectLeaf</span>
                </label>
                <Cascader canOnlySelectLeaf={this.state.canOnlySelectLeaf} value={this.state.value} dataSource={this.state.data} onChange={this.handleChange} />
            </div>
        );
    }
}

ReactDOM.render(<Demo />, mountNode);
````

```` css
.control-single-demo .leaf-check {
    display: block;
    margin-bottom: 10px;
}

.control-single-demo .leaf-text {
    display: inline-block;
    margin-left: 10px;
    vertical-align: middle;
    color: #666;
    font-size: 14px;
}
````
