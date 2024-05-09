import React from 'react';
import ReactDOM from 'react-dom';
import { Input } from '@alifd/next';
import type { InputProps } from '@alifd/next/types/input';

const onChange: InputProps['onChange'] = v => {
    console.log(v);
};

ReactDOM.render(
    <div>
        <Input size="large" placeholder="Large" onChange={onChange} aria-label="Large" />
        <br />
        <br />

        <span id="J_InputMedium" style={{ display: 'none' }}>
            Aria Labelby Demo{' '}
        </span>
        <Input placeholder="Medium" aria-label="Medium" aria-labelledby="J_InputMedium" />
        <br />
        <br />

        <Input placeholder="Small" size="small" label="SIZE :" id="J_InputSmall" />
        <br />
        <br />

        <Input.TextArea placeholder="TextArea" aria-label="TextArea" />
    </div>,
    mountNode
);
