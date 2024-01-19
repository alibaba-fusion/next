import React from 'react';
import ReactDOM from 'react-dom';
import { Search } from '@alifd/next';

ReactDOM.render(
    <div>
        <Search
            key="3"
            placeholder="Please enter the search content"
            onSearch={v => console.log(v)}
            searchText={<span>search</span>}
            style={{ width: '400px' }}
        />
    </div>,
    mountNode
);
