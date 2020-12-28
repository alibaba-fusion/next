# 自定义目标容器

- order: 3

可以通过 `container` 属性设置 Affix 组件需要监听其滚动事件的元素，该属性接收一个函数作为参数，默认为 `() => window`。

:::lang=en-us
# Container

- order: 3

Change the default container by passing a function to `container`.

:::

---

````jsx
import { Affix, Button } from '@alifd/next';

class Demo extends React.Component {

    _containerRefHandler(ref) {
        this.container = ref;
    }

    render() {
        return (
            <div className="custom-affix-container" ref={this._containerRefHandler.bind(this)}>
                <div className="affix-wrapper">
                    <Affix container={() => this.container} offsetTop={0}>
                        <Button type="primary" model="outline">Custom Container Affixed</Button>
                    </Affix>
                </div>
            </div>
        );
    }
}



ReactDOM.render(<Demo />, mountNode);
````

````css
.custom-affix-container {
    height: 150px;
    overflow-y: scroll;
    background: url(https://img.alicdn.com/tfs/TB1AbJXSpXXXXXJXpXXXXXXXXXX-32-32.jpg) repeat 50% 50%;
}

.custom-affix-container .affix-wrapper {
    padding-top: 50px;
    height: 500px;
}
````
