# 带搜索框

- order: 3

带搜索框的穿梭框，可以自定义搜索函数。

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
        return (<Transfer showSearch={[true, false]} searchProps={{
            hasClear: true
        }} defaultValue={['3']} dataSource={dataSource} defaultLeftChecked={['1']} onChange={this.handleChange} titles={['Searchable', 'Searchable']} notFoundContent={['left not found', 'right not found']} />);
    }
}

ReactDOM.render(<Demo />, mountNode);
````
