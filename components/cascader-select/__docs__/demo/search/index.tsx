import React from 'react';
import ReactDOM from 'react-dom';
import { CascaderSelect } from '@alifd/next';
import 'whatwg-fetch';
import type { CascaderSelectProps } from '@alifd/next/types/cascader-select';

class Demo extends React.Component {
    state = {
        data: [],
        multiple: false,
    };

    componentDidMount() {
        fetch('https://os.alipayobjects.com/rmsportal/ODDwqcDFTLAguOvWEolX.json')
            .then(response => response.json())
            .then(data => this.setState({ data, value: ['2975'] }))
            .catch(e => console.log(e));
    }

    handleChange: CascaderSelectProps['onChange'] = (value, data, extra) => {
        console.log(value, data, extra);
    };

    filter: CascaderSelectProps['filter'] = (searchValue, path) => {
        return !!(
            searchValue === '' ||
            path
                .map(({ value, label }) => `${value}${label}`)
                .join('')
                .match(searchValue)
        );
    };

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
