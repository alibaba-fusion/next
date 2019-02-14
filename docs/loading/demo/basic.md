# 基本用法

- order: 0

最简单的用法。

:::lang=en-us
# Basic Usage

- order: 0

a basic way to use it
:::
---

````jsx
import { Loading } from '@alifd/next';

ReactDOM.render(
    <div>
        <div>LTR
            <Loading tip="加载中..." >
                <div className="demo">test</div>
            </Loading>
        </div>
        <div>RTL
            <Loading tip="加载中..." rtl >
                <div className="demo">test</div>
            </Loading>
        </div>
    </div>
    , mountNode);
````

````css
.demo {
    width: 500px;
    background-color: #F2F3F7;
    text-align: center;
    padding:50px;
}
````
