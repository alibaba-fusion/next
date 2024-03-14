import * as React from 'react';
import * as PropTypes from 'prop-types';
import classnames from 'classnames';
import { polyfill } from 'react-lifecycles-compat';
import UIState, { type UIStateState } from '../mixin-ui-state';
import ConfigProvider from '../config-provider';
import Icon from '../icon';
import withCheckboxContext, { type CheckboxContext } from './with-context';
import { obj, func } from '../util';
import type { CheckboxProps } from './types';

const noop = func.noop;
function isChecked(
    selectedValue: CheckboxContext['selectedValue'],
    value: CheckboxProps['value']
): boolean {
    return selectedValue.indexOf(value) > -1;
}

interface CheckboxState extends UIStateState {
    value?: CheckboxProps['value'];
    checked?: boolean;
    indeterminate?: boolean;
}

export interface PrivateCheckboxProps extends CheckboxProps {
    context: CheckboxContext;
}

/**
 * Checkbox
 * @order 1
 */
class Checkbox extends UIState<PrivateCheckboxProps, CheckboxState> {
    static displayName = 'Checkbox';
    static propTypes = {
        ...ConfigProvider.propTypes,
        prefix: PropTypes.string,
        rtl: PropTypes.bool,
        /**
         * 自定义类名
         */
        className: PropTypes.string,
        /**
         * checkbox id, 挂载在 input 上
         */
        id: PropTypes.string,
        /**
         * 自定义内敛样式
         */
        style: PropTypes.object,
        /**
         * 选中状态
         */
        checked: PropTypes.bool,
        /**
         * 默认选中状态
         */
        defaultChecked: PropTypes.bool,
        /**
         * 禁用
         */
        disabled: PropTypes.bool,
        /**
         * 通过属性配置 label，
         */
        label: PropTypes.node,
        /**
         * Checkbox 的中间状态，只会影响到 Checkbox 的样式，并不影响其 checked 属性
         */
        indeterminate: PropTypes.bool,
        /**
         *  Checkbox 的默认中间态，只会影响到 Checkbox 的样式，并不影响其 checked 属性
         */
        defaultIndeterminate: PropTypes.bool,
        /**
         * 状态变化时触发的事件
         * @param checked - 是否选中
         * @param e - Dom 事件对象
         */
        onChange: PropTypes.func,
        /**
         * 鼠标进入 enter 事件
         * @param e - Dom 事件对象
         */
        onMouseEnter: PropTypes.func,
        /**
         * 鼠标离开 Leave 事件
         * @param e -  Dom 事件对象
         */
        onMouseLeave: PropTypes.func,
        /**
         * checkbox 的 value
         */
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),
        /**
         * name
         */
        name: PropTypes.string,
        /**
         * 是否为预览态
         * @version 1.19
         */
        isPreview: PropTypes.bool,
        /**
         * 预览态模式下渲染的内容
         * @param checked - 是否选中
         * @param props - 所有传入的参数
         * @returns Element 渲染内容
         * @version 1.19
         */
        renderPreview: PropTypes.func,
    };

    static defaultProps = {
        defaultChecked: false,
        defaultIndeterminate: false,
        onChange: noop,
        onMouseEnter: noop,
        onMouseLeave: noop,
        prefix: 'next-',
        isPreview: false,
    };

    constructor(props: PrivateCheckboxProps) {
        super(props);
        const { context } = props;
        let checked, indeterminate;

        if ('checked' in props) {
            checked = props.checked;
        } else {
            checked = props.defaultChecked;
        }

        if ('indeterminate' in props) {
            indeterminate = props.indeterminate;
        } else {
            indeterminate = props.defaultIndeterminate;
        }
        if (context.__group__) {
            checked = isChecked(context.selectedValue, props.value);
        }
        this.state = {
            checked,
            indeterminate,
        };

        this.onChange = this.onChange.bind(this);
    }

    static getDerivedStateFromProps(nextProps: PrivateCheckboxProps) {
        const { context: nextContext } = nextProps;
        const state: CheckboxState = {};
        if (nextContext.__group__) {
            if ('selectedValue' in nextContext) {
                state.checked = isChecked(nextContext.selectedValue, nextProps.value);
            }
        } else if ('checked' in nextProps) {
            state.checked = nextProps.checked;
        }

        if ('indeterminate' in nextProps) {
            state.indeterminate = nextProps.indeterminate;
        }

        return state;
    }

    get disabled() {
        const { props } = this;
        const { context } = props;

        return props.disabled || ('disabled' in context && context.disabled);
    }

    shouldComponentUpdate(
        nextProps: PrivateCheckboxProps,
        nextState: CheckboxState,
        nextContext: CheckboxContext
    ) {
        const { shallowEqual } = obj;
        return (
            !shallowEqual(this.props, nextProps) ||
            !shallowEqual(this.state, nextState) ||
            !shallowEqual(this.context, nextContext)
        );
    }

    onChange(event: React.ChangeEvent<HTMLInputElement>) {
        const { context, value } = this.props;
        const checked = event.target.checked;

        if (this.disabled) {
            return;
        }
        if (context.__group__) {
            context.onChange(value, event);
        } else {
            if (!('checked' in this.props)) {
                this.setState({
                    checked: checked,
                });
            }

            if (!('indeterminate' in this.props)) {
                this.setState({
                    indeterminate: false,
                });
            }
            this.props.onChange?.(checked, event);
        }
    }

    render() {
        /* eslint-disable no-unused-vars */
        const {
            id,
            className,
            children,
            style,
            label,
            onMouseEnter,
            onMouseLeave,
            rtl,
            isPreview,
            renderPreview,
            context,
            value,
            name,
            ...otherProps
        } = this.props;
        const checked = !!this.state.checked;
        const disabled = this.disabled;
        const indeterminate = !!this.state.indeterminate;
        const prefix = context.prefix || this.props.prefix;

        const others = obj.pickOthers(Checkbox.propTypes, otherProps);
        const othersData = obj.pickAttrsWith(others, 'data-');
        if (otherProps.title) {
            othersData.title = otherProps.title;
        }

        let childInput = (
            <input
                {...obj.pickOthers(Checkbox.propTypes, otherProps)}
                id={id}
                value={typeof value === 'boolean' ? String(value) : value}
                name={name}
                disabled={disabled}
                checked={checked}
                type="checkbox"
                onChange={this.onChange}
                aria-checked={indeterminate ? 'mixed' : checked}
                className={`${prefix}checkbox-input`}
            />
        );

        // disable 无状态操作
        if (!disabled) {
            childInput = this.getStateElement(childInput);
        }
        const cls = classnames(className, {
            [`${prefix}checkbox-wrapper`]: true,
            checked,
            disabled,
            indeterminate,
            [this.getStateClassName()]: true,
        });
        const labelCls = `${prefix}checkbox-label`;
        const type = indeterminate ? 'semi-select' : 'select';

        if (isPreview) {
            const previewCls = classnames(className, `${prefix}form-preview`);
            if ('renderPreview' in this.props) {
                return (
                    <div
                        id={id}
                        dir={rtl ? 'rtl' : undefined}
                        {...othersData}
                        className={previewCls}
                    >
                        {renderPreview?.(checked, this.props)}
                    </div>
                );
            }

            return (
                <p id={id} dir={rtl ? 'rtl' : undefined} {...othersData} className={previewCls}>
                    {checked && (children || label || this.state.value)}
                </p>
            );
        }

        const iconCls = classnames({
            zoomIn: indeterminate,
            [`${prefix}checkbox-semi-select-icon`]: indeterminate,
            [`${prefix}checkbox-select-icon`]: !indeterminate,
        });

        return (
            <label
                {...othersData}
                className={cls}
                style={style}
                dir={rtl ? 'rtl' : undefined}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                <span className={`${prefix}checkbox`}>
                    <span className={`${prefix}checkbox-inner`}>
                        <Icon type={type} size="xs" className={iconCls} />
                    </span>
                    {childInput}
                </span>
                {[label, children].map((item: React.ReactNode | undefined | null, i) =>
                    item !== undefined && item !== null ? (
                        <span key={i} className={labelCls}>
                            {item}
                        </span>
                    ) : null
                )}
            </label>
        );
    }
}

export default ConfigProvider.config(
    withCheckboxContext(
        polyfill<React.ComponentType<PrivateCheckboxProps>>(
            Checkbox as React.ComponentType<PrivateCheckboxProps>
        )
    )
);
