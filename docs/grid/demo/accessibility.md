# 无障碍键盘操作指南

- order: 13

默认 `<Row>` 和 `<Col>` 会加上 `role="row"` 和 `role="gridcell"`, 但是为了完美的无障碍实现, 开发者还应该在外部容器加上 `role="grid"`。

:::lang=en-us
# Accessibility

- order: 13

Use `role="grid"` to reach better accessibility.
:::

----

````jsx
import { Grid } from '@alifd/next';

const { Row, Col } = Grid;

ReactDOM.render(
    <div role="grid">
        <Row><Col span={6}>1</Col><Col span={6}>2</Col><Col span={6}>3</Col><Col span={6}>4</Col></Row>
        <Row><Col span={6} offset={6}>1</Col><Col span={6} offset={6}>2</Col></Row>
    </div>, mountNode);
````
