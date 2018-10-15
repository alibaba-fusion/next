# 居中模式

- order: 13

居中模式可以突出显示最核心区域的内容，您可以通过设置 `centerMode` 属性址为 `true` 开启该功能。

:::lang=en-us
# Centering Mode

- order: 13

The centering mode highlights the content of the most core area. You can enable this function by setting the `centerMode` property address to `true`.

:::
---

````jsx
import { Slider } from '@alifd/next';

const settings = {
    className: 'custom-slide center',
    centerMode: true,
    infinite: true,
    dots: false,
    arrowPosition: 'outer',
    centerPadding: '60px',
    slidesToShow: 3,
    speed: 500
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

.center h3 {
    opacity: 0.8;
    transition: all 300ms ease;
}

.center .next-slick-center h3 {
  color: #e67e22;
  opacity: 1;
  transform: scale(1.08);
}
````
