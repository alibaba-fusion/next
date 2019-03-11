# 无障碍

- order: 6

通过`onSearch`事件去处理,请参考`ARIA and KeyBoard`。

:::lang=en-us

This is handled by the `onSearch` event,Please refer to `ARIA and KeyBoard`.

# Addon

- order: 6

:::
---

````jsx
import { Search } from '@alifd/next';

class Demo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name:''
        };
        this.onsearch = this.onsearch.bind(this);
        this.onchange = this.onchange.bind(this);
    }
    onchange(v) {
        this.setState({name: v});
    }
    onsearch() {
        console.log(this.state.name);
    }
    render() {
        return (<div>
            <Search key="3" onChange={this.onchange} placeholder="请输入搜索文字" onSearch={this.onsearch} searchText={<span>search</span>} style={{width: '400px'}}/>
        </div>);
    }
}
ReactDOM.render(<Demo />, mountNode);
````
