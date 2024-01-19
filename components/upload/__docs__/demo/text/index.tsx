import React from 'react';
import ReactDOM from 'react-dom';
import { Upload, Button } from '@alifd/next';

const defaultValue = [
    {
        uid: '0',
        name: 'IMG.png',
        state: 'done',
        url: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
        downloadURL: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
        imgURL: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
        size: 2000,
    },
    {
        uid: '1',
        name: 'IMG.png',
        percent: 50,
        state: 'uploading',
        url: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
        downloadURL: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
        imgURL: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
    },
    {
        uid: '2',
        name: 'IMG.png',
        state: 'error',
        url: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
        downloadURL: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
        imgURL: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
        errorMsg: 'fail to upload something',
    },
    {
        uid: '3',
        name: 'IMG.png',
        state: 'error',
        url: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
        downloadURL: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
        imgURL: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
    },
];

ReactDOM.render(
    <Upload
        action="https://www.easy-mock.com/mock/5b713974309d0d7d107a74a3/alifd/upload"
        beforeUpload={beforeUpload}
        onChange={onChange}
        onSuccess={onSuccess}
        listType="text"
        defaultValue={defaultValue}
    >
        <Button type="primary" style={{ margin: '0 0 10px' }}>
            Upload File
        </Button>
    </Upload>,
    mountNode
);

function beforeUpload(info) {
    console.log('beforeUpload : ', info);
}

function onChange(info) {
    console.log('onChange : ', info);
}

function onSuccess(info) {
    console.log('onSuccess : ', info);
}
