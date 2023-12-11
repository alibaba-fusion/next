import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { DatePicker, Box } from '@alifd/next';

ReactDOM.render(
    <Box direction="row" spacing={20}>
        <DatePicker size="large" />
        <DatePicker />
        <DatePicker size="small" />
    </Box>,
    mountNode
);
