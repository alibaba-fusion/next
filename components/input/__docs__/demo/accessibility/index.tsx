import React from 'react';
import ReactDOM from 'react-dom';
import { Input } from '@alifd/next';
import type { InputProps } from '@alifd/next/types/input';

const onChange: InputProps['onChange'] = v => {
    console.log(v);
};
const onKeyDown: InputProps['onKeyDown'] = v => {
    console.log(v);
};
ReactDOM.render(
    <div>
        <Input
            size="large"
            placeholder="please input"
            onChange={onChange}
            onKeyDown={onKeyDown}
            aria-label="this is input"
        />
    </div>,
    mountNode
);
