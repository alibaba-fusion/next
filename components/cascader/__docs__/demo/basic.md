# 基本使用

- order: 0

展示基本的单选用法。

:::lang=en-us
# Basic Usage

- order: 0

Demo the basic single select usage.
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
                this.setState({ data });
            })
            .catch(e => console.log(e));
    }

    handleChange(value, data, extra) {
        console.log(value, data, extra);

        this.setState({
            label: extra.selectedPath.map(d => d.label).join(' / ')
        });
    }

    render() {
        return (
            <div>
                <div className="cascader-value">Selected: {this.state.label}</div>
                <Cascader dataSource={this.state.data} onChange={this.handleChange} />
            </div>
        );
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
