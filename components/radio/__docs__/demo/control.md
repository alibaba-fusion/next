# 受控组件

- order: 9
- debug: true

使用 `RadioGroup` 渲染的组，通过设置 `value` 属性可以让组件变成[受控组件](https://facebook.github.io/react/docs/forms.html#controlled-components)。


:::lang=en-us
# Controlled Component
- order: 9
- debug: true
Groups rendered using `RadioGroup` can make the component a [controlled component] by setting the `value` property (https://facebook.github.io/react/docs/forms.html#controlled-components).

:::
---

````jsx
import { Radio } from '@alifd/next';

const RadioGroup = Radio.Group;

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
                normal:   <RadioGroup dataSource={list} value={this.state.value} onChange={this.onChange} />
                <br />
                <br />
                <br />
                disabled:  <RadioGroup disabled dataSource={list} value={this.state.value} onChange={this.onChange} />
            </div>
        );
    }
}

ReactDOM.render(<ControlApp />, mountNode);
````
