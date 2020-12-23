# 固定宽度偏移

- order: 9

（不支持 IE9 浏览器）列可以向右偏移一定距离，该距离的计算方式和固定宽度列的宽度相同。

:::lang=en-us
# Fixed offset

- order: 9

(IE9 is not supported) Column can be offset to the right by a fixed distance that is calculated in the same way as a fixed-width column.
:::

------

````jsx
import { Grid } from '@alifd/next';

const { Row, Col } = Grid;

ReactDOM.render(
    <div className="offset-fixed-demo">
        <div className="grid-fixed-demo-title">Normal offset, set offset from 1 to 30</div>
        <Row>
            <Col fixedOffset="0">offset-fixed-0</Col>
        </Row>
        <Row>
            <Col fixedOffset="4">offset-fixed-4</Col>
        </Row>
        <Row>
            <Col fixedOffset="8">offset-fixed-8</Col>
        </Row>
        <Row>
            <Col fixedOffset="12">offset-fixed-12</Col>
        </Row>

        <div className="grid-fixed-demo-title">Adaptive offset</div>
        <Row>
            <Col>col</Col>
            <Col fixedOffset="12">offset-fixed-12</Col>
        </Row>
    </div>, mountNode
);
````

````css
.offset-fixed-demo .grid-fixed-demo-title {
    margin-left: 20px;
}

.offset-fixed-demo .next-row {
    margin: 10px 0;
}

.offset-fixed-demo .next-col {
    border:1px solid #CCC;
    border-radius: 3px;
    background-color:#ECECEC;
    height: 30px;
    line-height: 30px;
    text-align: center;
}
````
