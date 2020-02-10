# 排布方向

- order: 1

默认子元素的排布方向为 `column` ， 可以通过 `direction` 参数修改为 `row`

:::lang=en-us
# Direction

- order: 1

Direction is `column` by default, you can set it to `row`.

:::
---

````jsx
import { Box } from '@alifd/next';

class BoxDemo extends React.Component {
    render() {
        return (
        <div className="list">
            <div className="list-item">
                <Box spacing={20} >
                    <div className="box height-30" />
                    <div className="box height-30" />
                    <div className="box height-30" />
                    <div className="box height-30" />
                </Box>
            </div>

            <div className="list-item">
                <Box spacing={20} direction="row">
                    <div className="box width-30 height-30" />
                    <div className="box width-30 height-30" />
                    <div className="box width-30 height-30" />
                    <div className="box width-30 height-30" />
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
  min-height: 30px;
}
.box {
    background: #5584FF;
}

.height-30 {
    height: 30px;
}

.width-30 {
    width: 30px;
}
````
