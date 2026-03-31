import React from 'react';
import PropTypes from 'prop-types';
import type { IframeUploaderProps, RequestOption, UploadFile } from '../types';
declare class IframeUploader extends React.Component<IframeUploaderProps> {
    static propTypes: {
        style: PropTypes.Requireable<object>;
        action: PropTypes.Validator<string>;
        name: PropTypes.Validator<string>;
        data: PropTypes.Requireable<object>;
        disabled: PropTypes.Requireable<boolean>;
        className: PropTypes.Requireable<string>;
        children: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        headers: PropTypes.Requireable<object>;
        autoUpload: PropTypes.Requireable<boolean>;
        onSelect: PropTypes.Requireable<(...args: any[]) => any>;
        beforeUpload: PropTypes.Requireable<(...args: any[]) => any>;
        onStart: PropTypes.Requireable<(...args: any[]) => any>;
        onSuccess: PropTypes.Requireable<(...args: any[]) => any>;
        onError: PropTypes.Requireable<(...args: any[]) => any>;
        accept: PropTypes.Requireable<string>;
    };
    static defaultProps: {
        name: string;
        onSelect: () => void;
        beforeUpload: () => void;
        onStart: () => void;
        onSuccess: () => void;
        onError: () => void;
        onAbort: () => void;
    };
    domain: string;
    iFrameEl: HTMLIFrameElement;
    inputEl: HTMLInputElement;
    formEl: HTMLFormElement;
    dataEl: HTMLSpanElement;
    file: UploadFile | object;
    uid: string;
    constructor(props: IframeUploaderProps);
    state: {
        uploading: boolean;
    };
    componentDidMount(): void;
    componentDidUpdate(): void;
    onLoad: () => void;
    onSelect: (e: React.ChangeEvent<HTMLInputElement>) => void;
    startUpload(): void;
    upload(file: UploadFile): void;
    endUpload(): void;
    updateInputWH(): void;
    abort(file: UploadFile): void;
    post(file: UploadFile, requestOption?: RequestOption): void;
    saveIFrameRef: (ref: HTMLIFrameElement) => void;
    saveFormRef: (ref: HTMLFormElement) => void;
    saveDataRef: (ref: HTMLSpanElement) => void;
    saveInputRef: (ref: HTMLInputElement) => void;
    render(): React.JSX.Element;
}
export default IframeUploader;
