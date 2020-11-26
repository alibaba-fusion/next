# 受控

- order: 1
— debug: true

展示受控的用法。

:::lang=en-us
# Control

- order: 1

Demo the control usage.
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

        this.state = {
            value: ['3']
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(value, data, extra) {
        console.log(value, data, extra);

        this.setState({
            value
        });
    }

    render() {
        return <Transfer value={this.state.value} dataSource={dataSource} defaultLeftChecked={['1']} onChange={this.handleChange} titles={['Title', 'Title']} />;
    }
}

ReactDOM.render(<Demo />, mountNode);
````
