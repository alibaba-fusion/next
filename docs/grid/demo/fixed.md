# 固定宽度列

- order: 1

通过 `Col` 的 `fixedSpan` 属性来指定某列为固定宽度列，其宽度的计算方式为 20 * fixedSpan。

:::lang=en-us
# Fixed width column

- order: 1

The `fixedSpan` property of `Col` specifies a column as a fixed-width column whose width is calculated as 20 * fixedSpan.
:::

------

````jsx
import { Grid } from '@alifd/next';

const { Row, Col } = Grid;

ReactDOM.render(
    <div className="mixin-demo">
        <div className="demo-title">Two-column layout, left column fixed, right column adaptive</div>
        <Row>
            <Col fixedSpan="16">col-fixed-16</Col>
            <Col>col</Col>
        </Row>

        <div className="demo-title">Two-column layout, right column fixed, left column adaptive</div>
        <Row>
            <Col>col</Col>
            <Col fixedSpan="16">col-fixed-16</Col>
        </Row>

        <div className="demo-title">Three-column layout, left column and right column fixed, middle column adaptive</div>
        <Row>
            <Col fixedSpan="8">col-fixed-8</Col>
            <Col>col</Col>
            <Col fixedSpan="8">col-fixed-8</Col>
        </Row>
    </div>, mountNode);
````

````css
.mixin-demo .demo-title {
    margin-left: 20px;
}

.mixin-demo .next-row {
    margin: 10px 0;
}

.mixin-demo .next-col {
    border:1px solid #CCC;
    border-radius: 3px;
    background-color:#ECECEC;
    height: 30px;
    line-height: 30px;
    text-align: center;
}
````
