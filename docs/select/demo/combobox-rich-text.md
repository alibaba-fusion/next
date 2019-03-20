# 图文展示

- order: 12

展示较为复杂的内容展示

:::lang=en-us
# picture list

- order: 12

menu with pictures
:::
---

````jsx
import { Select, Icon } from '@alifd/next';
import jsonp from 'jsonp';

const {AutoComplete} = Select;

class Demo extends React.Component {
    state = {
        dataSource: []
    }

    handleChange = (value) => {
        if (this.searchTimeout) {
            clearTimeout(this.searchTimeout);
        }
        this.searchTimeout = setTimeout(() => {
            // eslint-disable-next-line handle-callback-err
            jsonp(`https://suggest.taobao.com/sug?code=utf-8&q=${value}`, (err, data) => {
                const dataSource = data.result.map(item => {
                    return {
                        label: <div><Icon type="picture" size="small"/>&nbsp;{item[0]}</div>,
                        value: item[1],
                        originLabel: item[0]
                    };
                });
                this.setState({dataSource});
            });
        }, 100);
    }

    render() {
        return (
            <div className="demo-container">
                <AutoComplete onChange={this.handleChange}
                    filterLocal={false}
                    fillProps="originLabel"
                    placeholder="search from taobao"
                    dataSource={this.state.dataSource}/></div>
        );
    }
}
ReactDOM.render(<Demo/>, mountNode);
````

````css
.next-select {
    margin-right:10px;
    vertical-align: middle;
}

.demo-container {
  background-color: #F8F8F8;
  padding: 16px;
}

.demo-container p {
    margin-top:0;
}
````
