# 触发的弹层

-   order: 2

使用 Popup 弹出一个弹层。

:::lang=en-us

# Popup

-   order: 2

Use popup to pop up a overlay.
:::

---

```jsx
import { Overlay } from '@alifd/next';

const { Popup } = Overlay;

function App(props) {
    return <input {...props} />;
}

ReactDOM.render(
    <div>
        <Popup trigger={<button>Open</button>} triggerType="click">
            <span className="overlay-demo">Hello World From Popup!</span>
        </Popup>
        <br />
        <Popup trigger={<App />} triggerType="click" triggerClickKeycode={40}>
            <span className="overlay-demo">Hello World From Popup!</span>
        </Popup>
    </div>,
    mountNode
);
```

```css
.overlay-demo {
    width: 300px;
    height: 100px;
    padding: 10px;
    border: 1px solid #999999;
    background: #ffffff;
    box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.15);
}
```
