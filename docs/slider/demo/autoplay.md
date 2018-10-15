# 自动播放

- order: 9

可以通过 `autoplay` 和 `autoplaySpeed` 属性来设置组件是否自动轮播 和 自动轮播的速度。

:::lang=en-us
# Autoplay

- order: 9

You can use the `autoplay` and `autoplaySpeed` attributes to set whether the component will automatically rotate and auto rotate.

:::
---

````jsx
import { Slider } from '@alifd/next';

ReactDOM.render(
    <div style={{width: '600px'}}>
        <Slider slidesToShow={4} arrowPosition="outer" lazyLoad dots={false} autoplay autoplaySpeed={1000}>
            <div style={{width: '25%'}}><h4 className="h4">1</h4></div>
            <div style={{width: '25%'}}><h4 className="h4">2</h4></div>
            <div style={{width: '25%'}}><h4 className="h4">3</h4></div>
            <div style={{width: '25%'}}><h4 className="h4">4</h4></div>
            <div style={{width: '25%'}}><h4 className="h4">5</h4></div>
            <div style={{width: '25%'}}><h4 className="h4">6</h4></div>
            <div style={{width: '25%'}}><h4 className="h4">7</h4></div>
            <div style={{width: '25%'}}><h4 className="h4">8</h4></div>
            <div style={{width: '25%'}}><h4 className="h4">9</h4></div>
        </Slider>
        <br/>
        <Slider speed={1000} autoplay autoplaySpeed={2000}>
            <div style={{width: '25%'}}><h4 className="h4">1</h4></div>
            <div style={{width: '25%'}}><h4 className="h4">2</h4></div>
            <div style={{width: '25%'}}><h4 className="h4">3</h4></div>
        </Slider>
    </div>
    , mountNode);
````

````css
.next-slick .h3, .h4 {
    margin: 0 5px;
    background: #4F74B3;
    color: #fff;
    line-height: 150px;
    text-align: center;
    margin-top: 0;
    margin-bottom: 0;
}
````
