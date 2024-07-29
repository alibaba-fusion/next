import React from 'react';
import ReactDOM from 'react-dom';
import { Upload, Button, Icon, Dialog } from '@alifd/next';
import { type UploadProps, type CardProps } from '@alifd/next/types/upload';

const showImg = (url: string) => {
    Dialog.show({
        title: 'img preview',
        content: <img src={url} style={{ width: 400, height: 400 }} />,
        footer: false,
    });
};

const actionRender: UploadProps['actionRender'] = file => {
    console.log(file);
    return (
        <span style={{ position: 'absolute', right: 50 }}>
            <Button
                text
                onClick={e => {
                    e.preventDefault();
                    showImg(file.url!);
                }}
                size="large"
            >
                <Icon type="eye" style={{ marginRight: 12, cursor: 'pointer' }} />
            </Button>
            <Button text component="a" href={file.url} target="_blank">
                <Icon type="download" style={{ cursor: 'pointer' }} />
            </Button>
        </span>
    );
};

const itemRender: CardProps['itemRender'] = (file, action) => {
    console.log(file);
    return (
        <div>
            <img src={file.url} style={{ maxWidth: '100%', maxHeight: '100%' }} />
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                    background: 'rgba(0,0,0,.5)',
                    color: '#ddd',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Icon
                    type="eye"
                    style={{ marginTop: 40, cursor: 'pointer' }}
                    onClick={() => showImg(file.url!)}
                />
                <span style={{ marginTop: 10, fontSize: 12 }}>06:08</span>
            </div>
            <Icon
                type="ashbin"
                size="xs"
                style={{ position: 'absolute', right: 2, top: 2, color: '#fff', cursor: 'pointer' }}
                onClick={action?.remove}
            />
        </div>
    );
};

const data = [
    {
        name: 'IMG.png',
        state: 'done',
        size: 100,
        url: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
    },
];

const beforeUpload: UploadProps['beforeUpload'] = info => {
    console.log('beforeUpload callback : ', info);
};

const onChange: UploadProps['onChange'] = info => {
    console.log('onChange callback : ', info);
};

ReactDOM.render(
    <div>
        <Upload
            listType="text"
            action="https://www.easy-mock.com/mock/5b713974309d0d7d107a74a3/alifd/upload"
            accept="image/png, image/jpg, image/jpeg, image/gif, image/bmp"
            beforeUpload={beforeUpload}
            onChange={onChange}
            fileNameRender={(file: File) => (
                <span>
                    <Icon type="attachment" size="xs" style={{ marginRight: 8 }} />
                    {file.name}
                </span>
            )}
            defaultValue={data}
        />
        <Upload
            listType="image"
            action="https://www.easy-mock.com/mock/5b713974309d0d7d107a74a3/alifd/upload"
            accept="image/png, image/jpg, image/jpeg, image/gif, image/bmp"
            beforeUpload={beforeUpload}
            onChange={onChange}
            actionRender={actionRender}
            defaultValue={data}
        />
        <br />
        <Upload.Card
            listType="card"
            accept="image/png, image/jpg, image/jpeg, image/gif, image/bmp"
            defaultValue={data}
            itemRender={itemRender}
        />
        ,
    </div>,
    mountNode
);
