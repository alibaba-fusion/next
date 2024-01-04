import React from 'react';
import ReactDOM from 'react-dom';
import { Upload } from '@alifd/next';

ReactDOM.render(
    <Upload.Card
        listType="card"
        action="https://www.easy-mock.com/mock/5b713974309d0d7d107a74a3/alifd/upload"
        accept="image/png, image/jpg, image/jpeg, image/gif, image/bmp"
        onPreview={onPreview}
        onChange={onChange}
        onSuccess={onSuccess}
        onError={onError}
        reUpload
        defaultValue={[
            {
                uid: '0',
                name: 'IMG.png',
                state: 'done',
                url: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
                downloadURL: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
                imgURL: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
            },
            {
                uid: '1',
                name: 'IMG.png',
                state: 'done',
                url: 'https://img.alicdn.com/tfs/TB1x4QlgxYaK1RjSZFnXXa80pXa-1400-742.png',
                downloadURL: 'https://img.alicdn.com/tfs/TB1x4QlgxYaK1RjSZFnXXa80pXa-1400-742.png',
                imgURL: 'https://img.alicdn.com/tfs/TB1x4QlgxYaK1RjSZFnXXa80pXa-1400-742.png',
            },
            {
                uid: '2',
                name: 'IMG.png',
                state: 'done',
                url: 'https://img.alicdn.com/tfs/TB1dcWosRjTBKNjSZFwXXcG4XXa-684-1000.png',
                downloadURL: 'https://img.alicdn.com/tfs/TB1dcWosRjTBKNjSZFwXXcG4XXa-684-1000.png',
                imgURL: 'https://img.alicdn.com/tfs/TB1dcWosRjTBKNjSZFwXXcG4XXa-684-1000.png',
            },
            {
                uid: '3',
                name: 'IMG.png',
                percent: 50,
                state: 'uploading',
                url: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
                downloadURL: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
                imgURL: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
            },
            {
                uid: '4',
                name: 'IMG.png',
                state: 'error',
                url: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
                downloadURL: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
                imgURL: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
            },
        ]}
    />,
    mountNode
);

function onPreview(info) {
    console.log('onPreview callback : ', info);
}

function onChange(info) {
    console.log('onChange callback : ', info);
}

function onSuccess(res, file) {
    console.log('onSuccess callback : ', res, file);
}

function onError(file) {
    console.log('onError callback : ', file);
}
