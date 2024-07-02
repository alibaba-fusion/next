import React from 'react';
import ReactDOM from 'react-dom';
import { Pagination } from '@alifd/next';

class Demo extends React.Component<any, { current: number }> {
    constructor(props: any) {
        super(props);

        this.state = {
            current: 2,
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(current: number) {
        this.setState({
            current,
        });
    }

    render() {
        return <Pagination current={this.state.current} onChange={this.handleChange} />;
    }
}

ReactDOM.render(<Demo />, mountNode);
