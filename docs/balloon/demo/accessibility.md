# 无障碍

- order: 7

弹层id, 传入值才会支持无障碍。

:::lang=en-us

id of popup. only when you set value, balloon will support accessibility.

# Addon

- order: 7

:::
---

````jsx

import { Button, Balloon } from '@alifd/next';

const { Tooltip } = Balloon;

const triggerBallon = <Button style={{margin: '5px'}}>show balloon</Button>;
const triggerTooltip = <Button style={{margin: '5px'}}>show tooltip</Button>;
const Demo = () => (
    <div className="container">
        <Balloon trigger={triggerBallon} triggerType="click"  id="aria-balloon">
            <p>This is content for balloon</p>
        </Balloon>

        <Tooltip trigger={triggerTooltip} id="aria-tooltip">
            <p>This is content for tooltip.</p>
        </Tooltip>
    </div>
);

ReactDOM.render(<Demo />, mountNode);
````
