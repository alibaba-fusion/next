# 内外边距

- order: 2

可以通过 `padding` `margin` 设置 `Box` 的内、外边距， `[10, 5]` 表示上下方向为10，左右方向为5。

:::lang=en-us
# Padding and Margin

- order: 2

Use `padding` `margin` directly, same as `<Box style={{padding, margin}}>`, [10, 5] stands for 10 of top & bottom, 5 of left & right.

:::
---

````jsx
import { Box } from '@alifd/next';

class BoxDemo extends React.Component {
    render() {
        return (
        <div className="list">
            <div className="list-item">
                <Box direction="row" align="center" padding={20} className="box">
                    <div className="box-180-50" />
                    <div className="box-180-50" />
                    <div className="box-180-50" />
                    <div className="box-180-50" />
                </Box>
            </div>
            <div className="list-item">
                <Box direction="row">
                    <Box className="box-180-50 box" />
                    <Box className="box-180-50 box" />
                    <Box margin={[0, 20]} className="box-180-50 box" />
                    <Box className="box-180-50 box" />
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
    width: 180px;
    height: 50px;
    border: 1px solid #5584FF;
    background: #FFF;
}
.box {
    background: #5584FF;
    min-height: 100%;
    border: 1px solid #ddd;
}
.distinct {
    background: #46BC15;
}
````
