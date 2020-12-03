# 无障碍

-   order: 7

通过`aria-labelledby`对组件进行描述。关于键盘操作请参考`ARIA and KeyBoard`。

:::lang=en-us

# Accessibility

-   order: 7

Description of components is through `aria-labelledby`. Please refer to `ARIA and KeyBoard` for keyboard operation.

:::

---

````jsx
import { TreeSelect } from '@alifd/next';

const data = [
    {
        label: 'Component',
        value: '1',
        children: [
            {
                label: 'Form',
                value: '2',
                children: [
                    {
                        label: 'Input',
                        value: '4',
                    },
                    {
                        label: 'Select',
                        value: '5',
                        disabled: true,
                    },
                ],
            },
            {
                label: 'Display',
                value: '3',
                children: [
                    {
                        label: 'Table',
                        value: '6',
                    },
                ],
            },
        ],
    },
];

class Demo extends React.Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(value, data) {
        console.log(value, data);
    }

    render() {
        return (
            <div>
                <TreeSelect
                    treeDefaultExpandAll
                    aria-labelledby="a11y-tree-select"
                    onChange={this.handleChange}
                    style={{ width: 200 }}
                    dataSource={data}
                />
            </div>
        );
    }
}

ReactDOM.render(<Demo />, mountNode);
````
