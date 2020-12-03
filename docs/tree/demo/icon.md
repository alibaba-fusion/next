# 图标

-   order: 5

可以设置节点文本前的`icon`图标。

:::lang=en-us

# Show Icon

-   order: 5

Demo the tree node with icon.
:::

---

````jsx
import { Tree, Checkbox, Icon } from '@alifd/next';

const data = [
    {
        label: 'Component',
        key: '1',
        icon: <Icon type="favorites-filling" />,
        children: [
            {
                label: 'Form',
                key: '2',
                icon: 'form',
                children: [
                    {
                        label: 'Input',
                        key: '4',
                    },
                    {
                        label: 'Select',
                        key: '5',
                    },
                ],
            },
            {
                label: 'Display',
                key: '3',
                icon: 'form',
                children: [
                    {
                        label: 'Table',
                        key: '6',
                    },
                ],
            },
        ],
    },
];

ReactDOM.render(<Tree defaultExpandAll dataSource={data} />, mountNode);
````
