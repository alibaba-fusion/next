import { Component } from 'react';
import type { UploaderRef } from './types';

export default class Base<P, S> extends Component<P, S> {
    uploaderRef: UploaderRef;

    abort(file: File) {
        this.uploaderRef.abort(file);
    }

    startUpload() {
        this.uploaderRef.startUpload();
    }

    saveUploaderRef = (ref: UploaderRef | { getInstance: () => UploaderRef } | null) => {
        if (ref && typeof (ref as { getInstance: () => UploaderRef }).getInstance === 'function') {
            this.uploaderRef = (ref as { getInstance: () => UploaderRef }).getInstance();
        } else {
            this.uploaderRef = ref as UploaderRef;
        }
    };

    isUploading() {
        return this.uploaderRef.isUploading!();
    }
}
