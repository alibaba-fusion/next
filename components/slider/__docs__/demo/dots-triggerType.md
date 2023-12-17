# 导航锚点触发方式

- order: 5

通过 `triggerType` 可以定义dots触发方式，共有两种触发方式：['click', 'hover'];
当其值设为 `hover` 时为鼠标经过触发滚动。

:::lang=en-us
# Navigation Anchor Trigger

- order: 5
The trigger mode can be defined by `triggerType`. There are two trigger modes: ['click', 'hover'];
When the value is set to `hover`, the mouse rolls over the trigger.

:::
---

````jsx
import { Slider } from '@alifd/next';

ReactDOM.render(
    <div>
        <Slider triggerType="click" arrows={false} >
            <div><h3 className="h3">1</h3></div>
            <div><h3 className="h3">2</h3></div>
            <div><h3 className="h3">3</h3></div>
            <div><h3 className="h3">4</h3></div>
        </Slider>
        <br/>
        <Slider triggerType="hover" arrows={false} >
            <div><h3 className="h3">1</h3></div>
            <div><h3 className="h3">2</h3></div>
            <div><h3 className="h3">3</h3></div>
            <div><h3 className="h3">4</h3></div>
        </Slider>
    </div>
    , mountNode);
````

````css
.next-slick .h3, .h4 {
        background: #4F74B3;
        color: #fff;
        line-height: 150px;
        text-align: center;
        margin-top: 0;
        margin-bottom: 0;
}

.next-slick .h4 {
        margin-right: 5px;
        position: relative;
}

````
