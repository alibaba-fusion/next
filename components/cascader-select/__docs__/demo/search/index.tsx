import React from 'react';
import ReactDOM from 'react-dom';
import { Checkbox, CascaderSelect } from '@alifd/next';
import 'whatwg-fetch';

class Demo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
        };
    }

    componentDidMount() {
        fetch('https://os.alipayobjects.com/rmsportal/ODDwqcDFTLAguOvWEolX.json')
            .then(response => response.json())
            .then(data => this.setState({ data, value: ['2975'] }))
            .catch(e => console.log(e));
    }

    handleChange = (value, data, extra) => {
        console.log(value, data, extra);
    };

    filter(searchValue, path) {
        return (
            searchValue === '' ||
            path
                .map(({ value, label }) => `${value}${label}`)
                .join('')
                .match(searchValue)
        );
    }

    render() {
        return (
            <div className="search-demo">
                <CascaderSelect
                    showSearch
                    style={{ width: '240px' }}
                    dataSource={this.state.data}
                    placeholder="搜索名字"
                    onChange={this.handleChange}
                />
                <br />
                <br />
                <CascaderSelect
                    showSearch
                    filter={this.filter}
                    style={{ width: '240px' }}
                    multiple={this.state.multiple}
                    dataSource={this.state.data}
                    onChange={this.handleChange}
                    placeholder="搜索名字或id值"
                />
            </div>
        );
    }
}

ReactDOM.render(<Demo />, mountNode);
