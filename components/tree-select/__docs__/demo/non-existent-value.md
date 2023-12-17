# value 不存在

-   order: 5

通过设置 `preserveNonExistentValue`，可以让 value 在 dataSource 中不存在时仍然显示

:::lang=en-us

# non-existent-value

-   order: 0

display value even though value not exist in dataSource
:::

---

```jsx
import { TreeSelect } from '@alifd/next';

const treeData = [
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
            <TreeSelect
                value={{value: 'non-existent', label: 'not exist'}}
                preserveNonExistentValue
                treeDefaultExpandAll
                treeCheckable
                dataSource={treeData}
                onChange={this.handleChange}
                style={{ width: 200 }}
            />
        );
    }
}

ReactDOM.render(<Demo />, mountNode);
```
