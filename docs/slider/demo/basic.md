# 基本

- order: 0

轮播组件共有两种类型：单图轮播和多图同时轮播。
在默认模式下（不指定任何属性值），轮播组件为单图轮播模式。

**注意：** 如果出现图片 1px 高度的问题，建议将图片的外部包括一层 `div` 来避免这个问题。

:::lang=en-us
# Basic Usage

- order: 0
There are two types of Slider components: single picture slider and multi-picture carousel.
In the default mode (without specifying any attribute value), the carousel component is a single picture carousel mode.

**Note: ** If there is a 1px image height problem, try wrapping a `div` tag outside the `img` tag.
:::
---

````jsx
import { Slider } from '@alifd/next';

const slides = [
    { url: 'https://img.alicdn.com/tps/TB1bewbNVXXXXc5XXXXXXXXXXXX-1000-300.png', text: 'Tape Player Skin Design Competition' },
    { url: 'https://img.alicdn.com/tps/TB1xuUcNVXXXXcRXXXXXXXXXXXX-1000-300.jpg', text: 'Mobile Phone Taobao Skin Call' },
    { url: 'https://img.alicdn.com/tps/TB1ikP.NVXXXXaYXpXXXXXXXXXX-1000-300.jpg', text: 'Design Enabling Public Welfare' },
    { url: 'https://img.alicdn.com/tps/TB1s1_JNVXXXXbhaXXXXXXXXXXX-1000-300.jpg', text: 'Amoy Doll Design Competition' }
];

const itemNodes = slides.map((item, index) => <div key={index} className="slider-img-wrapper"><img src={item.url} alt={item.text} /></div>);

ReactDOM.render(<Slider>{itemNodes}</Slider>, mountNode);
````

````css
.slider-img-wrapper img{
    width: 100%;
}
````
