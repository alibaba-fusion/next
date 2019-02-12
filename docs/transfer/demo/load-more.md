# 分页加载

- order: 6

展示分页加载的用法。

:::lang=en-us
# Load more

- order: 6

Demo the load more usage.
:::

---

````jsx
import { Transfer } from '@alifd/next';

const dataSource = (() => {
    const dataSource = [];

    for (let i = 0; i < 10; i++) {
        dataSource.push({
            label: `content${i}`,
            value: `${i}`,
            disabled: i % 4 === 0
        });
    }

    return dataSource;
})();

class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource,
            loading: false,
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(value, data, extra) {
        console.log(value, data, extra);
    }
    
    loadMore() {
        const ctx = this;
        this.setState({loading: true});
        setTimeout(()=> {
            const i = dataSource.length++;
            dataSource.push({
                            label: `content${i}`,
                            value: `${i}`,
                            disabled: i % 4 === 0
                        });
            ctx.setState({
                loading: false,
                dataSource
            });
        }, 1000)
    }

    render() {
        const { dataSource, loading } = this.state;
        return <Transfer 
            showSearch 
            hasMore
            loading={loading}
            onLoadMore={this.loadMore.bind(this)}
            defaultValue={['3']} 
            dataSource={dataSource} 
            defaultLeftChecked={['1']} 
            onChange={this.handleChange} 
            titles={['Searchable', 'Searchable']} 
        />;
    }
}

ReactDOM.render(<Demo />, mountNode);
````
