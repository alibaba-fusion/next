# 图标按钮

- order: 2

Button 可以嵌入 Icon，默认情况下 Icon 尺寸自动跟随 Button 的尺寸。如果用户想要控制 Icon 的大小，可以通过 `iconSize` 属性进行设置。

:::lang=en-us
# Icon

- order: 2

Button could contain Icon as its children, the default size of Icon is controlled by the Button size. And it can be manually controlled by using `iconSize` prop.

:::

---

````jsx
import { Button, Icon } from '@alifd/next';

ReactDOM.render(<div>
    <Button><Icon type="atm" /> ATM</Button> &nbsp;&nbsp;
    <Button text><Icon type="atm" /> ATM</Button> &nbsp;&nbsp;
    <Button warning><Icon type="atm" /> ATM</Button> &nbsp;&nbsp;
    <Button iconSize="xxs"><Icon type="arrow-left" /> ARROW</Button> &nbsp;&nbsp;
</div>, mountNode);
````
