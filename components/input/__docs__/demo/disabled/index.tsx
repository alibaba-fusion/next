import React from 'react';
import ReactDOM from 'react-dom';
import { Input } from '@alifd/next';

ReactDOM.render(
    <div>
        <Input disabled aria-label="disabled" placeholder="disabled" size="small" />
        <br />
        <br />

        <Input
            disabled
            aria-label="disabled"
            addonTextBefore="http://"
            addonTextAfter=".com"
            size="medium"
            value="alibaba"
        />
        <br />
        <br />

        <Input disabled aria-label="disabled" placeholder="medium" maxLength={10} showLimitHint />
        <br />
        <br />

        <Input.TextArea
            disabled
            aria-label="disabled"
            placeholder="medium"
            maxLength={10}
            showLimitHint
        />
    </div>,
    mountNode
);
