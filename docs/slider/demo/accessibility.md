# 无障碍

- order: 20

组件已支持无障碍

:::lang=en-us
# Accessibility

- order: 20

Components already support accessibility
:::

---

````jsx
import { Slider } from '@alifd/next';

const slides = [1, 2, 3, 4, 5, 6, 7, 8, 9].map(item => <div style={{width: '25%'}} key={item}><h4 className="h4">{item}</h4></div>);

ReactDOM.render(
    <div style={{width: '600px'}}>
        <div className="demo-item-title">slide one picture one at a time</div>
        <Slider slidesToShow={4} arrowPosition="outer" dots={false} lazyLoad >
            {slides}
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

.demo-item-title {
    font-size: 16px;
    color: #333;
    padding: 8px;
    margin: 20px 0 10px 0;
}
````
