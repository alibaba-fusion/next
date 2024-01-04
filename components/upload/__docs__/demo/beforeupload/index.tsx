import React from 'react';
import ReactDOM from 'react-dom';
import { Upload, Button } from '@alifd/next';

const requestOpts = {
    action: 'https://www.easy-mock.com/mock/5b713974309d0d7d107a74a3/alifd/upload',
    data: { osstoken: 1234 },
    headers: { 'X-Requested-With': 12345 },
};

function beforeUpload(file, options) {
    console.log('beforeUpload callback : ', file, options);
    return requestOpts;
}

async function asyncBeforeUpload(file, options) {
    console.log('beforeUpload callback : ', file, options);
    return await new Promise(resolve => {
        setTimeout(() => {
            resolve(requestOpts);
        }, 1e3);
    });
}

function onChange(file) {
    console.log('onChange callback : ', file);
}

ReactDOM.render(
    [
        <Upload
            listType="text"
            action="https://www.easy-mock.com/mock/5b713974309d0d7d107a74a3/alifd/upload"
            accept="image/png, image/jpg, image/jpeg, image/gif, image/bmp"
            beforeUpload={beforeUpload}
            onChange={onChange}
            key="1"
        >
            <Button type="primary" style={{ margin: '0 0 10px' }}>
                Upload File
            </Button>
        </Upload>,
        <Upload
            listType="text"
            action="https://www.easy-mock.com/mock/5b713974309d0d7d107a74a3/alifd/upload"
            accept="image/png, image/jpg, image/jpeg, image/gif, image/bmp"
            beforeUpload={asyncBeforeUpload}
            onChange={onChange}
            key="2"
        >
            <Button type="secondary" style={{ margin: '0 0 10px' }}>
                Async Call before Upload File
            </Button>
        </Upload>,
        <Upload
            listType="text"
            action="https://www.easy-mock.com/mock/5b713974309d0d7d107a74a3/alifd/upload"
            accept="image/png, image/jpg, image/jpeg, image/gif, image/bmp"
            beforeUpload={() => false}
            onChange={onChange}
            key="3"
        >
            <Button type="normal" style={{ margin: '0 0 10px' }}>
                Prevent Upload
            </Button>
        </Upload>,
        <Upload
            listType="text"
            action="https://www.easy-mock.com/mock/5b713974309d0d7d107a74a3/alifd/upload"
            accept="image/png, image/jpg, image/jpeg, image/gif, image/bmp"
            beforeUpload={() => new Promise((resovle, reject) => setTimeout(() => reject(false)))}
            onChange={onChange}
            key="4"
        >
            <Button type="primary" style={{ margin: '0 0 10px' }}>
                Async Prevent Upload
            </Button>
        </Upload>,
    ],
    mountNode
);
