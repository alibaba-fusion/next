# 搜索框

- order: 7

使用 `showSearch` 显示搜索框，如果需要动态更新 dataSource，需要关闭 filterLocal

:::lang=en-us
# Search

- order: 7

search box will show by `showSearch`，if `dataSource` is update by remote api，you need to set `filterLocal=false`

:::
---

````jsx
import { Select } from '@alifd/next';
import jsonp from 'jsonp';

let timestamp = Date.now();

class Demo extends React.Component {
    state = {
        dataSource: []
    }

    handleSearch = (value) => {
        if (this.searchTimeout) {
            clearTimeout(this.searchTimeout);
        }
        this.searchTimeout = setTimeout(() => {
            // eslint-disable-next-line handle-callback-err
            value ? jsonp(`https://suggest.taobao.com/sug?code=utf-8&q=${value}`, (err, data) => {
                const dataSource = data.result.map(item => ({
                    label: item[0], value: (timestamp++).toString(36)
                }));
                this.setState({dataSource});
            }) : this.setState({dataSource: []});
        }, 100);
    }

    render() {
        return (
            <div className="demo-container">
                <Select showSearch placeholder="select search" filterLocal={false} dataSource={this.state.dataSource} onSearch={this.handleSearch} style={{width: 200}}/>
            </div>
        );
    }
}

ReactDOM.render(<Demo/>, mountNode);
````
