import React from 'react';
import ReactDOM from 'react-dom';
import { Pagination } from '@alifd/next';

class Demo extends React.Component {
    state = {
        pageSize: 20,
    };

    handleChange = (pageSize: number) => {
        this.setState({ pageSize });
    };

    render() {
        return (
            <div>
                <h3>Set page size</h3>
                <Pagination pageSize={20} />
                <h3>Hide page size selector</h3>
                <Pagination pageSizeSelector={false} />
                <h3>Set page size selector to 'dropdown', and show it in the end</h3>
                <Pagination
                    pageSize={this.state.pageSize}
                    onPageSizeChange={this.handleChange}
                    pageSizeSelector="dropdown"
                    pageSizePosition="end"
                />
                <h3>Use pageSizeList to specify the number of records per page.</h3>
                <Pagination
                    pageSize={this.state.pageSize}
                    total={100}
                    pageSizeSelector="filter"
                    pageSizeList={[5, 10, 20]}
                    onPageSizeChange={this.handleChange}
                />
            </div>
        );
    }
}

ReactDOM.render(<Demo />, mountNode);
