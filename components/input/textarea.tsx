import React, { type CSSProperties, type DOMAttributes } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import zhCN from '../locale/zh-cn';
import { obj, env } from '../util';
import Base from './base';
import type { TextAreaProps } from './types';

function onNextFrame(cb: () => void) {
    if (window.requestAnimationFrame) {
        return window.requestAnimationFrame(cb);
    }
    return window.setTimeout(cb, 1);
}

function clearNextFrameAction(nextFrameId: number) {
    if (window.cancelAnimationFrame) {
        window.cancelAnimationFrame(nextFrameId);
    } else {
        window.clearTimeout(nextFrameId);
    }
}

// safari in mac
const isMacSafari =
    typeof navigator !== 'undefined' && navigator && navigator.userAgent
        ? navigator.userAgent.match(/^((?!chrome|android|windows).)*safari/i)
        : false;

const hiddenStyle: CSSProperties = {
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
export default class TextArea extends Base<TextAreaProps> {
    static displayName = 'TextArea';
    static getDerivedStateFromProps = Base.getDerivedStateFromProps;
    static propTypes = {
        ...Base.propTypes,
        hasBorder: PropTypes.bool,
        state: PropTypes.oneOf(['error', 'warning']),
        autoHeight: PropTypes.oneOfType([PropTypes.bool, PropTypes.object]),
        rows: PropTypes.number,
        isPreview: PropTypes.bool,
        renderPreview: PropTypes.func,
        locale: PropTypes.object,
    };

    static defaultProps: TextAreaProps = {
        ...Base.defaultProps,
        hasBorder: true,
        isPreview: false,
        rows: 4,
        autoHeight: false,
        locale: zhCN.TextArea,
    };
    helpRef: HTMLTextAreaElement;
    nextFrameActionId: number;

    constructor(props: TextAreaProps) {
        super(props);

        let value;
        if ('value' in props) {
            value = props.value;
        } else {
            value = props.defaultValue;
        }

        this.state = {
            value: typeof value === 'undefined' || value === null ? '' : value,
        };
    }

    componentDidMount() {
        const autoHeight = this.props.autoHeight;
        if (autoHeight) {
            if (typeof autoHeight === 'object') {
                this.setState(this._getMinMaxHeight(autoHeight, this.state.value));
            } else {
                this.setState({
                    height: this._getHeight(this.state.value as string),
                    overflowY: 'hidden',
                });
            }
        }
    }

    componentDidUpdate(prevProps: TextAreaProps) {
        if (
            this.props.autoHeight &&
            (this.props.value !== prevProps.value || this.props.isPreview !== prevProps.isPreview)
        ) {
            this._resizeTextArea(this.props.value!);
        }
    }

    _getMinMaxHeight(
        { minRows, maxRows }: { minRows?: string | number; maxRows?: string | number },
        value?: string | number | null
    ) {
        const node = ReactDOM.findDOMNode(this.helpRef) as HTMLTextAreaElement;
        if (!node) {
            return {};
        }
        // @ts-expect-error minRows 应转为 string
        node.setAttribute('rows', minRows);
        const minHeight = node.clientHeight;

        // @ts-expect-error maxRows 应转为 string
        node.setAttribute('rows', maxRows);
        const maxHeight = node.clientHeight;

        node.setAttribute('rows', '1');
        // @ts-expect-error value 应转为 string
        const height = this._getHeight(value);

        return {
            minHeight,
            maxHeight,
            height,
            overflowY: height <= maxHeight ? ('hidden' as const) : undefined,
        };
    }

    _getHeight(value: string | number) {
        const node = ReactDOM.findDOMNode(this.helpRef) as HTMLTextAreaElement;
        if (!node) {
            return 0;
        }
        // @ts-expect-error value 应转为 string
        node.value = value;

        return node.scrollHeight;
    }

    _resizeTextArea = (value: string | number) => {
        if (this.nextFrameActionId) {
            clearNextFrameAction(this.nextFrameActionId);
        }
        this.nextFrameActionId = onNextFrame(() => {
            const height = this._getHeight(value);
            const maxHeight = this.state.maxHeight ? this.state.maxHeight : Infinity;

            this.setState({
                height: this._getHeight(value),
                overflowY: height <= maxHeight ? 'hidden' : undefined,
            });
        });
    };

    ieHack(value: string | number) {
        // Fix: textarea dit not support maxLength in ie9
        if (env.ieVersion === 9 && this.props.maxLength) {
            const maxLength = parseInt(this.props.maxLength as unknown as string);
            // @ts-expect-error value 应转为 string
            let newValue: string = value;
            const len = this.getValueLength(newValue);
            if (len > maxLength && this.props.cutString) {
                newValue = newValue.replace(/\n/g, '\n\n');
                newValue = newValue.substr(0, maxLength);
                newValue = newValue.replace(/\n\n/g, '\n');
            }
        }

        this.props.autoHeight && this._resizeTextArea(value);

        return value;
    }

    /**
     * value.length !== maxLength  in ie/safari(mac) while value has `Enter`
     * about maxLength compute: `Enter` was considered to be one char(\\n) in chrome , but two chars(\\r\\n) in ie/safari(mac).
     * so while value has `Enter`, we should let display length + 1
     */
    getValueLength(value: string) {
        const { maxLength, cutString } = this.props;

        const nv = `${value}`;
        let strLen = this.props.getValueLength!(nv);
        if (typeof strLen !== 'number') {
            strLen = nv.length;
        }

        /* istanbul ignore if */
        if (env.ieVersion || isMacSafari) {
            strLen = strLen + nv.split('\n').length - 1;
            if (strLen > maxLength! && cutString) {
                strLen = maxLength as number;
            }
        }

        return strLen;
    }

    saveTextAreaRef(textArea: HTMLTextAreaElement) {
        this.inputRef = textArea;
    }

    saveHelpRef(ref: HTMLTextAreaElement) {
        this.helpRef = ref;
    }

    renderClear() {
        const { hasClear, readOnly, state, prefix, disabled, locale } = this.props;
        let clearWrap = null;
        // showClear 属性应该与 disable 属性为互斥状态
        const showClear = hasClear && !readOnly && !!`${this.state.value}` && !disabled;
        const cls = classNames({
            [`${prefix}input-textarea-clear`]: true,
        });
        clearWrap = showClear ? (
            <span
                className={cls}
                onClick={this.onClear.bind(this)}
                onKeyDown={this.handleKeyDownFromClear}
            >
                {' '}
                {locale!.clear}
            </span>
        ) : null;
        if (state === 'loading') {
            clearWrap = null;
        }
        return clearWrap;
    }

    renderControl() {
        const { prefix } = this.props;
        const lenWrap = this.renderLength();
        const clearText = this.renderClear();
        const isShowLine = Boolean(lenWrap && clearText);

        const cls = classNames(`${prefix}input-control`, `${prefix}input-textarea-control`);

        return lenWrap || clearText ? (
            <span onClick={() => this.focus()} className={cls}>
                {lenWrap}
                {isShowLine && <span className={`${prefix}input-textarea-control-line`}></span>}
                {clearText}
            </span>
        ) : null;
    }
    render() {
        const {
            rows,
            style,
            className,
            autoHeight,
            isPreview,
            renderPreview,
            prefix,
            rtl,
            hasBorder,
            size,
            composition,
        } = this.props;

        const cls = classNames(this.getClass(), {
            [`${prefix}${size}`]: size === 'large' || size === 'small',
            [`${prefix}input-textarea`]: true,
            [`${prefix}noborder`]: !hasBorder,
            [className!]: !!className,
        });

        // FIXME textarea 里还可以是 null，导致这里需要对类型做特殊处理，实际上 null 并不能传给原生的 textarea
        const props = this.getProps() as Omit<ReturnType<typeof this.getProps>, 'value'> & {
            value: string | number;
        };
        // custom data attributes are assigned to the top parent node
        // data-类自定义数据属性分配到顶层 node 节点
        const dataProps = obj.pickAttrsWith(this.props, 'data-');
        // Custom props are transparently transmitted to the core input node by default
        // 自定义属性默认透传到核心 node 节点：input
        const others = obj.pickOthers(Object.assign({}, dataProps, TextArea.propTypes), this.props);

        const textareStyle: CSSProperties = {
            ...props.style,
            height: this.state.height,
            minHeight: this.state.minHeight,
            maxHeight: this.state.maxHeight,
            overflowY: this.state.overflowY,
        };

        const previewCls = classNames({
            [`${prefix}input-textarea`]: true,
            [`${prefix}form-preview`]: true,
            [className!]: !!className,
        });

        const wrapStyle: CSSProperties | undefined = autoHeight
            ? { ...style, position: 'relative' }
            : style;

        if (isPreview) {
            const { value } = props;
            if ('renderPreview' in this.props) {
                return (
                    <div {...others} className={previewCls}>
                        {renderPreview!(value, this.props)}
                    </div>
                );
            }
            return (
                <div {...others} className={previewCls}>
                    {/* @ts-expect-error value 应转为 string */}
                    {value.split('\n').map((data, i) => (
                        <p key={`p-${i}`}>{data}</p>
                    ))}
                </div>
            );
        }

        const compositionProps: DOMAttributes<HTMLTextAreaElement> = {};
        if (composition) {
            compositionProps.onCompositionStart = this.handleCompositionStart;
            compositionProps.onCompositionEnd = this.handleCompositionEnd;
        }

        return (
            <span className={cls} style={wrapStyle} dir={rtl ? 'rtl' : undefined} {...dataProps}>
                <textarea
                    {...others}
                    {...props}
                    {...compositionProps}
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
                        rows={1}
                    />
                ) : null}
                {this.renderControl()}
            </span>
        );
    }
}
