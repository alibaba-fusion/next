# 进度条不同状态

- order: 3

用户可以通过 `state` 属性自定义当前进度的展现状态，可取值为 `normal`, `success`, `error` 分别表示普通、成功、失败这三种状态。

:::lang=en-us
# State

- order: 3

Change the state of Progress by `state`, supporting `normal`, `success`, `error`.

:::

---

````jsx
import { Progress } from '@alifd/next';

ReactDOM.render(<div className="">
    <Progress percent={20} shape="circle" state="normal" className="custom-progress" />
    <Progress percent={95} shape="circle" state="success" className="custom-progress" />
    <Progress percent={95} shape="circle" state="error" className="custom-progress" />
</div>, mountNode);
````

````css
.custom-progress {
    margin: 0 20px;
}
````
