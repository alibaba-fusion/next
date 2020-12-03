# 带线样式

-   order: 4

使用`showLine`开启节点之间的连接线，用于更清晰地展示节点的层级结构。

:::lang=en-us

# Show line

-   order: 4

Demo the tree with line.
:::

---

````jsx
import { Tree, Checkbox } from '@alifd/next';

const data = [
    {
        label: 'Component',
        key: '1',
        children: [
            {
                label: 'Form',
                key: '2',
                selectable: false,
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

ReactDOM.render(<Tree defaultExpandAll showLine dataSource={data} />, mountNode);
````
