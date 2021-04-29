# 边缘对齐设置

- order: 3

位置有十二个方向。可以通过设置 `needAdjust` 让气泡被遮盖的情况下，选择合适的位置。


:::lang=en-us
# Alignment

- order: 3

There are 12 options for align

:::

---

````jsx
import { Button, Balloon } from '@alifd/next';

const top = <Button id="top" style={{margin: '5px'}} className="btrigger">top</Button>;
const right = <Button id="right" style={{margin: '5px'}} className="btrigger">right</Button>;
const bottom = <Button id="bottom" style={{margin: '5px'}} className="btrigger">bottom</Button>;
const left = <Button id="left" style={{margin: '5px'}} className="btrigger">left</Button>;
const topLeft = <Button id="topLeft" style={{margin: '5px'}} className="btrigger">top left</Button>;
const topRight = <Button id="topRight" style={{margin: '5px'}} className="btrigger">top right</Button>;
const rightTop = <Button id="rightTop" style={{margin: '5px'}} className="btrigger">right top</Button>;
const rightBottom = <Button id="rightBottom" style={{margin: '5px'}} className="btrigger">right bottom</Button>;
const bottomLeft = <Button id="bottomLeft" style={{margin: '5px'}} className="btrigger">bottom left</Button>;
const bottomRight = <Button id="bottomRight" style={{margin: '5px'}} className="btrigger">bottom right</Button>;
const leftTop = <Button id="leftTop" style={{margin: '5px'}} className="btrigger">left top</Button>;
const leftBottom = <Button id="leftBottom" style={{margin: '5px'}} className="btrigger">left bottom</Button>;

const Content = () => (
    <div>
        <h4 style={{marginTop: 0}}>balloon title</h4>
        <hr/>
        <p>
            balloon content
        </p>
    </div>
);

const App = () => (
    <div style={{paddingLeft: 320 }}>
        <div style={{marginLeft: 75}}>
            <Balloon needAdjust trigger={topLeft} align="tl" alignEdge triggerType="click" style={{width: 300}}>
                <Content/>
            </Balloon>
            <Balloon needAdjust trigger={top} align="t" alignEdge triggerType="click" style={{width: 300}}>
                <Content/>
            </Balloon>
            <Balloon needAdjust trigger={topRight} align="tr" alignEdge triggerType="click" style={{width: 300}}>
                <Content/>
            </Balloon>
        </div>
        <div style={{width: 80, float: 'left'}}>
            <Balloon needAdjust trigger={leftTop} align="lt" alignEdge triggerType="click" style={{width: 300}}>
                <Content/>
            </Balloon>
            <Balloon needAdjust trigger={left} align="l" alignEdge triggerType="click" style={{width: 300}}>
                <Content/>
            </Balloon>
            <Balloon needAdjust trigger={leftBottom} align="lb" alignEdge triggerType="click" style={{width: 300}}>
                <Content/>
            </Balloon>
        </div>
        <div style={{width: 80, marginLeft: 290}}>
            <Balloon needAdjust trigger={rightTop} align="rt" alignEdge triggerType="click" style={{width: 300}}>
                <Content/>
            </Balloon>
            <Balloon needAdjust trigger={right} align="r" alignEdge triggerType="click" style={{width: 300}}>
                <Content/>
            </Balloon>
            <Balloon needAdjust trigger={rightBottom} align="rb" alignEdge triggerType="click" style={{width: 300}}>
                <Content/>
            </Balloon>
        </div>
        <div style={{marginLeft: 80, clear: 'both'}}>
            <Balloon needAdjust trigger={bottomLeft} align="bl" alignEdge triggerType="click" style={{width: 300}}>
                <Content/>
            </Balloon>
            <Balloon needAdjust trigger={bottom} align="b" alignEdge triggerType="click" style={{width: 300}}>
                <Content/>
            </Balloon>
            <Balloon needAdjust trigger={bottomRight} align="br" alignEdge triggerType="click" style={{width: 300}}>
                <Content/>
            </Balloon>
        </div>
    </div>
);

ReactDOM.render(<App />, mountNode);

````

