# 无障碍

- order: 8

组件内置了部分支持无障碍, 但是额外需要开发者手动设置才能完整支持无障碍: 设置upBtnprops以及downBtnprops，使得读屏软件可以正确表达按键的具体功能。

:::lang=en-us
# Accessibility

- order: 8

The component is partially built to support accessibility, but requires additional developer manual Settings to fully support accessibility: upBtnprops and downBtnprops are set up to enable the screen reader to correctly express the specific functions of the buttons.
:::

---

````jsx
import { NumberPicker } from '@alifd/next';

function onChange(value, e) {
    console.log(value, e.type, e.triggerType);
}

ReactDOM.render(
    <div>
        <NumberPicker upBtnProps={{'aria-label':'increasing button'}} downBtnProps={{'aria-label':'decreasing button'}} defaultValue={0} type="inline" onChange={onChange}/>
    </div>,
    mountNode
);
````