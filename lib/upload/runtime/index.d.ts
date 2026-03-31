import React from 'react';
import Html5Uploader from './html5-uploader';
import IframeUploader from './iframe-uploader';
import type { Html5Props, UploadFile } from '../types';
export default class Uploader extends React.Component<Html5Props, {
    Component: typeof Html5Uploader | typeof IframeUploader;
}> {
    state: {
        Component: typeof Html5Uploader;
    };
    uploaderRef: InstanceType<typeof Html5Uploader> | InstanceType<typeof IframeUploader>;
    componentDidMount(): void;
    abort(file: UploadFile): void;
    startUpload(files: UploadFile[]): void;
    saveUploaderRef: (ref: InstanceType<typeof Html5Uploader>) => void;
    render(): React.JSX.Element;
}
