# 禁止循环

- order: 10

默认情况下，轮播组件的表现为无穷循环模式。如果你不想无穷循环，
可以通过设置 `infinite` 为 `false`，用来禁止循环模式。

值得注意的是，由于组件的默认行为是无穷模式，所以默认情况下，自动将单张图片复制了两份，
如果你不想启用这样的复制效果，只要关闭 `infinite` 属性即可。

:::lang=en-us
# No Loop

- order: 10

By default, the Slider component behaves in an endless loop mode. If you don't want endless loops,
You can disable the loop mode by setting `infinite` to `false`.

It is worth noting that since the default behavior of the component is the infinite mode, by default, the single image is automatically duplicated.
If you do not want to enable such a copy effect, just close the ʻinfinite` attribute.

:::
---

````jsx
import { Slider } from '@alifd/next';

ReactDOM.render(
    <div>
        <Slider slidesToShow={4} arrowPosition="outer" infinite={false} dots={false}>
            <div style={{width: '25%'}}><h4 className="h4">1</h4></div>
            <div style={{width: '25%'}}><h4 className="h4">2</h4></div>
            <div style={{width: '25%'}}><h4 className="h4">3</h4></div>
            <div style={{width: '25%'}}><h4 className="h4">4</h4></div>
            <div style={{width: '25%'}}><h4 className="h4">5</h4></div>
        </Slider>

        <br />

        <Slider infinite={false} lazyLoad>
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
        margin: 0 5px;
        position: relative;
}
````
