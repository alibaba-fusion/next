# 无障碍支持

- order: 6

默认支持通过按下`Esc`键退出全屏显示加载态。

:::lang=en-us
# Accessibility

- order: 6

Press `Esc` to exit fullScreen loading.

:::

---

````jsx
import { Loading, Button } from '@alifd/next';



class App extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            visible: false
        };
    }

    onClick() {
        this.setState({visible: !this.state.visible});
    }

    onClose = () => {
        this.setState({
            visible: false
        });
    }

    render() {
        return (
            <span>
                <Loading visible={this.state.visible}
                    fullScreen
                    safeNode={this.btn}
                    onVisibleChange={this.onClose.bind(this)}>
                    <Button onClick={this.onClick.bind(this)} ref={ref => (this.btn = ref)}>Full Screen</Button>
                </Loading>
            </span>
        );
    }
}

ReactDOM.render(<App/>, mountNode);
````
