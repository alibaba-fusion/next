# 非受控组件

- order: 10
- debug: true

使用 `RadioGroup` 渲染的组，通过设置 `defaultValue` 属性可以让组件变成[非受控组件](https://facebook.github.io/react/docs/forms.html#uncontrolled-components)。


:::lang=en-us
# Uncontrolled Component
- order: 10
- debug: true
Groups rendered using `RadioGroup` can be made to become [uncontrolled component] by setting the `defaultValue` property (https://facebook.github.io/react/docs/forms.html#uncontrolled-components).

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
        label: 'Pear',
        disabled: true
    }, {
        value: 'orange',
        label: 'Orange'
    }
];

const UnControlApp = () => {
    return (
        <div>
            <RadioGroup dataSource={list} defaultValue={'apple'} />
        </div>
    );
};

ReactDOM.render(<UnControlApp />, mountNode);
````
