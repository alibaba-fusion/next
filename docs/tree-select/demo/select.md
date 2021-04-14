# 单选与多选

-   order: 2

展示单选与多选的用法。

:::lang=en-us

# Single and multiple selection

-   order: 2

Demo single and multiple selection.

:::

---

````jsx
import { TreeSelect, Checkbox } from '@alifd/next';

const dataSource = [
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

        this.state = {
            multiple: false,
        };

        this.handleCheck = this.handleCheck.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(value, data) {
        console.log(value, data);
    }

    handleCheck(v) {
        this.setState({
            multiple: v,
        });
    }

    render() {
        const { multiple } = this.state;

        return (
            <div className="control-select-demo" key={`control-select-demo-${multiple}`}>
                <label className="multiple-check">
                    <Checkbox checked={multiple} onChange={this.handleCheck} />
                    <span className="multiple-text">允许多选</span>
                </label>
                <TreeSelect
                    treeDefaultExpandAll
                    hasClear
                    multiple={multiple}
                    onSelect={this.handleSelect}
                    dataSource={dataSource}
                    style={{ width: 200 }}
                />
            </div>
        );
    }
}

ReactDOM.render(<Demo />, mountNode);
````

````css
.control-select-demo .multiple-check {
    display: block;
    margin-bottom: 10px;
}

.control-select-demo .multiple-text {
    display: inline-block;
    margin-left: 10px;
    vertical-align: middle;
    color: #666;
    font-size: 14px;
}
````
