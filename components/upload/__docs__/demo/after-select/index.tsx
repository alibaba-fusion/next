import React from 'react';
import ReactDOM from 'react-dom';
import { Upload, Button, Dialog } from '@alifd/next';
import { type UploadProps } from '@alifd/next/types/upload';

const afterSelect: UploadProps['afterSelect'] = file => {
    return new Promise<void>((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
            const img = new Image();
            img.onload = () => {
                if (img.width === 1200) {
                    resolve();
                } else {
                    Dialog.alert({
                        content: `Image width must be 1200px now ${img.width}px！`,
                        title: 'Warning',
                    });
                    reject();
                }
            };
            img.src = reader.result as string;
        };
        reader.readAsDataURL(file.originFileObj!);
    });
};

ReactDOM.render(
    <Upload
        action="https://www.easy-mock.com/mock/5b713974309d0d7d107a74a3/alifd/upload"
        autoUpload={false}
        listType="text"
        afterSelect={afterSelect}
        onError={err => console.log('Error', err)}
    >
        <Button>Upload</Button>
    </Upload>,
    mountNode
);
