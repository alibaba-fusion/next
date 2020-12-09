# 溢出后是否换行

- order: 3

（不支持 IE9 浏览器）默认列在行中宽度溢出后不会换行，如果想自动换行，请为 `Row` 设置 `wrap` 为 true。

:::lang=en-us
# Wrap while overflow

- order: 3

(IE9 is not supported) Default the column is no longer wrapped when the width overflows. If you want to wrap automatically, set `wrap` of `Row` to true.
:::

----

````jsx
import { Grid } from '@alifd/next';

const { Row, Col } = Grid;

ReactDOM.render(
    <div className="wrap-demo">
        <div className="grid-fixed-demo-title">No wrap</div>
        <Row>
            <Col span="6">col-6</Col>
            <Col span="6">col-6</Col>
            <Col span="6">col-6</Col>
            <Col span="8">col-8</Col>
        </Row>
        <div className="grid-fixed-demo-title">Wrap</div>
        <Row wrap>
            <Col span="6">col-6</Col>
            <Col span="6">col-6</Col>
            <Col span="6">col-6</Col>
            <Col span="8">col-8</Col>
        </Row>
    </div>, mountNode);
````

````css
.wrap-demo .grid-fixed-demo-title {
    margin-left: 20px;
}

.wrap-demo .next-row {
    margin: 10px 0;
}

.wrap-demo .next-col {
    border:1px solid #CCC;
    border-radius: 3px;
    background-color:#ECECEC;
    height: 30px;
    line-height: 30px;
    text-align: center;
}
````
