# 弹窗用法

- order: 5

信息提示的弹窗用法，可以通过`Message.show`和`Message.hide`方法来显示或隐藏。

:::lang=en-us
# Toast

- order: 5

You can use `Message.show` and `Message.hide` to show and hide toast conveniently.
:::


---

````jsx
import { Message, Button } from '@alifd/next';


const show = () => {
    Message.show({
        type: 'loading',
        content: 'Will be closed after 3 seconds or manually click on the close button',
        afterClose: () => console.log('Closed the toast')
    });
};
const hide = () => Message.hide();

ReactDOM.render(
    <div className="message-toast-demo">
        <Button type="primary" onClick={show}>Show</Button>
        <Button type="primary" onClick={hide}>Hide</Button>
    </div>, mountNode);
````

````css
.message-toast-demo .next-btn.next-medium {
    margin-right: 10px;
}
````
