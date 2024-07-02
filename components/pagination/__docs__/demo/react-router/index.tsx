import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, useHistory } from 'react-router-dom';
import { Pagination } from '@alifd/next';

function App() {
    const history = useHistory();

    function handleChange(page: number) {
        history.push(page.toString());
    }

    return <Pagination defaultCurrent={2} onChange={handleChange} />;
}

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    mountNode
);
