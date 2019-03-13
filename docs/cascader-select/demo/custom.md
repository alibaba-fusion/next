# 渲染 DataSource 中不存在的 value

- order: 8

---

```jsx
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
                this.setState({ data });
            })
            .catch(e => console.log(e));
    }

    handleChange(value, data, extra) {
        console.log(value, data, extra);
    }

    render() {
        return <CascaderSelect multiple valueRender={(item) => item.label ? item.label : item.value === '4326' ? '哈哈哈哈' : item.value} defaultValue="4326" style={{ width: '302px' }} dataSource={this.state.data} onChange={this.handleChange} />;
    }
}
ReactDOM.render(<Demo />, mountNode)
```
