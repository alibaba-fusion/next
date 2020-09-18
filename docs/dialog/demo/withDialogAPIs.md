# withDialogAPIs

- order: 9

使用 `Dialog.withDialogAPIs` 来命令式调起 Dialog。相比直接使用 `Dialog.alert/confirm/show`，它能避免Dialog应用的fusion config(比如prefix、文案)不符合预期的问题。

:::lang=en-us
# Basic

- order: 9

Use `Dialog.withDialogAPIs` to render Dialog imperatively. It is recommended over `Dialog.alert/confirm/show` because it get fusion config(.e.g prefix, locale) from context.

:::
---

````jsx
import { Button, Dialog, ConfigProvider } from '@alifd/next';

const BeforeFix = () => {
  return (
    <div>
      <Button
        onClick={() => {
          Dialog.confirm({
            title: "Dialog.confirm 命令式弹窗",
          });
        }}
      >
        使用 Dialog.confirm
      </Button>
    </div>
  );
};

const AfterFix = Dialog.withDialogAPIs(({ dialogAPIs }) => {
  return (
    <div>
      <Button
        onClick={() => {
          dialogAPIs.confirm({
            title: "Dialog.withDialogAPIs 命令式弹窗",
          });
        }}
      >
        使用 Dialog.withDialogAPIs
      </Button>
    </div>
  );
});


class Demo extends React.Component {
    render() {
        return (
            <div>
                <ConfigProvider
                    locale={{
                        Dialog: {
                            close: "关闭（根组件文案）",
                            ok: "确认（根组件文案）",
                            cancel: "取消（根组件文案）",
                        },
                    }}
                >
                    <ConfigProvider
                        locale={{
                            Dialog: {
                            close: "关闭（局部文案）",
                            ok: "确认（局部文案）",
                            cancel: "取消（局部文案）",
                            },
                        }}
                        >
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
