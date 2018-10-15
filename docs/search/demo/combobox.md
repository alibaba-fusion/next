# 联想

- order: 4

:::lang=en-us
# Sugguest Box

- order: 4
:::
---

````jsx
import { Search } from '@alifd/next';

const dataSource = [{
    label: 'Recent',
    value: 'Recent',
}, {
    label: 'dress',
    value: 'dress',
}, {
    label: 'sunglasses',
    value: 'sunglasses',
}, {
    label: 't-shirt',
    value: 't-shirt',
}];

class App extends React.Component {
    onSearch(value, filterValue) {
        console.log(value, filterValue);
    }

    onChange(value) {
        this.setState({
            value: value
        });
    }

    render() {
        return (
            <Search dataSource={dataSource} onChange={this.onChange.bind(this)}
                onSearch={this.onSearch.bind(this)}/>
        );
    }
}

ReactDOM.render(<App/>, mountNode);
````
