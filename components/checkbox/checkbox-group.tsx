import * as React from 'react';
import * as PropTypes from 'prop-types';
import classnames from 'classnames';
import { polyfill } from 'react-lifecycles-compat';
import { obj } from '../util';
import Checkbox from './checkbox';
import type { CheckboxData, GroupProps } from './types';
import { clone } from 'lodash';

const { pickOthers } = obj;

interface GroupState<T extends string | number | boolean> {
    value: T[];
}

/** Checkbox.Group */
class CheckboxGroup<T extends string | number | boolean> extends React.Component<
    GroupProps<T>,
    GroupState<T>
> {
    static propTypes = {
        prefix: PropTypes.string,
        rtl: PropTypes.bool,
        /**
         * 自定义类名
         */
        className: PropTypes.string,
        /**
         * 自定义内敛样式
         */
        style: PropTypes.object,
        /**
         * 整体禁用
         */
        disabled: PropTypes.bool,
        /**
         * 可选项列表, 数据项可为 String 或者 Object, 如 `['apple', 'pear', 'orange']` 或者 `[{value: 'apple', label: '苹果',}, {value: 'pear', label: '梨'}, {value: 'orange', label: '橙子'}]`
         */
        dataSource: PropTypes.oneOfType([
            PropTypes.arrayOf(PropTypes.string),
            PropTypes.arrayOf(PropTypes.object),
        ]),
        /**
         * 被选中的值列表
         */
        value: PropTypes.oneOfType([
            PropTypes.array,
            PropTypes.string,
            PropTypes.number,
            PropTypes.bool,
        ]),
        /**
         * 默认被选中的值列表
         */
        defaultValue: PropTypes.oneOfType([
            PropTypes.array,
            PropTypes.string,
            PropTypes.number,
            PropTypes.bool,
        ]),
        /**
         * 通过子元素方式设置内部 checkbox
         */
        children: PropTypes.arrayOf(PropTypes.element),
        /**
         * 选中值改变时的事件
         * @param {Array} value 选中项列表
         * @param {Event} e Dom 事件对象
         */
        onChange: PropTypes.func,

        /**
         * 子项目的排列方式
         * - hoz: 水平排列 (default)
         * - ver: 垂直排列
         */
        direction: PropTypes.oneOf(['hoz', 'ver']),
        /**
         * 是否为预览态
         * @version 1.19
         */
        isPreview: PropTypes.bool,
        /**
         * 预览态模式下渲染的内容
         * @param {Array} previewed 预览值 [{label: '', value:''},...]
         * @param {Object} props 所有传入的参数
         * @returns {reactNode} Element 渲染内容
         * @version 1.19
         */
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

    constructor(props: GroupProps<T>) {
        super(props);

        let value: GroupProps<T>['value'] = [];
        let formatValue: GroupState<T>['value'] = [];
        if ('value' in props) {
            value = props.value;
        } else if ('defaultValue' in props) {
            value = props.defaultValue;
        }
        if (!Array.isArray(value)) {
            if (value === null || value === undefined) {
                formatValue = [];
            } else if (typeof value === 'string') {
                formatValue = [value];
            } else if (typeof value === 'number') {
                formatValue = [value];
            } else if (typeof value === 'boolean') {
                formatValue = [value];
            }
        } else {
            formatValue = value;
        }
        this.state = {
            value: formatValue,
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

    static getDerivedStateFromProps<T extends string | number | boolean>(nextProps: GroupProps<T>) {
        if ('value' in nextProps) {
            let { value } = nextProps;
            let formatValue: GroupState<T>['value'] = [];
            if (!Array.isArray(value)) {
                if (value === null || value === undefined) {
                    formatValue = [];
                } else if (typeof value === 'string') {
                    formatValue = [value];
                } else if (typeof value === 'number') {
                    formatValue = [value];
                } else if (typeof value === 'boolean') {
                    formatValue = [value];
                }
            } else {
                formatValue = value;
            }

            return { value: formatValue };
        }

        return null;
    }

    onChange(currentValue: T, event: React.ChangeEvent<HTMLInputElement>) {
        const { value } = this.state;
        const index = value.indexOf(currentValue);
        const valTemp = clone(value);

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

        // 如果内嵌标签跟dataSource同时存在，以内嵌标签为主
        let children;
        const previewed: {
            label: string | React.ReactNode;
            value: string | React.ReactNode;
        }[] = [];
        if (this.props.children) {
            children = React.Children.map(
                this.props.children,
                (
                    child: React.ReactElement<{
                        value: T;
                        children?: string;
                        rtl?: boolean;
                    }>
                ) => {
                    if (!React.isValidElement(child)) {
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
                }
            );
        } else {
            children = this.props.dataSource?.map((item, index) => {
                let option: CheckboxData<T>;
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

export default polyfill<React.ComponentType<GroupProps>>(
    CheckboxGroup as React.ComponentType<GroupProps>
);
