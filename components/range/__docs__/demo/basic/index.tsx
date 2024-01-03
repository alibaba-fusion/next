import React from 'react';
import ReactDOM from 'react-dom';
import { Range, Switch } from '@alifd/next';

const style = {
    marginBottom: 20,
};

const Demo = () => {
    const [disabled, setDisabled] = React.useState(false);

    return (
        <div style={{ width: 400 }}>
            <Range defaultValue={30} disabled={disabled} style={style} />
            <Range slider="double" defaultValue={[20, 70]} disabled={disabled} style={style} />

            <div style={{ display: 'flex', alignItems: 'center' }}>
                Disabled: <Switch checked={disabled} onChange={setDisabled} />
            </div>
        </div>
    );
};

ReactDOM.render(<Demo />, mountNode);
