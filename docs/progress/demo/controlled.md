# 动态展示

- order: 5

此时为增强模式的进度条，会根据当前进度展示不同的样式。

:::lang=en-us
# Dynamic

- order: 5

The dynmaic exmaple.

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
