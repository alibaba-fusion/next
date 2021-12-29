# 基本

- order: 0

基本用法，打开和关闭。

:::lang=en-us
# Basic

- order: 0

First dialog
:::
---

````jsx
import { Button, Dialog } from '@alifd/next';


const config = {
  v2: true,
  title: 'Quick',
  animation: false,
  content: 'content content content...',

  onOk: () => {
    Dialog.success({
      v2: true,
      title: 'inner',
      content: 'content content content...'
    });
  },

};

ReactDOM.render((
  <div>
    <div direction="row" spacing={8} style={{ height: '120vh' }}>
      <Button onClick={() => Dialog.success(config)}>Succes11s</Button>
    </div>
    <h1>我在下面呢。。。。。。</h1>
  </div>
),
  mountNode
);
````