# 自定义菜单项选择

- order: 7
- debug: true

展示自定义组合菜单项可选的用法。

:::lang=en-us
# Customize menu item selection

- order: 7
- debug: true

Demo how to customize menu item selection.
:::

---

````jsx
import { Menu } from '@alifd/next';

const { CheckboxItem, RadioItem, Divider } = Menu;

const sexs = ['male', 'female'];
const balls = ['football', 'basketball', 'volleyball'];

class Demo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            sex: 'male',
            balls: []
        };

        this.handleSexCheck = this.handleSexCheck.bind(this);
        this.handleBallCheck = this.handleBallCheck.bind(this);
    }

    handleSexCheck(key) {
        this.setState({
            sex: key
        });
    }

    handleBallCheck(key, check) {
        let newKeys;
        const index = this.state.balls.indexOf(key);
        if (check && index === -1) {
            newKeys = this.state.balls.concat(key);
        } else if (!check && index > -1) {
            newKeys = [
                ...this.state.balls.slice(0, index),
                ...this.state.balls.slice(index + 1)
            ];
        }

        if (newKeys) {
            this.setState({
                balls: newKeys
            });
        }
    }

    render() {
        return (
            <Menu className="my-menu">
                {sexs.map(sex => (
                    <RadioItem key={sex} checked={this.state.sex === sex} onChange={this.handleSexCheck.bind(this, sex)}>
                        {sex}
                    </RadioItem>
                ))}
                <Divider key="divider" />
                {balls.map(ball => (
                    <CheckboxItem key={ball} checked={this.state.balls.indexOf(ball) > -1} onChange={this.handleBallCheck.bind(this, ball)}>
                        {ball}
                    </CheckboxItem>
                ))}
            </Menu>
        );
    }
}

ReactDOM.render(<Demo />, mountNode);
````

````css
.my-menu {
    width: 200px;
}
````
