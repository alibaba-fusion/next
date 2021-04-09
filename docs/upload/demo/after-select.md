# 文件校验

- order: 12


afterSelect仅在 autoUpload=false 的时候生效
autoUpload=true时,可以使用beforeUpload完全可以替代该功能.

:::lang=en-us
# Submit Upload

- order: 5

afterSelect only works when autoUpload=false and it can be completely replace by beforeUpload method when autoUpload=true

Click a submit button to upload
:::
---

````jsx
import { Upload, Button, Dialog } from '@alifd/next';

const afterSelect = (file) => {
    return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
            const img = new Image();
            img.onload = () => {
                if (img.width === 1200) {
                    resolve();
                } else {
                    Dialog.alert({
                        content: `Image width must be 1200px now ${img.width}px！`,
                        closable: false,
                        title: 'Warning'
                    });
                    reject();
                }
            };
            img.src = reader.result;
        };
        reader.readAsDataURL(file.originFileObj);
    });
};

ReactDOM.render(<Upload
    action="https://www.easy-mock.com/mock/5b713974309d0d7d107a74a3/alifd/upload"
    autoUpload={false}
    listType="text"
    afterSelect={afterSelect}
    onError={err => console.log('Error',err)}
>
    <Button>Upload</Button>
</Upload>, mountNode);
````
