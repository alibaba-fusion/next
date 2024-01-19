import React from 'react';
import ReactDOM from 'react-dom';
import { Range, NumberPicker, Icon } from '@alifd/next';

const Demo = () => {
    const [valueInc, setValueInc] = React.useState(30);

    const colorCry = ``;
    return (
        <div style={{ width: 400 }}>
            <div style={{ display: 'flex' }}>
                <Range
                    value={valueInc}
                    onChange={setValueInc}
                    min={0}
                    max={100}
                    step={5}
                    style={{ marginRight: 10 }}
                />
                <NumberPicker value={valueInc} onChange={setValueInc} min={0} max={100} step={5} />
            </div>
            <div style={{ display: 'flex', marginTop: 20 }}>
                <Icon
                    type="cry"
                    style={{ marginRight: 10, color: `rgba(50,50,50, ${(100 - valueInc) / 100})` }}
                />
                <Range
                    value={valueInc}
                    onProcess={setValueInc}
                    min={0}
                    max={100}
                    style={{ marginRight: 10 }}
                />
                <Icon type="smile" style={{ color: `rgba(50,50,50, ${valueInc / 100})` }} />
            </div>
        </div>
    );
};

ReactDOM.render(<Demo />, mountNode);
