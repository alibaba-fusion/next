# 提示尺寸与外观

- order: 2

通过`size`和`shape`调整信息提示的尺寸和外观。

:::lang=en-us
# Size and Shape

- order: 2

You can control the size and shape of message by setting the `size` and `shape` property.
:::

---

````jsx
import { Message, Radio } from '@alifd/next';

const types = ['success', 'warning', 'error', 'notice', 'help', 'loading'];
const sizeList = [
    {
        value: 'medium',
        label: 'medium'
    }, {
        value: 'large',
        label: 'large'
    }
];
const shapeList = [
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
            size: 'medium',
            shape: 'inline',
        };
    }

    handleSize = (size) => {
        this.setState({ size });
    }

    handleShape = (shape) => {
        this.setState({ shape });
    }

    render() {
        const { size, shape } = this.state;

        return (
            <div>
                <span className="demo-label">Select Size：</span>
                <Radio.Group defaultValue="medium" dataSource={sizeList} value={this.state.size} onChange={this.handleSize} />
                <br/>
                <br/>
                <span className="demo-label">Select Shape：</span>
                <Radio.Group defaultValue="inline" dataSource={shapeList} value={this.state.shape} onChange={this.handleShape} />
                <br/>
                <br/>
                <div className="message-size-shape-demo">
                    {types.map(type => (
                        <Message key={type} title={type} type={type} size={size} shape={shape}>
                            Content Content Content Content
                        </Message>
                    ))}
                </div>
            </div>
        );
    }
}

ReactDOM.render(<Demo />, mountNode);
````

````css
.message-size-shape-demo .next-message {
    display: inline-block;
    margin: 10px;
}

.message-size-shape-demo .next-message-title {
    text-transform: capitalize;
}
````
