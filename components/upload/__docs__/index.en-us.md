# Upload

-   category: Components
-   family: DataEntry
-   chinese: 上传组件
-   cols: 1
-   type: Form

---

## Develop Guide

### When to Use

When user want to upload some file to server side or cloud storage, upload component could help user deal with it.

## API

### Upload

| Param             | Description                                                                                                                                                                                                                                                                            | Type                                                                                                   | Default Value | Required | Supported Version |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ | ------------- | -------- | ----------------- |
| action            | Upload address                                                                                                                                                                                                                                                                         | string                                                                                                 | -             |          | -                 |
| shape             | Upload button shape                                                                                                                                                                                                                                                                    | 'card'                                                                                                 | -             |          | -                 |
| accept            | Accepted file types, see [input accept attribute](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input#attr                                                                                                                                                                 | string                                                                                                 | -             |          | -                 |
| data              | Upload extra parameters                                                                                                                                                                                                                                                                | \| { [key: string]: string \| Blob }<br/> \| ((file: UploadFile) => { [key: string]: string \| Blob }) | -             |          | -                 |
| headers           | Set the request header                                                                                                                                                                                                                                                                 | {<br/> 'X-Requested-With'?: string \| undefined;<br/> [key: string]: unknown;<br/> }                   | -             |          | -                 |
| withCredentials   | Whether to allow requests to carry cookies                                                                                                                                                                                                                                             | boolean                                                                                                | true          |          | -                 |
| beforeUpload      | Optional parameters, see [beforeUpload](#beforeUpload)<br/><br/>**signature**:<br/>**params**:<br/>_file_: All file<br/>_options_: Parameters                                                                                                                                          | (file: UploadFile, options: BeforeUploadOption) => boolean \| object \| unknown                        | func.noop     |          | -                 |
| onProgress        | OnProgress Callback                                                                                                                                                                                                                                                                    | (file: ObjectFile[], e: ObjectFile) => void                                                            | func.noop     |          | -                 |
| onSuccess         | Optional parameters, upload success callback function, the parameter is the response information and file<br/><br/>**signature**:<br/>**params**:<br/>_file_: File<br/>_value_: Value                                                                                                  | (file: ObjectFile, value?: ObjectFile[]) => void                                                       | func.noop     |          | -                 |
| onError           | Optional parameters, upload failure callback function, the parameter is the upload failure information, response information and file<br/><br/>**signature**:<br/>**params**:<br/>_file_: Error file<br/>_value_: Current value                                                        | (file: ObjectFile, value: ObjectFile[]) => void                                                        | func.noop     |          | -                 |
| children          | Child elements                                                                                                                                                                                                                                                                         | ReactNode                                                                                              | -             |          | -                 |
| timeout           | Upload timeout, unit ms                                                                                                                                                                                                                                                                | number                                                                                                 | -             |          | -                 |
| method            | Upload method                                                                                                                                                                                                                                                                          | 'post' \| 'put' \| 'POST' \| 'PUT'                                                                     | 'post'        |          | -                 |
| request           | Custom upload method<br/><br/>**signature**:<br/>**params**:<br/>_option_: Parameters<br/>**return**:<br/>Object with abort method                                                                                                                                                     | (option: object) => object                                                                             | -             |          | -                 |
| name              | File name field                                                                                                                                                                                                                                                                        | string                                                                                                 | -             |          | -                 |
| onSelect          | Select file callback                                                                                                                                                                                                                                                                   | (uploadFiles: Array\<unknown>, value: Array\<unknown>) => void                                         | func.noop     |          | -                 |
| onDrop            | Drop file                                                                                                                                                                                                                                                                              | (files: UploadFile[]) => void                                                                          | func.noop     |          | -                 |
| value             | File list                                                                                                                                                                                                                                                                              | Array\<ObjectFile> \| ObjectFile                                                                       | -             |          | -                 |
| defaultValue      | Default file list                                                                                                                                                                                                                                                                      | Array\<ObjectFile> \| ObjectFile                                                                       | -             |          | -                 |
| listType          | Upload list style                                                                                                                                                                                                                                                                      | ListType                                                                                               | -             |          | -                 |
| formatter         | Data formatting function, used with custom action, the parameter is the response data of the server, see [formatter](#formater)<br/><br/>**signature**:<br/>**params**:<br/>_response_: Return<br/>_file_: File object                                                                 | (response: UploadResponse, file: UploadFile) => UploadResponse                                         | -             |          | -                 |
| limit             | Maximum number of file uploads                                                                                                                                                                                                                                                         | number                                                                                                 | Infinity      |          | -                 |
| dragable          | Optional parameters, whether to support drag and drop upload, `ie10+` supports.                                                                                                                                                                                                        | boolean                                                                                                | -             |          | -                 |
| useDataURL        | Optional parameters, whether to locally preview                                                                                                                                                                                                                                        | boolean                                                                                                | -             |          | -                 |
| disabled          | Optional parameters, whether to disable upload                                                                                                                                                                                                                                         | boolean                                                                                                | -             |          | -                 |
| onChange          | Upload file change status<br/><br/>**signature**:<br/>**params**:<br/>_value_: Value<br/>_file_: File object                                                                                                                                                                           | (value: ObjectFile[], file: ObjectFile \| ObjectFile[]) => void                                        | func.noop     |          | -                 |
| afterSelect       | Optional parameters, used to validate files, afterSelect only takes effect when autoUpload=false, autoUpload=true can be used to replace this function<br/><br/>**signature**:<br/>**params**:<br/>_file_: File<br/>**return**:<br/>Return false will block upload, other means normal | (file: ObjectFile) => boolean \| Promise\<void>                                                        | func.noop     |          | -                 |
| onRemove          | Remove file callback function<br/><br/>**signature**:<br/>**params**:<br/>_file_: File<br/>**return**:<br/>Return false、Promise.resolve(false)、Promise.reject() will block file deletion                                                                                             | (file: object) => void                                                                                 | func.noop     |          | -                 |
| autoUpload        | Automatic upload                                                                                                                                                                                                                                                                       | boolean                                                                                                | true          |          | -                 |
| progressProps     | Pass to Progress props                                                                                                                                                                                                                                                                 | ProgressProps                                                                                          | -             |          | -                 |
| isPreview         | Is preview                                                                                                                                                                                                                                                                             | boolean                                                                                                | -             |          | -                 |
| renderPreview     | Preview mode<br/><br/>**signature**:<br/>**params**:<br/>_value_: File                                                                                                                                                                                                                 | (value: ObjectFile \| ObjectFile[], props: UploadProps) => void                                        | -             |          | -                 |
| fileKeyName       | File object key name                                                                                                                                                                                                                                                                   | string                                                                                                 | -             |          | 1.21              |
| fileNameRender    | Custom file name rendering<br/><br/>**signature**:<br/>**params**:<br/>_file_: File<br/>**return**:<br/>React node                                                                                                                                                                     | (file: object) => ReactNode                                                                            | -             |          | -                 |
| actionRender      | Custom operation area rendering<br/><br/>**signature**:<br/>**params**:<br/>_file_: File<br/>**return**:<br/>React node                                                                                                                                                                | (file: ObjectFile) => ReactNode                                                                        | -             |          | -                 |
| previewOnFileName | Click file name                                                                                                                                                                                                                                                                        | boolean                                                                                                | -             |          | 1.24              |
| itemRender        | Customize success and failure list rendering, only in listType is card or image                                                                                                                                                                                                        | (file: UploadFile, action?: { remove?: () => void }) => ReactNode                                      | -             |          | -                 |
| reUpload          | Select new file upload and replace                                                                                                                                                                                                                                                     | boolean                                                                                                | -             |          | -                 |

### Upload.Card

继承 Upload 的 API，除非特别说明

Inheritance Upload API, unless otherwise specified

| Param        | Description                                                                                                                                                                                               | Type                                                              | Default Value | Required | Supported Version |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- | ------------- | -------- | ----------------- |
| onPreview    | Click image callback                                                                                                                                                                                      | (file: ObjectFile, e?: MouseEvent\<HTMLElement>) => void          | func.noop     |          | -                 |
| onChange     | Change callback                                                                                                                                                                                           | (value: UploadFile[], file: UploadFile) => void                   | func.noop     |          | -                 |
| onRemove     | Click remove callback                                                                                                                                                                                     | (file: object) => void                                            | -             |          | -                 |
| onCancel     | Cancel upload callback                                                                                                                                                                                    | () => void                                                        | -             |          | -                 |
| itemRender   | Customize success and failure list rendering，only in listType is card or image<br/><br/>**signature**:<br/>**params**:<br/>_file_: File object<br/>_action_: Contains properties remove: delete callback | (file: ObjectFile, action?: { remove?: () => void }) => ReactNode | -             |          | 1.21              |
| reUpload     | Select new file upload and replace                                                                                                                                                                        | boolean                                                           | -             |          | 1.24              |
| showDownload | Show download button                                                                                                                                                                                      | boolean                                                           | true          |          | 1.24              |
| onProgress   | OnProgress Callback                                                                                                                                                                                       | (file: UploadFile[], e: UploadFile) => void                       | func.noop     |          | -                 |

### Upload.Dragger

IE10+ 支持。继承 Upload 的 API，除非特别说明

IE10+ supports. Inheritance Upload API, unless otherwise specified

### Upload.Selecter

[底层能力] 可自定义样式的文件选择器

[Underlying capabilities] Customizable file selector

| Param           | Description                                                  | Type                                      | Default Value | Required |
| --------------- | ------------------------------------------------------------ | ----------------------------------------- | ------------- | -------- |
| disabled        | Whether to disable upload                                    | boolean                                   | -             |          |
| multiple        | Whether to support multiple file selection, `ie10+` supports | boolean                                   | false         |          |
| webkitdirectory | Whether to support upload folder, only in chrome             | boolean                                   | -             |          |
| capture         | Call system device media                                     | string                                    | -             |          |
| dragable        | Whether to support drag and drop upload, `ie10+` supports    | boolean                                   | -             |          |
| accept          | Accepted file types                                          | string                                    | -             |          |
| onSelect        | File selection callback                                      | (e: UploadFile[]) => void                 | func.noop     |          |
| onDragOver      | Drag over callback                                           | (e: DragEvent\<HTMLInputElement>) => void | func.noop     |          |
| onDragLeave     | Drag leave callback                                          | () => void                                | func.noop     |          |
| onDrop          | Drag complete callback                                       | (fiels: File[]) => void                   | func.noop     |          |

## Method

### Upload.Uploader

> [Basic Ability] File Upload Core Ability
> let uploader = new Upload.Uploader([options]);

#### options

| Param           | Descripiton                                                                  | Type            | Default Value |
| --------------- | ---------------------------------------------------------------------------- | --------------- | ------------- |
| action          | upload url                                                                   | String          | -             |
| data            | extra upload data                                                            | Object/Function | -             |
| headers         | upload request headers                                                       | Object          | -             |
| withCredentials | Allow request with cookie or not                                             | Boolean         | false         |
| onProgress      | callback when upload progress change<br><br>signature:<br>Function() => void | Function        | noop          |
| onSuccess       | callback when upload success<br><br>signature:<br>Function() => void         | Function        | noop          |
| onError         | callback when upload failed<br><br>signature:<br>Function() => void          | Function        | noop          |

### Custom Request

某些场景下需要自定义Request,例如对接AWS S3 jd-sdk or aliyun oss sdk. Upload 支持 传入自定义的 request方法.
Under some circumstances, a developer may want to overriding default request call method， just like using AWS S3 jd-sdk or aliyun oss sdk. Upload has a prop named request.

```
function customRequest(option) {
    /* coding here */
    return {abort() {/* coding here */}};
}

<Upload request={customRequest}/>
```

a object named 'option' will be pass into customRequest method and it's schema:

```
    onProgress: (event: { percent: number }): void
    onError: (event: Error, body?: Object): void
    onSuccess: (body: Object): void
    data: Object // 额外的数据
    filename: String // 文件名
    file: File // 原生File对象
    withCredentials: Boolean // 是否携带cookie
    action: String // 请求地址
    method: String // 请求类型 post/put
    timeout: Number // 超时
    headers: Object // 请求头
```

customRequest should return a object with a abort method which can abort a request

```
abort(file?: File) => void: abort the uploading file
```

customRequest implements reference: https://github.com/alibaba-fusion/next/blob/master/src/upload/runtime/request.jsx

### ErrorCode

| ErrorCode           | description                                                               |
| ------------------- | ------------------------------------------------------------------------- |
| EXCEED_LIMIT        | when limit is set , selected files number + uploaded files number > limit |
| BEFOREUPLOAD_REJECT | BeforeUpload method returns false/Promise.resolve(false)/Promise.reject() |
| RESPONSE_FAIL       | Response Error                                                            |

All the ErrorCode in `Upload.ErrorCode`.

### onChange Return Data Schema

        {
          uid: 'uid',       // file unique ID
          name: 'xx.png'    // filename
          state: 'done',    // selected uploading done error
          response: {"success":true}  // server response
          url: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
          imgURL: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg', //optional
          downloadURL: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg' // optional
        }

### API Response Data Schema

        {
          "success": true,
          "message": "upload success",                           // display when success=false
          "url": "https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg"             // file url
          "imgURL": "https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg",         // file preview url(optional)
          "downloadURL": "https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg",    // file download url(optional)
        }

### Server Side Response Format

Use `formatter` to transfer nonstandard data to standard data

-   `Assume` Server returns such data

        {
          "status": "success",
          "img_src": "https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg",
        }

-   transfer it

        <Upload
          action="http://127.0.0.1:3001/upload"
          formatter={(res) => {
            // check the res & return standard data
            return {
              success: res.status === 'success',
              url: res.img_src,
            }
          }}
        />

## Server side code example

Next Upload components upload files by sending `multipart/form-data` type request.

It is no doubt that every kind of server side framework can deal with `multipart/form-data` type request and extract files from request body. Now we give out 2 examples

-   [Java Springboot](https://github.com/alibaba-fusion/next-upload-java-server)
-   [Node Eggjs](https://github.com/alibaba-fusion/next-upload-node-server)

## IE9 Compatibility

-   when enviroment < ie9, we use iframe as a no-refresh page upload solution, So You must keep the upload url domain and your page url domain the same.
-   when enviroment < ie9, Server side response header, `context-type` must be `text/html`, and never be `application/json`
-   if only top-level domains the same（`taobao.com`: top-level domain `shop.taobao.com`: second-level domain), you can use methods below to upload file。

Assume that your form page url domain：shop.taobao.com, while the file server url is upload.taobao.com. Server side should return data with a extra script tag

        <script>document.domain="taobao.com";</script>
        {"status":1,"type":"ajax","name":"54.png","url":".\/files\/54.png"}

iframe upload will request with a param `_documentDomain`. You can set your domain

## ARIA and KeyBoard

| KeyBoard | Descripiton                                                                                            |
| :------- | :----------------------------------------------------------------------------------------------------- |
| Enter    | 1. When the component gets the focus, press `Enter` to select the file upload 2. Delete uploaded image |
