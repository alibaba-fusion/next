# 无障碍支持

- order: 9

通过`okProps`与`cancelProps`设置`aria-label`属性，屏幕阅读器读取确定和取消按钮。关于键盘操作请参考[#无障碍键盘操作指南](#无障碍键盘操作指南)。

:::lang=en-us
# Accessibility

- order: 9

Set the `aria-label` attribute via `okProps` and `cancelProps`, The screen reader will read the OK and Cancel buttons. Please refer to `ARIA and KeyBoard` for keyboard operation.

:::
---

````jsx

import { Button, Dialog, Input, Select } from '@alifd/next';

class Demo extends React.Component {
    state = {
        visible: false
    };
    onOpen = () => {
        this.setState({
            visible: true
        });
    };
    onClose = () => {
        this.setState({
            visible: false
        });
    };
    render() {
        return (
            <div>
                <Button onClick={this.onOpen} type="primary">
                    Open dialog
                </Button>
                <Dialog
                    v2
                    title="Welcome to Alibaba.com"
                    visible={this.state.visible}
                    autoFocus
                    onOk={this.onClose.bind(this, 'okClick')}
                    onClose={this.onClose.bind(this, 'cancelClick')}
                    cancelProps={{'aria-label':'cancel'}}
                    okProps={{'aria-label':'ok'}}>
                    <Input placeholder="should autofocus here"/>
                    <Select popupProps={{v2: true}} style={{marginLeft: 8}}>
                        <Select.Option value="1">1</Select.Option>
                        <Select.Option value="12">12</Select.Option>
                    </Select>
                </Dialog>
            </div>
        );
    }
}

ReactDOM.render(<Demo />, mountNode);

````
