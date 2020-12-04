# 多列垂直方向对齐方式

- order: 10

（不支持 IE9 浏览器）基于 Flex 的 align-items 和 align-self 属性实现，在 `Row` 上设置 `align` 属性，即可控制 `Row` 下面所有 `Col` 的垂直方向对齐方式：top（顶部对齐，默认），center（居中对齐），bottom（底部对齐），baseline（第一行文字的基线对齐），stretch（如果未设置高度或设为 auto，将占满整个容器的高度）；在 `Col` 上设置 `align` 属性，可允许它与其它列不一样的对齐方式，覆盖 `Row` 的 `align` 属性。

:::lang=en-us
# Vertical alignment of columns

- order: 10

(IE9 is not supported) Based on Flex's align-items and align-self attributes, set the `align` property on `Row` to control the vertical alignment of all `Col` below `Row`: top (top alignment, default), center (center alignment), bottom (bottom alignment), baseline (baseline alignment of the first line of text), stretch (if no height is set or set to auto, it will fill the height of the entire container); set the `align` property on `Col`, it can override the `align` property of `Row`.
:::

------

````jsx
import { Grid } from '@alifd/next';

const { Row, Col } = Grid;

ReactDOM.render(
    <div className="align-demo">
        <div className="grid-fixed-demo-title">top</div>
        <Row align="top">
            <Col span="8" style={{ height: '100px', lineHeight: '100px' }}>col-8</Col>
            <Col span="8" style={{ height: '50px', lineHeight: '50px' }}>col-8</Col>
            <Col span="8" style={{ height: '150px', lineHeight: '150px' }}>col-8</Col>
        </Row>

        <div className="grid-fixed-demo-title">center</div>
        <Row align="center">
            <Col span="8" style={{ height: '100px', lineHeight: '100px' }}>col-8</Col>
            <Col span="8" style={{ height: '50px', lineHeight: '50px' }}>col-8</Col>
            <Col span="8" style={{ height: '150px', lineHeight: '150px' }}>col-8</Col>
        </Row>

        <div className="grid-fixed-demo-title">bottom</div>
        <Row align="bottom">
            <Col span="8" style={{ height: '100px', lineHeight: '100px' }}>col-8</Col>
            <Col span="8" style={{ height: '50px', lineHeight: '50px' }}>col-8</Col>
            <Col span="8" style={{ height: '150px', lineHeight: '150px' }}>col-8</Col>
        </Row>

        <div className="grid-fixed-demo-title">baseline</div>
        <Row align="baseline">
            <Col span="8" style={{ height: '100px', paddingTop: '20px', fontSize: '30px' }}>col-8</Col>
            <Col span="8" style={{ height: '50px', paddingTop: '20px', fontSize: '20px' }}>col-8</Col>
            <Col span="8" style={{ height: '150px', paddingTop: '20px', fontSize: '40px' }}>col-8</Col>
        </Row>

        <div className="grid-fixed-demo-title">stretch</div>
        <Row align="stretch" style={{ height: '150px' }}>
            <Col span="8">col-8</Col>
            <Col span="8">col-8</Col>
            <Col span="8">col-8</Col>
        </Row>

        <div className="grid-fixed-demo-title">override</div>
        <Row align="top">
            <Col align="bottom" span="8" style={{ height: '100px', lineHeight: '100px' }}>col-8</Col>
            <Col span="8" style={{ height: '50px', lineHeight: '50px' }}>col-8</Col>
            <Col span="8" style={{ height: '150px', lineHeight: '150px' }}>col-8</Col>
        </Row>
    </div>, mountNode);
````

````css
.align-demo .grid-fixed-demo-title {
    margin-left: 20px;
}

.align-demo .next-row {
    margin: 10px 0;
}

.align-demo .next-col {
    border:1px solid #CCC;
    border-radius: 3px;
    background-color:#ECECEC;
    line-height: 30px;
    text-align: center;
}
````
