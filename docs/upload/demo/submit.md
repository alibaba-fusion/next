# 提交上传

- order: 5

通过按钮点击提交上传

提醒: `https://www.easy-mock.com/mock/5b713974309d0d7d107a74a3/alifd/upload`接口:


> 1. 该接口仅作为测试使用,业务请勿使用

> 2. 该接口仅支持图片上传,其他文件类型接口请自备

:::lang=en-us
# Submit Upload

- order: 5
Waring: `https://www.easy-mock.com/mock/5b713974309d0d7d107a74a3/alifd/upload` API:

> 1. only for test & develop, Never Use in production enviroments

> 2. only support upload images
Click a submit button to upload
:::
---

````jsx
import { Upload, Button } from '@alifd/next';


class App extends React.Component {

    saveUploaderRef = (ref) => {
        this.uploaderRef = ref.getInstance();
    };

    onSubmit = () => {
        this.uploaderRef.startUpload();
    }
    beforeUpload(info, options) {
        console.log('beforeUpload callback : ', info, options);
        return options;
    }
    render() {
        return (
            <div>
                <Upload
                    action="https://www.easy-mock.com/mock/5b713974309d0d7d107a74a3/alifd/upload"
                    autoUpload={false}
                    ref={this.saveUploaderRef}
                    listType="card"
                    beforeUpload={this.beforeUpload}
                    useDataURL
                >
                    <Button>Upload</Button>
                </Upload>
                <br />
                <Button type="primary" onClick={this.onSubmit}>Submit</Button>
            </div>
        );
    }
}

ReactDOM.render(<App />, mountNode);
````
