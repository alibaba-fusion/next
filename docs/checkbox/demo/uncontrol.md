# 非受限组件

- order: 3

使用 `CheckboxGroup` 渲染的组，通过设置 `defaultValue` 属性可以让组件变成[非受限组件](https://facebook.github.io/react/docs/forms.html#uncontrolled-components)。

:::lang=en-us
# Uncontrolled Component
- order: 3
Groups rendered with `CheckboxGroup` can be made to become [uncontrolled components] by setting the `defaultValue` property (https://facebook.github.io/react/docs/forms.html#uncontrolled-components).
:::
---

````jsx
import { Checkbox } from '@alifd/next';

const { Group: CheckboxGroup } = Checkbox;
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

class UnControlApp extends React.Component {

    constructor(props) {
        super(props);

        this.onChange = this.onChange.bind(this);
    }

    onChange(selectedItems) {
        console.log('onChange callback', selectedItems);
    }

    render() {
        return (
            <div style={{padding: '20px'}}>
                <CheckboxGroup defaultValue={['apple']} dataSource={list} onChange={this.onChange} />
            </div>
        );
    }

}

ReactDOM.render(<UnControlApp />, mountNode);
````
