# 粘贴上传

- order: 5

提醒: `https://www.easy-mock.com/mock/5b713974309d0d7d107a74a3/alifd/upload`接口:


> 1. 该接口仅作为测试使用,业务请勿使用

> 2. 该接口仅支持图片上传,其他文件类型接口请自备
:::lang=en-us
# paste to upload

- order: 5
Waring: `https://www.easy-mock.com/mock/5b713974309d0d7d107a74a3/alifd/upload` API:

> 1. only for test & develop, Never Use in production enviroments

> 2. only support upload images
:::
---

````jsx
import { Upload, Input } from '@alifd/next';

class App extends React.Component {
    onPaste = (e) => {
        e.preventDefault();
        const files = e.clipboardData.files;
        files.length && this.uploaderRef.selectFiles(files);
    };

    saveUploaderRef = (ref) => {
        this.uploaderRef = ref.getInstance();
    };

    onChange = (value) => {
        console.log(value);
    };

    render() {
        return (<div>
            <Input.TextArea style={{width: '100%', marginBottom: 10}} autoHeight={{minRows: 4}} onPaste={this.onPaste} />
            <Upload
                action="https://www.easy-mock.com/mock/5b713974309d0d7d107a74a3/alifd/upload"
                listType="image"
                onChange={this.onChange}
                ref={this.saveUploaderRef}
            />
        </div>);
    }
}

ReactDOM.render(<App/>, mountNode);
````
