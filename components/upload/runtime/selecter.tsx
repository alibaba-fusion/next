import React, { type ChangeEvent, Component, type KeyboardEvent, type DragEvent } from 'react';
import PropTypes from 'prop-types';
import { func } from '../../util';
import { uid } from '../util';
import type { UploadFile, SelecterProps } from '../types';

const { noop } = func;

/**
 * Upload.Selecter
 * [底层能力] 可自定义样式的文件选择器
 */
export default class Selecter extends Component<SelecterProps> {
    static propTypes = {
        id: PropTypes.string,
        style: PropTypes.object,
        className: PropTypes.string,
        disabled: PropTypes.bool,
        multiple: PropTypes.bool,
        webkitdirectory: PropTypes.bool,
        capture: PropTypes.string,
        dragable: PropTypes.bool,
        accept: PropTypes.string,
        onSelect: PropTypes.func,
        onDragOver: PropTypes.func,
        onDragLeave: PropTypes.func,
        onDrop: PropTypes.func,
        children: PropTypes.node,
        name: PropTypes.string,
    };

    static defaultProps = {
        name: 'file',
        multiple: false,
        onSelect: noop,
        onDragOver: noop,
        onDragLeave: noop,
        onDrop: noop,
    };

    fileRef: HTMLInputElement;

    onSelect = (e: ChangeEvent<HTMLInputElement>) => {
        const files = e.target!.files;
        const filesArr: File[] = files!.length ? Array.prototype.slice.call(files) : [files];

        filesArr.forEach((file: UploadFile) => {
            file.uid = uid();
        });

        this.props.onSelect!(filesArr);
    };

    /**
     * 点击上传按钮
     *
     */
    onClick = () => {
        const el = this.fileRef;
        if (!el) {
            return;
        }
        // NOTE: 在 IE 下，el.value = '' 在 el.click() 之后，会触发 input[type=file] 两次 onChange
        el.value = '';
        el.click();
    };

    /**
     * 键盘事件
     *  e
     *
     */
    onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            this.onClick();
        }
    };

    /**
     * 拖拽
     *  e
     *
     */
    onDrop = (e: DragEvent<HTMLInputElement>) => {
        e.preventDefault();

        const files = e.dataTransfer.files;
        const filesArr = Array.prototype.slice.call(files);

        this.props.onDrop!(filesArr);
    };

    onDragOver = (e: DragEvent<HTMLInputElement>) => {
        e.preventDefault();
        this.props.onDragOver!(e);
    };

    saveFileRef = (ref: HTMLInputElement) => {
        this.fileRef = ref;
    };

    render() {
        const {
            accept,
            multiple,
            capture,
            webkitdirectory,
            children,
            id,
            disabled,
            dragable,
            style,
            className,
            name,
        } = this.props;

        let events = {};
        if (!disabled) {
            events = Object.assign(
                {
                    onClick: this.onClick,
                    onKeyDown: this.onKeyDown,
                    tabIndex: '0',
                },
                dragable
                    ? {
                          onDrop: this.onDrop,
                          onDragOver: this.onDragOver,
                          onDragLeave: this.props.onDragLeave,
                      }
                    : {}
            );
        }

        const otherProps: {
            webkitdirectory?: boolean | string;
            capture?: string;
        } = {};
        if (webkitdirectory) {
            otherProps.webkitdirectory = '';
        }
        if (capture) {
            otherProps.capture = capture;
        }

        return (
            <div role="application" style={style} className={className} {...events}>
                <input
                    {...otherProps}
                    type="file"
                    name={name}
                    id={id}
                    ref={this.saveFileRef}
                    style={{ display: 'none' }}
                    accept={accept}
                    aria-hidden
                    multiple={multiple}
                    onChange={this.onSelect}
                    disabled={disabled}
                />
                {children}
            </div>
        );
    }
}
