# 信息尺寸

- order: 2

通过`size`设置尺寸

:::lang=en-us
# Size

- order: 2

You can control the size of message by setting the `size` property.
:::

---

````jsx
import { Message, Radio } from '@alifd/next';

const types = ['success', 'warning', 'error', 'notice', 'help', 'loading'];
const list = [
    {
        value: 'medium',
        label: 'medium'
    }, {
        value: 'large',
        label: 'large'
    }
];

class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            size: 'medium'
        };
        this.handleSelect = this.handleSelect.bind(this);
    }

    handleSelect(size) {
        this.setState({ size });
    }

    render() {
        const { size } = this.state;

        return (
            <div className="message-size-demo">
                <span className="demo-label">Select Size：</span>
                <Radio.Group defaultValue="medium" dataSource={list} value={this.state.size} onChange={this.handleSelect} />

                {types.map(type => (
                    <Message key={type} title={type} type={type} size={size}>
                        Content Content Content Content
                    </Message>
                ))}
            </div>
        );
    }
}

ReactDOM.render(<Demo />, mountNode);
````

````css
.message-size-demo .demo-label {
    display: inline-block;
    vertical-align: top;
    height: 28px;
    line-height: 28px;
}

.message-size-demo .next-message-title {
    text-transform: capitalize;
}

.message-size-demo .next-message {
    margin-top: 10px;
}
````
