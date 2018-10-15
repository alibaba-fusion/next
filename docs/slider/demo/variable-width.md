# 不同的图片宽度

- order: 15

Slider 在默认情况下会认为所有的子元素是等宽的。
通过设置 `variableWidth` 为 `true`，您可以在 Slider 中放置不同宽度的图片。

:::lang=en-us
# Different Picture Widths

- order: 15

By default, Slider considers all child elements to be equal.
By setting `variableWidth` to `true`, you can place images of different widths in the Slider.

:::
---

````jsx
import { Slider } from '@alifd/next';

const settings = {
    className: 'custom-slide variable-width',
    arrowPosition: 'outer',
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true
};

ReactDOM.render(
    <Slider {...settings}>
        <div style={{width: 100}}><p>100</p></div>
        <div style={{width: 200}}><p>200</p></div>
        <div style={{width: 75}}><p>75</p></div>
        <div style={{width: 300}}><p>300</p></div>
        <div style={{width: 225}}><p>225</p></div>
        <div style={{width: 175}}><p>175</p></div>
    </Slider>
    , mountNode);
````


````css
.variable-width .next-slick-slide p {
  background: #4F74B3;;
  height: 100px;
  color: #fff;
  margin: 5px;
  line-height: 100px;
  text-align: center;
}
````
