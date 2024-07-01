import { func, obj } from '../../util';
import { uid, errorCode } from '../util';
import defaultRequest from './request';
import type { UploadFile, UploadOptions, UploadError } from '../types';

const noop = func.noop;

export default class Uploader {
    options: UploadOptions;
    reqs: {
        [x: string]: {
            abort?: () => void;
        };
    };
    constructor(options: UploadOptions) {
        this.options = {
            beforeUpload: noop,
            onProgress: noop,
            onSuccess: noop,
            onError: noop,
            data: {},
            name: 'file',
            method: 'post',
            ...options,
        };
        this.reqs = {};
    }

    setOptions(options: UploadOptions) {
        Object.assign(this.options, options);
    }

    startUpload(files: UploadFile[] | UploadFile) {
        const filesArr = Array.isArray(files) ? Array.prototype.slice.call(files) : [files];
        filesArr.forEach((file: UploadFile) => {
            file.uid = file.uid || uid();
            this.upload(file);
        });
    }

    abort(file?: UploadFile | string) {
        const { reqs } = this;
        if (file) {
            let uid: UploadFile | string | undefined | number = file;
            if (file && (file as UploadFile).uid) {
                uid = (file as UploadFile).uid;
            }
            if (reqs[uid as string] && reqs[uid as string].abort) {
                reqs[uid as string].abort!();
            }
            delete reqs[uid as string];
        } else {
            Object.keys(reqs).forEach(uid => {
                if (reqs[uid] && reqs[uid].abort) {
                    reqs[uid].abort!();
                }
                delete reqs[uid];
            });
        }
    }

    upload(file: UploadFile) {
        const { beforeUpload, action, name, headers, timeout, withCredentials, method, data } =
            this.options;
        const before = beforeUpload!(file, {
            action,
            name,
            headers,
            timeout,
            withCredentials,
            method,
            data,
        });

        func.promiseCall(
            before,
            (options: unknown) => {
                if (options === false) {
                    const err: UploadError = new Error(errorCode.BEFOREUPLOAD_REJECT);
                    err.code = errorCode.BEFOREUPLOAD_REJECT;
                    return this.options.onError!(err, null, file);
                }
                this.post(file, obj.isPlainObject(options) ? options : undefined);
            },
            (error: Error) => {
                let err: UploadError;
                if (error) {
                    err = error;
                } else {
                    err = new Error(errorCode.BEFOREUPLOAD_REJECT);
                    err.code = errorCode.BEFOREUPLOAD_REJECT;
                }
                this.options.onError!(err, null, file);
            }
        );
    }

    post(file: UploadFile, options = {}) {
        const requestOptions = {
            ...this.options,
            ...options,
        };
        const {
            action,
            name,
            headers,
            timeout,
            withCredentials,
            onProgress,
            onSuccess,
            onError,
            method,
        } = requestOptions;

        let data = requestOptions.data;
        if (typeof data === 'function') {
            data = (data as (file: UploadFile) => { [key: string]: string | Blob })(file);
        }

        const { uid } = file;

        const request =
            typeof requestOptions.request === 'function' ? requestOptions.request : defaultRequest;
        this.reqs[uid!] = request({
            action,
            filename: name,
            file,
            data,
            timeout,
            headers,
            withCredentials,
            method,
            onProgress: (e: ProgressEvent) => {
                onProgress!(e, file);
            },
            onSuccess: (ret: unknown) => {
                delete this.reqs[uid!];
                onSuccess!(ret, file);
            },
            onError: (err: Error, ret: unknown) => {
                delete this.reqs[uid!];
                onError!(err, ret, file);
            },
        });
    }
}
