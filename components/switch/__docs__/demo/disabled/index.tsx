import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Switch } from '@alifd/next';

const Demo = () => {
    const [disabled, setDisabled] = React.useState(true);

    const toggle = () => {
        setDisabled(!disabled);
    };

    return (
        <div>
            <Switch autoWidth disabled={disabled} defaultChecked />
            <br />
            <Button type="primary" onClick={toggle}>
                Toggle disabled
            </Button>
        </div>
    );
};

ReactDOM.render(<Demo />, mountNode);
