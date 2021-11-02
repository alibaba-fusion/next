# 基本

- order: 0

第一个抽屉

:::lang=en-us
# Basic

- order: 0

First drawer
:::
---

````jsx
import { Button, Drawer } from '@alifd/next';

class Demo extends React.Component {
    state = {
        visible: false,
    };

    onOpen = () => {
        this.setState({
            visible: true
        });
    };

    onClose = (reason, e) => {
        console.log('onClose: ', reason, e);
        this.setState({
            visible: false
        });
    }

    render() {
        return (
            <div>
                <Button type="primary" onClick={this.onOpen}> open </Button>
                <Drawer
                    title="标题"
                    placement="right"
                    visible={this.state.visible}
                    onClose={this.onClose}>
                    <div style={{height:1000}}>Start your business here by searching a popular product</div>
                </Drawer>
            </div>
        );
    }
}

ReactDOM.render(<Demo />, mountNode);
````
