import type { UploadFile, UploadOptions } from '../types';
export default class Uploader {
    options: UploadOptions;
    reqs: {
        [x: string]: {
            abort?: () => void;
        };
    };
    constructor(options: UploadOptions);
    setOptions(options: UploadOptions): void;
    startUpload(files: UploadFile[] | UploadFile): void;
    abort(file?: UploadFile | string): void;
    upload(file: UploadFile): void;
    post(file: UploadFile, options?: {}): void;
}
