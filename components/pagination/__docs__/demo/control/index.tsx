import React from 'react';
import ReactDOM from 'react-dom';
import { Pagination } from '@alifd/next';

class Demo extends React.Component {
    state = {
        current: 2,
    };

    handleChange = (current: number) => {
        this.setState({
            current,
        });
    };

    render() {
        return <Pagination current={this.state.current} onChange={this.handleChange} />;
    }
}

ReactDOM.render(<Demo />, mountNode);
