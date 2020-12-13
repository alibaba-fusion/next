# 测试Demo

-   order: 0

最基本的用法。可以通过 `onChange` 监听选中值的变化。

:::lang=en-us

# Basic

-   order: 0

A basic usage case.

:::

---

```jsx
import { useState } from 'react';
import { DatePicker2, Input } from '@alifd/next';
import dayjs from 'dayjs'

const { RangePicker} = DatePicker2;


function range(start, end) {
  const result = [];
  for (let i = start; i < end; i++) {
    result.push(i);
  }
  return result;
}

function App() {
    return (
        <div className="app">
            inputReadOnly:
            <div> <DatePicker2 inputReadOnly/></div>
            <div> <RangePicker inputReadOnly/></div>

            disabled:
            <div> <DatePicker2 disabled/><Input disabled/></div>
            <div> <RangePicker disabled/></div>
            <div> <RangePicker disabled={[true, false]} defaultValue={[Date(), null]}/></div>


            defaultValue
            <div> <DatePicker2 defaultValue={Date.now()} /></div>
            <div> <RangePicker defaultValue={[Date(), Date.now()]} /></div>
            <div> <RangePicker defaultValue={['2020-10-10', '2020-11-10']}/></div>
            <div> <RangePicker defaultValue={['2020-12-10', '2020-11-10']}/></div>
            <div> <RangePicker defaultValue={'Invalid value'} /></div>
            <div> <DatePicker2 defaultValue={'Invalid value'} /></div>
            value
            <div> <DatePicker2 value={Date.now()} /></div>
            <div> <RangePicker value={[, Date.now()]} /></div>
            <div> <RangePicker value={['2020-10-10', '2020-11-10']}/></div>
            <div> <RangePicker value={['2020-12-10', '2020-11-10']}/></div>
            <div> <RangePicker value={'Invalid value'} /></div>
            <div> <DatePicker2 value={'Invalid value'} /></div>

            trigger
            <div><DatePicker2  trigger={<a herf=''>选择日期</a>} /></div>
            <div><RangePicker  trigger={<a herf=''>选择日期</a>} /></div>

            placeholder
            <div><DatePicker2 placeholder='YYYY/MM/DD' format="YYYY/MM/DD" /></div>
            <div><RangePicker placeholder='YYYY/MM/DD' format="YYYY/MM/DD" /></div>
            <div><RangePicker placeholder={['开始时间', '结束时间']} format="YYYY/MM/DD" /></div>

            timePanelProps
            <div><DatePicker2 format="YYYY/MM/DD HH:mm" showTime timePanelProps={{minuteStep: 15, showSecond: false}} /></div>
            <div><DatePicker2 format="YYYY/MM/DD HH:mm" showTime timePanelProps={{ format: 'HH:mm', disabledHours: () => [0, 59] }} /></div>



            resetTime
            <div><DatePicker2 showTime resetTime/></div>

            disabledDate
            <div><DatePicker2 showTime disabledDate={v => v.isAfter(dayjs())}/></div>
            <div>
                <DatePicker2 showTime disabledTime={{
                    disabledHours: () => range(0, 60).splice(20, 4),
                    disabledMinutes: () => range(0, 31),
                    disabledSeconds: () => [55, 56],
                }}/>
            </div>
            <div>12121
                <RangePicker
                    showTime
                    disabledDate={v => v.isAfter(dayjs())}
                    disabledTime={{
                        disabledHours: v => v > 18,
                        disabledMinutes: v => v > 30,
                    }}
                    timePanelProps={{ disabledSeconds: v => v > 20 }}
                /></div>

            separator
            <div><RangePicker separator="~"  showTime/></div>

            footerRender
            <div><DatePicker2 footerRender="footerRender"/></div>
            <div><DatePicker2 footerRender={<em>custom footerRender</em>}/></div>

            extraFooterRender
            <div><RangePicker extraFooterRender="extraFooterRender"/></div>
            <div><RangePicker extraFooterRender={<em>extraFooterRender</em>}/></div>

            showOk&onOk
            <div><DatePicker2 format="YYYY/MM/DD" showOk onOk={(v, dateStr) => console.log(v, dateStr)} extraFooterRender={<em>extraFooterRender</em>}/></div>
            <div><DatePicker2 format="YYYY/MM/DD" showOk onOk={() => false} extraFooterRender={<em>extraFooterRender</em>}/></div>


            onChange
            <div><DatePicker2 format="YYYY/MM/DD"  onChange={(v, dateStr) => console.log(v, dateStr)} extraFooterRender={<em>extraFooterRender</em>}/></div>
            <div><RangePicker format="YYYY/MM/DD"  onChange={(v, dateStr) => console.log(v, dateStr)} /></div>


             hasClear
            <div><DatePicker2 hasClear={false} format="YYYY/MM/DD"  onChange={(v, dateStr) => console.log(v, dateStr)} extraFooterRender={<em>extraFooterRender</em>}/></div>
            <div><RangePicker hasClear={false} format="YYYY/MM/DD"  onChange={(v, dateStr) => console.log(v, dateStr)} /></div>

            popupProps
            <div><DatePicker2 popupProps={{classNames: 'xxxxx'}} /></div>


            onVisibleChange
            <div><DatePicker2 onVisibleChange={(...args) => console.log(args)} popupProps={{classNames: 'xxxxx'}} /></div>
            <div><RangePicker onVisibleChange={(...args) => console.log(args)} popupProps={{classNames: 'xxxxx'}} /></div>

            dateCellRender
            <div><DatePicker2 monthCellRender={v => <em>{v.month()}</em>} mode="month" /></div>
            <div><RangePicker dateCellRender={v => <em>{v.month()}</em>} mode="month" /></div>
        </div>
    );
}

function dateCellRender() {

    console.log(value, mode);

}

ReactDOM.render(<App />, mountNode);
```

```css
.app {
    line-height: 1.8;
}
.app > div {
    margin-bottom: 20px;
}
```
