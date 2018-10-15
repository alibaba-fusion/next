# 触发的弹层受控显示隐藏

- order: 3

展示了 Popup 受控显示隐藏的用法。

:::lang=en-us
# Popup under control

- order: 3

Demos Popup under control usage.
:::

---

````jsx
import { Overlay } from '@alifd/next';

const { Popup } = Overlay;

class Demo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            visible: false
        };
    }

    onVisibleChange = visible => {
        this.setState({
            visible
        });
    }

    render() {
        return (
            <Popup trigger={<button>Open</button>}
                triggerType="click"
                visible={this.state.visible}
                onVisibleChange={this.onVisibleChange}>
                <span className="overlay-demo">
                    Hello World From Popup!
                </span>
            </Popup>
        );
    }
}

ReactDOM.render(<Demo />, mountNode);
````

````css
.overlay-demo {
    width: 300px;
    height: 100px;
    padding: 10px;
    border: 1px solid #999999;
    background: #FFFFFF;
    box-shadow: 2px 2px 20px rgba(0,0,0,0.15);
}
````
