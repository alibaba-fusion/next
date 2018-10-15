# 上传失败

-   order: 12

:::lang=en-us

# Fail Status

-   order: 4
    :::

---

````jsx
import { Upload, Button } from '@alifd/next';


const value = [
    {
        uid: '2',
        name: 'IMG.png',
        state: 'error',
        url:
            'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
        downloadURL:
            'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
        imgURL:
            'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg'
    }
];

ReactDOM.render(
    <div>
        <Upload value={value} listType="text"> <Button>Upload</Button></Upload>

        <br />
        <Upload value={value} listType="card"> <Button>Upload</Button></Upload>

        <br />
        <Upload value={value} listType="image"> <Button>Upload</Button></Upload>
    </div>,
    mountNode
);
````
