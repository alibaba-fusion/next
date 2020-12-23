# 基本用法

- order: 0

最简单的用法。

:::lang=en-us
# Basic usage

- order: 0

The simplest usage.
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
        return (
            <Transfer defaultValue={['3']} dataSource={dataSource} defaultLeftChecked={['1']} onChange={this.handleChange} titles={['Title', 'Title']} />
        );
    }
}

ReactDOM.render(<Demo />, mountNode);
````
