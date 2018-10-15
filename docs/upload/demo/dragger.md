# 拖拽上传

- order: 4

提醒: `https://www.easy-mock.com/mock/5b713974309d0d7d107a74a3/alifd/upload`接口:


> 1. 该接口仅作为测试使用,业务请勿使用

> 2. 该接口仅支持图片上传,其他文件类型接口请自备

提醒: 拖拽上传不适合视障人士使用,有无障碍需求的项目慎用

:::lang=en-us
# Drag to Upload

- order: 4

Waring: `https://www.easy-mock.com/mock/5b713974309d0d7d107a74a3/alifd/upload` API:

> 1. only for test & develop, Never Use in production enviroments

> 2. only support upload images

Waring: Drag To Upload can not meet accessbility requirements
:::

---

````jsx
import { Upload } from '@alifd/next';

ReactDOM.render((
    <Upload.Dragger
        listType="image"
        action="https://www.easy-mock.com/mock/5b713974309d0d7d107a74a3/alifd/upload"
        accept="image/png, image/jpg, image/jpeg, image/gif, image/bmp"
        onDragOver={onDragOver}
        onDrop={onDrop}
    />
), mountNode);

function onDragOver() {
    console.log('dragover callback');
}

function onDrop(fileList) {
    console.log('drop callback : ', fileList);
}
````
