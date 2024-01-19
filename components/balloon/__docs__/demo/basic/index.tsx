import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Balloon } from '@alifd/next';

const Demo = () => (
    <div className="balloon-container">
        <Balloon
            v2
            triggerType="click"
            title="Balloon Title"
            trigger={<Button>Default</Button>}
            align="br"
        >
            First performed around 1600, Hamlet tells the story of a prince whose duty to revenge
            his father's death entangles him in philosophical problems he can't solve.
        </Balloon>
        <Balloon
            v2
            type="primary"
            triggerType="click"
            title="Balloon Title"
            trigger={<Button>Primary</Button>}
            align="br"
            closable={false}
        >
            First performed around 1600, Hamlet tells the story of a prince whose duty to revenge
            his father's death entangles him in philosophical problems he can't solve.
        </Balloon>
    </div>
);

ReactDOM.render(<Demo />, mountNode);
