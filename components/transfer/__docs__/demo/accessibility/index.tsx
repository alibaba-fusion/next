import React from 'react';
import ReactDOM from 'react-dom';
import { Transfer } from '@alifd/next';

const dataSource = (() => {
    const dataSource = [];

    for (let i = 0; i < 10; i++) {
        dataSource.push({
            label: `content${i}`,
            value: `${i}`,
        });
    }

    return dataSource;
})();

const obj = {
    items: '项',
    item: '项',
    moveAll: '移动全部',
    searchPlaceholder: '请输入',
    moveToLeft: '撤销选中元素',
    moveToRight: '提交选中元素',
};

class Demo extends React.Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(value, data, extra) {
        console.log(value, data, extra);
    }

    render() {
        return (
            <Transfer
                id="a11y-transfer"
                defaultValue={['2']}
                dataSource={dataSource}
                defaultLeftChecked={['1']}
                locale={obj}
                onChange={this.handleChange}
                titles={['Title', 'Title']}
            />
        );
    }
}

ReactDOM.render(<Demo />, mountNode);
