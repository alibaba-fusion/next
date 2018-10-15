# 自定义元素渲染类型

- order: 12

使用 `component` 来指定需要渲染的元素类型，默认为 `div`

:::lang=en-us
# Customize rendered type of the element

- order: 12

Use `component` property to customize rendered type of the element.
:::

----

````jsx
import { Grid } from '@alifd/next';

const { Row, Col } = Grid;

ReactDOM.render(
    <div className="basic-demo">
        <div className="demo-title">Rendered as `ul` and `li`</div>
        <Row component="ul">
            <Col span="12" component="li">col-12</Col>
            <Col span="12" component="li">col-12</Col>
        </Row>
    </div>, mountNode);
````

````css
.basic-demo ul {
    list-style: none;
    padding: 0;
}

.basic-demo .demo-title {
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
