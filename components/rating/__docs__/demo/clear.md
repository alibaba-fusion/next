# 清除

- order: 4

支持允许或者禁用清除。

:::lang=en-us

# Clear star

- order: 4

Support set allow to clear star when click again.

:::
---

````jsx
import { Rating } from '@alifd/next';

ReactDOM.render(
  <div>
    <div className="rating-clear-wrapper">
      <Rating defaultValue={3} allowClear />
      <span className="rating-text">allowClear: true</span>
    </div>
    <br />
    <div className="rating-clear-wrapper">
      <Rating defaultValue={3} />
      <span className="rating-text">allowClear: false</span>
    </div>
  </div>,
  mountNode,
);
````

````css
.rating-clear-wrapper {
  display: flex;
  align-items: center;
}
.rating-text {
  display: inline-block;
  margin: 0 8px;
  font-size: 14px;
}
````

