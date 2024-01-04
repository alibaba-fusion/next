import React from 'react';
import ReactDOM from 'react-dom';
import { Range } from '@alifd/next';

const style = {
    marginBottom: '15px',
};

ReactDOM.render(
    <div style={{ width: '400px', margin: '50px' }}>
        <Range defaultValue={30} style={style} reverse hasTip={false} />
        <Range slider={'double'} defaultValue={[20, 40]} style={style} reverse />
    </div>,
    mountNode
);
