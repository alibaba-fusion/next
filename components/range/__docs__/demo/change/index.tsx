import React from 'react';
import ReactDOM from 'react-dom';
import { Range } from '@alifd/next';

const onProcess = value => {
    // This callback will be triggered when startValue and endValue aren't equal after mousedown/mousemove. You shouldn't call setState here.
    console.log('onProcess: ', value);
};

const Demo = () => {
    const [value, onChange] = React.useState(128);
    const [doubleValue, onDoubleChange] = React.useState([200, 500]);

    return (
        <div style={{ width: 400 }}>
            <div style={{ display: 'flex', marginBottom: 20 }}>
                <Range
                    value={value}
                    onChange={onChange}
                    onProcess={onProcess}
                    min={0}
                    max={1024}
                    marks={[0, 1024]}
                    style={{ marginRight: 30 }}
                />
                <Range value={value} onProcess={onProcess} min={0} max={1024} marks={[0, 1024]} />
            </div>

            <Range
                slider="double"
                value={doubleValue}
                onChange={onDoubleChange}
                onProcess={onProcess}
                min={0}
                max={1024}
                marks={[0, 1024]}
            />
        </div>
    );
};

ReactDOM.render(<Demo />, mountNode);
