# 自定义提示语及其位置

- order: 2

通过`tip`自定义加载提示语，通过`tipAlign`设置提示语的位置，目前支持 `right` / `bottom (default)`。

:::lang=en-us
# Custom Tip Position

- order: 2

Use custom loading tip with its location. 

:::

---

````jsx
import { Loading } from '@alifd/next';

ReactDOM.render(<div>
    <Loading tip={<span>default=bottom</span>}>
        <div className="demo-tip">default</div>
    </Loading>
    <Loading tip="right" tipAlign="right">
        <div className="demo-tip">right</div>
    </Loading>
    <Loading tip="bottom" tipAlign="bottom">
        <div className="demo-tip">bottom</div>
    </Loading>
</div>, mountNode);
````

````css
.demo-tip {
    width: 200px;
    text-align: center;
    padding:50px;
}
.next-loading {
    margin-bottom: 5px;
}
````
