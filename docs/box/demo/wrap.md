# 折行

- order: 4

默认不折行，可以通过设置 `wrap` 控制折行

:::lang=en-us
# wrap

- order: 4

`wrap` is false by default.

:::
---

````jsx
import { Box, Switch } from '@alifd/next';

class BoxDemo extends React.Component {
    state = {
        wrap: true,
    };
    onSwitchChange = (checked) => {
        this.setState({
            wrap: checked
        });
    };
    render() {
        return (
        <div className="list">
            <Switch style={{ width: 70 }} defaultChecked checkedChildren="wrap" onChange={this.onSwitchChange} />
            <div className="list-item">
                <Box spacing={20} wrap={this.state.wrap} direction="row">
                    <div className="box-180-50" />
                    <div className="box-180-50" />
                    <div className="box-180-50" />
                    <div className="box-180-50" />
                    <div className="box-180-50" />
                    <div className="box-180-50" />
                    <div className="box-180-50" />
                    <div className="box-180-50" />
                    <div className="box-180-50" />
                </Box>
            </div>
        </div>
        );
    }
}

ReactDOM.render(<BoxDemo />, mountNode);
````
````css
.list {
  position: relative;
}
.list-item {
  position: relative;
  background: #ddd;
  border: 1px solid #eee;
  margin-bottom: 20px;
  min-height: 50px;
}
.box-180-50 {
    background: #5584FF;
    width: 180px;
    height: 50px;
}
````
