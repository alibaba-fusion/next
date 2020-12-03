# 垂直水平对齐

- order: 3

`justify` `align` 等价于`justify-contents` `align-items`，用来设置 `Box` 的主轴方向、垂直主轴方向的对齐方式，即：

- `direction` 为 `row` 时， `align` 控制垂直方向, `justify` 控制水平方向；
- `direction` 为 `column` 时(默认值)， `justify` 控制垂直方向, `align` 控制水平方向。

:::lang=en-us
# align&justify

- order: 3

`justify` `align` same as `justify-contents` `align-items`

:::
---

````jsx
import { Box } from '@alifd/next';

class BoxDemo extends React.Component {
    render() {
        return (
        <div className="list">
            <div className="list-item">
                <Box direction="row" align="center" style={{height: 90}}>
                    <Box className="box-180-50" />
                    <Box className="box-180-50" />
                    <Box className="box-180-50" />
                    <Box className="box-180-50" />
                </Box>
            </div>
            <div className="list-item">
                <Box direction="row" justify="center">
                    <Box className="box-180-50" />
                    <Box className="box-180-50" />
                    <Box className="box-180-50" />
                    <Box className="box-180-50" />
                </Box>
            </div>

            <div className="list-item">
                <Box direction="row" justify="center" padding={20}>
                    <Box className="box-180-50" />
                    <Box className="box-180-50" />
                    <Box className="box-180-50" />
                    <Box className="box-180-50" />
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
.box-180-50 {
    background: #5584FF;
    width: 180px;
    height: 50px;
    border: 1px solid #ddd;
}
.box {
    background: #5584FF;
    min-height: 100%;
}
.distinct {
    background: #46BC15;
}
````
