# 无障碍支持

- order: 16
 
当聚焦在组件上时，通过`aria-labelledby`对组件进行描述。关于键盘操作请参考[#无障碍键盘操作指南](#无障碍键盘操作指南)。

:::lang=en-us
# Accessibility

- order: 16
When focusing on a component, the component is described by `aria-labelledby`. Please refer to `ARIA and KeyBoard` for keyboard operation.

:::
---

````jsx
import { Select } from '@alifd/next';

const Option = Select.Option;

class App extends React.Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }
    onChange(value) {
        console.log(value);
    };

    render() {
        return (<div>
            <span id="select-a11y">Select: </span>
            <Select onChange={this.onChange} defaultValue="jack" aria-labelledby="select-a11y">
                <Option value="jack">Jack</Option>
                <Option value="frank">Frank</Option>
                <Option value="hugo">Hugo</Option>
            </Select>
        </div>);
    }
}
  
ReactDOM.render(<App />, mountNode);
````
