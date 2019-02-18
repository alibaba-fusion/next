# tooltip

- order: 7

简化的Balloon, 只能设置align, trigger和children, 触发条件是hover.

:::lang=en-us
# tooltip

- order: 7

Simplified Balloon, which can only set align, trigger and children, and triggered by hovering.

:::

---

````jsx
import { Button, Balloon } from '@alifd/next';



const Tooltip = Balloon.Tooltip;

const top = <Button style={{margin: '5px'}} id="top" className="btrigger">top</Button>;
const right = <Button style={{margin: '5px'}}id="right" className="btrigger">right</Button>;
const bottom = <Button style={{margin: '5px'}} id="bottom" className="btrigger">bottom</Button>;
const left = <Button style={{margin: '5px'}} id="left" className="btrigger">left</Button>;
const topLeft = <Button style={{margin: '5px'}} id="topLeft" className="btrigger">top left</Button>;
const topRight = <Button style={{margin: '5px'}} id="topRight" className="btrigger">top right</Button>;
const rightTop = <Button style={{margin: '5px'}} id="rightTop" className="btrigger">right top</Button>;
const rightBottom = <Button style={{margin: '5px'}} id="rightBottom" className="btrigger">right bottom</Button>;
const bottomLeft = <Button style={{margin: '5px'}} id="bottomLeft" className="btrigger">bottom left</Button>;
const bottomRight = <Button style={{margin: '5px'}} id="bottomRight" className="btrigger">bottom right</Button>;
const leftTop = <Button style={{margin: '5px'}} id="leftTop" className="btrigger">left top</Button>;
const leftBottom = <Button style={{margin: '5px'}} id="leftBottom" className="btrigger">left bottom</Button>;

const App = () => (
    <div style={{paddingLeft: 220, paddingTop: 100}}>
        <div style={{marginLeft: 75}}>
            <Tooltip trigger={topLeft} align="tl">text text</Tooltip>
            <Tooltip trigger={top} align="t">text text</Tooltip>
            <Tooltip trigger={topRight} align="tr">text text</Tooltip>
        </div>
        <div style={{width: 80, float: 'left'}}>
            <Tooltip trigger={leftTop} align="lt">text text</Tooltip>
            <Tooltip trigger={left} align="l">text text</Tooltip>
            <Tooltip trigger={leftBottom} align="lb">text text</Tooltip>
        </div>
        <div style={{width: 80, marginLeft: 290}}>
            <Tooltip trigger={rightTop} align="rt">text text</Tooltip>
            <Tooltip trigger={right} align="r">text text</Tooltip>
            <Tooltip trigger={rightBottom} align="rb">text text</Tooltip>
        </div>
        <div style={{marginLeft: 80, clear: 'both'}}>
            <Tooltip trigger={bottomLeft} align="bl">text text</Tooltip>
            <Tooltip trigger={bottom} align="b">text text</Tooltip>
            <Tooltip trigger={bottomRight} align="br">text text</Tooltip>
        </div>
    </div>

);

ReactDOM.render(<App />, mountNode);

````

````css
.code-box-demo .sui-btn {
    margin-right: 1em;
    margin-bottom: 1em;
}
````
