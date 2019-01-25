# 加载中

- order: 3

通过设置 `loading` 属性即可以让按钮处于加载状态。

:::lang=en-us
# Loading

- order: 3

Button has a inner state `loading` to control if a Button is in loading. It could be changed by setting `loading` attribute.

:::

---

````jsx
import { Button } from '@alifd/next';

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
            <Button type="secondary" loading>Loading</Button>&nbsp;&nbsp;
            <Button type="primary" loading={this.state.loading} onClick={this.setLoading}>Click to loading</Button>
        </div>);
    }
}

ReactDOM.render(<Demo/>, mountNode);
````
