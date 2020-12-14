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
import { DatePicker2 } from '@alifd/next';

const { RangePicker } = DatePicker2;

function footerRender() {
    return <div className="custom-footer">👍 Some useful info here</div>;
}

function extraFooterRender() {
    return <div className="extra-footer">额外页脚扩展区</div>
}

ReactDOM.render(<div>
    <DatePicker2 footerRender={footerRender} />
    <br /><br />
    <DatePicker2 extraFooterRender={extraFooterRender} showOk />
    <br /><br />
    <RangePicker footerRender={footerRender} />
    <br /><br />
    <RangePicker extraFooterRender={extraFooterRender} />
</div>, mountNode);
````

````css
.custom-footer {
    padding: 12px;
    font-size: 12px;
}

.extra-footer {
    font-size: 12px;
}
````
