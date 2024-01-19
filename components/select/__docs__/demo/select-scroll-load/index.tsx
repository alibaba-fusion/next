import React from 'react';
import ReactDOM from 'react-dom';
import { Select } from '@alifd/next';

const Option = Select.Option;

function generateItem(start, end) {
    const arr = [];
    for (let i = start; i < end; i++) {
        arr.push({ label: `option${i}`, value: `option${i}` });
    }
    return arr;
}

class App extends React.Component {
    state = {
        dataSource: generateItem(0, 10),
    };

    onScroll = e => {
        const scrollHeight = e.target.scrollHeight; // 内容总高度
        const clientHeight = e.target.clientHeight; // 窗口高度
        const scrollTop = e.target.scrollTop; //滚动高度
        console.log(scrollTop, clientHeight, scrollHeight);

        if (scrollTop + clientHeight === scrollHeight) {
            // 到达底部
            const dataSource = this.state.dataSource;
            const otherData = generateItem(dataSource.length, dataSource.length + 10);

            console.log(dataSource, otherData);
            this.setState({
                dataSource: dataSource.concat(otherData),
            });
        }
    };

    render() {
        return (
            <Select
                style={{ width: 200 }}
                dataSource={this.state.dataSource}
                menuProps={{ onScroll: this.onScroll }}
                autoHighlightFirstItem={false}
            />
        );
    }
}

ReactDOM.render(<App />, mountNode);
