# 导航箭头位置

- order: 8

轮播组件的导航按钮在默认情况下为内置模式。在多图同时导航的情况下，如果想要使用外置按钮，
可以通过指定`arrowPosition`的属性值为`outer`，使用外置按钮，其默认值为`inner`。

:::lang=en-us
# Navigation Arrow Position

- order: 8
The carousel navigation buttons are inner by default. In the case of simultaneous navigation of multiple maps, if you want to use an external button,
You can use the external button by specifying the attribute value of `arrowPosition` as `outer`. The default value is `inner`.
:::
---

````jsx
import { Slider } from '@alifd/next';

ReactDOM.render(
    <div>
        <Slider slidesToShow={4} arrowPosition="outer">
            <div style={{width: '25%'}}><h4 className="h4">1</h4></div>
            <div style={{width: '25%'}}><h4 className="h4">2</h4></div>
            <div style={{width: '25%'}}><h4 className="h4">3</h4></div>
            <div style={{width: '25%'}}><h4 className="h4">4</h4></div>
            <div style={{width: '25%'}}><h4 className="h4">5</h4></div>
        </Slider>

        <br />

        <Slider>
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
