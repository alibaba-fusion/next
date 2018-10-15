
# 基本

- order: 0

弹出一个弹层。

:::lang=en-us
# Basic

- order: 0

Pop up a overlay.
:::

---

````jsx
import { Overlay } from '@alifd/next';

class Demo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            visible: false
        };
    }

    onClick = () => {
        this.setState({
            visible: !this.state.visible
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
                <button onClick={this.onClick} ref={ref => {
                    this.btn = ref;
                }}>
                    Toggle visible
                </button>
                <Overlay visible={this.state.visible}
                    target={() => this.btn}
                    safeNode={() => this.btn}
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
    border: 1px solid #999999;
    background: #FFFFFF;
    box-shadow: 2px 2px 20px rgba(0,0,0,0.15);
}
````
