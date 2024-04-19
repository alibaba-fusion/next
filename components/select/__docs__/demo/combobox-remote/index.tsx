import React from 'react';
import ReactDOM from 'react-dom';
import { Select } from '@alifd/next';
import jsonp from 'jsonp';
import { type AutoCompleteProps } from '@alifd/next/types/select';

const { AutoComplete } = Select;

class Demo extends React.Component {
    state = {
        dataSource: [],
    };

    searchTimeout: number;

    handleChange: AutoCompleteProps['onChange'] = value => {
        clearTimeout(this.searchTimeout);
        this.searchTimeout = window.setTimeout(() => {
            jsonp(`https://suggest.taobao.com/sug?code=utf-8&q=${value}`, (err, data) => {
                const dataSource = data.result.map((item: unknown[]) => item[0]);
                this.setState({ dataSource });
            });
        }, 100);
    };

    render() {
        return (
            <div className="demo-container">
                <AutoComplete
                    filterLocal={false}
                    placeholder="search from taobao"
                    onChange={this.handleChange}
                    dataSource={this.state.dataSource}
                />
            </div>
        );
    }
}

ReactDOM.render(<Demo />, mountNode);
