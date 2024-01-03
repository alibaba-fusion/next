import React from 'react';
import ReactDOM from 'react-dom';
import { Search } from '@alifd/next';

ReactDOM.render(
    <div>
        <Search
            size="large"
            defaultValue="large"
            searchText="Search"
            placeholder="What are you looking for..."
        />
        <br />
        <br />
        <Search
            size="medium"
            defaultValue="medium"
            searchText="Search"
            placeholder="What are you looking for..."
        />
    </div>,
    mountNode
);
