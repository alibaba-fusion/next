import React, { Component } from 'react';
import ConfigProvider from '../config-provider';
import { log } from '../util';
import { errorCode } from './util';
import transform from './transform';
import Upload from './upload';
import List from './list';
import Card from './card';
import Dragger from './dragger';
import Selecter from './runtime/selecter';
import Uploader from './runtime/uploader';
import { assignSubComponent } from '../util/component';
import type { CardProps, CoreProps, UploadFile, ListType } from './types';

export type {
    UploadProps,
    CardProps,
    SelecterProps,
    DraggerProps,
    UploadFile,
    UploadOptions,
    UploadError,
} from './types';

class Core extends Component<CoreProps> {
    uploader: Uploader;
    constructor(props: CoreProps) {
        super(props);
        const {
            action,
            name,
            method,
            beforeUpload,
            onProgress,
            onError,
            withCredentials,
            headers,
            data,
            onSuccess,
        } = this.props;

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
            onSuccess,
        });
    }

    abort() {
        this.uploader.abort();
    }

    handleSelect = (files: UploadFile[]) => {
        this.uploader.startUpload(files);
    };

    render() {
        log.deprecated('Upload.Core', 'Upload.Selecter and Upload.Uploader', 'Upload');

        const {
            action,
            name,
            method,
            beforeUpload,
            onProgress,
            onError,
            withCredentials,
            headers,
            data,
            onSuccess,
            ...others
        } = this.props;

        const props = others;

        return <Selecter {...transform(props, () => {})} onSelect={this.handleSelect} />;
    }
}

const UploadWithSub = assignSubComponent(Upload, {
    List: List,
    Card: ConfigProvider.config(Card, { componentName: 'Upload' }),
    Dragger: ConfigProvider.config(Dragger, {
        componentName: 'Upload',
    }),
    Selecter: Selecter,
    Uploader: Uploader,
    ErrorCode: errorCode,
    // compatible with 0.x version
    ImageUpload: ConfigProvider.config(Card, {
        componentName: 'Upload',
        transform: (props, deprecated) => {
            deprecated!('Upload.ImageUpload', 'Upload.Card', 'Upload');
            const newprops: CardProps = transform(props, () => {});
            if (newprops.locale && newprops.locale.image) {
                newprops.locale.card = newprops.locale.image;
            }

            return newprops;
        },
    }),
    // compatible with 0.x version
    DragUpload: ConfigProvider.config(Dragger, {
        componentName: 'Upload',
        transform: (props, deprecated) => {
            deprecated!('Upload.DragUpload', 'Upload.Dragger', 'Upload');
            const newprops: { listType?: ListType; [key: string]: unknown } = transform(
                props,
                () => {}
            );
            if (!newprops.listType) {
                newprops.listType = 'card';
            }

            return newprops;
        },
    }),
    Core: Core,
    // compatible with 0.x version
    CropUpload: function () {
        log.deprecated('Upload.CropUpload', '@alife/bc-next-crop-upload', 'Upload');
        return null;
    },
});

export default ConfigProvider.config(UploadWithSub, {
    transform,
});
