# zh-CN order=9

# 无边框

无边框样式。

```jsx
import { DatePicker2 } from '@alifd/next';

const { RangePicker } = DatePicker2;

function App() {
    return (
        <div className="app">
            <div>
                <DatePicker2 hasBorder={false} />
            </div>
            <div>
                <RangePicker hasBorder={false} />
            </div>
        </div>
    );
}

ReactDOM.render(<App />, mountNode);
```

```css
.app > div {
    margin-bottom: 20px;
}
```

# en-US order=9

# Borderless

borderless style.
