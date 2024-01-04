import React from 'react';
import ReactDOM from 'react-dom';
import { Message, Button } from '@alifd/next';

// 只要使用了 config 就是 v2 版本
Message.config({
    maxCount: 5,
    duration: 3000,
});

const showSuccess = () => Message.success('This is a success message');
const showWarning = () => Message.warning('This is a warning message');
const showError = () => Message.error('This is a error message');
const showNotice = () => Message.notice('This is a notice message');
const showHelp = () => Message.help('This is a help message');
const showLoading = () => Message.loading('This is a loading message');

const style = { marginLeft: 10, marginBottom: 10 };

ReactDOM.render(
    <div>
        <Button type="primary" onClick={showSuccess} style={style}>
            success
        </Button>
        <Button type="primary" onClick={showWarning} style={style}>
            warning
        </Button>
        <Button type="primary" onClick={showError} style={style}>
            error
        </Button>
        <Button type="primary" onClick={showNotice} style={style}>
            notice
        </Button>
        <Button type="primary" onClick={showHelp} style={style}>
            help
        </Button>
        <Button type="primary" onClick={showLoading} style={style}>
            loading
        </Button>

        <Button
            type="primary"
            onClick={() => {
                console.log(Message, Message.destory);
                Message.destory();
            }}
            style={style}
        >
            destory
        </Button>
    </div>,
    mountNode
);
