# 传入数组配置

- order: 2

通过配置 `dataSource` 参数来渲染单选框分组，数组中对象元素支持配置radio属性。

:::lang=en-us
# DataSource Usage
- order: 2
Groups that are rendered using `RadioGroup` can set the component using `dataSource`.
:::
---

````jsx
import { Radio } from '@alifd/next';

const RadioGroup = Radio.Group;

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
            buttonValue: 'pear'
        };
    }

    onChange = (value) => {
        this.setState({
            value: value
        });
    }

    onButtonChange = (value) => {
        this.setState({
            buttonValue: value
        });
    }

    render() {
        return (
            <div>
                <RadioGroup dataSource={list} value={this.state.value} onChange={this.onChange} />
                <br/>
                <RadioGroup dataSource={list} shape="button" value={this.state.buttonValue} onChange={this.onButtonChange} />
            </div>
        );
    }
}

ReactDOM.render(<App />, mountNode);
````
