# 基本

- order: 0

最简单的用法。

:::lang=en-us
# Basic

- order: 0

Basic usage.

:::

---

````jsx
import { Button, Balloon } from '@alifd/next';



const defaultTrigger = <Button className="btrigger" style={{margin: '5px'}}>default style</Button>;
const primary = <Button className="btrigger" style={{margin: '5px'}}>primary style</Button>;


const Demo = () => (
    <div className="container">
        <Balloon trigger={defaultTrigger} closable={false}>
            default
        </Balloon>
        <Balloon type="primary" trigger={primary} triggerType="click">
            primary
        </Balloon>
    </div>
);

ReactDOM.render(<Demo />, mountNode);

````
