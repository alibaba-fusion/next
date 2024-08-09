import { Component } from 'react';
import type { UploaderRef } from './types';
export default class Base<P, S> extends Component<P, S> {
    uploaderRef: UploaderRef;
    abort(file: File): void;
    startUpload(): void;
    saveUploaderRef: (ref: UploaderRef | {
        getInstance: () => UploaderRef;
    } | null) => void;
    isUploading(): boolean;
}
