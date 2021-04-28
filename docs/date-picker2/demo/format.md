# 格式化

-   order: 3

使用`format`属性，可以自定义日期显示格式。

:::lang=en-us

# Basic

-   order: 3

Using attribute `format` to change the displayed dates, it will be also used to check user inputs.

:::

---

```jsx
import { DatePicker2 } from '@alifd/next';

const { RangePicker} = DatePicker2;

const defaultVal = '2020-02-02';
const defaultRangeVal = ['2020-01-01', '2020-02-02']
function customizeFormatter(v) {
    return `DATE: ${v.format('YYYY/MM/DD')}`;
}

function App() {
    return (
        <div className="app">
            <div><DatePicker2 defaultValue={defaultVal} format="YYYY/MM/DD"/></div>
            <div><DatePicker2 defaultValue={defaultVal}  showTime format="YYYY/MM/DD HH:mm:ss"/></div>
            <div><DatePicker2 defaultValue={defaultVal}  format="YYYY/MM/DD HH:mm" showTime timePanelProps={{format: "HH:mm"}}/></div>
            <div><RangePicker defaultValue={defaultRangeVal}  format="YYYY/MM/DD" /></div>
            <div><RangePicker defaultValue={defaultRangeVal} format="YYYY/MM/DD HH:mm:ss" showTime/></div>
            <div><DatePicker2 defaultValue={defaultVal}  format={customizeFormatter}/></div>
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
