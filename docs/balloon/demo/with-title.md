# 带 Title

- order: 0

带 Title 的气泡

:::lang=en-us
# Basic

- order: 0

Balloon with title

:::

---

````jsx
import { Button, Balloon } from '@alifd/next';

const Demo = () => (
    <div className="balloon-container">
        <Balloon triggerType="click" title="Balloon Title" trigger={<Button>Click me</Button>} align="br" >
            First performed around 1600, Hamlet tells the story of a prince whose duty to revenge his father's death entangles him in philosophical problems he can't solve.
        </Balloon>
        <Balloon triggerType="click"  title="Balloon Title" trigger={<Button>Click me</Button>} align="br" closable={false}>
            First performed around 1600, Hamlet tells the story of a prince whose duty to revenge his father's death entangles him in philosophical problems he can't solve.
        </Balloon>
    </div>
);

ReactDOM.render(<Demo />, mountNode);

````
````css
.balloon-container > * {
    margin-right: 20px;
}
````
