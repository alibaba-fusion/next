# 显示与隐藏

- order: 6

提供了强大的响应式的显示与隐藏功能，支持在不同断点下的显示与隐藏。

:::lang=en-us
# Display and hide

- order: 6

Provides a powerful responsive display and hide functionality under different breakpoints.
:::

------

````jsx
import { Grid } from '@alifd/next';

const { Row, Col } = Grid;

ReactDOM.render(
    <div className="hidden-demo">
        <div className="demo-title">Hide columns under all breakpoints, resize browser to see if the second column is hidden or shown</div>
        <Row>
            <Col span="8">col-8</Col>
            <Col span="16" hidden>col-16</Col>
        </Row>

        <div className="demo-title">Hide columns under a breakpoint such as xs, resize browser to see if the second column is hidden or shown</div>
        <Row>
            <Col span="8">col-8</Col>
            <Col span="16" hidden="xs">col-16</Col>
        </Row>

        <div className="demo-title">Hide columns under some breakpoints such as xs and s, resize browser to see if the second column is hidden or shown</div>
        <Row>
            <Col span="8">col-8</Col>
            <Col span="16" hidden={['xs', 's']}>col-16</Col>
        </Row>
    </div>, mountNode);
````

````css
.hidden-demo .demo-title {
    margin-left: 20px;
}

.hidden-demo .next-row {
    margin: 10px 0;
}

.hidden-demo .next-col {
    border:1px solid #CCC;
    border-radius: 3px;
    background-color:#ECECEC;
    height: 30px;
    line-height: 30px;
    text-align: center;
}
````
