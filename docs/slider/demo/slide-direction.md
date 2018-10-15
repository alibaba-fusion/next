# 垂直滑动

- order: 2

轮播组件可以通过 `slideDirection` 属性设置两种轮播方向。当值为 `ver` 时轮播方向为垂直方向，
默认为值为 `hoz` 。垂直模式也可以设置单图和多图轮播。

:::lang=en-us
# Swipe Vertically

- order: 2

The slider component can set two carousel directions with the `slideDirection` attribute. When the value is `ver`, the carousel direction is vertical. The default value is `hoz`. Vertical mode can also set single map and multi picture rotation.

:::
---

````jsx
import { Slider } from '@alifd/next';

ReactDOM.render(<div style={{ width: '200px' }}>
    <div className="demo-item-title">Vertical multi-picture mode</div>
    <Slider slideDirection="ver" slidesToShow={3} slidesToScroll={1} dots={false} arrowPosition="inner" arrowDirection="ver" className="ver-slick">
        {
            [1, 2, 3, 4, 5].map((item, index) => <div key={index} className="custom-slider" style={{ border: '1px solid transparent'}}><h3 className="h3">{item}</h3></div>)
        }
    </Slider>

    <div className="demo-item-title">Vertical single-picture mode</div>
    <Slider slideDirection="ver" dots={false} arrowPosition="inner" arrowDirection="ver" className="ver-slick">
        {
            [1, 2, 3, 4, 5].map((item, index) => <div key={index} className="custom-slider"><h3 className="h3">{item}</h3></div>)
        }
    </Slider>
</div>, mountNode);
````

````css
.ver-slick .h3 {
        background: #4F74B3;
        color: #fff;
        line-height: 150px;
        text-align: center;
        font-size: 36px;
        margin-top: 0;
        margin-bottom: 0;
}

.demo-item-title {
    font-size: 16px;
    color: #333;
    padding: 8px;
    margin: 20px 0 10px 0;
}
````
