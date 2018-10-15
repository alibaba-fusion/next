# 自定义日期选择器弹层

- order: 10

组件对外透出了 `visible`, `defaultVisible`, `onVisibleChange`, `popupTriggerType`, `popupAlign`, `popupContainer`, `popupStyle`, `popupClassName` 等属性用于直接定制弹层。此外，如果这些属性仍然无法满足需求，可以通过 `popupProps` 进行透传。

:::lang=en-us
# Custom popup

- order: 10

Custom popup behaviors.

:::

---

````jsx
import { DatePicker } from '@alifd/next';

const { RangePicker } = DatePicker;

ReactDOM.render(<div>
    <p>Change popup align</p>
    <DatePicker popupAlign="bl tl"  />
    <p>Change popup container</p>
    <RangePicker popupContainer={target => target.parentNode} />
</div>, mountNode);
````
