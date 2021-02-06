# 基本

- order: 0

简单的弹性布局展示，可以通过 `spacing` 控制子元素的间距。

:::lang=en-us
# Basic Usage

- order: 0

Simple usage of Box component.

:::
---

````jsx
import { Box } from '@alifd/next';

class BoxDemo extends React.Component {
    render() {
        return (
        <div className="list">
            <div className="list-item">
                <Box spacing={20}>
                    <div className="border-box height-30" />
                    <div className="border-box height-30" />
                    <div className="border-box height-30" />
                    <div className="border-box height-30" />
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
}
.child {
  width: 100%;
  height: 100%;
  background: 'red';
}
.border-box {
    background: #5584FF;
}
.height-30 {
    height: 30px;
}
````
