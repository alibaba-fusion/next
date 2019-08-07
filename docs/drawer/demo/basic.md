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

    onVisibleChange = (visible, reason, e) => {
        console.log(reason, visible);

        this.setState({
            visible
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
                    id="tessss"
                    visible={this.state.visible}
                    placement={this.state.placement}
                    onVisibleChange={this.onVisibleChange}>
                    Start your business here by searching a popular product
                </Drawer>
            </div>
        );
    }
}

ReactDOM.render(<Demo />, mountNode);
````
