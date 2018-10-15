# 中间状态组件

- order: 1

通过使用 `indeterminate` 来渲染[中间状态](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox)的组件。

:::lang=en-us
# Intermediate State Component
- order: 1
Render the components of [Intermediate State] (https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox) by using `indeterminate`.
:::
---

````jsx
import { Checkbox, Button } from '@alifd/next';

class IndeterminateApp extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            checked: false,
            indeterminate: true,
            disabled: false
        };
    }

    render() {
        return (
            <div>
                <Checkbox
                    checked={this.state.checked}
                    indeterminate={this.state.indeterminate}
                    disabled={this.state.disabled}
                    onChange={
                        (checked) => {
                            this.setState({checked: checked, indeterminate: false});
                        }
                    }
                />
                <br />
                <br />
                <Button
                    type="primary"
                    onClick={
                        () => {
                            this.setState({checked: true, indeterminate: false});
                        }
                    }>checked = true</Button>
                <br />
                <br />
                <Button
                    type="primary"
                    onClick={
                        () => {
                            this.setState({checked: false});
                        }
                    }
                >checked = false</Button>
                <br />
                <br />
                <Button
                    type="primary"
                    onClick={
                        () => {
                            this.setState({checked: false, indeterminate: true});
                        }
                    }
                >indeterminate = true</Button>
                <br />
                <br />
                <Button
                    type="primary"
                    onClick={
                        () => {
                            this.setState({indeterminate: false});
                        }
                    }
                >indeterminate = false</Button>
                <br />
                <br />
                <Button
                    type="primary"
                    onClick={
                        () => {
                            this.setState({disabled: !this.state.disabled});
                        }
                    }
                >toggle disabled</Button>
            </div>
        );
    }
}

ReactDOM.render(<IndeterminateApp />, mountNode);
````
