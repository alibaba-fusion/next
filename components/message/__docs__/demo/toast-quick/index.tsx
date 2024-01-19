import React from 'react';
import ReactDOM from 'react-dom';
import { Message, Button } from '@alifd/next';

const showSuccess = () => Message.success('success');
const showWarning = () => Message.warning('warning');
const showError = () => Message.error('error');
const showNotice = () => Message.notice('notice');
const showHelp = () => Message.help('help');
const showLoading = () => Message.loading('loading');

ReactDOM.render(
    <div className="message-toast-quick-demo">
        <Button type="primary" onClick={showSuccess}>
            success
        </Button>
        <Button type="primary" onClick={showWarning}>
            warning
        </Button>
        <Button type="primary" onClick={showError}>
            error
        </Button>
        <Button type="primary" onClick={showNotice}>
            notice
        </Button>
        <Button type="primary" onClick={showHelp}>
            help
        </Button>
        <Button type="primary" onClick={showLoading}>
            loading
        </Button>
    </div>,
    mountNode
);
