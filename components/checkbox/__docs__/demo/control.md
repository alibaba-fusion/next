# 受控组件

- order: 6

使用 `Checkbox.Group` 渲染的组，通过设置 `value` 属性可以让组件变成[受控组件](https://facebook.github.io/react/docs/forms.html#controlled-components)。


:::lang=en-us
# Controlled Component
- order: 6

Groups rendered using `Checkbox.Group` can make the component a [controlled component] by setting the `value` property (https://facebook.github.io/react/docs/forms.html#controlled-components).

:::
---

````jsx
import { Checkbox } from '@alifd/next';

const list = [
    {
        value: 'appale',
        label: 'Appale'
    }, {
        value: 'pear',
        label: 'Pear'
    }, {
        value: 'orange',
        label: 'Orange'
    }
];

class ControlApp extends React.Component {
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
        console.log('onChange', value);
    }

    onClick(e) {
        console.log('onClick', e);
    }

    render() {
        return (
            <div>
                normal:   <Checkbox.Group dataSource={list} value={this.state.value} onChange={this.onChange} />
                <br />
                <br />
                disabled:  <Checkbox.Group disabled dataSource={list} value={this.state.value} onChange={this.onChange} />
            </div>
        );
    }
}

ReactDOM.render(<ControlApp />, mountNode);
````
