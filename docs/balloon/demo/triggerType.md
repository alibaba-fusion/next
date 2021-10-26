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
import { Button, Balloon, Input } from '@alifd/next';

const content = (<div><p>content</p></div>);
const MoveTarget = <Button style={{margin: '5px'}}>hover</Button>;
const ClickTarget = <Button style={{margin: '5px'}}>click</Button>;
const FocusTarget = <Button style={{margin: '5px'}}>focus</Button>;

const HoverInputTarget = <Input placeholder="hover" style={{marginRight: '20px'}}/>;
const ClickInputTarget = <Input placeholder="click" style={{marginRight: '20px'}}/>;
const FocusInputTarget = <Input placeholder="focus" />;

const App = () => (
    <div>
        <Balloon v2 trigger={MoveTarget} triggerType="hover">
            {content}
        </Balloon>

        <Balloon v2 trigger={ClickTarget} triggerType="click">
            {content}
        </Balloon>

        <Balloon v2 trigger={FocusTarget} triggerType="focus">
            {content}
        </Balloon>

        <br/>
        <br/>

        <Balloon v2 trigger={HoverInputTarget} triggerType="hover">
            {content}
        </Balloon>
        <Balloon v2 trigger={ClickInputTarget} triggerType="click">
            {content}
        </Balloon>
        <Balloon v2 trigger={FocusInputTarget} triggerType="focus">
            {content}
        </Balloon>
    </div>
);

ReactDOM.render(<App />, mountNode);

````
