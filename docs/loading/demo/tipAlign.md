# 自定义提示语位置

- order: 5

你可以选择提示语的位置,目前支持两个值 right/bottom(默认值)

:::lang=en-us
# Custom Tip Position

- order: 5

Loading state can be toggle。

:::

---

````jsx
import { Loading } from '@alifd/next';

ReactDOM.render(<div>
    <Loading tip="default">
        <div className="demo">test</div>
    </Loading>
    <Loading tip="right" tipAlign="right">
        <div className="demo">test</div>
    </Loading>
    <Loading tip="bottom" tipAlign="bottom">
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
