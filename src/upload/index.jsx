import React from 'react';
import ConfigProvider from '../config-provider';
import { log } from '../util';
import Upload from './upload';
import List from './list';
import Card from './card';
import Dragger from './dragger';
import Selecter from './runtime/selecter';
import Uploader from './runtime/uploader';

Upload.Card = ConfigProvider.config(Card, { componentName: 'Upload' });
Upload.Dragger = ConfigProvider.config(Dragger, { componentName: 'Upload' });
Upload.Selecter = Selecter;
Upload.Uploader = Uploader;

// compatible with 0.x version
function transform(props, deprecated) {
    const { listType, defaultFileList, fileList, ...others } = props;
    const newprops = others;

    if (listType === 'text-image') {
        deprecated('listType=text-image', 'listType=image', 'Upload');
        newprops.listType = 'image';
    } else if (listType === 'picture-card') {
        deprecated('listType=picture-card', 'listType=card', 'Upload');
        newprops.listType = 'card';
    } else {
        newprops.listType = listType;
    }

    if ('defaultFileList' in props) {
        deprecated('defaultFileList', 'defaultValue', 'Upload');
        newprops.defaultValue = defaultFileList;
    }

    if ('fileList' in props) {
        deprecated('fileList', 'value', 'Upload');
        newprops.value = fileList;
    }

    return newprops;
}

// compatible with 0.x version
Upload.ImageUpload = ConfigProvider.config(Card, {
    componentName: 'Upload',
    transform: (props, deprecated) => {
        deprecated('Upload.ImageUpload', 'Upload.Card', 'Upload');
        const newprops = transform(props, () => { });
        if (newprops.locale && newprops.locale.image) {
            newprops.locale.card = newprops.locale.image;
        }

        return newprops;
    }
});

// compatible with 0.x version
Upload.DragUpload = ConfigProvider.config(Dragger, {
    componentName: 'Upload',
    transform: (props, deprecated) => {
        deprecated('Upload.DragUpload', 'Upload.Dragger', 'Upload');
        const newprops = transform(props, () => { });
        if (!newprops.listType) {
            newprops.listType = 'card';
        }

        return newprops;
    }
});

// compatible with 0.x version
Upload.Core = class Core extends React.Component {
    constructor(props) {
        super(props);
        // eslint-disable-next-line
        const { action, name, method, beforeUpload, onProgress, onError, withCredentials, headers, data, onSuccess } = this.props;

        this.uploader = new Uploader({
            action,
            name,
            method,
            beforeUpload,
            onProgress,
            onError,
            withCredentials,
            headers,
            data,
            onSuccess
        });
    }

    abort() {
        this.uploader.abort();
    }

    handleSelect = (files) => {
        this.uploader.startUpload(files);
    }

    render() {
        log.deprecated('Upload.Core', 'Upload.Selecter and Upload.Uploader', 'Upload');

        // eslint-disable-next-line
        const { action, name, method, beforeUpload, onProgress, onError, withCredentials, headers, data, onSuccess, ...others } = this.props;

        const props = others;

        return <Selecter {...transform(props, () => { })} onSelect={this.handleSelect} />;
    }
};

// compatible with 0.x version
Upload.List = ConfigProvider.config(List, {
    componentName: 'Upload',
    transform
});

// compatible with 0.x version
Upload.CropUpload = function() {
    log.deprecated('Upload.CropUpload', '@alife/bc-next-crop-upload', 'Upload');
    return null;
};

export default ConfigProvider.config(Upload, {
    transform
});
