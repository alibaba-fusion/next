import React from 'react';
import ReactDOM from 'react-dom';
import '../../../src/demo-helper/style.js';
import {Demo, DemoGroup, initDemo} from '../../../src/demo-helper';
import '../../../src/upload/style.js';
import Upload from '../../../src/upload';
import Field from '../../../src/field';
import '../../../src/dialog/style.js';
import Dialog from '../../../src/dialog';
import zhCN from '../../../src/locale/zh-cn';
import enUS from '../../../src/locale/en-us';
import ConfigProvider from '../../../src/config-provider';

// import demo helper

// import upload

// import dialog


const Card = Upload.Card;
const Dragger = Upload.Dragger;

const style = {
    width: '500px'
};


const demo1 = {
    closeable: {
        label: '关闭按钮',
        value: 'true',
        enum: [{label: '显示', value: 'true'}, {label: '隐藏', value: 'false'}]
    },
    size: {
        label: '附件大小',
        value: 'true',
        enum: [{label: '显示', value: 'true'}, {label: '隐藏', value: 'false'}]
    }
};

const demo2 = {
    closeable: {
        label: '关闭按钮',
        value: 'true',
        enum: [{label: '显示', value: 'true'}, {label: '隐藏', value: 'false'}]
    },
    size: {
        label: '附件大小',
        value: 'true',
        enum: [{label: '显示', value: 'true'}, {label: '隐藏', value: 'false'}]
    }
};

const demo3 = {
    listType: {
        label: '列表',
        value: 'true',
        enum: [{label: '显示', value: 'true'}, {label: '隐藏', value: 'false'}]
    }
};

const list = {
    name: 'IMG_20140109_121958.jpg',
    state: 'done',
    percent: 50,
    url: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
};

class FunctionDemo extends React.Component {
    field = new Field(this);

    onPreview = (file) => {
        Dialog.alert({
            content: <img src={file.url} alt={file.name} style={{width: '100%'}} />,
            title: file.name,
            // onOk: () => {},
        });
    }

    render() {
        const {init, getValue} = this.field;

        return (<div className="demo-container">
            <Demo title="File Upload" block {...init('demo1', {
                initValue: demo1,
                valueName: 'demoFunction',
                trigger: 'onFunctionChange'
            })}>
                <DemoGroup label="Uploading">
                    <Upload
                        limit={1}
                        listType="text"
                        closable={getValue('demo1').closeable.value === 'true'}
                        value={[Object.assign({}, list, { state: 'uploading' })]}
                        style={style}
                    />
                </DemoGroup>
                <DemoGroup label="Finished">
                    <Upload
                        limit={1}
                        listType="text"
                        closable={getValue('demo1').closeable.value === 'true'}
                        value={[Object.assign({}, list, { state: 'done', size: getValue('demo1').size.value === 'true' ? 1000 : 0 })]}
                        style={style}
                    />
                </DemoGroup>
                <DemoGroup label="Failed">
                    <Upload
                        limit={1}
                        listType="text"
                        closable={getValue('demo1').closeable.value === 'true'}
                        value={[Object.assign({}, list, { state: 'error' })]}
                        style={style}
                    />
                </DemoGroup>
            </Demo>

            <Demo title="Image Upload" block {...init('demo2', {
                initValue: demo2,
                valueName: 'demoFunction',
                trigger: 'onFunctionChange'
            })}>
                <Demo title="Image">
                    <DemoGroup label="Uploading">
                        <Upload
                            listType="image"
                            limit={1}
                            closable={getValue('demo2').closeable.value === 'true'}
                            defaultValue={[{
                                name: 'IMG_20140109_121958.jpg',
                                state: 'uploading',
                                percent: 50,
                                size: 4068,
                                url: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
                            }]}
                            style={style}
                        />
                    </DemoGroup>
                    <DemoGroup label="Finished">
                        <Upload
                            listType="image"
                            limit={1}
                            closable={getValue('demo2').closeable.value === 'true'}
                            value={[{
                                name: 'IMG_20140109_121958.jpg',
                                state: 'done',
                                size: getValue('demo2').size.value === 'true' ? 12345 : 0,
                                url: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
                            }]}
                            style={style}
                        />
                    </DemoGroup>
                    <DemoGroup label="Failed">
                        <Upload
                            listType="image"
                            limit={1}
                            closable={getValue('demo2').closeable.value === 'true'}
                            defaultValue={[{
                                name: 'IMG_20140109_121958.jpg',
                                state: 'error',
                                url: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
                            }]}
                            style={style}
                        />
                    </DemoGroup>
                </Demo>
                <Demo title="Card" block>
                    <DemoGroup label="Normal">
                        <Card style={style}
                        />
                    </DemoGroup>
                    <DemoGroup label="Disabled">
                        <Card style={style} disabled
                        />
                    </DemoGroup>
                    <DemoGroup label="Uploading">
                        <Card style={style}

                            limit={1}
                            defaultValue={[{
                                name: 'xxx.png',
                                state: 'uploading',
                                percent: 30,
                            }]}
                        />
                    </DemoGroup>
                    <DemoGroup label="Finished">
                        <Card style={style}
                            limit={1}
                            onPreview={this.onPreview}
                            defaultValue={[{
                                name: 'xxx.png',
                                state: 'done',
                                size: 12345,
                                url: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
                            }]}
                        />
                    </DemoGroup>
                    <DemoGroup label="Failed">
                        <Card style={style}
                            limit={1}
                            defaultValue={[{
                                name: 'xxx.png',
                                state: 'error'
                            }]}
                        />
                    </DemoGroup>
                </Demo>
            </Demo>

            <Demo title="Drag to upload" block {...init('demo3', {
                initValue: demo3,
                valueName: 'demoFunction',
                trigger: 'onFunctionChange'
            })}>
                <DemoGroup label="Normal">
                    <Dragger style={style} />
                </DemoGroup>
                <DemoGroup label="Disabled">
                    <Dragger style={style} disabled />
                </DemoGroup>
                <DemoGroup label="Drag Over">
                    <Dragger className="next-upload-drag-over"
                        style={style}
                    />
                </DemoGroup>
                <DemoGroup label="Drag Uploading">
                    <Dragger
                        style={style}
                        listType={getValue('demo3').listType.value === 'true' ? 'text' : undefined}
                        defaultValue={[{
                            name: 'xxx.png',
                            state: 'uploading',
                            percent: 30,
                        }]}
                    />
                </DemoGroup>
                <DemoGroup label="Drag Finish">
                    <Dragger
                        style={style}
                        listType={getValue('demo3').listType.value === 'true' ? 'text' : undefined}
                        defaultValue={[{
                            name: 'xxx.png',
                            state: 'done',
                            size: 12345,
                            url: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
                        }, {
                            name: 'xxx2.png',
                            state: 'done',
                            size: 12345,
                            url: 'https://img.alicdn.com/tps/TB19O79MVXXXXcZXVXXXXXXXXXX-1024-1024.jpg',
                        }]}
                    />
                </DemoGroup>
                <DemoGroup label="Drag Error">
                    <Dragger
                        style={style}
                        listType={getValue('demo3').listType.value === 'true' ? 'text' : undefined}
                        defaultValue={[{
                            name: 'xxx.png',
                            state: 'error',
                        }]}
                    />
                </DemoGroup>
            </Demo>
        </div>);
    }
}

window.renderDemo = function (lang = 'en-us') {
    ReactDOM.render((
        <ConfigProvider locale={lang === 'en-us' ? enUS : zhCN}>
            <FunctionDemo />
        </ConfigProvider>
    ), document.getElementById('container'));
};

window.renderDemo();

initDemo('upload');
