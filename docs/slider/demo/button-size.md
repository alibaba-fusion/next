# 导航按钮尺寸

- order: 3

可以通过`arrowSize`属性来更改导航组件的按钮尺寸，默认值为`normal`，
对特定场景，比如展示的图片较大的情况下，可以选择`large`，将导航按钮设置为大按钮。

:::lang=en-us
# Navigation Button Size

- order: 3
You can use the `arrowSize` property to change the button size of the navigation component. The default value is `normal`.
For a specific scenario, such as when the displayed picture is large, you can select `large` and set the navigation button to a large button.
:::
---

````jsx
import { Slider } from '@alifd/next';

const bigSlides = [
    { url: 'https://img.alicdn.com/tps/TB1bewbNVXXXXc5XXXXXXXXXXXX-1000-300.png', text: 'Tape Player Skin Design Competition' },
    { url: 'https://img.alicdn.com/tps/TB1xuUcNVXXXXcRXXXXXXXXXXXX-1000-300.jpg', text: 'Mobile Phone Taobao Skin Call' },
    { url: 'https://img.alicdn.com/tps/TB1ikP.NVXXXXaYXpXXXXXXXXXX-1000-300.jpg', text: 'Design Enabling Public Welfare' },
    { url: 'https://img.alicdn.com/tps/TB1s1_JNVXXXXbhaXXXXXXXXXXX-1000-300.jpg', text: 'Amoy Doll Design Competition' }
];

ReactDOM.render(<div>
    <Slider>
        {
            bigSlides.map((item, index) => <div key={index} className="slider-img-wrapper"><img src={item.url} alt={item.text} /></div>)
        }
    </Slider>

    <br />

    <Slider arrowSize="large">
        {
            bigSlides.map((item, index) => <div key={index} className="slider-img-wrapper"><img src={item.url} alt={item.text} /></div>)
        }
    </Slider>
</div>, mountNode);
````

````css
.slider-img-wrapper img {
    width: 100%;
}
````
