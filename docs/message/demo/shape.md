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
import { Message, Radio } from '@alifd/next';

const types = ['success', 'warning', 'error', 'notice', 'help', 'loading'];
const list = [
    {
        value: 'inline',
        label: 'inline'
    }, {
        value: 'addon',
        label: 'addon'
    }, {
        value: 'toast',
        label: 'toast'
    }
];


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
                <Radio.Group defaultValue="inline" dataSource={list} value={this.state.shape} onChange={this.handleSelect} />


                {types.map(type => (
                    <Message key={type} title={type} type={type} shape={shape}>
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
    height: 22px;
    line-height: 22px;
}

.message-shape-demo .next-message-title {
    text-transform: capitalize;
}

.message-shape-demo .next-message {
    margin-top: 10px;
}

.message-shape-demo .next-message.next-message-toast {
    position: relative !important;
}
````
