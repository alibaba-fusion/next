# 悬浮时暂停

- order: 11

可以通过设置 `pauseOnHover` 属性为 `true` 使得 Slide 在鼠标悬浮时自动停止轮播。

:::lang=en-us
# Pause When Mouse Is Floating

- order: 11
You can make Slide to automatically stop the carousel when the mouse is hovering by setting the `pauseOnHover` property to `true`.
:::
---

````jsx
import { Slider } from '@alifd/next';

const settings = {
    className: 'custom-slide',
    arrowPosition: 'outer',
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true
};

ReactDOM.render(
    <Slider {...settings}>
        <div><h3>1</h3></div>
        <div><h3>2</h3></div>
        <div><h3>3</h3></div>
        <div><h3>4</h3></div>
        <div><h3>5</h3></div>
        <div><h3>6</h3></div>
        <div><h3>7</h3></div>
        <div><h3>8</h3></div>
        <div><h3>9</h3></div>
    </Slider>
    , mountNode);
````


````css
.custom-slide h3 {
    background: #4F74B3;
    color: #fff;
    font-size: 36px;
    line-height: 100px;
    margin: 10px;
    padding: 2%;
    position: relative;
    text-align: center;
}
````
