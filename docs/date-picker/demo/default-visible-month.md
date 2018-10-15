# 面板的默认展现日期

- order: 2

可以通过 `defaultVisibleMonth` 或 `defaultVisibleYear` 属性可以修改面板的默认展现日期。

:::lang=en-us
# Default visible month

- order: 2

Change default visible month by setting `defaultVisibleMonth` or `defaultVisibleYear`.

:::

---

````jsx
import { DatePicker } from '@alifd/next';
import moment from 'moment';

const { RangePicker, MonthPicker } = DatePicker;

function onVisibleMonthChange(val, reason) {
    console.log(val.format('L'), reason);
}

ReactDOM.render(<div>
    <p>Setting last month as default visible month</p>
    <DatePicker defaultVisibleMonth={() => moment().add(-1, 'months')} onVisibleMonthChange={onVisibleMonthChange} />
    <br /><br />
    <RangePicker defaultVisibleMonth={() => moment().add(-1, 'months')} onVisibleMonthChange={onVisibleMonthChange} />
    <br /><br />
    <p>Setting 2017 as default visible year</p>
    <MonthPicker defaultVisibleYear={() => moment('2017', 'YYYY')} />
</div>, mountNode);
````
