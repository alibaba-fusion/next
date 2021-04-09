# 多选

- order: 1

设置`multiple`为`true`，开启多选，此时节点可勾选。

:::lang=en-us
# Multiple select

- order: 1

Demo the basic multiple select usage.
:::

---

````jsx
import { CascaderSelect } from '@alifd/next';
import 'whatwg-fetch';

class Demo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
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
    }

    render() {
        return <CascaderSelect multiple dataSource={this.state.data} onChange={this.handleChange} />;
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
