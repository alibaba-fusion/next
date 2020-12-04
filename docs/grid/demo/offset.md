# 偏移

- order: 8

（不支持 IE9 浏览器）列可以向右偏移一定距离，该距离的计算方式和列所占宽度计算方式相同。

:::lang=en-us
# Offset

- order: 8

(IE9 is not supported) Column can be offset to the right by a distance that is calculated in the same way as a column.
:::

------

````jsx
import { Grid } from '@alifd/next';

const { Row, Col } = Grid;

ReactDOM.render(
    <div className="offset-demo">
        <div className="grid-fixed-demo-title">Normal offset, set offset from 1 to 24</div>
        <Row>
            <Col offset="0">offset-0</Col>
        </Row>
        <Row>
            <Col offset="4">offset-4</Col>
        </Row>
        <Row>
            <Col offset="8">offset-8</Col>
        </Row>
        <Row>
            <Col offset="12">offset-12</Col>
        </Row>

        <div className="grid-fixed-demo-title">Adaptive offset</div>
        <Row>
            <Col>col</Col>
            <Col offset="12">offset-12</Col>
        </Row>
    </div>,
    mountNode
);
````

````css
.offset-demo .grid-fixed-demo-title {
    margin-left: 20px;
}

.offset-demo .next-row {
    margin: 10px 0;
}

.offset-demo .next-col {
    border:1px solid #CCC;
    border-radius: 3px;
    background-color:#ECECEC;
    height: 30px;
    line-height: 30px;
    text-align: center;
}
````
