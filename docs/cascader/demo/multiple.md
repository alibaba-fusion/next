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
                data[1].disabled = true;
                data[2].checkboxDisabled = true;
                data[0].children[2].checkboxDisabled = true;
                data[0].children[1].disabled = true;

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
