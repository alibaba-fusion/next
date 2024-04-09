import React, { Component, type ChangeEvent, type ReactNode } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { polyfill } from 'react-lifecycles-compat';
import ConfigProvider from '../config-provider';
import { obj, func, focus } from '../util';
import Radio from './radio';
import type {
    GroupChildProps,
    GroupProps,
    RadioValue,
    RadioValueItem,
    WrappedRadio,
} from './types';
import type { ConfiguredComponent } from '../config-provider/types';

const { makeChain } = func;
const { focusRef } = focus;
const { pickOthers } = obj;

export interface GroupState {
    value: RadioValue | undefined;
}

class RadioGroup extends Component<GroupProps, GroupState> {
    static propTypes = {
        ...ConfigProvider.propTypes,
        prefix: PropTypes.string,
        className: PropTypes.string,
        style: PropTypes.object,
        name: PropTypes.string,
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),
        defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),
        component: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
        onChange: PropTypes.func,
        disabled: PropTypes.bool,
        shape: PropTypes.oneOf(['normal', 'button']),
        size: PropTypes.oneOf(['large', 'medium', 'small']),
        dataSource: PropTypes.oneOfType([
            PropTypes.arrayOf(PropTypes.string),
            PropTypes.arrayOf(PropTypes.object),
        ]),
        children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element), PropTypes.element]),
        direction: PropTypes.oneOf(['hoz', 'ver']),
        isPreview: PropTypes.bool,
        renderPreview: PropTypes.func,
    };

    static defaultProps = {
        dataSource: [],
        size: 'medium',
        onChange: () => {},
        prefix: 'next-',
        component: 'div',
        direction: 'hoz',
        isPreview: false,
    };

    static childContextTypes = {
        onChange: PropTypes.func,
        __group__: PropTypes.bool,
        isButton: PropTypes.bool,
        selectedValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),
        disabled: PropTypes.bool,
    };

    radioRefs: unknown[];
    hasFocus: boolean;

    constructor(props: GroupProps) {
        super(props);
        let value: RadioValue | undefined = '';
        if ('value' in props) {
            value = props.value;
        } else if ('defaultValue' in props) {
            value = props.defaultValue;
        }

        // The reference for the first Radio and for the selected Radio.
        this.radioRefs = [];
        this.hasFocus = false;

        this.state = { value };
        this.onChange = this.onChange.bind(this);
    }

    static getDerivedStateFromProps(props: GroupProps, state: GroupState) {
        if ('value' in props && props.value !== state.value) {
            return {
                value: props.value,
            };
        }

        return null;
    }

    getChildContext() {
        const { disabled } = this.props;

        return {
            __group__: true,
            isButton: this.props.shape === 'button',
            onChange: this.onChange,
            selectedValue: this.state.value,
            disabled: disabled,
        };
    }

    onChange(currentValue: RadioValue, e: ChangeEvent<HTMLInputElement>) {
        if (!('value' in this.props)) {
            this.setState({ value: currentValue });
        }
        if (currentValue !== this.state.value) {
            this.props.onChange!(currentValue, e);
        }
    }

    focus() {
        if (!this.hasFocus) {
            const availableRef = this.radioRefs.filter(ref => {
                if (ref) {
                    return !(ref as WrappedRadio).props.disabled;
                }
                return false;
            }) as WrappedRadio[];
            const radioRef = availableRef.find(ref => {
                if (ref) {
                    return ref.props.checked;
                }
                return false;
            });
            if (radioRef) {
                focusRef(radioRef);
            } else if (availableRef.length > 0) {
                focusRef(availableRef[0]);
            }
        }
    }

    saveRadioRef = (el: unknown, index: number) => {
        if (el && typeof (el as ConfiguredComponent<unknown, unknown>).getInstance === 'function') {
            const radio = (el as ConfiguredComponent<unknown, unknown>).getInstance();
            this.radioRefs[index] = radio;
        }
    };

    render() {
        const {
            rtl,
            className,
            disabled,
            shape,
            size,
            style,
            prefix,
            direction,
            component,
            isPreview,
            renderPreview,
        } = this.props;
        const others = pickOthers(RadioGroup.propTypes, this.props);

        if (rtl) {
            others.dir = 'rtl';
        }

        let children;
        const previewed: { label?: ReactNode; value?: RadioValue } = {};
        this.radioRefs = [];
        if (this.props.children) {
            children = React.Children.map(this.props.children, (child, index) => {
                if (!React.isValidElement<GroupChildProps>(child)) {
                    return child;
                }
                const checked = this.state.value === child.props.value;
                if (checked) {
                    previewed.label = child.props.children;
                    previewed.value = child.props.value;
                }
                const tabIndex = (index === 0 && !this.state.value) || checked ? 0 : -1;
                const childrtl = child.props.rtl === undefined ? rtl : child.props.rtl;
                if (child.type && (child.type as typeof Radio).displayName === 'Config(Radio)') {
                    return React.cloneElement(child, {
                        checked,
                        tabIndex,
                        rtl: childrtl,
                        ref: (e: InstanceType<typeof Radio>) => {
                            this.saveRadioRef(e, index);
                        },
                    });
                }
                return React.cloneElement(child, {
                    checked,
                    rtl: childrtl,
                    ref: (e: unknown) => {
                        this.saveRadioRef(e, index);
                    },
                });
            });
        } else {
            children = this.props.dataSource!.map((item, index) => {
                let option: RadioValueItem;
                if (typeof item !== 'object') {
                    option = {
                        label: item,
                        value: item,
                        disabled,
                    };
                } else {
                    option = item;
                }
                const checked = this.state.value === option.value;
                if (checked) {
                    previewed.label = option.label;
                    previewed.value = option.value;
                }
                return (
                    <Radio
                        key={index}
                        tabIndex={(index === 0 && !this.state.value) || checked ? 0 : -1}
                        value={option.value}
                        checked={checked}
                        label={option.label}
                        disabled={disabled || option.disabled}
                        ref={e => {
                            this.saveRadioRef(e, index);
                        }}
                    />
                );
            });
        }
        if (isPreview) {
            const previewCls = classnames(className, `${prefix}form-preview`);

            if ('renderPreview' in this.props) {
                return (
                    <div {...others} className={previewCls}>
                        {renderPreview!(previewed, this.props)}
                    </div>
                );
            }

            return (
                <p {...others} className={previewCls}>
                    {previewed.label}
                </p>
            );
        }

        const isButtonShape = shape === 'button';

        const cls = classnames(className, {
            [`${prefix}radio-group`]: true,
            [`${prefix}radio-group-${direction}`]: !isButtonShape,
            [`${prefix}radio-button`]: isButtonShape,
            [`${prefix}radio-button-${size}`]: isButtonShape,
            disabled,
        });

        const TagName = component!;
        return (
            <TagName
                {...others}
                aria-disabled={disabled}
                role="radiogroup"
                className={cls}
                style={style}
                onFocus={makeChain(
                    function () {
                        this.hasFocus = true;
                    }.bind(this),
                    this.props.onFocus
                )}
                onBlur={makeChain(
                    function () {
                        this.hasFocus = false;
                    }.bind(this),
                    this.props.onBlur
                )}
            >
                {children}
            </TagName>
        );
    }
}

export type { RadioGroup };

export default polyfill(RadioGroup);
