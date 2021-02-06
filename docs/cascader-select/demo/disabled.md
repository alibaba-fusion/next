# 禁用状态

- order: 4

通过 `disabled` 属性设置是否禁用节点，禁用情况下，节点将不响应任何交互；通过 `checkboxDisabled` 属性设置节点是否可以勾选，仅在多选情况下生效。

:::lang=en-us
# Basic Usage

- order: 4

Demo the basic single select usage.
:::

---

````jsx
import { CascaderSelect } from '@alifd/next';
import 'whatwg-fetch';

class Demo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [
              {
                value: '2973',
                label: '陕西',
                children: [
                  {
                    value: '2974',
                    label: '西安',
                    children: [
                      { value: '2975', label: '西安市', isLeaf: true, checkboxDisabled: true, },
                      { value: '2976', label: '高陵县', isLeaf: true },
                    ],
                  },
                  {
                    value: '2980',
                    label: '铜川',
                    disabled: true,
                    children: [
                      { value: '2981', label: '铜川市', isLeaf: true },
                      { value: '2982', label: '宜君县', isLeaf: true },
                    ],
                  },
                ],
              },
            ]
        };
    }

    handleChange = (value, data, extra) => {
        console.log(value, data, extra);
    }

    render() {
        return <CascaderSelect multiple dataSource={this.state.data} onChange={this.handleChange} />;
    }
}

ReactDOM.render(<Demo />, mountNode);
````
