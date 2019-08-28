# 自定义弹出方向

- order: 1

自定义弹出方向

:::lang=en-us
# Basic

- order: 1

Diffrent placement
:::
---

````jsx
import { Radio, Button, Drawer } from '@alifd/next';

class Demo extends React.Component {
    state = {
        visible: false,
        placement: 'right'
    };

    onOpen = () => {
        this.setState({
            visible: true
        });
    };

    onClose = (reason) => {

        this.setState({
            visible: false
        });
    };

    onPlacementChange = dir => {
        this.setState({
            placement: dir
        });
    }

    render() {
        return (
            <div>
                <Radio.Group
                    dataSource={['right', 'bottom', 'left', 'top']}
                    defaultValue={'right'}
                    onChange={this.onPlacementChange}
                /> &nbsp;&nbsp;&nbsp;&nbsp;
                <Button type="primary" onClick={this.onOpen}> open </Button>
                <Drawer
                    title="标题"
                    visible={this.state.visible}
                    placement={this.state.placement}
                    onClose={this.onClose}>
                    Start your business here by searching a popular product
                </Drawer>
            </div>
        );
    }
}

ReactDOM.render(<Demo />, mountNode);
````
