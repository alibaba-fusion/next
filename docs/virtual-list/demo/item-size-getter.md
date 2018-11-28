# 不等高的item

- order: 2

使用 jumpIndex 设置初始位置, 并设置 itemSizeGetter

:::lang=en-us
# Basic

- order: 2

Use jumpIndex and itemSizeGetter to set first item in visual area.

:::

---

````jsx
import { VirtualList } from '@alifd/next';

const dataSource = [];

function generateLi(index) {
    if (index % 3 === 0) {
        return (<li key={`key-${index}`} style={{lineHeight: '30px', background: '#5f83ff', color: '#fff'}}>key-{index}</li>);
    } else {
        return (<li key={`key-${index}`}  style={{lineHeight: '20px'}}>key-{index}</li>);
    }
}
function generateData(len) {
    for (let i = 0; i < len; i++) {
        dataSource.push(generateLi(i));
    }
}

class App extends React.Component  {
    state = {
        initial: 20,
        dataSource: generateData(1000)
    }

    componentDidMount() {
        setTimeout(() => {
            const instance = this.refs.virtual.getInstance();
            instance.scrollTo(50);
        }, 200);

    }

    getHeight(index) {
        return index % 3 === 0 ? 30 : 20;
    }

    onClick() {
        this.setState({
            initial: this.state.initial + 20
        });
    }

    render() {
        return (
            <div>
                <button onClick={this.onClick.bind(this)}>jump to {this.state.initial + 20}</button>
                <br/>
                <br/>
                <div className={'virtual-box'}>
                    <VirtualList ref="virtual" jumpIndex={this.state.initial} itemSizeGetter={this.getHeight.bind(this)}>
                        {dataSource}
                    </VirtualList>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, mountNode);
````

````css
.virtual-box {
    height: 200px;
    width: 200px;
    border: 1px solid #ddd;
    overflow: auto;
}
.virtual-box ul {
    padding: 0;
    margin: 0;
    list-style: none;
}
.virtual-box li {
    padding-left: 10px;
    border-bottom: 1px solid #333;
}
````
