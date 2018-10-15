# 搜索

- order: 3

展示搜索的用法。

:::lang=en-us
# Search

- order: 3

Demo the search usage.
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
        return <Transfer showSearch defaultValue={['3']} dataSource={dataSource} defaultLeftChecked={['1']} onChange={this.handleChange} titles={['Searchable', 'Searchable']} />;
    }
}

ReactDOM.render(<Demo />, mountNode);
````
