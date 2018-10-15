# 下拉框

- order: 3

带下拉框的用法。可以设置onFilterChange事件

:::lang=en-us

# Filter

- order: 3

Filter dropdown, use with onFilterChange event
:::
---

````jsx
import { Search } from '@alifd/next';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            filter: [
                {
                    label: 'Products',
                    value: 'Products'
                },
                {
                    label: 'Products1',
                    value: 'Products1'
                },
                {
                    label: 'Products2',
                    value: 'Products2'
                },
                {
                    label: 'Products3',
                    value: 'Products3'
                },
                {
                    label: 'Products4',
                    value: 'Products4'
                },
                {
                    label: 'Products5',
                    value: 'Products5'
                },
                {
                    label: 'Products6',
                    value: 'Products6'
                },
                {
                    label: 'Products7',
                    value: 'Products7'
                },
                {
                    label: 'Products8',
                    value: 'Products8'
                },
                {
                    label: 'Products9',
                    value: 'Products9'
                },
                {
                    label: 'Products10',
                    value: 'Products10'
                },
                {
                    label: 'Suppliers',
                    value: 'Suppliers',
                    default: true
                }
            ],
            value: ''
        };
    }

    onSearch(value, filterValue) {
        console.log(value, filterValue);
    }

    onChange(value) {
        this.setState({
            value: value
        });
    }

    // value is filter value，obj is the search value
    onFilterChange(value) {
        console.log(value);
    }

    render() {

        return (<div>
            <Search onChange={this.onChange.bind(this)} onSearch={this.onSearch.bind(this)}
                filterProps={{autoWidth: false}}
                filter={this.state.filter} onFilterChange={this.onFilterChange.bind(this)}/>
        </div>);
    }
}

ReactDOM.render(<App/>, mountNode);
````
