# onChange 钩子

- order: 19

你可以利用 `onChange` 钩子函数处理一些额外的逻辑。

:::lang=en-us
# onChange

- order: 19

You can use the `onChange` hook function to handle some extra logic.

:::
---


````jsx
import { Slider } from '@alifd/next';

const settings = {
    className: 'custom-slide',
    arrowPosition: 'outer',
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    onChange: function (index) {
        console.log('change Slide index', index);
    }
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
