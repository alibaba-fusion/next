# Checkbox组

- order: 4

使用 `<Checkbox.Group>` 渲染 `<Checkbox>` 分组。


:::lang=en-us
# Group Checkbox
- order: 4
Grouping `<Checkbox>` with `<Checkbox.Group>`.
:::
---

````jsx
import { Checkbox } from '@alifd/next';

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            value: 'orange'
        };

        this.onChange = this.onChange.bind(this);
    }

    onChange(value) {
        this.setState({
            value: value
        });
    }

    render() {
        return (
            <div>
                <span style={{fontSize: 14}}><label id="groupId">Choose fruit: </label></span>
                <br/>
                <br/>
                <Checkbox.Group value={this.state.value} onChange={this.onChange} aria-labelledby="groupId">
                    <Checkbox id="apple" value="apple">Apple</Checkbox>
                    <Checkbox id="watermelon" value="watermelon">Watermelon</Checkbox>
                    <Checkbox id="orange" value="orange">Orange</Checkbox>
                </Checkbox.Group>
            </div>
        );
    }
}

ReactDOM.render(<App />, mountNode);
````
