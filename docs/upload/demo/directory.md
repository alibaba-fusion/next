# 文件夹上传

- order: 6

支持上传一个文件夹里的所有文件。


:::lang=en-us

# directory upload

- order: 6

support upload a directory

:::
---

````jsx
import { Upload, Button, Icon } from '@alifd/next';

ReactDOM.render(<Upload
        action="https://www.easy-mock.com/mock/5b713974309d0d7d107a74a3/alifd/upload"
        onChange={onChange}
        onSuccess={onSuccess}
        listType="text"
        webkitdirectory>
        <Button type="primary" style={{margin: '0 0 10px'}}><Icon type="upload"/>Upload Directory</Button>
    </Upload>, mountNode);

function onChange(info) {
    console.log('onChange : ', info);
}

function onSuccess(info) {
    console.log('onSuccess : ', info);
}
````
