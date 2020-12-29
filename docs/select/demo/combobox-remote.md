# 辅助输入获取远程数据

- order: 11

使用动态数据填充 AutoComplete, 设置 `filterLocal` 为 false

:::lang=en-us
# Dynamic data

- order: 11

By set `filterLocal` to false, so you can use AutoComplete with dynamic data.
:::
---

````jsx
import { Select } from '@alifd/next';
import jsonp from 'jsonp';

const {AutoComplete} = Select;

class Demo extends React.Component {
    state = {
        dataSource: []
    };

    handleChange = value => {
        clearTimeout(this.searchTimeout);
        this.searchTimeout = setTimeout(() => {
            // eslint-disable-next-line handle-callback-err
            jsonp(`https://suggest.taobao.com/sug?code=utf-8&q=${value}`, (err, data) => {
                const dataSource = data.result.map(item => item[0]);
                this.setState({dataSource});
            });
        }, 100);
    }

    render() {
        return (
            <div className="demo-container">
                <AutoComplete
                    filterLocal={false}
                    placeholder="search from taobao"
                    onChange={this.handleChange}
                    dataSource={this.state.dataSource}/>
            </div>
        );
    }
}

ReactDOM.render(<Demo/>, mountNode);
````

````css
.demo-container {
    background-color: #F8F8F8;
    padding: 16px;
}
````
