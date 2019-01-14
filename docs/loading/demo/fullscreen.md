# 全屏

- order: 3

全屏展示

:::lang=en-us
# Fullscreen

- order: 3

display a fullscreen loading

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
                    shape="fusion-reactor"
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
