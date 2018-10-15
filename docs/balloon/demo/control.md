# 从浮层内关闭, 事件回调

- order: 4

使用 `visible` ,属性控制浮层显示, 使 balloon 变为受限组件。

---

:::lang=en-us
# Control

- order: 4

Use 'visible' to control whether the popup should be displayed.

:::

````jsx
import { Button, Balloon } from '@alifd/next';




class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        };
    }

    hide() {
        this.setState({
            visible: false
        });
    }

    // onVisibleChange callback will be triggered when visible changes.
    // For example, for click type, it'll be triggered when clicking the button and later the other areas;
    // for hover type, it'll be triggered when mouse enter and mouse leave
    handleVisibleChange(visible) {
        this.setState({visible});
    }

    onClose() {
        console.log('onClose doing!');
    }

    afterClose() {
        console.log('afterClose doing!');
    }
    render() {
        const visibleTrigger = <Button type="primary" style={{margin: '5px'}}>click to popup the card</Button>;
        const clickTrigger = <Button type="primary" style={{margin: '5px'}}>hover to popup the card</Button>;

        const content = (<div>
            click the button<br/>
            <a style={{right: 0}} id="confirmBtn" onClick={this.hide.bind(this)}>confirm</a>
            <a style={{marginLeft: '4px'}} id="cancelBtn" onClick={this.hide.bind(this)}>cancel</a>
        </div>);
        return (
            <div>
                <Balloon trigger={visibleTrigger}
                    triggerType="click"
                    visible={this.state.visible}
                    onVisibleChange={this.handleVisibleChange.bind(this)}
                >
                    {content}
                </Balloon>
                <Balloon trigger={clickTrigger}
                    triggerType="hover"
                    onClose={this.onClose.bind(this)}
                    afterClose={this.afterClose.bind(this)}>
                    {content}
                </Balloon>
            </div>
        );
    }
}

ReactDOM.render(<App />, mountNode);

````
