import React, {
    CSSProperties,
    type ChangeEvent,
    type CompositionEvent,
    type FocusEvent,
    type KeyboardEvent,
} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { polyfill } from 'react-lifecycles-compat';
import ConfigProvider from '../config-provider';
import { func } from '../util';
import zhCN from '../locale/zh-cn';
import type { BaseProps, BaseState, GeneralHTMLInputElement } from './types';

class Base<
    P extends BaseProps = BaseProps,
    S extends BaseState = BaseState,
> extends React.Component<P, S> {
    static propTypes = {
        ...ConfigProvider.propTypes,
        /**
         * 当前值
         */
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        /**
         * 初始化值
         */
        defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        /**
         * 发生改变的时候触发的回调
         * @param value - 数据
         * @param e - DOM 事件对象
         */
        onChange: PropTypes.func,
        /**
         * 键盘按下的时候触发的回调
         * @param e - DOM 事件对象
         * @param opts - 可扩展的附加信息：<br> - opts.overMaxLength: \{Boolean\} 已超出最大长度<br> - opts.beTrimed: \{Boolean\} 输入的空格被清理
         */
        onKeyDown: PropTypes.func,
        /**
         * 禁用状态
         */
        disabled: PropTypes.bool,
        /**
         * 最大长度
         */
        maxLength: PropTypes.number,
        /**
         * 是否展现最大长度样式（旧版本为 hasLimitHint，目前仍兼容旧用法，将在 2.x 直接废弃）
         */
        showLimitHint: PropTypes.bool,
        /**
         * 当设置了 maxLength 时，是否截断超出字符串
         */
        cutString: PropTypes.bool,
        /**
         * 只读
         */
        readOnly: PropTypes.bool,
        /**
         * onChange 返回会自动去除头尾空字符
         */
        trim: PropTypes.bool,
        /**
         * 输入提示
         */
        placeholder: PropTypes.string,
        /**
         * 获取焦点时候触发的回调
         * @param e - DOM 事件对象
         */
        onFocus: PropTypes.func,
        /**
         * 失去焦点时候触发的回调
         * @param e - DOM 事件对象
         */
        onBlur: PropTypes.func,
        /**
         * 自定义字符串计算长度方式
         * @param value - 数据
         * @returns 自定义长度
         */
        getValueLength: PropTypes.func,
        inputStyle: PropTypes.object,
        /**
         * 自定义 class
         */
        className: PropTypes.string,
        /**
         * 自定义内联样式
         */
        style: PropTypes.object,
        /**
         * 原生 type
         */
        htmlType: PropTypes.string,
        /**
         * name
         */
        name: PropTypes.string,
        rtl: PropTypes.bool,
        state: PropTypes.oneOf(['error', 'loading', 'success', 'warning']),
        locale: PropTypes.object,
        /**
         * 是否为预览态
         */
        isPreview: PropTypes.bool,
        /**
         * 预览态模式下渲染的内容
         * @param value - 评分值
         */
        renderPreview: PropTypes.func,
        /**
         * 尺寸
         */
        size: PropTypes.oneOf(['small', 'medium', 'large']),
        /**
         * 开启后会过滤输入法中间字母状态，文字输入完成后才会触发 onChange
         * @version 1.23
         */
        composition: PropTypes.bool,
        onCompositionStart: PropTypes.func,
        onCompositionEnd: PropTypes.func,
    };

    static defaultProps: Omit<BaseProps, 'state'> = {
        disabled: false,
        prefix: 'next-',
        size: 'medium' as const,
        maxLength: undefined,
        showLimitHint: false,
        cutString: true,
        readOnly: false,
        isPreview: false,
        trim: false,
        composition: false,
        onFocus: func.noop,
        onBlur: func.noop,
        onChange: func.noop,
        onKeyDown: func.noop,
        getValueLength: func.noop,
        onCompositionStart: func.noop,
        onCompositionEnd: func.noop,
        locale: zhCN.Input,
    };
    inputRef: HTMLInputElement | HTMLTextAreaElement;

    static getDerivedStateFromProps(nextProps: BaseProps, prevState: BaseState) {
        if ('value' in nextProps && nextProps.value !== prevState.value && !prevState.composition) {
            const value = nextProps.value;
            return {
                value: value === undefined || value === null ? '' : value,
            };
        }

        return null;
    }

    ieHack(value: number | string): number | string {
        return value;
    }

    handleCompositionStart = (e: CompositionEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        this.setState({
            composition: true,
        });
        this.props.onCompositionStart!(e);
    };

    handleCompositionEnd = (e: CompositionEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        this.setState({
            composition: false,
        });
        this.props.onCompositionEnd!(e);

        const value = (e.target as HTMLInputElement).value;
        this.props.onChange!(value, e);
    };

    onChange(e: ChangeEvent<HTMLInputElement>) {
        if ('stopPropagation' in e) {
            e.stopPropagation();
        } else if ('cancelBubble' in e) {
            // @ts-expect-error 兼容 IE
            e.cancelBubble();
        }

        let value: string | number = e.target.value;

        if (this.props.trim) {
            value = value.trim();
        }

        value = this.ieHack(value);

        // not controlled
        if (!('value' in this.props) || this.state.composition) {
            this.setState({
                value,
            });
        }

        if (this.state.composition) {
            return;
        }

        // Number('') = 0
        if (value && this.props.htmlType === 'number') {
            value = Number(value);
        }

        this.props.onChange!(value, e);
    }

    /**
     * abstract
     */
    getValueLength(...rest: unknown[]) {
        return 0;
    }

    onKeyDown(e: KeyboardEvent<HTMLInputElement>) {
        const value = (e.target as HTMLInputElement).value;
        const { maxLength } = this.props;
        const len = maxLength! > 0 && value ? this.getValueLength(value) : 0;
        const opts: { beTrimed?: boolean; overMaxLength?: boolean } = {};

        // has enable trim and has input whitespace
        if (this.props.trim && e.keyCode === 32) {
            opts.beTrimed = true;
        }

        // has defined maxLength and has over max length and has not input backspace and delete
        if (
            maxLength! > 0 &&
            (len > maxLength! + 1 ||
                ((len === maxLength || len === maxLength! + 1) &&
                    e.keyCode !== 8 &&
                    e.keyCode !== 46))
        ) {
            opts.overMaxLength = true;
        }

        this.props.onKeyDown!(e, opts);
    }

    onFocus(e: FocusEvent<HTMLInputElement>) {
        this.setState({
            focus: true,
        });
        this.props.onFocus!(e);
    }

    onBlur(e: FocusEvent<HTMLInputElement>) {
        this.setState({
            focus: false,
        });
        this.props.onBlur!(e);
    }

    handleKeyDownFromClear = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.keyCode === 13) {
            this.onClear(e);
        }
    };

    onClear(e: KeyboardEvent<HTMLInputElement>) {
        if (this.props.disabled) {
            return;
        }
        // 非受控模式清空内部数据
        if (!('value' in this.props)) {
            this.setState({
                value: '',
            });
        }
        this.props.onChange!('', e, 'clear');
        this.focus();
    }
    renderLength() {
        const { maxLength, showLimitHint, prefix, rtl } = this.props;
        const len = maxLength! > 0 && this.state.value ? this.getValueLength(this.state.value) : 0;

        const classesLenWrap = classNames({
            [`${prefix}input-len`]: true,
            [`${prefix}error`]: len > maxLength!,
        });

        const content = rtl ? `${maxLength}/${len}` : `${len}/${maxLength}`;

        return maxLength && showLimitHint ? (
            <span className={classesLenWrap}>{content}</span>
        ) : null;
    }

    getClass() {
        const { disabled, state, prefix } = this.props;

        return classNames({
            [`${prefix}input`]: true,
            [`${prefix}disabled`]: !!disabled,
            [`${prefix}error`]: state === 'error',
            [`${prefix}warning`]: state === 'warning',
            [`${prefix}focus`]: this.state.focus,
        });
    }

    getProps() {
        const {
            placeholder,
            inputStyle,
            disabled,
            readOnly,
            cutString,
            maxLength,
            name,
            onCompositionStart,
            onCompositionEnd,
        } = this.props;
        const props: {
            style?: CSSProperties;
            onChange?: (e: ChangeEvent<GeneralHTMLInputElement>) => void;
            onBlur?: (e: FocusEvent<GeneralHTMLInputElement>) => void;
            onFocus?: (e: FocusEvent<GeneralHTMLInputElement>) => void;
            ['aria-disabled']?: boolean;
        } & Pick<
            BaseProps,
            | 'placeholder'
            | 'disabled'
            | 'readOnly'
            | 'name'
            | 'maxLength'
            | 'value'
            | 'onCompositionStart'
            | 'onCompositionEnd'
        > = {
            style: inputStyle,
            placeholder,
            disabled,
            readOnly,
            name,
            maxLength: cutString ? maxLength : undefined,
            value: this.state.value,
            onChange: this.onChange.bind(this),
            onBlur: this.onBlur.bind(this),
            onFocus: this.onFocus.bind(this),
            onCompositionStart,
            onCompositionEnd,
        };

        // fix accessibility：auto process status of aria disabled
        if (disabled) {
            props['aria-disabled'] = disabled;
        }

        return props;
    }

    saveRef = (input: HTMLInputElement) => {
        this.inputRef = input;
    };

    getInputNode() {
        return this.inputRef;
    }

    focus(start?: unknown, end?: unknown, preventScroll = false) {
        this.inputRef.focus({ preventScroll });
        if (typeof start === 'number') {
            this.inputRef.selectionStart = start;
        }
        if (typeof end === 'number') {
            this.inputRef.selectionEnd = end;
        }
    }
}

export default polyfill(Base);
