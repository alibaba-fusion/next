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
        className: PropTypes.string,
        id: PropTypes.string,
        style: PropTypes.object,
        checked: PropTypes.bool,
        defaultChecked: PropTypes.bool,
        disabled: PropTypes.bool,
        label: PropTypes.node,
        indeterminate: PropTypes.bool,
        defaultIndeterminate: PropTypes.bool,
        onChange: PropTypes.func,
        onMouseEnter: PropTypes.func,
        onMouseLeave: PropTypes.func,
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),
        name: PropTypes.string,
        isPreview: PropTypes.bool,
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
        const othersData = obj.pickAttrsWith(others, 'data-') as ReturnType<
            typeof obj.pickAttrsWith<typeof others, 'data-'>
        > & { title?: string };
        if (otherProps.title) {
            othersData.title = otherProps.title;
        }

        let childInput = (
            <input
                {...obj.pickOthers(Checkbox.propTypes, otherProps)}
                id={id}
                value={value as string}
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
    withCheckboxContext(polyfill(Checkbox) as React.ComponentType<PrivateCheckboxProps>)
);
