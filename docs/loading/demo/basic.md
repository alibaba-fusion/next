# 基本

- order: 0

简单的 Loading 状态，包裹需要显示加载态的组件。

:::lang=en-us
# Basic Usage

- order: 0

a basic way to use it.
:::
---

````jsx
import { Loading } from '@alifd/next';

ReactDOM.render(
    <div>
        <span className="demo-title-basic">LTR: </span>
        <Loading tip="加载中...">
            <div className="demo-basic">LTR</div>
        </Loading>

        <span className="demo-title-basic">RTL: </span>
        <Loading tip="加载中..." rtl>
            <div className="demo-basic">RTL</div>
        </Loading>
    </div>
    , mountNode);
````

````css
.demo-title-basic {
    margin: 0 60px 0 60px;
}

.demo-basic {
    width: 120px;
    text-align: center;
    padding:50px;
}
````
