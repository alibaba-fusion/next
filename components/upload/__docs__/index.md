# Upload

-   category: Components
-   family: DataEntry
-   chinese: 上传组件
-   cols: 1
-   type: 表单

---

文件选择上传和拖拽上传控件。

## 何时使用

用户根据提示将自己本地的相应信息(包含本地和云储存)上传到网站，上传组件可以帮助用户对上传过程和上传结果有预期，并可以更改或撤销上传行为。

参考文章: <a href="https://zhuanlan.zhihu.com/p/56684600" target="_blank">Upload 组件的设计思想</a> & <a href="https://zhuanlan.zhihu.com/p/59483736" target="_blank">Fusion Upload组件对接阿里云OSS/七牛/又拍</a>。

## 如何使用

### 跨域问题

有些服务不支持 `X-Requested-With: XMLHttpRequest` 这个请求头导致不能跨域，可以通过设置 `<Upload headers={{'X-Requested-With':null}}>` 来解决。

### IE9兼容性

-   ie9 下用因为使用 iframe 作为无刷新上传方案，必须保证表单页面的域名和上传的服务器端的域名相同。
-   ie9 下服务器端返回数据需要设置头部 `context-type` 为 `text/html`，不要设置为 `application/json`
-   如果只是一级域名相同（`taobao.com` 为一级域名 `shop.taobao.com` 为二级域名），可以通过降域的方式实现跨域上传。

假设你表单页面的域是：shop.taobao.com，而上传的服务器端路径却是 upload.taobao.com。服务端返回必须带额外script标签。
iframe上传会额外传递参数 `_documentDomain` 方便你设置域名。

```jsx
  <script>document.domain="taobao.com";</script>
  {
    "status":1,
    "type":"ajax",
    "name":"54.png",
    "url":".\/files\/54.png"
    }
```

## API

### Upload

| 参数              | 说明                                                                                                                                                                                                                                               | 类型                                                                                                   | 默认值    | 是否必填 | 支持版本 |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ | --------- | -------- | -------- |
| action            | 上传的地址                                                                                                                                                                                                                                         | string                                                                                                 | -         |          | -        |
| shape             | 上传按钮形状                                                                                                                                                                                                                                       | 'card'                                                                                                 | -         |          | -        |
| accept            | 接受上传的文件类型 (image/png, image/jpg, .doc, .ppt) 详见 [input accept attribute](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input#attr-accept)                                                                                   | string                                                                                                 | -         |          | -        |
| data              | 上传额外传参                                                                                                                                                                                                                                       | \| { [key: string]: string \| Blob }<br/> \| ((file: UploadFile) => { [key: string]: string \| Blob }) | -         |          | -        |
| headers           | 设置上传的请求头部                                                                                                                                                                                                                                 | {<br/> 'X-Requested-With'?: string \| undefined;<br/> [key: string]: unknown;<br/> }                   | -         |          | -        |
| withCredentials   | 是否允许请求携带 cookie                                                                                                                                                                                                                            | boolean                                                                                                | true      |          | -        |
| beforeUpload      | 可选参数，详见 [beforeUpload](#beforeUpload)<br/><br/>**签名**:<br/>**参数**:<br/>_file_: 所有文件<br/>_options_: 参数                                                                                                                             | (file: UploadFile, options: BeforeUploadOption) => boolean \| object \| unknown                        | func.noop |          | -        |
| onProgress        | 上传中                                                                                                                                                                                                                                             | (file: ObjectFile[], e: ObjectFile) => void                                                            | func.noop |          | -        |
| onSuccess         | 可选参数，上传成功回调函数，参数为请求下响应信息以及文件<br/><br/>**签名**:<br/>**参数**:<br/>_file_: 文件<br/>_value_: 值                                                                                                                         | (file: ObjectFile, value?: ObjectFile[]) => void                                                       | func.noop |          | -        |
| onError           | 可选参数，上传失败回调函数，参数为上传失败的信息、响应信息以及文件<br/><br/>**签名**:<br/>**参数**:<br/>_file_: 出错的文件<br/>_value_: 当前值                                                                                                     | (file: ObjectFile, value: ObjectFile[]) => void                                                        | func.noop |          | -        |
| children          | 子元素                                                                                                                                                                                                                                             | ReactNode                                                                                              | -         |          | -        |
| timeout           | 设置上传超时，单位 ms                                                                                                                                                                                                                              | number                                                                                                 | -         |          | -        |
| method            | 上传方法                                                                                                                                                                                                                                           | 'post' \| 'put' \| 'POST' \| 'PUT'                                                                     | 'post'    |          | -        |
| request           | 自定义上传方法<br/><br/>**签名**:<br/>**参数**:<br/>_option_: 参数<br/>**返回值**:<br/>- 返回值                                                                                                                                                    | (option: object) => object                                                                             | -         |          | -        |
| name              | 文件名字段                                                                                                                                                                                                                                         | string                                                                                                 | -         |          | -        |
| onSelect          | 选择文件回调                                                                                                                                                                                                                                       | (uploadFiles: Array\<unknown>, value: Array\<unknown>) => void                                         | func.noop |          | -        |
| onDrop            | 放文件                                                                                                                                                                                                                                             | (files: UploadFile[]) => void                                                                          | func.noop |          | -        |
| value             | 文件列表                                                                                                                                                                                                                                           | Array\<ObjectFile> \| ObjectFile                                                                       | -         |          | -        |
| defaultValue      | 默认文件列表                                                                                                                                                                                                                                       | Array\<ObjectFile> \| ObjectFile                                                                       | -         |          | -        |
| listType          | 上传列表的样式                                                                                                                                                                                                                                     | ListType                                                                                               | -         |          | -        |
| formatter         | 数据格式化函数，配合自定义 action 使用，参数为服务器的响应数据，详见 [formatter](#formater)<br/><br/>**签名**:<br/>**参数**:<br/>_response_: 返回<br/>_file_: 文件对象                                                                             | (response: UploadResponse, file: UploadFile) => UploadResponse                                         | -         |          | -        |
| limit             | 最大文件上传个数                                                                                                                                                                                                                                   | number                                                                                                 | Infinity  |          | -        |
| dragable          | 可选参数，是否支持拖拽上传，`ie10+` 支持。                                                                                                                                                                                                         | boolean                                                                                                | -         |          | -        |
| useDataURL        | 可选参数，是否本地预览                                                                                                                                                                                                                             | boolean                                                                                                | -         |          | -        |
| disabled          | 可选参数，是否禁用上传功能                                                                                                                                                                                                                         | boolean                                                                                                | -         |          | -        |
| onChange          | 上传文件改变时的状态<br/><br/>**签名**:<br/>**参数**:<br/>_value_: 所有文件<br/>_file_: 文件对象                                                                                                                                                   | (value: ObjectFile[], file: ObjectFile \| ObjectFile[]) => void                                        | func.noop |          | -        |
| afterSelect       | 可选参数，用于校验文件，afterSelect 仅在 autoUpload=false 的时候生效，autoUpload=true 时，可以使用 beforeUpload 完全可以替代该功能。<br/><br/>**签名**:<br/>**参数**:<br/>_file_: 文件<br/>**返回值**:<br/>- 返回 false 会阻止上传，其他则表示正常 | (file: ObjectFile) => boolean \| Promise\<void>                                                        | func.noop |          | -        |
| onRemove          | 移除文件回调函数<br/><br/>**签名**:<br/>**参数**:<br/>_file_: 文件<br/>**返回值**:<br/>- 返回 false、Promise.resolve(false)、Promise.reject() 将阻止文件删除                                                                                       | (file: object) => void                                                                                 | func.noop |          | -        |
| autoUpload        | 自动上传                                                                                                                                                                                                                                           | boolean                                                                                                | true      |          | -        |
| progressProps     | 透传给 Progress props                                                                                                                                                                                                                              | ProgressProps                                                                                          | -         |          | -        |
| isPreview         | 是否为预览态                                                                                                                                                                                                                                       | boolean                                                                                                | -         |          | -        |
| renderPreview     | 预览态模式下渲染的内容<br/><br/>**签名**:<br/>**参数**:<br/>_value_: 文件                                                                                                                                                                          | (value: ObjectFile \| ObjectFile[], props: UploadProps) => void                                        | -         |          | -        |
| fileKeyName       | 文件对象的 key name                                                                                                                                                                                                                                | string                                                                                                 | -         |          | 1.21     |
| fileNameRender    | 自定义文件名渲染<br/><br/>**签名**:<br/>**参数**:<br/>_file_: 文件<br/>**返回值**:<br/>- react node                                                                                                                                                | (file: object) => ReactNode                                                                            | -         |          | -        |
| actionRender      | 自定义操作区域渲染<br/><br/>**签名**:<br/>**参数**:<br/>_file_: 文件<br/>**返回值**:<br/>- react node                                                                                                                                              | (file: ObjectFile) => ReactNode                                                                        | -         |          | -        |
| previewOnFileName | 点击文件名时触发 onPreview                                                                                                                                                                                                                         | boolean                                                                                                | -         |          | 1.24     |
| itemRender        | 自定义成功和失败的列表渲染方式，仅在 listType 是 card/image 时生效                                                                                                                                                                                 | (file: UploadFile, action?: { remove?: () => void }) => ReactNode                                      | -         |          | -        |
| reUpload          | 选择新文件上传并替换                                                                                                                                                                                                                               | boolean                                                                                                | -         |          | -        |

### Upload.Card

继承 Upload 的 API，除非特别说明

| 参数         | 说明                                                                                                                                                             | 类型                                                              | 默认值    | 是否必填 | 支持版本 |
| ------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- | --------- | -------- | -------- |
| onPreview    | 点击图片回调                                                                                                                                                     | (file: ObjectFile, e?: MouseEvent\<HTMLElement>) => void          | func.noop |          | -        |
| onChange     | 改变时候的回调                                                                                                                                                   | (value: UploadFile[], file: UploadFile) => void                   | func.noop |          | -        |
| onRemove     | 点击移除的回调                                                                                                                                                   | (file: object) => void                                            | -         |          | -        |
| onCancel     | 取消上传的回调                                                                                                                                                   | () => void                                                        | -         |          | -        |
| itemRender   | 自定义成功和失败的列表渲染方式，仅在 listType 是 card/image 时生效<br/><br/>**签名**:<br/>**参数**:<br/>_file_: 文件对象<br/>_action_: 包含属性 remove: 删除回调 | (file: ObjectFile, action?: { remove?: () => void }) => ReactNode | -         |          | 1.21     |
| reUpload     | 选择新文件上传并替换                                                                                                                                             | boolean                                                           | -         |          | 1.24     |
| showDownload | 展示下载按钮                                                                                                                                                     | boolean                                                           | true      |          | 1.24     |
| onProgress   | 上传中                                                                                                                                                           | (file: UploadFile[], e: UploadFile) => void                       | func.noop |          | -        |

### Upload.Dragger

IE10+ 支持。继承 Upload 的 API，除非特别说明

### Upload.Selecter

[底层能力] 可自定义样式的文件选择器

| 参数            | 说明                                                                                                                                                             | 类型                                      | 默认值    | 是否必填 |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------- | --------- | -------- |
| disabled        | 是否禁用上传功能                                                                                                                                                 | boolean                                   | -         |          |
| multiple        | 是否支持多选文件，`ie10+` 支持。开启后按住 ctrl 可选择多个文件                                                                                                   | boolean                                   | false     |          |
| webkitdirectory | 是否支持上传文件夹，仅在 chorme 下生效                                                                                                                           | boolean                                   | -         |          |
| capture         | 调用系统设备媒体                                                                                                                                                 | string                                    | -         |          |
| dragable        | 是否支持拖拽上传，`ie10+` 支持。                                                                                                                                 | boolean                                   | -         |          |
| accept          | 接受上传的文件类型 (image/png, image/jpg, .doc, .ppt) 详见 [input accept attribute](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input#attr-accept) | string                                    | -         |          |
| onSelect        | 文件选择回调                                                                                                                                                     | (e: UploadFile[]) => void                 | func.noop |          |
| onDragOver      | 拖拽经过回调                                                                                                                                                     | (e: DragEvent\<HTMLInputElement>) => void | func.noop |          |
| onDragLeave     | 拖拽离开回调                                                                                                                                                     | () => void                                | func.noop |          |
| onDrop          | 拖拽完成回调                                                                                                                                                     | (fiels: File[]) => void                   | func.noop |          |

## Method

### Upload.Uploader

> [底层能力] 文件上传核心功能
> let uploader = new Upload.Uploader([options]);

#### options

| 参数            | 说明                                                                                                      | 类型            | 默认值 |
| --------------- | --------------------------------------------------------------------------------------------------------- | --------------- | ------ |
| action          | 上传的地址                                                                                                | String          | -      |
| data            | 上传额外传参                                                                                              | Object/Function | -      |
| headers         | 设置上传的请求头部                                                                                        | Object          | -      |
| withCredentials | 是否允许请求携带 cookie                                                                                   | Boolean         | false  |
| onProgress      | 上传中<br><br>**签名**:<br>Function() => void                                                             | Function        | noop   |
| onSuccess       | 上传成功回调函数，参数为请求下响应信息以及文件<br><br>**签名**:<br>Function() => void                     | Function        | noop   |
| onError         | 可选参数，上传失败回调函数，参数为上传失败的信息、响应信息以及文件<br><br>**签名**:<br>Function() => void | Function        | noop   |

### 自定义Request

某些场景下需要自定义Request,例如对接AWS S3 jd-sdk or aliyun oss sdk,. Upload 支持 传入自定义的 request方法.

```jsx
function customRequest(option) {
    /* coding here */
    return {
        abort() {
            /* coding here */
        },
    };
}

<Upload request={customRequest} />;
```

customRequest被传入一个 object,包含以下属性:

-   onProgress: (event: { percent: number }): void
-   onError: (event: Error, body?: Object): void
-   onSuccess: (body: Object): void
-   data: Object // 额外的数据
-   filename: String // 文件名
-   file: File // 原生File对象
-   withCredentials: Boolean // 是否携带cookie
-   action: String // 请求地址
-   method: String // 请求类型 post/put
-   timeout: Number // 超时
-   headers: Object // 请求头

request需要返回一个包含abort方法的对象,用于中断上传

`abort(file?: File) => void`: abort the uploading file.

具体实现参照 Upload 默认request方法: <https://github.com/alibaba-fusion/next/blob/master/src/upload/runtime/request.jsx>

### ErrorCode

| ErrorCode           | 含义                                                               |
| ------------------- | ------------------------------------------------------------------ |
| EXCEED_LIMIT        | 当设置了limit, 选中的文件 + 已上传的文件 > limit 报错              |
| BEFOREUPLOAD_REJECT | BeforeUpload中返回了 false/Promise.resolve(false)/Promise.reject() |
| RESPONSE_FAIL       | 返回提响应错误                                                     |

所有的值在`Upload.ErrorCode`.

### onChange 返回结构

```jsx
{
  uid: 'uid',       // 文件唯一标识
  name: 'xx.png'    // 文件名
  state: 'done',    // 状态有：selected uploading done error
  response: {"success":true}  // 服务端响应内容
  url: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
  imgURL: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg', // 头像(可选)
  downloadURL: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg'   // 下载(可选)
}
```

### 接口 response 返回数据格式要求

```jsx
{
  "success": true,
  "message": "上传成功",                                  // success=false 时候可以展示错误
  "url": "https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg",           // 返回结果
  "imgURL": "https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg",        // 图片预览地址 (非必须)
  "downloadURL": "https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg"    // 文件下载地址 (非必须)
}
```

### 后端数据格式化

通过 `formatter` 将来自后端的不规则数据转换为符合组件要求的数据格式

-   `假设` 服务器的响应数据如下

```jsx
{
  "status": "success",                              // 上传成功返回码
  "img_src": "https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg",   // 图片链接
}
```

-   转换方法

```jsx
<Upload
    action="http://127.0.0.1:3001/upload"
    formatter={(res, file) => {
        // 函数里面根据当前服务器返回的响应数据
        // 重新拼装符合组件要求的数据格式
        return {
            success: res.status === 'success',
            url: res.img_src,
        };
    }}
/>
```

### Upload 服务端代码样例

Next Upload组件上传文件使用的`multipart/form-data`方式上传文件,具体实现是在支持`FormData`对象的浏览器中使用xhr对象发送formdata。在不支持`FormData`对象的浏览器如IE9, 使用iframe原生表单实现。

各个语言的服务端框架,必然是可以处理`multipart/form-data`类型的请求,并解析出文件。一下给出两种语言的样例代码

-   [Java Springboot 样例](https://github.com/alibaba-fusion/next-upload-java-server)
-   [Node Eggjs 样例](https://github.com/alibaba-fusion/next-upload-node-server)

## 无障碍键盘操作指南

| 按键  | 说明                                                             |
| :---- | :--------------------------------------------------------------- |
| Enter | 1.当组件获取焦点时，按下`Enter`就可以选择文件上传 2.删除上传图片 |
