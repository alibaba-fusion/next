import React from 'react';
import ReactDOM from 'react-dom';

import { DatePicker2 } from '@alifd/next';

const { RangePicker } = DatePicker2;

function App() {
    return (
        <div className="app">
            <div>
                <DatePicker2 hasBorder={false} />
            </div>
            <div>
                <RangePicker hasBorder={false} />
            </div>
        </div>
    );
}

ReactDOM.render(<App />, mountNode);
