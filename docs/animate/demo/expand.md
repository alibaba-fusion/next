# 展开收起动画

- order: 2

展示单个子元素的展开收起动画。

:::lang=en-us
# Expand and collapse animation

- order: 2

Demo the expand and collapse animation of a child element.
:::

---

````jsx
import { Animate } from '@alifd/next';

class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.state = { expand: true };
        ['beforeEnter', 'onEnter', 'afterEnter', 'beforeLeave', 'onLeave', 'afterLeave', 'handleToggle'].forEach(method => {
            this[method] = this[method].bind(this);
        });
    }

    handleToggle() {
        this.setState({
            expand: !this.state.expand
        });
    }

    beforeEnter(node) {
        this.height = node.offsetHeight;
        node.style.height = '0px';
    }

    onEnter(node) {
        node.style.height = `${this.height}px`;
    }

    afterEnter(node) {
        this.height = null;
        node.style.height = null;
    }

    beforeLeave(node) {
        node.style.height = `${this.height}px`;
    }

    onLeave(node) {
        node.style.height = '0px';
    }

    afterLeave(node) {
        node.style.height = null;
    }

    render() {
        return (
            <div>
                <button onClick={this.handleToggle}>Toggle expand</button>
                <Animate animation="expand"
                    beforeEnter={this.beforeEnter}
                    onEnter={this.onEnter}
                    afterEnter={this.afterEnter}
                    beforeLeave={this.beforeLeave}
                    onLeave={this.onLeave}
                    afterLeave={this.afterLeave}>
                    {this.state.expand ?
                        <div className="notice"></div> :
                        null}
                </Animate>
            </div>
        );
    }
}

ReactDOM.render(<Demo />, mountNode);
````

````css
.expand-enter {
    overflow: hidden;
}

.expand-enter-active {
    transition: height 0.3s ease-out;
}

.expand-leave {
    overflow: hidden;
}

.expand-leave-active {
    transition: height 0.3s ease-out;
}

.notice {
    width: 200px;
    height: 100px;
    margin-top: 20px;
    border: 1px solid #ccc;
}
````
