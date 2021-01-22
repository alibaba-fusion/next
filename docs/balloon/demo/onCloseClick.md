# close按钮事件，手动控制visible

- order: 5

使用 `visible`,属性控制浮层显示, 使balloon变为受限组件。

:::lang=en-us
# onCloseClick

- order: 5

When popup is nested in another popup, say DatePicker is nested in Balloon, use safeNode to avoid the unexpected Balloon's closing.

:::

---

````jsx
import { Button, Balloon } from '@alifd/next';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        };
    }

    // triggered every time visible becomes false
    onClose() {
        console.log('onClose doing!');
    }

    onClick() {
        this.setState({visible: true});
    }

    render() {
        const visibleTrigger = <Button onClick={this.onClick.bind(this)} type="primary">click to pupup the card</Button>;
        const content = (<div>content</div>);

        return (
            <div>
                <Balloon trigger={visibleTrigger}
                    triggerType="click"
                    visible={this.state.visible}
                    onClose={this.onClose.bind(this)} >
                    {content}
                </Balloon>
            </div>
        );
    }
}

ReactDOM.render(<App />, mountNode);

````
