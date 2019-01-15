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

| Param | Descripiton  | Type  | Default Value |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- | --------- |
| action          | upload url                                                                                                                                               | String          | -         |
| shape           | upload button shape<br><br>option:<br>'card'                                                                                                                      | Enum            | -         |
| accept          | file type you want to accept (image/png, image/jpg, .doc, .ppt) See [input accept attribute](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input#attr-accept) | String          | -         |
| data            | extra upload data                                                                                                                                                | Object/Function | -         |
| headers         | upload request headers                                                                                                                                              | Object          | -         |
| withCredentials | Allow request with cookie or not                                                                                                                                       | Boolean         | true     |
| beforeUpload    | callback before upload start. returning null/undefined means do nothing, returning object will modify upload options,returning false will stop upload, null/undefined/object/false can be returned directly or wrapped by Promise <br><br>**signature**:<br>Function(file: Object, options: Object) => Bool/Object/Promise<br>**params**:<br>_file_: {Object} <br>_options_: {Object} <br>**returns**:<br>{Bool/Object/Promise} <br> | Function        | func.noop |
| onProgress      | callback when upload progress change <br><br>signaure:<br>Function() => void                                                                                                              | Function        | func.noop |
| onSuccess       | callback when upload success<br><br>**signaure**:<br>Function(file: Object, value: Array) => void<br>**params**:<br>_file_: {Object} file<br>_value_: {Array} value  | Function        | func.noop |
| onError         | callback when upload failed <br><br>**signaure**:<br>Function(file: Object, value: Array) => void<br>**params**:<br>_file_: {Object} file<br>_value_: {Array} fileList   | func.noop |
| children        | children element                                                                                                                                                   | ReactNode       | -         |
| timeout         | limit request time, unit: ms                                                                                                                                            | Number          | -         |
| method          | upload method<br><br>option:<br>'post', 'put'                                                                                                                 | Enum            | 'post'    |
| onSelect        | callback when select<br><br>signature:<br>Function() => void                                                                                                           | Function        | func.noop |
| onDrop          | callback when drop file(s)<br><br>signature:<br>Function() => void                                                                                                              | Function        | func.noop |
| value           | file list                                                                                                                                                  | Array           | -         |
| defaultValue    | default file list                                                                                                                                             | Array           | -         |
| listType        | list stye<br><br>option:<br>'text'<br>'image'<br>'card'        | Enum            | -         |
| formatter       | data format function, for action response is not standard, required params for  response,see [formatter](#formater)<br><br>signature:<br>Function() => void      | Function        | -         |
| limit           | limit max number for upload file                                                                                                                                             | Number          | Infinity  |
| dragable        |support dragable or not, attention: this feature only works when `ie10+`。                                                                                                                             | Boolean         | -         |
| disabled        | disable this upload component                                                                                                                                       | Boolean         | -         |
| onChange        | callback when uploaded file state chagnes<br><br>signature:<br>Function(info: Object) => void<br>params:<br>_info_: {Object} file info Object                                                     | Function        | func.noop |
| onRemove        | callback when file removed，See [onRemove](#onRemove)<br><br>signature:<br>Function() => void                                                                                | Function        | func.noop |
| autoUpload      | auto upload after select file                                                                                                                                                                                                                                          | Boolean         | true      |
| afterSelect      | callback after select file, afterSelect only works when autoUpload=false; when autoUpload=true, use beforeUpload to replace it<br><br>**signaure**:<br>Function(file: Object) => Boolean<br>**params**:<br>_file_: {Object} null<br>**return**:<br>{Boolean} return false will prevent upload file<br>   return false will prevent upload<br>        | Function        | func.noop |
| request         | custom reuqest method <br><br>**signaure**:<br>Function(option: Object) => Object<br>**params**:<br>_option_: {Object} null<br>**returns**:<br>{Object} object with abort method<br>                                                                                       | Function        | -         |

### Upload.Card

> Inherit from Upload API

| Param | Descripiton  | Type  | Default Value |
| --------- | ----------------------------------------------------- | -------- | --------- |
| onPreview | callback when click image<br><br>**signature**:<br>Function() => void | Function | func.noop |
| onChange  | callback when value changes<br><br>**signature**:<br>Function() => void       | Function | func.noop |

### Upload.Drager

> Only Supprt IE10+, Inherit from Upload API

### Upload.Selector

> [Basic Ability] Custom Style for File Selector

| Param | Descripiton  | Type  | Default Value |
| ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | --------- |
| disabled    | disable this upload component                                                                                                                                            | Boolean  | -         |
| multiple    | select more than one file at once, only works on `ie10+`. Press `Ctrl` to Select files                                                                                                               | Boolean  | false     |
| dragable    |  support dragable or not, attention: this feature only works when `ie10+`。                                                                                                                                     | Boolean  | -         |
| accept      | file type you want to accept (image/png, image/jpg, .doc, .ppt) See [input accept attribute](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input#attr-accept) | String   | -         |
| onSelect    | callback when files are selected<br><br>signature:<br>Function() => void                                                                                                           | Function | func.noop |
| onDragOver  | callback when files are dragged over<br><br>signature:<br>Function() => void                                                                                                           | Function | func.noop |
| onDragLeave | callback when files are dragged leave<br><br>signature:<br>Function() => void                                                                                                           | Function | func.noop |
| onDrop      | callback when files are dropped<br><br>signature:<br>Function() => void                                                                                                           | Function | func.noop |

## Method

### Upload.Uploader

> [Basic Ability] File Upload Core Ability
> let uploader = new Upload.Uploader([options]);

#### options

| Param | Descripiton  | Type  | Default Value |
| --------------- | ---------------------------------------------------------------------- | --------------- | ----- |
| action          | upload url                                                                   | String          | -     |
| data            | extra upload data                                                                | Object/Function | -     |
| headers         | upload request headers                                                            | Object          | -     |
| withCredentials | Allow request with cookie or not                                                          | Boolean         | false |
| onProgress      | callback when upload progress change<br><br>signature:<br>Function() => void                               | Function        | noop  |
| onSuccess       | callback when upload success<br><br>signature:<br>Function() => void           | Function        | noop  |
| onError         | callback when upload failed<br><br>signature:<br>Function() => void | Function        | noop  |



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

|  ErrorCode |  description |
|---|---|
|  EXCEED_LIMIT |  when limit is set , selected files number + uploaded files number > limit  |
|  BEFOREUPLOAD_REJECT |  BeforeUpload method returns false/Promise.resolve(false)/Promise.reject() |
|  RESPONSE_FAIL |  Response Error |
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

-   `Assume`  Server returns such data


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
- [Java Springboot](https://github.com/alibaba-fusion/next-upload-java-server)
- [Node Eggjs](https://github.com/alibaba-fusion/next-upload-node-server)

## IE9 Compatibility

-   when enviroment < ie9,  we use iframe as a no-refresh page upload solution, So  You must keep the upload url domain and your page url domain the same.
-   when enviroment < ie9, Server side response header, `context-type` must be `text/html`, and never be `application/json`
-   if only top-level domains the same（`taobao.com`: top-level domain  `shop.taobao.com`: second-level domain), you can use methods below to upload file。

Assume that your form page url domain：shop.taobao.com, while the file server url is upload.taobao.com. Server side should return data with a extra script tag

        <script>document.domain="taobao.com";</script>
        {"status":1,"type":"ajax","name":"54.png","url":".\/files\/54.png"}

iframe upload will request with a param `_documentDomain`. You can set your domain
