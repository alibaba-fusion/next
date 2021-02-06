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
        <Loading tip="加载中...">
            <div className="demo-basic">basic usage</div>
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
