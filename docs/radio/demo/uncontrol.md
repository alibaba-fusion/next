# 非受限组件

- order: 2

使用 `RadioGroup` 渲染的组，通过设置 `defaultValue` 属性可以让组件变成[非受限组件](https://facebook.github.io/react/docs/forms.html#uncontrolled-components)。


:::lang=en-us
# Uncontrolled Component
- order: 2
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
        label: 'Orange',
    },
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
