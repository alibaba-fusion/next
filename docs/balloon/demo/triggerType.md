# 三种触发方式

- order: 1

鼠标移入、聚集、点击。

:::lang=en-us
# triggerType

- order: 1

Hover, focus and click.

:::

---

````jsx
import { Button, Balloon } from '@alifd/next';


const content = (<div><p>content</p></div>);
const MoveTarget = <Button style={{margin: '5px'}}>hover</Button>;
const ClickTarget = <Button style={{margin: '5px'}}>click</Button>;
const FocusTarget = <Button style={{margin: '5px'}}>focus</Button>;

const App = () => (
    <div>
        <Balloon trigger={MoveTarget} triggerType="hover">
            {content}
        </Balloon>

        <Balloon trigger={ClickTarget} triggerType="click">
            {content}
        </Balloon>

        <Balloon trigger={FocusTarget} triggerType="focus">
            {content}
        </Balloon>
    </div>
);

ReactDOM.render(<App />, mountNode);

````
