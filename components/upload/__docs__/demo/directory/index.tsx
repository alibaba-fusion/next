import React from 'react';
import ReactDOM from 'react-dom';
import { Upload, Button, Icon } from '@alifd/next';
import { type UploadProps } from '@alifd/next/types/upload';

const onChange: UploadProps['onChange'] = info => {
    console.log('onChange : ', info);
};

const onSuccess: UploadProps['onSuccess'] = info => {
    console.log('onSuccess : ', info);
};

ReactDOM.render(
    <Upload
        action="https://www.easy-mock.com/mock/5b713974309d0d7d107a74a3/alifd/upload"
        onChange={onChange}
        onSuccess={onSuccess}
        listType="text"
        webkitdirectory
    >
        <Button type="primary" style={{ margin: '0 0 10px' }}>
            <Icon type="upload" />
            Upload Directory
        </Button>
    </Upload>,
    mountNode
);
