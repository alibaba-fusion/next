# withMessageAPIs

- order: 9

建议通过`Message.withMessageAPIs`来获得命令式调起Message的API，而尽量不使用 `Message.[success|error|notice|help|loading|show|hide]`，能避免fusion config错误的bug，详细原因参考 `Dialog.withDialogAPIs` 的文档。

:::lang=en-us
# withMessageAPIs

- order: 9

Use `Message.withMessageAPIs` to render Message imperatively. Avoid using `Message.[success|error|notice|help|loading|show|hide]`. `Message.withMessageAPIs` helps you avoid "wrong fusion config" bug. For more details, check out the doc for `Dialog.withDialogAPIs`.

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

const AfterFix = Message.withMessageAPIs(({ messageAPIs }) => {
  return (
    <div>
      <Button
        onClick={() => {
          messageAPIs.notice({
            title: "Message.withMessageAPIs 命令式弹窗",
            duration: 10000
          });
        }}
      >
        使用 Message.withMessageAPIs
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
