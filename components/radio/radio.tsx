import React, { type ChangeEvent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { polyfill } from 'react-lifecycles-compat';
import UIState, { type UIStateState } from '../mixin-ui-state';
import ConfigProvider from '../config-provider';
import withContext from './with-context';
import { obj, func } from '../util';
import type { RadioContext, RadioWithContextProps } from './types';

const { makeChain, noop } = func;

interface RadioState extends UIStateState {
    checked?: boolean;
}

class Radio extends UIState<RadioWithContextProps, RadioState> {
    static displayName = 'Radio';
    static propTypes = {
        ...ConfigProvider.propTypes,
        className: PropTypes.string,
        id: PropTypes.string,
        style: PropTypes.object,
        checked: PropTypes.bool,
        defaultChecked: PropTypes.bool,
        label: PropTypes.node,
        onChange: PropTypes.func,
        onMouseEnter: PropTypes.func,
        onMouseLeave: PropTypes.func,
        disabled: PropTypes.bool,
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),
        name: PropTypes.string,
        isPreview: PropTypes.bool,
        renderPreview: PropTypes.func,
    };

    static defaultProps = {
        onChange: noop,
        onMouseLeave: noop,
        onMouseEnter: noop,
        tabIndex: 0,
        prefix: 'next-',
        isPreview: false,
    };

    static contextTypes = {
        onChange: PropTypes.func,
        __group__: PropTypes.bool,
        isButton: PropTypes.bool,
        selectedValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),
        disabled: PropTypes.bool,
    };

    static getDerivedStateFromProps(nextProps: RadioWithContextProps) {
        const { context: nextContext } = nextProps;

        if (nextContext.__group__ && 'selectedValue' in nextContext) {
            return {
                checked: nextContext.selectedValue === nextProps.value,
            };
        } else if ('checked' in nextProps) {
            return {
                checked: nextProps.checked,
            };
        }

        return null;
    }

    radioRef: HTMLInputElement | null;

    constructor(props: RadioWithContextProps) {
        super(props);
        const { context } = props;
        let checked;
        if (context.__group__) {
            checked = context.selectedValue === props.value;
        } else if ('checked' in props) {
            checked = props.checked;
        } else {
            checked = props.defaultChecked;
        }

        this.state = { checked };

        this.radioRef = null;

        this.onChange = this.onChange.bind(this);
    }

    get disabled() {
        const { props } = this;
        const { context } = props;

        const disabled =
            props.disabled || (context.__group__ && 'disabled' in context && context.disabled);

        return disabled;
    }

    shouldComponentUpdate(
        nextProps: RadioWithContextProps,
        nextState: RadioState,
        nextContext: RadioContext
    ) {
        const { shallowEqual } = obj;
        return (
            !shallowEqual(this.props, nextProps) ||
            !shallowEqual(this.state, nextState) ||
            !shallowEqual(this.context, nextContext)
        );
    }

    componentDidUpdate() {
        // when disabled, reset UIState
        if (this.disabled) {
            // only class has an impact, no effect on visual
            this.resetUIState();
        }
    }

    onChange(e: ChangeEvent<HTMLInputElement>) {
        const checked = e.target.checked;
        const { context, value } = this.props;

        if (context.__group__) {
            context.onChange(value!, e);
        } else if (this.state.checked !== checked) {
            if (!('checked' in this.props)) {
                this.setState({
                    checked: checked,
                });
            }
            this.props.onChange!(checked, e);
        }
    }

    focus() {
        if (this.radioRef) {
            this.radioRef.focus();
            this._onUIFocus();
        }
    }

    render() {
        const {
            id,
            className,
            children,
            style,
            label,
            onMouseEnter,
            onMouseLeave,
            tabIndex,
            rtl,
            name,
            isPreview,
            renderPreview,
            value,
            context,
            ...otherProps
        } = this.props;
        const checked = !!this.state.checked;
        const disabled = this.disabled;
        const isButton = context.isButton;
        const prefix = this.props.prefix;

        const others = obj.pickOthers(Radio.propTypes, otherProps);
        const othersData = obj.pickAttrsWith(others, 'data-') as Record<`data-${string}`, unknown>;

        if (isPreview) {
            const previewCls = classnames(className, `${prefix}form-preview`);

            if ('renderPreview' in this.props) {
                return (
                    <div id={id} dir={rtl ? 'rtl' : 'ltr'} {...others} className={previewCls}>
                        {renderPreview!(checked, this.props)}
                    </div>
                );
            }

            return (
                <p id={id} dir={rtl ? 'rtl' : 'ltr'} {...others} className={previewCls}>
                    {checked && (children || label || value)}
                </p>
            );
        }
        let input = (
            <input
                {...obj.pickOthers(othersData, others)}
                name={name}
                id={id}
                tabIndex={tabIndex}
                disabled={disabled}
                checked={checked}
                type="radio"
                onChange={this.onChange}
                aria-checked={checked}
                className={`${prefix}radio-input`}
                ref={e => {
                    this.radioRef = e;
                }}
            />
        );

        // disabled do not hove focus state
        if (!disabled) {
            input = this.getStateElement(input);
        }

        const cls = classnames({
            [`${prefix}radio`]: true,
            checked,
            disabled,
            [this.getStateClassName()]: true,
        });
        const clsInner = classnames({
            [`${prefix}radio-inner`]: true,
            press: checked,
            unpress: !checked,
        });
        const clsWrapper = classnames(className, {
            [`${prefix}radio-wrapper`]: true,
            checked,
            disabled,
            [this.getStateClassName()]: true,
        });
        const childrenCls = `${prefix}radio-label`;

        const radioComp = !isButton ? (
            <span className={cls}>
                <span className={clsInner} />
                {input}
            </span>
        ) : (
            <span className={`${prefix}radio-single-input`}>{input}</span>
        );

        return (
            <label
                {...othersData}
                dir={rtl ? 'rtl' : 'ltr'}
                style={style}
                aria-checked={checked}
                aria-disabled={disabled}
                className={clsWrapper}
                onMouseEnter={
                    // @ts-expect-error _onUIMouseEnter is not defined
                    disabled ? onMouseEnter : makeChain(this._onUIMouseEnter, onMouseEnter)
                }
                onMouseLeave={
                    // @ts-expect-error _onUIMouseLeave is not defined
                    disabled ? onMouseLeave : makeChain(this._onUIMouseLeave, onMouseLeave)
                }
            >
                {radioComp}
                {[children, label].map((d, i) =>
                    d !== undefined ? (
                        <span key={i} className={childrenCls}>
                            {d}
                        </span>
                    ) : null
                )}
            </label>
        );
    }
}

export type { Radio };

export default ConfigProvider.config(withContext(polyfill(Radio)));
