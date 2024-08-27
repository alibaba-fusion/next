/**
 * clone from https://github.com/react-component/upload/blob/master/src/request.js
 */
import type { UploadOptions } from '../types';
export default function upload(option: UploadOptions): {
    abort(): void;
};
