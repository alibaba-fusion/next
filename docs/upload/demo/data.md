# 添加上传参数

- order: 4

通过 data 控制自定义参数, 可以是一个 对象 或者 函数


:::lang=en-us
# Custom Upload Params

- order: 4

using  `data` param to put custom params in. can be a object or function

:::
---

````jsx
import { Upload, Button } from '@alifd/next';

ReactDOM.render((
    <Upload
        listType="text"
        action="https://www.easy-mock.com/mock/5b713974309d0d7d107a74a3/alifd/upload"
        accept="image/png, image/jpg, image/jpeg, image/gif, image/bmp"
        data={{token: 'abcd'}}
        beforeUpload={beforeUpload}
        onChange={onChange}
        defaultValue={[{
            name: 'IMG.png',
            state: 'done',
            size: 1024,
            downloadURL: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
            imgURL: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg'
        }]}
    >
        <Button type="primary" style={{margin: '0 0 10px'}}>Upload File</Button>
    </Upload>
), mountNode);

function beforeUpload(info) {
    console.log('beforeUpload callback : ', info);
}

function onChange(info) {
    console.log('onChange callback : ', info);
}
````
