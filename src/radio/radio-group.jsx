import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import ConfigProvider from '../config-provider';
import { obj } from '../util';
import Radio from './radio';

const { pickOthers } = obj;

/**
 * Radio.Group
 * @order 2
 */
class RadioGroup extends Component {

    static propTypes = {
        /**
         * 样式类名的品牌前缀
         */
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
        shape: PropTypes.oneOf(['button']),
        /**
         * 与 `shape` 属性配套使用，shape设为button时有效
         * @enumdesc 大, 中, 小
         */
        size: PropTypes.oneOf(['large', 'medium', 'small']),
        /**
         * 可选项列表, 数据项可为 String 或者 Object, 如 `['apple', 'pear', 'orange']`
         */
        dataSource: PropTypes.arrayOf(PropTypes.any),
        /**
         * 通过子元素方式设置内部radio
         */
        children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element), PropTypes.element]),

        /**
         * 子项目的排列方式
         * - hoz: 水平排列 (default)
         * - ver: 垂直排列
         */
        itemDirection: PropTypes.oneOf([
            'hoz',
            'ver'
        ])
    }

    static defaultProps = {
        dataSource: [],
        size: 'medium',
        onChange: () => {
        },
        prefix: 'next-',
        component: 'div',
        itemDirection: 'hoz'
    }

    static childContextTypes = {
        onChange: PropTypes.func,
        __group__: PropTypes.bool,
        isButton: PropTypes.bool,
        selectedValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),
        disabled: PropTypes.bool
    }

    constructor(props) {
        super(props);
        let value = '';
        if ('value' in props) {
            value = props.value;
        } else if ('defaultValue' in props) {
            value = props.defaultValue;
        }
        this.state = {value};
        this.onChange = this.onChange.bind(this);
    }

    getChildContext() {
        return {
            __group__: true,
            isButton: this.props.shape === 'button',
            onChange: this.onChange,
            selectedValue: this.state.value,
            disabled: this.props.disabled
        };
    }

    componentWillReceiveProps(nextProps) {
        let {value} = nextProps;
        if ('value' in nextProps) {
            if (value === undefined) {
                value = '';
            }
            this.setState({
                value
            });
        }
    }

    onChange(currentValue, e) {
        if (!('value' in this.props)) {
            this.setState({value: currentValue});
        }
        if (currentValue !== this.state.value) {
            this.props.onChange(currentValue, e);
        }
    }

    render() {
        const { rtl, className, shape, size, style, prefix, itemDirection, component } = this.props;
        const others = pickOthers(Object.keys(RadioGroup.propTypes), this.props);
        const disabled = this.props.disabled;

        if (rtl) {
            others.dir = 'rtl';
        }

        let children;
        if (this.props.children) {
            children = this.props.children;
        } else {
            children = this.props.dataSource.map((item, index) => {
                let option = item;
                if (typeof item !== 'object') {
                    option = {
                        label: item,
                        value: item,
                        disabled
                    };
                }
                const checked = this.state.value === option.value;
                return (<Radio
                    key={index}
                    tabIndex={((index === 0 && !this.state.value) || checked) ? 0 : -1}
                    value={option.value}
                    checked={checked}
                    label={option.label}
                    disabled={disabled || option.disabled}
                />);
            });
        }

        const isButtonShape = shape === 'button';

        const cls = classnames({
            [`${prefix}radio-group`]: true,
            [`${prefix}radio-group-${itemDirection}`]: !isButtonShape,
            [`${prefix}radio-button`]: isButtonShape,
            [`${prefix}radio-button-${size}`]: isButtonShape,
            [className]: !!className,
            disabled
        });

        const TagName = component;
        return <TagName {...others} aria-disabled={disabled} role="radiogroup" className={cls} style={style}>{children}</TagName>;
    }
}

export default ConfigProvider.config(RadioGroup);
