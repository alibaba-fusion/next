# 额外内容

- order: 8

提醒: `https://www.easy-mock.com/mock/5b713974309d0d7d107a74a3/alifd/upload`接口:


> 1. 该接口仅作为测试使用,业务请勿使用

> 2. 该接口仅支持图片上传,其他文件类型接口请自备
:::lang=en-us
# Extra

- order: 8

Waring: `https://www.easy-mock.com/mock/5b713974309d0d7d107a74a3/alifd/upload` API:

> 1. only for test & develop, Never Use in production enviroments

> 2. only support upload images
:::
---

````jsx
import { Upload, Button, Icon, Dialog } from '@alifd/next';

const showImg = (url) => {
    Dialog.show({
        title: 'img preview',
        content: <img src={url} style={{width: 400, height: 400}}/>,
        footer: false,
    });
};

const actionRender = (file) => {
    console.log(file);
    return (<span style={{position: 'absolute', right: 50}}>
        <Button text onClick={e=> {e.preventDefault(); showImg(file.url);}} size="large">
            <Icon type="eye" style={{marginRight: 12, cursor: 'pointer'}} />
        </Button>
        <Button text component="a" href={file.url} target="_blank">
            <Icon type="download" style={{cursor: 'pointer'}}/>
        </Button>
    </span>);
};

const itemRender = (file) => {
    console.log(file);
    return (<div>
        <img src={file.url} style={{maxWidth: '100%', maxHeight: '100%'}} />
        <div style={{
            position: 'absolute', top:0, right:0, bottom:0, left:0, background: 'rgba(0,0,0,.5)', color: '#ddd',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}>
            <Icon type="eye" style={{marginTop: 40}}/>
            <span style={{marginTop: 10}}>06:08</span>
        </div>
    </div>);
};

const data = [{
    name: 'IMG.png',
    state: 'done',
    size: 100,
    url: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg'
}];

ReactDOM.render((<div>
    <Upload
        listType="text"
        action="https://www.easy-mock.com/mock/5b713974309d0d7d107a74a3/alifd/upload"
        accept="image/png, image/jpg, image/jpeg, image/gif, image/bmp"
        beforeUpload={beforeUpload}
        onChange={onChange}
        fileNameRender={file => <span><Icon type="attachment" size="xs" style={{marginRight: 8}}/>{file.name}</span>}
        defaultValue={data}
    />
    <br/>
    <Upload
        listType="image"
        action="https://www.easy-mock.com/mock/5b713974309d0d7d107a74a3/alifd/upload"
        accept="image/png, image/jpg, image/jpeg, image/gif, image/bmp"
        beforeUpload={beforeUpload}
        onChange={onChange}
        actionRender={actionRender}
        defaultValue={data}
    />
    <br/>
     <Upload.Card
        listType="card"
        accept="image/png, image/jpg, image/jpeg, image/gif, image/bmp"
        defaultValue={data}
        itemRender={itemRender}
    />,
    </div>
), mountNode);

function beforeUpload(info) {
    console.log('beforeUpload callback : ', info);
}

function onChange(info) {
    console.log('onChange callback : ', info);
}
````
