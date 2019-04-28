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

    onGroupVisibleChange = groupVisible => {
        this.setState({
            groupVisible
        });
    }

    render() {
        return (
            <div>
                <div>
                    <Popup trigger={<button>Open</button>}
                        triggerType="click"
                        visible={this.state.visible}
                        onVisibleChange={this.onVisibleChange}>
                        <span className="overlay-demo">
                            Hello World From Popup!
                        </span>
                    </Popup>
                </div>
                <br />
                <div>
                    <Popup trigger={<button style={{"margin-right": "50px"}} ref={ref => {this.btn1 = ref}}>Paired Popup 1</button>}
                        triggerType="click"
                        visible={this.state.groupVisible}
                        safeNode={[() => this.btn2, () => this.overlay2]}
                        onVisibleChange={this.onGroupVisibleChange}>
                        <span className="overlay-demo" ref={ref => {this.overlay1 = ref}}>
                            Hello World From Popup!
                        </span>
                    </Popup>
                    <Popup trigger={<button ref={ref => {this.btn2 = ref}}>Paired Popup 2</button>}
                        triggerType="click"
                        visible={this.state.groupVisible}
                        safeNode={[() => this.btn1, () => this.overlay1]}
                        onVisibleChange={this.onGroupVisibleChange}>                  
                        <span className="overlay-demo" ref={ref => {this.overlay2 = ref}}>
                            Hello World From Popup!
                        </span>
                    </Popup>
                </div>
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
