import React from 'react';
import ReactDOM from 'react-dom';
import { Search } from '@alifd/next';

const dataSource = [
    {
        label: 'Recent label',
        value: 'Recent',
    },
    {
        label: 'dress label',
        value: 'dress',
    },
    {
        label: 'sunglasses label',
        value: 'sunglasses',
    },
    {
        label: 't-shirt label',
        value: 't-shirt',
    },
];

class App extends React.Component {
    onSearch(value, filterValue) {
        console.log('onSearch', value, filterValue);
    }

    onChange(value, type, e) {
        console.log('onChange', value, type, e);
        this.setState({
            value: value,
        });
    }

    render() {
        return (
            <div>
                auto highlight first item
                <br />
                <Search
                    dataSource={dataSource}
                    fillProps="label"
                    onChange={this.onChange.bind(this)}
                    onSearch={this.onSearch.bind(this)}
                />
                <br />
                <br />
                no default highlight item, should use UP/DOWN
                <br />
                <Search
                    autoHighlightFirstItem={false}
                    fillProps="label"
                    dataSource={dataSource}
                    onChange={this.onChange.bind(this)}
                    onSearch={this.onSearch.bind(this)}
                />
            </div>
        );
    }
}

ReactDOM.render(<App />, mountNode);
