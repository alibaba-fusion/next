# 导航锚点方向

- order: 4

通过 `dotsDirection` 可以改变导航锚点的位置，默认为 `hoz` 即水平方向。
当其值设为 `ver` 时为垂直方向展示。

:::lang=en-us
# Navigation Anchor Direction

- order: 4

The direction of the navigation anchor can be changed via `dotsDirection`. The default is `hoz`, which is the horizontal direction.The vertical direction is displayed when the value is set to `ver`.

:::
---

````jsx
import { Slider } from '@alifd/next';

ReactDOM.render(
    <div>
        <Slider dotsDirection="hoz" arrows={false}>
            <div><h3 className="h3">1</h3></div>
            <div><h3 className="h3">2</h3></div>
            <div><h3 className="h3">3</h3></div>
            <div><h3 className="h3">4</h3></div>
        </Slider>

        <br />

        <Slider dotsDirection="ver" arrows={false}>
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
