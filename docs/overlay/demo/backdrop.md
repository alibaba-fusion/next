
# 遮罩层

- order: 1

带有遮罩的弹层。

:::lang=en-us
# Mask

- order: 1

The overlay with mask.
:::

---

````jsx
import { Overlay, Button } from '@alifd/next';

class Demo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            visible: false
        };
    }

    onClick = () => {
        this.setState({
            visible: true
        });
    }

    onClose = () => {
        this.setState({
            visible: false
        });
    }

    render() {
        return (
            <div>
                <Button onClick={this.onClick} ref={ref => {
                    this.btn = ref;
                }}>
                    Open
                </Button>
                <Overlay visible={this.state.visible}
                    safeNode={() => this.btn}
                    align="cc cc"
                    hasMask
                    disableScroll
                    onRequestClose={this.onClose}>
                    <span className="overlay-demo">
                        Hello World From Overlay!
                    </span>
                </Overlay>
            </div>
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
    border: 1px solid #efefef;
    background: #FFFFFF;
    box-shadow: 2px 2px 20px rgba(0,0,0,0.15);
}
````
