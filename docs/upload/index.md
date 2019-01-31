# Upload

-   category: Components
-   family: DataEntry
-   chinese: 上传组件
-   cols: 1
-   type: 表单

---

## 开发指南

### 何时使用

用户根据提示将自己本地的相应信息(包含本地和云储存)上传到网站，上传组件可以帮助用户对上传过程和上传结果有预期，并可以更改或撤销上传行为。

## API

### Upload

| 参数              | 说明                                                                                                                                                                                                                                            | 类型              | 默认值       |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- | --------- |
| listType        | 上传列表的样式<br><br>**可选值**:<br>'text'(文字)<br>'image'(图文)<br>'card'(卡片)                                                                                                                                                                            | Enum            | -         |
| shape           | 上传按钮形状<br><br>**可选值**:<br>'card'                                                                                                                                                                                                              | Enum            | -         |
| value           | 文件列表                                                                                                                                                                                                                                          | Array           | -         |
| onRemove        | 移除文件回调函数，详见 [onRemove](#onRemove)<br><br>**签名**:<br>Function() => void                                                                                                                                                                        | Function        | func.noop |
| onCancel        | 取消上传回调(支持Promise)<br><br>**签名**:<br>Function() => void                                                                                                                                                                                        | Function        | func.noop |
| onImageError    | 头像加载出错回调<br><br>**签名**:<br>Function() => void                                                                                                                                                                                                 | Function        | func.noop |
| onPreview       | listType=card时点击图片回调<br><br>**签名**:<br>Function() => void                                                                                                                                                                                     | Function        | func.noop |
| extraRender     | 自定义额外渲染<br><br>**签名**:<br>Function() => void                                                                                                                                                                                                  | Function        | func.noop |
| children        | 子元素                                                                                                                                                                                                                                           | ReactNode       | -         |
| action          | 上传的地址                                                                                                                                                                                                                                         | String          | -         |
| accept          | 接受上传的文件类型 (image/png, image/jpg, .doc, .ppt) 详见 [input accept attribute](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input#attr-accept)                                                                                         | String          | -         |
| data            | 上传额外传参                                                                                                                                                                                                                                        | Object/Function | -         |
| headers         | 设置上传的请求头部                                                                                                                                                                                                                                     | Object          | -         |
| withCredentials | 是否允许请求携带 cookie                                                                                                                                                                                                                               | Boolean         | true      |
| beforeUpload    | 可选参数, 详见 [beforeUpload](#beforeUpload)<br><br>**签名**:<br>Function(files: Object, options: Object) => Boolean/Object/Promise<br>**参数**:<br>_files_: {Object} null<br>_options_: {Object} null<br>**返回值**:<br>{Boolean/Object/Promise} null<br> | Function        | func.noop |
| onProgress      | 上传中<br><br>**签名**:<br>Function() => void                                                                                                                                                                                                      | Function        | func.noop |
| onSuccess       | 可选参数，上传成功回调函数，参数为请求下响应信息以及文件<br><br>**签名**:<br>Function() => void                                                                                                                                                                             | Function        | func.noop |
| onError         | 可选参数，上传失败回调函数，参数为上传失败的信息、响应信息以及文件<br><br>**签名**:<br>Function() => void                                                                                                                                                                        | Function        | func.noop |
| timeout         | 设置上传超时,单位ms                                                                                                                                                                                                                                   | Number          | -         |
| method          | 上传方法<br><br>**可选值**:<br>'post', 'put'                                                                                                                                                                                                         | Enum            | 'post'    |
| onSelect        | 选择文件回调<br><br>**签名**:<br>Function() => void                                                                                                                                                                                                   | Function        | func.noop |
| onDrop          | 放文件<br><br>**签名**:<br>Function() => void                                                                                                                                                                                                      | Function        | func.noop |
| defaultValue    | 默认文件列表                                                                                                                                                                                                                                        | Array           | -         |
| formatter       | 数据格式化函数，配合自定义 action 使用，参数为服务器的响应数据，详见 [formatter](#formater)<br><br>**签名**:<br>Function(response: Object, file: File) => void<br>**参数**:<br>_response_: {Object} 返回<br>_file_: {File} 文件对象                                                   | Function        | -         |
| limit           | 最大文件上传个数                                                                                                                                                                                                                                      | Number          | Infinity  |
| dragable        | 可选参数，是否支持拖拽上传，`ie10+` 支持。                                                                                                                                                                                                                     | Boolean         | -         |
| disabled        | 可选参数，是否禁用上传功能                                                                                                                                                                                                                                 | Boolean         | -         |
| onChange        | 上传文件改变时的状态<br><br>**签名**:<br>Function(info: Object) => void<br>**参数**:<br>_info_: {Object} 文件事件对象                                                                                                                                             | Function        | func.noop |
| autoUpload      | 自动上传                                                                                                                                                                                                                                          | Boolean         | true      |
| afterSelect     | 可选参数, 用于校验文件,afterSelect仅在 autoUpload=false 的时候生效,autoUpload=true时,可以使用beforeUpload完全可以替代该功能.<br><br>**签名**:<br>Function(file: Object) => Boolean<br>**参数**:<br>_file_: {Object} null<br>**返回值**:<br>{Boolean} 返回false会阻止上传,其他则表示正常<br>       | Function        | func.noop |

### Upload.Card

> 继承 Upload 的 API，除非特别说明

| 参数        | 说明                                           | 类型       | 默认值       |
| --------- | -------------------------------------------- | -------- | --------- |
| onPreview | 点击图片回调<br><br>**签名**:<br>Function() => void  | Function | func.noop |
| onChange  | 改变时候的回调<br><br>**签名**:<br>Function() => void | Function | func.noop |
| onRemove  | 点击移除的回调<br><br>**签名**:<br>Function() => void | Function | -         |
| onCancel  | 取消上传的回调<br><br>**签名**:<br>Function() => void | Function | -         |

### Upload.Drager

> IE10+ 支持。继承 Upload 的 API，除非特别说明

### Upload.Selecter

> [底层能力] 可自定义样式的文件选择器

| 参数          | 说明                                                                                                                                                    | 类型       | 默认值       |
| ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | --------- |
| disabled    | 是否禁用上传功能                                                                                                                                              | Boolean  | -         |
| multiple    | 是否支持多选文件，`ie10+` 支持。开启后按住 ctrl 可选择多个文件                                                                                                                | Boolean  | false     |
| dragable    | 是否支持拖拽上传，`ie10+` 支持。                                                                                                                                  | Boolean  | -         |
| accept      | 接受上传的文件类型 (image/png, image/jpg, .doc, .ppt) 详见 [input accept attribute](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input#attr-accept) | String   | -         |
| onSelect    | 文件选择回调<br><br>**签名**:<br>Function() => void                                                                                                           | Function | func.noop |
| onDragOver  | 拖拽经过回调<br><br>**签名**:<br>Function() => void                                                                                                           | Function | func.noop |
| onDragLeave | 拖拽离开回调<br><br>**签名**:<br>Function() => void                                                                                                           | Function | func.noop |
| onDrop      | 拖拽完成回调<br><br>**签名**:<br>Function() => void                                                                                                           | Function | func.noop |

## Method

### Upload.Uploader

> [底层能力] 文件上传核心功能
> let uploader = new Upload.Uploader([options]);

#### options

| 参数              | 说明                                                                     | 类型              | 默认值   |
| --------------- | ---------------------------------------------------------------------- | --------------- | ----- |
| action          | 上传的地址                                                                  | String          | -     |
| data            | 上传额外传参                                                                 | Object/Function | -     |
| headers         | 设置上传的请求头部                                                              | Object          | -     |
| withCredentials | 是否允许请求携带 cookie                                                        | Boolean         | false |
| onProgress      | 上传中<br><br>**签名**:<br>Function() => void                               | Function        | noop  |
| onSuccess       | 上传成功回调函数，参数为请求下响应信息以及文件<br><br>**签名**:<br>Function() => void           | Function        | noop  |
| onError         | 可选参数，上传失败回调函数，参数为上传失败的信息、响应信息以及文件<br><br>**签名**:<br>Function() => void | Function        | noop  |

### onChange 返回结构

        {
          uid: 'uid',       // 文件唯一标识
          name: 'xx.png'    // 文件名
          state: 'done',    // 状态有：selected uploading done error
          response: {"success":true}  // 服务端响应内容
          url: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
          imgURL: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg', // 头像(可选)
          downloadURL: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg'   // 下载(可选)
        }

### 接口 response 返回数据格式要求

        {
          "success": true,
          "message": "上传成功",                                  // success=false 时候可以展示错误
          "url": "https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg"             // 返回结果
          "imgURL": "https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg",         // 图片预览地址 (非必须)
          "downloadURL": "https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg",    // 文件下载地址 (非必须)
        }

### 后端数据格式化

通过 `formatter` 将来自后端的不规则数据转换为符合组件要求的数据格式

-   `假设` 服务器的响应数据如下


        {
          "status": "success",                              // 上传成功返回码
          "img_src": "https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg",   // 图片链接
        }

-   转换方法


        <Upload
          action="http://127.0.0.1:3001/upload"
          formatter={(res, file) => {
            // 函数里面根据当前服务器返回的响应数据
            // 重新拼装符合组件要求的数据格式
            return {
              success: res.status === 'success',
              url: res.img_src,
            }
          }}
        />

## Upload 服务端代码样例

Next Upload组件上传文件使用的`multipart/form-data`方式上传文件,具体实现是在支持`FormData`对象的浏览器中使用xhr对象发送formdata。在不支持`FormData`对象的浏览器如IE9, 使用iframe原生表单实现。

各个语言的服务端框架,必然是可以处理`multipart/form-data`类型的请求,并解析出文件。一下给出两种语言的样例代码

-   [Java Springboot 样例](https://github.com/alibaba-fusion/next-upload-java-server)
-   [Node Eggjs 样例](https://github.com/alibaba-fusion/next-upload-node-server)

## IE9兼容性

-   ie9 下用因为使用 iframe 作为无刷新上传方案，必须保证表单页面的域名和上传的服务器端的域名相同。
-   ie9 下服务器端返回数据需要设置头部 `context-type` 为 `text/html`，不要设置为 `application/json`
-   如果只是一级域名相同（`taobao.com` 为一级域名  `shop.taobao.com` 为二级域名），可以通过降域的方式实现跨域上传。

假设你表单页面的域是：shop.taobao.com，而上传的服务器端路径却是 upload.taobao.com。服务端返回必须带额外script标签

        <script>document.domain="taobao.com";</script>
        {"status":1,"type":"ajax","name":"54.png","url":".\/files\/54.png"}
å
iframe上传会额外传递参数 `_documentDomain` 方便你设置域名





## ARIA and KeyBoard

| 按键          | 说明                              |
| :---------- | :------------------------------ |
| Enter       | 1.当组件获取焦点时，按下`Enter`就可以选择文件上传 2.删除上传图片                |

 
