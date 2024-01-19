import React from 'react';
import ReactDOM from 'react-dom';
import { Pagination } from '@alifd/next';

class Demo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            current: 2,
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(current) {
        this.setState({
            current,
        });
    }

    render() {
        return <Pagination current={this.state.current} onChange={this.handleChange} />;
    }
}

ReactDOM.render(<Demo />, mountNode);
