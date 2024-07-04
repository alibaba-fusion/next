import type { ObjectFile, UploadFile } from './types';

let now = +new Date();

export function uid() {
    return (now++).toString(36);
}

export function fileToObject(file: UploadFile): ObjectFile {
    if (!file.uid) {
        file.uid = uid();
    }

    return {
        lastModified: file.lastModified,
        lastModifiedDate: file.lastModifiedDate,
        name: file.filename || file.name,
        size: file.size,
        type: file.type,
        uid: file.uid,
        error: file.error,
        percent: 0,
        originFileObj: file,
    };
}

export function getFileItem<
    T extends { uid?: unknown; name?: unknown },
    U extends { uid?: unknown; name?: unknown },
>(file: T, fileList: U[]): U {
    const matchKey = file.uid !== undefined ? 'uid' : 'name';
    return fileList.filter(item => item[matchKey] === file[matchKey])[0];
}

export function removeFileItem<T extends { uid?: string | number; name?: string }>(
    file: T,
    fileList: T[]
) {
    const matchKey = file.uid !== undefined ? 'uid' : 'name';
    const removed = fileList.filter(item => item[matchKey] !== file[matchKey]);
    if (removed.length === fileList.length) {
        return null;
    }
    return removed;
}

// https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsDataURL
export function previewFile(file: Blob, callback: (arg0: string | ArrayBuffer | null) => void) {
    const reader = new FileReader();
    reader.onloadend = () => callback(reader.result);
    reader.readAsDataURL(file);
}

export const errorCode = {
    EXCEED_LIMIT: 'EXCEED_LIMIT',
    BEFOREUPLOAD_REJECT: 'BEFOREUPLOAD_REJECT',
    RESPONSE_FAIL: 'RESPONSE_FAIL',
};
