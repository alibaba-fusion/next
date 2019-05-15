# 嵌套浮层问题

- order: 6

浮层中如果又有浮层,比如在Balloon中有DatePicker的浮层,需要用safeNode解决datePicker选择时,balloon浮层关闭的问题.

:::lang=en-us
# Nested

- order: 6

When popup is nested in another popup, say DatePicker is nested in Balloon, use safeNode to avoid the unexpected Balloon's closing.

:::

---

````jsx
import { Button, Balloon, DatePicker } from '@alifd/next';
import moment from 'moment';

const primary = <Button className="btrigger">primary</Button>;
const innerButton = <Button className="btrigger">innerButton</Button>;
const dateValue = moment('2018-01-01', 'YYYY-MM-DD', true);

const App = () => (
    <div className="container nested">
        <Balloon type="primary" autoFocus trigger={primary} closable={false} triggerType="click">
            <DatePicker defaultValue={dateValue} popupContainer={
                (trigger) => trigger.parentNode
            } />
        </Balloon>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Balloon type="primary" autoFocus trigger={innerButton} closable={false} triggerType="click">
            <Balloon trigger={<Button type="primary">please click</Button>} popupContainer={(trigger) => trigger.parentNode} triggerType="click">
                nesting balloon content
            </Balloon>
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
