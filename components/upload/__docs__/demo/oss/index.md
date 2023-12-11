# zh-CN order=10

# oss 上传

需要先从后端获取 host/OSSAccessKeyId/policy/signature/key 参数，修改action和data，再利用upload能力上传。

因为 demo 中的 action 为 oss 测试地址，不支持直接上传，所以控制台会报`Access-Control-Allow-Origin`的错误。

真实环境中需要自己在 oss 服务中配置下 `Access-Control-Allow-Origin` 的域名白名单，如果直接设置为 `*` ，则需要设置 `withCredentials=false`，否则依然有跨域报错，<a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Allow-Origin#directives" target="_blank">详细见</a>)。

# en-US order=10

# oss upload

get host/OSSAccessKeyId/policy/signature/key by ajax，then modify action/data

If you want to allow credentials then your `Access-Control-Allow-Origin` must not use `*`.
