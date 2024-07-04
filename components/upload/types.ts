import type { CSSProperties, DragEvent, ReactNode, MouseEvent, SyntheticEvent } from 'react';
import type { ReactWrapper, ShallowWrapper } from 'enzyme';

import type { ProgressProps } from '../progress';
import type { CommonProps } from '../util';
import type { Locale } from '../locale/types';

/**
 * @api Upload
 */
export interface UploadProps extends UploadCommonProps {
    /**
     * 上传的地址
     * @en Upload address
     */
    action?: string;

    /**
     * 上传按钮形状
     * @en Upload button shape
     */
    shape?: 'card';

    /**
     * 接受上传的文件类型 (image/png, image/jpg, .doc, .ppt) 详见 [input accept attribute](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input#attr-accept)
     * @en Accepted file types, see [input accept attribute](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input#attr-accept)
     */
    accept?: string;

    /**
     * 上传额外传参
     * @en Upload extra parameters
     */
    data?: object | (() => void);

    /**
     * 设置上传的请求头部
     * @en Set the request header
     */
    headers?: {
        'X-Requested-With'?: string | undefined;
        [key: string]: unknown;
    };

    /**
     * 是否允许请求携带 cookie
     * @en Whether to allow requests to carry cookies
     * @defaultValue true
     */
    withCredentials?: boolean;

    /**
     * 是否支持上传文件夹，仅在 chorme 下生效
     * @en Whether to support upload folder, only in chrome
     * @skip
     */
    webkitdirectory?: boolean;

    /**
     * 可选参数, 详见 [beforeUpload](#beforeUpload)
     * @en Optional parameters, see [beforeUpload](#beforeUpload)
     * @param file - 所有文件 - all file
     * @param options - 参数 -  parameters
     * @defaultValue func.noop
     */
    beforeUpload?: (file: ObjectFile, options: BeforeUploadOption) => boolean | object | unknown;

    /**
     * 上传中
     * @en onProgress Callback
     * @defaultValue func.noop
     */
    onProgress?: (file: ObjectFile[], e: ObjectFile) => void;

    /**
     * 可选参数，上传成功回调函数，参数为请求下响应信息以及文件
     *  @en Optional parameters, upload success callback function, the parameter is the response information and file
     * @param file - 文件 - file
     * @param value - 值 - value
     * @defaultValue func.noop
     */
    onSuccess?: (file: ObjectFile, value?: ObjectFile[]) => void;

    /**
     * 可选参数，上传失败回调函数，参数为上传失败的信息、响应信息以及文件
     * @en Optional parameters, upload failure callback function, the parameter is the upload failure information, response information and file
     * @param file - 出错的文件 - error file
     * @param value - 当前值 - current value
     * @defaultValue func.noop
     */
    onError?: (file: UploadError, value: ObjectFile[]) => void;

    /**
     * 子元素
     * @en Child elements
     */
    children?: ReactNode;

    /**
     * 设置上传超时,单位ms
     * @en Upload timeout, unit ms
     */
    timeout?: number;

    /**
     * 上传方法
     * @en Upload method
     * @defaultValue 'post'
     */
    method?: 'post' | 'put' | 'POST' | 'PUT';

    /**
     * 自定义上传方法
     * @en Custom upload method
     * @param option - 参数 - parameters
     * @returns - 返回值 - object with abort method
     */
    request?: (option: object) => object;

    /**
     * 文件名字段
     * @en File name field
     */
    name?: string;

    /**
     * 选择文件回调
     * @en Select file callback
     * @defaultValue func.noop
     */
    onSelect?: (uploadFiles: Array<unknown>, value: Array<unknown>) => void;

    /**
     * 放文件
     * @en Drop file
     * @defaultValue func.noop
     */
    onDrop?: (files: UploadFile[]) => void;

    /**
     * 文件列表
     * @en File list
     */
    value?: Array<ObjectFile> | ObjectFile;

    /**
     * 默认文件列表
     * @en Default file list
     */
    defaultValue?: Array<ObjectFile> | ObjectFile;

    /**
     * 上传列表的样式
     * @en Upload list style
     */
    listType?: ListType;

    /**
     * 数据格式化函数，配合自定义 action 使用，参数为服务器的响应数据，详见 [formatter](#formater)
     * @en Data formatting function, used with custom action, the parameter is the response data of the server, see [formatter](#formater)
     * @param response - 返回 - return
     * @param file - 文件对象 - file object
     */
    formatter?: (response: UploadResponse, file: ObjectFile) => UploadResponse;

    /**
     * 最大文件上传个数
     * @en Maximum number of file uploads
     * @defaultValue Infinity
     */
    limit?: number;

    /**
     * 可选参数，是否支持拖拽上传，`ie10+` 支持。
     * @en Optional parameters, whether to support drag and drop upload, `ie10+` supports.
     */
    dragable?: boolean;

    /**
     * 可选参数，是否本地预览
     * @en Optional parameters, whether to locally preview
     */
    useDataURL?: boolean;

    /**
     * 可选参数，是否禁用上传功能
     * @en Optional parameters, whether to disable upload
     */
    disabled?: boolean;

    /**
     * 上传文件改变时的状态
     * @en Upload file change status
     * @param value - 所有文件 - value
     * @param file - 文件对象 - file object
     * @defaultValue func.noop
     */
    onChange?: (value: ObjectFile[], file: ObjectFile | ObjectFile[]) => void;

    /**
     * 可选参数, 用于校验文件,afterSelect仅在 autoUpload=false 的时候生效,autoUpload=true时,可以使用beforeUpload完全可以替代该功能.
     * @en Optional parameters, used to validate files, afterSelect only takes effect when autoUpload=false, autoUpload=true can be used to replace this function
     * @param file - 文件 - file
     * @returns -  返回false会阻止上传,其他则表示正常 - return false will block upload, other means normal
     * @defaultValue func.noop
     */
    afterSelect?: (file: object) => boolean | Promise<void>;

    /**
     * 移除文件回调函数
     * @en Remove file callback function
     * @param file - 文件 - file
     * @returns - 返回 false、Promise.resolve(false)、 Promise.reject() 将阻止文件删除 - return false、Promise.resolve(false)、 Promise.reject() will block file deletion
     * @defaultValue func.noop
     */
    onRemove?: (file: object) => void;

    /**
     * 自动上传
     * @en Automatic upload
     * @defaultValue true
     */
    autoUpload?: boolean;

    /**
     * 透传给Progress props
     * @en Pass to Progress props
     */
    progressProps?: ProgressProps;

    /**
     * 是否为预览态
     * @en Is preview
     */
    isPreview?: boolean;

    /**
     * 预览态模式下渲染的内容
     * @en Preview mode
     * @param value - 文件 - file
     */
    renderPreview?: (value: ObjectFile | ObjectFile[], props: UploadProps) => void;

    /**
     * 文件对象的 key name
     * @en File object key name
     * @version 1.21
     */
    fileKeyName?: string;

    /**
     * 自定义文件名渲染
     * @en Custom file name rendering
     * @param file - 文件 - file
     * @returns - react node - react node
     */
    fileNameRender?: (file: object) => ReactNode;

    /**
     * 自定义操作区域渲染
     * @en Custom operation area rendering
     * @param file - 文件 - file
     * @returns - react node - react node
     */
    actionRender?: (file: UploadFile) => ReactNode;

    /**
     * 自定义额外渲染
     * @skip
     */
    extraRender?: (file: File) => unknown;
    /**
     * 自定义class
     * @skip
     */
    className?: string;

    /**
     * 自定义内联样式
     * @skip
     */
    style?: CSSProperties;

    /**
     * @skip
     */
    onPreview?: (file: UploadFile, e?: MouseEvent<HTMLElement>) => void;

    /**
     * 点击文件名时触发 onPreview
     * @en Click file name
     * @version 1.24
     */
    previewOnFileName?: boolean;

    /**
     * 自定义成功和失败的列表渲染方式
     */
    itemRender?: (file: UploadFile, obj: { remove?: () => void }) => ReactNode;

    /**
     * 选择新文件上传并替换
     */
    reUpload?: boolean;

    /**
     * 是否自动上传
     * @skip
     */
    autoUplod?: boolean;

    /**
     * 是否支持多选文件，`ie10+` 支持。开启后按住 ctrl 可选择多个文件
     * @skip
     */
    multiple?: boolean;

    /**
     * 是否可以关闭
     * @skip
     */
    closable?: boolean;

    /**
     * 是否只读
     * @skip
     */
    readonly?: boolean;

    /**
     * list 值
     * @skip
     */
    list?: unknown;
    /**
     *
     * @skip
     */
    rtl?: boolean;
    /**
     * 取消事件
     * @skip
     */
    onCancel?: (file: UploadFile) => void;

    /**
     * 样式前缀
     * @skip
     */
    prefix?: string;
}
/**
 * @api Upload.Card
 * 继承 Upload 的 API，除非特别说明
 */
export interface CardProps extends UploadProps {
    /**
     * 点击图片回调
     * @en Click image callback
     * @defaultValue func.noop
     */
    onPreview?: (file: UploadFile, e?: MouseEvent<HTMLElement>) => void;

    /**
     * 改变时候的回调
     * @en Change callback
     * @defaultValue func.noop
     */
    onChange?: (value: UploadFile[], file: UploadFile) => void;

    /**
     * 点击移除的回调
     * @en Click remove callback
     */
    onRemove?: (file: object) => void;

    /**
     * 取消上传的回调
     * @en Cancel upload callback
     */
    onCancel?: () => void;

    /**
     * 自定义成功和失败的列表渲染方式
     * @en Customize success and failure list rendering
     * @param file - 文件对象 - file object
     * @param obj - 包含属性remove: 删除回调 - contains properties remove: delete callback
     * @version 1.21
     */
    itemRender?: (file: UploadFile, obj: { remove?: () => void }) => ReactNode;

    /**
     * 选择新文件上传并替换
     * @en Select new file upload and replace
     * @version 1.24
     */
    reUpload?: boolean;

    /**
     * 展示下载按钮
     * @en Show download button
     * @defaultValue true
     * @version 1.24
     */
    showDownload?: boolean;

    /**
     * 上传中
     * @en onProgress Callback
     * @defaultValue func.noop
     */
    onProgress?: (file: UploadFile[], e: UploadFile) => void;
}

/**
 * @api Upload.Dragger
 * IE10+ 支持。继承 Upload 的 API，除非特别说明
 */
export interface DraggerProps extends UploadProps {
    /**
     * 拖拽进入回调
     * @skip
     */
    onDragOver?: (e: DragEvent<HTMLElement>) => void;

    /**
     * 拖拽离开回调
     * @skip
     */
    onDragLeave?: (e: DragEvent<HTMLElement>) => void;
}

export interface CardState {
    uploaderRef: UploaderRef;
    value: Array<ObjectFile>;
}

/**
 * @api Upload.Selecter
 * [底层能力] 可自定义样式的文件选择器
 */
export interface SelecterProps extends UploadProps {
    /**
     * 是否禁用上传功能
     * @en Whether to disable upload
     */
    disabled?: boolean;

    /**
     * 是否支持多选文件，`ie10+` 支持。开启后按住 ctrl 可选择多个文件
     * @en Whether to support multiple file selection, `ie10+` supports
     * @defaultValue false
     */
    multiple?: boolean;

    /**
     * 是否支持上传文件夹，仅在 chorme 下生效
     * @en Whether to support upload folder, only in chrome
     */
    webkitdirectory?: boolean;

    /**
     * 调用系统设备媒体
     * @en Call system device media
     */
    capture?: string;

    /**
     * 是否支持拖拽上传，`ie10+` 支持。
     * @en Whether to support drag and drop upload, `ie10+` supports
     */
    dragable?: boolean;

    /**
     * 接受上传的文件类型 (image/png, image/jpg, .doc, .ppt) 详见 [input accept attribute](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input#attr-accept)
     * @en Accepted file types
     */
    accept?: string;

    /**
     * 文件选择回调
     * @en File selection callback
     * @defaultValue func.noop
     */
    onSelect?: (e: UploadFile[]) => void;

    /**
     * 拖拽经过回调
     * @en Drag over callback
     * @defaultValue func.noop
     */
    onDragOver?: (e: DragEvent<HTMLInputElement>) => void;

    /**
     * 拖拽离开回调
     * @en Drag leave callback
     * @defaultValue func.noop
     */
    onDragLeave?: () => void;

    /**
     * 拖拽完成回调
     * @en Drag complete callback
     * @defaultValue func.noop
     */
    onDrop?: (fiels: File[]) => void;
}

export interface UploadState {
    value: Array<ObjectFile>;
    uploading: boolean;
}

export interface ListProps extends UploadCommonProps {
    prefix?: string;
    /**
     * 文件列表，数据格式请参考 文件对象
     */
    listType?: ListType;
    reUpload?: boolean;
    /**
     * 文件列表
     */
    value: Array<UploadFile>;
    closable?: boolean;
    /**
     * 删除文件回调(支持Promise)
     */
    onRemove?: (file: unknown) => boolean | unknown;
    /**
     * 取消上传回调(支持Promise)
     */
    onCancel?: (file?: UploadFile) => void;
    /**
     * 头像加载出错回调
     */
    onImageError?: (obj: object, file: UploadFile) => void;
    /**
     * 点击图片回调
     */
    onPreview?: (file: UploadFile, e?: MouseEvent<HTMLElement>) => void;
    /**
     * 点击文件名时触发 onPreview
     */
    previewOnFileName?: boolean;
    /**
     * 自定义额外渲染
     */
    extraRender?: (file: UploadFile) => void;
    /**
     * 自定义操作渲染
     */
    actionRender?: (file: UploadFile) => void;
    /**
     * 卡片自定义渲染（目前只支持 Card)
     * Object file 文件对象
     * Object remove remove:删除回调
     * ReactNode React元素
     */
    itemRender?: (file: UploadFile, { remove }: { remove: () => void }) => void;
    /**
     * 透传给Progress props
     */
    progressProps?: object;
    children?: ReactNode;
    showDownload?: boolean;
    /**
     * 可选参数，是否本地预览
     */
    useDataURL?: boolean;
    rtl?: boolean;
    isPreview?: boolean;
    fileNameRender?: (file: UploadFile) => void;
    uploader?: {
        removeFile: (file: UploadFile) => void;
        abort: (file: UploadFile) => void;
        replaceWithNewFile: (oldfile: UploadFile, newfile: UploadFile) => void;
        props: {
            accept?: string;
            fileKeyName?: string;
        };
    };
}

export interface Html5Props extends SelecterProps {}

export interface CoreProps extends UploadOptions {}

export interface UploadOptions {
    beforeUpload?: (file: UploadFile, data: unknown) => boolean | object | unknown;
    onProgress?: (e: UploadProgressEvent, file?: UploadFile) => void;
    onSuccess?: (ret: unknown, xhr?: XMLHttpRequest | UploadFile) => void;
    onError?: (err: ProgressEvent | UploadError, param?: unknown, file?: UploadFile) => void;
    data?:
        | { [key: string]: string | Blob }
        | ((file: UploadFile) => { [key: string]: string | Blob });
    name?: string;
    method?: 'post' | 'put' | 'POST' | 'PUT';
    action?: string;
    headers?: { [key: string]: unknown; 'X-Requested-With'?: string | undefined };
    withCredentials?: boolean;
    request?: (option: object) => { abort?: (() => void) | undefined };
    file?: UploadFile;
    filename?: string;
    timeout?: number;
}

export interface UploadCommonProps extends Omit<CommonProps, 'locale'> {
    locale?: Locale['Upload'];
    id?: string;
    style?: CSSProperties;
    className?: string;
}

export enum ErrorCode {
    EXCEED_LIMIT = 'EXCEED_LIMIT',
    BEFOREUPLOAD_REJECT = 'BEFOREUPLOAD_REJECT',
    RESPONSE_FAIL = 'RESPONSE_FAIL',
}

export interface UploadFile extends OriginalFile, File {
    filename?: string;
    lastModifiedDate?: Date;
    originFileObj?: File;
    imgURL?: string;
    downloadURL?: string;
    url?: string;
    state?: string;
    errorMsg?: string;
    alt?: string;
}

export interface ObjectFile extends OriginalFile {
    lastModified?: number;
    lastModifiedDate?: Date;
    size?: number;
    type?: string;
    originFileObj?: UploadFile;
    imgURL?: string;
    downloadURL?: string;
    url?: string;
    errorMsg?: string;
    errorText?: string;
    fileURL?: string;
    tempUrl?: string;
}

export interface OriginalFile {
    uid?: string | number;
    error?: unknown;
    percent?: number;
    state?: string;
    readonly name: string;
}

export interface UploadError extends Error {
    code?: string;
    status?: number;
    method?: string;
    url?: string;
}

export interface UploadProgressEvent extends ProgressEvent {
    percent?: number;
}

export interface NObject {
    [key: string]: string | number | undefined | null | void;
}

export interface IframeUploaderProps {
    name?: string;
    /**
     * 上传的地址
     */
    action?: string;
    /**
     * 接受上传的文件类型 (image/png, image/jpg, .doc, .ppt) 详见 [input accept attribute](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input#attr-accept)
     */
    accept?: string;
    /**
     * 上传额外传参
     */
    data?: object | ((file: unknown) => void);
    disabled?: boolean;
    className?: string;
    style?: CSSProperties;
    /**
     * 是否支持多选文件，`ie10+` 支持。开启后按住 ctrl 可选择多个文件
     */
    multiple?: boolean;
    /**
     * 设置上传的请求头部
     */
    headers?: { [key: string]: unknown; 'X-Requested-With'?: string | undefined };
    /**
     * 是否允许请求携带 cookie
     */
    withCredentials?: boolean;
    /**
     * 可选参数, 详见 [beforeUpload](#beforeUpload)
     */
    beforeUpload?: (file: unknown, options: unknown) => boolean | object | Promise<object>;
    /**
     * 上传中
     */
    onProgress?: () => void;
    /**
     * 可选参数，上传成功回调函数，参数为请求下响应信息以及文件
     */
    onSuccess?: (param: unknown, file: ObjectFile | UploadFile) => void;
    /**
     * 可选参数，上传失败回调函数
     * err
     * params
     * file
     */
    onError?: (err: UploadError, params: unknown, file: ObjectFile) => void;
    onSelect?: (file: IframeFile[]) => void;
    onStart?: (file: UploadFile) => void;
}

export interface RequestOption {
    action?: string;
    name?: string;
    data?: object;
}

/**
 * iframe 组件使用的file类型
 */
export interface IframeFile {
    uid?: string;
    name?: string;
}

export interface TransformProps {
    listType?: ListType;
    defaultFileList?: Array<unknown>;
    fileList?: Array<UploadFile>;
    [key: string]: unknown;
}

export interface TransformNewProps {
    listType?: ListType;
    defaultFileList?: Array<unknown>;
    value?: Array<UploadFile>;
    [key: string]: unknown;
}

export interface ImageError extends SyntheticEvent<HTMLDivElement> {
    onerror?: null | ((this: HTMLDivElement, ev: ImageError) => unknown);
}

export interface UploadResponse {
    success: boolean;
    message?: string;
    downloadURL?: string;
    url?: string;
    imgURL?: string;
}

// export interface FakeXMLHttpRequest extends XMLHttpRequest {
//     onCreate: (xhr: FakeXMLHttpRequest) => void;
//     restore: () => void;
//     respond: (status: number, headers: Record<string, string>, body: unknown) => void;
//     requestHeaders: Record<string, string>;
//     requestBody: unknown;
//     url: string;
// }

export interface OptionType {
    onSuccess: (ret?: unknown) => void;
    onError?: (e?: unknown) => void; // onError 是可选的，因为它是后来添加的
    action: string;
    data: Record<string, unknown>;
    filename: string;
    file: {
        name: string;
    };
    headers: Record<string, string>;
    timeout?: number;
}

export type ListType =
    | 'text'
    | 'text-image'
    | 'image'
    | 'card'
    | 'picture'
    | 'picture-card'
    | 'none';

export type Wrapper = ReactWrapper | ShallowWrapper; // 根据wrapper的实际类型调整

export type UploaderRef = {
    abort: (file: File) => void;
    startUpload: (fileList?: (UploadFile | File | undefined)[]) => void;
    isUploading?: () => boolean;
    [key: string]: unknown;
};

export type BeforeUploadOption = {
    action?: string;
    headers?: object;
    timeout?: number;
    withCredentials?: boolean;
    method?: string;
    data?: object;
};
