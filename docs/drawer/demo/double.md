# 双层抽屉

- order: 2

双层抽屉，抽屉内打开新的抽屉

:::lang=en-us
# Basic

- order: 2

Double drawer
:::
---

````jsx
import { Button, Drawer } from '@alifd/next';

class App extends React.Component {
  state = { visible: false, childrenDrawer: false };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  showChildrenDrawer = () => {
    this.setState({
      childrenDrawer: true,
    });
  };

  onChildrenDrawerClose = () => {
    this.setState({
      childrenDrawer: false,
    });
  };

  render() {
    return (
      <div>
        <Button type="primary" onClick={this.showDrawer}>
          Open drawer
        </Button>
        <Drawer
            title="Multi-level drawer"
            width={520}
            closeable={'mask'}
            onClose={this.onClose}
            visible={this.state.visible}
        >
            <Button type="primary" onClick={this.showChildrenDrawer}>
                Two-level drawer
            </Button>
            <div style={{ height: 800, marginTop: 40}}>很长的内容</div>
            <div style={{ marginBottom: 40}}>底部的内容</div>

            <Drawer
                title="Two-level Drawer"
                width={320}
                closeable={'mask'}
                onClose={this.onChildrenDrawerClose}
                visible={this.state.childrenDrawer}
            >
                This is two-level drawer
            </Drawer>
            <div
                style={{
                position: 'absolute',
                bottom: 0,
                width: '100%',
                borderTop: '1px solid #e8e8e8',
                padding: '10px 16px',
                textAlign: 'right',
                left: 0,
                background: '#fff',
                borderRadius: '0 0 4px 4px',
                }}
            >
                <Button
                    style={{
                        marginRight: 8,
                    }}
                    onClick={this.onClose}
                >
                    Cancel
                </Button>
                <Button onClick={this.onClose} type="primary">
                    Submit
                </Button>
            </div>
        </Drawer>
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);
````
