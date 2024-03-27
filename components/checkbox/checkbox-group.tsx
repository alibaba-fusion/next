import * as React from 'react';
import * as PropTypes from 'prop-types';
import classnames from 'classnames';
import { polyfill } from 'react-lifecycles-compat';
import { obj } from '../util';
import Checkbox from './checkbox';
import type { CheckboxData, GroupProps, GroupState, ValueItem } from './types';

const { pickOthers } = obj;

/** Checkbox.Group */
class CheckboxGroup extends React.Component<GroupProps, GroupState> {
    static propTypes = {
        prefix: PropTypes.string,
        rtl: PropTypes.bool,
        className: PropTypes.string,
        style: PropTypes.object,
        disabled: PropTypes.bool,
        dataSource: PropTypes.oneOfType([
            PropTypes.arrayOf(PropTypes.string),
            PropTypes.arrayOf(PropTypes.object),
        ]),
        value: PropTypes.oneOfType([
            PropTypes.array,
            PropTypes.string,
            PropTypes.number,
            PropTypes.bool,
        ]),
        defaultValue: PropTypes.oneOfType([
            PropTypes.array,
            PropTypes.string,
            PropTypes.number,
            PropTypes.bool,
        ]),
        children: PropTypes.arrayOf(PropTypes.element),
        onChange: PropTypes.func,
        direction: PropTypes.oneOf(['hoz', 'ver']),
        isPreview: PropTypes.bool,
        renderPreview: PropTypes.func,
    };

    static defaultProps = {
        dataSource: [],
        onChange: () => {},
        prefix: 'next-',
        direction: 'hoz',
        isPreview: false,
    };

    static childContextTypes = {
        onChange: PropTypes.func,
        __group__: PropTypes.bool,
        selectedValue: PropTypes.array,
        disabled: PropTypes.bool,
    };

    constructor(props: GroupProps) {
        super(props);

        let value: GroupProps['value'] = [];
        if ('value' in props) {
            value = props.value;
        } else if ('defaultValue' in props) {
            value = props.defaultValue;
        }
        if (!Array.isArray(value)) {
            if (value === null || value === undefined) {
                value = [];
            } else {
                value = [value];
            }
        }
        this.state = {
            value: [...value],
        };

        this.onChange = this.onChange.bind(this);
    }

    getChildContext() {
        return {
            __group__: true,
            onChange: this.onChange,
            selectedValue: this.state.value,
            disabled: this.props.disabled,
        };
    }

    static getDerivedStateFromProps(nextProps: GroupProps) {
        if ('value' in nextProps) {
            let { value } = nextProps;
            if (!Array.isArray(value)) {
                if (value === null || value === undefined) {
                    value = [];
                } else {
                    value = [value];
                }
            }
            return { value };
        }

        return null;
    }

    onChange(currentValue: ValueItem, event: React.ChangeEvent<HTMLInputElement>) {
        const { value } = this.state;
        const index = value.indexOf(currentValue);
        const valTemp = [...value];

        if (index === -1) {
            valTemp.push(currentValue);
        } else {
            valTemp.splice(index, 1);
        }

        if (!('value' in this.props)) {
            this.setState({ value: valTemp });
        }
        this.props.onChange?.(valTemp, event);
    }

    render() {
        const { className, style, prefix, disabled, direction, rtl, isPreview, renderPreview } =
            this.props;
        const others = pickOthers(CheckboxGroup.propTypes, this.props);

        // 如果内嵌标签跟 dataSource 同时存在，以内嵌标签为主
        let children;
        const previewed: {
            label: string | React.ReactNode;
            value: string | React.ReactNode;
        }[] = [];
        if (this.props.children) {
            children = React.Children.map(this.props.children, child => {
                if (
                    !React.isValidElement<{
                        value: ValueItem;
                        children?: string;
                        rtl?: boolean;
                    }>(child)
                ) {
                    return child;
                }
                const checked =
                    this.state.value && this.state.value.indexOf(child.props?.value) > -1;

                if (checked) {
                    previewed.push({
                        label: child.props?.children,
                        value: child.props?.value,
                    });
                }

                return React.cloneElement(child, child.props?.rtl === undefined ? { rtl } : {});
            });
        } else {
            children = this.props.dataSource?.map((item, index) => {
                let option: CheckboxData;
                if (typeof item !== 'object') {
                    option = {
                        label: item,
                        value: item,
                        disabled,
                    };
                } else {
                    option = item;
                }
                const checked = this.state.value && this.state.value.indexOf(option.value) > -1;

                if (checked) {
                    previewed.push({
                        label: option.label,
                        value: option.value,
                    });
                }

                return (
                    <Checkbox
                        key={index}
                        value={option.value}
                        checked={checked}
                        rtl={rtl}
                        disabled={disabled || option.disabled}
                        label={option.label}
                    />
                );
            });
        }

        if (isPreview) {
            const previewCls = classnames(className, `${prefix}form-preview`);

            if ('renderPreview' in this.props) {
                return (
                    <div {...others} dir={rtl ? 'rtl' : undefined} className={previewCls}>
                        {renderPreview?.(previewed, this.props)}
                    </div>
                );
            }

            return (
                <p {...others} dir={rtl ? 'rtl' : undefined} className={previewCls}>
                    {previewed.map(item => item.label).join(', ')}
                </p>
            );
        }

        const cls = classnames(className, {
            [`${prefix}checkbox-group`]: true,
            [`${prefix}checkbox-group-${direction}`]: true,
            disabled,
        });

        return (
            <span dir={rtl ? 'rtl' : undefined} {...others} className={cls} style={style}>
                {children}
            </span>
        );
    }
}

export default polyfill(CheckboxGroup);
