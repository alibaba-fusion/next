# 定制底部按钮

- order: 3

通过 `footerActions` 来调整确定按钮和取消按钮是否出现以及相互间的位置，通过 `footerAlign` 来调整底部按钮的对齐方式。

:::lang=en-us
# Customize buttons of footer

- order: 3

Use footerActions to control the position of the OK and Cancel buttons and their mutual position. Use footerAlign to control the alignment of the bottom buttons.
:::

---

````jsx
import { Button, Radio, Dialog } from '@alifd/next';


class Demo extends React.Component {
    state = {
        visible: false,
        footerActions: ['ok', 'cancel'],
        footerAlign: 'right',
        loading: false
    };

    onOpen = () => {
        this.setState({
            visible: true
        });
    }

    onClose = () => {
        this.setState({
            visible: false
        });
    };

    toggleFooterActions = footerActionsStr => {
        this.setState({
            footerActions: footerActionsStr.split(',')
        });
    };

    toggleFooterAlign = footerAlign => {
        this.setState({
            footerAlign
        });
    };

    toggleOkLoader = loading => {
        this.setState({
            loading
        });
    }

    render() {
        const { visible, footerActions, footerAlign, loading } = this.state;
        const okProps = {
            loading
        };

        return (
            <div>
                <Button onClick={this.onOpen} type="primary">
                    Open dialog
                </Button>
                <Dialog title="Customize buttons of footer"
                    visible={visible}
                    footerActions={footerActions}
                    footerAlign={footerAlign}
                    onOk={this.onClose}
                    onCancel={this.onClose}
                    onClose={this.onClose}
                    okProps={okProps}
                    >
                    <div className="demo-content">
                        <Radio.Group className="demo-radio-group" shape="button" value={footerActions.join(',')} onChange={this.toggleFooterActions}>
                            <Radio value="ok,cancel">ok is left</Radio>
                            <Radio value="cancel,ok">ok is right</Radio>
                            <Radio value="ok">only ok</Radio>
                            <Radio value="cancel">only cancel</Radio>
                        </Radio.Group>
                        <Radio.Group className="demo-radio-group" shape="button" value={footerAlign} onChange={this.toggleFooterAlign}>
                            <Radio value="left">left</Radio>
                            <Radio value="center">center</Radio>
                            <Radio value="right">right</Radio>
                        </Radio.Group>
                        <Radio.Group  className="demo-radio-group" shape="button" value={loading} onChange={this.toggleOkLoader}>
                            <Radio value={false}>Loading Off</Radio>
                            <Radio value>Loading On</Radio>
                        </Radio.Group>
                    </div>
                </Dialog>
            </div>
        );
    }
}

ReactDOM.render(<Demo />, mountNode);
````

````css
.demo-content {
    padding: 10px;
    border: 2px dashed #ddd;
    background: #F8F8F8;
}

.demo-radio-group {
    display: block;
}

.demo-radio-group + .demo-radio-group  {
    margin-top: 10px;
}
````
