# 文件上传

- order: 0

上传按钮根据自己传入的内容而定

提醒: `https://www.easy-mock.com/mock/5b713974309d0d7d107a74a3/alifd/upload` 接口:


> 1. 该接口仅作为测试使用,业务请勿使用

> 2. 该接口仅支持图片上传,其他文件类型接口请自备

:::lang=en-us

# Basic Usage

- order: 0

custom action button by your self

Waring: `https://www.easy-mock.com/mock/5b713974309d0d7d107a74a3/alifd/upload` API:

> 1. only for test & develop, Never Use in production enviroments

> 2. only support upload images

:::
---

````jsx
import { Upload, Button, Icon } from '@alifd/next';

const style = {display: 'inline-block', marginRight: 10};
ReactDOM.render(<div style={{display: 'flex'}}>
    <Upload
        action="https://www.easy-mock.com/mock/5b713974309d0d7d107a74a3/alifd/upload"
        beforeUpload={beforeUpload}
        onChange={onChange}
        onSuccess={onSuccess}
        multiple
        defaultValue={[{
            name: 'IMG.png',
            state: 'done',
            size: 1024,
            downloadURL: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
            fileURL: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
            imgURL: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg'
        }]}
        style={style}
    >
        <Button type="primary" style={{margin: '0 0 10px'}}>Upload File</Button>
    </Upload>
    
    <Upload shape="card" style={style}>
        Upload File
    </Upload>

    <Upload style={style}>
        <div className="next-upload-card">
            <Icon type="attachment" size="large"/>
            <div className="next-upload-text">
                Attachment
            </div>
        </div>
    </Upload>
</div>, mountNode);

function beforeUpload(info) {
    console.log('beforeUpload : ', info);
}

function onChange(info) {
    console.log('onChange : ', info);
}

function onSuccess(info) {
    console.log('onSuccess : ', info);
}
````
