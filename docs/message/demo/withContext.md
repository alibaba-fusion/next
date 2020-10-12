# withContext

- order: 9

通过 `Message.withContext(({ contextMessage }) => {} )`方法，封装 使用到函数式调用弹窗 的组件（例如业务组件或者当前App等），可以将 被封装组件 代码所在上下文的context注入到`contextMessage`中。

相比较`Message.success()`获取到的是当前页面第一次被记录且未被卸载的context，`context Message.success()`获取到的是 下例中`< AfterFix /> `所在代码环境的context。

`contextMessage`上可被调用的方法有`success ` `error`, `notice`, `help`, `loading`, `show`, `hide`，注意`contextMessage`只有Message的函数式调用方法，它不能像 <Message /> 一样被使用。

:::lang=en-us
# withContext

- order: 9

Use `Message.withContext` to render Message imperatively. Avoid using `Message.[success|error|notice|help|loading|show|hide]`. `Message.withContext` helps you avoid "wrong fusion config" bug. For more details, check out the doc for `Dialog.withContext`.

:::
---

````jsx
import { Button, Message, ConfigProvider } from '@alifd/next';

const BeforeFix = () => {
  return (
    <div>
      <Button
        onClick={() => {
          Message.notice({
            title: "Message.notice 命令式弹窗",
            duration: 10000
          });
        }}
      >
        使用 Message.notice
      </Button>
    </div>
  );
};

const AfterFix = Message.withContext(({ contextMessage }) => {
  return (
    <div>
      <Button
        onClick={() => {
          contextMessage.notice({
            title: "Message.withContext 命令式弹窗",
            duration: 10000
          });
        }}
      >
        使用 Message.withContext
      </Button>
    </div>
  );
});


class Demo extends React.Component {
    render() {
        return (
            <div>
                <ConfigProvider prefix="wrong-prefix-">
                    <ConfigProvider prefix="next-">
                        <div>
                            <BeforeFix />
                            <AfterFix />
                        </div>
                    </ConfigProvider>
                </ConfigProvider>
            </div>
        );
    }
}

ReactDOM.render(<Demo />, mountNode);
````
