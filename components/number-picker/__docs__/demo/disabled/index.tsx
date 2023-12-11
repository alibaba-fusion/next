import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { NumberPicker } from '@alifd/next';

ReactDOM.render(
    <div>
        <NumberPicker defaultValue={0} disabled />
        <br />
        <br />
        <NumberPicker defaultValue={0} type="inline" disabled />
    </div>,
    mountNode
);
