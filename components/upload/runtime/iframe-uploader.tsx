/* istanbul ignore file */
import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { log, func, obj } from '../../util';
import { uid } from '../util';
import type { IframeUploaderProps, ObjectFile, RequestOption, UploadFile } from '../types';

const INPUT_STYLE: React.CSSProperties = {
    position: 'absolute',
    top: 0,
    right: 0,
    fontSize: 9999,
    zIndex: 9999,
    opacity: 0,
    outline: 'none',
    cursor: 'pointer',
};

class IframeUploader extends React.Component<IframeUploaderProps> {
    static propTypes = {
        style: PropTypes.object,
        action: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        data: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
        disabled: PropTypes.bool,
        className: PropTypes.string,
        children: PropTypes.node,
        headers: PropTypes.object,
        autoUpload: PropTypes.bool,
        onSelect: PropTypes.func,
        beforeUpload: PropTypes.func,
        onStart: PropTypes.func,
        onSuccess: PropTypes.func,
        onError: PropTypes.func,
        accept: PropTypes.string,
    };

    static defaultProps = {
        name: 'file',
        onSelect: func.noop,
        beforeUpload: func.noop,
        onStart: func.noop,
        onSuccess: func.noop,
        onError: func.noop,
        onAbort: func.noop,
    };
    domain: string;
    iFrameEl: HTMLIFrameElement;
    inputEl: HTMLInputElement;
    formEl: HTMLFormElement;
    dataEl: HTMLSpanElement;
    file: UploadFile | object = {};
    uid = '';

    constructor(props: IframeUploaderProps) {
        super(props);
        this.domain = typeof document !== 'undefined' && document.domain ? document.domain : '';
        this.uid = uid();
    }

    state = {
        uploading: false,
    };

    componentDidMount() {
        this.updateInputWH();
    }

    componentDidUpdate() {
        this.updateInputWH();
    }

    onLoad = () => {
        if (!this.state.uploading) {
            return;
        }
        const { props, file } = this;
        let response;
        try {
            const doc = this.iFrameEl.contentDocument;
            const script = doc!.getElementsByTagName('script')[0];
            if (script && script.parentNode === doc!.body) {
                doc!.body.removeChild(script);
            }
            response = doc!.body.innerHTML;
            props.onSuccess!(response, file as ObjectFile);
        } catch (err) {
            log.warning(
                'cross domain error for Upload. Maybe server should return document.domain script.'
            );
            response = 'cross-domain';
            props.onError!(err, null, file as ObjectFile);
        }
        this.endUpload();
    };

    onSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.file = {
            uid: uid(),
            name: (e.target as HTMLInputElement)!.value,
        };
        this.props.onSelect!([this.file]);
    };

    startUpload() {
        this.upload(this.file as UploadFile);
    }

    upload(file: UploadFile) {
        if (!this.state.uploading) {
            // eslint-disable-next-line
            this.state.uploading = true;
            this.setState({ uploading: true });
        }

        const { beforeUpload, action, name, data } = this.props;
        if (!beforeUpload) {
            return this.post(file);
        }
        const requestData = {
            action,
            name,
            data,
        };
        const before = beforeUpload(file, requestData);
        if (before && (before as Promise<object>).then) {
            (before as Promise<object>).then(
                (data: object) => {
                    this.post(file, data);
                },
                () => {
                    this.endUpload();
                }
            );
        } else if (before !== false) {
            this.post(file, obj.isPlainObject(before) ? before : undefined);
        } else {
            this.endUpload();
        }
    }

    endUpload() {
        this.file = {};
        if (this.state.uploading) {
            // eslint-disable-next-line
            this.state.uploading = false;
            this.setState({ uploading: false });
        }
    }

    updateInputWH() {
        const rootNode = ReactDOM.findDOMNode(this) as HTMLElement;
        const inputNode = this.inputEl;
        inputNode.style.height = `${rootNode.offsetHeight}px`;
        inputNode.style.width = `${rootNode.offsetWidth}px`;
    }

    abort(file: UploadFile) {
        if (file) {
            let uid: UploadFile | string | number = file;
            if (file && file.uid) {
                uid = file.uid;
            }
            if (uid === (this.file as UploadFile).uid) {
                this.endUpload();
            }
        } else {
            this.endUpload();
        }
    }

    post(file: UploadFile, requestOption: RequestOption = {}) {
        const formNode = this.formEl;
        const dataSpan = this.dataEl;
        const fileInput = this.inputEl;

        let propsData = this.props.data;
        if (typeof propsData === 'function') {
            propsData = propsData(file);
        }

        const { action, name, data } = requestOption;
        if (name) {
            fileInput.setAttribute('name', name);
        }

        if (action) {
            formNode.setAttribute('action', action);
        }

        if (data) {
            propsData = data;
        }

        const inputs = document.createDocumentFragment();
        for (const key in propsData) {
            if (data!.hasOwnProperty(key)) {
                const input = document.createElement('input');
                input.setAttribute('name', key);
                input.value = (propsData as Record<string, string>)[key];
                inputs.appendChild(input);
            }
        }
        dataSpan.appendChild(inputs);
        formNode.submit();
        dataSpan.innerHTML = '';
        this.props.onStart!(file);
    }

    saveIFrameRef = (ref: HTMLIFrameElement) => {
        this.iFrameEl = ref;
    };

    saveFormRef = (ref: HTMLFormElement) => {
        this.formEl = ref;
    };

    saveDataRef = (ref: HTMLSpanElement) => {
        this.dataEl = ref;
    };

    saveInputRef = (ref: HTMLInputElement) => {
        this.inputEl = ref;
    };

    render() {
        const { disabled, className, children, accept, name, style } = this.props;
        const { uid } = this;
        const iframeName = `${name}-${uid}-iframe`;

        return (
            <span
                className={className}
                style={{
                    position: 'relative',
                    zIndex: 0,
                    display: 'inline-block',
                    ...style,
                }}
            >
                {!disabled ? (
                    <iframe
                        ref={this.saveIFrameRef}
                        name={iframeName}
                        onLoad={this.onLoad}
                        style={{ display: 'none' }}
                    />
                ) : null}
                <form
                    ref={this.saveFormRef}
                    method="post"
                    action={this.props.action}
                    encType="multipart/form-data"
                    target={iframeName}
                >
                    <input name="_documentDomain" value={this.domain} type="hidden" />
                    <span ref={this.saveDataRef} />
                    <input
                        ref={this.saveInputRef}
                        type="file"
                        accept={accept}
                        name={name}
                        onChange={this.onSelect}
                        style={INPUT_STYLE}
                    />
                </form>
                {children}
            </span>
        );
    }
}

export default IframeUploader;
