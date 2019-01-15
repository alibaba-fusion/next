# 个数限制

- order: 6

提醒: `https://www.easy-mock.com/mock/5b713974309d0d7d107a74a3/alifd/upload`接口:


> 1. 该接口仅作为测试使用,业务请勿使用

> 2. 该接口仅支持图片上传,其他文件类型接口请自备
:::lang=en-us
# limit file numbers

- order: 6

Waring: `https://www.easy-mock.com/mock/5b713974309d0d7d107a74a3/alifd/upload` API:

> 1. only for test & develop, Never Use in production enviroments

> 2. only support upload images
:::
---

````jsx
import { Upload, Button } from '@alifd/next';

const onError = (file, fileList) => {
    console.log('Exceed limit', file, fileList);
};

ReactDOM.render((
    <div>
        <Upload
            action="https://www.easy-mock.com/mock/5b713974309d0d7d107a74a3/alifd/upload"
            limit={2}
            multiple
            listType="text"
            onError={onError}
            defaultValue={[{
                name: 'IMG.png',
                state: 'done',
                size: 1024,
                downloadURL: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
                fileURL: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
                imgURL: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg'
            }]}>
            <Button type="primary" style={{margin: '0 0 10px'}}>Upload File</Button>
        </Upload>
    </div>
), mountNode);

````
