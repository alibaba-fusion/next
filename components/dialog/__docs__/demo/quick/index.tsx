import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Dialog, ConfigProvider, Box } from '@alifd/next';

const config = {
    v2: true,
    title: 'Quick',
    content: 'content content content...',
};
const popupError = () => {
    const dialog = Dialog.error({
        v2: true,
        title: 'Error',
        content: 'custom content custom content...',
        footer: (
            <Button warning type="primary" onClick={() => dialog.hide()}>
                Custom button
            </Button>
        ),
    });
};

const popupShow = () => {
    const dialog = Dialog.show({
        v2: true,
        title: 'Custom',
        content: 'custom content custom content...',
    });
};

ReactDOM.render(
    <ConfigProvider>
        <Box direction="row" spacing={8}>
            <Button onClick={() => Dialog.success(config)}>Success</Button>
            <Button onClick={popupError}>Error</Button>
            <Button onClick={() => Dialog.warning(config)}>Warning</Button>
            <Button onClick={() => Dialog.notice(config)}>Notice</Button>
            <Button onClick={() => Dialog.help(config)}>Help</Button>
            <Button onClick={popupShow}>show</Button>
        </Box>
    </ConfigProvider>,
    mountNode
);
