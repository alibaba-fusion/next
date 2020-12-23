# 输入框辅助完成

- order: 9

`AutoComplete` 继承了 `Input` 的能力，并在其基础上增加了 autoComplete 的功能。
对于设置为`AutoComplete`为off不生效对的情况，可以参考 [MDN](https://developer.mozilla.org/zh-CN/docs/Web/Security/Securing_your_site/Turning_off_form_autocompletion]) 中进行设置。


:::lang=en-us
# autocomplete

- order: 9

`AutoComplete` inherits the capabilities of `Input` and adds autoComplete functionality to it.
:::
---

````jsx
import { Select } from '@alifd/next';

const dataSource = [
    'Lucy King',
    'Lily King',
    'Jim Green',
    {
        label: 'Chinese',
        children: [
            {value: 'Hang Meimei', label: 'Hang Meimei'},
            'Li Lei',
            {value: 'Gao Hui', label: 'Gao Hui', disabled: true},
            'Zhang San',
            'Li Si',
            'Wang Wu',
            {value: 'Zhao Benshan', label: 'Zhao Benshan', disabled: true},
            'Sun Yang',
            'Song Shuying'
        ]
    },
    {
        label: 'Pets',
        children: [
            'Poly',
            'Kitty'
        ]
    }
];

const onChange = (v) => {
    console.log(v);
};

ReactDOM.render(<Select.AutoComplete style={{width: 300}} onChange={onChange} dataSource={dataSource} />, mountNode);
````
