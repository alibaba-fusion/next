# 裁剪上传

- order: 10

提供了两种方案，如果不需要支持 IE 推荐方案1

:::lang=en-us
# Crop

- order: 10

transfor dataURL to Blob to File

:::
---

````jsx
import { Upload, Button, Dialog } from '@alifd/next';
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';

function dataURL2File(dataURL, fileName){
    const arr = dataURL.split(','),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]),
        u8arr = new Uint8Array(bstr.length);
    let n = bstr.length;
    while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }
    const blob = new Blob([u8arr], { type: mime });
    // to File
    blob.lastModifiedDate = new Date();
    blob.name = fileName;
    return blob;
};

class App extends React.Component {
    constructor(props) {
        super(props);
        this.uploader = new Upload.Uploader({
            action: 'http://127.0.0.1:6001/upload.do',
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
        const file = dataURL2File(data, 'test.png');

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
