# 无障碍

- order: 7

弹层id, 传入值才会支持无障碍。

:::lang=en-us
# Accessibility

- order: 7

id of popup. only when you set value, balloon will support accessibility.

:::

---

````jsx

import { Button, Balloon, Input } from '@alifd/next';
import moment from 'moment';

const innerButton = <Button className="btrigger">Fill in form</Button>;

const App = () => (
    <div className="container nested">
        <Balloon id="inner-a11y-balloon-1" autoFocus trigger={<Button type="primary">Fill in sub-form</Button>} popupContainer={(trigger) => trigger.parentNode} triggerType="click">
            please input your age:
            <Input placeholder="Age" size="small" label="Age :" id="balloon-input-1" /><br /><br />
        </Balloon>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

        <Balloon id="a11y-balloon" type="primary" autoFocus trigger={innerButton} triggerType="click">
            <Balloon id="inner-a11y-balloon" autoFocus trigger={<Button type="primary">Fill in sub-form</Button>} popupContainer={(trigger) => trigger.parentNode} triggerType="click">
                please input your age:
                <Input placeholder="Age" size="small" label="Age :" id="balloon-input-2" /><br /><br />
            </Balloon>
            <br />
            please input your name:
            <Input placeholder="Name" size="small" label="Name :" id="balloon-input-3" /><br /><br />
        </Balloon>
    </div>
);

ReactDOM.render(<App />, mountNode);
````

```css

.container.nested {
    margin-left: 100px;
    margin-bottom: 50px;
}

```
