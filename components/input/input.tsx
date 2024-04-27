import React, {
    isValidElement,
    cloneElement,
    type UIEvent,
    type ReactElement,
    type ReactNode,
    type KeyboardEvent,
    type DOMAttributes,
} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from '../icon';
import { obj, func } from '../util';
import Base from './base';
import Group from './group';
import type { InputProps } from './types';

// preventDefault here can stop onBlur to keep focus state
function preventDefault(e: UIEvent) {
    e.preventDefault();
}

/** Input */
class Input<P extends InputProps = InputProps> extends Base<P> {
    static displayName = 'Input';
    static getDerivedStateFromProps = Base.getDerivedStateFromProps;
    static propTypes = {
        ...Base.propTypes,
        label: PropTypes.node,
        hasClear: PropTypes.bool,
        hasBorder: PropTypes.bool,
        state: PropTypes.oneOf(['error', 'loading', 'success', 'warning']),
        onPressEnter: PropTypes.func,
        htmlType: PropTypes.string,
        htmlSize: PropTypes.string,
        hint: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
        innerBefore: PropTypes.node,
        innerAfter: PropTypes.node,
        addonBefore: PropTypes.node,
        addonAfter: PropTypes.node,
        addonTextBefore: PropTypes.node,
        addonTextAfter: PropTypes.node,
        autoComplete: PropTypes.string,
        autoFocus: PropTypes.bool,
        inputRender: PropTypes.func,
        extra: PropTypes.node,
        innerBeforeClassName: PropTypes.string,
        innerAfterClassName: PropTypes.string,
        isPreview: PropTypes.bool,
        renderPreview: PropTypes.func,
        hoverShowClear: PropTypes.bool,
    };

    static defaultProps: InputProps = {
        ...Base.defaultProps,
        autoComplete: 'off',
        hasBorder: true,
        isPreview: false,
        hoverShowClear: false,
        onPressEnter: func.noop,
        inputRender: el => el,
    };

    constructor(props: P) {
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

    // `Enter` was considered to be two chars in chrome , but one char in ie.
    // so we make all `Enter` to be two chars
    getValueLength(value: unknown) {
        const nv = `${value}`;
        let strLen = this.props.getValueLength!(nv);
        if (typeof strLen !== 'number') {
            strLen = nv.length;
        }

        return strLen;
    }

    renderControl() {
        const { hasClear, readOnly, state, prefix, hint, extra, locale, disabled, hoverShowClear } =
            this.props;

        const lenWrap = this.renderLength();

        let stateWrap = null;
        if (state === 'success') {
            stateWrap = <Icon type="success-filling" className={`${prefix}input-success-icon`} />;
        } else if (state === 'loading') {
            stateWrap = <Icon type="loading" className={`${prefix}input-loading-icon`} />;
        } else if (state === 'warning') {
            stateWrap = <Icon type="warning" className={`${prefix}input-warning-icon`} />;
        }

        let clearWrap = null;
        // showClear 属性应该与 disable 属性为互斥状态
        const showClear = hasClear && !readOnly && !!`${this.state.value}` && !disabled;

        if (hint || showClear) {
            let hintIcon = null;
            if (hint) {
                if (typeof hint === 'string') {
                    hintIcon = <Icon type={hint} className={`${prefix}input-hint`} />;
                } else if (isValidElement(hint)) {
                    hintIcon = cloneElement(hint as ReactElement<{ className: string }>, {
                        className: classNames(hint.props.className, `${prefix}input-hint`),
                    });
                } else {
                    hintIcon = hint;
                }
            } else {
                const cls = classNames({
                    [`${prefix}input-hint`]: true,
                    [`${prefix}input-clear-icon`]: true,
                    [`${prefix}input-hover-show`]: hoverShowClear,
                });
                hintIcon = (
                    <Icon
                        type="delete-filling"
                        role="button"
                        tabIndex={0}
                        className={cls}
                        aria-label={locale!.clear}
                        onClick={this.onClear.bind(this)}
                        onMouseDown={preventDefault}
                        onKeyDown={this.handleKeyDownFromClear}
                    />
                );
            }

            clearWrap = (
                <span className={`${prefix}input-hint-wrap`}>
                    {hasClear && hint ? (
                        <Icon
                            type="delete-filling"
                            role="button"
                            tabIndex={0}
                            className={`${prefix}input-clear ${prefix}input-clear-icon`}
                            aria-label={locale!.clear}
                            onClick={this.onClear.bind(this)}
                            onMouseDown={preventDefault}
                            onKeyDown={this.handleKeyDownFromClear}
                        />
                    ) : null}
                    {hintIcon}
                </span>
            );
        }

        if (state === 'loading') {
            clearWrap = null;
        }

        return clearWrap || lenWrap || stateWrap || extra ? (
            <span onClick={() => this.focus()} className={`${prefix}input-control`}>
                {clearWrap}
                {lenWrap}
                {stateWrap}
                {extra}
            </span>
        ) : null;
    }

    renderLabel() {
        const { label, prefix, id } = this.props;
        return label ? (
            <label className={`${prefix}input-label`} htmlFor={id}>
                {label}
            </label>
        ) : null;
    }

    renderInner(inner: ReactNode, cls: string) {
        return inner ? <span className={cls}>{inner}</span> : null;
    }

    handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.keyCode === 13) {
            this.props.onPressEnter!(e);
        }

        this.onKeyDown(e);
    };

    render() {
        const {
            size,
            htmlType,
            htmlSize,
            autoComplete,
            autoFocus,
            disabled,
            style,
            innerBefore,
            innerAfter,
            innerBeforeClassName,
            innerAfterClassName,
            className,
            hasBorder,
            prefix,
            isPreview,
            renderPreview,
            addonBefore,
            addonAfter,
            addonTextBefore,
            addonTextAfter,
            inputRender,
            rtl,
            composition,
        } = this.props;

        const hasAddon = addonBefore || addonAfter || addonTextBefore || addonTextAfter;
        const cls = classNames(this.getClass(), {
            [`${prefix}${size}`]: true,
            [`${prefix}hidden`]: this.props.htmlType === 'hidden',
            [`${prefix}noborder`]: !hasBorder || this.props.htmlType === 'file',
            [`${prefix}input-group-auto-width`]: hasAddon,
            [`${prefix}disabled`]: disabled,
            [className!]: !!className && !hasAddon,
        });

        const innerCls = `${prefix}input-inner`;
        const innerBeforeCls = classNames({
            [innerCls]: true,
            [`${prefix}before`]: true,
            [innerBeforeClassName!]: innerBeforeClassName,
        });
        const innerAfterCls = classNames({
            [innerCls]: true,
            [`${prefix}after`]: true,
            [`${prefix}input-inner-text`]: typeof innerAfter === 'string',
            [innerAfterClassName!]: innerAfterClassName,
        });
        const previewCls = classNames({
            [`${prefix}form-preview`]: true,
            [className!]: !!className,
        });

        const props = this.getProps();
        // custom data attributes are assigned to the top parent node
        // data-类自定义数据属性分配到顶层 node 节点
        const dataProps = obj.pickAttrsWith(this.props, 'data-') as Record<
            `data-${string}`,
            unknown
        >;
        // Custom props are transparently transmitted to the core input node by default
        // 自定义属性默认透传到核心 node 节点：input
        const others = obj.pickOthers(Object.assign({}, dataProps, Input.propTypes), this.props);

        if (isPreview) {
            const { value } = props;
            const { label } = this.props;
            if (typeof renderPreview === 'function') {
                return (
                    <div {...others} className={previewCls}>
                        {renderPreview(value, this.props)}
                    </div>
                );
            }
            return (
                <div {...others} className={previewCls}>
                    {addonBefore || addonTextBefore}
                    {label}
                    {innerBefore}
                    {value}
                    {innerAfter}
                    {addonAfter || addonTextAfter}
                </div>
            );
        }

        const compositionProps: DOMAttributes<HTMLInputElement> = {};
        if (composition) {
            compositionProps.onCompositionStart = this.handleCompositionStart;
            compositionProps.onCompositionEnd = this.handleCompositionEnd;
        }

        const inputEl = (
            <input
                {...others}
                {...props}
                {...compositionProps}
                height="100%"
                type={htmlType}
                // @ts-expect-error size 应为 number
                size={htmlSize}
                autoFocus={autoFocus}
                autoComplete={autoComplete}
                onKeyDown={this.handleKeyDown}
                ref={this.saveRef}
            />
        );

        const inputWrap = (
            <span
                {...dataProps}
                dir={rtl ? 'rtl' : undefined}
                className={cls}
                style={hasAddon ? undefined : style}
            >
                {this.renderLabel()}
                {this.renderInner(innerBefore, innerBeforeCls)}
                {inputRender!(inputEl)}
                {this.renderInner(innerAfter, innerAfterCls)}
                {this.renderControl()}
            </span>
        );

        const groupCls = classNames({
            [`${prefix}input-group-text`]: true,
            [`${prefix}${size}`]: !!size,
            [`${prefix}disabled`]: disabled,
        });

        const addonBeforeCls = classNames({
            [groupCls]: addonTextBefore,
        });
        const addonAfterCls = classNames({
            [groupCls]: addonTextAfter,
        });

        if (hasAddon) {
            return (
                <Group
                    {...dataProps}
                    prefix={prefix}
                    className={className}
                    style={style}
                    disabled={disabled}
                    addonBefore={addonBefore || addonTextBefore}
                    addonBeforeClassName={addonBeforeCls}
                    addonAfter={addonAfter || addonTextAfter}
                    addonAfterClassName={addonAfterCls}
                >
                    {inputWrap}
                </Group>
            );
        }

        return inputWrap;
    }
}

export default Input;
