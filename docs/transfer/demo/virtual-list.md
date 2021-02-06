# 虚拟滚动

- order: 7

通过设置 useVirtual 为 true，开启列表虚拟滚动

:::lang=en-us
# Support Virtual List

- order: 7

You can enable virtual list by set `userVirtual` to `ture`
:::

---

````jsx
import { Transfer } from '@alifd/next';

const dataSource = (() => {
    const dataSource = [];

    for (let i = 0; i < 1000; i++) {
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
        return <Transfer mode="simple" useVirtual defaultValue={['3']} dataSource={dataSource} defaultLeftChecked={['1']} onChange={this.handleChange} titles={['Simple Mode', 'Simple Mode']} />;
    }
}

ReactDOM.render(<Demo />, mountNode);
````
