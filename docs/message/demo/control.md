# 受控显示隐藏

- order: 4

:::lang=en-us
# Show and hide under controll

- order: 4
:::

---

````jsx
import { Message, Button } from '@alifd/next';

class App extends React.Component {
    state = {
        visible: true
    }

    handleChange = () => {
        this.setState({
            visible: !this.state.visible
        });
    }

    handleClose = () => {
        this.setState({
            visible: false
        });
    }

    render() {
        const { visible } = this.state;

        return (
            <div className="control-demo">
                <Button onClick={this.handleChange}>Toggle Visible</Button>
                <Message type="warning" visible={visible} title="Warning" closeable onClose={this.handleClose}>
                    This item already has the label "travel". You can add a new label.
                </Message>
            </div>
        );
    }
}

ReactDOM.render(<App />, mountNode);
````

````css
.control-demo .next-btn.next-medium {
    margin-bottom: 10px;
}
````
