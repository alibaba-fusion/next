# 弹层自动跟随滚动

- order: 7

如果弹层显示隐藏的触发元素所在容器有滚动条，弹窗会自动更新自己的位置跟随滚动。但是实时更新会消耗较大的计算，可以通过更好挂载容器到父节点获得更好性能

:::lang=en-us
# Overlay follows the container scroll

- order: 7

The overlay defaults to absolute positioning with reference to document.body. If the overlay trigger element's container (usually the parent node) has a scrollbar, then when the container is scrolled, the trigger element can be scroll autoly
:::


---

````jsx
import { useState } from 'react';
import { Overlay, Button } from '@alifd/next';

const { Popup } = Overlay;

const style = {
    width: 400,
    height: 100,
    padding: 10,
    background: '#fff',
    borderRadius: 2,
    boxShadow: '2px 2px 20px rgba(0, 0, 0, 0.15)'
};

const App  = () => {
    const [position, setPosition] = useState({});
    const [position12, setPosition12] = useState({});
    const [position13, setPosition13] = useState({});
    const [position2, setPosition2] = useState({});

    return <div style={{
        position: 'relative',
        height: 150,
        padding: 50,
        border: '1px solid #eee',
        overflow: 'auto',
    }}>
        <Popup 
            v2 cache
            triggerType="click"
            overlay={<div style={style}>position: {JSON.stringify(position)}</div>}
            onPosition={(result) => {
                const {style} = result;
                console.log(result);
                setPosition(style);
            }}
            >
            <button style={{marginTop: 10}}>Open1</button>
        </Popup>
        <Popup 
            v2 cache
            triggerType="click"
            overlay={<div style={style}>position: {JSON.stringify(position12)}</div>}
            container={trigger => trigger.parentNode}
            onPosition={(result) => {
                const {style} = result;
                console.log(result);
                setPosition12(style);
            }}
            >
            <button style={{marginTop: 10, marginLeft: 20}}>mount parent node</button>
        </Popup>
        <Popup 
            v2 cache
            triggerType="click"
            overlay={<div style={style}>position: {JSON.stringify(position13)}</div>}
            followTrigger
            onPosition={(result) => {
                const {style} = result;
                console.log(result);
                setPosition13(style);
            }}
            >
            <button style={{marginTop: 10, marginLeft: 20}}>followTrigger</button>
        </Popup>
        <br/>
        <Popup 
            v2
            triggerType="click"
            overlay={<div style={style}>position: {JSON.stringify(position2)}</div>}
            onPosition={({style}) => {
                setPosition2(style);
            }}
            >
            <button style={{marginTop: 200}}>Open2</button>
        </Popup>
        <div style={{ height: 300, width: 1200 }} />
    </div>
}

ReactDOM.render( <App/>, mountNode);
````