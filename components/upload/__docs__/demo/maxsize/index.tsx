import React from 'react';
import ReactDOM from 'react-dom';
import { Upload, Dialog, Button } from '@alifd/next';

const beforeUpload = file => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = e => {
            if (e.total > 2 * 1024 * 1024) {
                Dialog.alert({
                    content: `File size must be < 2M`,
                    closable: false,
                    title: 'Warning',
                });
                reject();
                return;
            }
            const img = new Image();
            img.onload = () => {
                if (img.width <= 1200) {
                    resolve();
                } else {
                    Dialog.alert({
                        content: `Image width ${img.width}px, Exceed limits！`,
                        closable: false,
                        title: 'Warning',
                    });
                    reject();
                }
            };
            img.src = reader.result;
        };
        reader.readAsDataURL(file);
    });
};

ReactDOM.render(
    <Upload
        action="https://www.easy-mock.com/mock/5b713974309d0d7d107a74a3/alifd/upload"
        limit={3}
        multiple
        beforeUpload={beforeUpload}
        listType="text"
        defaultValue={[
            {
                name: 'IMG.png',
                state: 'done',
                size: 1024,
                downloadURL: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
                fileURL: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
                imgURL: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
            },
        ]}
    >
        <Button type="primary" style={{ margin: '0 0 10px' }}>
            Upload file
        </Button>
    </Upload>,
    mountNode
);
