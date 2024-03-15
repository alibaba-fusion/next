import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { polyfill } from 'react-lifecycles-compat';
import ConfigProvider from '../config-provider';
import { obj, func, focus } from '../util';
import Radio from './radio';

const { makeChain } = func;
const { focusRef } = focus;
const { pickOthers } = obj;

/**
 * Radio.Group
 * @order 2
 */
class RadioGroup extends Component {
    static propTypes = {
        ...ConfigProvider.propTypes,
        /**
         * 样式类名的品牌前缀
         */
        prefix: PropTypes.string,
        /**
         * 自定义类名
         */
        className: PropTypes.string,
        /**
         * 自定义内敛样式
         */
        style: PropTypes.object,
        /**
         * name
         */
        name: PropTypes.string,
        /**
         * radio group的选中项的值
         */
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),
        /**
         * radio group的默认值
         */
        defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),
        /**
         * 设置标签类型
         */
        component: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
        /**
         * 选中值改变时的事件
         * @param {String/Number} value 选中项的值
         * @param {Event} e Dom 事件对象
         */
        onChange: PropTypes.func,
        /**
         * 表示radio被禁用
         */
        disabled: PropTypes.bool,
        /**
         * 可以设置成 button 展示形状
         * @enumdesc 按钮状
         */
        shape: PropTypes.oneOf(['normal', 'button']),
        /**
         * 与 `shape` 属性配套使用，shape设为button时有效
         * @enumdesc 大, 中, 小
         */
        size: PropTypes.oneOf(['large', 'medium', 'small']),
        /**
         * 可选项列表, 数据项可为 String 或者 Object, 如 `['apple', 'pear', 'orange']` `[{label: 'apply', value: 'apple'}]`
         */
        dataSource: PropTypes.oneOfType([
            PropTypes.arrayOf(PropTypes.string),
            PropTypes.arrayOf(PropTypes.object),
        ]),
        /**
         * 通过子元素方式设置内部radio
         */
        children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element), PropTypes.element]),

        /**
         * 子项目的排列方式
         * - hoz: 水平排列 (default)
         * - ver: 垂直排列
         */
        direction: PropTypes.oneOf(['hoz', 'ver']),
        /**
         * 是否为预览态
         */
        isPreview: PropTypes.bool,
        /**
         * 预览态模式下渲染的内容
         * @param {Object} previewed 预览值：{label: "", value: ""}
         * @param {Object} props 所有传入的参数
         * @returns {reactNode} Element 渲染内容
         */
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

    constructor(props) {
        super(props);
        let value = '';
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

    static getDerivedStateFromProps(props, state) {
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

    onChange(currentValue, e) {
        if (!('value' in this.props)) {
            this.setState({ value: currentValue });
        }
        if (currentValue !== this.state.value) {
            this.props.onChange(currentValue, e);
        }
    }

    focus() {
        if (!this.hasFocus) {
            const availableRef = this.radioRefs.filter(ref => {
                if (ref) {
                    return !ref.props.disabled;
                }
                return false;
            });
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

    saveRadioRef = (el, index) => {
        if (el && typeof el.getInstance === 'function') {
            const radio = el.getInstance();
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
        const others = pickOthers(Object.keys(RadioGroup.propTypes), this.props);

        if (rtl) {
            others.dir = 'rtl';
        }

        let children;
        const previewed = {};
        this.radioRefs = [];
        if (this.props.children) {
            children = React.Children.map(this.props.children, (child, index) => {
                if (!React.isValidElement(child)) {
                    return child;
                }
                const checked = this.state.value === child.props.value;
                if (checked) {
                    previewed.label = child.props.children;
                    previewed.value = child.props.value;
                }
                const tabIndex = (index === 0 && !this.state.value) || checked ? 0 : -1;
                const childrtl = child.props.rtl === undefined ? rtl : child.props.rtl;
                if (child.type && child.type.displayName === 'Config(Radio)') {
                    return React.cloneElement(child, {
                        checked,
                        tabIndex,
                        rtl: childrtl,
                        ref: e => {
                            this.saveRadioRef(e, index);
                        },
                    });
                }
                return React.cloneElement(child, {
                    checked,
                    rtl: childrtl,
                    ref: e => {
                        this.saveRadioRef(e, index);
                    },
                });
            });
        } else {
            children = this.props.dataSource.map((item, index) => {
                let option = item;
                if (typeof item !== 'object') {
                    option = {
                        label: item,
                        value: item,
                        disabled,
                    };
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
        // Reset the ref if children is unavailable.
        if (children.length === 0) {
            this.firstRef = null;
        }
        if (!previewed.value) {
            this.selectedRef = null;
        }
        if (isPreview) {
            const previewCls = classnames(className, `${prefix}form-preview`);

            if ('renderPreview' in this.props) {
                return (
                    <div {...others} className={previewCls}>
                        {renderPreview(previewed, this.props)}
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

        const cls = classnames({
            [`${prefix}radio-group`]: true,
            [`${prefix}radio-group-${direction}`]: !isButtonShape,
            [`${prefix}radio-button`]: isButtonShape,
            [`${prefix}radio-button-${size}`]: isButtonShape,
            [className]: !!className,
            disabled,
        });

        const TagName = component;
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

export default polyfill(RadioGroup);
