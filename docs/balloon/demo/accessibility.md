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

const ClickTarget = <Button style={{margin: '5px'}}>click</Button>;
const Demo = () => (
    <div className="container">
        <Balloon trigger={ClickTarget} triggerType="click"  id="aria">
            <p    > content    </p>
        </Balloon>
    </div>
);

ReactDOM.render(<Demo />, mountNode);
````
