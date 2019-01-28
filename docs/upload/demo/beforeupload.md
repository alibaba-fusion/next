# 上传前预处理

- order: 8

使用beforeUpload去控制上传行为


提醒: `https://www.easy-mock.com/mock/5b713974309d0d7d107a74a3/alifd/upload`接口:


> 1. 该接口仅作为测试使用,业务请勿使用
> 2. 该接口仅支持图片上传,其他文件类型接口请自备

:::lang=en-us
# BeforeUpload

- order: 8

use beforeUpload to control upload

Waring: `https://www.easy-mock.com/mock/5b713974309d0d7d107a74a3/alifd/upload` API:

> 1. only for test & develop, Never Use in production enviroments

> 2. only support upload images
:::
---

````jsx
import { Upload, Button } from '@alifd/next';

ReactDOM.render([
    <Upload
        listType="text"
        action="https://www.easy-mock.com/mock/5b713974309d0d7d107a74a3/alifd/upload"
        accept="image/png, image/jpg, image/jpeg, image/gif, image/bmp"
        beforeUpload={beforeUpload}
        onChange={onChange}
        key="1"
    >
        <Button type="primary" style={{margin: '0 0 10px'}}>Upload File</Button>
    </Upload>,
    <Upload
        listType="text"
        action="https://www.easy-mock.com/mock/5b713974309d0d7d107a74a3/alifd/upload"
        accept="image/png, image/jpg, image/jpeg, image/gif, image/bmp"
        beforeUpload={asyncBeforeUpload}
        onChange={onChange}
        key="2"
    >
        <Button type="secondary" style={{margin: '0 0 10px'}}>Async Call before Upload File</Button>
    </Upload>,
    <Upload
        listType="text"
        action="https://www.easy-mock.com/mock/5b713974309d0d7d107a74a3/alifd/upload"
        accept="image/png, image/jpg, image/jpeg, image/gif, image/bmp"
        beforeUpload={() => false}
        onChange={onChange}
        key="3"
    >
        <Button type="normal" style={{margin: '0 0 10px'}}>Prevent Upload</Button>
    </Upload>,
    <Upload
        listType="text"
        action="https://www.easy-mock.com/mock/5b713974309d0d7d107a74a3/alifd/upload"
        accept="image/png, image/jpg, image/jpeg, image/gif, image/bmp"
        beforeUpload={() => new Promise(resl => setTimeout(() => resl(false)))}
        onChange={onChange}
        key="4"
    >
        <Button type="primary" style={{margin: '0 0 10px'}}>Async Prevent Upload</Button>
    </Upload>,
    <Upload
        listType="text"
        action="https://www.easy-mock.com/mock/5b713974309d0d7d107a74a3/alifd/upload"
        accept="image/png, image/jpg, image/jpeg, image/gif, image/bmp"
        beforeUpload={() => {}}
        onChange={onChange}
        key="5"
    >
        <Button type="secondary" style={{margin: '0 0 10px'}}>Do nothing</Button>
    </Upload>
], mountNode);

const requestOpts = {
    action: 'https://www.easy-mock.com/mock/5b713974309d0d7d107a74a3/alifd/upload',
    data: {osstoken: 1234},
    headers: {'X-Requested-With': 12345}
};

async function ajax() {
    return await new Promise(resolve => {
        setTimeout(() => {
            resolve(requestOpts);
        }, 1e3);
    });
}

function beforeUpload(info, options) {
    console.log('beforeUpload callback : ', info, options);
    return requestOpts;
}

async function asyncBeforeUpload(info, options) {
    console.log('beforeUpload callback : ', info, options);
    return await ajax();
}

function onChange(info) {
    console.log('onChange callback : ', info);
}


````
