import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { obj, env } from '../util';
import Base from './base';

function onNextFrame(cb) {
    if (window.requestAnimationFrame) {
        return window.requestAnimationFrame(cb);
    }
    return window.setTimeout(cb, 1);
}

function clearNextFrameAction(nextFrameId) {
    if (window.cancelAnimationFrame) {
        window.cancelAnimationFrame(nextFrameId);
    } else {
        window.clearTimeout(nextFrameId);
    }
}

const hiddenStyle = {
    visibility: 'hidden',
    position: 'absolute',
    zIndex: '-1000',
    top: '-1000px',
    overflowY: 'hidden',
    left: 0,
    right: 0,
};

/**
 * Input.TextArea
 * @order 2
 */
export default class TextArea extends Base {
    static propTypes = {
        ...Base.propTypes,
        /**
         * 状态
         * @enumdesc 错误
         */
        state: PropTypes.oneOf(['error']),
        /**
         * 自动高度 true / {minRows: 2, maxRows: 4}
         */
        autoHeight: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
        /**
         * 多行文本框高度 <br />(不要直接用height设置多行文本框的高度, ie9 10会有兼容性问题)
         */
        rows: PropTypes.number,
    };

    static defaultProps = {
        ...Base.defaultProps,
        rows: 4,
        autoHeight: false,
    };

    constructor(props) {
        super(props);

        let value;
        if ('value' in props) {
            value = props.value;
        } else {
            value = props.defaultValue;
        }

        this.state = {
            value: typeof value === 'undefined' ? '' : value,
        };
    }

    componentDidMount() {
        const autoHeight = this.props.autoHeight;
        if (autoHeight) {
            if (typeof autoHeight === 'object') {
                /* eslint-disable react/no-did-mount-set-state */
                this.setState(
                    this._getMinMaxHeight(autoHeight, this.state.value)
                );
            } else {
                this.setState({
                    height: this._getHeight(this.state.value),
                    overflowY: 'hidden',
                });
            }
        }
    }

    componentWillReceiveProps(nextProps) {
        super.componentWillReceiveProps(nextProps);

        if (this.props.autoHeight && this.props.value !== nextProps.value) {
            this._resizeTextArea(nextProps.value);
        }
    }

    _getMinMaxHeight({ minRows, maxRows }, value) {
        const node = ReactDOM.findDOMNode(this.helpRef);
        node.setAttribute('rows', minRows);
        const minHeight = node.clientHeight;

        node.setAttribute('rows', maxRows);
        const maxHeight = node.clientHeight;

        node.setAttribute('rows', '1');
        const height = this._getHeight(value);

        return {
            minHeight,
            maxHeight,
            height,
            overflowY: height <= maxHeight ? 'hidden' : undefined,
        };
    }

    _getHeight(value) {
        const node = ReactDOM.findDOMNode(this.helpRef);
        node.value = value;

        return node.scrollHeight;
    }

    _resizeTextArea = value => {
        if (this.nextFrameActionId) {
            clearNextFrameAction(this.nextFrameActionId);
        }
        this.nextFrameActionId = onNextFrame(() => {
            const height = this._getHeight(value);
            const maxHeight = this.state.maxHeight
                ? this.state.maxHeight
                : Infinity;

            this.setState({
                height: this._getHeight(value),
                overflowY: height <= maxHeight ? 'hidden' : undefined,
            });
        });
    };

    ieHack(value) {
        // Fix: textarea dit not support maxLength in ie9
        /* istanbul ignore if */
        if (env.ieVersion && this.props.maxLength && this.props.multiple) {
            const maxLength = parseInt(this.props.maxLength);
            const len = this.getValueLength(value, true);
            if (len > maxLength && this.props.cutString) {
                value = value.replace(/\n/g, '\n\n');
                value = value.substr(0, maxLength);
                value = value.replace(/\n\n/g, '\n');
            }
        }

        this.props.autoHeight && this._resizeTextArea(value);

        return value;
    }

    // `Enter` was considered to be two chars in chrome , but one char in ie.
    // so we make all `Enter` to be two chars
    getValueLength(value) {
        const nv = `${value}`;
        let strLen = this.props.getValueLength(nv);
        if (typeof strLen !== 'number') {
            strLen = nv.length;
        }
        /* istanbul ignore if */
        if (env.ieVersion) {
            return strLen + nv.split('\n').length - 1;
        }
        return strLen;
    }

    saveTextAreaRef(textArea) {
        this.inputRef = textArea;
    }

    saveHelpRef(ref) {
        this.helpRef = ref;
    }

    render() {
        const { rows, style, className, autoHeight, prefix, rtl } = this.props;

        const cls = classNames(this.getClass(), {
            [`${prefix}input-textarea`]: true,
            [className]: !!className,
        });

        const props = this.getProps();
        // custom data attributes are assigned to the top parent node
        // data-类自定义数据属性分配到顶层node节点
        const dataProps = obj.pickAttrsWith(this.props, 'data-');
        // Custom props are transparently transmitted to the core input node by default
        // 自定义属性默认透传到核心node节点：input
        const others = obj.pickOthers(
            Object.assign({}, dataProps, TextArea.propTypes),
            this.props
        );

        const textareStyle = {
            ...props.style,
            height: this.state.height,
            minHeight: this.state.minHeight,
            maxHeight: this.state.maxHeight,
            overflowY: this.state.overflowY,
        };

        const wrapStyle = autoHeight
            ? {
                  ...style,
                  position: 'relative',
              }
            : style;

        return (
            <span
                className={cls}
                style={wrapStyle}
                dir={rtl ? 'rtl' : undefined}
                {...dataProps}
            >
                <textarea
                    {...others}
                    {...props}
                    data-real
                    rows={rows}
                    style={textareStyle}
                    ref={this.saveRef.bind(this)}
                    onKeyDown={this.onKeyDown.bind(this)}
                />
                {autoHeight ? (
                    <textarea
                        data-fake
                        ref={this.saveHelpRef.bind(this)}
                        style={{ ...props.style, ...hiddenStyle }}
                        rows="1"
                    />
                ) : null}
                {this.renderControl()}
            </span>
        );
    }
}
