import React from 'react';
import ReactDOM from 'react-dom';
import { Transfer, Button } from '@alifd/next';

const dataSource = (() => {
    const dataSource = [];

    for (let i = 0; i < 10; i++) {
        dataSource.push({
            label: i % 3 === 0 ? `content${i}contentcontentcontentcontentcontent` : `content${i}`,
            value: `${i}`,
            disabled: i % 4 === 0,
        });
    }

    return dataSource;
})();

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
                defaultValue={['3']}
                dataSource={dataSource}
                listStyle={{ width: '200px', height: '192px' }}
                defaultLeftChecked={['1']}
                onChange={this.handleChange}
                titles={[
                    <Button key="left" type="primary">
                        Source
                    </Button>,
                    'Target',
                ]}
                operations={['>>', '<<']}
            />
        );
    }
}

ReactDOM.render(<Demo />, mountNode);
