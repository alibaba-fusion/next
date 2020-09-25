# withContext

- order: 9

建议通过`Message.withContext`来获得命令式调起Message的API，而尽量不使用 `Message.[success|error|notice|help|loading|show|hide]`，能避免fusion config错误的bug，详细原因参考 `Dialog.withContext` 的文档。

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
