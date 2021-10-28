# 箭头指向中间

- order: 4

常见气泡使用类型

:::lang=en-us
# Style Type

- order: 0

Common types of Balloon

:::

---


````jsx
import { Button, Balloon } from '@alifd/next';

const Tooltip = Balloon.Tooltip;

const defaultTrigger = <Button className="btrigger" style={{margin: '5px'}}>Default Align Edge / 默认边缘对齐</Button>;
const pointCenterTrigger = <Button className="btrigger" style={{margin: '5px'}}>Arrow Point To Center / 箭头指向中心</Button>;
const primary = <Button className="btrigger" style={{margin: '5px'}}>primary style</Button>;

const Demo = () => (
    <div className="container">
        <Tooltip v2 trigger={defaultTrigger} align="bl">
            Tooltip Tooltip
        </Tooltip>
        <Tooltip v2 trigger={pointCenterTrigger} arrowPointToCenter align="bl">
            Tooltip Tooltip
        </Tooltip>
    </div>
);

ReactDOM.render(<Demo />, mountNode);

````
