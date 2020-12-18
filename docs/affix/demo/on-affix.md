# 固钉事件

- order: 1

`onAffix` 该函数会在状态变化时返回固钉状态。向下滚动查看效果

:::lang=en-us
# onAffix

- order: 1

Listening the affix state by `onAffix`.

:::

---

````jsx
import { Affix, Button } from '@alifd/next';

class Demo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            affixed: false
        };
    }

    onAffix = (affixed) => {
        this.setState({
            affixed
        });
    }

    render() {
        const state = this.state;

        return (<div>
            <Affix onAffix={this.onAffix} style={{display: 'inline-flex'}}>
                <Button type="primary">{state.affixed ? 'Affixed Button' : 'Unaffixed Button'}</Button>
            </Affix>
        </div>);
    }
}


ReactDOM.render(<Demo />, mountNode);
````
