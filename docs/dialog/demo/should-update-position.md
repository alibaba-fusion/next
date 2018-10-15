# 更新位置

- order: 3

通过设置 shouldUpdatePosition 为 true 来及时更新对话框的位置，一般用于对话框内容发生变化但是仍然要保证原来对齐方式的情况

:::lang=en-us
# Update position

- order: 3

Update the position of the dialog by setting shouldUpdatePosition to true. It is generally used to change the contents of the dialog but still ensure the original alignment.
:::

---

````jsx
import { Switch, Button, Dialog } from '@alifd/next';


const shortContent = <p>Start your business here by searching a popular product</p>;
const longContent = [
    <p key="0">Start your business here by searching a popular product</p>,
    <p key="1">Start your business here by searching a popular product</p>,
    <p key="2">Start your business here by searching a popular product</p>,
    <p key="3">Start your business here by searching a popular product</p>
];

class App extends React.Component {
    state = {
        visible: false,
        short: true,
        shouldUpdatePosition: true
    }

    onOpen = () => {
        this.setState({
            visible: true,
            short: true
        });
    };

    onClose = () => {
        this.setState({
            visible: false
        });
    };

    toggleShouldUpdatePosition = () => {
        this.setState({
            shouldUpdatePosition: !this.state.shouldUpdatePosition
        });
    };

    modifyContent = () => {
        this.setState({
            short: !this.state.short
        });
    };

    render() {
        const { visible, short, shouldUpdatePosition } = this.state;

        return (
            <div>
                <div style={{ display: 'block', marginBottom: '10px' }}>
                    Whether to update the dialog position when the dialog height changes:
                </div>
                <Switch style={{ display: 'block', marginBottom: '10px' }} checked={shouldUpdatePosition} onChange={this.toggleShouldUpdatePosition} />
                <Button onClick={this.onOpen} type="primary">
                    Open dialog
                </Button>
                <Dialog title="Welcome to Alibaba.com"
                    visible={visible}
                    onOk={this.onClose.bind(this, 'okClick')}
                    onCancel={this.onClose.bind(this, 'cancelClick')}
                    onClose={this.onClose}
                    shouldUpdatePosition={shouldUpdatePosition}>
                    <Button type="primary" onClick={this.modifyContent}>
                        Change content
                    </Button>
                    {short ? shortContent : longContent}
                </Dialog>
            </div>
        );
    }
}

ReactDOM.render(<App/>, mountNode);
````
