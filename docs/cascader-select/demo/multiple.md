# 多选

- order: 2

展示基本的多选用法。

:::lang=en-us
# Multiple select

- order: 2

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
                data[1].disabled = true;
                data[2].checkboxDisabled = true;
                this.setState({ data });
            })
            .catch(e => console.log(e));
    }

    handleChange(value, data, extra) {
        console.log(value, data, extra);
    }

    render() {
        return <CascaderSelect style={{ width: '302px' }} multiple dataSource={this.state.data} onChange={this.handleChange} />;
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
