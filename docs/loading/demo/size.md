# Loading动画尺寸

- order: 6

设置Loading动画的尺寸,只对原生的indicator管用

:::lang=en-us
# Loading Animation Size

- order: 6

Sets Loading animation size. it only works for default loading animation.
:::

---

````jsx
import { Loading } from '@alifd/next';

ReactDOM.render(<div>
    <Loading tip="normal(size default large)" >
        <div className="demo">test</div>
    </Loading>
    <Loading tip="large" size="large">
        <div className="demo">test</div>
    </Loading>
    <Loading tip="medium" size="medium">
        <div className="demo">test</div>
    </Loading>
</div>, mountNode);
````

````css
.demo {
    width: 500px;
    background-color: #F2F3F7;
    text-align: center;
    padding:50px;
}
.next-loading {
    margin-bottom: 5px;
}
````
