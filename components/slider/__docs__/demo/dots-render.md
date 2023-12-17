# 自定义导航锚点

- order: 6

通过 `dotsRender` 可以自定义修改dost，通过 `dotsClass` 可覆盖dots的样式。

:::lang=en-us
# Custom Navigation Anchor

- order: 6

`dotsRender` can be used to modify dost, and `dotsClass` can override dots.

:::
---

````jsx
import { Slider } from '@alifd/next';

ReactDOM.render(
    <div>
        <Slider dotsClass="dots-cust" dotsDirection="hoz" arrows={false} dotsRender={(index, current) => {
            console.log('current', current);
            return <a>{index}</a>;
        }}>
            <div><h3 className="h3">0</h3></div>
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
        margin-right: 5px;
        position: relative;
}

.dots-cust {
  color: #fff;
}
.dots-cust a{
  dispaly: block;
  background: rgba(200,200,200,.4);
  padding: 0 4px;
}
.dots-cust .active a{
  color: rgb(70, 188, 2);
}
````
