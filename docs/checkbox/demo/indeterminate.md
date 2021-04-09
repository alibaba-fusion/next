# 中间状态

- order: 2

通过使用 `indeterminate` 来渲染[中间状态](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox)的组件。

:::lang=en-us
# Intermediate State Component
- order: 2
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

    toggle = () => {
        if(this.state.indeterminate){
            this.setState({indeterminate: false});
        } else {
            this.setState({checked: false, indeterminate: true});
        }
    }

    render() {
        return (
            <div>
                <Checkbox
                    indeterminate={this.state.indeterminate}
                    checked={this.state.checked}
                    onChange={
                        (checked) => {
                            this.setState({checked: checked, indeterminate: false});
                        }
                    }
                />
                <br />
                <br />
                <Button type="primary" onClick={this.toggle}>toggle indeterminate</Button>
            </div>
        );
    }
}

ReactDOM.render(<IndeterminateApp />, mountNode);
````
