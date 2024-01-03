import React from 'react';
import ReactDOM from 'react-dom';
import { Typography } from '@alifd/next';

const { Text } = Typography;

ReactDOM.render(
    <div>
        <Text>Fusion Design</Text>
        <br />
        <Text mark>Fusion Design</Text>
        <br />
        <Text code>Fusion Design</Text>
        <br />
        <Text underline>Fusion Design</Text>
        <br />
        <Text delete>Fusion Design</Text>
        <br />
        <Text strong>Fusion Design</Text>
    </div>,
    mountNode
);
