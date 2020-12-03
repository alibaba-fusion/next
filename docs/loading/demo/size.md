# 动画尺寸

- order: 1

通过`size`设置Loading动画的尺寸，只对原生的动画指示符`indicator`有效。

:::lang=en-us
# Animation Size

- order: 1

Sets Loading animation size. It only works for default loading animation.
:::

---

````jsx
import { Loading } from '@alifd/next';

ReactDOM.render(<div>
    <Loading tip={<span>default = large</span>} >
        <div className="demo-size">test</div>
    </Loading>
    <Loading tip="large" size="large">
        <div className="demo-size">test</div>
    </Loading>
    <Loading tip="medium" size="medium">
        <div className="demo-size">test</div>
    </Loading>
</div>, mountNode);
````

````css
.demo-size {
    width: 200px;
    text-align: center;
    padding:50px;
}
.next-loading {
    margin-bottom: 5px;
}
````
