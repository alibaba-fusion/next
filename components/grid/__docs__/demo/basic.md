# 基础布局

- order: 0

通过 `Col` 的 `span` 属性指定该列宽度占整行宽度24分之几或5分之几。

:::lang=en-us
# Basic layout

- order: 0

Use the `span` property of `Col` to specify the width of the column.
:::

----

````jsx
import { Grid } from '@alifd/next';

const { Row, Col } = Grid;

ReactDOM.render(
    <div className="basic-demo">
        <div className="grid-fixed-demo-title">One</div>
        <Row>
            <Col span="24">col-24</Col>
        </Row>

        <div className="grid-fixed-demo-title">Two</div>
        <Row>
            <Col span="12">col-12</Col>
            <Col span="12">col-12</Col>
        </Row>

        <div className="grid-fixed-demo-title">Three</div>
        <Row>
            <Col span="8">col-8</Col>
            <Col span="8">col-8</Col>
            <Col span="8">col-8</Col>
        </Row>

        <div className="grid-fixed-demo-title">Four</div>
        <Row>
            <Col span="6">col-6</Col>
            <Col span="6">col-6</Col>
            <Col span="6">col-6</Col>
            <Col span="6">col-6</Col>
        </Row>

        <div className="grid-fixed-demo-title">Five</div>
        <Row>
            <Col span="1p5">col-1p5</Col>
            <Col span="1p5">col-1p5</Col>
            <Col span="1p5">col-1p5</Col>
            <Col span="1p5">col-1p5</Col>
            <Col span="1p5">col-1p5</Col>
        </Row>

        <div className="grid-fixed-demo-title">Six</div>
        <Row>
            <Col span="4">col-4</Col>
            <Col span="4">col-4</Col>
            <Col span="4">col-4</Col>
            <Col span="4">col-4</Col>
            <Col span="4">col-4</Col>
            <Col span="4">col-4</Col>
        </Row>
    </div>, mountNode);
````

````css
.basic-demo .grid-fixed-demo-title {
    margin-left: 20px;
}

.basic-demo .next-row {
    margin: 10px 0;
}

.basic-demo .next-col {
    border:1px solid #CCC;
    border-radius: 3px;
    background-color:#ECECEC;
    height: 30px;
    line-height: 30px;
    text-align: center;
}
````
