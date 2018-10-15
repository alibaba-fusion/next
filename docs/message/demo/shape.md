# 信息外观

- order: 1

通过设置`shape`调整信息外观

:::lang=en-us
# Shape

- order: 1

You can control the shape of message by setting the `shape` property.
:::

---

````jsx
import { Message, Select } from '@alifd/next';


const Option = Select.Option;

const types = ['success', 'warning', 'error', 'notice', 'help', 'loading'];

class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            shape: 'inline'
        };
        this.handleSelect = this.handleSelect.bind(this);
    }

    handleSelect(shape) {
        this.setState({ shape });
    }

    render() {
        const { shape } = this.state;

        return (
            <div className="message-shape-demo">
                <span className="demo-label">Select Shape：</span>
                <Select defaultValue="inline" onChange={this.handleSelect} autoWidth={false}>
                    <Option value="inline">Inline</Option>
                    <Option value="addon">Addon</Option>
                    <Option value="toast">Toast</Option>
                </Select>

                {types.map(type => (
                    <Message key={type} title="title" type={type} shape={shape}>
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
.message-shape-demo .demo-label {
    display: inline-block;
    vertical-align: top;
    height: 28px;
    line-height: 28px;
}

.message-shape-demo .next-message {
    margin-top: 10px;
}

.message-shape-demo .next-message.next-message-toast {
    position: relative !important;
}
````
