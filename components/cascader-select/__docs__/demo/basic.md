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
import { CascaderSelect } from '@alifd/next';
import 'whatwg-fetch';

class Demo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: []
        };
    }

    componentDidMount() {
        fetch('https://os.alipayobjects.com/rmsportal/ODDwqcDFTLAguOvWEolX.json')
            .then(response => response.json())
            .then(data => {
                this.setState({ data });
            })
            .catch(e => console.log(e));
    }

    handleChange = (value, data, extra) => {
        console.log(value, data, extra);
    }

    render() {
        return <CascaderSelect dataSource={this.state.data} onChange={this.handleChange} />;
    }
}

ReactDOM.render(<Demo />, mountNode);
````
