# 受控分页

-   order: 1

受控分页，是指分页组件的状态由父组件维护，组件自身只负责渲染其父组件传递的值，父组件通过 `current` 属性传递当前的值。

:::lang=en-us
# Controlled Pagination Component
-   order: 1
Controlled Pagination-Component means that the state of the paging component is maintained by the parent component. The component itself is only responsible for rendering the value passed by its parent component. The parent component passes the current value through the `current` attribute.
:::

---

````jsx
import { Pagination } from '@alifd/next';

class Demo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            current: 2
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(current) {
        this.setState({
            current
        });
    }

    render() {
        return (
            <Pagination current={this.state.current} onChange={this.handleChange} />
        );
    }
}

ReactDOM.render(<Demo />, mountNode);
````
