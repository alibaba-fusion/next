# 多选

- order: 2

设置`multiple`为`true`，开启多选，此时节点可勾选。

:::lang=en-us
# Multiple select

- order: 2

Demo the basic multiple select usage.
:::

---

````jsx
import { Cascader } from '@alifd/next';
import 'whatwg-fetch';

class Demo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            label: '',
            data: []
        };

        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        fetch('https://os.alipayobjects.com/rmsportal/ODDwqcDFTLAguOvWEolX.json')
            .then(response => response.json())
            .then(data => {
                this.setState({ data });
            })
            .catch(e => console.log(e));
    }

    handleChange(value, data, extra) {
        console.log(value, data, extra);

        this.setState({
            label: data.map(d => d.label).join(', ')
        });
    }

    render() {
        return (
            <div>
                <div className="cascader-value">Select: {this.state.label}</div>
                <Cascader multiple dataSource={this.state.data} onChange={this.handleChange} />
            </div>
        );
    }
}

ReactDOM.render(<Demo />, mountNode);
````

```` css
.cascader-value {
    width: 500px;
    margin-bottom: 10px;
    font-size: 14px;
    color: #666;
}
````
