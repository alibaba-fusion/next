# 自定义面板页脚

- order: 11

可以通过 `footerRender` 自定义对面板页脚的定制。

:::lang=en-us
# Footer

- order: 11

Passing custom footer with `footerRender`.

:::

---


````jsx
import { DatePicker } from '@alifd/next';

const { RangePicker } = DatePicker;

function footerRender() {
    return <div className="custom-footer">👍 Some useful info here</div>;
}

ReactDOM.render(<div>
    <DatePicker footerRender={footerRender}  />&nbsp;&nbsp;
    <RangePicker footerRender={footerRender} />
</div>, mountNode);
````

````css
.custom-footer {
    padding: 12px;
    font-size: 12px;
    border-top: 1px solid #DCDEE3;
}
````
