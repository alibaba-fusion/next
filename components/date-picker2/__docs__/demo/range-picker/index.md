# zh-CN order=1

# 范围选择

指定范围选择器类型。

```jsx
import { DatePicker2 } from '@alifd/next';

const { RangePicker } = DatePicker2;

const onChange = (date, dateStr) => console.log(date, dateStr);

const App = () => (
    <div className="app">
        <div>
            <RangePicker onChange={onChange} />
        </div>
        <div>
            <RangePicker placeholder={['开始月', '结束月']} mode="month" onChange={onChange} />
        </div>
        <div>
            <RangePicker placeholder={['开始年', '结束年']} mode="year" onChange={onChange} />
        </div>
        <div>
            <RangePicker placeholder={['开始周', '结束周']} mode="week" onChange={onChange} />
        </div>
        <div>
            <RangePicker
                placeholder={['开始季度', '结束季度']}
                mode="quarter"
                onChange={onChange}
            />
        </div>
    </div>
);

ReactDOM.render(<App />, mountNode);
```

```css
.app > div {
    margin-bottom: 20px;
}


# en-US order=1



# RangePicker

Choose a RangePicker.

```
