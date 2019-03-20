# 无障碍

- order: 16


提醒: `https://www.easy-mock.com/mock/5b713974309d0d7d107a74a3/alifd/upload`接口:

> 1. 该接口仅作为测试使用,业务请勿使用

> 2. 该接口仅支持图片上传,其他文件类型接口请自备

> 3. 请参考`ARIA and KeyBoard`。

:::lang=en-us


Waring: `https://www.easy-mock.com/mock/5b713974309d0d7d107a74a3/alifd/upload` API:


> 1. only for test & develop, Never Use in production enviroments

> 2. only support upload images

> 3. Please refer to `ARIA and KeyBoard`.

# Addon

- order: 16

:::
---

````jsx
import { Upload, Button } from '@alifd/next';

ReactDOM.render([
    <Upload
        listType="text"
        action="https://www.easy-mock.com/mock/5b713974309d0d7d107a74a3/alifd/upload"
        accept="image/png, image/jpg, image/jpeg, image/gif, image/bmp"
        beforeUpload={() => {}}
        onChange={onChange}
        key="5"
    >
        <Button type="secondary" style={{margin: '0 0 10px'}}>upload </Button>
    </Upload>
], mountNode);
function onChange(info) {
    console.log('onChange callback : ', info);
}

````
