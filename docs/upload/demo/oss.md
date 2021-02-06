# oss 上传

- order: 10

需要先从后端获取 host/OSSAccessKeyId/policy/signature/key 参数，修改action和data，再利用upload能力上层

因为 demo 中的 action 为 oss 测试地址，不支持直接上传，所以控制台会报`Access-Control-Allow-Origin`的错误，真实环境中需要自己配置下访问控制

:::lang=en-us
# oss upload

- order: 10

get host/OSSAccessKeyId/policy/signature/key by ajax，then modify action/data

:::
---

````jsx
import { Upload } from '@alifd/next';

class App extends React.Component {
    beforeUpload = (file, options) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // document: https://help.aliyun.com/document_detail/181756.html?#h2-u6D4Fu89C8u5668u7AEFu76F4u4F20u4EE3u78015
                // mock ajax to get host/OSSAccessKeyId/policy/signature/key
                const dataFormAjaxResponse = {
                    host: 'post-test.oss-cn-hangzhou.aliyuncs.com',
                    OSSAccessKeyId:'6MKO******4AUk44',
                    policy:'eyJleHBpcmF0aW9uIjoiMjAxNS0xMS0wNVQyMDoyMzoyM1oiLCJjxb25kaXRpb25zIjpbWyJjcb250ZW50LWxlbmd0aC1yYW5nZSIsMCwxMDQ4NTc2MDAwXSxbInN0YXJ0cy13aXRoIiwiJGtleSIsInVzZXItZGlyXC8iXV19',
                    signature:'I2u57FWjTKqX/AE6doIdyff151E=',
                    key: 'user-dir/filename.jpg',
                };

                const { host, OSSAccessKeyId, policy, signature, key, domain, } = dataFormAjaxResponse;

                // modify action and form data
                options.action = `//${host}`;
                options.data = {
                    key,
                    policy,
                    OSSAccessKeyId,
                    signature,
                };

                // save url to file object
                file.tempUrl = `//${domain}/${key}`;
                
                resolve(options);
            }, 300);
        });
    }
    onSuccess = (file, value) => {
        console.log(file, value);
    };
    formatter = (res, file) => ({
        success: true,
        url: file.tempUrl
    });
    render() {
        return (
            <Upload 
                beforeUpload={this.beforeUpload}
                onSuccess={this.onSuccess}
                formatter={this.formatter}
                shape="card"
            >
                oss demo
            </Upload>
        );
    }
}

ReactDOM.render(<App/>, mountNode);
````
