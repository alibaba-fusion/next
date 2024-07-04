import React from 'react';
import Html5Uploader from './html5-uploader';
import IframeUploader from './iframe-uploader';
import type { Html5Props, UploadFile } from '../types';

export default class Uploader extends React.Component<
    Html5Props,
    { Component: typeof Html5Uploader | typeof IframeUploader }
> {
    state = {
        Component: Html5Uploader,
    };
    uploaderRef: InstanceType<typeof Html5Uploader> | InstanceType<typeof IframeUploader>;

    componentDidMount() {
        if (typeof File === 'undefined') {
            /* eslint react/no-did-mount-set-state:0 */
            this.setState({
                Component: IframeUploader,
            });
        }
    }

    abort(file: UploadFile) {
        this.uploaderRef.abort(file);
    }

    startUpload(files: UploadFile[]) {
        this.uploaderRef.startUpload(files);
    }

    saveUploaderRef = (ref: InstanceType<typeof Html5Uploader>) => {
        this.uploaderRef = ref;
    };

    render() {
        const Uploader = this.state.Component;
        return <Uploader {...this.props} ref={this.saveUploaderRef} />;
    }
}
