# 单选分组

- order: 1

使用 `<Radio.Group>` 渲染 `<Radio>` 分组，选项互斥。


:::lang=en-us
# Group Radio
- order: 1
Grouping `<Radio>` with `<Radio.Group>`.
:::
---

````jsx
import { Radio } from '@alifd/next';

const RadioGroup = Radio.Group;

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
                <RadioGroup value={this.state.value} onChange={this.onChange} aria-labelledby="groupId">
                    <Radio id="apple" value="apple">Apple</Radio>
                    <Radio id="watermelon" value="watermelon">Watermelon</Radio>
                    <Radio id="orange" value="orange">Orange</Radio>
                </RadioGroup>
            </div>
        );
    }
}

ReactDOM.render(<App />, mountNode);
````
