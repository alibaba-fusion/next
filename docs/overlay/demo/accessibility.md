# 无障碍

- order: 7

通过设置`tabIndex`读取，请参考`ARIA and KeyBoard`。

:::lang=en-us
# Accessibility

- order: 7

Read this by setting `tabIndex` ,Please refer to `ARIA and KeyBoard`.

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
    };
    onClick = () => {
        this.setState({
            visible: !this.state.visible
        });
    };
    onClose = () => {
        this.setState({
            visible: false
        });
    };
    render() {
        return (
            <div>
                <button onClick={this.onClick} ref={ref => {
                    this.btn = ref;
                }}>
                    overlay accessibility
                </button>
                <Overlay visible={this.state.visible}
                    autoFocus
                    target={() => this.btn}
                    safeNode={() => this.btn}
                    onRequestClose={this.onClose}>
                    <span className="overlay-demo" tabIndex="0">
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
