# 裁剪上传

- order: 10

提醒: `https://www.easy-mock.com/mock/5b713974309d0d7d107a74a3/alifd/upload`接口:


> 1. 该接口仅作为测试使用,业务请勿使用

> 2. 该接口仅支持图片上传,其他文件类型接口请自备

:::lang=en-us
# Crop

- order: 10

Waring: `https://www.easy-mock.com/mock/5b713974309d0d7d107a74a3/alifd/upload` API:

> 1. only for test & develop, Never Use in production enviroments

> 2. only support upload images
:::
---

````jsx
import { Upload, Button, Dialog } from '@alifd/next';
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';


function convertBase64UrlToFile(urlData) {

    const bytes = window.atob(urlData.split(',')[1]);

    const ab = new ArrayBuffer(bytes.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < bytes.length; i++) {
        ia[i] = bytes.charCodeAt(i);
    }

    const blob = new Blob([ab], {type: 'image/png'});

    return new File([blob], 'test.png', {type: 'image/png'});
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.uploader = new Upload.Uploader({
            action: 'https://www.easy-mock.com/mock/5b713974309d0d7d107a74a3/alifd/upload',
            onSuccess: this.onSuccess,
            name: 'file'
        });
    }

    state = {
        src: null,
        visible: false,
        img: null
    };

    onSuccess = (value) => {
        console.log(value);
        this.setState({
            img: value.url
        });
    };

    onSelect = (files) => {
        const reader = new FileReader();
        reader.onload = () => {
            this.setState({
                src: reader.result,
                visible: true
            });
        };
        reader.readAsDataURL(files[0]);
    };

    onCancel = () => {
        this.setState({
            visible: false
        });
    };

    onOk = () => {

        const data = this.cropperRef.getCroppedCanvas().toDataURL();

        const blob = convertBase64UrlToFile(data);
        const file = new File([blob], 'test.png', {type: 'image/png'});

        // start upload
        this.uploader.startUpload(file);

        this.setState({
            visible: false
        });
    };

    saveCropperrRef = (ref) => {
        this.cropperRef = ref;
    };

    render() {
        return (
            <div>
                <Upload.Selecter onSelect={this.onSelect}
                >
                    <Button>Select file</Button>
                </Upload.Selecter>
                <Dialog
                    visible={this.state.visible}
                    onCancel={this.onCancel}
                    onOk={this.onOk}
                    onClose={this.onCancel}
                    isFullScreen>
                    <Cropper
                        ref={this.saveCropperrRef}
                        src={this.state.src}
                        style={{height: 300, width: 400}}
                    />
                </Dialog>
                <div><img src={this.state.img} style={{width: 100}}/></div>
            </div>
        );
    }
}

ReactDOM.render(<App/>, mountNode);
````
