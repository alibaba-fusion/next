# 传入数组配置

- order: 5

通过配置 `dataSource` 参数来渲染单选框分组，数组中对象元素支持配置Checkbox属性。

:::lang=en-us
# DataSource Usage
- order: 5
Groups that are rendered using `CheckboxGroup` can set the component using `dataSource`.
:::
---

````jsx
import { Checkbox } from '@alifd/next';

const list = [
    {
        value: 'apple',
        label: 'Apple',
        disabled: false
    }, {
        value: 'pear',
        label: 'Pear'
    }, {
        value: 'orange',
        label: 'Orange',
        disabled: true
    }
];

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: 'apple',
        };
    }

    onChange = (value) => {
        this.setState({
            value: value
        });
    }

    render() {
        return (
                <Checkbox.Group dataSource={list} size="small" value={this.state.value} onChange={this.onChange} />
        );
    }
}

ReactDOM.render(<App />, mountNode);
````
