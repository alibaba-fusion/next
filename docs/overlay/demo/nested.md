# 弹层嵌套

- order: 5

有弹层嵌套需求时，请使用 container 属性将第二个弹层渲染到第一个弹层内部。

:::lang=en-us
# Nested overlay

- order: 5

When there is a overlay nesting requirement, use the container property to render the second overlay inside the first overlay.
:::

---

````jsx
import { useState } from 'react';
import { Overlay, Button, Select, Switch, Balloon, DatePicker, DatePicker2, Table } from '@alifd/next';

const { Popup } = Overlay;
const { Tooltip } = Balloon;

const Demo = () => {
    return (<div>
        <Popup v2 trigger={<button>Popup Nest</button>}
            triggerType="click">
            <div className="overlay-demo">
                <Popup v2 trigger={<button>Open second Popup</button>}
                    triggerType="click"
                >
                    <div className="overlay-demo">
                        <Popup v2 trigger={<button>Open third Popup</button>}
                        triggerType="click"
                        >
                            <div className="overlay-demo">
                                <p>Hello World From Third Overlay!</p>
                            </div>
                        </Popup>
                        <p>Hello World From Second Overlay!</p>
                    </div>
                </Popup>
                <p>Hello World From First Overlay!</p>
            </div>
        </Popup>
        <Popup v2 trigger={<button style={{marginLeft: 10}}>Select Nest</button>}
            triggerType="click">
            <div className="overlay-demo">
                <Select 
                    dataSource={["apple", "banana", "orange", "grape"]} 
                    itemRender={(d) => 
                        <Tooltip v2 trigger={<div style={{width: '100%'}}>{d.value}</div>} align="r" 
                            onMouseDown={e => e.stopPropagation()} 
                            onClick={e => e.stopPropagation()}
                        >
                            <span>{d.value}</span>
                        </Tooltip>
                    }
                    popupProps={{v2: true}} 
                />
                <DatePicker2 popupProps={{v2: true}} style={{width: 120, marginLeft: 10}}/>
                <DatePicker2.RangePicker popupProps={{v2: true}} style={{width: 220, marginLeft: 10}}/>
            </div>
        </Popup>
    </div>);
}

ReactDOM.render(<Demo/>, mountNode);
````

````css
.overlay-demo {
    width: 300px;
    height: 100px;
    padding: 10px;
    border: 1px solid #eee;
    background: #FFFFFF;
    box-shadow: 2px 2px 20px rgba(0,0,0,0.15);
}
````
