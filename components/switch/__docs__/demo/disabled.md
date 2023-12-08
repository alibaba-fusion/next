# 不可用

- order: 2

Switch 失效状态。

:::lang=en-us
# disabled

- order: 2

Disabled switch.

:::

---

````jsx
import { Button, Switch } from '@alifd/next';

const Demo = () => {
  const [disabled, setDisabled] = React.useState(true);

  const toggle = () => {
    setDisabled(!disabled);
  };

  return (
    <div>
      <Switch autoWidth disabled={disabled} defaultChecked />
      <br />
      <Button type="primary" onClick={toggle}>
        Toggle disabled
      </Button>
    </div>
  );
};


ReactDOM.render(<Demo />, mountNode);
````
