# 嵌套布局

- order: 4

`Col` 下也可嵌套 `Row`，以完成更细致的布局。

:::lang=en-us
# Nested layout

- order: 4

`Row` can also be nested under `Col` to create a more detailed layout.
:::

----

````jsx
import { Grid } from '@alifd/next';

const { Row, Col } = Grid;

ReactDOM.render(
    <div className="nest-demo">
        <Row className="demo-row">
            <Col span="10">
                <Row>
                    <Col span="6">
                        <div className="demo-col-inset">col-10-6</div>
                    </Col>
                    <Col span="18">
                        <div className="demo-col-inset">col-10-18</div>
                    </Col>
                </Row>
            </Col>
            <Col span="14">
                <Row>
                    <Col span="18">
                        <div className="demo-col-inset">col-14-18</div>
                    </Col>
                    <Col span="6">
                        <div className="demo-col-inset">col-14-6</div>
                    </Col>
                </Row>
            </Col>
        </Row>
    </div>, mountNode);
````

````css
.nest-demo .demo-title {
    margin-left: 20px;
}

.nest-demo .demo-row {
    margin: 10px 0;
}

.nest-demo .demo-col-inset {
    border:1px solid #CCC;
    border-radius: 3px;
    background-color:#ECECEC;
    height: 30px;
    line-height: 30px;
    text-align: center;
}
````
