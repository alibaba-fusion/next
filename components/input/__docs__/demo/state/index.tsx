import React from 'react';
import ReactDOM from 'react-dom';
import { Input } from '@alifd/next';

ReactDOM.render(
    <div>
        <Input
            state="error"
            placeholder="error"
            size="small"
            aria-live="assertive"
            aria-label="error"
        />
        <br />
        <br />
        <Input
            state="error"
            showLimitHint
            maxLength={100}
            placeholder="error"
            size="medium"
            aria-live="assertive"
            aria-label="error"
        />
        <br />
        <br />
        <Input
            state="error"
            multiple
            placeholder="error"
            size="large"
            aria-live="assertive"
            aria-label="error"
        />
        <br />
        <br />

        <Input
            state="success"
            size="small"
            value="success"
            aria-live="assertive"
            aria-label="success"
        />
        <br />
        <br />
        <Input
            state="success"
            maxLength={100}
            showLimitHint
            placeholder="success"
            size="medium"
            aria-live="assertive"
            aria-label="success"
        />
        <br />
        <br />
        <Input
            state="success"
            placeholder="success"
            size="large"
            aria-live="assertive"
            aria-label="success"
        />
        <br />
        <br />

        <Input
            state="loading"
            placeholder="loading"
            size="small"
            aria-live="assertive"
            aria-label="loading"
        />
        <br />
        <br />
        <Input
            state="loading"
            placeholder="loading"
            size="medium"
            aria-live="assertive"
            aria-label="loading"
        />
        <br />
        <br />
        <Input
            state="loading"
            placeholder="loading"
            size="large"
            aria-live="assertive"
            aria-label="loading"
        />
        <br />
        <br />
    </div>,
    mountNode
);
