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
import { Message, Select } from '@alifd/next';


const Option = Select.Option;

const types = ['success', 'warning', 'error', 'notice', 'help', 'loading'];

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
                <Select defaultValue="medium" onChange={this.handleSelect}>
                    <Option value="medium">Medium</Option>
                    <Option value="large">Large</Option>
                </Select>

                {types.map(type => (
                    <Message key={type} title="title" type={type} size={size}>
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

.message-size-demo .next-message {
    margin-top: 10px;
}
````
