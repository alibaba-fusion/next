# 动态展示

- order: 6

此时为增强模式的进度条，会根据当前进度展示不同的样式。注: css animation完成需要时间, 数据调整过于频繁会导致显示延迟。

:::lang=en-us
# Dynamic

- order: 6

The dynmaic exmaple. Attention: Animation require time to finish, so changing percent too frequently may cause display delay.

:::

---

````jsx
import { Progress, Button, Icon } from '@alifd/next';


class CustomProgress extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            percent: 0,
        };
    }

    addProgress = () => {
        this.setState(prevState => {
            return {
                percent: prevState.percent + 10
            };
        });
    }

    minusProgress = () => {
        this.setState(prevState => {
            return {
                percent: prevState.percent - 10
            };
        });
    }

    render() {
        const state = this.state;
        return (<div>
            <div className="progress-panel">
                <Button.Group>
                    <Button onClick={this.minusProgress} disabled={state.percent === 0}><Icon type="minus" /></Button>
                    <Button onClick={this.addProgress} disabled={state.percent === 100}><Icon type="add" /></Button>
                </Button.Group>
            </div>

            <Progress percent={state.percent} progressive size="large" />
            <br /><br />
            <Progress percent={state.percent} progressive shape="circle" size="large" />
        </div>);
    }
}

ReactDOM.render(<CustomProgress />, mountNode);
````

````css
.progress-panel {
    display: flex;
    margin-bottom: 14px;
}

.custom-select {
    margin-right: 20px;
}
````
