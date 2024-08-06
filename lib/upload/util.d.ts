import type { ObjectFile, UploadFile } from './types';
export declare function uid(): string;
export declare function fileToObject(file: UploadFile): ObjectFile;
type GetFileItemReturn<T, U> = T extends null ? null : T extends undefined ? null : U;
export declare function getFileItem<T extends {
    uid?: unknown;
    name?: unknown;
} | undefined | null, U extends {
    uid?: unknown;
    name?: unknown;
}>(file: T, fileList: U[]): GetFileItemReturn<T, U>;
export declare function removeFileItem<T extends {
    uid?: string | number;
    name?: string;
}>(file: T, fileList: T[]): T[] | null;
export declare function previewFile(file: Blob, callback: (arg0: string | ArrayBuffer | null) => void): void;
export declare const errorCode: {
    EXCEED_LIMIT: string;
    BEFOREUPLOAD_REJECT: string;
    RESPONSE_FAIL: string;
};
export {};
