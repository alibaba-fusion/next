# onAffix

- order: 1

可以通过传入 `onAffix` 的事件回调函数来监听元素是否发生了固钉状态。该函数会在状态变化时返回固钉状态。

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
            <span>Scroll window to see button text change:  </span>
            <Affix onAffix={this.onAffix} style={{display: 'inline-flex'}}>
                <Button type="secondary">{state.affixed ? 'Affixed Button' : 'Unaffixed Button'}</Button>
            </Affix>
        </div>);
    }
}


ReactDOM.render(<Demo />, mountNode);
````
