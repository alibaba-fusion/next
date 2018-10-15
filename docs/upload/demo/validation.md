# 文件校验

- order: 12


afterSelect仅在 autoUpload=false 的时候生效
autoUpload=true时,可以使用beforeUpload完全可以替代该功能.

提醒: `https://www.easy-mock.com/mock/5b713974309d0d7d107a74a3/alifd/upload`接口:

> 1. 该接口仅作为测试使用,业务请勿使用
> 2. 该接口仅支持图片上传,其他文件类型接口请自备

:::lang=en-us
# Submit Upload

- order: 5

afterSelect only works when autoUpload=false and it can be completely replace by beforeUpload method when autoUpload=true

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
    afterSelect(file) {
        console.log(file);
        return true; // return false will trigger onError warning & prevent upload
    }
    render() {
        return (
            <div>
                <Upload
                    action="https://www.easy-mock.com/mock/5b713974309d0d7d107a74a3/alifd/upload"
                    autoUpload={false}
                    ref={this.saveUploaderRef}
                    listType="text"
                    afterSelect={this.afterSelect}
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
