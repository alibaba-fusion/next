# 简单模式

- order: 2

通过设置 mode 为 'simple'，可以开启简单模式，点击选项即移动。

:::lang=en-us
# Simple mode

- order: 2

You can enable the simple mode and click the item to move by setting mode to 'simple'.
:::

---

````jsx
import { Transfer } from '@alifd/next';

const dataSource = (() => {
    const dataSource = [];

    for (let i = 0; i < 10; i++) {
        dataSource.push({
            label: `content${i}`,
            value: `${i}`,
            disabled: i % 4 === 0
        });
    }

    return dataSource;
})();

class Demo extends React.Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(value, data, extra) {
        console.log(value, data, extra);
    }

    render() {
        return <Transfer mode="simple" defaultValue={['3']} dataSource={dataSource} defaultLeftChecked={['1']} onChange={this.handleChange} titles={['Simple Mode', 'Simple Mode']} />;
    }
}

ReactDOM.render(<Demo />, mountNode);
````
