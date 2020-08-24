# 自定义图标

- order: 4

通过设置 `icons` 属性中的 `loading` 即可自定义加载的 `icon`。

:::lang=en-us
# Custom icons

- order: 4

Button has a inner state `icons.loading` to custom loading icon. It could be changed by setting `icons.loading` attribute.

:::

---

````jsx
import { Button, Icon } from '@alifd/next';

class Demo extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            loading: false
        };
    }

    setLoading = () => {
        this.setState({ loading: true });
    }

    render() {
        return (<div>
            <Button type="secondary" iconSize="xs" loading icons={{ loading: <Icon type="loading" style={{ color: 'orange' }} /> }}>Custom loading icon</Button>&nbsp;&nbsp;
            <Button type="primary" loading={this.state.loading} onClick={this.setLoading} icons={{ loading: <Icon type="loading" style={{ color: 'orange' }} /> }}>Click to loading and show loading icon</Button>
        </div>);
    }
}

ReactDOM.render(<Demo/>, mountNode);
````
