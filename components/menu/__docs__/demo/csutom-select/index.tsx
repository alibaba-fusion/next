import React from 'react';
import ReactDOM from 'react-dom';
import { Menu } from '@alifd/next';

const { CheckboxItem, RadioItem, Divider } = Menu;

const sexs = ['male', 'female'];
const balls = ['football', 'basketball', 'volleyball'];

class Demo extends React.Component {
    state = {
        sex: 'male',
        balls: [] as string[],
    };

    handleSexCheck = (key: string) => {
        this.setState({
            sex: key,
        });
    };

    handleBallCheck = (key: string, check: boolean) => {
        let newKeys;
        const index = this.state.balls.indexOf(key);
        if (check && index === -1) {
            newKeys = this.state.balls.concat(key);
        } else if (!check && index > -1) {
            newKeys = [...this.state.balls.slice(0, index), ...this.state.balls.slice(index + 1)];
        }

        if (newKeys) {
            this.setState({
                balls: newKeys,
            });
        }
    };

    render() {
        return (
            <Menu className="my-menu">
                {sexs.map(sex => (
                    <RadioItem
                        key={sex}
                        checked={this.state.sex === sex}
                        onChange={this.handleSexCheck.bind(this, sex)}
                    >
                        {sex}
                    </RadioItem>
                ))}
                <Divider key="divider" />
                {balls.map(ball => (
                    <CheckboxItem
                        key={ball}
                        checked={this.state.balls.indexOf(ball) > -1}
                        onChange={this.handleBallCheck.bind(this, ball)}
                    >
                        {ball}
                    </CheckboxItem>
                ))}
            </Menu>
        );
    }
}

ReactDOM.render(<Demo />, mountNode);
