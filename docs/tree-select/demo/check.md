# 复选框多选

- order: 2

展示复选框多选的功能。

:::lang=en-us
# Checkbox

- order: 2

Demo the multiple select usage.
:::

---

````jsx
import { TreeSelect } from '@alifd/next';

const treeData = [{
    label: 'Component',
    value: '1',
    children: [{
        label: 'Form',
        value: '2',
        children: [{
            label: 'Input',
            value: '4'
        }, {
            label: 'Select',
            value: '5'
        }]
    }, {
        label: 'Display',
        value: '3',
        children: [{
            label: 'Table',
            value: '6'
        }]
    }]
}];

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
            <TreeSelect treeDefaultExpandAll treeCheckable dataSource={treeData} onChange={this.handleChange} style={{ width: 200 }} />
        );
    }
}

ReactDOM.render(<Demo />, mountNode);
````
