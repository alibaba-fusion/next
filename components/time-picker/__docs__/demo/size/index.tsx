import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { TimePicker, Box } from '@alifd/next';

ReactDOM.render(
    <Box direction="row" spacing={20}>
        <TimePicker size="large" />
        <TimePicker />
        <TimePicker size="small" />
    </Box>,
    mountNode
);
