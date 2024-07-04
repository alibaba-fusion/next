import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Upload, Button, Dialog } from '@alifd/next';
// @ts-expect-error Cropper 这个包的types包没有安装，暂不处理
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css';
import { type UploadOptions } from '@alifd/next/types/upload';

// plan 1: [not work in IE/Edge] IE don't support File Constructor
// function dataURL2File(dataURL, filename) {
//     const arr = dataURL.split(','),
//         mime = arr[0].match(/:(.*?);/)[1],
//         bstr = atob(arr[1]),
//         u8arr = new Uint8Array(bstr.length);
//     let n = bstr.length;
//     while (n--) {
//         u8arr[n] = bstr.charCodeAt(n);
//     }

//     // base64 -> File (File Constructor not work in IE/Edge)
//     return new File([u8arr], filename, { type: mime });
// }

// plan 2: base64 -> Blob -> File, IE9+
const dataURL2Blob2File = (dataURL: string, fileName: string) => {
    const arr = dataURL.split(','),
        mime = arr![0]!.match(/:(.*?);/)![1],
        bstr = atob(arr[1]),
        u8arr = new Uint8Array(bstr.length);
    let n = bstr.length;
    while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }
    const blob = new Blob([u8arr], { type: mime });
    // Blob to File
    // set lastModifiedDate and name
    // @ts-expect-error Bolb没有lastModifiedDate属性，此处是强制转换
    blob.lastModifiedDate = new Date();
    // @ts-expect-error Bolb没有name属性，此处是强制转换
    blob.name = fileName;
    return blob as File;
};

class App extends Component<
    object,
    {
        img: string;
        visible: boolean;
        src: string | null | ArrayBuffer;
    }
> {
    uploader;
    cropperRef: InstanceType<typeof Cropper>;
    constructor(props: object) {
        super(props);
        this.uploader = new Upload.Uploader({
            action: 'http://127.0.0.1:6001/upload.do',
            onSuccess: this.onSuccess,
            name: 'file',
        });
    }

    state = {
        src: '',
        visible: false,
        img: '',
    };

    onSuccess: UploadOptions['onSuccess'] = (value: { url: string }) => {
        console.log(value);
        this.setState({
            img: value.url,
        });
    };

    onSelect = (files: File[]) => {
        const reader = new FileReader();
        reader.onload = () => {
            this.setState({
                src: reader.result,
                visible: true,
            });
        };
        reader.readAsDataURL(files[0]);
    };

    onCancel = () => {
        this.setState({
            visible: false,
        });
    };

    onOk = () => {
        const data = this.cropperRef.getCroppedCanvas().toDataURL();
        const file: File = dataURL2Blob2File(data, 'test.png');

        // start upload
        this.uploader.startUpload(file);

        this.setState({
            visible: false,
        });
    };

    saveCropperrRef = (ref: InstanceType<typeof Cropper>) => {
        this.cropperRef = ref;
    };

    render() {
        return (
            <div>
                <Upload.Selecter onSelect={this.onSelect}>
                    <Button>Select file</Button>
                </Upload.Selecter>
                <Dialog
                    visible={this.state.visible}
                    onCancel={this.onCancel}
                    onOk={this.onOk}
                    onClose={this.onCancel}
                    isFullScreen
                >
                    <Cropper
                        ref={this.saveCropperrRef}
                        src={this.state.src}
                        style={{ height: 300, width: 400 }}
                    />
                </Dialog>
                <div>
                    <img src={this.state.img} style={{ width: 100 }} />
                </div>
            </div>
        );
    }
}

ReactDOM.render(<App />, mountNode);
