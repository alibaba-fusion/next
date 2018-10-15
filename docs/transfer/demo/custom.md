# 自定义

- order: 5

展示自定义样式的用法。

:::lang=en-us
# Customize

- order: 5

Demo the customize style usage.
:::

---

````jsx
import { Transfer } from '@alifd/next';

const dataSource = (() => {
    const dataSource = [];

    for (let i = 0; i < 10; i++) {
        dataSource.push({
            label: i % 3 === 0 ? `content${i}contentcontentcontentcontentcontent` : `content${i}`,
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
        return <Transfer defaultValue={['3']} dataSource={dataSource} listStyle={{ width: '200px', height: '192px' }} defaultLeftChecked={['1']} onChange={this.handleChange} titles={['Source', 'Target']} operations={['>>', '<<']} />;
    }
}

ReactDOM.render(<Demo />, mountNode);
````
