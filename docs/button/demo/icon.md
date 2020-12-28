# 图标按钮

- order: 5

`Button` 可以嵌入 `Icon`，默认情况下 `Icon` 尺寸自动跟随 `Button` 的尺寸，可以通过 `iconSize` 属性进行设置。

通过设置 `icons` 属性中的 `loading` 即可自定义加载的 `icon`。

:::lang=en-us
# Icon

- order: 5

Button could contain Icon as its children, the default size of Icon is controlled by the Button size. And it can be manually controlled by using `iconSize` prop.

:::

---

````jsx
import { Button, Icon, Box } from '@alifd/next';

class LoadingIcon extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            loading: false
        };
    }

    setLoading = () => {
        this.setState({ loading: true });
    }

    render() {
        return (<Box direction="row" spacing={20}>
            <Button
                type="primary"
                iconSize="xs" 
                loading 
                icons={{ loading: <Icon type="loading" style={{ color: 'orange' }} /> }}>
                Custom loading icon
            </Button>
            <Button 
                type="primary"
                model="outline" 
                loading={this.state.loading} 
                onClick={this.setLoading} 
                icons={{ loading: <Icon type="loading" style={{ color: 'orange' }} /> }}>
                Click to loading and show loading icon
            </Button>
        </Box>);
    }
}

ReactDOM.render(<div >
    <Box direction="row" spacing={20}>
        <Button ><Icon type="atm" /> ATM</Button>
        <Button model="text"><Icon type="atm" /> ATM</Button>
        <Button model="outline" iconSize="xxs"><Icon type="arrow-left" /> ARROW</Button>
        <Button type="warning"><Icon type="atm" /> ATM</Button>
    </Box>
    <br/>
    <LoadingIcon />
</div>, mountNode);
````
