import React from 'react';
import ReactDOM from 'react-dom';
import { Range } from '@alifd/next';

const style = {
    marginBottom: '20px',
    marginTop: '20px',
};

ReactDOM.render(
    <div style={{ width: '400px', margin: '50px' }}>
        <p>With minimal and maximal value</p>
        <Range defaultValue={0} marks={[0, 100]} style={style} />
        <Range slider={'double'} defaultValue={[20, 40]} marks={[0, 100]} style={style} />
        <Range defaultValue={30} style={style} />
        <p>Marks below</p>
        <Range defaultValue={0} marks={[0, 100]} style={style} marksPosition="below" />
        <Range
            slider={'double'}
            defaultValue={[20, 40]}
            marks={[0, 100]}
            style={style}
            marksPosition="below"
        />
        <Range defaultValue={30} marks={[0, 100]} style={style} marksPosition="below" />
        <p>Equal division</p>
        <Range defaultValue={30} marks={5} style={style} />
        <Range slider={'double'} defaultValue={[20, 40]} marks={10} style={style} />
        <Range disabled slider={'double'} defaultValue={[20, 40]} marks={10} style={style} />
        <p>Free</p>
        <Range defaultValue={30} marks={[0, 26, 37, 100]} style={style} />
        <Range
            slider={'double'}
            defaultValue={[20, 40]}
            marks={[0, 26, 37, 100]}
            style={style}
            hasTip={false}
        />
        <Range
            defaultValue={30}
            marks={{ 0: '0°C', 26: '26°C', 37: '37°C', 100: '100°C' }}
            style={style}
        />
    </div>,
    mountNode
);
