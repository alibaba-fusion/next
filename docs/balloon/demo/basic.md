# 类型

- order: 0

常见气泡使用类型

:::lang=en-us
# Style Type

- order: 0

Common types of Balloon

:::

---


````jsx
import { Button, Balloon } from '@alifd/next';

const defaultTrigger = <Button className="btrigger" style={{margin: '5px'}}>default style</Button>;
const disabledTrigger = <Button disabled className="btrigger" style={{margin: '5px'}}>default style</Button>;
const primary = <Button className="btrigger" style={{margin: '5px'}}>primary style</Button>;

const Demo = () => (
    <div className="container">
        <Balloon v2 trigger={defaultTrigger} closable={false}>
            default
        </Balloon>
        <Balloon v2 type="primary" trigger={primary} triggerType="click">
            primary
        </Balloon>
        <Balloon v2 trigger={disabledTrigger} closable={false}>
            disabeled default
        </Balloon>
    </div>
);

ReactDOM.render(<Demo />, mountNode);

````
